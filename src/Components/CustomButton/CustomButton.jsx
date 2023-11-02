import { Button } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react'

const CustomButton = ({
    backgroundColor,
    color,
    buttonText,
    welcomeBtn,
    guideBtn,
    getStartedBtn,
}) =>{
    const CustomButton =styled(Button)(({theme})=>({
        backgroundColor : backgroundColor,
        color:color,
        fontWeight: "700",
        cursor:'pointer',
        padding: "0.5rem 1.25rem",
        borderRadius:"7px",
        textTransform:"none",
        display:"block",
        border:"2px solid transparent",
        "&:hover": {
            backgroundColor:color,
            color: backgroundColor,
            borderColor: backgroundColor,
        },
        [theme.breakpoints.down("md")]: {
            margin: (welcomeBtn || getStartedBtn) && theme.spacing(0, "auto",3,"auto"),
            width: guideBtn && "90%",
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: (welcomeBtn || getStartedBtn) && theme.spacing(0, "auto",3,"auto"),
            width: guideBtn && "90%",
        },
    }));
    return(
        <CustomButton>{buttonText}</CustomButton>
    )
};

export default CustomButton