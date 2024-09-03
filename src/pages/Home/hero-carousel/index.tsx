import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import { IMAGES } from "./constants";
import classes from "./index.module.css";

const HeroCarousel = () => {
   const [index, setIndex] = React.useState(0);

   const handleSelect = (selectedIndex: number) => {
      setIndex(selectedIndex);
   };

   return (
      <div className={classes.container}>
         {IMAGES && IMAGES.length > 0 && (
            <div className={classes.wrapCarousel}>
               <Carousel activeIndex={index} onSelect={handleSelect}>
                  {IMAGES.map((image) => (
                     <Carousel.Item key={image.id}>
                        <img src={image.src} alt={image.alt} className={classes.photo} />
                        <Carousel.Caption>
                           <h3>{image.header}</h3>
                           <p>{image.paragraph}</p>
                        </Carousel.Caption>
                     </Carousel.Item>
                  ))}
               </Carousel>
               <div className={classes.darkBorder} />
            </div>
         )}
      </div>
   );
};

export default HeroCarousel;
