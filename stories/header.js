import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Header from '../components/header';

const headerStory = storiesOf('Header', module);

headerStory.add('Primjer headera', () => (
  <Header
     imgUrl="http://www.alesandmeads.com/wp-content/uploads/2015/12/url.png"
     class=""
     text="Beer shop"
  ></Header>
));
