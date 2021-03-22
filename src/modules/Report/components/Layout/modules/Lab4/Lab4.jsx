import * as React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './Lab4.styles';

export const Lab4Task = withStyles(styles)(() => {
  return (
    <p>
      Придбати практичні навички роботи маніпулювання інформаційним вмістом Web-документа засобами мови JavasSript, використання об’єктів,масивів, функцій, подій, обробників подій у сценаріях на мові JavasSript
    </p>
  );
});

export const Lab4Hyper = withStyles(styles)(() => {
  return (
    <code>
      <pre>
      {`
<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.6.0.js"></script>
      `}
      </pre>
    </code>
  );
});

export const Lab4Handler = withStyles(styles)(() => {
  return (
    <code>
      <pre>
      {`
<script>
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello World')
  })
</script>
      `}
      </pre>
    </code>
  );
});

function getRandomValue(min, max) {
  return Math.round((Math.random() * (max - min) + min));
}

const sortArray = (arr, dir = 'asc') => {
  return arr.sort((a, b) => (a - b) * (dir === 'asc' ? 1 : -1));
};

const createArray = (number, start = 1, end = 6) => {
  return Array(number).fill('').map((x) => getRandomValue(start, end));
};

export const Lab4HytrykArray = withStyles(styles)(() => {
  const [value, setValue] = React.useState('');

  const handleChange = React.useCallback((e) => {
    const { value } = e.target;

    if (!isNaN(Number(value))) {
      setValue(value);
    }
  }, []);

  const first = createArray(Number(value));
  const second = createArray(Number(value));

  const repeatedElements = first.filter((el) => second.includes(el));

  return (
    <div>
      <p>
        Створити два одновимірних массивів, кількість елементів яких задана користувачем. Знайти найменший серед тих елементів першого вектора, які співпадають із значеннями елементів другого вектора.

        Упорядкувати масив у порядку зростання. Надрукувати вхідний та вихідний масив.
      </p>
      <input style={{ margin: '12px 0' }} value={value} onChange={handleChange} />
      <code style={{ display: 'block' }}>
        {JSON.stringify(first)} - initial 1, {JSON.stringify(sortArray(first))}
      </code>
      <code style={{ display: 'block' }}>
        {JSON.stringify(second)} - initial 2, {JSON.stringify(sortArray(second))}
      </code>
      <code style={{ display: 'block' }}>
        {JSON.stringify(repeatedElements)} - repeated, {Math.min(...repeatedElements)}
      </code>
      <code>
        <pre>
          {`
const [value, setValue] = React.useState('');

const handleChange = React.useCallback((e) => {
  const { value } = e.target;

  if (!isNaN(Number(value))) {
    setValue(value);
  }
}, []);

const first = createArray(Number(value));
const second = createArray(Number(value));

const repeatedElements = first.filter((el) => second.includes(el));

return (
  <div>
    <p>
      Створити два одновимірних массивів, кількість елементів яких задана користувачем. 
      Знайти найменший серед тих елементів першого вектора, які співпадають із значеннями елементів другого вектора.

      Упорядкувати масив у порядку зростання. Надрукувати вхідний та вихідний масив.
    </p>
    <input style={{ margin: '12px 0' }} value={value} onChange={handleChange} />
    <code style={{ display: 'block' }}>
      {JSON.stringify(first)} - initial 1, {JSON.stringify(sortArray(first))}
    </code>
    <code style={{ display: 'block' }}>
      {JSON.stringify(second)} - initial 2, {JSON.stringify(sortArray(second))}
    </code>
    <code style={{ display: 'block' }}>
      {JSON.stringify(repeatedElements)} - repeated, {Math.min(...repeatedElements)}
    </code>
  </div>
);
          `}
        </pre>
      </code>
    </div>
  );
});

