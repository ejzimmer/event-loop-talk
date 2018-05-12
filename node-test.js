const fs = require('fs');

setTimeout(() => {
  console.log('timeout');
  process.nextTick(() => {
    console.log('tick')
    process.nextTick(() => {
      console.log('tock');
      process.nextTick(() => {
        console.log('fick');
        process.nextTick(() => {
          console.log('fock');
        })
      })
    })
  });
})
setTimeout(() => {
  console.log('timeout2');
  process.nextTick(() => console.log('tick2'));
})
setTimeout(() => {
  console.log('timeout3');
  process.nextTick(() => console.log('tick3'));
})
setImmediate(() => {
  console.log('immediate4');
  process.nextTick(() => console.log('tick4'));
})
setTimeout(() => {
  console.log('timeout5');
  process.nextTick(() => console.log('tick5'));
})
setTimeout(() => {
  console.log('immediate6');
  process.nextTick(() => console.log('tick6'));
})
setTimeout(() => {
  console.log('timeout7');
  process.nextTick(() => console.log('tick7'));
})
setTimeout(() => {
  console.log('immediate8');
  process.nextTick(() => console.log('tick8'));
})
setTimeout(() => {
  console.log('timeout9');
  process.nextTick(() => console.log('tick9'));
})
