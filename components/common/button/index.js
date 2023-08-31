import React, { forwardRef } from "react";
import styles from "./button.module.scss";

/**
 * A customizable button component.
 *
 * @param {string} variant - The visual style variant of the button (default: "primary").
 * @param {string} className - Additional CSS classes for the button.
 * @param {ReactNode} children - The content to display within the button.
 * @param {Object} rest - Any additional props that should be applied to the <button> element.
 * @param {Ref} ref - Forwarded ref to attach to the <button> element.
 * @returns {JSX.Element} A button component.
 */
const Button = forwardRef(
  ({ variant = "primary", className, children, ...rest }, ref) => {
    return (
      <button
        className={`${styles.btn} ${styles["btn--" + variant]} ${className}`}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
