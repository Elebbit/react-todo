import React from 'react';
import Shared  from '../shared/Shared';
import { BrowserRouter } from 'react-router-dom';



class App extends React.Component {
    render(){

        return (
            <BrowserRouter>
                <Shared />
            </BrowserRouter>
        );
    }
}

export default App;
