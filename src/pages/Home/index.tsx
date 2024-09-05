import HeroCarousel from "./hero-carousel";
import LatestNews from "./latest-news";
import AccordionFAQ from "./accordion-faq";
import MarqueeCarousel from "./marquee-carousel";
import OurServices from "./our-services";

const Home = () => {
   return (
      <>
         <HeroCarousel />
         <OurServices />
         <LatestNews />
         <MarqueeCarousel />
         <AccordionFAQ />
      </>
   );
};

export default Home;
