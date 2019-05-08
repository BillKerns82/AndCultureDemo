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
import * as ReactDOM from "react-dom";
import HtmlInput from ".././TypeScript/HtmlInput.jsx";
//import ListBrewery from ".././TypeScript/ListBrewery.js";
import { BreweryList } from ".././TypeScript/ListBrewery.js";
import * as $ from 'jquery';
var FormContainer = (function (_super) {
    __extends(FormContainer, _super);
    function FormContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            brewery_data: [],
            value: ''
        };
        //this.handleChange = this.handleChange.bind(this);
        _this.loadBreweryList = _this.loadBreweryList.bind(_this);
        return _this;
        //this.assignBreweryToState = this.assignBreweryToState.bind(this);
    }
    FormContainer.prototype.componentDidMount = function () {
        //fetchPosts().then(response => {
        //    this.setState({
        //        posts: response.posts
        //    });
        //});
        //fetchComments().then(response => {
        //    this.setState({
        //        comments: response.comments
        //    });
        //});
    };
    FormContainer.prototype.loadBreweryList = function (eventValue) {
        var _this = this;
        var that = this;
        $.ajax({
            method: "GET",
            url: "api/OpenBrewery",
            data: { by_city: eventValue },
            async: true
        }).done(function (data) {
            return _this.setState({
                brewery_data: data
            });
        });
    };
    //assignBreweryToState(data) {
    //    this.setState(() => {
    //        brewery_data: data
    //    });
    //}
    FormContainer.prototype.render = function () {
        var value = this.state.value.value;
        return (React.createElement("form", { id: "article-form", action: "/Home/Index", method: "POST" },
            React.createElement(HtmlInput, { text: "City", label: "City", type: "text", id: "by_city", value: this.state.value, onCitySearched: this.loadBreweryList }),
            React.createElement("table", { className: "table table-striped  table-hover" },
                React.createElement("thead", null,
                    React.createElement("tr", { className: 'row' },
                        React.createElement("th", { className: 'col-lg-3' }, "Name"),
                        React.createElement("th", { className: 'col-lg-2' }, "Type"),
                        React.createElement("th", { className: 'col-lg-4' }, "Address"),
                        React.createElement("th", { className: 'col-lg-3' }, "Website"))),
                React.createElement(BreweryList, { dataToRender: this.state.brewery_data, handleListSearch: this.state.brewery_data }))));
    };
    return FormContainer;
}(React.Component));
export default FormContainer;
var wrapper = document.getElementById("create-brewery-form");
wrapper ? ReactDOM.render(React.createElement(FormContainer, null), wrapper) : false;
//# sourceMappingURL=FormContainer.js.map