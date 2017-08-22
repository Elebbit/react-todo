import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Home, Login, Register } from '../containers';
import { Header } from '../components';


class App extends React.Component {

    render(){

        // let re = /(login|register)/;
        // let isAuth = re.test(this.props.location.pathname);
        let isAuth = false;

        return (
            <BrowserRouter>
                <div>
                    {isAuth ? undefined : <Header />}
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
