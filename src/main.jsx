
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'


// ReactDOM.createRoot(document.getElementById('root')).render(
  
//     <App />
 
// )



import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

ReactDOM.createRoot(document.getElementById("root")).render(

  <BrowserRouter>
  <Provider store={appStore}>
    <App />
    </Provider>
  </BrowserRouter>
 
);
