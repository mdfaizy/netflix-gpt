


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCcLoqnCDyCbIOqptv20KyYqwbpGvj_daw",
  authDomain: "netflixgpt-58cd6.firebaseapp.com",
  projectId: "netflixgpt-58cd6",
  storageBucket: "netflixgpt-58cd6.appspot.com",
  messagingSenderId: "190603771385",
  appId: "1:190603771385:web:c2d77784a197674e0ad128",
  measurementId: "G-YLDQFEKE0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export{app};
export const auth = getAuth();


