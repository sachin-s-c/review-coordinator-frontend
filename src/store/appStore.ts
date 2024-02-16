import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";



const reducers=combineReducers({

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