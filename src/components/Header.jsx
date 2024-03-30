 import { signOut } from "firebase/auth";
 import {auth} from "../utils/firebase"
 import { useNavigate } from "react-router-dom";
const Header = () => {


  const navigate=useNavigate()
  const handleSignout = () => {
   
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }
  return (
    <div className="px-8 py-2 bg-gradient-to-b from-black flex justify-between items-center">
      <img
        className="w-44"
        src="https://about.netflix.com/images/logo.png"
        alt=""
      />

      <div className="flex p-4 items-center">
        <img className="w-12 h-12"
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          alt=""
        />
        <p onClick={handleSignout}>Sign Out</p>
      </div>
    </div>
  );
};

export default Header;
