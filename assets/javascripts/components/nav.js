export default class Nav {
  constructor() {
    document.querySelector('.hamburger').addEventListener('click', this.toggleMobileNav.bind(this));
  }

  toggleMobileNav(node) {
    node.currentTarget.classList.toggle('is-active');
  }
}