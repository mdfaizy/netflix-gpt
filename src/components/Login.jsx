import Header from "./Header";
import { useRef, useState } from "react";
import { ValidationFromData } from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
// import {app} from "../utils/firebase";
import { auth } from "../utils/firebase";
// const auth = getAuth(app);
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInFrom, setIsSignInFrom] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  const handleClickButton = () => {
    const message = ValidationFromData(
      email.current.value,
      password.current.value
    );

    setErrorMessage(message);
    console.log(email.current.value);
    console.log(password.current.value);
    console.log(message);

    if (message) return;
    if (!isSignInFrom) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName:userName.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
          console.log(user);
          navigate("/browser");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browser");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "" + errorMessage);
        });
    }
  };

  const toggletosignupFrom = () => {
    setIsSignInFrom(!isSignInFrom);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg"
          alt=""
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute my-36  p-12  bg-slate-500 w-3/12 mx-auto right-0 left-0 round-lg bg-opacity-50"
      >
        <h1 className="font-bold text-3xl text-white py-4 ">
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInFrom && (
          <input
            type="text"
            ref={userName}
            placeholder="Enter Full Name"
            className="p-2 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <input
          type="Password"
          ref={password}
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold -text-lg">{errorMessage}</p>
        <button
          className="p-2 my-4 bg-red-700 w-full rounded-xl"
          onClick={handleClickButton}
        >
          Sign In
        </button>

        <p className="cursor-pointer" onClick={toggletosignupFrom}>
          {isSignInFrom
            ? "New to Netflix?Sign Up Now"
            : "Already registered Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;

// import Header from "./Header"
// import { useRef, useState } from "react"
// import { ValidationFromData } from "../utils/Validation"
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { app } from "../utils/firebase";

// const auth = getAuth(app);

// const Login = () => {
//   const [isSignInFrom, setIsSignInFrom] = useState(true);
//   const [errorMessage, setErrorMessage] = useState(null);
//   const email = useRef(null);
//   const password = useRef(null);
//   const userName = useRef(null);

//   const handleSignUp = () => {

//     createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
//       .then((userCredential) => {
//         // Signed up successfully
//         console.log("User signed up:", userCredential.user);
//         alert("User signed up successfully");
//       })
//       .catch((error) => {
//         // Handle errors
//         console.error("Error signing up:", error);
//         alert("Error signing up: " + error.message);
//       });
//   }

//   const handleClickButton = () => {
//     const message = ValidationFromData(email.current.value, password.current.value);
//     setErrorMessage(message);
//     console.log(email.current.value);
//     console.log(password.current.value);
//     console.log(message);
//   }

//   const toggleToSignUpForm = () => {
//     setIsSignInFrom(!isSignInFrom);
//   }

//   return (
//     <div>
//       <Header />
//       <div className="absolute">
//         <img src="https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg" alt="" />
//       </div>

//       <form onSubmit={(e) => e.preventDefault()} className="absolute my-36 p-12 bg-slate-500 w-3/12 mx-auto right-0 left-0 round-lg bg-opacity-50">
//         <h1 className="font-bold text-3xl text-white py-4 ">{isSignInFrom ? "Sign In" : "Sign Up"}</h1>
//         {!isSignInFrom &&
//           <input type="text" ref={userName} placeholder="Enter Full Name" className="p-2 my-4 w-full bg-gray-700" />
//         }
//         <input type="text" ref={email} placeholder="Email Address" className="p-2 my-4 w-full bg-gray-700" />
//         <input type="Password" ref={password} placeholder="Password" className="p-2 my-4 w-full bg-gray-700" />
//         <p className="text-red-500 font-bold -text-lg">{errorMessage}</p>
//         <button className="p-2 my-4 bg-red-700 w-full rounded-xl" onClick={isSignInFrom ? handleClickButton : handleSignUp}>{isSignInFrom ? "Sign In" : "Sign Up"}</button>
//         <p className="cursor-pointer" onClick={toggleToSignUpForm}>
//           {isSignInFrom
//             ? "New to Netflix? Sign Up Now"
//             : "Already registered? Sign In Now"}
//         </p>
//       </form>
//     </div>
//   )
// }

// export default Login;
