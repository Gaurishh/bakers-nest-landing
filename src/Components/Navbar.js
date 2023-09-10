import React, { useState } from 'react'
import Logo from "../Assets/Logo.svg"
import Logo2 from "../Assets/Logo2.svg"
import Logo3 from "../Assets/Logo3.svg"
import Logo4 from "../Assets/Logo4.jpg"
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
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
      text: "Testimonials",
      icon: <CommentRoundedIcon />
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />
    },
  ]
  
  return (
  <nav> {/* contains different components of navbar */}
    <div className='nav-logo-container'> {/* logo of the navbar */}
      <img className='logo' src={Logo4} alt="" />
    </div>

    <div className='navbar-links-container'> {/* links of navbar */}

      <a href=''>Home</a>
      <a href=''>About</a>
      <a href=''>Testimonials</a>
      <a href=''>Contact</a>
      <a href=''>
        <BsCart2 className='navbar-cart-icon'/>
      </a>
      <button className='primary-button'>Order now</button>
      
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
        </List>
      </Box>
    </Drawer>

  </nav>
  );
}

export default Navbar