import * as React from 'react';
import { Button, Menu, MenuItem, Slider, Tab, Tabs, withStyles } from '@material-ui/core';
import Gallery from 'react-photo-gallery'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { SocialIcon } from 'react-social-icons';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

import styles from './Main.styles';

class Main extends React.Component {
  get users() {
    return Array(10).fill('').map((x, i) => ({
      name: `Howard Web ${i}`,
      country: `USA`,
      contact: '+1 389 567 56 33',
      model: `A ${i}`
    }));
  }

  state = {
    menuAnchor: null,
    tab: "1",
    date: new Date()
  }
  
  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState((state) => ({ ...state, date: new Date() }))
    }, 1000);
  }

  handleMenuOpen = (e) => {
    e.persist();

    this.setState((state) => ({ ...state, menuAnchor: e.target }))
  }

  handleMenuClose = (e) => {
    this.setState((state) => ({ ...state, menuAnchor: null }))
  }

  handleTabChange = (e, value) => {
    this.setState((state) => ({ ...state, tab: value }));
  }

  render() {
    const { classes } = this.props;
    console.log(this.state.date);
    return (
      <div className={classes.root}>
        <header className={classes.header}>
          <h1>Denzel</h1>
          <img className={classes.logo} src="https://www.freepnglogos.com/uploads/cleveland-auto-show-car-logo-png-25.png" alt="logo" />
          <a style={{ display: 'block' }} href="https://www.mercedes-benz.ua/" target="_blank" rel="noopener noreferrer">Feel free to join us!</a>
          <marquee behavior="scroll" direction="left" style={{ position: 'absolute', left: 0, top: 0, }}>Denzel</marquee>
        </header>
        <form>
          <label htmlFor="fname">First name:</label><br />
          <input type="text" id="fname" name="fname" /><br />
          <label htmlFor="lname">Last name:</label><br />
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

        <ul style={{ margin: 12 }}>
          <li>Tesla</li>
          <li>Toyota
            <ul>
              <li>Jaguar</li>
              <li>Mercedes</li>
            </ul>
          </li>
        </ul>
        <Button onClick={this.handleMenuOpen}>
          Open
        </Button>
        <Menu 
          getContentAnchorEl={null}
          anchorEl={this.state.menuAnchor} 
          open={Boolean(this.state.menuAnchor)} 
          onClose={this.handleMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <MenuItem value="1">Hello</MenuItem>
          <MenuItem value="2">World</MenuItem>
        </Menu>
      
        <Tabs value={this.state.tab} onChange={this.handleTabChange}>
          <Tab value="1" label="Hello" />
          <Tab value="2" label="World" />
        </Tabs>

        <Slider style={{ width: 200 }} />

        <Gallery
          photos={[
            {
              src: 'https://static.pakwheels.com/2017/07/carrr.png',
              width: 3,
              height: 2,
            },
            {
              src: 'https://i.pinimg.com/originals/89/23/f6/8923f67b2242b2f47fdf3128fc988196.jpg',
              width: 4,
              height: 4,
            },
            {
              src: 'https://sabahshabnam.files.wordpress.com/2016/09/carrr.jpg?w=640',
              width: 4,
              height: 4,
            }
          ]}
        />

        <Slide easing="ease">
          {[
            'https://static.pakwheels.com/2017/07/carrr.png',
            'https://i.pinimg.com/originals/89/23/f6/8923f67b2242b2f47fdf3128fc988196.jpg',
            'https://sabahshabnam.files.wordpress.com/2016/09/carrr.jpg?w=640'
          ].map((src) => (
            <div key={src} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <img style={{ display: 'block' }} alt="" src={src} height="200" />
            </div>
          ))}
        </Slide>

        <Slide easing="ease">
          {[
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
          ].map((src) => (
            <div key={src} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <video controls style={{ display: 'block' }} alt="" src={src} height="200" />
            </div>
          ))}
        </Slide>
        <SocialIcon network="twitter" />
        <SocialIcon network="facebook" />
        <SocialIcon network="instagram" />
        <SocialIcon network="pinterest" />
        <Clock value={this.state.date} />
        <iframe title="s" src="http://cezary.github.io/react-forecast/" width="100%" height="400px" />
      </div>
    );
  }
}

export default withStyles(styles)(Main);
