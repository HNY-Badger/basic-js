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
    this.links.push(value.toString());
  },
  removeLink(position) {
    if (position < 0 || position > this.links.length - 1 || typeof position !== 'number') {
      throw new Error("You can't remove incorrect link!");
    }
    this.links.splice(position);
  },
  reverseChain() {
    this.links.reverse();
  },
  finishChain() {
    let chain = `( ${this.links[0]} )`;
    for (let i = 1; i < this.links.length; i++) {
      chain += `~~( ${this.links[i]} )`;
    }
    return chain;
  }
};

module.exports = {
  chainMaker
};
