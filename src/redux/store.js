import reducer from "./reducer";
import { legacy_createStore as createStore, applyMiddleware  } from "redux";
import {createLogger} from "redux-logger";

const logger= createLogger();

const rootReducer = reducer;

const store = createStore(rootReducer, applyMiddleware(logger))

export default store;