import React , { useEffect, useState } from 'react';
import Filter from './Filter';
import Alanch from './Alanch';
import './Apps.css';

export default function App(props) {
    const [filteryear,setYear]=useState([]);
    const [newyear,setnewYear]=useState([]);
 
    useEffect(()=>{
        const arry=[...filteryear];
        setnewYear(arry);
    },[filteryear])
   
  

    useEffect(()=>{
        fetch("https://api.spacexdata.com/v4/launches?limit=100&launch_success=true&land_success=true&launch_year=2014")
        .then(res=> res.json())
        .then(lanches=>setYear(lanches.filter(val=> val.links.patch.small!=null)));
    },[]);
 
     function eventHandler(e){
      var copylaunch=filteryear.filter(val=> val.date_local.slice(0,4)===e.target.innerHTML);
      setnewYear(copylaunch);
     }



  const newall= newyear.map(val=> 
    <Alanch  
    key={val.id} 
    image={val.links.patch.small} 
    name={val.name}
    mission={val.date_unix} 
    flight_number={val.flight_number} 
    year={val.date_local.slice(0,4)}
    launch={val.success}
    landing={val.cores[0].landing_success}
    />)  
   
    const eventLaunch=(e)=>{
    var copylaunch=newyear.filter(val=> (val.success ?  "True":  "False").includes(e.target.innerHTML));
    setnewYear(copylaunch);
    }

    const eventLanding=(e)=>{
    var copylaunch=newyear.filter(val=> (val.cores[0].landing_success ?  "True":  "False").includes(e.target.innerHTML));
    setnewYear(copylaunch);
    }

    const eventSearch=(e)=>{
        //console.log(e.target.value);
    }

    


    return (
        <>
        <div className="main">
            <div className="head-logo">
                <h4 className="head-logo">SpacEx Launch programs</h4>
            </div>
             <div className="main-app">
            <div>    
            <Filter event={eventHandler} event1={eventLaunch} event2={eventLanding} event3={eventSearch}/>
            </div> 

            <div>
            {
               newall
            }
            </div>
            </div>
        </div>
        </>
    )
}
