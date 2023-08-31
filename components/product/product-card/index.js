import React from "react";
import Button from "../../common/button";
import styles from "./product-card.module.scss";
import Link from "next/link";
import Image from "next/image";

/**
 * A product card component for displaying product details.
 *
 * @param {string} title - The title of the product.
 * @param {string} productImg - The URL of the product image.
 * @param {string} description - The HTML description of the product.
 * @param {number} price - The price of the product.
 * @returns {JSX.Element} A product card component displaying product information.
 */

const ProductCard = ({ title, productImg, description, price }) => {

  return (
    <article className={styles["product-card"]}>
      <Link
        href={`/products/${title}`}
        className={styles["product-card--link"]}
        role="link"
        tabIndex={0}
        aria-label={`Product ${title}`}
      >
        <header className={styles["product-card--header"]}>
          <h4>{title?.slice(0, 72)}</h4>
        </header>
        <Image
          className={styles["product-card--img"]}
          src={`http://localhost:3000/${productImg}`}
          alt={title}
          width={200}
          height={200}
        />
        <div
          className={styles["product-card--description"]}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Link>
      <footer className={styles["product-card--footer"]}>
        <p className={styles["product-card--footer--price"]} aria-label={`MRP Rs.${price}`}>
          MRP Rs.{price}
        </p>
        <Button
          onClick={() => console.log("Buy Now clicked")}
          className={styles["product-card--footer--buy-now"]}
          aria-label={`Buy Now @ Rs.${price}`}
          role="button"
        >
          Buy Now<span> @ Rs.{price}</span>
        </Button>
      </footer>
    </article>
  );
};

export default ProductCard;
