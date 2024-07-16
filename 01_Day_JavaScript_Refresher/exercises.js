
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

const numbers
for ( number of numbers){
  //code
}





