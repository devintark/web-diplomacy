import React, { Component } from "react";
import Dropdown from 'react-dropdown';


class Assignment extends Component {
    constructor(props) {
      super(props);
      this.state = {
          country: this.props.country,
          assignment: "",
          refresh: "false"
      }
      this.assignPlayer = this.assignPlayer.bind(this);
    };

    _onSelect = (sel) => {
        console.log(sel.value);
        this.setState({assignment: sel.value});
    };

    assignPlayer() {
        if (this.state.assignment !== "") {
            this.props.updateAssignments(this.state.country, this.state.assignment);
        }
        this.setState({refresh: !this.state.refresh})
    };

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col s3">
                        <p>{this.props.country}</p>
                    </div>
                    <div className="col s4">
                        <Dropdown options={this.props.options} onChange={this._onSelect} value={this.state.assignment} placeholder="Assign This Player" />
                    </div>
                    <div className="col s2">
                        <button className="btn btn-small waves-effect waves-light hoverable blue accent-3" type="submit" onClick={this.assignPlayer}>
                            Assign
                        </button>
                    </div>
                </div>
            </div>
        )
    }
};

export default Assignment;