import * as types from 'actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    login: {
        status: 'INIT'
    },
    status: {
        isLoggedIn: false,
        currentUser: '',
    }
};

export default function authenication(state, action) {
    if(typeof state === "undefined")
        state = initialState;

    switch (action.type) {
        case types.AUTH_LOGIN:
            return update(state, {
                login: {
                    status: {
                        $set: 'WAITING'
                    }
                }
            });
        case types.AUTH_LOGIN_FAILURE:
            return update(state, {
                login: {
                    status: {
                        $set: 'FAILURE'
                    }
                }
            });

        case types.AUTH_LOGIN_SUCCESS:
            return update(state, {
                login: {
                    status: {
                        $set: 'SUCCESS'
                    }
                }
            });

        default:
            return state;
    }
}