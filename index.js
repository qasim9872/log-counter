const logUpdate = require('log-update');
const equals = require('array-equal');

// Write output but don't hide the cursor
const log = logUpdate.create(process.stdout, {
  showCursor: true,
});

let count = 0;
let lastInput;

function info(...args) {
  if (lastInput && !equals(lastInput, args)) {
    count = 0;
    log.done();
  }
  count++;
  lastInput = args;
  log(`[${count}]`, ...args);
}

module.exports = { info };
