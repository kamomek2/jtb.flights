import { FLIGHT_ACTIONS } from "./constants";
import { IFlightState } from "$types";

export const flightSetLoading = (is_loading: IFlightState['is_loading']) => ({
  type: FLIGHT_ACTIONS.SET_LOADING, is_loading,
});

export const flightSetList= (list: IFlightState['list']) => ({
  type: FLIGHT_ACTIONS.SET_LIST, list,
});

export type searchDispatchQueryAction = {
  type: string, query: string, arrival_date: string, departure_date: string
};
