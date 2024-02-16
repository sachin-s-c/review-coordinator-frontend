import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import appStore from './store/appStore.ts'
import {persistStore} from 'redux-persist'
import {PersistGate } from 'redux-persist/integration/react'

let peristor=persistStore(appStore)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   
   <Provider store={appStore}>
   <PersistGate loading={null} persistor={peristor}>
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>,
)
