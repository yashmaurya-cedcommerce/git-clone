import { combineReducers } from "redux";
import gitReducer from "./git/reducers";

const rootReducer = combineReducers({
    git: gitReducer
})

export default rootReducer