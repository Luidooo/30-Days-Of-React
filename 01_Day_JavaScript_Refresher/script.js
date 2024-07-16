//const arr = array()
//or
//let arr = newarray()

//console.log(arr)


//square brackets 

//const arr = []


const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries


console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)
console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)
console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)
console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)
console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)
console.log('Countries:', countries)
console.log('Number of countries:', countries.length)

let js = 'Javascript' 
const charInJS = js.split('')
console.log(charInJS)


const fruits3 = ['banana', 'orange', 'mango', 'lemon']
let fistFruit = fruits3[0]
console.log(fistFruit)
console.log(fruits3.lenght)

const Abacadra = Array()
Abacadra.fill(0)
Abacadra[2] = 'X'
console.log(Abacadra)

const first = [1, 2, 3]
const second = [4, 5, 6]
const third = first.concat(second)
console.log('Concatenando os trens',third)



//coisinha que procura e retorna o index
//se nao tiver retorna -1
console.log(third.indexOf(3))
//verifica se existe e retonra true or false
console.log(third.includes(3))
console.log(third.includes(0))

//.toString convert para toString 
const thirdString = third.toString()


//coloca coisinha no meio com o .join('coisinha')
const names = ['james', 'me', 've', 'uma', 'salada', 'frutas']
console.log(names.join('->'))

//corta ao indice das coisinhas que nois nao que ne com o .slide()
const numbers32 = [1, 2, 3, 4, 5]
console.log(numbers32.slice(1, 4))

//metodo splice remove os numeros entre os indices
console.log(numbers32.splice(1,4))


//Ading intens com push e removendo com pop
const popPush = [1,2,3,4,5,6]
//push coloca no final
popPush.push('new item')
popPush.pop()
//remove um itenzin so no final 
popPush.shift('coloquei')//remove um intezinho no comeco












