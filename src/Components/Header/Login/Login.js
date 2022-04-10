import { getAuth, signOut } from "firebase/auth";
import React from "react";
import app from "../../../firebase.init";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";

const auth = getAuth(app);

const Login = () => {
  const [user] = useAuthState(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <h1>Please Login</h1>
      <div>
        <p>{user?.uid && user.displayName}</p>

        {user?.uid ? (
          <button onClick={() => signOut(auth)}>Sign Out</button>
        ) : (
          <button onClick={handleGoogleSignIn}> Sign in with Google </button>
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
