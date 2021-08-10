import { 
  forEach, 
  forEachObject, 
  unless,
  times,
  every,
  some,
  tap,
  unary,
  once,
  memoized,
  arrayUtils
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

// console.log(some([NaN, NaN, 4], isNaN))
// console.log(some([2, 3, 4], isNaN))

// const arr = ['1', '2', '3'].map(unary(parseInt))
// console.log(arr, 'arr');

// var doPayment = once(() => {
//   console.log('Payment is done');
// })

// doPayment();
// doPayment();

// let fastFactorial = memoized((n) => {
//   if (n === 0) {
//     return 1;
//   }

//   // 递归计算阶乘
//   return n * fastFactorial(n - 1)
// })

// console.log(fastFactorial(5))

// const arr = arrayUtils.map([1,2,3], (x) => x * x)
// console.log(arr);

const arr = arrayUtils.concatAll([[1,2,3], [2,3,4]])
console.log(arr);