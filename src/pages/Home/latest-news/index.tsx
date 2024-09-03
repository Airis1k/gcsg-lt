import { NEWS } from "./constants";
import classes from "./index.module.css";

const LatestNews = () => {
   return (
      <div className={classes.container}>
         <div className={classes.centerText}>
            <h2 className={classes.sectionHeader}>Naujausi pranešimai</h2>
            <p className={classes.sectionParagraph}>
               Kviečiame pasidomėti mūsų naujausiais pranešimais
            </p>
         </div>
         <div className={classes.cards}>
            {NEWS &&
               NEWS.length > 0 &&
               NEWS.map((singleNew) => (
                  <article key={singleNew.id} className={classes.articleStyle}>
                     <img
                        src={singleNew.src}
                        alt="picture"
                        className={classes.cardBackgroundImage}
                     />
                     <div className={classes.shadow} />
                     <div className={classes.outerInfo}>
                        <time dateTime={singleNew.date} className={classes.smText}>
                           {singleNew.date}
                        </time>
                        <div className={classes.innerInfo}>
                           <svg
                              viewBox="0 0 2 2"
                              width={2}
                              height={2}
                              fill="rgba(209, 213, 219, 1)"
                           >
                              <circle r="1" cx="1" cy="1"></circle>
                           </svg>
                           <div className={classes.wrapUserInfo}>
                              <img
                                 src={singleNew.authorImg}
                                 alt="author"
                                 className={classes.authorPhoto}
                              />
                              <h4 className={classes.smText}>{singleNew.author}</h4>
                           </div>
                        </div>
                     </div>
                     <h3 className={classes.title}>{singleNew.title}</h3>
                  </article>
               ))}
         </div>
      </div>
   );
};

export default LatestNews;
