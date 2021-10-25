import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

export type AccordionType = {
    title: string
    collapsed: boolean
}

export function Accordion(props: AccordionType) {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            {props.collapsed && <AccordionBody/>}
        </div>
    )
}