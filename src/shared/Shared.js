import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Login, Register } from '../containers';
import { Header } from '../components';

class Shared extends Component {
    render() {
        let re = /(login|register)/;
        let isAuth = re.test(this.props.location.pathname);
        return (
            <div>
                {isAuth ? undefined : <Header />}
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </div>
        );
    }
}

export default Shared;