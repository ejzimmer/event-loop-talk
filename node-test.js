const fs = require('fs');

// fs.readFile('index.html', () => {
//   setImmediate(() => {
//     console.log('immediate');
//   });
//   process.nextTick(() => {
//     console.log('tick1');
//     Promise.resolve().then(() => {
//       console.log('then1');
//     })
//     Promise.resolve().then(() => {
//       console.log('then2');
//       process.nextTick(() => console.log('tick3'))
//     })
//     Promise.resolve().then(() => {
//       console.log('then3');
//     })
//     process.nextTick(() => console.log('tick2'));
//   });
//   Promise.resolve().then(() => {
//     console.log('then5');
//     process.nextTick(() => {
//       console.log('tick5');
//     })
//   });

// });

fs.readFile('index.html', () => {
  setImmediate(() => {
    console.log('immediate')
  })
  Promise.resolve().then(() => {
    console.log('then1')
    process.nextTick(() => console.log('tick1'));
    process.nextTick(() => {
      console.log('tick2');
      Promise.resolve().then(() => console.log('then3'))
    })
    process.nextTick(() => console.log('tick3'))
    Promise.resolve().then(() => console.log('then2'))
  })
  process.nextTick(() => {
    console.log('tick5')
    Promise.resolve().then(() => console.log('then5'))
  })
})