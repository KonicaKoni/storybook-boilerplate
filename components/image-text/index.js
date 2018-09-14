import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

export default class ImageText extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        <a href={this.props.href} class={styles.classHref}>
          <img src={this.props.imgUrl} class={styles.img} />
          <h4 className={styles.text}>{this.props.text}</h4>
        </a>
      </div>
    );
  }
}

ImageText.PropTypes = {
  imgUrl: PropTypes.string,
  classImg: PropTypes.string,
  classTxt: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
};
