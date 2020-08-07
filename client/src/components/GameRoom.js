import React, { Component } from "react";
//import { connect } from "react-redux";
import MapChart from "./map/MapChart";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import ReactTooltip from "react-tooltip";
import axios from 'axios';

let gamestate = {};

const logoStyle = {
    marginLeft: '20px'
};

class GameRoom extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            gameboard: {},
            gameid: this.props.match.params.id,
            content: ""
        };
        
    };

    componentDidMount() {
        axios.get("/api/game/" + this.state.gameid).then(game => {
            gamestate = game.data;
            console.log(Object.entries(gamestate));
            this.setState({gameboard: gamestate});
            console.log(this.state);
            console.log(JSON.stringify(this.state.gameboard));
          }).catch(err => console.log(err));
          
    };

    setContent = (con) => {
        this.setState({content: con});
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
                <MapChart setTooltipContent={this.setContent} gameid={this.state.gameid}/>
                <ReactTooltip>{this.state.content}</ReactTooltip>
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
