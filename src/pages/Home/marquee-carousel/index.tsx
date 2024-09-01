import { FC } from "react";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cx from "classnames";
import { ArrowButtonProps, Logo } from "./interface";
import ArrowLeft from "../../../assets/chevronLeft.svg";
import ArrowRight from "../../../assets/chevronRight.svg";
import classes from "./index.module.css";
import logoVU from "../../../assets/vu-logo.png";
import logoVGTU from "../../../assets/vgtu-logo.png";
import logoKTU from "../../../assets/ktu-logo.png";

const logos: Logo[] = [
   { src: logoVU, alt: "Vilnius University logo", height: "70px" },
   { src: logoVGTU, alt: "Vilnius Tech logo", height: "50px" },
   { src: logoKTU, alt: "Kaunas University of Technology logo", height: "60px" },
];

const PrevArrow: FC<ArrowButtonProps> = ({ onClick }) => (
   <button onClick={onClick} aria-label="previous" className={classes.arrowBtn}>
      <img src={ArrowLeft} alt="left arrow" className={classes.arrow} />
   </button>
);

const NextArrow: FC<ArrowButtonProps> = ({ onClick }) => (
   <button onClick={onClick} aria-label="next" className={classes.arrowBtn}>
      <img src={ArrowRight} alt="right arrow" className={classes.arrow} />
   </button>
);

const sliderSettings = {
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   nextArrow: <NextArrow />,
   prevArrow: <PrevArrow />,
   autoplay: true,
   autoplaySpeed: 3000,
   pauseOnHover: true,
   pauseOnFocus: true,
   focusOnSelect: true,
};

const marqueeSettings = {
   speed: 100,
   pauseOnHover: true,
   gradient: false,
   autoFill: true,
};

const MarqueeCarousel = () => {
   return (
      <>
         <div className={classes.largeContainer}>
            <div className={classes.container}>
               <h2 className={classes.largeHeader}>Mūsų partneriai</h2>
            </div>
            <Marquee {...marqueeSettings}>
               {logos.map((logo) => (
                  <img
                     key={logo.alt}
                     src={logo.src}
                     alt={logo.alt}
                     style={{ height: logo.height }}
                     className={cx(classes.grayscale, classes.partnerLogo)}
                  />
               ))}
            </Marquee>
         </div>
         <div className={classes.smallContainer}>
            <div>
               <h2 className={classes.smallHeader}>Mūsų partneriai</h2>
            </div>
            <Slider {...sliderSettings} className={classes.carousel}>
               {logos.map((logo) => (
                  <div key={logo.alt}>
                     <img
                        src={logo.src}
                        alt={logo.alt}
                        style={{ height: logo.height }}
                        className={classes.partnerLogo}
                     />
                  </div>
               ))}
            </Slider>
         </div>
      </>
   );
};

export default MarqueeCarousel;
