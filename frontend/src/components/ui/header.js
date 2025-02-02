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
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import SwipeableDrawer  from "@material-ui/core/SwipeableDrawer";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import search from "../../images/search.svg"
import cartIcon from "../../images/cart.svg"
import account from "../../images/account-header.svg"
import menu from '../../images/menu.svg';
import { useState } from "react"

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
  const matchesMD = useMediaQuery((theme)=> theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  // const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const routes = [...categories, {node: { name: 'Contact Us', id:'contact'}}];
  const actions = [ {icon: search, alt: 'search', visible: !matchesMD},
                    {icon: cartIcon, alt: 'cart', visible: !matchesMD, link: '/cart'},
                    {icon: account, alt: 'account', visible: !matchesMD, link: '/account'},
                    {icon: menu, alt: 'menu', visible: matchesMD, onClick: ()=> setDrawerOpen(true)},
                  ];
  const activeIndex = ()=> {
    const found = routes.indexOf(routes.filter(({ node: { name, link } }) => (link || `/${name.toLowerCase()}`=== window.location.pathname))[0]);
    console.log("found ",window.location.pathname, found);
    return found === -1 ? false: found;
  }
  const drawer = (
  <SwipeableDrawer
  open={drawerOpen}
  onOpen={()=>setDrawerOpen(true)}
  onClose={()=> setDrawerOpen(false)}
  // disableBackdropTransition={!iOS}
  // disableDiscovery={iOS}
  >
    <List disablePadding>
      {
         routes.map((route, i)=>{
          return (
          <ListItem
          selected={activeIndex() === i}
          divider button key={route.node.id} component={Link} to={route.node.link || `/${route.node.name.toLowerCase()}`}>
              <ListItemText primary={route.node.name}/>
          </ListItem>)
          })
      }  
    </List>
  </SwipeableDrawer>)

  const tabs = (
    <Tabs value={activeIndex()}>
          {
            routes.map((route, index) =>{
            return (
              <Tab label={route.node.name} key={route.node.id} component={Link} to={route.node.link || `/${route.node.name.toLowerCase()}`}
              classes={{root: classes.tab}}
              ></Tab>
            )
          })
          }
        </Tabs>
  );
  return (
    <AppBar>
      <Toolbar>
        <Button>
          <Typography variant="h1">Var X</Typography>
        </Button>
        {
          matchesMD? drawer : tabs
        }
        {
          actions.map(action => {
            if(action.visible){
              return (
              <IconButton component={Link} to={action.link}>
                <img className={classes.icon} src={action.icon} alt={action.alt}
                onClick={action.onClick}/>
              </IconButton>
            )}
          })
        }
        {/* <IconButton>
          <img src={search} alt="search"/>
        </IconButton>
        <IconButton>
          <img src={cartIcon} alt="cartIcon"/>
        </IconButton> */}
          {/* <IconButton onClick={()=> matchesMD? setDrawerOpen(true): null}>
            <img src={matchesMD? menu : account} alt={matchesMD? 'menu': 'account'}/>
          </IconButton> */}
      </Toolbar>
    </AppBar>
  )
}
