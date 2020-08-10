import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from 'axios'
import Dropdown from 'react-dropdown';


class Assignment extends Component {
    constructor(props) {
      super(props);
      this.state = {
          country: this.props.country,
          assignment: ""
      }
      this.assignPlayer = this.assignPlayer.bind(this);
    };

    _onSelect = (sel) => {
        console.log(sel.value);
        this.setState({assignment: sel.value});
    };

    assignPlayer() {
        if (this.state.assignment !== "") {
            axios.post('/api/game/assignplayer', {
                country: this.state.country,
                player: this.state.assignment,
                game: this.props.gameid
            })
        }
    };

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col s3">
                        <p>{this.props.country}</p>
                    </div>
                    <div className="col s7">
                        <Dropdown options={this.props.options} onChange={this._onSelect} value={this.state.assignment} placeholder="Assign This Player" />
                    </div>
                    <div className="col s2">
                        <button onClick={this.assignPlayer}>
                            Assign
                        </button>
                    </div>
                </div>
            </div>
        )
    }
};

export default Assignment;