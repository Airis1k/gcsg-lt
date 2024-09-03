import React from "react";
import { QUESTIONS } from "./constants";
import classes from "./index.module.css";

const AccordionFAQ = () => {
   const [openIndices, setOpenIndices] = React.useState<number[]>([]);

   const toggleAccordion = (id: number) => {
      if (openIndices.includes(id)) {
         setOpenIndices(openIndices.filter((index) => index !== id));
      } else {
         setOpenIndices([...openIndices, id]);
      }
   };

   return (
      <div className={classes.container}>
         <h2 className={classes.title}>Frequently asked questions</h2>
         {QUESTIONS && QUESTIONS.length > 0 && (
            <div className={classes.accordionContainer}>
               {QUESTIONS.map((element) => (
                  <div className={classes.accordionItem} key={element.id}>
                     <button
                        onClick={() => toggleAccordion(element.id)}
                        className={classes.accordionButton}
                     >
                        <span className={classes.questionTitle}>{element.question}</span>
                        <span
                           className={`${classes.icon} ${
                              openIndices.includes(element.id) ? classes.rotate : ""
                           }`}
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              className={classes.iconSvg}
                              viewBox="0 0 16 16"
                           >
                              <path d="M8 12a.75.75 0 0 1-.53-1.28l3.22-3.22H4a.75.75 0 0 1 0-1.5h6.69L7.47 3.28A.75.75 0 1 1 8.53 2.22l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5A.75.75 0 0 1 8 12z" />
                           </svg>
                        </span>
                     </button>
                     <div
                        className={`${classes.accordionContent} ${
                           openIndices.includes(element.id) ? classes.open : ""
                        }`}
                     >
                        <div className={classes.accordionText}>{element.answer}</div>
                     </div>
                  </div>
               ))}
            </div>
         )}
      </div>
   );
};

export default AccordionFAQ;
