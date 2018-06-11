import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import Footer from '../../components/footer/Footer';
import './LoginPage.css';

class LoginPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        const search = this.props.location.search;
        const params = new URLSearchParams(search);
        const token = encodeURIComponent(params.get('token'));
        const country = encodeURIComponent(params.get('countryID'));

        this.props.dispatch(userActions.logout());

        this.state =
            {
                token: token,
                country: country
            }
    };

    componentDidMount() {
        const { dispatch } = this.props;
        if (this.state.token && this.state.token.length > 0) {
            dispatch(userActions.login(this.state.token, this.state.country));
        }
    }

    render() {
        const { loggingIn, loggedIn } = this.props;
        return (
            <div>
                <div className="backstretch">
                </div>
                <div className="container">
                    <br />
                    <h1 style={{ color: 'white' }}>Logout</h1>
                    <span style={{ color: 'white' }}>Try logging in from Encore</span>
                </div>

                <Footer />
            </div>

        );
    }
};

function mapStateToProps(state, ownProps) {
    const { loggingIn, loggedIn } = state.authentication;
    return {
        loggingIn,
        loggedIn
    };
}

export default connect(mapStateToProps)(LoginPage);