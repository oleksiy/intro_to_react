import {string} from "prop-types";
import React from "react";

function Button(props: { content: string }) {
    return(
        <>
            <button>{props.content}</button>
        </>
    )
}