import { combineReducers } from 'redux';
import ajaxStatusReducer from './reducers/ajaxStatusReducer';
import storeReducer from './reducers/storeReducer';
import repositoryReducer from './reducers/repositoryReducer';

const _rootReducer = combineReducers({
    ajaxStatus: ajaxStatusReducer,
    store: storeReducer,
    repos: repositoryReducer
});

export const rootReducer = (state: any, action: any) => {
    return _rootReducer(state, action);
};
