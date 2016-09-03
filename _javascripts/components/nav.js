export default class Nav {
  constructor() {
    // Toggle desktop active item
    // document.querySelectorAll('.nav-item__primary').addEventListener('click', this.toggleActiveItem.bind(this));

    // Toggle desktop subnav
    let nodeParent = document.querySelector('.js-toggle-subnav');
    nodeParent.addEventListener('mouseover', this.toggleSubnav);
    nodeParent.addEventListener('mouseout', this.toggleSubnav);

    // Toggle mobile nav
    document.querySelector('.hamburger').addEventListener('click', this.toggleMobileNav.bind(this));
  }

  toggleActiveItem(nodes) {
    for (let i=0;i<nodes.length;i++) {
      console.log(nodes[i]);
    }
    // node.currentTarget.classList.toggle('active');
  }

  toggleSubnav() {
    document.querySelector('.nav__sublist').classList.toggle('hidden');
  }

  toggleMobileNav(node) {
    node.currentTarget.classList.toggle('is-active');
  }
}