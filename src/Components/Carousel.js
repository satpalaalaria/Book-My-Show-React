import React from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@mui/styles";
import benner1 from '../../src/sourceImage/banner1.avif'
import benner2 from '../../src/sourceImage/banner3.avif'
import benner3 from '../../src/sourceImage/banner4.avif'
import benner4 from '../../src/sourceImage/bannner2.avif'
import benner5 from '../../src/sourceImage/banner5.avif'


const useStyles = makeStyles({
  image: {
    // objectFit:'fill',
    width: "100%",
    height: '300px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'start',
  },
});


const Banner = () => {

  const classes = useStyles();
  return (
    <div style={{marginTop:"0.5rem"}}>
      <Carousel
        autoplay={true}
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps={{
          style: {
            background: "rgba(0, 0, 0, 0.4)",
            color: "#ffffff",
            borderRadius: 0,
            margin: 0,
          },
        }}
        className={classes.carousel}
      >
        <img src={benner1} className={classes.image} alt="banner for web" />
        <img src={benner4} className={classes.image} alt="banner for web" />
        <img src={benner2} className={classes.image} alt="banner for web" />
        <img src={benner3} className={classes.image} alt="banner for web" />
        <img src={benner5} className={classes.image} alt="banner for web" />
      </Carousel>
    </div>
  );
};

export default Banner;