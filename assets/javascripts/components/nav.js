export default class Nav {
  constructor() {
    document.querySelector('.hamburger').addEventListener('click', this.toggleMobileNav.bind(this));
  }

  toggleMobileNav(node) {
    console.log(node.currentTarget)
    node.currentTarget.classList.toggle('is-active');
  }
}