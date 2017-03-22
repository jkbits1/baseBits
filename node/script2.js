
// docker start d8
// docker exec -it d8 /bin/bash

// npm install http-server -g

console.log("test: ", 123);

const odds = [1,3,5];

const evens = odds.map(x => x + 1);

evens.forEach((val) => {
    console.log("evens: ", val);
});

const total = evens.reduce((prev, val) => {
  return prev + val;
}, 0);

console.log("total:", total);


