function reverseStr(numbers){
  let result = ''
  for(let i = numbers.length - 1; i >= 0; i--){
    result += numbers[i]
  }
  return result
}
console.log(reverseStr(' фронтенд',' апрель',' урок'))