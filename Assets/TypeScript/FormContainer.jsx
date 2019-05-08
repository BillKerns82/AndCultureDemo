import * as React from "react";
import * as ReactDOM from "react-dom";
import HtmlInput from ".././TypeScript/HtmlInput.jsx";
//import ListBrewery from ".././TypeScript/ListBrewery.js";
import { BreweryList } from ".././TypeScript/ListBrewery.js";
import { BreweryRow } from ".././TypeScript/ListBrewery.js";
import { BreweryAddress } from ".././TypeScript/ListBrewery.js";
import * as $ from 'jquery';


class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brewery_data: [],
            value: ''
        };
        //this.handleChange = this.handleChange.bind(this);
        this.loadBreweryList = this.loadBreweryList.bind(this);
        //this.assignBreweryToState = this.assignBreweryToState.bind(this);
    }

    componentDidMount() {
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
    }



    loadBreweryList(eventValue) {

        var that = this;
        $.ajax({
            method: "GET",
            url: "api/OpenBrewery",
            data: { by_city: eventValue },
            async: true
        }).done((data)  => 
            this.setState({
                brewery_data: data
            }));
    }

    //assignBreweryToState(data) {
    //    this.setState(() => {
    //        brewery_data: data
    //    });
    //}


    render() {
        const { value } = this.state.value;
        return (
            <form id="article-form" action="/Home/Index" method="POST" >
                <HtmlInput
                    text={"City"}
                    label={"City"}
                    type={"text"}
                    id={"by_city"}
                    value={this.state.value}
                    onCitySearched={this.loadBreweryList}
                />

                

                <table className="table table-striped  table-hover">
                    <thead>
                        <tr className='row'>
                            <th className='col-lg-3'>Name</th>
                            <th  className='col-lg-2'>Type</th>
                            <th  className='col-lg-4'>Address</th>
                            <th  className='col-lg-3'>Website</th>
                        </tr>
                    </thead>
                    
                        <BreweryList
                            dataToRender={this.state.brewery_data}
                            handleListSearch={this.state.brewery_data} />
                    
                </table>



            </form>
        );
    }
}
export default FormContainer;

const wrapper = document.getElementById("create-brewery-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;