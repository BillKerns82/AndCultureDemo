import React, { Component } from 'react';

 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class BreweryMap extends Component {
 
    constructor(){
        super(props);
    }
 
    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBbARsc5H9wvB4nT75hL-ASNP5LJirF6xo' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}
 
export { BreweryMap };