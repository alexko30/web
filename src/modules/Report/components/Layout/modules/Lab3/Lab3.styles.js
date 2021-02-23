const styles = {
  root: {},
};

export const korniinkoSiteStyles = {
  mainCourseName: {
    fontSize: 20,
    marginBottom: 12,
  },
};

export const kudymenkoSiteStyles = {
  root: {},
  header: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#8080803b',
    padding: '20px 15px',
    marginBottom: 24
  },
  heading: {},
  workTime: {
    color: 'blue'
  },
  navigation: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',

    '& button': {
      background: 'aqua',
    }
  }
};

export const hytrykSiteStyles = {
  root: {},
  header: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 15px',

    '& button': {
      background: 'black',
      color: 'white'
    }
  },
  courses: {
    backgroundColor: 'black',
    color: 'white'
  },
  course: {
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 6,
    border: '1px solid grey',
    width: '30%'
  },
};

export default styles;