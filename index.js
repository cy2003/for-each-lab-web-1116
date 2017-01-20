// function doToElementsInArray(array, callback) {
//   array.forEach(callback)
// }
//
// function changeCompletely(element, index, array) {
//   array[index] = (Math.random() * 100).toString() + '!!!'
// }
//
// var animals = ["dog", "fish", "cat"]
//
// doToElementsInArray(animals, changeCompletely)

// console.log(animals)

function iterativeLog(array) {
  array.forEach(function(element, index, array) {
    console.log(`${index}: ${element}`)
  })
 }

 function iterate(callback){
   var array = ['a', 'b', 'c']
   array.forEach(callback)
   return array
 }

 function doToArray(array, callback){
   array.forEach(callback)
 }
