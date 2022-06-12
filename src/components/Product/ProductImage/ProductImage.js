import styles from './ProductImage.module.scss'
import React from "react";
import propTypes from 'prop-types';

const ProductImage = ({ title, name, currentColor }) => {
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        alt={title}
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
    </div>
  );
};


ProductImage.propTypes = {
  title: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  currentColor: propTypes.string.isRequired,
};


export default ProductImage;

