import React, { Component } from "react";
import axios from "axios";
import AdjustmentOrderLine from "./AdjustmentOrderLine"
import BoardInfo from "../utils/GameInfo"


const HomeBases = {
    England: ["london", "liverpool", "edinburgh"],
    France: ["paris", "brest", "marseilles"],
    Italy: ["rome", "naples", "venice"],
    Germany: ["berlin", "kiel", "munich"],
    Austria: ["vienna", "trieste", "budapest"],
    Russia:  ["moscow", "sevastapol", "stpetersburg", "stpetersburgnc", "stpetersburgsc"],
    Turkey: ["constantinople", "ankara", "smyrna"]
};

class AdjustmentOrdersTerminal extends Component {
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
    const mySupplyCenters = Object.entries(this.props.gamestate).filter(item => item[1].hasOwnProperty('occupied') && BoardInfo[item[0]]['supply'] && item[1]['owner'] === this.props.country).length;
    const myForces = Object.entries(this.props.gamestate).filter(item => item[1].hasOwnProperty('occupied') && item[1]['occupier']['country'] === this.props.country);
    const numForces = myForces.length;
    const delta = mySupplyCenters - numForces;
    let needOrders = [];
    if (delta > 0){
        needOrders = HomeBases[this.props.country].filter(territory => this.props.gamestate[territory]['owner'] === this.props.country).map(homebase => 
            <li key={homebase}><AdjustmentOrderLine 
                                                    delta={delta} 
                                                    territory={homebase} 
                                                    onIssue={this.onIssue}/>
            </li>
        );
    }
    if (delta < 0 ){
        needOrders = myForces.map(territory => 
            <li key={territory[0]}><AdjustmentOrderLine 
                                                delta={delta} 
                                                territory={territory[0]} 
                                                onIssue={this.onIssue} />
            </li>
        );
    }

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

export default AdjustmentOrdersTerminal;