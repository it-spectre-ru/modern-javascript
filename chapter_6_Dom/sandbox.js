// get an element by id

const title = document.getElementById("page-title")
console.log(title)


// get elements by their  class name

const errors = document.getElementsByClassName('error')
console.log(errors)
console.log(errors[0])
// errors.forEach(error => {
//   console.log(error)  
// });

// get element by their tag name

const paras = document.getElementsByTagName('p')
console.log(paras)
console.log(paras[0])