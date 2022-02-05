import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import useFirebase from '../../Firebase/useFirebase'
import "./card.css"

const ServiceInfo = () => {
    const nevigate = useNavigate()
    const {id} = useParams()
    const [service, setService] = useState([])
    const {user} = useFirebase()

    //for loading id based servicee
    useEffect(()=>{
        fetch(`https://travel-vai-server.herokuapp.com/services/${id}`)
        .then(res => res.json())
        .then(data => setService(data))
    } ,[id])
    const {name, img, desc} = service;
    service.status = "Pending";
    service.email = user.email;
    service.coustomar = user.displayName;
    // post data in order database 
    const handleOrder = () =>{
        
        fetch(`https://travel-vai-server.herokuapp.com/order`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(result => {
            if(result.status === 200){
                alert('order successfull')
            }
        })
    }
    // go back 
    const goBack = () =>{
        // console.log('goback')
        nevigate(-1)
    }
    return (
        <div className='container'>
            <span className='text-muted'>Id: {id}</span>
            <div className="row  row-cols-lg-2 row-cols-1 info shadow-lg px-2 py-5">
                <img className='col shadow-lg' src={img} alt="" />
                <article className='col '>
                    <h2 className='title'>{name}</h2>
                    <p className="text-dark">{desc}</p>
                    <button onClick={handleOrder} className="btn_regular mt-3">Book Now</button>
                    <button onClick={goBack} className="btn_outline mx-2">Go Back</button>
                </article>
            </div>
        </div>
    );
};

export default ServiceInfo;