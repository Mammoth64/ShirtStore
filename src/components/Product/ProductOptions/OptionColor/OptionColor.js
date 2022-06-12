import React from "react";
import propTypes from 'prop-types';
import shortid from "shortid";
import clsx from "clsx";
import styles from './OptionColor.module.scss'

const OptionColor = ({ colors, currentColor, setCurrentColor }) => {

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {colors.map(item =>
          <li key={item.name + shortid()}>
            <button type="button" className={clsx(prepareColorClassName(item), item === currentColor && styles.active)} onClick={() => setCurrentColor(item)} />
          </li>
        )}
      </ul>
    </div>
  );
};


OptionColor.propTypes = {
  setCurrentColor: propTypes.func.isRequired,
  currentColor: propTypes.string.isRequired,
  colors: propTypes.array.isRequired,
};


export default OptionColor;