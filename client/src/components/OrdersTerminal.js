import React, { Component } from "react";
import axios from "axios";
import OrdersLine from "./OrderLine"

class NationalOrdersTerminal extends Component {
  constructor(props){
    super(props);
    this.state = {
      orders: [],
      country: ""
    };
    this.onIssue = this.onIssue.bind(this);
    this.submitOrderToDB = this.submitOrderToDB.bind(this);
  }
  componentDidMount(){
    
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
    const onlyTerritoryGameState = Object.entries(this.props.gamestate).filter(item => item[1].hasOwnProperty('occupied'));
    const allTerritoriesList = onlyTerritoryGameState.map(terr => terr[0]);
    const myTerritoriesList = onlyTerritoryGameState.filter(item =>  item[1]['occupier']['country'] === this.props.country).map(terr => terr[0]); 
    const territories = Object.entries(this.props.gamestate).filter(item => item[1].hasOwnProperty('occupied') && item[1]['occupier']['country'] === this.props.country)
    const needOrders = territories.map(terr => 
      <li key={terr[0]}><OrdersLine territory={terr[0]} 
                                    allTerritories={allTerritoriesList}
                                    myTerritories={myTerritoriesList}
                                    onIssue={this.onIssue}/> </li>
      )
    return(
      <div class="container">
        <div class="row"> 
          <h6 class="col s4 offset-s4">{this.props.country}'s orders!</h6>
        </div>
        <ul>{needOrders}</ul>
        <div class="row">
          <div class="col s4 offset-s4">
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
        </div>
        <div class="divider"></div>
      </div>
    )
  }

}

export default NationalOrdersTerminal;