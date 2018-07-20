onmessage = (message) => {
  setTimeout(() => {
    postMessage('rawr!');
  }, 2000)
}