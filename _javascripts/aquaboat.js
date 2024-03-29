import BuildHtmlSelect from './helpers/build_html_select';
import FixPosition from './helpers/fix_position';
import Modal from './helpers/modal';

import Form from './components/form';
import GoogleMap from './components/google_map';
import Nav from './components/nav';
import Tile from './components/tile';
import ResultsFilter from './components/results_filter';

document.addEventListener('DOMContentLoaded', function() {
  new Nav();
  new Tile();

  if (document.querySelector('body').classList.contains('home')) {
    new Modal('#modal-hivernage');
    new Form();
  }

  if (document.querySelector('body').classList.contains('shipyard')) {
    new Modal('#modal-hivernage');
    new Form();
  }

  if (document.querySelector('body').classList.contains('contact')) {
    new Form();
    new GoogleMap();
  }

  if (document.querySelector('body').classList.contains('boat')) {
    new FixPosition();
    new BuildHtmlSelect(document.querySelectorAll('#boat-engine .boat-engine__data'), document.querySelector('#boat-engine select'));
    new BuildHtmlSelect(document.querySelectorAll('#boat-boat .boat-boat__data'), document.querySelector('#boat-boat select'));
  }

  if (document.querySelector('body').classList.contains('results')) {
    new ResultsFilter();
  }
});