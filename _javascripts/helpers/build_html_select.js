export default class buildHtmlSelect {
  constructor(data, target) {
    let boatEngine = data;
    this.buildArray(boatEngine, target);
  }

  buildArray(node, target) {
    let array = [];

    for (var i=0;i<node.length;i++) {
      array.push(node[i].dataset.contains);
    }

    this.buildUniqArray(array, target);
  }

  buildUniqArray(array, target) {
    let i, output=[], object={};

    for (i=0;i<array.length;i++) {
      object[array[i]]=0;
    }

    for (i in object) {
      output.push(i);
    }

    this.buildHtmlOutput(output, target);
  }

  buildHtmlOutput(output, target) {
    for (var i=0;i<output.length;i++) {
      let liElement = document.createElement('option'),
          liContent  = document.createTextNode(output[i]);

      liElement.appendChild(liContent);
      target.appendChild(liElement);
    }
  }
}