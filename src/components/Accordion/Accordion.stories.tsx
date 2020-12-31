import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import {Accordion, AccordionPropsType} from './Accordion';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion stories',
    component: Accordion,
};
const callback = action("Accordion");
const onClickCallback = action("Somme item was clicked");

export const MenuCollapsedMode = () => <Accordion titleValue={"Hello"} collapsed={true} onChange={callback} items={[]} onClick={onClickCallback}/>
export const UserUnCollapsedMode = () => <Accordion titleValue={"Good"} collapsed={false} onChange={callback} items={[{title: "Dima", value: 1},{title: "Vitya", value: 2},{title: "Tema", value: 3}]} onClick={onClickCallback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)} items={[
        {title: "Dima", value: 1},
        {title: "Vitya", value: 2},
        {title: "Tema", value: 3}]} onClick={(value)=>{alert(`user with ID ${value} should be happy`)}}/>
}


