import React from "react";
import "../App.css";

function Joke(props) {
    return (
        <div>
            <h1 className="headers">{props.setup}</h1>
            <div className="main">{props.punchline}</div>
        </div>
    )
}

export default Joke;