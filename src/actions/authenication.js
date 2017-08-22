import {
    AUTH_LOGIN,
    AUTH_LOGIN_FAILURE,
    AUTH_LOGIN_SUCCESS
} from "./ActionTypes";

import axios from 'axios';

/*============================================================================
    authentication
==============================================================================*/

/* LOGIN */
export function loginRequest(usernamem, password) {
    return (dispatch) => {
        // Inform Login API is starting
        dispatch(login());

        // API REQUEST
        return axios.post('/api/account/signin', { username, password})
            .then((response) => {
            dispatch(loginSuccess(username));
            }).catch((error) => {
            dispatch(loginFailure());
            });
    };
}

export function login(username, password) {
    return {
        type: AUTH_LOGIN
    };
}

export function loginSuccess(username) {
    return {
        type: AUTH_LOGIN_SUCCESS
    };
}

export function loginFailure() {
    return {
        type: AUTH_LOGIN_FAILURE
    };
}

