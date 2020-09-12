import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import BoardInfo from "../utils/GameInfo";
// Is this import still used?
//import AbbrevLookup from "../utils/AbbrevLookup";

class AdjustmentOrdersLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.delta > 0 ? "Build" : "Disband",
      force: "",
    };
    this.onBuildIssue = this.onBuildIssue.bind(this);
    this.onDisbandIssue = this.onDisbandIssue.bind(this);
  }

  componentDidMount() {
    console.log(this.props.territory);
  }

  _onForceSelect = (sel) => {
    this.setState({ force: sel.value });
  };

  onDisbandIssue() {
    this.props.onIssue([
      BoardInfo[this.props.territory]["abbrev"],
      [this.state.type],
    ]);
  }

  onBuildIssue() {
    if (this.state.force !== "") {
      this.props.onIssue([
        BoardInfo[this.props.territory]["abbrev"],
        [this.state.type, this.state.force],
      ]);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s3">
            <p>{this.props.territory}</p>
          </div>
          {this.state.type === "Build" && (
            <div>
              <div className="col s2">
                <p> Build </p>
              </div>
              <div className="col s2">
                <Dropdown
                  options={["Fleet", "Army"]}
                  onChange={this._onForceSelect}
                  value={this.state.force}
                  placeholder="Force"
                />
              </div>
              <div className="col s3">
                <button
                  className="btn btn-small waves-effect waves-light hoverable blue accent-3"
                  type="submit"
                  onClick={this.onBuildIssue}
                >
                  Stage Build!
                </button>
              </div>
            </div>
          )}
          {this.state.type === "Disband" && (
            <div>
              <div className="col s3">
                <button
                  className="btn btn-small waves-effect waves-light hoverable blue accent-3"
                  type="submit"
                  onClick={this.onDisbandIssue}
                >
                  Stage Disband!
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default AdjustmentOrdersLine;
