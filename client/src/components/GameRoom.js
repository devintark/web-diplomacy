import React, { Component } from "react";
import { urlencoded } from "body-parser";
//import { connect } from "react-redux";
import Background from "../images/gameboard.png"
import MapChart from "./map/MapChart";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";


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
    constructor(props) {
        super(props);
        
        this.state = {
            gameboard: {},
            gameid: this.props.match.params.id
        }
    };

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
            <h3> Game ID: {this.state.gameid} </h3>
            <div>
                <MapChart gameid={this.state.gameid}/>
            </div>
            </div>
        );
    };

}

GameRoom.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
const mapStateToProps = state => ({
    auth: state.auth
});
  
export default connect(
    mapStateToProps,
    { logoutUser }
)(GameRoom);
