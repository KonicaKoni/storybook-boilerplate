import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Footer from '../components/footer';
import ImageText from '../components/image-text';

const footerStory = storiesOf('Footer', module);


footerStory.add('Primjer footera', () => {
  return (
    <Footer>
      <ImageText
        imgUrl="http://ingkvaliteta.com/wp-content/uploads/2018/09/facebook2.png"
        classImg="img"
        classTxt="text"
        text="Facebook"
        href="http://facebook.hr"
      ></ImageText>
      Design by Koni
   </Footer>
  )
})

