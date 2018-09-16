import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Button from '../components/button';

const buttonStory = storiesOf('Button', module);

buttonStory.add('Gumb primjer', () => (
  <div>
  <Button text='Press me!' /> <Button text='Press me!' />
  </div>

));

buttonStory.add('Disabled', () => (
  <Button text="Can't Press me!" disabled ></Button>
));

buttonStory.add('With on click handler', () => (
  <Button text="Press me!" onClick={action('clicked')} ></Button>
));

