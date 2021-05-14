import React from 'react';
import './Alanch.css';
//import PropTypes from "prop-types";

export default function Alanch(props) {
var lanch;
    if(props.launch){
         lanch="{launch success}"
    }else{
         lanch="false"
    }

    var land;
    if(props.landing){
         land="{success land}"
    }else{
         land="false"
    }
  
    return (
        <>
        <div className="main-app">
            <div className="all-launch">
                <div className="image-info">
                <img className='image-app' src={props.image} alt="" />
                </div>   
                <div className="lanch-details">
                <h3 style={{color:"mediumslateblue"}}>{props.name.slice(0,17)} #{props.flight_number}</h3>
                <strong>Mission Ids: </strong>
                <ul>
                   <li  className="mission">{props.mission}</li>
                </ul>
               <p><strong>Launch-Year: </strong>{props.year}</p>
               <p><strong>Successful Launch: </strong>{lanch}</p>
               <p><strong>Successful Landing: </strong>{land}</p>
               </div>
            </div>
        </div>
        </>
    )
}
