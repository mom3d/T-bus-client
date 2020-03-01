import React from 'react';
export default (props)=>{
  return (
    <li class="collection-item avatar">
      <i class="material-icons circle red ">album</i>
      <span class="title">{props.nom}</span>
      <p>{props.heure}</p>
      <a href="#!" class="secondary-content"><i class="material-icons">access_time</i></a>
    </li>

  )
}
