import React from 'react';
import { Authenication } from "../components";
import { connect } from 'react-redux';
import { loginRequest } from "../actions/authenication";
import createHistory from 'history/createBrowserHistory';

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
                const history = createHistory();
                history.push('/');
                return true;
            } else {
                let $toastContent = $('<span style="color : #ffb4ba">Incorrect username or password</span>');
                Materialize.toast($toastContent, 2000);
                return false
            }
            }
        );
    }

    render() {
        return (
            <div>
                <Authenication mode={true}
                onLogin={this.handleLogin}
                />
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

export default connect(mapStateToProps, mapDispatchToProps) (Login);