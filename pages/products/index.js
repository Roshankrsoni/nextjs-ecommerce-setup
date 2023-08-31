import ProductCard from "@/components/product/product-card";
import { GetServerSideProps } from "next";
import styles from "./product.module.scss";
// import SideNav from "@/components/SideNav";

const ProductPage = ({ productsData = [] }) => {
  return (
    <section className={styles["product-section"]}>
      {/* <SideNav data={sideNavData} /> */}
      <ul className={styles["product-section--list"]}>
        {productsData?.map(
          ({ productName, description, price, images }, index) => (
            <li key={index}>
              <ProductCard
                id={index}
                title={productName}
                description={description}
                productImg={images[0]}
                price={price}
              />
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export const getServerSideProps = async (context) => {
  const resProductsPromise = fetch("http://localhost:3000/api/products").then(
    (res) => res.json()
  );

  const [productsData] = await Promise.all([resProductsPromise]);

  return {
    props: {
      productsData: productsData?.products,
    },
  };
};

export default ProductPage;
