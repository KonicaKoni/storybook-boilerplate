import React from 'react';
/* eslint-disable */
import { storiesOf } from '../node_modules/@storybook/react';
import { action } from '../node_modules/@storybook/addon-actions';
/* eslint-enable */
import Button from '../components/button';

const buttonStory = storiesOf('Button', module);

buttonStory.add('with text', () => (
  <div>
  <Button text='Press me!' /> <Button text='Press me!' />
  </div>

));

buttonStory.add('disabled', () => (
  <Button text="Can't Press me!" disabled ></Button>
));

buttonStory.add('with on click handler', () => (
  <Button text="Press me!" onClick={this.handleClick} ></Button>
));

