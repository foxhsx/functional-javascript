// 遍历数组
const forEach = (array, fn) => {
  let i;
  for (i = 0; i < array.length; i++) {
    fn(array[i])
  }
}

// 遍历 JavaScript 对象
const forEachObject = (obj, fn) => {
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      fn(property, obj[property])
    }
  }
}

const unless = (predicate, fn) => {
  if (!predicate) fn()
}

const times = (times, fn) => {
  for (let i = 0; i < times; i++) {
    fn(i)
  }
}

const every = (arr, fn) => {
  let result = true;
  // 使用 for 循环
  // for (let i = 0; i < arr.length; i++) {
  //   result = result && fn(arr[i])
  // }

  // 使用 for...of
  for(const value of arr) {
    result = result && fn(value)
  }

  return result
}

const some = (arr, fn) => {
  let result = false;
  for (const value of arr) {
    result = result || fn(value)
  }
  return result
}

const tap = (value) => (fn) => (
  typeof(fn) === 'function' && fn(value),
  console.log(value)
)

/**
 * 接受一个给定的多参数函数，并把它转换为一个只接受一个参数的函数
 * 检查传入的 fn 是否有一个长度为 1 的参数列表（可以通过 length 属性查看）
 * @param {Function} fn 传入的函数
 * @returns function 只接受一个参数
 */
const unary = (fn) => fn.length === 1 ? fn : (arg) => fn(arg);

/**
 * 只允许一次给定的函数
 * @param {Function} fn 传入只执行一次的函数
 * @returns 返回只能执行一次的高阶函数体
 */
const once = (fn) => {
  let done = false;
  
  // 返回的函数会形成一个覆盖它的闭包作用域
  return function () {
    return done ? undefined : ((done = true), fn.apply(this, arguments))
  }
}

/**
 * 
 * @param {Function} fn 
 * @returns 记录了结果的函数体
 */
const memoized = (fn) => {
  const lookupTable = {}

  return (arg) => lookupTable[arg] || (lookupTable[arg] = fn(arg))
}

/**
 * 循环数组，并返回一个处理后的新数组
 * @param {要做处理的原数组} array 
 * @param {处理数组每一项的方法} fn 
 * @returns 返回处理过后的新数组
 */
const map = (array, fn) => {
  let results = [];
  for (const value of array) {
    results.push(fn(value))
  }
  return results;
}

/**
 * 对当前数组进行过滤，筛选出符合条件的数据，并返回一个新数组
 * @param {要过滤的数组} array 
 * @param {过滤的条件} fn 
 * @returns 返回符合预期的一组集合
 */
const filter = (array, fn) => {
  let results = []
  for (const value of array) {
    (fn(value) ? results.push(value) : undefined)
  }
  return results;
}

/**
 * 数组扁平化方法
 * @param {要处理的二维数组} array 
 * @param {额外的函数方法} fn 
 * @returns 返回扁平化数组
 */
const concatAll = (array, fn) => {
  let results = [];
  for (const value of array) {
    // apply 会把第二个参数数组的每一项传到 results 数组中去
    results.push.apply(results, value)
  }
  return results;
}

/**
 * 利用闭包进行累计计算
 * @param {要处理的数组} array 
 * @param {处理函数} fn 
 * @param {初始值} initialValue 
 * @returns 返回最后累计计算的值
 */
const reduce = (array, fn, initialValue) => {
  let accumlator;
  if (initialValue != undefined) {
    accumlator = initialValue
  } else {
    accumlator = array[0]
  }

  if (initialValue === undefined) {
    for (let i = 1; i < array.length; i++) {
      accumlator = fn(accumlator, array[i])
    }
  } else {
    for (const value of array) {
      accumlator = fn(accumlator, value)
    }
  }

  return [accumlator]
}

const zip = (leftArr, rightArr, fn) => {
  let index, results = [];

  for (index = 0; index < Math.min(leftArr.length, rightArr.length); index++) {
    results.push(fn(leftArr[index], rightArr[index]))
  }
  return results;
}

// 数组方法常量
const arrayUtils = {
  map: map,
  filter: filter,
  concatAll: concatAll,
  reduce: reduce,
  zip: zip
}

export { 
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
};