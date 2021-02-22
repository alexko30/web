import * as React from 'react';
import { Button, MenuItem, Select, withStyles } from '@material-ui/core';
import faker from 'faker';

import SiteScreen from './assets/lab3.PNG';
import FlexScreen from './assets/flex-header.PNG';
import { flexCenterStyles } from '../../../../../../utils/styles';

import styles, { korniinkoSiteStyles, kudymenkoSiteStyles, hytrykSiteStyles } from './Lab3.styles';

export const Lab3Task = withStyles(styles)(() => {
  return (
    <p>
      Придбати практичні навички роботи верстки сторінок засобами CSS,
верстки на основі плаваючих елементів, з’ясувати переваги та недоліки
типів макетів веб-сторінок
    </p>
  );
});

export const Lab3IDE = withStyles(styles)(() => {
  return (
    <>
      <div>
        VS Code.
      </div>
      <code>
        <pre>
        {`
// in App.jsx
import Main from './modules/Main';

// in Main.jsx
import styles from './Main.styles';
        `}
        </pre>
      </code>
    </>
  );
});

export const Lab3SiteScreen = withStyles(styles)(() => {
  return (
    <img src={SiteScreen} alt="" width="100%" />
  );
});

export const Lab3HTML = withStyles(styles)(() => {
  return (
    <code>
      <pre>
      {`
<div className={classes.root}>
  <header className={classes.header}>
    <h1>Denzel</h1>
    <img className={classes.logo} src="https://www.freepnglogos.com/uploads/cleveland-auto-show-car-logo-png-25.png" alt="logo" />
    <a style={{ display: 'block' }} href="https://www.mercedes-benz.ua/" target="_blank" rel="noopener noreferrer">Feel free to join us!</a>
    <marquee behavior="scroll" direction="left" style={{ position: 'absolute', left: 0 }}>Denzel</marquee>
  </header>
  <form>
    <label for="fname">First name:</label><br />
    <input type="text" id="fname" name="fname" /><br />
    <label for="lname">Last name:</label><br />
    <input type="text" id="lname" name="lname" />
  </form>
  <br />
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

  <ul style={{ marginLeft: 12 }}>
    <li>Tesla</li>
    <li>Toyota
      <ul>
        <li>Jaguar</li>
        <li>Mercedes</li>
      </ul>
    </li>
  </ul>
</div>
      `}
      </pre>
    </code>
  );
});

export const Lab3CSS = withStyles(styles)(() => {
  return (
    <code>
      <pre>
      {`
const styles = {
  root: {
    padding: 12,

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
    },

    '& > header': {}
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    marginTop: 24
  },
};
      `}
      </pre>
    </code>
  );
});

export const Lab3Flex = withStyles(styles)(() => {
  return (
    <>
      <img src={FlexScreen} alt="" width="100%" />
      <code>
        <pre>
        {`
HTML:

<header className={classes.root}>
  <section className={classes.intro}>
    <h1 className={classes.introHeading}>ЗВІТИ ЛАБОРАТОРНИХ РОБІТ</h1>
    <h2 className={classes.introSubheading}>З ДИСЦИПЛІНИ "WEB-ТЕХНОЛОГІЇ</h2>
    <h3 className={classes.introIdentification}>Групи ІА-72, Бригади 5, Корнієнко О., Кудименко В., Хитрик Г.</h3>
  </section>
  <section className={classes.labs}>
    {Array(labsAmount).fill('').map((x, i) => (
      <Button 
        style={{ background: i === selectedLabId ? '#dbfdff' : 'inherit' }}
        key={i}
        className={classes.labBtn}
        onClick={this.handleSelect(i)}
      >
        Лабораторна робота {i + 1}
      </Button>
    ))}
  </section>
</header>

CSS:

header: {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}
        `}
        </pre>
      </code>
    </>
  );
});

export const Lab3KorniienkoFlex = withStyles(styles)(() => {
  const border = '1px solid black';
  const padding = '10px 0 10px 10px';

  return (
    <div style={{ height: 400, display: 'inline-flex', boxShadow: '2px 2px 8px 2px' }}>
      <div style={{ ...flexCenterStyles, width: 100, height: '100%', border, background: 'yellow' }}>
        2
      </div>
      <div style={{ height: '100%', width: 80, border }} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', border, width: 300 }}>
        <div style={{ padding, border, background: 'aqua', }}>1</div>
        <div style={{ padding, border, flexGrow: 1, display: 'flex', alignItems: 'center' }}>4</div>
        <div style={{ padding, border, background: 'aqua', }}>3</div>
      </div>
      <div style={{ height: '100%', width: 80, border }} />
    </div>
  );
});

