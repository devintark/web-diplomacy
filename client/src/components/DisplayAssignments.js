import React from "react";

function DisplayAssignment(props){
    
    const assignments = Object.entries(props.assignments);
    return(
        <div className="container">
            <div className="row">
                <div className="col s4">{assignments[0][0]}: {assignments[0][1]}</div>
                <div className="col s4">{assignments[1][0]}: {assignments[1][1]}</div>
                <div className="col s4">{assignments[2][0]}: {assignments[2][1]}</div>
            </div>
            <div className="row">
                <div className="col s4">{assignments[3][0]}: {assignments[3][1]}</div>
                <div className="col s4">{assignments[4][0]}: {assignments[4][1]}</div>
                <div className="col s4">{assignments[5][0]}: {assignments[5][1]}</div>
            </div>
            <div className="row">
                <div className="col s4 offset-s4" >{assignments[6][0]}: {assignments[6][1]}</div>
            </div>
        </div>
    )
}

export default DisplayAssignment