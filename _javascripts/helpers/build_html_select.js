export default class buildHtmlSelect {
  constructor() {
    let boatEngine = document.querySelectorAll('#boat-engine .boat-engine__data');
    this.buildArray(boatEngine);
  }

  buildArray(node) {
    let array = [];

    for (var i=0;i<node.length;i++) {
      array.push(node[i].dataset.contains);
    }

    this.buildUniqArray(array);
  }

  buildUniqArray(array) {
    let i, ouput=[], object={};

    for (i=0;i<array.length;i++) {
      object[array[i]]=0;
    }

    for (i in object) {
      ouput.push(i);
    }

    this.buildHtmlOuput(ouput);
  }

  buildHtmlOuput(output) {
    for (var i=0;i<output.length;i++) {
      let liElement = document.createElement('option'),
          liConent  = document.createTextNode(output[i]);

      liElement.appendChild(liConent);
      document.querySelector('#boat-engine select').appendChild(liElement);
    }
  }
}