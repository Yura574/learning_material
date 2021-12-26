import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import React, {useState} from "react";

type UncontrolledAccordionType = {
    title: string
}
export function UncontrolledAccordion(props: UncontrolledAccordionType) {
    console.log('render Accordion')
    const [collapsed, setCollapsed] = useState(true)

    function toggleMenu() {
        return collapsed ? setCollapsed(false) : setCollapsed(true)
    }

    return (
        <div>
            <AccordionTitle toggleMenu={toggleMenu} title={props.title}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}