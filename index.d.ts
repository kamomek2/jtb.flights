import { Reducer } from "redux";
import { PersistConfig } from "redux-persist/es/types";
import * as React from "react";
import * as Types from './src/types';

declare const flightReducer: Reducer;
declare const flightPersistConfig: PersistConfig;
declare const flightSaga;
declare const SEARCH_ACTIONS;
declare class FlightList extends React.PureComponent<{}, {}> {}

declare type IFlightItem = Types.IFlightItem;
declare type IFlightState = Types.IFlightState;

declare module 'jtb.flights' {}

declare const FLIGHT_INITIAL_STATE: IFlightState;

