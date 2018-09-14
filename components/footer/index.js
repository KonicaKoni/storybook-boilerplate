import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
        {
          this.props.children
        }
      </div>
    );
  }
}

Footer.propTypes = {
  children: PropTypes.node,
};
