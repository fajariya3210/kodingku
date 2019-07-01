/**
Array Merge
-----------
Mishima Zaibatsu mempunyai 2 mata-mata untuk mencari nama orang yang berpotensi untuk mengalahkan
Heihachi Mishima dan mengambil alih perusahaan miliknya. 2 mata-mata ini mengerjakan tugasnya
dengan baik, tetapi ada saatnya kedua data yang diberikan memiliki duplikat (nama yang sama).
Implementasikan function arrayMerge untuk menggabungkan 2 data yang diberikan kepada
Mishima Zaibatsu dan jangan sampai terdapat nama yang sama di data yang sudah tergabung tadi.
Contoh:
- input: ['kazuya', 'jin', 'lee'], ['kazuya', 'feng']
  output: ['kazuya', 'jin', 'lee', 'feng']
- input: ['lee', 'jin'], ['kazuya', 'panda']
  output: ['lee', 'jin', 'kazuya', 'panda']


ATURAN CODING:
--------------
- Wajib menuliskan pseudocode atau algoritma.
  Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi
  soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan built-in function:
  - .map()
  - .filter()
  - .reduce()
  - .concat()
  - .indexOf() / .lastIndexOf() / .includes()
  - .copyWithin()
*/

function arrayMerge (firstData, secondData) {
    var tampung1 = firstData
    
    for(var i = 0 ; i < secondData.length ; i ++){
        tampung1.push(secondData[i])
    }
    // console.log(tampung1)

    var tampung2 = []
    for(var i = 0 ; i < tampung1.length ; i ++){
        
        var flek = true
        
        for(var j = 0 ; j < tampung2.length ; j ++){
            
            if(tampung1[i] == tampung2[j]){
                
                flek = false 
            }
        }

    if(flek == true){
        // console.log('jalankan yang ini')
        tampung2.push(tampung1[i])
        }    


}
// console.log('ini', tampung2)
// return `${tampung2} merubah array ke string

return tampung2

}


    // for(var i = 0 ; i < firstData.length ; i ++){
    //     // console.log(firstData[i])
        
    //     for(var j = 0 ; j < secondData.length ; j ++){
    //         // console.log(secondData[j])
    //         if(secondData[i] != firstData[i]){
    //             tampung1 += firstData[i]

    //     }

    // }


    // }

// console.log(tampung1)
// }

// Test cases
// arrayMerge(['king', 'devil jin', 'akuma'], ['eddie', 'steve', 'geese'])
console.log(arrayMerge(['king', 'devil jin', 'akuma'], ['eddie', 'steve', 'geese']));
// ['king', 'devil jin', 'akuma', 'eddie', 'steve', 'geese']

console.log(arrayMerge(['sergei', 'jin'], ['jin', 'steve', 'bryan']));
// ['sergei', 'jin', 'steve', 'bryan']

console.log(arrayMerge(['alisa', 'yoshimitsu'], ['devil jin', 'yoshimitsu', 'alisa', 'law']));
// // ['alisa', 'yoshimitsu', 'devil jin', 'law']

console.log(arrayMerge([], ['devil jin', 'sergei']));
// // ['devil jin', 'sergei']

console.log(arrayMerge(['hwoarang'], []));
// // ['hwoarang']

console.log(arrayMerge([], []));
// []
