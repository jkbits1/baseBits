"use strict";

(argv => {
//   var fs = require('fs');

  class Args {
    constructor (argv) {
      this.args = Array.prototype.slice.call(argv, 2);
    }

    getArgs () {
      return this.args;
    }
  }

  let args = new Args(argv);

  const arg1 = (args.getArgs()[0]);

  console.log("arg1: ", arg1);

})(process.argv);
