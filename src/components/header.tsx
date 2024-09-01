import { Link, NavLink } from "react-router-dom";
import classes from "../assets/header.module.css";
import Logo from "../assets/min-logo2.png";
import PhoneSVG from "../assets/phone.svg";
import MapSVG from "../assets/map.svg";
import EmailSVG from "../assets/email.svg";

const Header = () => {
   return (
      <header className={classes.headerContainer}>
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
               <ul className={classes.navWrap}>
                  <li>
                     <NavLink to="/naujienos" className={classes.linkItem}>
                        Naujienos
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/apie-mus" className={classes.linkItem}>
                        Apie mus
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/teisine-informacija" className={classes.linkItem}>
                        Teisinė informacija
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/paslaugos" className={classes.linkItem}>
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
