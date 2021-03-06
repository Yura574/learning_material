import React from "react";

type OnOffType = {
    on: boolean
    setStyle: (on: boolean) => void
}


export function OnOff(props: OnOffType) {
debugger
    const switcher = {
        margin: "20px",
        display: 'flex',
        alignItems: 'center',
    };
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '2px solid black',
        marginLeft: '5px',
        padding: '2px',
        background: props.on ? 'green' : 'white',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '2px solid black',
        marginLeft: '5px',
        padding: '2px',
        background: props.on ? 'white' : 'red'
    }
    const ball = {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: '1px solid black',
        marginLeft: '10px',
        background: props.on ? 'green' : 'red'
    }

    return <div style={switcher}>
        <div style={onStyle} onClick={()=>{props.setStyle(true)}}>on</div>
        <div style={offStyle} onClick={()=>{props.setStyle(false)}}>off</div>
        <div style={ball}> </div>
    </div>
}