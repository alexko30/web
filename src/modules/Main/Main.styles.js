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

export default styles;