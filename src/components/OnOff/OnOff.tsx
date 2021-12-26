import React, {useState} from "react";


export function OnOff() {
    const [on, setOn] = useState(true)
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
        background: on ? 'green' : 'white',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '2px solid black',
        marginLeft: '5px',
        padding: '2px',
        background: on ? 'white' : 'red'
    }
    const ball = {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: '1px solid black',
        marginLeft: '10px',
        /*margin-top: 3px;*/
        background: on ? 'green' : 'red'
    }

    function setStyle() {
        return on? setOn(false): setOn(true)
    }

    return <div style={switcher}>
        <div style={onStyle} onClick={setStyle}>on</div>
        <div style={offStyle} onClick={setStyle}>off</div>
        <div style={ball}></div>
    </div>
}