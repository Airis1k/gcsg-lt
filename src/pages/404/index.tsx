import { Link } from "react-router-dom";
import classes from "./index.module.css";
import Image404 from "../../assets/404-error-page.png";

const Page404 = () => {
   return (
      <div className={classes.mainWrap}>
         <main className={classes.content}>
            <img src={Image404} alt="car in front of mountains" className={classes.backgroundImg} />
            <div className={classes.textWrap}>
               <p className={classes.responseText}>404</p>
               <h1 className={classes.heading}>Page not found</h1>
               <p className={classes.description}>
                  Sorry, we could not find the page you are looking for.
               </p>
               <div className={classes.linkWrap}>
                  <Link to="/" className={classes.navigationText}>
                     ← Back to home
                  </Link>
               </div>
            </div>
         </main>
      </div>
   );
};

export default Page404;
