export type IFlightItem = {
  title: string,
}

export type IFlightState = Readonly<{
  is_loading: boolean,
  list: IFlightItem[],
}>
