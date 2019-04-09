import { Reducer } from "redux";
import { PersistConfig } from "redux-persist/es/types";
import * as React from "react";

declare const flightReducer: Reducer;
declare const flightPersistConfig: PersistConfig;
declare const flightSaga;
declare const SEARCH_ACTIONS;
declare class FlightList extends React.PureComponent<{}, {}> {}


declare type IFlightItem = {
  title: string,
}

declare type IFlightState = Readonly<{
  is_loading: boolean,
  list: IFlightItem[],
}>

declare module 'jtb.flights' {}

