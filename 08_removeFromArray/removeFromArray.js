const removeFromArray = function(arr, ...items) {
    let remove = []
    for (i in items) {
        remove.push(items[i])
    }

    let newArr = arr.filter(value => remove.indexOf(value) < 0)
    console.log(newArr)
    return newArr
//     for (i in items) {
//         console.log("Tämä item on " + items[i])
//         arr.map(value => 
//             {if (value !== items[i]) 
//                 {newArr.push(value)}})
//         console.log("New array is " + newArr)
//             }
//     return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
