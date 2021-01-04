import React, {useEffect, useState} from "react";

type PropsType = {}

const get2digitsString = (number: number) => number < 10 ? "0" + number : number

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log("TICK")
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, []);

    return <div>
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>
        :
    </div>
}