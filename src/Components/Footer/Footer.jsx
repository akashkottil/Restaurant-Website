import React from 'react'
import { styled ,Box, Container } from '@mui/system'
import { Typography } from '@mui/material'

import fbIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png"
import instagramIcon from "../../assets/instagram.png"


const Footer = () => {

    const CustomContainer = styled(Container)(({theme})=>({
        display:"flex",
        justifyContent:"space-around",
        gap :theme.spacing(5),
        [theme.breakpoints.down("sm")]:{
            flexdirection:"column",
            textAlign:"center",
        },
    }))

    const IconBox = styled(Box)(({theme})=>({
        display:"flex",
        alignItems:"center",
        gap:"1rem",
        [theme.breakpoints.down("sm")]:{
            justifyContent:"center",
        },
    }))

    const FooterLinks =styled("span")(({theme})=>({
        fontSize:"16px",
        color:"#000066",
        fontWeight:"300",
        cursor:"pointer",
        "&:hover":{
            color:"#66B2FF",
        },
    }))

    const featured = [
        {
          display:"Guides",
          path:"/guides"
        },
        {
          display:"Services",
          path:"/services"
        },
        {
          display:"Contact Us",
          path:"/contactUs"
        },
      ]
      
        const overview = [
        {
          display:"Location",
          path:"/location"
        },
        {
          display:"Partnership",
          path:"/partnership"
        },
        {
          display:"Terms of use & Privacy policies",
          path:"/terms"
        },
      ]
      
      // const media = [
      // {
      //   display:"Get in touch",
      //   path:"/getInTouch"
      // },
      // {
      //   display:"",
      //   path:"/partnership"
      // },
      // {
      //   display:"Terms of use & Privacy policies",
      //   path:"/terms"
      // },
      // ]
      

  return (
    <Box 
        sx={{
        py:10,
        backgroundColor:"#FFF6B2"
    }}
    >
        <CustomContainer>
        <Box>
            <Typography
            sx={{
                fontSize:"20px",
                color:"#1C1C1D",
                fontWeight:"700",
                mb:2,
            }}
            >
            Featured
            </Typography>
            {
                featured.map((item,index)=>(
            <FooterLinks >
                {item.display}
                <br/>
            </FooterLinks>
                ))
            }
            
        </Box>
        <Box>
        <Typography
            sx={{
                fontSize:"20px",
                color:"#1C1C1D",
                fontWeight:"700",
                mb:2,
            }}
            >
                Overview
            </Typography>
            {
                overview.map((item,index)=>(
            <FooterLinks >
                {item.display}
                <br/>
            </FooterLinks>
                ))
            }
        </Box>
        <Box>
        <Typography
            sx={{
                fontSize:"20px",
                color:"#1C1C1D",
                fontWeight:"700",
                mb:2,
            }}
            >
            Get in touch
            </Typography>
            <Typography
            sx={{
                fontSize:"16px",
                color:"7A7A7E",
                fontWeight:"500",
                mb:2,
            }}
            >
                Keep in touch with our social media pages.
            </Typography>
            
            <IconBox>
                <img src={fbIcon} alt="Facebook Icon" style={{cursor:"pointer"}} />
                <img src={twitterIcon} alt="Twitter Icon" style={{cursor:"pointer"}} />
                <img src={instagramIcon} alt="Instagram Icon" style={{cursor:"pointer"}} />
            </IconBox>
        </Box>
        </CustomContainer>
    </Box>
  )
}

export default Footer
