
/*
Count solo
===========
Diberikan sebuah function countSolo, dimana function ini akan menerima parameter sebagai array
dan akan mereturn total jumlah dari angka angka yang TIDAK memiliki pasangan.
Example:
input: [ 5, 5, 6, 6, 3, 1, 2, 7, 7 ]
proses: 3 + 1 + 2
result: 6
RULES:
 - TIDAK BOLEH MENGGUNAKAN built in function .map, .filter, .reduce!
 - TIDAK BOLEH MENGGUNAKAN built in function .indexOf dan .include!
*/

function countSolo (numbers) {
    var bilanganP = 0
    
    for(var i = 1 ; i < numbers.length ; i ++){
        var temp = 0
        for(var j = 0 ; j < numbers.length ; j ++){
            if(numbers[j] == numbers[i]){
                temp ++
            }         
        }
        if(temp == 1){
            bilanganP = bilanganP + numbers[i]
        }     
    }
    return bilanganP;    
  
}

console.log(countSolo([ 5, 5, 6, 6, 3, 1, 2, 7, 7])) // 6
console.log(countSolo([ 3, 6, 3, 6, 1, 1, 2, 1 ]))  // 2
console.log(countSolo([ 3, 3, 3, 3, 4, 5, 8, 10, 11 ])) // 38

// 5 [ 5, 5, 6, 6, 3, 1, 2, 7, 7] 5 = 5 , t=1
// 5 [ 5, 5, 6, 6, 3, 1, 2, 7, 7]
// 6 [ 5, 5, 6, 6, 3, 1, 2, 7, 7]
// 6 [ 5, 5, 6, 6, 3, 1, 2, 7, 7]
// 3 [ 5, 5, 6, 6, 3, 1, 2, 7, 7]
