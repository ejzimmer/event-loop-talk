onmessage = (message) => {
  setTimeout(() => {
    postMessage('rawr!');
  }, 1000)
}