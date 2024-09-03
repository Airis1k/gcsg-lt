import HeroCarousel from "./hero-carousel";
import LatestNews from "./latest-news";
import AccordionFAQ from "./accordion-faq";
import MarqueeCarousel from "./marquee-carousel";

const Home = () => {
   return (
      <>
         <HeroCarousel />
         <LatestNews />
         <MarqueeCarousel />
         <AccordionFAQ />
      </>
   );
};

export default Home;
