import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeReducer";
import restoReducer from "./reducers/restaurantReducer";
import langReducer from "./reducers/langReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        resto: restoReducer,
        lang: langReducer,
        user: userReducer
    }
})

export default store;
