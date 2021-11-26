import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import { 
  persistStore, 
  persistReducer, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } 
  from 'redux-persist'
import {contactsReducer} from '/contacts';
import {authReducer} from '/auth'
import storage from 'redux-persist/lib/storage'

const middleware = [...getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
}), logger]

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer)
    contacts: contactsReducer,
  },  middleware,
  devTools: process.env.NODE_ENV === 'development'
})


export const persistor = persistStore(store)


// ======================== old ========================== // 
// import {configureStore} from '@reduxjs/toolkit'
// import {setupListeners} from '@reduxjs/toolkit/query'
// import {contactApi} from './contacts/contactSlice'

// export const store = configureStore({
//   reducer: {
//     [contactApi.reducerPath]: contactApi.reducer,
//   },
//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware(),
//     contactApi.middleware,
//   ],
//   devTools: pr*ocess.env.NODE_ENV === 'development'
// })

// setupListeners(store.dispatch)

// export default store