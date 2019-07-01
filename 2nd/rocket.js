/*
==================================
Array Mastery: Second Largest
==================================
Nama:________

[INSTRUKSI]
Function secondLargest akan menerima satu parameter berupa array yang berisikan angka, dimana dengan asumsi kemungkinan angka dari 0 - 999, dan angka dalam array minimal 3 angka, dan tidak ada angka yang bernilai sama (ini adalah info tese case, bukan harus divalidasi/dicek).
secondLargest akan mengembalikan angka yang kedua terbesar dari array tersebut.
[CONTOH]
input: [4, 2, 5, 1]
output: 4

[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
- Dilarang menggunakan .sort!
- Dilarang menggunakan built in function Math and .apply
*/

function secondLargest(angka) {

   var num = angka
//    5 2 1 4
//    0 1 2 3

//    loop 1, 5 -> 5
//    loop 2, 5 -> 2
//    loop 3, 5 -> 1
//    loop 4, 5 -> 4



    for(var i = 0 ; i < 4 ; i ++){
        for(var j = 0 ; j < 4 ; j ++){
            if(num[i] > num[j]){ // 5 > 2
                var temp = num[i] // 5
                num[i] = num[j] // 2
                num[j] = temp

            }
        }
    }
    

 return num

}

// TEST CASES
console.log(secondLargest([5, 2, 1, 4])); // 4
// console.log(secondLargest([999, 5, 0, 1, 4, 998])); // 998
// console.log(secondLargest([15, 32, 11, 14])); // 15
// console.log(secondLargest([5, 4, 3, 2, 1, 0])); // 4
// console.log(secondLargest([123, 321, 143, 313])); // 313
// 