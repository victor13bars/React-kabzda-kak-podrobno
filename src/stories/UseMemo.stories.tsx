import React, {useCallback, useMemo, useState} from "react";
import {runInNewContext} from "vm";

export default {
    title: "Usememo",
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(5);

    let resultA = 1;
    let resultB = 1;
    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA *= i;
        }
        return tempResultA
    }, [a]);

    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }
    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

type usersType = { users: Array<string> }

const UsersSecret = (props: usersType) => {
    console.log("USERS")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
    console.log("Help")
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Vitya", "Max", "Alex"]);

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, "Sveta" + new Date().getTime()]

        setUsers(newUsers);
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallBack = () => {
    console.log("LikeUseCallBack");
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(["React", "JS", "Angular"]);

    const newArray = useMemo(() => {
        return books.filter(book => book.toLowerCase().indexOf("a") > -1)
    }, [books])



    const memoAddBook =useCallback(() => {
        const newUsers = [...books, "Angular" + new Date().getTime()]
        setBooks(newUsers);
    }, [])
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books books={newArray} addBook={memoAddBook}/>
    </>
}

type BooksType = {
    books:Array<string>
    addBook: () => void
}

const BooksSecret = (props: BooksType) => {
    console.log("BooksSecret")
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
        {
            props.books.map((book,i)=><div key={i}>{book}</div>)
        }
    </div>
}

const Books = React.memo(BooksSecret);