export const Lab4KorniienkoArray = withStyles(styles)(({ classes }) => {
  const first = sortArray(createArray(20, 1, 20));
  const filtered = first.filter((el) => el % 2 === 0 || el % 3 === 0);
  const second = [
    ...filtered.filter((el) => el % 2 === 0 && el % 3 !== 0),
    ...filtered.filter((el) => el % 2 !== 0 && el % 3 === 0),
    ...filtered.filter((el) => el % 2 === 0 && el % 3 === 0),
  ];

  return (
    <div>
      <p>
      Заданий масив цілих чисел. Побудувати новий масив, в якому спочатку стоять числа, що діляться на 2, потім ті, що діляться на 2 та 3, потім на 3. Надрукувати вхідний та вихідний масиви.
      Упорядкувати масив у порядку зростання. Надрукувати вхідний та вихідний масив.
      </p>
      <code style={{ display: 'block' }}>
        {JSON.stringify(first)}, {JSON.stringify(sortArray(second))}
      </code>

      <code>
        <pre>
          {`
const first = sortArray(createArray(20, 1, 20));
const filtered = first.filter((el) => el % 2 === 0 || el % 3 === 0);
const second = [
  ...filtered.filter((el) => el % 2 === 0 && el % 3 !== 0),
  ...filtered.filter((el) => el % 2 !== 0 && el % 3 === 0),
  ...filtered.filter((el) => el % 2 === 0 && el % 3 === 0),
];

return (
  <div>
    <p>
    Заданий масив цілих чисел. Побудувати новий масив, в якому спочатку стоять числа, що діляться на 2, потім ті, 
    що діляться на 2 та 3, потім на 3. Надрукувати вхідний та вихідний масиви.
    Упорядкувати масив у порядку зростання. Надрукувати вхідний та вихідний масив.
    </p>
    <code style={{ display: 'block' }}>
      {JSON.stringify(first)}, {JSON.stringify(sortArray(second))}
    </code>
  </div>
);
          `}
        </pre>
      </code>
    </div>
  );
});

export const Lab4KudymenkoArray = withStyles(styles)(() => {
  const [value, setValue] = React.useState('');

  const handleChange = React.useCallback((e) => {
    const { value } = e.target;

    if (!isNaN(Number(value))) {
      setValue(value);
    }
  }, []);

  const first = createArray(Number(value));
  const smallest = Math.min(...first);

  return (
    <div>
      <p>
      Згенерувати значення елементів одновимірного масиву за допомогою генератора псевдовипадкових чисел, задавши кількість елементів масиву з клавіатури. Знайти мінімальний за значенням елемент і записати його на початок масиву, вивільнивши для нього місце шляхом зсуву елементів масиву вправо
      Упорядкувати масив у порядку зменшення. Надрукувати вхідний та вихідний масив.
      </p>
      <input style={{ margin: '12px 0' }} value={value} onChange={handleChange} />
      <code style={{ display: 'block' }}>
        {JSON.stringify(first)} - initial
      </code>
      <code style={{ display: 'block' }}>
        {JSON.stringify(sortArray([...first, smallest]), 'desc')}, {smallest}
      </code>

      <code>
        <pre>
          {`
const [value, setValue] = React.useState('');

const handleChange = React.useCallback((e) => {
  const { value } = e.target;

  if (!isNaN(Number(value))) {
    setValue(value);
  }
}, []);

const first = createArray(Number(value));
const smallest = Math.min(...first);

return (
  <div>
    <p>
    Згенерувати значення елементів одновимірного масиву за допомогою генератора 
    псевдовипадкових чисел, задавши кількість елементів масиву з клавіатури. 
    Знайти мінімальний за значенням елемент і записати його на початок масиву, вивільнивши для нього місце шляхом зсуву елементів масиву вправо
    Упорядкувати масив у порядку зменшення. Надрукувати вхідний та вихідний масив.
    </p>
    <input style={{ margin: '12px 0' }} value={value} onChange={handleChange} />
    <code style={{ display: 'block' }}>
      {JSON.stringify(first)} - initial
    </code>
    <code style={{ display: 'block' }}>
      {JSON.stringify(sortArray([...first, smallest]), 'desc')}, {smallest}
    </code>
  </div>
);
          `}
        </pre>
      </code>
    </div>
  );
});

export const Lab4Summary = withStyles(styles)(() => {
  return (
    'Навчилися працювати с javascript'
  );
});


