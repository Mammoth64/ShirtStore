import styles from './Product.module.scss';
import propTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from './ProductImage/ProductImage';
import ProductOptions from './ProductOptions/ProductOptions';

const Product = ({ id, name, title, basePrice, colors, sizes, ...props }) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getPrice = useMemo(() => {
  const getSize = sizes.find( ({ name }) => name === currentSize);
  return getSize.additionalPrice + basePrice;
  }, [currentSize, basePrice, sizes]);

  return (
    <article className={styles.product}>
      <ProductImage title={title} name={name} currentColor={currentColor}></ProductImage>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductOptions sizes={sizes} colors={colors} title={title} getPrice={getPrice} currentColor={currentColor} currentSize={currentSize} setCurrentColor={setCurrentColor} setCurrentSize={setCurrentSize}></ProductOptions>
      </div>
    </article>
  )
};

Product.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  basePrice: propTypes.number.isRequired,
  colors: propTypes.array.isRequired,
  sizes: propTypes.array.isRequired
}

export default Product;