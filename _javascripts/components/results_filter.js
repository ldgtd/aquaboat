// import { pathParamsToJson } from 'helpers/path_params_to_json';

export default class ResultsFilter {
  constructor() {
    this.pathParamsToJson(window.location.search);
  }

  pathParamsToJson(params) {
    let hash,
        myJson = {},
        hashes = params.slice(params.indexOf('?') + 1).split('&');


    for (var i=0;i<hashes.length;i++) {
      let hashesFormated = hashes[i].replace(/\+/i, ' ');
      hash = hashesFormated.split('=');
      myJson[hash[0]] = hash[1];
    }

    this.toggleTile(myJson);
  }

  toggleTile(filterParams) {
    var tile = document.querySelectorAll('#tile');

    for (var i=0;i<tile.length;i++) {
      // console.log('filter plus petit ' + filterParams.money);
      // console.log('boat item ' + tile[i].dataset.money);

      if (filterParams.engine != tile[i].dataset.engine) {
        tile[i].classList.add('hidden');
      }

      if (filterParams.boat != tile[i].dataset.boat) {
        tile[i].classList.add('hidden');
      }

      if (parseInt(filterParams.width) <= tile[i].dataset.width) {
        tile[i].classList.add('hidden');
      }

      if (parseInt(filterParams.height) <= tile[i].dataset.height) {
        tile[i].classList.add('hidden');
      }

      if (parseInt(filterParams.people) <= tile[i].dataset.people) {
        tile[i].classList.add('hidden');
      }

      if (parseInt(filterParams.power) <= tile[i].dataset.power) {
        tile[i].classList.add('hidden');
      }

      if (parseInt(filterParams.money) <= tile[i].dataset.money) {
        tile[i].classList.add('hidden');
      }
    }

    this.countResult();
  }

  countResult() {
    let count = document.querySelectorAll('#tile:not(.hidden)').length;
    document.querySelector('#count-results').textContent = count;
  }
}