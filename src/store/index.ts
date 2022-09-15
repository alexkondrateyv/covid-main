import {rootReducer} from "./reducers";
import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";

export const store = createStore(rootReducer, applyMiddleware(thunk));