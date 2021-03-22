import * as React from 'react';
import { Button, MenuItem, Select, withStyles } from '@material-ui/core';
import faker from 'faker';
import orderBy from 'lodash/orderBy';

import SiteScreen from './assets/lab3.PNG';
import FlexScreen from './assets/flex-header.PNG';
import { flexCenterStyles } from '../../../../../../utils/styles';

import styles, { korniinkoSiteStyles, kudymenkoSiteStyles, hytrykSiteStyles } from './Lab4.styles';

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

export const Lab4KorniienkoArray = withStyles(korniinkoSiteStyles)(({ classes }) => {
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

export const Lab4KudymenkoSite = withStyles(kudymenkoSiteStyles)((props) => {
  const { classes } = props;
  const links = ['Головна', 'Акції', 'Курси', 'Про центр', 'Контакти', 'Ціни', 'Блог'];

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <section style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/write-letter-1737359-1478674.png" 
            alt="" 
            height="32px"
          />
          <span className={classes.heading}>Начальний центр навчання - IT</span>
        </section>
        <span className={classes.workTime}>Ми працюємо Пн-Пт: 10:00 - 19:00, Сб - Нд: Вихідний</span>
      </header>

      <section className={classes.navigation}>
        {links.map((text) => (
          <Button key={text}>{text}</Button>
        ))}
      </section>

      <section style={{ backgroundColor: '#8080803b', display: 'flex', justifyContent: 'space-between', padding: 12, marginTop: 24 }}>
        <div style={{ background: 'blue', color: 'white', padding: 12, width: '30%' }}>
          {Array(10).fill('').map((x, i) => (
            <div key={i} style={{ padding: '3px 0' }}>
              Курси {faker.company.bsNoun()}
            </div>
          ))}
        </div>
        <div style={{ background: 'orange', padding: 12, width: '30%' }}>
          <img 
            alt=""
            width="25px"
            src={faker.image.business()}
            style={{ marginRight: 12 }}
          />
          <b>{faker.company.catchPhrase()}</b>
          <br />
          <br />
          {Array(3).fill('').map((x, i) => (
            <div key={i}>
              <div>
                <img 
                  alt=""
                  width="25px"
                  src={faker.image.business()}
                  style={{ marginRight: 12 }}
                />
                <b>{faker.company.catchPhrase()}</b>
              </div>
              <p style={{ margin: '10px 0 24px 0' }}>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem </p>
            </div>
          ))}
        </div>
        <div style={{ background: 'red', padding: 12, width: '30%', color: 'white' }}>
          <h6 style={{ fontSize: 20 }}>Знайти курс</h6>
          <p style={{ margin: '12px 0' }}>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lore Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lore
          </p>
          <input style={{ height: 30, width: '100%' }} placeholder="Пошук" />
        </div>
      </section>

      <h6 style={{ margin: '24px 0', textAlign: 'center', fontWeight: 800 }}>Курси веб програмування</h6>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <img 
          src="http://www.handsonsavannah.org/wp-content/uploads/2019/10/AdobeStock_256229414.jpg" 
          alt=""
          width="30%"
        />
        <p style={{ marginLeft: 12 }}>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
        {[
          'Мапа',
          'Контакт',
          'Посилання',
          'Мапа',
        ].map((text) => (
          <Button style={{ width: 150 }} color="default">
            {text}
          </Button>
        ))}
      </div>
    </div>
  );
});

export const Lab4HytrykFlex = withStyles(styles)(() => {
  const border = '1px solid black';
  const padding = '10px 0 10px 10px';

  return (
    <div style={{ height: 400, display: 'inline-flex', boxShadow: '2px 2px 8px 2px' }}>
      <div style={{ height: '100%', width: 80, border }} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', border, width: 300 }}>
        <div style={{ padding, border, background: 'aqua', }}>1</div>

        <div style={{ border, flexGrow: 1, display: 'flex' }}>
          <div style={{ ...flexCenterStyles, width: 100, height: '100%', border, background: 'yellow' }}>
            2
          </div>
          <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding, border, background: 'yellow', }}>5</div>
            <div style={{ padding: '80px 0 10px 40px', border, flexGrow: 1 }}>4</div>
          </div>
        </div>

        <div style={{ padding, border, background: 'aqua', }}>3</div>
      </div>
      <div style={{ height: '100%', width: 80, border }} />
    </div>
  );
});

