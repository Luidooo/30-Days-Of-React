
const empty = Array()
const emptyFive = Array(5)
const morefive = [1,2,3,4,5,6]
let length = morefive.length
let fisrt = morefive[0]
let middle = morefive[(morefive.length-1)/2]
let last = morefive[morefive.length-1]
const mixdata = [1, 'luisin', 2, 'pitonzinho', 3.23423, [1, 2, 3, 4,], 'ain']
const itCompanies = [
  'Facebook', 
  'Google', 
  'Microsoft', 
  'Apple', 
  'Ibm', 
  'Oracle', 
  'Amazon'
]

console.log('o tamanho ai o', itCompanies.length)

console.log(itCompanies)
console.log(itCompanies[0])
console.log(itCompanies[itCompanies.length-1])
console.log(itCompanies[(itCompanies.length-1)/2])

if(itCompanies.includes('Lua')){
  console.log('Lua')
}else{
  console.log('Nao existe')
}


const companisOs = []
for(let i=0; i < itCompanies.length; i++){
  name = itCompanies[i]
  let count = 0;
  for(let j=0; j < name.length; j++){
    if(name[j].toLowerCase() == 'o') count ++;
    if(count >= 2) {
      companisOs.push(name);
      break
    }
  }
  count = 0;
}
//console.log(companisOs)
itCompanies.sort()
console.log(itCompanies)
//itCompanies.reverse()
//console.log(itCompanies)
//for(let i=0;i<3;i++) itCompanies.pop()
itCompanies.shift()
itCompanies.pop()
console.log(itCompanies)
if(itCompanies.length % 2)
  itCompanies.splice(itCompanies.length/2-1, 2)
else
  itCompanies.splice(Math.floor(itCompanies.length/2), 1)
console.log(itCompanies)

console.log(itCompanies.splice())

let age = prompt("Enter you age:")
if(age >= 16){
  console.log("You are old enough to drive.")
}else{
  console.log("You are left with ",16-age, "years to drive.")
}



//Loops





const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  getFullName: function () {
    return `${this.firstName}${this.lastName}`
  },
  'phone number': '+999618010', isMarried: true, 
  } 
console.log(person)
  
// accessing values using .
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location)

// value can be accessed using square bracket and key name
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['age'])
console.log(person['location'])

// for instance to access the phone number we only use the square bracket method
console.log(person['phone number'])

console.log(person.getFullName())


person.nationality = 'Ethiopian'
person.skills.push('ai baby')

person.getPersonInfo = function () {
  let noLastlLSkills = this.skills.slice(0, this.skiils.legth -1 ).join('->')
  let lastSkiill = this.skiils.slice(this.skiils.length - 1)[0]

}

const person2 = {
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: ['HTML', 'CSS', 'JS'],
  title: 'teacher',
  address: {
    street: 'Heitamienkatu 16',
    pobox: 2002,
    city: 'Helsinki',
  },
  getPersonInfo: function () {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
  },
}
//copia sem mudar
const copyPerson = Object.assign({}, person2)

//keys, pega as "keys" do objeto
const keys = Object.keys(copyPerson)
//const adress = Object.keys(copyPerson.addres)

//values, consegue-se os valores de um obejto
const values = Object.values(copyPerson)
console.log(values)


//entries to get keys and values in a array
const entries = Object.entries(copyPerson)
console.log(entries) 
const tem = copyPerson.hasOwnProperty('name')
//console.log(tem)

console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))

























