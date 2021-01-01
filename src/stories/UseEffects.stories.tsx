import React, {useEffect, useMemo, useState} from "react";

export default {
    title: "useEffect demo",
}

export const Example1 = () => {

    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    console.log("Simplexample")

    useEffect(() => {
        console.log("UseEffects every render")
        document.title = counter.toString();
    })

    useEffect(() => {
        console.log("UseEffects only first render (componentDidMount)")
        document.title = counter.toString();
    },[])

    useEffect(() => {
        console.log("UseEffects first render and every counter change")
        document.title = counter.toString();
    },[counter])
    return <>
        Hello,{counter}{fake}
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
        <button onClick={() => setFake(fake + 1)}>fake +</button>
    </>
}