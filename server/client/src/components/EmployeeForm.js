import React, { Component } from "react";
import axios from "axios";
import EmployeeList from "./EmployeeList";
import "../App.css";
import validator from "validator";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

const required = (value) => {
    if (value.length < 1) {
        return "require";
    }
};

const email = (value) => {
    if (!validator.isEmail(value)) {
        return `${value} is not a valid email.`;
    }
};

class EmployeeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            email: "",
            company: "",
            id: "",
        };
    }

    addEmployee = (event) => {
        event.preventDefault();
        axios
            .post("http://localhost:5000/employee-form", {
                name: this.state.name,
                address: this.state.address,
                email: this.state.email,
                company: this.state.company,
            })
            .then((response) => {
                this.setState({
                    id: response.data._id,
                });
            });

        this.setState({
            name: "",
            address: "",
            email: "",
            company: "",
        });
    };

    render() {
        return (
            <div class="flexbox-container">
                <div>
                    <h1>Employee Form</h1>
                    <br />
                    <form onSubmit={this.addEmployee}>
                        <div>
                            <label>Name*</label>
                            <input
                                type="text"
                                name="name"
                                validations={[required]}
                                onChange={(event) =>
                                    this.setState({ name: event.target.value })
                                }
                            ></input>
                        </div>
                        <br />
                        <div>
                            <label>Address</label>
                            <input
                                type="text"
                                name="address"
                                validations={[required]}
                                onChange={(event) =>
                                    this.setState({
                                        address: event.target.value,
                                    })
                                }
                            ></input>
                        </div>
                        <br />
                        <div>
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                validations={[(required, email)]}
                                onChange={(event) =>
                                    this.setState({ email: event.target.value })
                                }
                            ></input>
                        </div>
                        <br />
                        <div>
                            <label>Company Name</label>
                            <input
                                type="text"
                                name="company"
                                validations={[required]}
                                onChange={(event) =>
                                    this.setState({
                                        company: event.target.value,
                                    })
                                }
                            ></input>
                        </div>
                        <br />
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                    <p>{"Employee created with ID: " + this.state.id}</p>
                    <br />
                </div>
                <div>
                    <EmployeeList id={this.state.id}></EmployeeList>
                </div>
            </div>
        );
    }
}

export default EmployeeForm;
