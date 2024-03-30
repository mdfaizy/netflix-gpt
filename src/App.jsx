import { Route, Routes } from "react-router-dom";
import Body from "./components/Body"; 
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "./utils/firebase";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { addUser ,removeUser} from "./utils/userSlice";
import Browise from "./components/Browise";
import Login from "./components/Login";

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid ,email,displayName} = user.uid;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
      } else {
        // User is signed out
        dispatch(removeUser());
   
      }
    });
  },[])
  return (
    <>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Login />} />
        <Route path="/browser" element={<Browise/>}/>
      </Routes>
      <button  className="z-600">
        Sign Up
      </button>
    </>
  );
}

export default App;
