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
     Design by Koni
   </Footer>
  )
})


