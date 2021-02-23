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
    backgroundColor: 'grey',
    padding: '20px 15px',
  },
  heading: {
    color: 'aqua',
  },
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
    padding: 24,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 6,
    border: '1px solid grey'
  },
};

export default styles;