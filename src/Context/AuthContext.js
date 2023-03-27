import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../Firebase/firebase";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  async function signUp(email, password) {
    const userCred = await auth
      .createUserWithEmailAndPassword(email, password);
    db.collection("users").doc(userCred.user.uid).set({
      email: email,
    });
  }

  function logIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logOut() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
