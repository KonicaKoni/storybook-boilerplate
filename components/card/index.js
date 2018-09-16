import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import Button from '../button';
export default class Card extends React.Component {
  render() {
    return (
      <div name='divMain' id={this.props.id} className={styles.card} >
        <div className={styles.cardHeader} >
          <div className={styles.iconHeader} >
            <img id={this.props.id} src={this.props.iconFavorites} className={styles.productIcon} onClick={this.props.onClickFavorites} />
          </div>
          <div className={styles.imageHeader}>
            <img id={this.props.id} src={this.props.imgUrl} className={styles.productImg} />
          </div>
          <div className={styles.iconHeader} >
            <img id={this.props.id} src={this.props.iconCart} className={styles.productIcon} onClick={this.props.onClickCart} />
          </div>
          <div className={styles.iconHeader} >
            <img id={this.props.id} src={this.props.iconDetails} className={styles.productIcon} onClick={this.props.onClickDetails} />
          </div>
        </div>
        <div className={styles.divText}>
          <h4 className={styles.title}> {this.props.name}</h4>
          <p className={styles.block_with_text}> {this.props.description}</p>
          <div className={styles.gumb} >
            <Button onClick={this.props.onClickCart} text='Dodaj u košarisu' />
          </div>
        </div>
      </div>
    );
  }
}

Card.PropTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string,
  tagline: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.integer,
  iconFavorites: PropTypes.string,
  iconDetails: PropTypes.string,
  iconCart: PropTypes.string,
  onClickFavorites: PropTypes.func,
  onClickDetails: PropTypes.func,
  onClickCart: PropTypes.func,
};
