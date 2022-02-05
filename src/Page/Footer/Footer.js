import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='p-3'>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                <div className="col">
                    <p>support</p>
                    <p>contact</p>
                    <p>question</p>
                </div>
                <div className="col">
                    <h3>go to</h3>
                    <Link to='/manageOrder'>Manage Order</Link><br />
                    <Link to='/myOrder'>my Order</Link><br />
                    <Link to='/addService'>Add Service</Link><br />
                    <Link to='/review'>Add review</Link>
                </div>
                <div className="col">
                    <h4>Social</h4>
                    <p>facebook</p>
                    <p>pintrest</p>
                    <p>youtube</p>
                    <p>abdullahsakib792@gmailcom</p>
                </div>
                <div className="col">
                    <form className=''>
                        <h6>Subscribe</h6>
                        <input type="email" placeholder='Enter your email'/>
                        <button className='btn btn-light'>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="text-center">Copyright &copy; travelVai 2022</div>
        </div>
    );
};

export default Footer;