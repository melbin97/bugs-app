import { createSelector, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {isLoggedIn: false, user: {}},
  reducers: {
    login: (user, action) => {
     const { userName, password } = action.payload
     if(userName === "M" && password === "1") {
       user.isLoggedIn = true
       user.user = {
         id: 123,
         name: "Melbin Mathew",
         accessToken: "1derd",
         isLoggedIn: true
       }
     } else {
       throw "Username or password is incorrect"
     }
    },
    logout: (user, action) => {
      user.isLoggedIn = false,
      user.user = {}
    }
  }
})

export const getUserInfoSelector = createSelector(
  state => state.entities.authentication,
  authentication => authentication.user
)

export const getUserLoggedInStatus = createSelector(
  state => state.entities.authentication,
  authentication => authentication.isLoggedIn
)

export const  { login, logout } = slice.actions
export default slice.reducer