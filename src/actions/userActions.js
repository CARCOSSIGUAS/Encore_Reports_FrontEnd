import { userConstants } from '../constants';
import { history } from '../helpers/history';
import * as userService from '../services/userService';

export function login(token) {
    return dispatch => {
        userService.login(token).then(
                user => {
                            dispatch(success(user));
                            history.push('/');
                        },
                error => {
                    dispatch(failure(error));
                }
            ).catch(error => 
            {
                // Se debe mostrar el error al usuario, sino solo se mostrara en la consola sin feedback para el usuario
                throw(error);
            });
    };

    // Estas dos funciones deben estar afuera no hay necesidad de crearlas dentro de este scope
    
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

export function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}
