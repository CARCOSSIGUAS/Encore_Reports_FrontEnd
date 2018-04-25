import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';

class LoginPage extends React.Component {
    constructor(props, context) {
        super(props, context);

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
        if (this.state.token && this.state.token.length > 0) {
            dispatch(userActions.login(this.state.token));
        }
    }

    render(){
        const { loggingIn, loggedIn } = this.props;
        return (
            
            <section>
                <div className="container">
                    <div className="content-main">
                            <div>
                                <h1>Logout</h1>
                                <span>Try logging in from Encore</span>
                            </div>
                    </div>
                </div >
            </section>
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

// function mapDispatchToProps(dispatch) {
//     return {
//       actions: bindActionCreators(userActions, dispatch)
//     };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);