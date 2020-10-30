import React, {ChangeEvent, useRef, useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import {Button, ButtonProps} from './Button';
import {OnOff} from "../components/OnOff/OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'input',
    //component: OnOff,

}

export const UncontrolledInput = () => <input/>;

export const TrackValueOffUncontrolledInput = () => {
    const [value, setValue] = useState("")

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
        return <><input value={value} onChange={onChange}/>{value}</>;
    }
}

export const ControlledInputFixedValue = () => <input value="hkjjjjk"/>;

export const GetValueOffUncontrolledInputByButtonPress = () => {
        const [value, setValue] = useState("")

        const inputRef = useRef<HTMLInputElement>(null);

        const onClick = () => {
            const el = inputRef.current as HTMLInputElement
            setValue(el.value);
        }

        return <><input ref={inputRef}/>
            <button onClick={onClick}>save</button>
            {value}</>;
    }

export  const ControlledInput = () =>{
    const [parentValue,setParentValue]=useState("");
    const onChange = (e:ChangeEvent<HTMLInputElement>)=>setParentValue(e.currentTarget.value)
    return <input value={parentValue} onChange={onChange}/>
}

export  const ControlledCheckBox = () =>{
    const [parentValue,setParentValue]=useState(true);
    const onChange = (e:ChangeEvent<HTMLInputElement>)=>setParentValue(e.currentTarget.checked)
    return <input type="checkbox" checked={parentValue}  onChange={onChange}/>
}

export  const ControlledSelect= () =>{
    const [parentValue,setParentValue]=useState<string | undefined>(undefined);
    const onChange = (e:ChangeEvent<HTMLSelectElement>)=>setParentValue(e.currentTarget.value)
    return <select onChange={onChange}>
        <option>Nono</option>
        <option value="1">Minsk</option>
        <option value="2">Zhodino</option>
    </select>
}
