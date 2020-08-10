import React, { Component } from "react";
//import { connect } from "react-redux";
import MapChart from "./map/MapChart";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import ReactTooltip from "react-tooltip";
import axios from 'axios';
import Assignment from "./Assignment";

let gamestate = {};

const logoStyle = {
    marginLeft: '20px'
};

function AssignmentsList(props){
    const countriesArray = Object.keys(props.countries);
    const assignments = countriesArray.map(country =>
        <li key={country}><Assignment country={country} options={props.players} gameid={props.gameid}/> </li>
    );
    return (
        <ul>{assignments}</ul>
    );
}

class GameRoom extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            gameboard: null,
            gameid: this.props.match.params.id,
            content: "",
            isHost: false
        };
        
    };

    componentDidMount() {
        axios.get("/api/game/" + this.state.gameid).then(game => {
            gamestate = game.data;
            console.log(Object.entries(gamestate));
            this.setState({gameboard: gamestate});
            console.log(this.state);
            console.log(JSON.stringify(this.state.gameboard));
            if (gamestate.host === this.props.auth.user.id){
                this.setState({isHost: true});
            }
            console.log(this.state.isHost);
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
                <MapChart setTooltipContent={this.setContent} 
                          gameid={this.state.gameid} 
                          gamestate={this.state.gameboard} />
                <ReactTooltip>{this.state.content}</ReactTooltip>
            </div>
            <div>
                {this.state.gameboard && this.state.isHost &&
                    <AssignmentsList countries={this.state.gameboard.assignments} players={this.state.gameboard.players} gameid={this.state.gameid} /> 
                }
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
