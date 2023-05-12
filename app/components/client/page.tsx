'use client';
import {useState} from "react";

export default function Page() {

    const [text, setText] = useState("");

    return (
        <>
            <div style={{margin: "20px"}}>
                THIS IS A CLIENT COMPONENT!
            </div>
        </>
    )
}