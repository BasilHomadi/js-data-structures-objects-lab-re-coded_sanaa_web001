// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {key: value})
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
  object[key] = value
}

function deleteFromDriverByKey(object, key) {
  let obj = Object.assign({}, object)
  delete obj[key]
}

function destructivelyDeleteFromDriverByKey() {
  
}