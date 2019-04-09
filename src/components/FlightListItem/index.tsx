import * as React from 'react';
import { IFlightItem } from "index.d.ts";

const style = require('./style.scss');

export interface IFlightListItemProps {
  title: IFlightItem['title'],
}

export const FlightListItem: React.FunctionComponent<IFlightListItemProps> = ({ title }) => (
  <div className={style.row}>
    {title}
  </div>
);
