// import {configureStore} from "@reduxjs/toolkit"
// import useReducer  from "./userSlice";
// const appStore=configureStore({
//     reducer:{
//         user:useReducer,
//     }

// })

// export default appStore;


// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
    }
});

export default appStore;
