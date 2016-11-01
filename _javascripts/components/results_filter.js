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

    // console.log(filterParams);
    // console.log(tile);

    for (var i=0;i<tile.length;i++) {
      console.log(tile[i].dataset.boat);
      console.log(filterParams.boat);

      if (filterParams.brand != tile[i].dataset.brand) {
        tile[i].classList.add('hidden');
      }
      else if (filterParams.engine != tile[i].dataset.engine) {
        tile[i].classList.add('hidden');
      }
      else if (filterParams.boat != tile[i].dataset.boat) {
        tile[i].classList.add('hidden');
      }
      // else if (filterParams.width <= tile[i].dataset.width) {
      //   tile[i].classList.add('hidden');
      // }
      // else if (filterParams.height <= tile[i].dataset.height) {
      //   tile[i].classList.add('hidden');
      // }
      // else if (filterParams.people <= tile[i].dataset.people) {
      //   tile[i].classList.add('hidden');
      // }
      // else if (filterParams.power <= tile[i].dataset.power) {
      //   tile[i].classList.add('hidden');
      // }
      // else if (filterParams.money <= tile[i].dataset.money) {
      //   tile[i].classList.add('hidden');
      // }
    }
  }
}