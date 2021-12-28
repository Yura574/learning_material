import React from "react";

type AccordionType = {
    collapsed: boolean
    title: string
    setCollapsed: () => void
}
type AccordionTitleType = {
    title: string
    setCollapsed: () => void
}



export function Accordion(props: AccordionType
) {
    console.log('render Accordion')
    return (

        <div>
            <AccordionTitle title={props.title} setCollapsed={props.setCollapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}
function AccordionTitle(props: AccordionTitleType) {
    return <h3 onClick={props.setCollapsed}>{props.title}</h3>
}


export function AccordionBody() {
    console.log('render UncontrolledAccordionBody')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )
}


