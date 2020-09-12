import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import BoardInfo from "../utils/GameInfo";
import Select from "react-select";

const options = ["Move", "Hold", "Support", "Convoy"];

class OrdersLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "",
      to: "",
      type: "",
    };
    this.onIssue = this.onIssue.bind(this);
  }

  componentDidMount() {}

  _onTypeSelect = (sel) => {
    this.setState({ type: sel.value });
  };

  _onFromSelect = (sel) => {
    this.setState({ from: sel.value });
  };

  _onToSelect = (sel) => {
    this.setState({ to: sel.value });
  };

  onIssue() {
    console.log(this.state.from);
    console.log(BoardInfo[this.state.from]);
    switch (this.state.type) {
      case "Support":
        this.props.onIssue([
          BoardInfo[this.props.territory]["abbrev"],
          [
            this.state.type,
            BoardInfo[this.state.from]["abbrev"],
            BoardInfo[this.state.to]["abbrev"],
          ],
        ]);
        break;
      case "Move":
        this.props.onIssue([
          BoardInfo[this.props.territory]["abbrev"],
          [this.state.type, BoardInfo[this.state.to]["abbrev"]],
        ]);
        break;
      case "Hold":
        this.props.onIssue([
          BoardInfo[this.props.territory]["abbrev"],
          [this.state.type],
        ]);
        break;
      case "Convoy":
        this.props.onIssue([
          BoardInfo[this.props.territory]["abbrev"],
          [
            this.state.type,
            BoardInfo[this.state.from]["abbrev"],
            BoardInfo[this.state.to]["abbrev"],
          ],
        ]);
        break;
      default:
        // Setting order to hold by default with error message
        this.props.onIssue([
          BoardInfo[this.props.territory]["abbrev"],
          [this.state.type],
        ]);
        break;
    }
  }

  render() {
    return (
      <div className="">
        <div className="row">
          <div class="col s1">
            <p>
              {this.props.territoryGamestate[this.props.territory]["occupier"][
                "force"
              ] === "Army"
                ? "A"
                : "F"}
            </p>
          </div>
          <div className="col s2">
            <p>{this.props.territory}</p>
          </div>
          <div className="col s2">
            {/* <Dropdown options={options} onChange={this._onTypeSelect} value={this.state.type} placeholder="Order" /> */}
            <Select
              options={options.map((o) => ({ value: o, label: o }))}
              onChange={this._onTypeSelect}
              placeholder="Type"
            />
          </div>
          {this.state.type === "Support" && (
            <div>
              <div className="col s3">
                <Select
                  options={this.props.allTerritories
                    .sort()
                    .map((o) => ({ value: o, label: o }))}
                  onChange={this._onFromSelect}
                  placeholder="Force"
                  styles={{
                    menu: (provided) => ({ ...provided, zIndex: 9999 }),
                  }}
                />
                {/* <Dropdown options={this.props.allTerritories.sort()} 
                        onChange={this._onFromSelect} 
                        value={this.state.from} 
                        placeholder="Army" /> */}
              </div>
              <div className="col s3">
                <Select
                  options={BoardInfo[this.props.territory][
                    "adjacent"
                  ].map((o) => ({ value: o, label: o }))}
                  onChange={this._onToSelect}
                  placeholder="To"
                />

                {/* <Dropdown options={BoardInfo[this.props.territory]['adjacent']} 
                        onChange={this._onToSelect} 
                        value={this.state.to} 
                        placeholder="To" /> */}
              </div>
            </div>
          )}
          {this.state.type === "Move" && (
            <div className="col s3">
              <Dropdown
                options={this.props.allTerritories.sort()}
                onChange={this._onToSelect}
                value={this.state.to}
                placeholder="To"
              />
            </div>
          )}
          {this.state.type === "Convoy" && (
            <div>
              <div className="col s3">
                <Dropdown
                  options={this.props.myTerritories}
                  onChange={this._onFromSelect}
                  value={this.state.from}
                  placeholder="Army to Convoy"
                />
              </div>
              <div className="col s3">
                <Dropdown
                  options={this.props.allTerritories}
                  onChange={this._onToSelect}
                  value={this.state.to}
                  placeholder="Convoy To"
                />
              </div>
            </div>
          )}
          <div className="col s1" style={{ margin: "auto" }}>
            <button
              className="btn btn-small waves-effect waves-light hoverable blue"
              type="submit"
              onClick={this.onIssue}
            >
              Issue!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default OrdersLine;
