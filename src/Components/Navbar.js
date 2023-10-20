import React, { useState } from 'react'
import Logo4 from "../Assets/Logo4.jpg"
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { WhatsApp } from '@mui/icons-material';
import { FiArrowRight } from 'react-icons/fi';

const Navbar = (props) => {
  const [openMenu, setOpenMenu] = useState(false) 
  // this variable is used for opening and closing the menu drawer (used for implementing the navbar in mobile devices)

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />
    },
    {
      text: "About",
      icon: <InfoIcon />
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />
    }
  ]

  const scrollFunction = (elementRef) => {
    window.scrollTo({top: elementRef.current.offsetTop, behavior: 'smooth'});
    // event.preventDefault();
  }

  return (
  <nav> {/* contains different components of navbar */}
    <div className='nav-logo-container'> {/* logo of the navbar */}
      <img className='logo' src={Logo4} alt="" />
    </div>

    <div className='navbar-links-container'> {/* links of navbar */}
      <a href='' onClick={(e) => {scrollFunction(props.home); e.preventDefault()}}>Home</a>
      <a href='' onClick={(e) => {scrollFunction(props.about); e.preventDefault()}}>About</a>
      <a href='' onClick={(e) => {scrollFunction(props.contact); e.preventDefault()}}>Contact</a>
      <button className='primary-button' id='removed'><a href="https://wa.me/c/918595714343" target="_blank" style={{marginRight: 0}}>Order now</a></button>
    </div>

    <div className='navbar-menu-container'> {/* the menu button in the navbar, accessible only for small screens */}
      <HiOutlineBars3 onClick={() => setOpenMenu(true)}></HiOutlineBars3> {/* clicking the "three bars" opens the menu drawer */}
    </div>

    <Drawer open={openMenu} onClose = {() => setOpenMenu(false)} anchor="right"> {/* side menu, only accessible for small screens */}
      <Box sx = {{width: 250}} role="presentation" onClick = {() => setOpenMenu(false)}> {/* check navbar.txt for comments on role = "presentation" */}
        <List>
          {menuOptions.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem key="Order now" disablePadding style={{marginTop: '1rem'}}>
            <ListItemButton id='removed' >
            <ListItemIcon><FiArrowRight /></ListItemIcon>
              <a href="https://wa.me/c/918595714343" target="_blank" >Order now</a> 
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>

  </nav>
  );
}

export default Navbar