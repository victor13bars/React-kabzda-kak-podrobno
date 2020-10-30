import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Raiting, RaitingValueType} from "./components/Raiting/Raiting";
import {OnOff} from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRaiting} from "./components/UnControlledRaiting/UncontrolledRaiting";

function App() {
    let [raitingValue,setRairingValue]=useState<RaitingValueType>(0);
    return (
        <div className={"App"}>
            <OnOff />
            <UnControlledAccordion titleValue={"Menu"}/>

           {/* <PageTitle title="Good job Victor"/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Menu 2"} collapsed={false}/>

            <Raiting value={2}/>*/}
            <Raiting value={raitingValue} onClick={setRairingValue}/>

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
