import React, { Component } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import BoardInfo from "../utils/GameInfo";
import AbbrevLookup from "../utils/AbbrevLookup";


class AdjustmentOrdersLine extends Component {
  constructor(props){
    super(props);
    this.state = {
      to: "" 
    };
    this.onIssue = this.onIssue.bind(this);
  }
  
  componentDidMount(){
      console.log(this.props.territory);
  };

  _onToSelect = (sel) => {
    this.setState({to: sel.value});
  };

  onIssue(){
    if (this.state.to !== ""){
      this.props.onIssue([ this.props.territory, ['Move', BoardInfo[this.state.to]['abbrev']] ]);
    }
    
  }

  render(){

    return(
        <div className="container">
          <div className="row">
            <div className="col s2">
              <p>Retreat</p>
            </div>
            <div className="col s2">
              <p>{this.props.forceType}</p>
            </div>
            <div className="col s2">
              <p>{AbbrevLookup[this.props.territory]['sentCase']}</p>
            </div>
            <div className="col s2">
              <p>to</p>
            </div>
            <div className="col s2">
                <Dropdown options={AbbrevLookup[this.props.territory]['adjacent']} onChange={this._onToSelect} value={this.state.to} placeholder="Territory" />
            </div>
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

export default AdjustmentOrdersLine