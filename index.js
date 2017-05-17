function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  let f = () => {console.log("Hey!")}

  return f
}

function returnsAnAnonymousFunction() {
  return () => {console.log("Hey!")}
}
