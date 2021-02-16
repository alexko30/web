import * as React from 'react';
import { withStyles } from '@material-ui/core';

import Layout from './components/Layout';

import styles from './Home.styles';

class Home extends React.Component {
  render() {
    return (
      <Layout 
        labsAmount={1}
      />
    );
  }
}

export default withStyles(styles)(Home);