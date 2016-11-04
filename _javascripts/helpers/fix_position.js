export default class FixPosition {
  constructor() {
    var timeout;
    let node = document.querySelector('.boat-sidebar');

    if (window.matchMedia('(min-width: 769px)').matches) {
      window.addEventListener('scroll', function() {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(function(){
          if (window.scrollY > 450) {
            node.classList.add('fixed');
          } else {
            node.classList.remove('fixed');
          }
        }, 0);
      });
    }
  }
}