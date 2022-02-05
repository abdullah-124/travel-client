import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap'
import ServiceCard from './ServiceCard'


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('https://travel-vai-server.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])
    
    return services.length === 0 ? <Spinner animation="border" /> : (
        <div className="container">
            <h3 className="title">Treanding Destination</h3>
            <div className='mt-3 mx-auto row row-cols-lg-4 row-cols-md-2 row-cols-1'>
            {
                services.map(service => <ServiceCard key={service._id} service={service}/>)
            }
        </div>
        </div>
    );
};

export default Services;