// global object

// console.log(global);

global.setTimeout(() => {
    console.log("after 3 seconds")
}, 3000);

setTimeout(() => {
    console.log("after 3 seconds");
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log("inside set intervel")
}, 1000);

console.log(__dirname);
console.log(__filename);


{/* <ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
  }
} */}