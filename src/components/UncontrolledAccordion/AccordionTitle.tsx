import React from "react";

type AccordionTitleType = {
    toggleMenu: () => void
    title: string
}

export function AccordionTitle(props: AccordionTitleType) {
    console.log('render AccordionTitle')
    return <h3 onClick={props.toggleMenu}> {props.title} </h3>
}