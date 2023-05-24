import {configureStore} from '@reduxjs/toolkit';
import ChineseDiceReducer from './redux/ChineseDiceSlice';
import KBBReducer from './redux/KBBSlice';
import BauCuaReducer from './redux/BauCua';

const store = configureStore({
    reducer:{
        chineseDice : ChineseDiceReducer,
        KBB : KBBReducer,
        BauCua : BauCuaReducer
    }
})

export default store;