import * as React from 'react';
import { shallow } from 'enzyme';

import { FlightList } from '../src/containers/FlightList';
import { FlightListLoading } from '../src/components/FlightListLoading';
import { FlightListItem } from '../src/components/FlightListItem';

import hotelReducer, { INITIAL_STATE } from '../src/redux/flight/reducer';

describe('[Flights]', () => {
  describe('[Mount] Checking components', () => {
    it('[FlightList] is rendering loader', () => {
      const wrapper = shallow(<FlightList
        query="string"
        list={[
          { title: '1' },
          { title: '2' },
        ]}
        is_loading
      />);

      expect(wrapper.find(FlightListLoading).length).toBe(1);
      expect(wrapper.find(FlightListItem).length).toBe(0);
    });

    it('[FlightList] is rendering list', () => {
      const wrapper = shallow(<FlightList
        query="string"
        list={[
          { title: '1' },
          { title: '2' },
        ]}
        is_loading={false}
      />);

      expect(wrapper.find(FlightListLoading).length).toBe(0);
      expect(wrapper.find(FlightListItem).length).toBe(2);
    });
  });

  describe('[Store] Data storage', () => {
    it('reducer exports hotel list', () => {
      const newState = hotelReducer(INITIAL_STATE);
      expect(newState.list).toEqual([]);
    });
  });
});
