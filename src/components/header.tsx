import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "../assets/header.module.css";
import { Squash as Hamburger } from "hamburger-react";
import { useClickAway } from "react-use";
import { AnimatePresence, motion } from "framer-motion";
import { ROUTES } from "../routes/constants";

import Logo from "../assets/min-logo3.png";
import PhoneSVG from "../assets/phone.svg";
import MapSVG from "../assets/map.svg";
import EmailSVG from "../assets/email.svg";

const Header = () => {
   const [isOpen, setIsOpen] = React.useState(false);
   const ref = React.useRef(null);

   useClickAway(ref, () => setIsOpen(false));

   return (
      <>
         <header className={classes.desktopHeader}>
            <div>
               <div className={classes.container}>
                  <div className={classes.logoContainer}>
                     <div>
                        <Link to="/">
                           <img src={Logo} alt="logo" className={classes.companyLogo} />
                        </Link>
                     </div>
                     <div className={classes.innerHeaderContainer}>
                        <h1 className={classes.header}>Globos centras Šv Gertrūda</h1>
                     </div>
                  </div>
                  <address className={classes.addressContainer}>
                     <ul className={classes.contactWrap}>
                        <li className={classes.contactItem}>
                           <div className={classes.logoWrap}>
                              <img src={PhoneSVG} alt="phone logo" className={classes.phoneLogo} />
                           </div>
                           <div className={classes.infoWrap}>
                              <span className={classes.text}>Telefonas</span>
                              <a href="tel:+37061111111" className={classes.link}>
                                 +37061111111
                              </a>
                           </div>
                        </li>
                        <li className={classes.contactItem}>
                           <div className={classes.logoWrap}>
                              <img src={MapSVG} alt="map logo" className={classes.mapLogo} />
                           </div>
                           <div className={classes.infoWrap}>
                              <span className={classes.text}>Adresas</span>
                              <a
                                 href="https://www.google.com/maps/search/?api=1&query=Garliava"
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className={classes.link}
                              >
                                 Kaunas, Garliava
                              </a>
                           </div>
                        </li>
                        <li className={classes.contactItem}>
                           <div className={classes.logoWrap}>
                              <img src={EmailSVG} alt="email logo" className={classes.emailLogo} />
                           </div>
                           <div className={classes.infoWrap}>
                              <span className={classes.text}>El. paštas</span>
                              <a href="mailto:narimantas@gcsg.lt" className={classes.link}>
                                 narimantas@gcsg.lt
                              </a>
                           </div>
                        </li>
                     </ul>
                  </address>
               </div>
            </div>
            <nav className={classes.nav}>
               <div className={classes.navContent}>
                  {ROUTES && ROUTES.length > 0 && (
                     <ul className={classes.navWrap}>
                        {ROUTES.map((route) => (
                           <li key={route.id}>
                              <NavLink to={route.link} className={classes.linkItem}>
                                 {route.name}
                              </NavLink>
                           </li>
                        ))}
                     </ul>
                  )}
               </div>
            </nav>
         </header>
         <header ref={ref} className={classes.mobileHeader}>
            <div className={classes.mobileContentWrap}>
               <div>
                  <Link to="/">
                     <img src={Logo} alt="logo" className={classes.companyLogo} />
                  </Link>
               </div>
               <div className={classes.hamburgerWrap}>
                  <Hamburger toggled={isOpen} size={26} toggle={setIsOpen} />
               </div>
            </div>
            <AnimatePresence>
               {isOpen && ROUTES && ROUTES.length > 0 && (
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.2 }}
                     className={classes.hamburgerMenu}
                  >
                     <ul className={classes.linksWrapper}>
                        {ROUTES.map((route, index) => (
                           <motion.li
                              key={route.id}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{
                                 type: "spring",
                                 stiffness: 260,
                                 damping: 20,
                                 delay: 0.1 + index / 10,
                              }}
                           >
                              <Link to={route.link} className={classes.smLinkItem}>
                                 {route.name}
                              </Link>
                           </motion.li>
                        ))}
                     </ul>
                  </motion.div>
               )}
            </AnimatePresence>
         </header>
      </>
   );
};

export default Header;
