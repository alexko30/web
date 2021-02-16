import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import Home from './modules/Home';
import Main from './modules/Main';

import './App.css';

class App extends React.Component {

  render() {
    const theme = createMuiTheme({
      props: {
        MuiButton: {
          variant: 'outlined',
          size: 'small'
        }
      },
      overrides: {
        MuiButton: {
          root: {
            minWidth: 'auto',
            textTransform: 'capitalize'
          }
        }
      }
    });

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/app" exact component={Main} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
