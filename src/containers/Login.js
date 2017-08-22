import React from 'react';
import {Authenication} from "../components";
import { connect } from 'react-redux';
import { loginRequest } from "../actions/authenication";
import {  } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(id, pw) {
        return this.props.loginRequest(id, pw)
            .then(() => {
            if(this.props.status === 'SUCCESS') {
                let loginData = {
                    isLoggedIn: true,
                    username: id
                };

                document.cookie = 'key=' + btoa(JSON.stringify(loginData));

                Materialize.toast('Welcome, ' + id + '!', 2000);
                //browserHistory.push('/');
                return true;
            } else {
                let $toastContent = $()
            }
            }
            )
    }

    render() {
        return (
            <div>
                <Authenication mode={true} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.authenication.login.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest: (id, pw) => {
            return dispatch(loginRequest(id, pw));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps) (Login);