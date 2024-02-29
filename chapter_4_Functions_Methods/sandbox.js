const myFunc = (callbackFunc) => {
  let value = 50
  callbackFunc(value)
}

myFunc(value => console.log(value))

let namePeople = ['mario', 'luigi', 'roo', 'strengh', 'vol']

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`)
}

namePeople.forEach(logPerson)