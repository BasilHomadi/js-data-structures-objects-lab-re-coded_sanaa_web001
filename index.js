// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, object, {key: value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  object[key] = value
}

function deleteFromDriverByKey(driver, key) {
  let obj = Object.assign({}, object)
  delete obj[key]
  return obj
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete object[key]
  return object
}