import React from "react";

export type StarType = {
    selected: boolean
}

export function Star(props: StarType) {
    console.log('render star')
    if (props.selected) {
        return <span><b>Star </b></span>
    } else {
        return <span>Star </span>
    }

}