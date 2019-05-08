import React from "react";
import PropTypes from "prop-types";




class HtmlInput extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onCitySearched(e.target.value);
    }


    render() {

        return (
            <div className="form-group">
                <label htmlFor={this.props.label}>{this.props.text}</label>
                <input
                    type={this.props.type}
                    className="form-control"
                    id={this.props.id}
                    onChange={this.handleChange}
                    required
                />
            </div>
        );
    }

}

//HtmlInput.propTypes = {
//    label: PropTypes.string.isRequired,
//    text: PropTypes.string.isRequired,
//    type: PropTypes.string.isRequired,
//    id: PropTypes.string.isRequired,
//    value: PropTypes.string.isRequired,
//    handleChange: PropTypes.func.isRequired
//};
export default HtmlInput;