import React, {Component} from 'react';
import SelectedBusTiming from './selected-bus-timing';
import SelectedStationsTiming from './selected-stations-timing';
import {connect} from 'react-redux';


class TimingDetails extends Component{
  constructor(props){
      super(props);
      

  }
  shouldRender(){
    switch (this.props.selector) {
      case 'bus':
        return     <SelectedBusTiming/>;
      case 'station':
      return <SelectedStationsTiming/>
      default:
      return <div></div>
}

    }
    render(){
      console.log(this.props.selector);
      return this.shouldRender();
    }
}
const mapStateToProps=state=>{
  return {
    selector:state.selector
  }
}
export default connect(mapStateToProps)(TimingDetails)
