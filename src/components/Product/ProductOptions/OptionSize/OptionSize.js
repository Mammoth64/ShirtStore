import React from "react";
import propTypes from 'prop-types';
import styles from './OptionSize.module.scss'
import shortid from "shortid";
import clsx from "clsx";

const OptionSize = ({ sizes, currentSize, setCurrentSize }) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {sizes.map(size =>
          <li key={size.name + shortid()}>
            <button type='button' className={clsx(size.name === currentSize && styles.active)} onClick={() => setCurrentSize(size.name)}>{size.name}</button>
          </li>
        )}
      </ul>
    </div>
  );
};


OptionSize.propTypes = {
  sizes: propTypes.array.isRequired,
  currentSize: propTypes.string.isRequired,
  setCurrentSize: propTypes.func.isRequired,
};


export default OptionSize;