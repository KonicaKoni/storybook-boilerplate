import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

export default class RoundIconButton extends React.Component {
  render() {
    return (
      <div className={styles.main}>
          <img src={this.props.imgUrl} className={styles.img} />
          <input onClick={this.props.onClick} className={styles.roundbutton} disabled={this.props.disabled} type='button' value={this.props.text} />
      </div>
    );
  }
}

RoundIconButton.PropTypes = {
  imgUrl: PropTypes.string,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
