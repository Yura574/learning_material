import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import React from "react";

type AccordionType = {
    collapsed: boolean
    title: string
}

export function Accordion(props: AccordionType) {
    console.log('render Accordion')
    return (

        <div>
            <AccordionTitle title={props.title}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}