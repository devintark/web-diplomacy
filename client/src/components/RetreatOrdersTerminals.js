import React, { Component } from "react";
import axios from "axios";
import RetreatOrdersLine from "./RetreatOrdersLine";
import AbbrevLookup from "../utils/AbbrevLookup";

class RetreatOrdersTerminal extends Component {
  constructor(props){
    super(props);
    this.state = {
      orders: [],
      country: this.props.country
    };
    this.onIssue = this.onIssue.bind(this);
    this.submitOrderToDB = this.submitOrderToDB.bind(this);
  }

  onIssue(val){
    var newOrders = this.state.orders.filter(order => order[0] !== val[0] );
    newOrders = newOrders.concat([val]);
    this.setState({orders: newOrders});
    console.log(this.state);
  }

  submitOrderToDB(){
    axios.post('/api/orders/' + this.props.gamestate.gameid, {
      orders:this.state.orders,
      country: this.props.country
    });

  }

  render(){
    const needOrders = this.props.dislodged.map(dislodged => 
      <li key={dislodged[0]}><RetreatOrdersLine 
                                    territory={dislodged['territoryName']}
                                    forceType={dislodged['Type']} 
                                    onIssue={this.onIssue}/> </li>
      );

    return(
      <div>
        <ul>{needOrders}</ul>
        {this.state.orders.map(order =>
          <div class="row">
            <div class="col s4 offset-s4">
            <span>{this.props.gamestate[AbbrevLookup[order[0]]['full']]['occupier']['Type'] === "Army" ? "A" : "F" } {order[0]}</span>
            {order[1].map(actions => <span> {actions}</span>)}
            </div>
          </div>)}
        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem"
          }}
          type="submit"
          onClick={this.submitOrderToDB}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Submit Order
        </button>
      </div>
    )
  }

}

export default RetreatOrdersTerminal;