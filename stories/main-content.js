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
    name: 'google33',
    content: <a href="google.com">Google {key}</a>,
    active: true,
  },
  {
    id: 2,
    name: 'moogle33',
    content: <a href="google.com">Moogle</a>,
    number: 7,
  },
  {
    id: 3,
    name: 'home33',
    content: <a href="google.com">Home</a>,
    active: false,
  },
  {
    id: 4,
    name: 'favorites33',
    content: <a href="google.com">Favoriets</a>,
  },
  {
    id: 5,
    name: 'about33',
    content: <a href="google.com">About as</a>,
  },
];

const menu = [
  {
    id: 1,
    name: 'google33',
    content: 'Google',
    href: 'google.com',
    number: 0,
    active: true,
  },
  {
    id: 2,
    name: 'moogle33',
    content: 'Moogle',
    href: 'google.com',
    
  },
  {
    id: 3,
    name: 'home33',
    content: 'Home',
    active: false,
    href: 'google.com',
    
  },
];

maincontentStory.add('simple', () => (
  <Menu links={links} />
));

function renderStarRating(event) {
  console.log(document.getElementsByName('google33')[0].innerText);
}

maincontentStory.add('simple2', () => {
  const cards = beers.map(beer => <Card
    id={beer.id}
    imgUrl={beer.image_url}
    name={beer.name}
    tagline={beer.tagline}
    description={beer.description}
    iconFavorites="http://icons.iconarchive.com/icons/iconsmind/outline/32/URL-Window-icon.png"
    iconCart="http://icons.iconarchive.com/icons/iconsmind/outline/32/URL-Window-icon.png"
    iconDetails="http://icons.iconarchive.com/icons/iconsmind/outline/32/URL-Window-icon.png"
    onClickFavorites={renderStarRating}
    onClickDetails={renderStarRating}
    onClickCart={renderStarRating}
  ></Card>);
  const menulinks = menu;
  return (
    <div className={styles.main}>
      <Header
        imgUrl="https://seeklogo.com/images/D/duff-beer-logo-3AA4218F1D-seeklogo.com.png"
        class=""
      ></Header> <Menu links={menulinks} />
      <Navigation links={links} />
      <div className={styles.body}>
        <div className={styles.content}>
          <Main>{cards}</Main>
        </div>
        <div className={styles.menu}>
          <Menu links={menu} />
          <Footer>
      <ImageText
        imgUrl="http://icons.iconarchive.com/icons/iconsmind/outline/32/URL-Window-icon.png"
        classImg="img"
        classTxt="text"
        text="Twitter"
        href="http://iusinfo.hr"
      ></ImageText>
      <ImageText
        imgUrl="http://icons.iconarchive.com/icons/iconsmind/outline/32/URL-Window-icon.png"
        classImg="img"
        classTxt="text"
        text="Facebook"
        href="http://iusinfo.hr"
      ></ImageText>
      <ImageText
        imgUrl="http://icons.iconarchive.com/icons/iconsmind/outline/32/URL-Window-icon.png"
        classImg="img"
        classTxt="text"
        text="GitHub"
      ></ImageText>
      <ImageText
        imgUrl="http://icons.iconarchive.com/icons/iconsmind/outline/32/URL-Window-icon.png"
        classImg="img"
        classTxt="text"
        text="Instagram"
      ></ImageText>
   </Footer>
        </div>
      </div>
      
    </div>
  );
});
