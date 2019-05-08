import * as React from "react";
import * as ReactDOM from "react-dom";
import GoogleMapReact from 'google-map-react';

class BreweryList extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {

        const breweryList = [];

        this.props.dataToRender.forEach((item) => {

            breweryList.push(
                <BreweryRow
                    key={item.id}
                    name={item.name}
                    brewery_type={item.brewery_type}
                    street={item.street}
                    city={item.city}
                    state={item.state}
                    postal_code={item.postal_code}
                    website_url={item.website_url}
                    latitude={item.latitude}
                    longitude={item.longitude} />
            );
        });

        return (
            <tbody>
                {breweryList}
            </tbody>
        );
    }
}

class BreweryRow extends React.Component {

    constructor(props) {
        super(props);
        this.handleDetailsClick = this.handleDetailsClick.bind(this);
        this.setMapInfo = this.setMapInfo.bind(this);

        this.state = { showMap: false }

        this.refBreweryMap = React.createRef();

        this.refBreweryModal = React.createRef();

    }

    handleDetailsClick(event, ctrl, props) {

        this.setState({ showMap: true })

        //const referencedBreweryModal = this.refBreweryModal.current;

        //referencedBreweryModal.push(
        //    <BreweryMapModal />
        //);
    }


    componentDidMount() {
        // alert('mount');
    }

    componentWillUnmount() {
        //  alert('unmount');
    }

    setMapInfo(props) {
        alert(props);
    }

    render() {


        return (
            <tr className='row'>
                <td className='col-lg-3'>{this.props.name}</td>
                <td className='col-lg-2'>{this.props.brewery_type}</td>
                <td className='col-lg-4 '>
                    <address>
                        {this.props.street}<br />
                        {this.props.city}<br />
                        {this.props.state}<br />
                        {this.props.postal_code}<br />
                    </address>

                </td>
                <td className='col-lg-3'>
                    {this.props.latitude != null && this.props.longitude != null ? (
                        <div>
                            <div id="ex1" ref={this.refBreweryModal} className="modal" style={{ height: '500px', width: '500px' }}>
                                {
                                    this.state.showMap ?
                                        (
                                            <div>
                                                {this.props.name}
                                                <address>
                                                    {this.props.street}<br />
                                                    {this.props.city}<br />
                                                    {this.props.state}<br />
                                                    {this.props.postal_code}<br />
                                                </address>
                                                <div style={{ height: '250px', width: '250px' }}>
                                                    <GoogleMapReact
                                                        ref={this.refBreweryMap}
                                                        key={this.props.id}
                                                        className=""
                                                        bootstrapURLKeys={{
                                                            key: 'AIzaSyBbARsc5H9wvB4nT75hL-ASNP5LJirF6xo',
                                                            language: 'en',
                                                        }}
                                                        resetBoundsOnResize

                                                        yesIWantToUseGoogleMapApiInternals={true}
                                                        defaultCenter={{ lat: parseInt(this.props.latitude), lng: parseInt(this.props.longitude) }}
                                                        defaultZoom={11}
                                                    >
                                                        <a className="glyphicon glyphicon-map-marker" lat={parseInt(this.props.latitude)} lng={parseInt(this.props.longitude)} text={this.props.name} href={this.props.website_url}>{this.props.name}</a>

                                                    </GoogleMapReact>
                                                </div>
                                                <a href="#" rel="modal:close">Close</a>
                                            </div>
                                        )
                                        :
                                        (
                                            <div>
                                                <a href="#" rel="modal:close">Close</a>
                                            </div>
                                        )

                                }


                            </div>
                            <p><a href="#ex1" rel="modal:open" onClick={(e) => this.handleDetailsClick(e, this, this.props)}>Open Modal</a></p>

                        </div>
                    ) :
                        (
                            <a href={this.props.website_url}>{this.props.name}</a>
                        )
                    }


                </td>
            </tr>);
    }
}


class BreweryMapModal extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

            </div>
        );

    }

}



class BreweryAddress extends React.Component {

    constructor(props) {
        super(props);
        //this.handleClick to jquery modal to show google map
    }

    render() {
        return
        (
            <address>
                {this.props.street}
                {this.props.city}
                {this.props.state}
                {this.props.postal_code}
            </address>
        );
    }

}

export { BreweryRow, BreweryAddress, BreweryList };