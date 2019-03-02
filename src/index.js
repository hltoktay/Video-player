import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Route from './route';

const App = () => {
    return(
        <BrowserRouter>
            <Route />
        </BrowserRouter>
    )

}


ReactDOM.render(<App />, document.getElementById('root'));
 

