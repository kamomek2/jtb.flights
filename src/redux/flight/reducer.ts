import { createReducer } from 'reduxsauce';
import * as ACTIONS from "$redux/flight/actions";
import { FLIGHT_ACTIONS } from "$redux/flight/constants";
import storage from "redux-persist/lib/storage";
import { PersistConfig } from "redux-persist/es/types";
import { IFlightItem, IFlightState } from "index.d.ts";

type UnsafeReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
interface ActionHandler<T> {
  (state: IFlightState, payload: UnsafeReturnType<T>): IFlightState;
}

const setLoading: ActionHandler<typeof ACTIONS.flightSetLoading> = (state, { is_loading }) => ({
  ...state,
  is_loading,
});

const setList: ActionHandler<typeof ACTIONS.flightSetList> = (state, { list }) => ({
  ...state,
  list,
});

const HANDLERS = {
  [FLIGHT_ACTIONS.SET_LOADING]: setLoading,
  [FLIGHT_ACTIONS.SET_LIST]: setList,
};

const INITIAL_STATE: IFlightState = {
  is_loading: false,
  list: [],
};

export default createReducer(INITIAL_STATE, HANDLERS);
export const flightPersistConfig: PersistConfig = {
  key: 'flight',
  whitelist: [],
  storage,
};
