import React from "react";

class Customer extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.data.name}</h2>
                <p>{this.props.data.birthday}</p>
                <p>{this.props.data.gender}</p>
                <p>{this.props.data.job}</p>
            </div>
        );
    }
}

export default Customer;