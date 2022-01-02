import React, {ChangeEvent, useRef, useState} from "react";


export default {
    title: 'Test Elements/Input'
}

export const UncontrolledInput = () => {
    return <input/>
}
export const ControlledInput = () => {
    const [value, setValue] = useState('')
    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <input value={value} onChange={changeValue}/>
}

export const RefInput = () => {
    const [value, setValue] = useState('')
    const inputEl = useRef<HTMLInputElement>(null)

    const clickInput = () => {
      const el =  inputEl.current as HTMLInputElement
        setValue(el.value)
    }
    // const changeValue = (e:ChangeEvent< HTMLInputElement>) => {
    //     setValue(e.currentTarget.value)
    // }

    return <div><input ref={inputEl} />
        <button onClick={()=> {clickInput()}}>save</button> - {value}
    </div>
}