export default class Subnav {
  constructor() {
    let nodeParent = document.querySelector('.js-toggle-subnav');
    nodeParent.addEventListener('mouseover', this.toggleSubnav);
    nodeParent.addEventListener('mouseout', this.toggleSubnav);
  }

  toggleSubnav() {
    document.querySelector('.nav__sublist').classList.toggle('hidden');
  }
}