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
  for (let i = 0; i < arr.length; i++) {
    result = result && fn(arr[i])
  }
  return result
}

export { 
  forEach,
  forEachObject,
  unless,
  times,
  every
};