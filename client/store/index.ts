import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
import {applyMiddleware, createStore, Store, compose} from "redux";
import {reducer, RootState} from "./reducers";
import thunk from "redux-thunk";

let composeEnhancers = compose;
if (typeof window !== 'undefined') {
    // @ts-ignore
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}


const middleware = [thunk];
const makeStore = (context: Context) => createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));

export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});