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
  }
  componentDidMount(){
    
  }

  onIssue(val){
    var newOrders = this.state.orders.concat([val]);
    this.setState({orders: newOrders});
    console.log(this.state);
  }

  submitOrderToDB(){
    

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
      <ul>{needOrders}</ul>
    )
  }

}

export default NationalOrdersTerminal;