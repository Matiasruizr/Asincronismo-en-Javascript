const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
     ? setTimeout(() => resolve('Haz algo Async!'), 3000)
     : reject(new Error('No lo hizo!'))
  })
}

const responseAsync = async () => {
  const something = await doSomethingAsync()
  console.log(something)
}

console.log('before')
responseAsync()
console.log('after');

const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync()
    console.log(something);
  } catch (error) {
    console.error(error);
  }
}

console.log('Before');
anotherFunction();
console.log('After');