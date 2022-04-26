import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<AppState>))
);
export type AppDispatch = typeof store.dispatch;
