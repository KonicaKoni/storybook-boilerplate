import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className={styles.main} >
        <div className={styles.headerText} >
          {this.props.text}
        </div>
        <div className={styles.headerLogo} >
          <img src={this.props.imgUrl} className={styles.logo} />
        </div>
      </div>

    );
  }
}

Header.PropTypes = {
  imgUrl: PropTypes.string,
  imgClass: PropTypes.string,
  text: PropTypes.string,
};
