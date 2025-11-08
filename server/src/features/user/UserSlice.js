import { createSlice } from "@reduxjs/toolkit"

const UserSlice = createSlice({
    name: "user",
    initialState: {
        token: localStorage.getItem("token") || "",
        isUserLoggedIn: localStorage.getItem("token") ? true : false,
        userName: "",
        isAdmin: false
    },

    reducers: {
        setToken: (state, action) => {
            const token = action.payload.token
            console.log(token);
            state.token = token
            state.isUserLoggedIn = true
            localStorage.setItem("token", token)
            
            state.isAdmin = false
        },
        removeToken: (state) => {
            state.token = ""
            state.isUserLoggedIn = false
            localStorage.removeItem("token")
        }
    }
})

export default UserSlice.reducer// יצוא של הreducers 
export const { setToken, removeToken } = UserSlice.actions // יצוא של הפונקציות / הפעולות