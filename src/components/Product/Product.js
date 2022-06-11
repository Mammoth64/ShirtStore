import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import propTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';

const Product = ({ id, name, title, basePrice, colors, sizes, ...props }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  const getPrice = () => {
  const getSize = sizes.find( ({ name }) => name === currentSize);
  return getSize.additionalPrice + basePrice;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const summary = [
        'Name: ' + title,
        'Price: ' + getPrice(),
        'Size: ' + currentSize,
        'Color: ' + currentColor,
    ]
    console.log('Summary');
    console.log('===============');
    summary.map(i => console.log(i)); 
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form onSubmit={handleSubmit}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map(size => 
                <li key={size.id + shortid()}>
                  <button type='button' className={clsx(size.name === currentSize && styles.active)} onClick={() => setCurrentSize(size.name)}>{size.name}</button>
                </li>
                )}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map(item =>
                <li key={item.id + shortid()}>
                  <button type="button" className={clsx(prepareColorClassName(item), item === currentColor && styles.active)} onClick={() => setCurrentColor(item)} />   
                </li>
              )}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string,
  title: propTypes.string,
  basePrice: propTypes.number,
  colors: propTypes.array,
  sizes: propTypes.array
}

export default Product;