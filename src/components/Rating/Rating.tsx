import React from "react";
import {Star} from "./Star/Star";

type RatingType = {
    value: number
}

export function Rating(props: RatingType) {
    console.log('render rating')

    return (
        <div>
            <Star selected = {props.value > 0}/>
            <Star selected = {props.value > 1}/>
            <Star selected = {props.value > 2}/>
            <Star selected = {props.value > 3}/>
            <Star selected = {props.value > 4}/>
        </div>
    )
}