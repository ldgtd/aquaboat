import buildHtmlSelect from './helpers/build_html_select';

import Form from './components/form';
import GoogleMap from './components/google_map';
import Nav from './components/nav';
import Tile from './components/tile';
import ResultsFilter from './components/results_filter';

document.addEventListener('DOMContentLoaded', function() {
  new Nav();
  new Tile();

  if (document.querySelector('body').classList.contains('contact')) {
    new Form();
    new GoogleMap();
  }

  if (document.querySelector('body').classList.contains('boat')) {
    new buildHtmlSelect(document.querySelectorAll('#boat-engine .boat-engine__data'), document.querySelector('#boat-engine select'));
    new buildHtmlSelect(document.querySelectorAll('#boat-boat .boat-boat__data'), document.querySelector('#boat-boat select'));
  }

  if (document.querySelector('body').classList.contains('results')) {
    new ResultsFilter();
  }
});