import React from "react";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results results-dictionary">
        <h2>{props.results.word}</h2>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <br />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
