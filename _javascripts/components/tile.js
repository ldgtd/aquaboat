export default class Tile {
  constructor() {
    let triggers = document.querySelectorAll('.tile');

    for (var i=0;i<triggers.length;i++) {
      triggers[i].addEventListener('mouseover', this.toggleClassTile.bind(this));
      triggers[i].addEventListener('mouseout', this.toggleClassTile.bind(this));
    }
  }

  toggleClassTile(node) {
    if (node.currentTarget.classList.contains('tile--onhover')) {
      node.currentTarget.classList.remove('tile--onhover');
    } else {
      node.currentTarget.classList.add('tile--onhover');
    }
  }
}