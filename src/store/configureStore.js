import { createStore, combineReducers, applyMiddleware  } from 'redux';

import thunk from 'redux-thunk';
import stationsReducer from '../reducers/stations';
import busesReducer from '../reducers/buses';
import lignesReducer from '../reducers/lignes'
import selectedBusReducer from '../reducers/selectedBus';
import selectedStationReducer from '../reducers/selectedStation';
import selectorReducer from '../reducers/selector';

export default () => {
  const store = createStore(
    combineReducers({
      buses: busesReducer,
      stations: stationsReducer,
      lignes:lignesReducer,
      selectedBus:selectedBusReducer,
      selectedStation:selectedStationReducer,
      selector:selectorReducer
    }),applyMiddleware(thunk)
  );

  return store;
};
