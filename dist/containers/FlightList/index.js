"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const FlightListLoading_1 = require("../../components/FlightListLoading");
const FlightListItem_1 = require("../../components/FlightListItem");
const style = require('./style.scss');
exports.FlightList = ({ query, is_loading, list, }) => (React.createElement("div", { className: style.wrapper },
    React.createElement("div", { className: style.container },
        React.createElement("div", { className: style.badge },
            "This part is rendered by ",
            React.createElement("u", null, "jtb.flights"),
            " package"),
        React.createElement("div", { className: style.badge },
            "Search query from jtb.search component is: ",
            query || `- empty -`),
        React.createElement("div", null,
            "Also, it includes some style variables like paddings and border radius from jtb.search ",
            React.createElement("u", null, "variables.scss")),
        React.createElement("div", null, "It calls its own async action when you press 'Search' and also has access to the search part of the data storage."),
        React.createElement("div", null, "You can clone it and run as standalone app with search box for development purposes, but search form is listed as dev-dependencies and will not be installed when you use jtb.flights as dependency on other projects."),
        React.createElement("div", null,
            "Api call uses fake promise with ",
            React.createElement("u", null, "1000ms"),
            " delay"),
        React.createElement("div", null,
            is_loading && React.createElement(FlightListLoading_1.FlightListLoading, null),
            !is_loading && list &&
                list.map(({ title }) => (React.createElement(FlightListItem_1.FlightListItem, { title: title, key: title })))))));
const mapStateToProps = ({ flight, search: { query } }) => (Object.assign({}, flight, { query }));
exports.default = react_redux_1.connect(mapStateToProps)(exports.FlightList);
//# sourceMappingURL=index.js.map