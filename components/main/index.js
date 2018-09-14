import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';


export default class Main extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        {
          this.props.children
        }
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.node,
};
