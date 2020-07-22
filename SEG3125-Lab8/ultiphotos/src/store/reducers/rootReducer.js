import authReducer from './authReducer'
import {combineReducers} from 'redux'
import photographerReducer from './photographerReducer'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth : authReducer,
    photographer: photographerReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});

export default rootReducer