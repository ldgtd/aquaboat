export default class Nav {
  constructor() {
    // Toggle desktop subnav
    let nodeParent = document.querySelector('.js-toggle-subnav');
    nodeParent.addEventListener('mouseover', this.toggleSubnav);
    nodeParent.addEventListener('mouseout', this.toggleSubnav);

    // Toggle mobile nav
    document.querySelector('.hamburger').addEventListener('click', this.toggleMobileNav.bind(this));
  }

  toggleSubnav() {
    document.querySelector('.nav__sublist').classList.toggle('hidden');
  }

  toggleMobileNav(node) {
    node.currentTarget.classList.toggle('is-active');
    document.querySelector('.nav-mobile').classList.toggle('nav-mobile--active');
    document.querySelector('body').classList.toggle('overflow-hidden');
  }
}
