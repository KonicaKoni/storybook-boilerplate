import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Popup from '../components/popup';
import Card from '../components/card';

import beers from './beers.json';

const popupStory = storiesOf('Popup', module);

popupStory.add('Prikazi prozor', () => (
    <Popup tooltip='Hello World!'>
      <div>
        <span>
          Hello World
        </span>
      </div>
    </Popup>
));

popupStory.add('Prozor sakriven', () => (
    <div></div>
));

popupStory.add('Prozor za funkcijom zatvaranja', () => {
	const window = <Popup tooltip='Hello World!' onClose={action("close popup")}>
		<div>
			<span>
				Hello World
			</span>
		</div>
	</Popup>


	return(
		<div>
			{window}
		</div>
	)
});

popupStory.add('Prozor sa sadrzajem', () => {
  return (
    <Popup tooltip='Hello World!'>
      <div>
        <span>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </span>
      </div>
    </Popup>
  );
});
