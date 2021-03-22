import * as React from 'react';
import { withStyles } from '@material-ui/core';



import styles from './Lab5.styles';

export const Lab5Task = withStyles(styles)(() => {
  return (
    <p>
      Придбати практичні навички роботи UI, вміти додавати до сайту  динамічні елементи цієї бібіліотеки, кнопки соціальних мереж, інформери та інше.
    </p>
  );
});

export const Lab5Components = withStyles(styles)(() => {
  return (
    <code>
      <pre>
      {`
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
      `}
      </pre>
    </code>
  );
});

export const Lab5Gallery = withStyles(styles)(() => {
  return (
    <code>
      <pre>
      {`
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
      `}
      </pre>
    </code>
  );
});

export const Lab5SliderPhoto = withStyles(styles)(() => {
  return (
    <code>
      <pre>
      {`
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
      `}
      </pre>
    </code>
  );
});

export const Lab5SliderVideo = withStyles(styles)(() => {
  return (
    <code>
      <pre>
      {`
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
      `}
      </pre>
    </code>
  );
});


export const Lab5Social = withStyles(styles)(() => {
  return (
    <code>
      <pre>
      {`
<SocialIcon network="twitter" />
<SocialIcon network="facebook" />
<SocialIcon network="instagram" />
<SocialIcon network="pinterest" />
      `}
      </pre>
    </code>
  );
});

export const Lab5Clock = withStyles(styles)(() => {
  return (
    <code>
      <pre>
      {`
<Clock value={this.state.date} />
      `}
      </pre>
    </code>
  );
});

export const Lab5Forecast = withStyles(styles)(() => {
  return (
    <code>
      <pre>
      {`
<iframe title="s" src="http://cezary.github.io/react-forecast/" width="100%" height="400px" />
      `}
      </pre>
    </code>
  );
});

export const Lab5Summary = withStyles(styles)(() => {
  return (
    'Навчилися працювати с бiблiотеками'
  );
});


