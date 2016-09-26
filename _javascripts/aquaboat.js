import Nav from './components/nav';
import Tile from './components/tile';
import GoogleMap from './components/google_map';
import Form from './components/form';

document.addEventListener('DOMContentLoaded', function() {
  new Nav();
  new Tile();

  if (document.querySelector('body').classList.contains('contact')) {
    new Form();
    new GoogleMap();
  }
});