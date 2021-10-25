import React from "react";

export type PageTitleType ={
    title: string
}


export function PageTitle(props:PageTitleType) {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}