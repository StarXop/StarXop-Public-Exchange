import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Feature/Userslice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
