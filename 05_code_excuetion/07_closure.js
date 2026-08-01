



function outer() {
  let msg = "hello";

  function inner() {
    console.log(msg);
  }

  return inner;
}

let msg = outer();
console.log("msg", msg());