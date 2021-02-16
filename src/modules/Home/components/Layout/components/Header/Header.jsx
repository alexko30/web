import * as React from 'react';
import { Button, withStyles } from '@material-ui/core';

import styles from './Header.styles';

class Header extends React.Component {

  render() {
    const { classes, labsAmount, selectedLabId } = this.props;

    return (
      <header className={classes.root}>
        <section className={classes.intro}>
          <h1 className={classes.introHeading}>ЗВІТИ ЛАБОРАТОРНИХ РОБІТ</h1>
          <h2 className={classes.introSubheading}>З ДИСЦИПЛІНИ "WEB-ТЕХНОЛОГІЇ</h2>
          <h3 className={classes.introIdentification}>Групи ІА-72, Бригади 000, Корнієнко О., Кудименко В., Хитрик Г.</h3>
        </section>
        <section className={classes.labs}>
          {Array(labsAmount).fill('').map((x, i) => (
            <Button 
              style={{ background: i === selectedLabId ? '#dbfdff' : 'inherit' }}
              key={i}
              className={classes.labBtn}
            >
              Лабораторна робота {i + 1}
            </Button>
          ))}
        </section>
      </header>
    );
  }
}

export default withStyles(styles)(Header);