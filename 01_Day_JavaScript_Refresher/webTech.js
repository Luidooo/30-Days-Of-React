const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]



console.log('a isa peidona ai o')


//console.log(text2.length)
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const text2 = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"]/g, "")
let words = text2.split(/\s+/);
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.includes('Sugar') ? null :  shoppingCart.push('Sugar');
console.log(shoppingCart)
let honeyIndex =shoppingCart.indexOf('Honey')
if(honeyIndex) shoppingCart.splice(honeyIndex, 1)
console.log(shoppingCart)
let teaIndex = shoppingCart.indexOf('Tea');
shoppingCart[teaIndex] = 'Green Tea'
console.log(shoppingCart)


webTechs.includes('Sass') ? console.log('Sass is a CSS process') : (webTechs.push('Sass'), console.log(webTechs));

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat( backEnd);

console.log(fullStack)


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let sum = 0;
for(let i=0; i < ages.length; i++) sum += ages[i];
let avarega = sum / ages.length
console.log(avarega)

ages.sort()
max = ages[ages.length - 1]
min = ages[0]
middle = ages.length % 2 ? ages[ages.length/2] : ages[Math.floor(ages.length/2)]
console.log(ages)
console.log(max)
console.log(middle)
console.log(min)
