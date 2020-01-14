import React from "react";
import { getJokes } from "../actions/actions";
import { connect } from "react-redux";
import Joke from "./Joke";
import "../App.css";

function JokeList(props) {
    console.log(props);
    
    return (
        <div>
            <button className="button" onClick={props.getJokes} type="submit">Click for 10 Jokes</button>
            {props.data.map(i => {
                return (
                    <Joke setup={i.setup} punchline={i.punchline} key={i.id} />
                )
            })}
        </div>
    )
}

export default connect(state => state, { getJokes: getJokes })(JokeList);