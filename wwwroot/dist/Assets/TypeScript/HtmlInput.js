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
import React from "react";
var HtmlInput = (function (_super) {
    __extends(HtmlInput, _super);
    function HtmlInput(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    HtmlInput.prototype.handleChange = function (e) {
        this.props.onCitySearched(e.target.value);
    };
    HtmlInput.prototype.render = function () {
        return (React.createElement("div", { className: "form-group" },
            React.createElement("label", { htmlFor: this.props.label }, this.props.text),
            React.createElement("input", { type: this.props.type, className: "form-control", id: this.props.id, onChange: this.handleChange, required: true })));
    };
    return HtmlInput;
}(React.Component));
//HtmlInput.propTypes = {
//    label: PropTypes.string.isRequired,
//    text: PropTypes.string.isRequired,
//    type: PropTypes.string.isRequired,
//    id: PropTypes.string.isRequired,
//    value: PropTypes.string.isRequired,
//    handleChange: PropTypes.func.isRequired
//};
export default HtmlInput;
//# sourceMappingURL=HtmlInput.js.map