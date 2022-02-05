import React from 'react';
import './counter.css'

const Counter = () => {
    return (
        <div className="row mx-auto row-cols-1 row-cols-lg-3 row-cols-md-2 counter gx-5">
            <div className="col mx-auto text-center">
                <div className="card mt-3">
                <p>Views</p>
                <h2>3.4k</h2>
                </div>
            </div>
            <div className="col mx-auto text-center">
                <div className="card mt-3">
                <p>Travelars</p>
                <h2>103</h2>
                </div>
            </div>
            <div className="col mx-auto text-center">
               <div className="card mt-3">
               <p>Reviews</p>
                <h2>95</h2>
               </div>
            </div>
        </div>
    );
};

export default Counter;