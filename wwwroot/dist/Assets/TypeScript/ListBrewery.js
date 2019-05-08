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
import * as React from "react";
import GoogleMapReact from 'google-map-react';
var BreweryList = (function (_super) {
    __extends(BreweryList, _super);
    function BreweryList(props) {
        return _super.call(this, props) || this;
    }
    BreweryList.prototype.render = function () {
        var breweryList = [];
        this.props.dataToRender.forEach(function (item) {
            breweryList.push(React.createElement(BreweryRow, { key: item.id, name: item.name, brewery_type: item.brewery_type, street: item.street, city: item.city, state: item.state, postal_code: item.postal_code, website_url: item.website_url, latitude: item.latitude, longitude: item.longitude }));
        });
        return (React.createElement("tbody", null, breweryList));
    };
    return BreweryList;
}(React.Component));
var BreweryRow = (function (_super) {
    __extends(BreweryRow, _super);
    function BreweryRow(props) {
        var _this = _super.call(this, props) || this;
        _this.handleDetailsClick = _this.handleDetailsClick.bind(_this);
        _this.setMapInfo = _this.setMapInfo.bind(_this);
        _this.state = { showMap: false };
        _this.refBreweryMap = React.createRef();
        _this.refBreweryModal = React.createRef();
        return _this;
    }
    BreweryRow.prototype.handleDetailsClick = function (event, ctrl, props) {
        this.setState({ showMap: true });
        //const referencedBreweryModal = this.refBreweryModal.current;
        //referencedBreweryModal.push(
        //    <BreweryMapModal />
        //);
    };
    BreweryRow.prototype.componentDidMount = function () {
        // alert('mount');
    };
    BreweryRow.prototype.componentWillUnmount = function () {
        //  alert('unmount');
    };
    BreweryRow.prototype.setMapInfo = function (props) {
        alert(props);
    };
    BreweryRow.prototype.render = function () {
        var _this = this;
        return (React.createElement("tr", { className: 'row' },
            React.createElement("td", { className: 'col-lg-3' }, this.props.name),
            React.createElement("td", { className: 'col-lg-2' }, this.props.brewery_type),
            React.createElement("td", { className: 'col-lg-4 ' },
                React.createElement("address", null,
                    this.props.street,
                    React.createElement("br", null),
                    this.props.city,
                    React.createElement("br", null),
                    this.props.state,
                    React.createElement("br", null),
                    this.props.postal_code,
                    React.createElement("br", null))),
            React.createElement("td", { className: 'col-lg-3' }, this.props.latitude != null && this.props.longitude != null ? (React.createElement("div", null,
                React.createElement("div", { id: "ex1", ref: this.refBreweryModal, className: "modal", style: { height: '500px', width: '500px' } }, this.state.showMap ?
                    (React.createElement("div", null,
                        this.props.name,
                        React.createElement("address", null,
                            this.props.street,
                            React.createElement("br", null),
                            this.props.city,
                            React.createElement("br", null),
                            this.props.state,
                            React.createElement("br", null),
                            this.props.postal_code,
                            React.createElement("br", null)),
                        React.createElement("div", { style: { height: '250px', width: '250px' } },
                            React.createElement(GoogleMapReact, { ref: this.refBreweryMap, key: this.props.id, className: "", bootstrapURLKeys: {
                                    key: 'AIzaSyBbARsc5H9wvB4nT75hL-ASNP5LJirF6xo',
                                    language: 'en',
                                }, resetBoundsOnResize: true, yesIWantToUseGoogleMapApiInternals: true, defaultCenter: { lat: parseInt(this.props.latitude), lng: parseInt(this.props.longitude) }, defaultZoom: 11 },
                                React.createElement("a", { className: "glyphicon glyphicon-map-marker", lat: parseInt(this.props.latitude), lng: parseInt(this.props.longitude), text: this.props.name, href: this.props.website_url }, this.props.name))),
                        React.createElement("a", { href: "#", rel: "modal:close" }, "Close")))
                    :
                        (React.createElement("div", null,
                            React.createElement("a", { href: "#", rel: "modal:close" }, "Close")))),
                React.createElement("p", null,
                    React.createElement("a", { href: "#ex1", rel: "modal:open", onClick: function (e) { return _this.handleDetailsClick(e, _this, _this.props); } }, "Open Modal")))) :
                (React.createElement("a", { href: this.props.website_url }, this.props.name)))));
    };
    return BreweryRow;
}(React.Component));
var BreweryMapModal = (function (_super) {
    __extends(BreweryMapModal, _super);
    function BreweryMapModal(props) {
        return _super.call(this, props) || this;
    }
    BreweryMapModal.prototype.render = function () {
        return (React.createElement("div", null));
    };
    return BreweryMapModal;
}(React.Component));
var BreweryAddress = (function (_super) {
    __extends(BreweryAddress, _super);
    function BreweryAddress(props) {
        return _super.call(this, props) || this;
        //this.handleClick to jquery modal to show google map
    }
    BreweryAddress.prototype.render = function () {
        return;
        (React.createElement("address", null,
            this.props.street,
            this.props.city,
            this.props.state,
            this.props.postal_code));
    };
    return BreweryAddress;
}(React.Component));
export { BreweryRow, BreweryAddress, BreweryList };
//# sourceMappingURL=ListBrewery.js.map