const fs = require('fs');

fs.readFile('index.html', () => {
  process.nextTick(() => {
    console.log('tick');
    Promise.resolve().then(() => {
      console.log('promise');
      process.nextTick(() => {
        console.log('promise tick');
        Promise.resolve().then(() => {
          console.log('promise 2');
          process.nextTick(() => {
            console.log('promise 2 tick');
          })
        })
      });
    })
    setImmediate(() => {
      console.log('immediate');
      setImmediate(() => console.log('immediate 2'));
      process.nextTick(() => console.log('immediate 2 tick'));
    })
  })
});

