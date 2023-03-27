import {createMuiTheme} from '@material-ui/core/styles'
const green = "#99B898";
const darkGreen = "#708670";
const grey = "#747474";
const theme = createMuiTheme({
  palette:{
    primary:{
      main: green
    },
    secondary:{
      main: darkGreen
    },
    common:{
      tan: "#FECEA8",
      lightRed: "#FF847C",
      red: "#E84A5F",
      offBlack: "#2A363B"
    }
  },
  typography:{
    h1:{
      fontSize: "4.5rem",
      fontFamily: "Philosopher",
      fontStyle: "italic",
      fontWeight: 700
    },
    h2:{
      fontFamily: 'Montserrat',
      fontSize: "3rem",
      fontWeight: 500
    },
    h3:{
      fontFamily: 'Montserrat',
      fontSize: "2rem",
      fontWeight: 300,
      color: green
    },
    h4:{
      fontFamily: 'Montserrat',
      fontStyle: 'italic',
      fontSize: "3rem",
      fontWeight: 700,
    },
    h5:{
      fontFamily: 'Montserrat',
      fontStyle: 'italic',
      fontSize: "2rem",
      fontWeight: 700,
    },
    body1:{
      fontFamily: 'Montserrat',
      fontSize: "1.5rem",
      color: grey
    }
  },
  overrides:{}
})

export default theme