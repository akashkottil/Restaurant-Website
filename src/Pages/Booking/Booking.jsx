import React from 'react';
import { Box, Typography } from '@mui/material';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { styled } from '@mui/system';
import buyIcon from "../../assets/buy_icon.png";
import sellIcon from "../../assets/sell_icon.png";
import rentIcon from "../../assets/buy_icon.png";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const CustomBox = styled(Box)(({ theme }) => ({
  width: "30%",
  [theme.breakpoints.down("md")]: {
    width: "85%",
  },
}));

const GuidesBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  width: "70%",
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "0",
    flexDirection: "column",
  },
}));

    const GuideBox = styled(Box)(({theme})=>({
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        margin : theme.spacing(5),
        [theme.breakpoints.down("sm")]:{
            margin : theme.spacing(2,0,2,0),
        }
    }));

const Booking = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        className="underline"
        style={{
          height: "5px",
          width: "5%",
          borderRadius: "1rem",
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      />

      <Typography
        variant='h3'
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        How to Book?
      </Typography>

      <CustomBox>
        <Typography
          variant='body2'
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
            textAlign: "center",
          }}
        >
          Everything you need to know when you book for an advance slot
        </Typography>
      </CustomBox>

      <GuidesBox>
        <GuideBox>
          <img src={buyIcon} alt="" />
          <Typography
            variant='body2'
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Order Guides
          </Typography>
          <Box
          sx={{
            cursor:"pointer",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
          }}
          >
            <Typography
            variant='body2'
            sx={{fontWeight:"bold", fontSize:"14px", color:"#0689ff"}}
            >How to Order
            </Typography>
            <ArrowRightAltIcon style={{color:"#0689FF"}}/>
          </Box>
        </GuideBox>
        <GuideBox>
          <img src={sellIcon} alt="" />
          <Typography
            variant='body2'
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Order Guides
          </Typography>
          <Box
          sx={{
            cursor:"pointer",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
          }}
          >
            <Typography
            variant='body2'
            sx={{fontWeight:"bold", fontSize:"14px", color:"#0689ff"}}
            >How to Order
            </Typography>
            <ArrowRightAltIcon style={{color:"#0689FF"}}/>
          </Box>
        </GuideBox>
        <GuideBox>
          <img src={rentIcon} alt="" />
          <Typography
            variant='body2'
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Order Guides
          </Typography>
          <Box
          sx={{
            cursor:"pointer",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
          }}
          >
            <Typography
            variant='body2'
            sx={{fontWeight:"bold", fontSize:"14px", color:"#0689ff"}}
            >How to Order
            </Typography>
            <ArrowRightAltIcon style={{color:"#0689FF"}}/>
          </Box>
        </GuideBox>
      </GuidesBox>
      <CustomButton
      backgroundColor="#0F1B4C"
      color="#fff"
      buttonText="See full Guides"
      guideBtn={true}
      />
    </Box>
  );
};

export default Booking;
