 // common js //

function square(num) {
  return num * num;
}

function cube(num) {
  return num * num * num;
}

function percentage(num, total) {
  return (num / total) * 100;
}

module.exports = { square, cube, percentage };

// modules js //

// function square2(num) {
//     let result1;
//     return (result1 = num * num);
// }

// function cube2(num) {
//     let result2;
//     return (result2 = num * num * num);
// }

// export default square2;

// export { cube2 };