import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import loadable from 'loadable-components';

const Loading = () => <div>Loading...</div>;

const DefaultLayout = loadable(() => import('./Containers'), {
  LoadingComponent: Loading,
});

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={DefaultLayout} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
