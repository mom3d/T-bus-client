import React, {Component} from 'react';
import Markers from './markers'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polyline,
  Polygon
} from "react-google-maps";
import { CircleLoader	} from 'react-spinners';
class Map extends Component{
  constructor(props){
    super(props);
    this.state={
      position:{lat:32,lng:30}
    };
    this.locationSuccess=this.locationSuccess.bind(this);
    this.locationsError=this.locationsError.bind(this);


  }

  locationsError(error){
    console.log('Error occurred. Error code: ' + error.code);
  }
  locationSuccess(position){
    this.setState({position:{lat:position.coords.latitude,lng:position.coords.longitude}});



  }


  componentDidMount(){



    navigator.geolocation.getCurrentPosition(this.locationSuccess, this.locationsError, {
    enableHighAccuracy: true
  });


  }
  render(){




    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{lat:this.state.position.lat,lng:this.state.position.lng}}
        center={{lat:this.state.position.lat,lng:this.state.position.lng}}
      >

        <Marker
        position={ {lat:this.state.position.lat,lng:this.state.position.lng}}
        />
      <Markers/>

      </GoogleMap>

    );
  }
}


 const  MapWithAMarker = withScriptjs(withGoogleMap(Map));





export default MapWithAMarker;
