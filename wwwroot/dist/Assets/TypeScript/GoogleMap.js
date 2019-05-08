var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Component } from 'react';
var AnyReactComponent = function (_a) {
    var text = _a.text;
    return React.createElement("div", null, text);
};
var BreweryMap = (function (_super) {
    __extends(BreweryMap, _super);
    function BreweryMap() {
        return _super.call(this, props) || this;
    }
    BreweryMap.prototype.render = function () {
        return (
        // Important! Always set the container height explicitly
        React.createElement("div", { style: { height: '100vh', width: '100%' } },
            React.createElement(GoogleMapReact, { bootstrapURLKeys: { key: 'AIzaSyBbARsc5H9wvB4nT75hL-ASNP5LJirF6xo' }, defaultCenter: this.props.center, defaultZoom: this.props.zoom },
                React.createElement(AnyReactComponent, { lat: 59.955413, lng: 30.337844, text: "My Marker" }))));
    };
    return BreweryMap;
}(Component));
export { BreweryMap };
//# sourceMappingURL=GoogleMap.js.map