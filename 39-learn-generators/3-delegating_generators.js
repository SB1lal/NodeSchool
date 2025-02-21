function* flat(arr) {
    for(let i = 0; i < arr.length; i++)
    {
        if(Array.isArray(arr[i]))
            yield *flat(arr[i]);
        else
            yield arr[i];
    }
}

const A = [1, [2, [3, 4], 5], 6];

for (let f of flat(A)) {
    console.log(f);
}


/* OFFICIEL SOLUTION */
/* ----------------- */
// function* flat(arr) {
//     if (Array.isArray(arr)) {
//         for (var i = 0; i < arr.length; i++) {
//             yield* flat(arr[i]);
//         }
//     } else {
//         yield arr;
//     }
// }

// var A = [1, [2, [3, 4], 5], 6];
// for (var f of flat(A)) {
//     console.log(f);
// }