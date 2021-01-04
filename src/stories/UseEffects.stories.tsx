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
    }, [])

    useEffect(() => {
        console.log("UseEffects first render and every counter change")
        document.title = counter.toString();
    }, [counter])
    return <>
        Hello,{counter}{fake}
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
        <button onClick={() => setFake(fake + 1)}>fake +</button>
    </>
}

export const SetTimeOutExample = () => {

    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    console.log("SetTimeOutExample")

    // useEffect(() => {
    //     setTimeout(() => {
    //         document.title = counter.toString();
    //     }, 1000)
    // })

    useEffect(() => {
        const intervalID = setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return <>
        Hello, counter: {counter} - fake {fake}
        {/*<button onClick={() => setCounter(counter + 1)}>counter +</button>*/}
        {/*<button onClick={() => setFake(fake + 1)}>fake +</button>*/}
    </>
}


export const ResetEffectExample = () => {

    const [count, setCount] = useState(1);

    console.log("Component render" + count)

    useEffect(() => {
        console.log("Effect occurred" + count)

        return () => {
            console.log("RESET EFFECT" + count)
        }
    }, [count])

    return <>
        Hello, counter: {count}
        <button onClick={() => setCount(count + 1)}>++++</button>
    </>
}

export const KeysTrackerExample = () => {

    const [text, setText] = useState("");

    console.log("Component render" + text)

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            setText(text + e.key)
        }

        window.addEventListener("keypress", handler)

        return () => {
            window.removeEventListener("keypress", handler)
        }

    }, [text])

    return <>
        Typed text: {text}
    </>
}

export const SetTimeOutClear = () => {

    const [text, setText] = useState("13");

    console.log("Component render" + text)

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            console.log("TIMEOUT EXPIRED 13")
            setText("3 seconds passed")
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }

    }, [text])

    return <>
        Typed text: {text}
    </>
}