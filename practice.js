const arr = [10,20,30,40,45,50]


const multipleOf10 = arr.filter((elem) => {
    if(elem%10 === 0) {
        return elem
    } 
})

console.log(multipleOf10)