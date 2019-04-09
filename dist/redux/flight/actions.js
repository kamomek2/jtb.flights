"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
exports.flightSetLoading = (is_loading) => ({
    type: constants_1.FLIGHT_ACTIONS.SET_LOADING, is_loading,
});
exports.flightSetList = (list) => ({
    type: constants_1.FLIGHT_ACTIONS.SET_LIST, list,
});
//# sourceMappingURL=actions.js.map