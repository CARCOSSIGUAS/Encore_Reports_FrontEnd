import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        const search = this.props.location.search;
        const params = new URLSearchParams(search);
        const token = encodeURIComponent(params.get('token'));

        this.props.dispatch(userActions.logout());

        this.state = 
        {
            token : token
        }
    };

    componentDidMount() {
        const { dispatch } = this.props;
        if (this.state.token) {
            dispatch(userActions.login(this.state.token));
        }
    }

    render(){	
        const { loggingIn } = this.props;
        return (
            <strong>
                { loggingIn }
            </strong>
        );
    }
};

function mapStateToProps(state) {
    const { loggingIn } = state.authenticationReducer;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 