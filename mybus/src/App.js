import React, {Component} from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import { CircleLoader	} from 'react-spinners';
import './firebase/firebase'


const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker
      defaultIcon="icon-bus.png"
      position={{ lat: -34.397, lng: 150.644 }}
    />
    <Marker
      defaultIcon="icon.png"
      position={{ lat: -50.397, lng: 150.644 }}
    />
    {this.props.markers}

  </GoogleMap>
));



class App extends Component {
  render() {
    return (
      <div>
    <nav/>
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCLLzWlQmAN4f4O5oVQLFzmYFN6Po2ZRWs&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={
          <div class="preloader-wrapper big active">
   <div class="spinner-layer spinner-red-only">
     <div class="circle-clipper left">
       <div class="circle"></div>
     </div><div class="gap-patch">
       <div class="circle"></div>
     </div><div class="circle-clipper right">
       <div class="circle"></div>
     </div>
   </div>
 </div>

    }
        containerElement={<div  style={{ height: `600px` }} />}
        mapElement={<div style={{ height: `50%` }} />}
      />
      <h1>element</h1>
    </div>

    );
  }
}

export default App;
