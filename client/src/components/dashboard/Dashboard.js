import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import axios from "axios";
import Modal from "./CreateGame";

class Dashboard extends Component {
  state = {
    seen: false 
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentWillMount(){
    axios.get("/api/game/3").then(game => console.log(game)).catch(err => console.log(err));
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
    console.log(this.state.seen)
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
            <button
              style={{
                width: "250px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.togglePop}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Create New Game
            </button>
            <Modal />
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
