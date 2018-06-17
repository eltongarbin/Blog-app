import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './utils/history';
import PostList from './components/Post/List';
import PostForm from './components/Post/Form';
import PostDetail from './components/Post/Detail';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route path="/posts/new" component={PostForm} />
      <Route path="/posts/:id" component={PostDetail} />
      <Route path="/" component={PostList} />
    </Switch>
  </Router>
);

export default App;
