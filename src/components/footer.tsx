import React from "react";
import LocationSVG from "../assets/location.svg";
import PhoneSVG from "../assets/phone2.svg";
import EmailSVG from "../assets/email2.svg";
import styles from "../assets/footer.module.css";

const Footer = () => {
   const now = new Date();
   const datetime = now.getFullYear();

   return (
      <footer className={styles.footerContainer}>
         <div className={styles.footerTop}>
            <div className={styles.footerContent}>
               <div className={styles.descriptionContainer}>
                  <h4 className={styles.descriptionTitle}>Globos Centras Šv. Gertrūda</h4>
                  <p className={styles.descriptionText}>
                     Mūsų misija – Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                     eiusmod tempor incididunt.
                  </p>
               </div>
               <div className={styles.addressContainer}>
                  <h4 className={styles.addressTitle}>Kontaktai</h4>
                  <ul className={styles.addressList}>
                     <li className={styles.addressItem}>
                        <div className={styles.logoWrap}>
                           <img src={LocationSVG} alt="location logo" />
                        </div>
                        <div>
                           <a
                              href="https://www.google.com/maps/search/?api=1&query=Garliava"
                              target="blank"
                              className={styles.link}
                           >
                              Kaunas, Garliava
                           </a>
                        </div>
                     </li>
                     <li className={styles.addressItem}>
                        <div className={styles.logoWrap}>
                           <img src={PhoneSVG} alt="phone logo" />
                        </div>
                        <div>
                           <a href="tel:+37061111111" className={styles.link}>
                              +37061111111
                           </a>
                        </div>
                     </li>
                     <li className={styles.addressItem}>
                        <div className={styles.logoWrap}>
                           <img src={EmailSVG} alt="email logo" />
                        </div>
                        <div>
                           <a href="mailto:narimantas@gcsg.lt" className={styles.link}>
                              narimantas@gcsg.lt
                           </a>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className={styles.footerBottom}>
            <div className={styles.lowerFooterContent}>
               <p className={styles.footerBottomText}>
                  Visos teisės saugomos &copy; {datetime} m. Globos Centras Šv. Gertrūda
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
