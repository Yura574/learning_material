import React from "react";

type AccordionTitleType = {
    toggleMenu: () => void
    title: string
}

export function UncontrolledAccordionTitle(props: AccordionTitleType) {
    console.log('render UncontrolledAccordionTitle')
    return <h3 onClick={props.toggleMenu}> {props.title} </h3>
}