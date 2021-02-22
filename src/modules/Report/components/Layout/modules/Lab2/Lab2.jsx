import * as React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './Lab2.styles';

export const Lab2Task = withStyles(styles)(() => {
  return (
    <p>
      Придбати практичні навички роботи  з селекторами,ідентифікаторами, списками,  різноманітними властивостями кольору і фону,  зовнішними та внутрішними  відступами,  плаваючими елементами, оформленням текстових елементів, 4 методами визначення таблиці стилів
    </p>
  );
});

export const Lab2Import = withStyles(styles)(() => {
  return (
    <code>
      <pre>
      {`
@import './test.css';
      `}
      </pre>
    </code>
  );
});


export const Lab2List = withStyles(styles)(() => {
  return (
    <code>
      <pre>
      {`
<ul>
  <li>Milk</li>
  <li>Cheese
    <ul>
      <li>Blue cheese</li>
      <li>Feta</li>
    </ul>
  </li>
</ul>
      `}
      </pre>
    </code>
  );
});

export const Lab2Id = withStyles(styles)(() => {
  return (
    <code>
      <pre>
      {`
#root {
  height: 100vh;
  overflow: auto;
}
      `}
      </pre>
    </code>
  );
});

export const Lab2Indent = withStyles(styles)(() => {
  return (
    <code>
      <pre>
      {`
body * {
  text-indent: 2px;
}
      `}
      </pre>
    </code>
  );
});

export const Lab2Float = withStyles(styles)(() => {
  return (
    <code>
      <pre>
      {`
<marquee behavior="scroll" direction="left" style={{ position: 'absolute' }}>Denzel</marquee>
      `}
      </pre>
    </code>
  );
});

export const Lab2Selectors = withStyles(styles)(() => {
  return (
    <code>
      <pre>
      {`
#root {
  height: 100vh;
}

header: {
  textAlign: 'center',
}

'& td, th': {
  border: '1px solid #dddddd',
  textAlign: 'left',
  padding: 8,
}

'& td:first-child': {
  border: '1px solid #dddddd',
  textAlign: 'left',
  padding: 8,
}

'& > header': {
  textAlign: 'center'
}
      `}
      </pre>
    </code>
  );
});

export const Lab2SelectorsTagClass = withStyles(styles)(() => {
  return (
    <code>
      <pre>
      {`
#root {
  height: 100vh;
}

header: {
  textAlign: 'center',
}
      `}
      </pre>
    </code>
  );
});

export const Lab2SelectorsOther = withStyles(styles)(() => {
  return (
    <code>
      <pre>
      {`
'& td, th': {
  border: '1px solid #dddddd',
  textAlign: 'left',
  padding: 8,
}

'& td:first-child': {
  border: '1px solid #dddddd',
  textAlign: 'left',
  padding: 8,
}

'& > header': {
  textAlign: 'center'
}
      `}
      </pre>
    </code>
  );
});

export const Lab2SelectorsGrouping = withStyles(styles)(() => {
  return (
    <code>
      <pre>
      {`
'& > header, td': {
  textAlign: 'center'
}
      `}
      </pre>
    </code>
  );
});


