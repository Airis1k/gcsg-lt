import { SERVICES } from "./constants";
import classes from "./index.module.css";

const OurServices = () => {
   return (
      <div>
         <div className={classes.container}>
            <div className={classes.centerText}>
               <h2 className={classes.sectionHeader}>Mūsų paslaugos</h2>
               <p className={classes.sectionParagraph}>Atsižvelkite į mūsų teikiamas paslaugas</p>
            </div>
            <div className={classes.serviceWrap}>
               {SERVICES &&
                  SERVICES.length > 0 &&
                  SERVICES.map((service) => (
                     <div className={classes.serviceItem} key={service.id}>
                        <div className={classes.icon}>
                           <img
                              src={service.imageSrc}
                              alt={service.imageAlt}
                              width={40}
                              height={40}
                           />
                        </div>
                        <div>
                           <h3 className={classes.title}>{service.title}</h3>
                        </div>
                        <div className={classes.description}>
                           <p>{service.description}</p>
                        </div>
                     </div>
                  ))}
            </div>
         </div>
      </div>
   );
};

export default OurServices;
