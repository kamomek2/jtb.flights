import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hot } from 'react-hot-loader';
import { NavLink, Switch, Route } from 'react-router-dom';
import { SearchScreen } from 'jtb.search';
import FlightList from "$containers/FlightList";

interface IAppProps {}
interface IAppState {}

class Component extends React.Component<IAppProps, IAppState> {
  render() {
    return (
      <div>
        <SearchScreen />
        <FlightList />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({ });
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(hot(module)(Component));
