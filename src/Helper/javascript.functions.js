export const objToArr = (obj) => {
    const arr = []
    for (let key in obj){
        arr.push({...obj[key], id:key})
    }
    return arr
}