import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import studentReducer from '../redux /studentSlice'
import reviewerReducer from "../redux /reviewerSlice";
import coordinatorReducer from "../redux /coordinatorSlice"

const reducers=combineReducers({
    reviewer:reviewerReducer,
    student:studentReducer,
    coordinator:coordinatorReducer

})

const persistConfig={
    key:'root',
    storage
}

const persistedReducer=persistReducer(persistConfig,reducers)


const appStore=configureStore({
    reducer:persistedReducer,
    
})


export default appStore