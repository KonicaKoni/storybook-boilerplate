import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Header from '../components/header';

const headerStory = storiesOf('Header', module);

headerStory.add('simple', () => (
  <Header
     imgUrl="https://seeklogo.com/images/D/duff-beer-logo-3AA4218F1D-seeklogo.com.png"
     class=""
     text="Beer shop"
  ></Header>
));
