module.exports = function arrayMap(arr, fn) 
{
    const fnArr = [];
    arr.reduce((accumulator, currentValue) => fnArr.push(fn(currentValue)), 0);

    return fnArr;
}


/* OFFICIEL SOLUTION */
/* ----------------- */
// module.exports = function arrayMap(arr, fn, thisArg) {
//     return arr.reduce(function(acc, item, index, arr) {
//       acc.push(fn.call(thisArg, item, index, arr))
//       return acc
//     }, [])
//   }

