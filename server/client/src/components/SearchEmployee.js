import React, { Component } from "react";
import axios from "axios";

class SearchEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            result: "",
        };
    }

    fun = (event) => {
        event.preventDefault();
        axios
            .post("http://localhost:5000/employee-detail", {
                id: this.state.id,
            })
            .then((response) => {
                this.setState({
                    result: response.data,
                });
            });
    };

    render() {
        return (
            <div class="third">
                <br />
                <form onSubmit={this.fun}>
                    <h1>Search Employee</h1>
                    <br />
                    <input
                        type="text"
                        name="id"
                        onChange={(event) => {
                            this.setState({ id: event.target.value });
                        }}
                    ></input>
                    <button type="submit">Search</button>
                </form>
                <h4>Result</h4>
                Name: {this.state.result.name}
                <br />
                Address: {this.state.result.address}
                <br />
                Email: {this.state.result.email}
                <br />
                Company: {this.state.result.company}
            </div>
        );
    }
}

export default SearchEmployee;
