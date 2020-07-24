import React, { Component } from "react";
import { urlencoded } from "body-parser";
//import { connect } from "react-redux";
import Background from "../images/gameboard.png"
import MapChart from "./map/MapChart";

const gameRoomStyle = {
    height: '965px',
    width: '1152px',
    //backgroundColor: "blue"
    backgroundImage: `url(${Background})`
};

const logoStyle = {
    marginLeft: '20px'
};

class GameRoom extends Component {
    render(){
        return(
            <div>
            <nav>
                <div className="nav-wrapper">
                <a href="/" style={logoStyle} className="brand-logo">Diplomacy</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/dashboard">Dashboard</a></li>
                    {/*
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                    */}
                </ul>
                </div>
            </nav>
            <div>
                <MapChart />
            </div>
            <div style={gameRoomStyle} className="container valign-wrapper">
            </div>
            </div>
        );
    };

}

export default GameRoom;