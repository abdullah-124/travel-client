import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../../Firebase/useFirebase";

const PrivateHeader = () => {
  const { user, handleSignOut } = useFirebase();
  const signOut = () =>{
    const signOut = window.confirm("Do You went to sign out ?")
    console.log(signOut)
    if(signOut){
      handleSignOut()
    }
  }
  return (
    <div className="menu">
      <Link to="/myorder">My Order</Link>
      <Link to="/manageOrder">Manage Order</Link>
      <Link to="/addService">Add Service</Link>
      <Link to="/review">Review</Link>
      
      <DropdownButton variant="none" drop="start"  title="User">
        <Dropdown.Item >
          <span><img className="user" src={user.photoURL} alt="" /> {user.displayName}</span>
        </Dropdown.Item>
        <Dropdown.Item>
          <button onClick={signOut} className="btn_outline">
            Sign Out
          </button>
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default PrivateHeader;
