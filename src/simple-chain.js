const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  links: new Array(),
  getLength() {
    return this.links.length;
  },
  addLink(value) {
    this.links.push(`${value}`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || !(1 <= position && position <= this.links.length)) {
      this.links = new Array();
      throw new Error("You can't remove incorrect link!");
    }
    this.links.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.links.reverse();
    return this;
  },
  finishChain() {
    let chain = `( ${this.links[0]} )`;
    for (let i = 1; i < this.links.length; i++) {
      chain += `~~( ${this.links[i]} )`;
    }
    this.links = new Array();
    return chain;
  }
};

module.exports = {
  chainMaker
};
