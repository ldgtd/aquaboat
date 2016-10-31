export default class FixPosition {
  constructor() {
    var timeout;
    let node = document.querySelector('.boat-sidebar');
    console.log(window.scrollY);

    window.addEventListener('scroll', function() {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(function(){

        if (window.scrollY > 450) {
          console.log('ture');
          node.classList.add('fixed');
        } else {
          console.log('false');
          node.classList.remove('fixed');
        }
      }, 0);
    });
  }
}