import AsyncStorage from '@react-native-community/async-storage';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { createLogger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
// import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

// import AppConfig from '../constants';
// import { dispatchDelayOnInteraction } from './middlewares/dispatch-delay-on-interaction';
import { rootReducer } from './rootReducer';
// import { rootSaga } from './sagas';

const configStore = () => {
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    version: 1,
    blacklist: ['api', 'inbound', 'auth', 'gesture'],
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
//   const sagaMiddleware = createSagaMiddleware();
  let middleware = [thunk];
//   if (__DEV__ && AppConfig.enabledReduxLogger) {
//     middleware = [...middleware, createLogger()];
//   }
//   const store = createStore(rootReducer);
  const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware)));
  const persistor = persistStore(store);
//   sagaMiddleware.run(rootSaga);

// return {store};
  return {
    store,
    persistor,
  };
};

const { store, persistor } = configStore();
export { store, persistor };
