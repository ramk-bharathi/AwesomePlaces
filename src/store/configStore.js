import {createStore, combineReducers} from 'redux';
import placeReducer from "./reducers/place-reducer";

const rootReducers = combineReducers({
    places: placeReducer
});

const configStore = () => {
    return createStore(rootReducers);
};

export default configStore;