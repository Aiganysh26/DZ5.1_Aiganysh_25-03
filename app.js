function reverseStr(...numbers){
  let result = []
  numbers.map(str => {
    for(let i = str.length - 1; i >= 0; i--){
      result += str[i]
    }
  })
  return result.split()
}
console.log(reverseStr(' фронтенд',' апрель',' урок'))