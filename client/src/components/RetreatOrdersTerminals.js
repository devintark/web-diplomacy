import React, { Component } from "react";
import axios from "axios";
import RetreatOrdersLine from "./RetreatOrdersLine"

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
    var newOrders = this.state.orders.concat([val]);
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