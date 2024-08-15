import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "../assets/header.module.css";
// import Logo from "../assets/logo.png";
import PhoneSVG from "../assets/phone.svg";
import MapSVG from "../assets/map.svg";
import EmailSVG from "../assets/email.svg";

const Header = () => {
   return (
      <header>
         <div>
            <div className={styles.container}>
               <div className={styles.logoContainer}>
                  <div>
                     <Link to="/">
                        {/* <img src={Logo} alt="logo" className={styles.companyLogo} /> */}
                     </Link>
                  </div>
                  <div className={styles.innerHeaderContainer}>
                     <h1 className={styles.header}>Globos centras Šv Gertrūda</h1>
                  </div>
               </div>
               <address className={styles.addressContainer}>
                  <ul className={styles.contactWrap}>
                     <li className={styles.contactItem}>
                        <div className={styles.logoWrap}>
                           <img src={PhoneSVG} alt="phone logo" className={styles.phoneLogo} />
                        </div>
                        <div className={styles.infoWrap}>
                           <span className={styles.text}>Telefonas</span>
                           <a href="tel:+37061111111" className={styles.link}>
                              +37061111111
                           </a>
                        </div>
                     </li>
                     <li className={styles.contactItem}>
                        <div className={styles.logoWrap}>
                           <img src={MapSVG} alt="map logo" className={styles.mapLogo} />
                        </div>
                        <div className={styles.infoWrap}>
                           <span className={styles.text}>Adresas</span>
                           <a
                              href="https://www.google.com/maps/search/?api=1&query=Garliava"
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.link}
                           >
                              Kaunas, Garliava
                           </a>
                        </div>
                     </li>
                     <li className={styles.contactItem}>
                        <div className={styles.logoWrap}>
                           <img src={EmailSVG} alt="email logo" className={styles.emailLogo} />
                        </div>
                        <div className={styles.infoWrap}>
                           <span className={styles.text}>El. paštas</span>
                           <a href="mailto:narimantas@gcsg.lt" className={styles.link}>
                              narimantas@gcsg.lt
                           </a>
                        </div>
                     </li>
                  </ul>
               </address>
            </div>
         </div>
         <nav className={styles.nav}>
            <div className={styles.navContent}>
               <ul className={styles.navWrap}>
                  <li>
                     <NavLink to="/naujienos" className={styles.linkItem}>
                        Naujienos
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/apie-mus" className={styles.linkItem}>
                        Apie mus
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/teisine-informacija" className={styles.linkItem}>
                        Teisinė informacija
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/paslaugos" className={styles.linkItem}>
                        Paslaugos
                     </NavLink>
                  </li>
               </ul>
            </div>
         </nav>
      </header>
   );
};

export default Header;
