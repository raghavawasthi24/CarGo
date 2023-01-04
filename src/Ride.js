import React,{useEffect} from 'react';
import "./Ride.css";
import user from "./images/user.png";
import { Ridehandler } from './Request';
import axios from 'axios';
// import { Navigate, useNavigate } from 'react-router-dom';
import { passengerDetails } from './Request';
import { profile_data } from './Login';

const Ride = (props) => {

  // const navigate=useNavigate();
  // const navigate=useNavigate();
  //  useEffect(()=>{
  //   // console.log(Ridehandler)
  //   if(!localStorage.getItem("login")){
  //        navigate("/");
  //   }
  // })

  const booked=()=>{
    axios.post(`https://web-production-0189.up.railway.app/vehicle/requestrides/${props.id}/${passengerDetails.vacancy}`,{
       source:props.source,
       ride:props.id,
       destination:props.destination,
       passenger:passengerDetails.vacancy,
       date:props.date,
      //  reciever:profile_data.id,
      reciever:localStorage.getItem("profile_id"),
    }).then(res=>{
      console.log(res);
      // navigate("/");
    }).catch(err=>{
      console.log(err)
    })
  }
  return (
    <div className='ride'>

      <div className='stats'>
        <div className='driver-profile'>
          <img src={user}/>
          <p>{props.name}</p>
          <p>Ratings</p>
        </div>
        <p id="price"><span>Rs. </span>{props.pricing}</p>
        </div>

        <div className='overview-ride'>
          <p id="source"> <span>{props.time}</span> <span>|</span> <span>{props.source}</span> </p>
          <p id="vehicle"><span>-</span><span>{props.vehicle}</span><span>-</span></p>
          <p id="destination">{props.destination}</p>
        </div>
        
        <div className='btn-request'>
          <button onClick={booked}>BOOK</button>
        </div>
        
        
    </div>
  )
}

export default Ride