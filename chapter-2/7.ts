let user :{
  readonly firstname:string
  } = {
  firstname: 'abhay'
}

console.log(user.firstname) //output is abhay

user.firstname = 'maqsood modifying abhay'
console.log(user.firstname) // can't assign to a firstname because it is a read only property
