import React, {useState} from "react";
import {OnOff} from "./OnOff";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";
// import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff',
    component: OnOff
} as ComponentMeta<typeof OnOff>

const Template: ComponentStory<typeof OnOff> = (arg) => <OnOff {...arg}/>

export const OffMode = Template.bind({})
export const OnMode = Template.bind({})

OffMode.args = {
    on: false,
    setStyle: (on:boolean)=> true
}
OnMode.args = {
    on: true,
    setStyle: on => false
}
export const ModeChange= () => {
    const [value, setValue] = useState<boolean>(false)
    return <OnOff on={value} setStyle={setValue}/>
}