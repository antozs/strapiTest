import * as React from "react"
import { Link } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import { makeStyles } from "@material-ui/core/styles"

import search from "../../images/search.svg"
import cartIcon from "../../images/cart.svg"
import account from "../../images/account-header.svg"
import menu from "../../images/menu.svg"

const useStyles = makeStyles(theme => ({
  coloredIndicator: {
    backgroundColor: "#fff",
  },
  logo: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem",
    },
  },
  logoText: {
    color: theme.palette.common.offBlack,
  },
  logoContainer: {
    [theme.breakpoints.down("md")]: {
      marginRight: "auto",
    },
  },
  tab: {
    ...theme.typography.body1,
    fontWeight: 500,
  },
  tabs: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  icon: {
    height: "3rem",
    width: "3rem",
    [theme.breakpoints.down("xs")]: {
      height: "2rem",
      width: "2rem",
    },
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
  },
  listItemText: {
    color: "#fff",
  },
  badge: {
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.75rem",
      height: "1.1rem",
      width: "1.1rem",
      minWidth: 0,
    },
  },
}))

// const Header = ({ siteTitle }) => 

export default function Header({categories}){
  const classes = useStyles();
  console.log("HEADER ",categories)
  return (
    <AppBar>
      <Toolbar>
        <Button>
          <Typography variant="h1">Var X</Typography>
        </Button>
        <Tabs value={0}
        >
          <Tab label="Hats"></Tab>
          <Tab label="Hoodies"></Tab>
          <Tab label="Shirts"></Tab>
          <Tab label="Contact Us"></Tab>
        </Tabs>
        <IconButton>
          <img src={search} alt="search"/>
        </IconButton>
        <IconButton>
          <img src={cartIcon} alt="search"/>
        </IconButton>
        <IconButton>
          <img src={account} alt="search"/>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
