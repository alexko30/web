import * as React from 'react';
import { Button, withStyles } from '@material-ui/core';

import styles from './Sidebar.styles';

class Sidebar extends React.Component {
  handleTabSelect = (id, component) => () => {
    this.props.onSelect(id, component);
  }

  render() {
    const { classes, navigation, selectedLabContentId } = this.props;

    return (
      <div className={classes.root}>
        {navigation.map(({ name, component, id }, i) => (
          <Button 
            style={{ background: id === selectedLabContentId ? '#dbfdff' : 'inherit' }}
            className={classes.btn} 
            key={name} 
            onClick={this.handleTabSelect(id, component)}
          >
            {name}
          </Button>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(Sidebar);