import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Navigation from '../components/navigation';

const navigationmenuStory = storiesOf('Navigation Menu', module);

const links = [
  {
    id: 1,
    content: <a href="algebra.hr">Algebra</a>,
    active: true,
  },
  {
    id: 2,
    content: <a href="dnevnik.hr">Dnevnik</a>,
  },
];

navigationmenuStory.add('simple', () => {
  return <Navigation links={links} />;
});
