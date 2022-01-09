import React, {ChangeEvent, useRef, useState} from "react";


export default {
    title: 'Test Elements/Input'
}

export const UncontrolledInput = () => {
    return <input/>
}

export const TrackValueInput = () => {
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
    return <div><input ref={inputEl} />
        <button onClick={()=> {clickInput()}}>save</button> - {value}
    </div>
}

export const ControlledInput = () =>{
    const [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return <input value={value} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
    const [check, setCheck] = useState(false)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCheck(e.currentTarget.checked)
    }
    return <input type={"checkbox"} checked={check} onChange={onChange}/>
}

export const ControlledSelect = ()=> {
    const [value, setValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }

    return <select value={value} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Kiev</option>
        <option value={'3'}>Moscow</option>
    </select>
}