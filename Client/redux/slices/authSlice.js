import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        role: localStorage.getItem("role") || "",
        user: JSON.parse(localStorage.getItem("user")) || "",
        isAuthenticated: !!localStorage.getItem("token") || null,
    },
    reducers: {
        setUserLogin: (state, action) => {
            state.role = action.payload.role;
            state.user = action.payload.user;
            state.isAuthenticated = true;

            //we are saving the data in localstorage to prevent it from getting lost while refreshing the page
            localStorage.setItem("role", action.payload.role);
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("token", action.payload.token);

        },
        setUserLogout: (state, action) => {
            state.role = null;
            state.user = null;
            state.isAuthenticated = false;

            //we are removing the data from localstorage to prevent it from getting lost while refreshing the page
            localStorage.removeItem("role");
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        }
    }

}
);

export const { setUserLogin, setUserLogout } = authSlice.actions;
export default authSlice.reducer;