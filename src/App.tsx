import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";

function App() {
    console.log('render app')
    return (
        <div className="App">
            <OnOff />
            <Rating value={4}/>
            <Accordion collapsed={true} title={'Menu'}/>
            <Rating value={2}/>
            <UncontrolledAccordion title={'users'}/>
            <UncontrolledAccordion title={'books'}/>
        </div>
    );
}

export default App;

