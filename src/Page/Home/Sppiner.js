import React from 'react';
import CircleLoader from "react-spinners/CircleLoader";


const Sppiner = () => {
    return (
        <div className='spiner'>
            <CircleLoader size={150} color='#f8406e' loading></CircleLoader>
        </div>
    );
};

export default Sppiner;