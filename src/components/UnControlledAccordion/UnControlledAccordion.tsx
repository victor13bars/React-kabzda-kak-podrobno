import React, {useReducer} from "react";
import {reducer,TOGGLE_CONSTANT} from "./reducer";

export type AccordionPropsType = {
    titleValue: string,
    // collapsed: boolean
}

export function UnControlledAccordion(props: AccordionPropsType) {

    //let [collapsed, setCollapsed] = useState(true)
    let [state, dispatch] = useReducer(reducer, {collapsed:false});
    console.log("Accordion rendering");
    return (
        <div>
            {/*   <AccordionTitle title={props.titleValue } onClick={()=>setCollapsed(!collapsetd)}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => dispatch({type: 'TOGGLE-COLLAPSED'})}/>

            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("Accordion title rendering");
    return (
        <h3 onClick={() => props.onClick()}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering");
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default UnControlledAccordion;