import apiSlice from "./apiSlice";
import {configureStore} from "@reduxjs/toolkit"
import UserSliceReducer from "../features/user/UserSlice"
const store = configureStore({
    reducer:{
        user: UserSliceReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
        
    },
    middleware:(getDefauleWiddleware) =>
        getDefauleWiddleware().concat(apiSlice.middleware),
    devTools: true

})
export default store