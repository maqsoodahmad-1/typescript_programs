let a: readonly number[] = [1,2,3]
a.push(5)//can't push as a is readonly and hence gives error
console.log(a)
