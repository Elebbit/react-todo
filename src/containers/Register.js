import React from 'react';
import { Authenication } from "../components";
import { connect } from 'react-redux';
import { registerRequest } from "../actions/authenication";
import createHistory from 'history/createBrowserHistory';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this)
    }

    handleRegister(id, pw) {
        return this.props.registerRequest(id, pw)
            .then(() => {
            if(this.props.status === 'SUCCESS') {
                Materialize.toast('Success! Please log in.', 2000);
                const history = createHistory();
                history.push('/login');
                return true;
            } else {
                /*
                        ERROR CODES:
                            1: BAD USERNAME
                            2: BAD PASSWORD
                            3: USERNAME EXISTS
                    */
                let errorMessage = [
                    'Invalid Username',
                    'Password is too shrot',
                    'Username already exists'
                ];

                let $toastContent = $('<span style="color: #FFB4BA">' + errorMessage[this.props.errorCode - 1] + '</span>');
                Materialize.toast($toastContent, 2000);
                return false;
            }
            }
            );
    }

    render() {
        return (
            <div>
                <Authenication mode={false}
            onRegister={this.handleRegister}
            />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.authenication.register.status,
        errorCode: state.authenication.register.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        registerRequest: (id, pw) => {
            return dispatch(registerRequest(id, pw));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Register);