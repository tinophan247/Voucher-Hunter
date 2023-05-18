import {configureStore} from '@reduxjs/toolkit';
import ChineseDiceReducer from './redux/ChineseDiceSlice';
import KBBReducer from './redux/KBBSlice';

const store = configureStore({
    reducer:{
        chineseDice : ChineseDiceReducer,
        KBB : KBBReducer
    }
})

export default store;