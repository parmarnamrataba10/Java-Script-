

const x=1000;

function parent() {

  let x = 10;

  function child() {

    let x = 100;

    console.log("x value", x);
  }
  child();
}

parent();
