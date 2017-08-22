import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Authenication extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render() {

        const inputBoxed = (
            <div>
                <div className="input-field col s12 username">
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.username}
                    />
                </div>
                <div className="input-field col s12">
                    <label>Password</label>
                    <input
                        type="text"
                        name="password"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                </div>
            </div>
        );

        const loginView = (
            <div>
                <div className="card-content">
                    <div className="row">
                        {inputBoxed}
                        <a className="waves-effect waves-light btn">SUBMIT</a>
                    </div>
                </div>

                <div className="footer">
                    <div className="card-content">
                        <div className="right">
                            New Here? <Link to="/register">Create an account</Link>
                        </div>
                    </div>
                </div>
            </div>
        );

        const registerView = (
            <div className="card-content">
                <div className="row">
                    {inputBoxed}
                    <a className="waves-effect waves-light btn">CREATE</a>
                </div>
            </div>
        );

        return (
            <div className="container auth">
                <Link className="logo" to="/">MEMOPAD</Link>
                <div className="card">
                    <div className="header blue white-text center">
                        <div className="card-content">{this.props.mode ? "LOGIN" : "REGISTER"}</div>
                    </div>
                    {this.props.mode ? loginView : registerView}
                </div>
            </div>
        );
    }
}

Authenication.propTypes = {
  mode: PropTypes.bool,
  onLogin: PropTypes.func,
  onRegister: PropTypes.func
};

Authenication.defaultProps = {
    mode: true,
    onLogin: (id, pw) => { console.error("login function not defined"); },
    onRegister: (id, pw) => { console.error("register function not defined");}
};


export default Authenication;