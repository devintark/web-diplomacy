import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import axios from "axios";
import Modal from "./CreateGame";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      options: [] 
    };
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount(){
    const { user } = this.props.auth;
    axios.get("/api/users/getusersgames/" + user.id).then( games => {
      console.log(games);
      this.setState({options: games.data.games})
      console.log(this.state.options);
    });
    axios.post("/api/game/joingame/17");
  };

  _onSelect = (val) => {
    const link = "/gameroom/" + val.value;
    console.log(link);
    this.props.history.push(link);
  };

  render() {
    const { user } = this.props.auth;
    console.log(user);
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                Welcome to your home page! Choose a game room to enter or create a new one{" "}
              </p>
            </h4>
            <div className="input-field col s4">
                <h5> Join a Game: </h5>
                <Dropdown options={this.state.options} onChange={this._onSelect} placeholder="Select Game" />
            </div>
            <Modal />
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
            
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
