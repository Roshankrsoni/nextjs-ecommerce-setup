import React from "react";
import styles from "./footer.module.scss";

/**
 * The footer component.
 *
 * @returns {JSX.Element} A footer component displaying copyright information.
 */
const AppFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles["footer"]}>
      <p>{`Copyright © 2011-${currentYear} Sabka Baazar Grocery Supplies Pvt. Ltd.`}</p>
    </footer>
  );
};

export default AppFooter;