export const Lab4HytrykSite = withStyles(hytrykSiteStyles)((props) => {
  const { classes } = props;
  const links = ['Форми навчання', 'Заходи', 'Про Академію', 'Контакти'];

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        {links.map((text) => (
          <Button key={text}>{text}</Button>
        ))}
        <Select style={{ width: '200px', height: 40 }} variant="outlined" defaultValue="kyiv">
          <MenuItem value="kyiv">Київ</MenuItem>
          <MenuItem value="dnipro">Дніпро</MenuItem>
        </Select>
      </header>

      <section style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '50%' }}>
          <h6 style={{ fontSize: 20, fontWeight: 700, textTransform: 'uppercase' }}>Курси програмування <br /><span style={{ color: 'blue' }}>з 100% гарантією</span>&nbsp; працевлаштування</h6>
          <p style={{ marginTop: 50 }}>З SCHOOL ти отримуєш високооплачувану роботу своєї мрії<br />Ми готуємо висококласних IT-спеціалістів</p>
        </div>
        <div style={{ fontSize: 55, fontWeight: 800, lineHeight: 1 }}>
          <div style={{ fontSize: 120, color: 'white', '-webkit-text-stroke': '1px blue' }}>Школа &nbsp;</div>
          прграмування
        </div>
      </section>

      <section>
        <div style={{ background: '#00ffff1c', padding: 12, marginTop: 20 }}>
        <div style={{ textAlign: 'center', fontWeight: 800, textTransform: 'uppercase' }}>
          <h6>Відгуки від роботадавців</h6>
          <h6 style={{ color: 'orange', marginBottom: 24 }}>Підтверджена якість</h6>
        </div>
          <p style={{ margin: '12px 20%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          
          <div style={{ display: 'flex', marginTop: 24 }}>
            <div style={{ width: '40%' }}>
              <iframe 
                allowFullScreen 
                title="video"
                width="100%" 
                height="250" 
                src="https://www.youtube.com/embed/bm-cCn0uRXQ" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              />
              <h6 style={{ textAlign: 'center', marginTop: 24 }}>Відгук Incora про випускників Okten</h6>
            </div>
            <div>
              {[
                'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Luxoft-logo-2015.svg/1280px-Luxoft-logo-2015.svg.png',
                'http://pngimg.com/uploads/microsoft/microsoft_PNG20.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1200px-Apple_logo_grey.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/d/da/SoftServe_logo_new.png',
                'https://crmrating.org/img/terrasoft.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Luxoft-logo-2015.svg/1280px-Luxoft-logo-2015.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Luxoft-logo-2015.svg/1280px-Luxoft-logo-2015.svg.png',
              ].map((companyLogo, i) => (
                <img key={i} src={companyLogo} alt="" height="40" style={{ objectFit: 'contain', margin: 12 }} />
              ))}
            </div>
          </div>
        </div>
      </section>
    
      <section className={classes.courses} style={{ padding: 24 }}>
        <div style={{ textAlign: 'center', fontWeight: 800, textTransform: 'uppercase' }}>
          <h6>Відгуки від роботадавців</h6>
          <h6 style={{ color: 'orange' }}>Підтверджена якість</h6>
        </div>

        <div style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-between', marginTop: 32, }}>
          {[
            {
              imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png',
            },
            {
              imgSrc: 'https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png',
            },
            {
              imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png',
            },
          ].map(({ imgSrc }, i) => (
            <div key={imgSrc} className={classes.course}>
              <div style={{ textAlign: 'center', marginBottom: 20, fontWeight: 800, padding: 24, }}>
                <img src={imgSrc} alt="" height="100" />
                <div style={{ color: 'aqua' }}>Complex</div>
                <div style={{ textTransform: 'uppercase' }}>JavaScript</div>
                <div style={{ textTransform: 'uppercase', color: 'orange' }}>Комплексний курс</div>
              </div>

              <div>
                <div>Стартовий рівень: початківець</div>
                <div>Тривалість: 5-11 місяців</div>
                <div>Ціна: від 14500грн</div>
              </div>

              <div style={{ color: 'aqua', marginTop: 40 }}>Залишилося 6 місць</div>

              <div style={{ border: '1px solid grey', textAlign: 'center', padding: 12, marginTop: 40 }}>
                Детальніше
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ display: 'flex', height: 32, marginTop: 24 }}>
        <div style={{ padding: 8, flexGrow: 1, background: 'black', textAlign: 'left', height: '100%', color: 'white', marginRight: 24 }}>
          © 2020
        </div>
        {
          [
            'https://cdn3.iconfinder.com/data/icons/glypho-social-and-other-logos/64/logo-facebook-512.png',
            'https://image.flaticon.com/icons/png/512/23/23681.png',
            'https://i.pinimg.com/originals/37/17/bd/3717bd3e3e6f2c23a8635eb76c37140c.png',
            'https://pics.freeicons.io/uploads/icons/png/1766858341556105723-512.png',

          ].map((logo) => (
            <img key={logo} style={{ marginRight: 8 }} src={logo} height="100%" alt="" />
          ))
        }
      </section>
    </div>
  );
});

export const Lab4Summary = withStyles(styles)(() => {
  return (
    'Навчилися працювати с javascript'
  );
});


