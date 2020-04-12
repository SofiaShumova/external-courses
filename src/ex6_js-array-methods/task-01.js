function slice(array, start = 0, end = array.length) {
  let newArray = []

  if (start < 0) {
    start += array.length
  }
  if (end < 0) {
    end += array.length
  }

  for (let i = start; i < end; i++) {
    newArray.push(array[i])
  }

  return newArray
}
module.exports = slice