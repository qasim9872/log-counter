const logger = require("../index");

let message = `hello there`;

function waitFor(time = 500) {
  return new Promise((resolve, reject) => setTimeout(resolve, time));
}

async function run() {
  for (let i = 0; i < 100; i++) {
    if (i % 5 === 0) {
      message = message + i;
    }
    await waitFor();
    logger.info(message);
  }
}

run().catch(console.error);
