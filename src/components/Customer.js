import React from "react";

class Customer extends React.Component {
    render() {
        return (
            <div>
                <CustomerProfile data={this.props}/>
                <CustomerInfo data={this.props}/>
            </div>
        );
    }
}

class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.data.image} alt="profile" />
                <h2>{this.props.data.name}({this.props.data.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.data.birthday}</p>
                <p>{this.props.data.job}</p>
            </div>
        )
    }
}

export default Customer;