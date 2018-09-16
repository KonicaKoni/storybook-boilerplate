import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import RoundButton from '../components/roundicon-button';

const roundiconStory = storiesOf('RoundIconButton', module);

roundiconStory.add('Primjer', () => (
  <RoundButton
     imgUrl="http://ingkvaliteta.com/wp-content/uploads/2018/09/facebook2.png"
     text="Klik"
  ></RoundButton>
));
