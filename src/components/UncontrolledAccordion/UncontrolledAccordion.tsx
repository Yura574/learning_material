import {UncontrolledAccordionTitle} from "./UncontrolledAccordionTitle";
import {UncontrolledAccordionBody} from "./UncontrolledAccordionBody";
import React, {useState} from "react";

type UncontrolledAccordionType = {
    title: string
}
export function UncontrolledAccordion(props: UncontrolledAccordionType) {
    console.log('render Accordion')
    const [collapsed, setCollapsed] = useState(true)

    function toggleMenu() {
        return setCollapsed(!collapsed)
        // collapsed ? setCollapsed(false) : setCollapsed(true)
    }

    return (
        <div>
            <UncontrolledAccordionTitle toggleMenu={toggleMenu} title={props.title}/>
            {!collapsed && <UncontrolledAccordionBody/>}
        </div>
    )
}