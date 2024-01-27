import { combineReducers } from "@reduxjs/toolkit";

import userSlice from "./userSlice"
import postSlice from "./postSlice"
import themeSlice from "./theme"

const rootReducer = combineReducers({
    user: userSlice,
    posts: postSlice,
    theme: themeSlice
})

export { rootReducer };