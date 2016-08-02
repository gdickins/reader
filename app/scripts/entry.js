import {IndexRoute, Router, Route, hashHistory, Link} from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';

import DocumentView from './components/DocumentView';

const App = React.createClass({
  render: function() {
    return (
      <div>
       <DocumentView />
      </div>
    )
  }
})

const router = (
  <Router history={hashHistory}>
  <Route path="/" component={App} />
  </Router>
)

ReactDOM.render(router, document.getElementById('container'));
