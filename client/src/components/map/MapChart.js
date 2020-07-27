import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
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

const supplycenters = [
  { 
    name: "Portugal",
    coordinates: [-8.794762, 38.763853]
  },
  { name: "Spain", coordinates: [-3.575707, 40.616364] },
  { name: "Brest", coordinates:[-3.929674, 48.290072] },
  { name: "Paris", coordinates: [2.196044, 48.726667] },
  { name: "Marseilles", coordinates: [5.449229, 43.437698] },
  { name: "Belgium", coordinates: [2.682197, 50.827066] },
  { name: "Holland", coordinates: [4.530434, 51.971087] },
  { name: "London", coordinates: [-0.185114, 51.467743] },
  { name: "Liverpool", coordinates: [-2.427472, 53.382233] },
  { markerOffset: 25, name: "Edinburgh", coordinates: [-3.37278, 56.307711] },
  { name: "Kiel", coordinates: [9.998804, 53.540688] },
  { markerOffset: -15, name: "Denmark", coordinates: [11.739799, 55.517008] },
  { markerOffset: -15, name: "Berlin", coordinates: [13.410655, 52.593869] },
  { markerOffset: -15, name: "Munich", coordinates: [11.265726, 48.41244] },
  { markerOffset: -15, name: "Venice", coordinates: [12.341353, 45.601543] },
  { markerOffset: -15, name: "Norway", coordinates: [10.483927, 59.967747] },
  { markerOffset: -15, name: "Sweden", coordinates: [15.869984, 58.67954] },
  { markerOffset: -15, name: "Warsaw", coordinates: [21.122888, 52.231937] },
  { markerOffset: -15, name: "St Petersburg", coordinates: [30.309157, 59.923602] },
  { markerOffset: -15, name: "Moscow", coordinates: [37.020807, 55.931212] },
  { markerOffset: -15, name: "Sevastapol", coordinates: [34.263054, 45.279846] },
  { markerOffset: -15, name: "Ankara", coordinates: [33.340327, 40.118049] },
  { markerOffset: -15, name: "Smyrna", coordinates: [27.589038, 38.121] },
  { markerOffset: -15, name: "Constantinople", coordinates: [28.661192, 41.20193] },
  { markerOffset: -15, name: "Greece", coordinates: [23.655527, 38.088626] },
  { markerOffset: -15, name: "Bulgaria", coordinates: [23.348057, 42.67613] },
  { markerOffset: -15, name: "Rumania", coordinates: [26.085053, 44.434447] },
  { markerOffset: -15, name: "Serbia", coordinates:  [20.413205, 44.809557] },
  { markerOffset: -15, name: "Budapest", coordinates: [19.017773, 47.473579] },
  { markerOffset: -15, name: "Trieste", coordinates: [14.844166, 45.50798] },
  { markerOffset: -15, name: "Vienna", coordinates: [16.361702, 48.196251] },
  { markerOffset: -15, name: "Rome", coordinates: [12.591637, 41.91926] },
  { markerOffset: -15, name: "Naples", coordinates: [14.733763, 40.856082] },
  { markerOffset: -15, name: "Tunis", coordinates: [9.670691, 36.301044] }
];

const filler = "red";

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
      data-tip=""
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
              onMouseEnter={() => {
                const { dip } = geo.properties;
                this.props.setTooltipContent(`${dip}`);
              }}
              onMouseLeave={() => {
                this.props.setTooltipContent("");
              }}
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
      {supplycenters.map(({ name, coordinates }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={3} fill="#FF0" stroke="#000" strokeWidth={1} />
      {/**<ellipse transform="rotate(-30)" rx="10" ry="2" fill={filler} stroke="blue" stroke-width="2"  />*/}
        </Marker>
      ))}
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

export default React.memo(connect(
  mapStateToProps,
  { logoutUser }
)(MapChart));

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