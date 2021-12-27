import React from "react";

type AccordionTitleType = {
    title: string
}

export function AccordionTitle(props: AccordionTitleType) {
    console.log('render UncontrolledAccordionTitle')
    return <h3>{props.title}</h3>
}