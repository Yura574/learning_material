import React, {useState} from "react";

type UncontrolledAccordionType = {
    title: string
}

type AccordionTitleType = {
    toggleMenu: () => void
    title: string
}
export function UncontrolledAccordion(props: UncontrolledAccordionType) {
    console.log('render Accordion')
    const [collapsed, setCollapsed] = useState(true)

    function toggleMenu() {
        return setCollapsed(!collapsed)
    }

    return (
        <div>
            <UncontrolledAccordionTitle toggleMenu={toggleMenu} title={props.title}/>
            {!collapsed && <UncontrolledAccordionBody/>}
        </div>
    )
}

export function UncontrolledAccordionTitle(props: AccordionTitleType) {
    console.log('render UncontrolledAccordionTitle')
    return <h3 onClick={() =>props.toggleMenu()}> {props.title} </h3>
}

export function UncontrolledAccordionBody() {
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