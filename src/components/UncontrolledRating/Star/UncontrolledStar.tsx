import React from "react";

type StarType = {
    selected: boolean
}
export function UncontrolledStar(props: StarType) {
    console.log('render star')

    if (props.selected ) {
        return (
            <span ><b >Star</b></span>
        )
    } else {
        return <span>Star </span>
    }
}