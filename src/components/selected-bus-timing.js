import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BusDetails from './bus-details';
import '../App.css';
import fetchSelectedBus from '../actions/fetchSelectedBus';
import _ from 'lodash';




class SelectedBusTiming extends Component{
  constructor(props){
    super(props);



  }

  renderSelectedBus(){
    return this.props.selectedBus.details.map(detail=>{
      return <BusDetails key={detail.heure} nom={detail.station.nom} heure={detail.heure}/>

})






}


render(){
console.log(!!this.props.selectedBus.incident);
  return (
    <div
      // className={this.props.selector==='nothing'||this.props.selector==='station'?'hidden':''}
      >
    <ul class="collection">
      <li class="collection-header"><h4>Bus:{this.props.selectedBus.nom}</h4>
      {!!!this.props.selectedBus.incident? '' :<div class="card-panel">
    <span class="red-text text-darken-2">{this.props.selectedBus.incident}</span>
  </div>
       }
    </li>
      {this.renderSelectedBus()}


      </ul>
    </div>
  );

}
}

const mapStateToProps=(state)=>{

  return{

    selectedBus:state.selectedBus

  }
}
export default connect(mapStateToProps)(SelectedBusTiming);
