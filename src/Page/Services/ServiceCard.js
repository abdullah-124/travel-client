import React from 'react';
import { Link } from 'react-router-dom'
import "./card.css"

const ServiceCard = (props) => {
    const {_id, name, img} = props.service
    return (
        <div className='col mx-auto'>
            <div className='service-card pb-3'>
                <img className='img-fluid' src={img} alt="" />
                <div className='p-2'>
                <h3 className='title'>{name}</h3>
                <Link to={`/services/${_id}`} className='btn_outline '>See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;