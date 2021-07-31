import { 
  forEach, 
  forEachObject, 
  unless,
  times,
  every
} from "../lib/es6-functional";

// var array = [1, 2, 3]
// forEach(array, (data) => {
//   console.log(data);
// })

// forEach(array, (data) => {
//   console.log(2 * data);
// })

// let object = { a: 1, b: 2 };
// forEachObject(object, (k, v) => {
//   console.log(`${k} : ${v}`);
// })

// forEach([1,2,3,4,5,6,7], (num) => {
//   unless((num % 2), () => {
//     console.log(num, ' is even');
//   })
// })

// times(100, (n) => {
//   unless((n % 2), () => {
//     console.log(n, ' is even');
//   })
// })

console.log(every([NaN, NaN, NaN], isNaN))
console.log(every([NaN, NaN, 4], isNaN))