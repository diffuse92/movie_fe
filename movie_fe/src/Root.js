import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { App } from './layout';

class Root extends Component {
  // state = {
  //   isLogged: false
  // }

  // onLog = isLogged => this.setState({isLogged});

  // onLogout = () => this.setState({isLogged: false});

  render() {
    return (
      <Router>
        <Switch>
          {/* <Route path='/' render={props => <App {...props} isLogin={this.state.isLogged} onLogout={this.onLogout} />} /> */}
          <Route path='/' render={props => <App {...props} />} />
        </Switch>
      </Router>
    );
  }
}

export default Root;