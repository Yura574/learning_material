import React from "react";
import {RatingValueType} from "../../App";

type RatingType = {
    ratingValue: RatingValueType
    setRatingValue: (value: RatingValueType) => void
    value: RatingValueType
}
type StarType = {
    selected: boolean
    setRatingValue: (value: RatingValueType) => void
    value: RatingValueType
}

export function Rating(props: RatingType) {
    console.log('render rating')

    return (
        <div>
            <Star selected={props.value > 0} setRatingValue={props.setRatingValue} value={1}/>
            <Star selected={props.value > 1} setRatingValue={props.setRatingValue} value={2}/>
            <Star selected={props.value > 2} setRatingValue={props.setRatingValue} value={3}/>
            <Star selected={props.value > 3} setRatingValue={props.setRatingValue} value={4}/>
            <Star selected={props.value > 4} setRatingValue={props.setRatingValue} value={5}/>
        </div>
    )
}

export function Star(props: StarType) {
    console.log('render star')
    return <span>

        <span onClick={()=>props.setRatingValue(props.value)}>
            {props.selected ? <b>Star </b> : 'Star '}
        </span>
    </span>
}