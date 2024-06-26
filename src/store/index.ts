import { combineReducers, configureStore } from '@reduxjs/toolkit';
import theme from './theme';

const rootReducer = combineReducers({
    theme: theme,
});

export default configureStore({
    reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
