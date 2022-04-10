import { useEffect, useState } from "react";
import app from "../firebase.init";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user);
    })
  },[])

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {})
  }

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((res) => setUser(res.user))
      .catch((error) => console.log(error));
  };

  return { user, googleSignIn, handleSignOut };
};

export default useFirebase;
