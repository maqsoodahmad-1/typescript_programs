let a: {
  b: number // a has a property b that's a number
  c?: string // a might have a property that's a string .And if c is   set it might be undefined.
  [key: number]:boolean // a might have any number of numeric propert  ies that are booleans.
  
  }
  
  a = {b:1}
  console.log(a) //b:1 output
  
  a = {b:1, c: undefined}
  console.log(a) //output b: 1 ,c: undefined

  a = {b:1,c: 'd'}
  console.log(a)

  a = {b:1,10:true}
  console.log(a)
 
  a = {b:1, 33:false}
  console.log(a)

  
