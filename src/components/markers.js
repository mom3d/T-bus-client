import React, {Component} from 'react';
import {Marker} from 'react-google-maps';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import fetchStations from '../actions/fetchStations';
import fetchBuses from '../actions/fetchBuses';
import changeToBus from '../actions/changeToBus';
import changeToStation from '../actions/changeToStation';
import fetchSelectedBus from '../actions/fetchSelectedBus';
import fetchSelectedStation from '../actions/fetchSelectedStation'

class Markers extends Component{
  constructor(props){
    super(props);
  }
  handleStationMarkerClick(e){
    const stationId=e.id;
    this.props.fetchSelectedStation(stationId);
    this.props.changeToStation();


  }
  handleBusMarkerClick(e){
    const busId=e.id;
    console.log(busId);
    this.props.fetchSelectedBus(busId);

    this.props.changeToBus();



  }

  renderBuses(){
    return this.props.buses.map((bus)=>{
      return (
        <Marker
          key={bus.id}
          icon="icon-bus.png"
          position={{lat:bus.location._lat,lng:bus.location._long}}
          onClick={this.handleBusMarkerClick.bind(this,bus)}
        />
      )

    })

  }
  renderStations(){
    return this.props.stations.map(station=>{

      return(
        <Marker
          key={station.nom}
          icon="front-bus.png"
          position={{lat:station.geolocalisation._lat,lng:station.geolocalisation._long}}
          onClick={this.handleStationMarkerClick.bind(this,station)}
          options={{id:station.id}}

        />
      )
    });
  }
  componentDidMount(){

    this.props.fetchStations();
    this.props.fetchBuses();



  }
  render(){
    return (
      <div>
        {this.renderStations()}
        {this.renderBuses()}
      </div>
    );

  }
}
const mapStateToProps=(state)=>{

  return {
    stations:state.stations,
    buses:state.buses,


  };
}

const mapDispatchtoProps=(dispatch)=>{
 return bindActionCreators({
   fetchStations:fetchStations,
   fetchBuses:fetchBuses,
   changeToBus:changeToBus,
   changeToStation:changeToStation,
   fetchSelectedBus:fetchSelectedBus,
   fetchSelectedStation:fetchSelectedStation
 }
   ,dispatch);
}

export default connect(mapStateToProps,mapDispatchtoProps)(Markers);
