import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import homeReducer from "./reducers/HomeData";
import detailReducer from "./reducers/DetailData";

let initialState = {};

let reducers = combineReducers({
  getVideos: homeReducer,
  getVideo: detailReducer
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
