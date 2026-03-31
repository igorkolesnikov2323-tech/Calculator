const btn1 = document.querySelector('.item1')  // Кнопка 1
const btn2 = document.querySelector('.item2')  // Кнопка 2
const btn3 = document.querySelector('.item3')  // Кнопка 3
const btn4 = document.querySelector('.item4')  // Кнопка 4
const btn5 = document.querySelector('.item5')  // Кнопка 5
const btn6 = document.querySelector('.item6')  // Кнопка 6
const btn7 = document.querySelector('.item7')  // Кнопка 7
const btn8 = document.querySelector('.item8')  // Кнопка 8
const btn9 = document.querySelector('.item9')  // Кнопка 9
const btn0 = document.querySelector('.item0')  // Кнопка 0
const commaButton = document.querySelector('.item10') // Кнопка ,
const qualButton = document.querySelector('.item11') // Кнопка = 
const subtractButton = document.querySelector('.item12') // Кнопка -
const summButton = document.querySelector('.item13') // Кнопка +
const divideButton = document.querySelector('.item14') // Кнопка /
const multiplyButton = document.querySelector('.item15') // Кнопка *
const calculatorInput = document.querySelector('#value') // Поле ввода

const operations = [subtractButton, summButton, divideButton, multiplyButton]

function summ (a, b){
    return a + b
}
function subtract (a,b){
    return a - b
}
function multiply (a ,b){
    return a * b
}   
function divide (a, b){
    return a / b
}

let subtracted = false
let multiplyed = false
let summed = false
let divided = false

a = ''
b = ''

btn1.addEventListener('click', function(){
    console.log('1')
    calculatorInput.value += '1'
    if (subtracted === true || multiplyed === true || summed === true || divided === true ){
        b+=Number(this.textContent);
    } else {
        a+=Number(this.textContent);
    }
})
btn2.addEventListener('click', function(){
    console.log('2')
    calculatorInput.value += '2'
    if (subtracted === true || multiplyed === true || summed === true || divided === true ){
        b+=Number(this.textContent);
    } else {
        a+=Number(this.textContent);
    }
})
btn3.addEventListener('click', function(){
    console.log('3')
    calculatorInput.value += '3'
    if (subtracted === true || multiplyed === true || summed === true || divided === true ){
        b+=Number(this.textContent);
    } else {
        a+=Number(this.textContent);
    }
})
btn4.addEventListener('click', function(){
    console.log('4')
    calculatorInput.value += '4'
    if (subtracted === true || multiplyed === true || summed === true || divided === true ){
        b+=Number(this.textContent);
    } else {
        a+=Number(this.textContent);
    }
})
btn5.addEventListener('click', function(){
    console.log('5')
    calculatorInput.value += '5'
    if (subtracted === true || multiplyed === true || summed === true || divided === true ){
        b+=Number(this.textContent);
    } else {
        a+=Number(this.textContent);
    }
})
btn6.addEventListener('click', function(){
    console.log('6')
    calculatorInput.value += '6'
    if (subtracted === true || multiplyed === true || summed === true || divided === true ){
        b+=Number(this.textContent);
    } else {
        a+=Number(this.textContent);
    }
})
btn7.addEventListener('click', function(){
    console.log('7')
    calculatorInput.value += '7'
    if (subtracted === true || multiplyed === true || summed === true || divided === true ){
        b+=Number(this.textContent);
    } else {
        a+=Number(this.textContent);
    }
})
btn8.addEventListener('click', function(){
    console.log('8')
    calculatorInput.value += '8'
    if (subtracted === true || multiplyed === true || summed === true || divided === true ){
        b+=Number(this.textContent);
    } else {
        a+=Number(this.textContent);
    }
})
btn9.addEventListener('click', function(){
    console.log('9')
    calculatorInput.value += '9'
    if (subtracted === true || multiplyed === true || summed === true || divided === true ){
        b+=Number(this.textContent);
    } else {
        a+=Number(this.textContent);
    }
})
btn0.addEventListener('click', function(){
    console.log('0')
    calculatorInput.value += '0'
    if (subtracted === true || multiplyed === true || summed === true || divided === true ){
        b+=Number(this.textContent);
    } else {
        a+=Number(this.textContent);
    }
}) 

subtractButton.addEventListener('click', function(){
    console.log('-')
    calculatorInput.value += '-'
    subtracted = true
    console.log(subtracted)
}) 
summButton.addEventListener('click', function(){
    console.log('+')
    calculatorInput.value += '+'
    summed = true
    console.log(summed)
}) 
divideButton.addEventListener('click', function(){
    console.log('/')
    calculatorInput.value += '/'
    divided = true
    console.log(divided)
}) 
multiplyButton.addEventListener('click', function(){
    console.log('*')
    calculatorInput.value += '*'
    multiplyed = true
    console.log(multiplyed)
}) 

commaButton.addEventListener('click', function(){
    console.log(',')
    calculatorInput.value += ','
}) 

qualButton.addEventListener('click', function(){
    console.log('=')
    if (summed == true){
        let result = summ(Number(b.join('')), Number(a.join('')))
        calculatorInput.value = eval(calculatorInput.value)
        b = result.toString().split('').map(Number)
        a.length=0
    }
    if (subtracted == true){
        let result = subtract(Number(b.join('')), Number(a.join('')))
        calculatorInput.value = eval(calculatorInput.value)
        b = result.toString().split('').map(Number)
        a.length=0
    }
    if (multiplyed == true){
        let result = multiply(Number(b.join('')), Number(a.join('')))
        calculatorInput.value = eval(calculatorInput.value)
        b = result.toString().split('').map(Number)
        a.length=0
    }
    if (divided == true){
        let result = divide(Number(b.join('')), Number(a.join('')))
        calculatorInput.value = eval(calculatorInput.value)
        b  = result.toString().split('').map(Number)
        a.length=0
    }
}) 


//b.join('')
//Number(b.join(''))

z = '13'
o = '199'
j = '+'
console.log(eval(z,j,o))
