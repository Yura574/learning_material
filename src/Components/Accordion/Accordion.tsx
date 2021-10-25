import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

export type AccordionType = {
    title:string
}

export function Accordion(props:AccordionType) {
    console.log('render Accordion')
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody />
        </div>
    )
}