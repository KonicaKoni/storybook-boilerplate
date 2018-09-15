import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Popup from '../components/popup';
import Card from '../components/card';

import beers from './beers.json';

const popupStory = storiesOf('Popup', module);

popupStory.add('shown window', () => (
    <Popup tooltip='Hello World!'>
      <div>
        <span>
          Hello World
        </span>
      </div>
    </Popup>
));

popupStory.add('hidden window', () => (
    <div></div>
));

popupStory.add('popup with close handler', () => {
  const window = <Popup tooltip='Hello World!' onClose={action('close popup')}>
      <div>
        <span>
          Hello World
        </span>
      </div>
    </Popup>;

  return (
      <div>
        {window}
      </div>
  );
});

popupStory.add('shown window with content', () => {
  const cards = beers.map(beer =>
    <Card
      id={beer.id}
      imgUrl={beer.image_url}
      name={beer.name}
      tagline={beer.tagline}>
    </Card>);

  return (
    <Popup tooltip='Hello World!'>
      <div>
        <span>
          {cards}
        </span>
      </div>
    </Popup>
  );
});
