import React from 'react';
import './App.css';
import {Rating} from "./Components/Rating/Rating";
import {Accordion} from "./Components/Accordion/Accordion";
import {PageTitle} from "./Components/PageTitle/PageTitle";

function App() {
    console.log('render app')
    return (
        <div className="App">
            <PageTitle title={'APP'}/>
            <Rating value={0}/>
            <Accordion title={'Menu'}/>
            <Accordion title={'Text'}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
        </div>
    );
}

export default App;

