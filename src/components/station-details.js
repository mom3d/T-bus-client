import React, {Component} from 'react';
export default class StationDetails extends Component{
handleClick(){

}
render(){
  return (

    <li class="collection-item avatar">
     <i class="material-icons circle red">directions_bus</i>
     <span class="title">{this.props.nom}</span>
     <p>{this.props.heure}</p>
     <div style={ {'cursor':'pointer'} }class="secondary-content"><i className="material-icons">send</i></div>
    </li>
  )
}

}
