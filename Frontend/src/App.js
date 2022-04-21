import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Login from "./components/authentication/Login";
import Public from "./components/Public";
import { login, selectUser } from "./Feature/Userslice";
import { auth } from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          login({
            userName: authUser.displayName,
            photo: authUser.photoURL,
            email: authUser.email,
            uid: authUser.uid,
          })
        );
        console.log("AuthUser", authUser);
      }
    });
  }, [dispatch]);
  return (
    <div className="App"> 
      
      {/* <h1>This is for testing</h1> */}
      {user ? <Public /> : <Login />}
    </div>
  );
}

export default App;