import { MouseEventHandler } from "react";

export interface ArrowButtonProps {
   onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface Logo {
   src: string;
   alt: string;
   height: string;
}
