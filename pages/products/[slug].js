import ProductCard from "@/components/product/product-card";
import React from "react";
import styles from "./product.module.scss";
import { NextSeo } from "next-seo";

/**
 * The product page component.
 *
 * @param {object} productsData - The product data.
 * @returns {JSX.Element} The product page component.
 **/
const ProductPage = ({ productsData }) => {
  // Destructuring data from productsData array
  const { productName, description, price, images } = productsData?.[0];

  return (
    <>
      <NextSeo
        title={`Sabka Bazaar | ${productName}`}
        description={`description for ${productName}`}
      />
      <section className={styles["product-section"]}>
        <ul className={styles["product-section--list"]}>
          <li>
            <ProductCard
              title={productName}
              description={description}
              productImg={images[0]}
              price={price}
            />
          </li>
        </ul>
      </section>
    </>
  );
};

export const getServerSideProps = async (context) => {
  // Fetching products data using an API call
  const resProductsPromise = fetch(
    `http://localhost:3000/api/products?productName=${context?.params?.slug}`
  ).then((res) => res.json());

  // Waiting for both API calls to complete
  const [productsData] = await Promise.all([resProductsPromise]);

  return {
    props: {
      productsData,
    },
  };
};

export default ProductPage;
