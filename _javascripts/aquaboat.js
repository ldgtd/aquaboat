import BuildHtmlSelect from './helpers/build_html_select';
import FixPosition from './helpers/fix_position';

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
    new FixPosition();
    new BuildHtmlSelect(document.querySelectorAll('#boat-engine .boat-engine__data'), document.querySelector('#boat-engine select'));
    new BuildHtmlSelect(document.querySelectorAll('#boat-boat .boat-boat__data'), document.querySelector('#boat-boat select'));
  }
});