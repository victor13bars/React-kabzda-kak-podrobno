import React, {useMemo, useState} from "react";
import {Select} from "../components/Select/Select";
import {defaultInputValue} from "../components/UnControlledOnOff/UnControlledOnOff.stories";

export default {
    title: "SelectMemo",
}
type CityType = {
    value: string
    title: string
    country: string
    countPeople: number
}
type CityesType = {
    value?: any
    onChange: (value: any) => void
    items: Array<CityType>
}
 const WithValue1 = (props: CityesType) => {
    console.log(props.items)

    return <div>
        <Select onChange={props.onChange} value={props.value}
                items={props.items}/>
    </div>

}
 const WithValue2 = (props: CityesType) => {
    console.log(props.items)

    return <div>
        <Select onChange={props.onChange} value={props.value}
                items={props.items}/>
    </div>

}
 const WithValue3 = (props: CityesType) => {
    console.log(props.items)

    return <div>
        <Select onChange={props.onChange} value={props.value}
                items={props.items}/>
    </div>

}

const ExampleMemo1 = React.memo(WithValue1);
const ExampleMemo2 = React.memo(WithValue2);
const ExampleMemo3 = React.memo(WithValue3);

export const HelpsToReactMemo = () => {
    const [value, setValue] = useState("1");
    const [counter, setCounter] = useState(0);
    const [cityes, setCityes] = useState([
        {value: "1", title: "Minsk", country: "Belarus", countPeople: 120},
        {value: "2", title: "Gomel", country: "Belarus", countPeople: 20},
        {value: "3", title: "Moscow", country: "Russia", countPeople: 150},
        {value: "4", title: "Cheliaba", country: "Russia", countPeople: 90}]);

    const newArray = useMemo(() => {
        return cityes.filter(c => c.country.toLowerCase().indexOf("b") > -1)
    }, [cityes])

    const newArray2 = useMemo(() => {
        return cityes.filter(c => c.country.indexOf("R") > -1)
    }, [cityes])

    const newArray3 = useMemo(() => {
        return cityes.filter(c => c.countPeople > 100)
    }, [cityes])
    // const addUser = () => {
    //     const newUsers = [...users, "Sveta" + new Date().getTime()]
    //
    //     setUsers(newUsers);
    // }
    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {/*<button onClick={addUser}>add user</button>*/}
        {counter}
        <ExampleMemo1 items={newArray} onChange={setValue} value={value}/>
        <ExampleMemo2 items={newArray2} onChange={setValue} value={value}/>
        <ExampleMemo3 items={newArray3} onChange={setValue} value={value}/>
        {/*<Users users={newArray}/>*/}
    </div>
}