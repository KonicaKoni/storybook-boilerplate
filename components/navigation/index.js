import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';


export default class Navigation extends React.Component {
  render() {
    return (
      <div name='navMain' className={styles.navigation}>
        <ul>
          {
            this.props.links.map(link => (<li key={link.id} name={link.name} className={link.active ? styles.active : undefined}>{link.content}</li>))
          }
        </ul>
      </div>
    );
  }
}

Navigation.propTypes = {
  links: PropTypes.array,
};
