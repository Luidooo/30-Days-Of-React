/*
console.log('isa peidona kkkkkkkk')
countries.includes('Ethiopia') ? console.log('Ethiopia') : countries.push('Ethiopia');


const dog = {
  name: 'floki',
  legs: 'encurtada',
  color: 'coloriod',
  age: 'novin',
  bark: function (){
    return `Woof woof`
  }
}

const dogsValues = Object.values(dog)
console.log(dogsValues)

dog.breed = 'aiai'

console.log(dog)

dog.info = function (){
  return `i AM ${this.name}` } */

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

const usersNames = Object.keys(users)
const skillsLength = {}

for(names in usersNames){
  skillsLength[names] = {}
  skillsLength[names].Name = usersNames[names]
  skillsLength[names].Length = Object.values(users[usersNames[names]].skills).length
}

let nameMax
let max = 0
for(one in skillsLength){
  if(skillsLength[one].Length >= max){
    max = skillsLength[one].Length
    nameMax = skillsLength[one].Name
  }
}

let cont = 0
for(number in users){
  if(users[number].isLoggedIn){
    if(users[number].age >= 50){
      cont++
    }
  }  
}

//console.log(users)

const mernDevelopers = []
for(number in users){
  const skillsdoCara = Object.values(users[number].skills)
  if(
    skillsdoCara.includes('MongoDB') &&
    skillsdoCara.includes('Express') &&
    skillsdoCara.includes('React') &&
    skillsdoCara.includes('Node')
    ){
    mernDevelopers.push(number)
  }
}

users['Luis'] = {
  emial: 'eng.limaluis@gmail.com',
  skills: ['sim', 'sim'],
  age: 20,
  isLoggedIn: false,
  points: 0
}

const keys = Object.keys(users['Luis'])
const values = Object.values(users['Luis'])
console.log(values)

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const countriesObject = {
  Country: 'Canada',
  Language: 'English',
  Capital: 'Toronto',
  Population: 20000000
}

console.log(countriesObject)
