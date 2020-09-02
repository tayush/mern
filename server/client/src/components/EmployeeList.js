import React, { Component } from "react";
import axios from "axios";
import "../App.css";

class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newEmp: [],
        };
    }

    componentDidMount() {
        axios.get("http://localhost:5000/employee-list").then((response) => {
            this.setState({
                newEmp: response.data,
            });
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
            axios
                .get("http://localhost:5000/employee-list")
                .then((response) => {
                    this.setState({
                        newEmp: response.data,
                    });
                });
        }
    }

    render() {
        return (
            <div class="second">
                <table
                    style={{
                        outline: "thin solid",
                    }}
                >
                    <thead>
                        <tr style={{ outline: "thin solid" }}>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.newEmp.map((item) => (
                            <tr key={item._id}>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                <td>{item.email}</td>
                                <td>{item.company}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default EmployeeList;
