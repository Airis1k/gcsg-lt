import LocationSVG from "../assets/location.svg";
import PhoneSVG from "../assets/phone2.svg";
import EmailSVG from "../assets/email2.svg";
import classes from "../assets/footer.module.css";

const Footer = () => {
   const now = new Date();
   const datetime = now.getFullYear();

   return (
      <footer className={classes.footerContainer}>
         <div className={classes.footerTop}>
            <div className={classes.footerContent}>
               <div className={classes.descriptionContainer}>
                  <h4 className={classes.descriptionTitle}>Globos Centras Šv. Gertrūda</h4>
                  <p className={classes.descriptionText}>
                     Mūsų misija – Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                     eiusmod tempor incididunt.
                  </p>
               </div>
               <div className={classes.addressContainer}>
                  <h4 className={classes.addressTitle}>Kontaktai</h4>
                  <ul className={classes.addressList}>
                     <li className={classes.addressItem}>
                        <div className={classes.logoWrap}>
                           <img src={LocationSVG} alt="location logo" />
                        </div>
                        <div>
                           <a
                              href="https://www.google.com/maps/search/?api=1&query=Garliava"
                              target="blank"
                              className={classes.link}
                           >
                              Kaunas, Garliava
                           </a>
                        </div>
                     </li>
                     <li className={classes.addressItem}>
                        <div className={classes.logoWrap}>
                           <img src={PhoneSVG} alt="phone logo" />
                        </div>
                        <div>
                           <a href="tel:+37061111111" className={classes.link}>
                              +37061111111
                           </a>
                        </div>
                     </li>
                     <li className={classes.addressItem}>
                        <div className={classes.logoWrap}>
                           <img src={EmailSVG} alt="email logo" />
                        </div>
                        <div>
                           <a href="mailto:narimantas@gcsg.lt" className={classes.link}>
                              narimantas@gcsg.lt
                           </a>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className={classes.footerBottom}>
            <div className={classes.lowerFooterContent}>
               <p className={classes.footerBottomText}>
                  Visos teisės saugomos &copy; {datetime} m. Globos Centras Šv. Gertrūda
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
