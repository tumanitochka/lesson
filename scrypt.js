fetch('https://dummyjson.com/products/categories')
.then(res => res.json())
.then(console.log)
.catch(error => console.log(error))



// async function getData(){
//     try {
//         const data = await fetch('https://dummyjson.com/products/categories')
//         const res = await data.json()
//         console.log(res)
//     } catch (error) {
//         console.log(error.massage)
//     }
// }

// getData()
