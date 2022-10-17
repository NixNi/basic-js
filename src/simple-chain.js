const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  data: [],
  getLength() {
    return this.data.length
  },
  addLink(value) {
    this.data.push(value)
    return this
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position <= 0 || position >= this.data.length) {
      this.data = []
      throw new Error('You can\'t remove incorrect link!') 
    }
    this.data = [...this.data.slice(0, position-1), ...this.data.slice(position, this.data.length)]
    return this
  },
  reverseChain() {
    this.data = this.data.reverse()
    return this
  },
  finishChain() {
    let final = `( ${this.data.map(it => String(it)).join(' )~~( ')} )`
    this.data = []
    return final
  }
};

//chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4)
module.exports = {
  chainMaker
};
