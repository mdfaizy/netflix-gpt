import Header from "./Header"
import { useState } from "react"

const Login = () => {


  const [isSignInFrom,setIsSignInFrom]=useState(true)

  const toggletosignupFrom=()=>{
    setIsSignInFrom(!isSignInFrom);
  }
  return (
    <div>
    <Header/>
<div className="absolute">
<img src="https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg" alt="" />
</div>

<form className="absolute my-36  p-12  bg-slate-500 w-3/12 mx-auto right-0 left-0 round-lg bg-opacity-50">
<h1 className="font-bold text-3xl text-white py-4 ">{isSignInFrom?"Sign In" :"Sign Up"}</h1>
{!isSignInFrom&&
  <input type="text" placeholder="Enter Full Name" className="p-2 my-4 w-full bg-gray-700" />

}
  <input type="text" placeholder="Email Address" className="p-2 my-4 w-full bg-gray-700" />
  <input type="Password" placeholder="Password" className="p-2 my-4 w-full bg-gray-700" />
  <button className="p-2 my-4 bg-red-700 w-full rounded-xl" >Sign In</button>


<p className="cursor-pointer" onClick={toggletosignupFrom}>
{isSignInFrom 
?"New to Netflix?Sign Up Now" :
"Already registered Sign In Now."}
</p>
</form>
        
    </div>
  )
}

export default Login