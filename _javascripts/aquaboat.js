import BuildHtmlSelect from './helpers/build_html_select';
import FixPosition from './helpers/fix_position';
import Modal from './helpers/modal';

import Form from './components/form';
import GoogleMap from './components/google_map';
import Nav from './components/nav';
import Tile from './components/tile';

import React, { Component } from 'react';
import { render } from 'react-dom';
import Filter from './components/filter';

// Vanilla JS
document.addEventListener('DOMContentLoaded', function() {
  new Nav();
  new Tile();

  if (document.querySelector('body').classList.contains('shipyard')) {
    new Form();
    new Modal('#modal-hivernage');
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
});

// React
class App extends Component {
  render() {
    return (
      <Filter />
    )
  }
}

render(<App />, document.getElementById('react-root'));
