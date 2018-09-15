import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Footer from '../components/footer';
import ImageText from '../components/image-text';

const footerStory = storiesOf('Footer', module);

footerStory.add('simple', () => (
  <div>
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
        classTxt=""
        text="Facebook"
      ></ImageText>
    </div>
));

footerStory.add('simple2', () => {
  return (
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
  )
})

footerStory.add('simple with imagetext', () => (
  <div>
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
        classTxt=""
        text="Facebook"
      ></ImageText>
    </div>
));
