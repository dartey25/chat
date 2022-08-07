// create a makeStore function
import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
import {applyMiddleware, createStore, Store} from "redux";
import {reducer, RootState} from "./reducers";
import thunk from "redux-thunk";

// if (typeof window !== "undefined") {
//     const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// }


const middleware = [thunk];
const makeStore = (context: Context) => createStore(reducer, applyMiddleware(...middleware));

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});