export const Lab3KorniienkoSite = withStyles(styles)(() => {
  const border = '1px solid black';
  const padding = '10px 0 10px 10px';

  return (
    <div style={{ height: 400, display: 'inline-flex', boxShadow: '2px 2px 8px 2px' }}>
      <div style={{ ...flexCenterStyles, width: 100, height: '100%', border, background: 'yellow' }}>
        2
      </div>
      <div style={{ height: '100%', width: 80, border }} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', border, width: 300 }}>
        <div style={{ padding, border, background: 'aqua', }}>1</div>
        <div style={{ padding, border, flexGrow: 1, display: 'flex', alignItems: 'center' }}>4</div>
        <div style={{ padding, border, background: 'aqua', }}>3</div>
      </div>
      <div style={{ height: '100%', width: 80, border }} />
    </div>
  );
});

export const Lab3KudymenkoFlex = withStyles(styles)(() => {
  const border = '1px solid black';
  const padding = '10px 0 10px 10px';

  return (
    <div style={{ height: 400, display: 'inline-flex', boxShadow: '2px 2px 8px 2px' }}>
      <div style={{ ...flexCenterStyles, width: 100, height: '100%', border, background: 'yellow' }}>
        2
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', border, width: 300 }}>
        <div style={{ padding, border, background: 'aqua', }}>1</div>
        <div style={{ padding, border, flexGrow: 1, display: 'flex', alignItems: 'center' }}>4</div>
        <div style={{ padding, border, background: 'aqua', }}>3</div>
      </div>
      <div style={{ height: '100%', width: 80, border }} />
    </div>
  );
});

export const Lab3KudymenkoSite = withStyles(kudymenkoSiteStyles)((props) => {
  const { classes } = props;
  const links = ['Головна', 'Акції', 'Курси', 'Про центр', 'Контакти', 'Ціни', 'Блог'];

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <section>
          <img src="https://res-4.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1462873719/iwdi7ujyagn62pbyntvx.png" />
          <span className={classes.heading}>Начальний центр навчання - IT</span>
        </section>
        <span className={classes.workTime}>Ми працюємо Пн-Пт: 10:00 - 19:00, Сб - Нд: Вихідний</span>
      </header>

      <section className={classes.navigation}>
        {links.map((text) => (
          <Button key={text}>{text}</Button>
        ))}
      </section>

      <section>
        <div>
          {Array(10).fill('').map((x, i) => (
            <div key={i}>
              Курси {faker.company.bsNoun()}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
});

export const Lab3HytrykFlex = withStyles(styles)(() => {
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

export const Lab3HytrykSite = withStyles(hytrykSiteStyles)((props) => {
  const { classes } = props;
  const links = ['Форми навчання', 'Заходи', 'Про Академію', 'Контакти'];

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        {links.map((text) => (
          <Button key={text}>{text}</Button>
        ))}
        <Select variant="outlined" defaultValue="kyiv">
          <MenuItem value="kyiv">Київ</MenuItem>
          <MenuItem value="dnipro">Дніпро</MenuItem>
        </Select>
      </header>

      <section>
        <div>
          <h6>Курси програмування <span>з 100% гарантією працевлаштування</span></h6>
          <p>З SCHOOL ти отримуєш високооплачувану роботу своєї мрії<br />Ми готуємо висококласних IT-спеціалістів</p>
        </div>
        <div>
          <span>Школа &nbsp;</span>
          прграмування
        </div>
      </section>

      <section>
        <div style={{ background: 'aqua', padding: 12 }}>
          <div style={{ textAlign: 'center' }}>
            <h6>Відгуки від роботадавців</h6>
            <h6>Підтверджена якість</h6>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          
          <div style={{ display: 'flex', marginTop: 24 }}>
            <div style={{ width: '30%' }}>
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
                'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Luxoft-logo-2015.svg/1280px-Luxoft-logo-2015.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Luxoft-logo-2015.svg/1280px-Luxoft-logo-2015.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Luxoft-logo-2015.svg/1280px-Luxoft-logo-2015.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Luxoft-logo-2015.svg/1280px-Luxoft-logo-2015.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Luxoft-logo-2015.svg/1280px-Luxoft-logo-2015.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Luxoft-logo-2015.svg/1280px-Luxoft-logo-2015.svg.png',
              ].map((companyLogo, i) => (
                <img key={i} src={companyLogo} alt="" width={100} style={{ objectFit: 'contain', margin: 12 }} />
              ))}
            </div>
          </div>
        </div>
      </section>
    
      <section className={classes.courses}>
        <div style={{ textAlign: 'center' }}>
          <h6>Відгуки від роботадавців</h6>
          <h6>Підтверджена якість</h6>
        </div>

        <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
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
              <div style={{ textAlign: 'center', marginBottom: 20 }}>
                <img src={imgSrc} alt="" width="100" />
                <div>Complex</div>
                <div>JavaScript</div>
                <div>Комплексний курс</div>
              </div>

              <div>
                <div>Стартовий рівень: початківець</div>
                <div>Тривалість: 5-11 місяців</div>
                <div>Ціна: від 14500грн</div>
              </div>

              <div>Залишилося 6 місць</div>

              <div>
                Детальніше
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
});

export const Lab3Summary = withStyles(styles)(() => {
  return (
    'Навчилися працювати с Flexbox, таблицями, плаваючими елементами'
  );
});


