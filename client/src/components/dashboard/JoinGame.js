import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import axios from "axios";
import { withRouter } from "react-router-dom"

class JoinGameModal extends Component {

  state = {
    gameid: -1,
    passcode: ""
  }

  componentDidMount() {
    
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End"); 
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: true,
      startingTop: "4%",
      endingTop: "10%"
    };
    
    M.Modal.init(this.Modal, options);

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    console.log("Form submited");
    e.preventDefault();
    axios.post('/api/game/joingame/' + this.state.gameid , {
      passcode: this.state.passcode
    });
    let instance = M.Modal.getInstance(this.Modal);
    instance.close();
    //this.props.history.push('/dashboard');
    window.location.reload(false);
  };

  render() {
    return (
      <div>
        <a
          href="!#"
          className="btn modal-trigger btn-large waves-light hoverable blue accent-3"
          data-target="modal2"
          style = {{
            marginTop: "1rem"
          }}
        >
          Join Game
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal2"
          className="modal"
        >
          {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
          <div className="modal-content">
            <h4>Enter Id and Passcode of the Game to Join </h4>
            <form noValidate onSubmit={this.onSubmit}>
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={this.state.gameid}
                    id="gameid"
                    type="number"
                  />
                  <label htmlFor="gameid">GameId</label>
                </div>
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={this.state.passcode}
                    id="passcode"
                    type="text"
                  />
                  <label htmlFor="passcode">Passcode</label>
                </div>
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                  <button
                    style={{
                      width: "250px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "10px"
                    }}
                    type="submit"
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                   >
                  Join Game
                </button>
              </div>
            </form>
          </div>
          <div style = {{height: "100px"}}></div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-red btn-flat">
              Cancel
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(JoinGameModal);
