import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncotrolledRating} from "./components/UncontrolledRating/UncotrolledRating";
import {OnOff} from "./components/OnOff/OnOff";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5


function App() {
    console.log('render app')
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState<boolean>(true)

    function setCollapsed() {
        return setAccordionCollapsed(!accordionCollapsed)
    }

    function setStyle(on: boolean) {
        setOn(on)
    }

    return (
        <div className="App">
            <UncontrolledOnOff/>
            <OnOff on={on} setStyle={setStyle}/>
            <Rating ratingValue={ratingValue} setRatingValue={setRatingValue} value={ratingValue}/>

            <Accordion collapsed={accordionCollapsed} title={'Menu'} setCollapsed={setCollapsed}/>
            <UncotrolledRating/>
            <UncotrolledRating/>
            <UncontrolledAccordion title={'users'}/>
            <UncontrolledAccordion title={'books'}/>
        </div>
    );
}

export default App;

