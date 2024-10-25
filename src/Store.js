import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slice";

export default  configureStore({
    reducer:postReducer
})