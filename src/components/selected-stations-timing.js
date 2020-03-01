import React,{Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import '../App.css';
import StationDetais from './station-details';


 class SelectedStationTiming extends Component{
  constructor(props){
    super(props);
    console.log(this.props.selectedStation.details);
  }
renderSelectedStation(){
 return this.props.selectedStation.details.map(detail=>{
    return <StationDetais key={detail.heure_depart} nom={detail.nom} heure={detail.heure_depart}/>

 });
}
  render(){
console.log(this.props.selectedStation.details);
    return (
    <div


      // className={this.props.selector==='nothing'||this.props.selector==='bus'?'hidden':''}
      >
      <ul className="collection">
        <li className="collection-header"><h4>Station : {this.props.selectedStation.nom}</h4></li>
        {this.renderSelectedStation()}
      </ul>
    </div>
    );
  }
}
const mapStateToProps=(state)=>{
  return {
    selectedStation:state.selectedStation,
    selector:state.selector
  };

}

export default connect(mapStateToProps)(SelectedStationTiming);
