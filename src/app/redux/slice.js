// const { createSlice, nanoid, current, createAsyncThunk } = require("@reduxjs/toolkit");
import {
    createSlice,
    nanoid,
    current,
    createAsyncThunk
  } from "@reduxjs/toolkit";


const getUsersFromLocalStorage = () => {
    if (typeof window !== "undefined") {
      const users = localStorage.getItem("users");
      return users ? JSON.parse(users) : [];
    }
    return [];
  };
  
  const initialState = {
    userAPIData: [],
    users: getUsersFromLocalStorage(),
    isloading: false,
  error: null
  };


// const initialState = {
//     userAPIData: [],
//     users: JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
// }

export const fetchApiUsers = createAsyncThunk("fetchApiUsers", async () => {

    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    return result.json();
});

const Slice = createSlice({
    name: "addUserSlice",
    initialState,
    reducers: {
        addUser: (state, action) => {

            const data = {
                id: nanoid(),
                name: action.payload.name,
                mail:action.payload.mail
            }

            state.users.push(data);
            let userData = JSON.stringify(current(state.users));
            localStorage.setItem("users", userData)
        },
        removeUser: (state, action) => {
            const data = state.users.filter((item) => {
                return item.id !== action.payload
            })
            state.users = data;
            let userData = JSON.stringify(data);
            localStorage.setItem("users", userData)

        }
    },
    extraReducers: (builder) => {
        builder
      .addCase(fetchApiUsers.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchApiUsers.fulfilled, (state, action) => {
        state.isloading = false;
        state.userAPIData = action.payload;
      })
      .addCase(fetchApiUsers.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.error.message;
      });
    }
});

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;