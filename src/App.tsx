import React from 'react';
import './App.css';

function App() {
    console.log('render app')
    return (
        <div className="App">
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

export default App;

export function Rating() {
    console.log('render rating')
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

export function Star() {
    console.log('render star')
    return (
        <div>
            Star
        </div>
    )
}

export function Accordion() {
    console.log('render Accordion')
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

export function AccordionTitle() {
    console.log('render AccordionTitle')
    return <h3>Menu</h3>
}

export function AccordionBody() {
    console.log('render AccordionBody')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )

}
