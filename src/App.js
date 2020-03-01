import React, {Component} from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import _ from 'lodash'
import { CircleLoader	} from 'react-spinners';
import db from './firebase/firebase'
import loadingElement from './components/loading-element';
import  MapWithAMarker from './components/map' ;
import Footer from './components/footer';
import TimingDetails from './components/timing-details'
import './App.css';




class App extends Component {
  constructor(props){
    super(props);
    this.state={render:false};

  }
  componentDidMount(){
  // const myref=db.collection('stations').doc('EGrK1XD1iJdkgSx97u4g');
  //   db.collection('buses').get().then(dataSnapshot=>{
  //   dataSnapshot.forEach(doc=>{
  //     doc.data().ligne.get().then(doc=>{
  //       console.log(doc.data());
  //     })
  //   })
  //
  //   });









  }
  render() {

    return (
      <div>
      <div >
        <nav>
          <div class="nav-wrapper fixed">
            <a href="#" class="brand-logo"><i class="material-icons">directions_bus</i>MyBus</a>
          </div>
        </nav>


      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCLLzWlQmAN4f4O5oVQLFzmYFN6Po2ZRWs&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<loadingElement/>}
        containerElement={<div  style={{height:`450px`}} />}
        mapElement={ <div
                  style={{
                      height:`100%`
                    }}
            />}
      />

    </div>
<TimingDetails/>

<Footer/>

  </div>


    );
  }
}


export default App;
