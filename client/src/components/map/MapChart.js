import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  ZoomableGroup
} from "react-simple-maps";
import GeoMap from "../../images/DiplomacyTopoWithPropsAndSeas.json";
import axios from 'axios'

console.log(GeoMap);

let gamestate = {};
//axios.get("/api/game/3").then(game => gamestate = JSON.parse(game)).catch(err => console.log(err));
console.log(gamestate);



const determineGeoColor = (territory, state) => {
  if (!state){
    return "#AAAAAA";
  } 
  if (state[territory] === undefined){
    return "#9998A3";
  }
  if (state[territory]['domain'] === 'naval'){
    return "#C2E9FB";
  }
  switch(state[territory]['owner']){
    case "England":
      return "#4B29C9";
    case "France":
      return "#2968C9";
    case "Italy":
      return "#268E24";
    case "Germany":
      return "#546254";
    case "Austria":
      return "#DA5D5D";
    case "Turkey":
      return "#DCE166";
    case "Russia":
      return "#F0F1DD";
    default:
      return "#9998A3";
  }
}


class MapChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameboard: {}
    }
  }
  
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };


  componentWillMount(){
    axios.get("/api/game/5").then(game => {
      gamestate = game.data;
      console.log(Object.entries(gamestate));
      this.setState({gameboard: gamestate});
      console.log(this.state);
      console.log(this.props.gameid)
    }).catch(err => console.log(err));
   
  };

  render() {
    const { user } = this.props.auth;
    console.log(user);
    return (
      <div className="container" style = {{justifyItems: "center"}}>
      
      <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        rotate: [-11.0, -54.0, 0],
        scale: 800
      }}
      style= {{
        width: "100%",
        height: "auto",
        border: "solid 5px"
      }}
    >
      
      <ZoomableGroup>
      <Geographies geography={GeoMap}>
        {({ geographies }) =>
          geographies.map(geo =>  (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style= {{
                default: {
                  fill: determineGeoColor(geo.properties.dip, this.state.gameboard),
                  stroke: "#000000",
                  opacity: "60%"
                },
                hover: {
                  fill: determineGeoColor(geo.properties.dip, this.state.gameboard),
                  stroke: "#EFEF29"
                }
              }}
            />
          ))
        }
      </Geographies>
      </ZoomableGroup>
    </ComposableMap>
    </div>
    );
  }
}

MapChart.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(MapChart);


/** 
const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-20.0, -52.0, 0],
        scale: 700
      }}
    >
      <Graticule stroke="#EAEAEC" />
      <Geographies geography={GeoMap}>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#9998A3"
              stroke="#EAEAEC"
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};
*/
//export default MapChart;