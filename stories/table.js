import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Table from '../components/table';

const tableStory = storiesOf('Tablica', module);

const header = [
  {
    name: '#',
  },
  {
    name: 'Naziv',
  },
  {
    name: 'Opis',
  },
  {
    name: 'Količina',
  },
];

const data = [
  {
    id: 1,
    name: 'Moogle',
    desc: 'opis',
    imgUrl: 'http://icons.iconarchive.com/icons/iconsmind/outline/32/URL-Window-icon.png',
    number: 1,
  },
  {
    id: 20,
    name: 'Moogle',
    desc: 'opis',
    imgUrl: 'http://icons.iconarchive.com/icons/iconsmind/outline/32/URL-Window-icon.png',
    number: 1,
  },
];

tableStory.add('Sa sadrzajem', () => (
  <Table 
    headers={header} 
    values={data} 
    icon="http://ingkvaliteta.com/wp-content/uploads/2018/09/bin2.png"
    onClick={renderStarRating}> 
  </Table>
));
function renderStarRating(event) {
  console.log(event.target);
}