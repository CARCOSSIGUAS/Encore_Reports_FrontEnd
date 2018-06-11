import { userConstants } from '../constants';
import { history } from '../helpers/history';
import * as userService from '../services/userService';

import config from 'react-global-configuration';

export function login(token, country) {
    return dispatch => {
        userService.login(token, country).then(
            user => {
                dispatch(success(user));
                history.push('/');

            },
            error => {
                dispatch(failure(error));
            }
        ).catch(error => {
            throw (error);
        });
    };

    function success(user) {

        
        return { type: userConstants.LOGIN_SUCCESS, user }
    }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

export function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}