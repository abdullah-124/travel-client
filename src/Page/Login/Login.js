import React from "react";
import "./Login.css";
import useFirebase from "../../Firebase/useFirebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  console.log(navigate);
  const { user, error, handleGoogleSignIn } = useFirebase();
  if(user.email){
    navigate(-1)
  }
  // console.log(error);
  console.log(user)
  
  return (
    <div>
      <div className="login-container">
        <div className="login p-5">
            <h6>{error}</h6>
          <h1>Please Login</h1>
          <hr />
          <p>Login In With </p>
          <button onClick={handleGoogleSignIn} className="btn btn-light mt-2">
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
