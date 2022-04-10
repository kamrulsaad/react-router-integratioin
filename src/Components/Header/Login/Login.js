import { getAuth, signOut } from "firebase/auth";
import React from "react";
import app from "../../../firebase.init";
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth'

const auth = getAuth(app);

const Login = () => {

    const [user] = useAuthState(auth);

    const [signInWithGoogle] = useSignInWithGoogle(auth);

  return (
    <div>
      <h1>Please Login</h1>
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
    </div>
  );
};

export default Login;
