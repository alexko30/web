import * as React from 'react';
import { withStyles } from '@material-ui/core';

import Lab1LookImage from './assets/lab1.PNG';

import styles from './Lab1.styles';

export const Lab1Task = withStyles(styles)(() => {
  return (
    <p>
      Придбати практичні навички роботи  з html-документом, таблицями,формами, зображеннями, посиланнями
    </p>
  );
});

export const Lab1HostingAndIDE = withStyles(styles)(() => {
  return (
    <p>
      VS Code.
      <br />
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/alexko30/web">https://github.com/alexko30/web</a>
    </p>
  );
});

export const Lab1AppDescription = withStyles(styles)(() => {
  return (
    <p>
      Ділер авто. Сутності: машина, покупець.
    </p>
  );
});

export const Lab1Look = withStyles(styles)(() => {
  return (
    <img src={Lab1LookImage} width="100%" alt="content" />
  );
});

export const Lab1Table = withStyles(styles)(() => {
  return (
    <code>
      <pre>
        {`
'& table': {
  fontFamily: 'arial, sans-serif',
  borderCollapse: 'collapse',
  width: '100%',
},

'& td, th': {
  border: '1px solid #dddddd',
  textAlign: 'left',
  padding: 8,
},

'& tr:nth-child(even)': {
  backgroundColor: '#dddddd',
}

<table>
  <tbody>
    <tr>
      <th>Name</th>
      <th>Contact</th>
      <th>Country</th>
      <th>Model</th>
    </tr>
    {this.users.map((user) => (
      <tr key={user.name}>
        <td>{user.name}</td>
        <td>{user.contact}</td>
        <td>{user.country}</td>
        <td>{user.model}</td>
      </tr>
    ))}
  </tbody>
</table>
        `}
      </pre>
    </code>
  );
});

export const Lab1Form = withStyles(styles)(() => {
  return (
    <code>
      <pre>
    {`
<form>
  <label for="fname">First name:</label><br />
  <input type="text" id="fname" name="fname" /><br />
  <label for="lname">Last name:</label><br />
  <input type="text" id="lname" name="lname" />
</form>
    `}
      </pre>
    </code>
  );
});

export const Lab1Image = withStyles(styles)(() => {
  return (
    <code>
    <pre>
      {`
<img 
  className={classes.logo} 
  src="https://www.freepnglogos.com/uploads/cleveland-auto-show-car-logo-png-25.png" 
  alt="logo" 
/>
      `}
    </pre>
  </code>
  );
});

export const Lab1Heading = withStyles(styles)(() => {
  return (
    <code>
      <pre>
        {`
<h1>Denzel</h1>
        `}
    </pre>
  </code>
  );
});

export const Lab1Summary = withStyles(styles)(() => {
  return (
    <p>
      Навчилися працювати з формами, таблицями, зображеннями, залоговками
    </p>
  );
});