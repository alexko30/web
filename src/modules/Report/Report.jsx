import * as React from 'react';
import { withStyles } from '@material-ui/core';

import Layout from './components/Layout';

import styles from './Report.styles';

class Report extends React.Component {
  render() {
    return (
      <Layout 
        labsAmount={5}
      />
    );
  }
}

export default withStyles(styles)(Report);