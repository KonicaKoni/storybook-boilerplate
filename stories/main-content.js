import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import styles from './index.css';
import ImageText from '../components/image-text';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import Header from '../components/header';
import Main from '../components/main';
import Card from '../components/card';
import Menu from '../components/menu';

const beers = require('./beers');
const key = '1';
const maincontentStory = storiesOf('Main Content', module);

const links = [
  {
    id: 1,
    name: 'google',
    content: <a href="google.com">Google {key}</a>,
    active: true,
  },
  {
    id: 2,
    name: 'algebra',
    content: <a href="google.com">Algebra</a>,
    number: 7,
  },
  {
    id: 3,
    name: 'home',
    content: <a href="google.com">Home</a>,
    active: false,
  },
  {
    id: 4,
    name: 'favorites',
    content: <a href="google.com">Favoriti</a>,
  },
  {
    id: 5,
    name: 'about',
    content: <a href="google.com">O nama</a>,
  },
];

const menu = [
  {
    id: 1,
    name: 'google',
    content: 'Google',
    href: 'google.com',
    number: 0,
    active: true,
  },
  {
    id: 2,
    name: 'algebra',
    content: 'Algebra',
    href: 'google.com',
    
  },
  {
    id: 3,
    name: 'home',
    content: 'Home',
    active: false,
    href: 'google.com',
    
  },
];

maincontentStory.add('Primjer 1', () => (
  <Menu links={links} />
));

function renderStarRating(event) {
  console.log(document.getElementsByName('google')[0].innerText);
}

maincontentStory.add('Primjer 2', () => {
  const cards = beers.map(beer => <Card
    id={beer.id}
    imgUrl={beer.image_url}
    name={beer.name}
    tagline={beer.tagline}
    description={beer.description}
    iconFavorites="http://ingkvaliteta.com/wp-content/uploads/2018/09/star-empty.png"
    iconCart="http://ingkvaliteta.com/wp-content/uploads/2018/09/cart.png"
    iconDetails="http://ingkvaliteta.com/wp-content/uploads/2018/09/info-1.png"
    onClickFavorites={renderStarRating}
    onClickDetails={renderStarRating}
    onClickCart={renderStarRating}
  ></Card>);
  const menulinks = menu;
  return (
    <div className={styles.main}>
      <Header
        imgUrl="http://www.alesandmeads.com/wp-content/uploads/2015/12/url.png"
        class=""
      ></Header> 
      <Navigation links={links} />
      <div className={styles.body}>
        <div className={styles.content}>
          <Main>{cards}</Main>
        </div>
        <div className={styles.menu}>
          <Menu links={menu} />
         
        </div>
      </div>
      <Footer>
      <ImageText
                imgUrl="http://ingkvaliteta.com/wp-content/uploads/2018/09/facebook2.png"
                classImg="img"
                classTxt="text"
                text="Facebook"
                href="https://www.facebook.com/"
              />
              Design by Koni
   </Footer>
    </div>
  );
});
