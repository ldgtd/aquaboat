import uniqItemArray from './helpers/uniq_item_array';

import Form from './components/form';
import GoogleMap from './components/google_map';
import Nav from './components/nav';
import Tile from './components/tile';
import Filter from './components/filter';

document.addEventListener('DOMContentLoaded', function() {
  new Nav();
  new Tile();

  if (document.querySelector('body').classList.contains('contact')) {
    new Form();
    new GoogleMap();
  }

  if (document.querySelector('body').classList.contains('boat')) {
    new Filter();
    new uniqItemArray();
  }
});