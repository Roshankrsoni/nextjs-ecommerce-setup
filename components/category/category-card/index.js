import React from "react";
import Button from "../../common/button";
// import styles from "./category-card.module.scss";

const CategoryCard = ({ title, imgSrc, btnText, onClick, description }) => {
  return (
    <article className={classNames}>
      <img
        className={"catergory-card-img"}
        src={imgSrc}
        alt={title}
        width={400}
      />
      <div className={"catergory-card-content"}>
        <header>
          <h4>{title}</h4>
        </header>
        <p>{description}</p>
        <Button onClick={onClick}>Explore {btnText}</Button>
      </div>
    </article>
  );
};

export default CategoryCard;
