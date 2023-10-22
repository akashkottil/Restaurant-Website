import React, { useState } from 'react';
import { Box, Typography, toggleButtonClasses } from '@mui/material';
import { styled } from '@mui/system';
import CustomButton from '../CustomButton/CustomButton';
import logoImg from '../../assets/logo.png'

import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServiceIcon from "@mui/icons-material/MiscellaneousServices";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";

import{
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
}from '@mui/material';

const Header = () => {
  const Nav_titles = [
    {
      path: '/',
      display: 'Home',
    },
    {
      path: '/dishes',
      display: 'Dishes',
    },
    {
      path: '/services',
      display: 'Services',
    },
    {
      path: '/aboutus',
      display: 'About Us',
    },
  ];

  const [mobileMenu, setMobileMenu] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const NavBarLinksBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }));

  const NavBarLink = styled(Typography)(() => ({
    fontSize: "16px",
    color: "#4F5361",
    fontWeight: "bold",
    cursor: "pointer",
    '&:hover': {
      color: "#fff",
    },
  }));

  const NavBarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  }));

  
  const List = (anchor)=>(
      <Box
      sx={{
        width:anchor ==="top" ||anchor === "bottom" ? "auto":250
      }}
      role="presentation"
      onClick={toggleDrawer(anchor,false)}
      onkeyDown = {toogleDrawer(anchor,false)}
      >
        <List>
          {
            Nav_titles.map((item,index)=>(
              <ListItem key={item.index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {
                    index === 0 && <HomeIcon/>
                  }
                  {
                    index === 1 && <FeaturedPlayListIcon/>
                  }
                  {
                    index ===2 && <MiscellaneousServiceIcon/>
                  }
                  {
                    index ===3 && <ContactsIcon/>
                  }
                </ListItemIcon>
                <ListItemText primary={item.display}/>
              </ListItemButton>
            </ListItem>
            ))
          }
          
        </  List>
      </Box>
  )

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "40px",
        maxWidth: "auto",
        backgroundColor: "#FED801",
        marginLeft: "0px",
        marginBottom: "-24px",
        
        
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.5rem",
            
          }}
        >
          <CustomMenuIcon onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor='left'
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {List}
          </Drawer>
          <NavBarLogo src={logoImg} alt="logo error" />
        </Box>
        <NavBarLinksBox>
          {Nav_titles.map((items, index) => (
            <NavBarLink variant='body2' key={items.path}>
              {items.display}
            </NavBarLink>
          ))}
        </NavBarLinksBox>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <NavBarLink variant='body2'>
          Sign Up
        </NavBarLink>
        <CustomButton
          backgroundColor="#0F1B4C"
          color='#fff'
          buttonText="Register"
        />
      </Box>
    </Box>
  );
};

export default Header;
