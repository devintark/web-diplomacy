import React, { Component, Fragment } from "react";
//import { connect } from "react-redux";
import MapChart from "./map/MapChart";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import ReactTooltip from "react-tooltip";
import axios from "axios";
import Assignment from "./Assignment";
import DisplayAssignments from "./DisplayAssignments";
import NationalOrdersTerminal from "./OrdersTerminal";
import Expand from "react-expand-animated";
import RetreatOrdersTerminal from "./RetreatOrdersTerminals";
import AdjustmentOrdersTerminal from "./AdjustmentOrdersTerminal";

let gamestate = {};

const logoStyle = {
  marginLeft: "20px",
};

function AssignmentsList(props) {
  const countriesArray = Object.keys(props.countries);
  const assignments = countriesArray.map((country) => (
    <li key={country}>
      <Assignment
        country={country}
        options={props.players}
        gameid={props.gameid}
        updateAssignments={props.updateAssignments}
      />{" "}
    </li>
  ));
  return <ul>{assignments}</ul>;
}

class GameRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameboard: null,
      gameid: this.props.match.params.id,
      content: "",
      isHost: false,
      myNations: [],
      assignmentListOpen: false,
    };
    this.updateAssignments = this.updateAssignments.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/game/" + this.state.gameid)
      .then((game) => {
        gamestate = game.data;
        console.log(Object.entries(gamestate));
        this.setState({ gameboard: gamestate });
        console.log(this.state);
        console.log(JSON.stringify(this.state.gameboard));
        if (gamestate.host === this.props.auth.user.id) {
          this.setState({ isHost: true });
        }
        console.log(this.state.isHost);
        const myNations = Object.entries(this.state.gameboard.assignments)
          .filter((assignment) => assignment[1] === this.props.auth.user.email)
          .map((assignment) => assignment[0]);
        console.log(myNations);
        this.setState({ myNations: myNations });
      })
      .catch((err) => console.log(err));
  }

  setContent = (con) => {
    this.setState({ content: con });
  };

  toggle = () => {
    this.setState((prevState) => ({
      assignmentListOpen: !prevState.assignmentListOpen,
    }));
  };

  updateAssignments(country, player) {
    axios
      .post("/api/game/assignplayer", {
        country: country,
        player: player,
        game: this.state.gameid,
      })
      .then((game) => this.setState({ gameboard: game.data }));
  }

  render() {
    const NationalOrders = this.state.myNations.map((nation) => (
      <li>
        <NationalOrdersTerminal
          gamestate={this.state.gameboard}
          country={nation}
        />
      </li>
    ));
    let nationalRetreatOrders = [];
    if (this.state.gameboard && this.state.gameboard['Type'] === "Retreat") {
      const nationsToRetreat = this.state.gameboard['dislodgeds'].map(item => item['Nation']).filter(nation => this.state.myNations.includes(nation));
      const retreatNationsSet = [];
      for (var i = 0; i < nationsToRetreat.length; i++){
        if (!retreatNationsSet.includes(nationsToRetreat)){
          retreatNationsSet.push(nationsToRetreat[i])
        }
      }
      const territoriesToRetreat = this.state.gameboard['dislodgeds'].filter(dislodged => this.state.myNations.includes(dislodged['Nation']));
      nationalRetreatOrders = retreatNationsSet.map(nation => ( 
        <li key={nation}> <RetreatOrdersTerminal 
              dislodged={territoriesToRetreat.filter(terr => terr['Nation'] === nation)}
              country={nation} /> </li>
      ));
    }
    let nationalAdjustmentOrders = [];
    if (this.state.gameboard && this.state.gameboard['Type'] === "Adjustment"){
      nationalAdjustmentOrders = this.state.myNations.map((nation) => (
        <li>
          <AdjustmentOrdersTerminal
            gamestate={this.state.gameboard}
            country={nation}
          />
        </li>
      ));
    }

    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="/" style={logoStyle} className="brand-logo center">
              Game ID: {this.state.gameid}
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              {/*
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                    */}
            </ul>
          </div>
        </nav>
        <div style={{ paddingTop: "20px" }}>
          {this.state.gameboard && (
            <DisplayAssignments
              assignments={this.state.gameboard.assignments}
            />
          )}
        </div>
        <div>
          <MapChart
            setTooltipContent={this.setContent}
            gameid={this.state.gameid}
            gamestate={this.state.gameboard}
          />
          <ReactTooltip>{this.state.content}</ReactTooltip>
        </div>
        <div>
          {this.state.gameboard && this.state.isHost && <Fragment>
            <button onClick={this.toggle}>
              <div>
                {!this.state.assignmentListOpen && "Assignments List +"}
              </div>
              <div>{this.state.assignmentListOpen && "Assignments List -"}</div>
            </button>
            <Expand open={this.state.assignmentListOpen}>
              <div>
                <AssignmentsList
                  countries={this.state.gameboard.assignments}
                  players={this.state.gameboard.players}
                  gameid={this.state.gameid}
                  updateAssignments={this.updateAssignments}
                />
              </div>
            </Expand>
          </Fragment>}
        </div>
        <div>{this.state.gameboard && this.state.gameboard['Type'] ==="Movement" && <ul>{NationalOrders}</ul>}</div>
        <div>{this.state.gameboard && this.state.gameboard['Type'] ==="Retreat" && <ul>{nationalRetreatOrders}</ul>}</div>
      </div>
    );
  }
}

GameRoom.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(GameRoom);
