/**
 * Created by youngmoon on 4/14/16.
 */

import React from 'react';
import { render } from 'react-dom';
import { browserHistory, IndexRoute, Router, Route } from 'react-router';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const store = createStore(
    combineReducers({
        routing: routerReducer
    })
);

const history = syncHistoryWithStore(browserHistory, store);

// Component
import Index from './view';
import Home from './view/container/home';

if (process.env.NODE_ENV !== 'production') {
    require('./style/app.scss');
}

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Index}>
                <Route path="home" component={Home}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);