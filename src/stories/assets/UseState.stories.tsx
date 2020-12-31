import React, {useMemo, useState} from "react";

export default {
    title: "useState demo",
}

// При каждом увеличений счётчика запускается вычисление, его нужно избегать
function generateData() {
    console.log("generateData")
    return 111222333
}

export const Example1 = () => {
    console.log("Example")
    //1) useMemo запомнит вычисление и больше не будет запускать пересчёт === 2)передавать в useState имя функции
    // const initialValue = useMemo(generateData, []);
    const [counter, setCounter] = useState(generateData);

    // const changer = (state: number) => {
    //     console.log("changer")
    //     return state + 1
    // }
    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}