import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./RegistrationState";


export default configureStore ({
    reducer :{
        register: registerReducer
    }
})