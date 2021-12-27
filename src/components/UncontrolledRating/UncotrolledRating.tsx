import React, {useState} from "react";
import {UncontrolledStar} from "./Star/UncontrolledStar";



export function UncotrolledRating() {
    console.log('render rating')
let [value, setValue] = useState(0)
    return (
        <div>
            <UncontrolledStar selected = {value > 0}/> <button onClick={() => {setValue(1)}}>x</button>
            <UncontrolledStar selected = {value > 1}/>  <button onClick={() => {setValue(2)}}>x</button>
            <UncontrolledStar selected = {value > 2}/>  <button onClick={() => {setValue(3)}}>x</button>
            <UncontrolledStar selected = {value > 3}/>  <button onClick={() => {setValue(4)}}>x</button>
            <UncontrolledStar selected = {value > 4}/>  <button onClick={() => {setValue(5)}}>x</button>
        </div>
    )
}