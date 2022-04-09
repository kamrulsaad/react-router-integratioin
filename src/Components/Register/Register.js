import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Register = () => {

   const {googleSignIn} = useFirebase();

  return (
    <>
    <h1>Please Register</h1>
      <div>
          <button onClick={googleSignIn}> Sign in with Google </button>
          <br />
          <input type="text" placeholder="Enter your email" />
          <br />
          <input type="password" placeholder="Enter Password" />
          <br />
          <input type="button" value="Submit" />
      </div>
    </>
  );
};

export default Register;
