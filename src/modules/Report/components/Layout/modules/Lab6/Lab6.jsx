import * as React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './Lab6.styles';

export const Lab6Task = withStyles(styles)(() => {
  return (
    <p>
      Придбати практичні навички встановлення та конфігурування WEB-сервера, встановлення та налаштування Apache
    </p>
  );
});

export const Lab6Summary = withStyles(styles)(() => {
  return (
    'Навчилися працювати с сервером'
  );
});


