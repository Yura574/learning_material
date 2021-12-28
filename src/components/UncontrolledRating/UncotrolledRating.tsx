import React, {useState} from "react";


type StarType = {
    selected: boolean
    setValue: (value: number) => void
    value: number
}

export function UncotrolledRating() {
    const [value, setValue] = useState(0)
    function set (value: number) {
        setValue(value)
    }
    return (
        <div>
            <Star selected = {value > 0}  setValue={set} value={1}/>
            <Star selected = {value > 1} setValue={set} value={2}/>
            <Star selected = {value > 2} setValue={set} value={3}/>
            <Star selected = {value > 3} setValue={set} value={4}/>
            <Star selected = {value > 4} setValue={set} value={5}/>
        </div>
    )
}

export function Star(props: StarType) {
    console.log('render star')
    return <span>

        <span onClick={()=>props.setValue(props.value)}>
            {props.selected ? <b>Star </b> : 'Star '}
        </span>
    </span>
}