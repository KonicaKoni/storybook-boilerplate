import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import RoundButton from '../components/roundicon-button';

const roundiconStory = storiesOf('RoundIconButton', module);

roundiconStory.add('simple', () => (
  <RoundButton
     imgUrl="http://icons.iconarchive.com/icons/iconsmind/outline/16/URL-Window-icon.png"
     text="Klik"
  ></RoundButton>
));
