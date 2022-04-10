import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import app from "../../firebase.init";

const auth = getAuth(app)

const Register = () => {

  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const [user] = useAuthState(auth);

  return (
    <>
      <h1>Please Register</h1>
      <div>

        <p>{user?.uid && user.displayName}</p>

        {user?.uid ? (
          <button onClick={() => signOut(auth)}>Sign Out</button>
        ) : (
          <button onClick={() => signInWithGoogle()}> Sign in with Google </button>
        )}
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
