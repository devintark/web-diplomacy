import React, { Component } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import BoardInfo from "../utils/GameInfo";

const options = [
    "Move", "Hold", "Support", "Convoy"
]
class OrdersLine extends Component {
  constructor(props){
    super(props);
    this.state = {
      from: "",
      to: "" , 
      type: ""
    };
    this.onIssue = this.onIssue.bind(this);
  }
  
  componentDidMount(){

  };

  _onTypeSelect = (sel) => {
      this.setState({type: sel.value});
  };

  _onFromSelect = (sel) => {
    this.setState({from: sel.value});
  };

  _onToSelect = (sel) => {
    this.setState({to: sel.value});
  };

  onIssue(){
    console.log(this.state.from)
    console.log(BoardInfo[this.state.from])
    switch(this.state.type){
      case "Support":
        this.props.onIssue([BoardInfo[this.props.territory]['abbrev'], [this.state.type, BoardInfo[this.state.from]['abbrev'], BoardInfo[this.state.to]['abbrev']]]);
        break;
      case "Move":
        this.props.onIssue([BoardInfo[this.props.territory]['abbrev'], [this.state.type, BoardInfo[this.state.to]['abbrev']] ]);
        break;
      case "Hold":
        this.props.onIssue([BoardInfo[this.props.territory]['abbrev'], [this.state.type] ]);
        break;
      case "Convoy":
        this.props.onIssue([BoardInfo[this.props.territory]['abbrev'], [this.state.type, BoardInfo[this.state.from]['abbrev'], BoardInfo[this.state.to]['abbrev']]]);
        break;
    }
  }

  render(){

    return(
        <div className="container">
          <div className="row">
            <div className="col s2">
              <p>{this.props.territory}</p>
            </div>
            <div className="col s3">
              <Dropdown options={options} onChange={this._onTypeSelect} value={this.state.type} placeholder="Order Type" />
            </div>
            {this.state.type === "Support" &&
            <div>
              <div className="col s2"> 
                  <Dropdown options={BoardInfo[this.props.territory]['adjacent']} 
                        onChange={this._onFromSelect} 
                        value={this.state.from} 
                        placeholder="Army" />
              </div>
              <div className="col s2">
                  <Dropdown options={BoardInfo[this.props.territory]['adjacent']} 
                        onChange={this._onToSelect} 
                        value={this.state.to} 
                        placeholder="To" />
              </div>
            </div>
            }
            {this.state.type === "Move" &&
            <div className = "col s2"> 
                <Dropdown options={BoardInfo[this.props.territory]['adjacent']} 
                      onChange={this._onToSelect} 
                      value={this.state.to} 
                      placeholder="To" />
            </div>
            }
            {this.state.type === "Convoy" &&
            <div>
              <div className="col s2">
                <Dropdown options={this.props.myTerritories} 
                      onChange={this._onFromSelect} 
                      value={this.state.from} 
                      placeholder="Army to Convoy" />
              </div>
              <div className="col s2"> 
                <Dropdown options={this.props.allTerritories} 
                      onChange={this._onToSelect} 
                      value={this.state.to} 
                      placeholder="Convoy To" />
              </div>
            </div>
            }
            <div className="col s2">
              <button className="btn btn-small waves-effect waves-light hoverable blue accent-3" type="submit" onClick={this.onIssue}>
                            Issue!
              </button>
            </div>
          </div>

        </div>
    )
  }

}

export default OrdersLine
