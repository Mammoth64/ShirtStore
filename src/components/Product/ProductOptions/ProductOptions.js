import React from "react";
import styles from './ProductOptions.module.scss';
import propTypes from "prop-types";
import Button from "../../Button/Button";
import OptionColor from "./OptionColor/OptionColor";
import OptionSize from "./OptionSize/OptionSize";

const ProductOptions = ({ sizes, colors, title, getPrice, currentColor, currentSize, setCurrentColor, setCurrentSize }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const summary = [
      'Name: ' + title,
      'Price: ' + getPrice,
      'Size: ' + currentSize,
      'Color: ' + currentColor,
    ]

    console.log('Summary');
    console.log('===============');
    summary.map(i => console.log(i));
  }

  return (
    <form onSubmit={handleSubmit}>
      <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize}></OptionSize>
      <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor}></OptionColor>
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};


ProductOptions.propTypes = {
  colors: propTypes.array.isRequired,
  sizes: propTypes.array.isRequired,
  title: propTypes.string.isRequired,
  getPrice: propTypes.number.isRequired,
  currentColor: propTypes.string.isRequired,
  currentSize: propTypes.string.isRequired,
  setCurrentColor: propTypes.func.isRequired,
  setCurrentSize: propTypes.func.isRequired,
};


export default ProductOptions;