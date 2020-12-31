import React, {useState} from "react";

export default {
    title: "React.memo demo",
}

const NewMessagesCounter = (props: { count: number }) => {
    console.log("NewMessagesCounter")
    return <div>{props.count}</div>
}

type usersType = { users: Array<string> }

const UsersSecret = (props: usersType) => {
    console.log("USERS")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret);
const Counter = React.memo(NewMessagesCounter)

export const Example1 = () => {
    console.log("Example")
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Vitya", "Max", "Alex"]);
    const addUser = () => {
        const newUsers = [...users, "Sveta" + new Date().getTime()]

        setUsers(newUsers);
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <Counter count={counter}/>
        <Users users={users}/>
    </>
}