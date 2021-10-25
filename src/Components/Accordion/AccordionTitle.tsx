import React from "react";

export type AccordionTitleType = {
    title: string
}

export function AccordionTitle(props: AccordionTitleType) {
    console.log('render AccordionTitle')
    return <h3>{props.title}</h3>
}