const smoethinWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Its works!')
    } else {
      reject('Ups, error.....')
    }
  })
}

smoethinWillHappen()
.then(response => console.log(response))
.catch(err => console.log(err))

const smoethinWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('Its works again!')
      }, 2000)
    } else {
      const error = new Error('Ups, error')
      reject(error)
    }
  })
}

smoethinWillHappen2()
.then(response => console.log(response))
.catch(err => console.error(err))

// Varias promesas encadenadas
Promise.all([smoethinWillHappen(), smoethinWillHappen2()])
.then(response => {
  console.log("Array of results", response)
})
.catch(err => {
  console.error(err)
})