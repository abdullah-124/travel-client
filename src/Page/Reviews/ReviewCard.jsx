import React from 'react';
import "./style.css"

const ReviewCard = (props) => {
    const { name, image, text } = props.review
    return (
        <div className='col mt-3 mx-auto'>
            <div className="card m-2">
            <div className="user-info">
                <img src={image} alt="" />
                <h6>{name}</h6>
            </div>
            <div className="text">
                <p>{text}</p>
            </div>
            </div>
        </div>
    );
};

export default ReviewCard;