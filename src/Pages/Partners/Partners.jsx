import {styled} from '@mui/system'
import { Box, Container } from '@mui/system'
import React from 'react'
import logoImg from '../../assets/logo.png'
import logosImg from '../../assets/logos.png'
import starImg from '../../assets/star.png'
import { Typography } from '@mui/material'

const partners = () => {
    const CustomContainer = styled(Container)(({theme})=>({
        display:"flex",
        justifyContent:"space-between",
        [theme.breakpoints.down("md")]:{
            flexDirection:"column",
            alignItems:"center",
            textAlign:"center",
            marginBottom: theme.spacing(4)
        }
    }));
    const CustomBox = styled(Box)(({theme})=>({
        [theme.breakpoints.down("md")]:{
            marginBottom: theme.spacing(4)
        }
    }))
  return (
    <Box
        sx={{mt:10}}
    >
        <CustomContainer>
            <CustomBox>
                <img src={logoImg} alt=""  />
                <Typography variant='body2' 
                    sx={{
                        color:"#7D8589",
                        fontSize:"16px",
                        fontWeight:"bold",
                        mt:2,
                    }}
                >
                    More than 45,000 trust TechFlix
                </Typography>
            </CustomBox>
            <Box>
                <img src={starImg} alt="rating"  style={{maxWidth:"100%"}}/>
                <Typography
                sx={{
                    color:"#7D8589",
                    fontSize:"16px",
                    fontWeight:"bold",
                    mt:2,
                }}
                >
                    5-Star Rating (2K + Reviews)
                </Typography>
            </Box>
        </CustomContainer>
        <Box
        sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}
        >
            <img src={logosImg} alt="companies" style={{maxWidth:"100%"}} />
        </Box>

    </Box>
  )
}

export default partners;
