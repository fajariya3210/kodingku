/**
Graduates Count
Implementasikan function graduatesCount untuk menampilkan berapa orang yang lulus berdasarkan
data nilai yang diberikan (`scores`) dengan aturan jika nilai lebih besar atau sama dengan 75
maka orang itu dinyatakan lulus.
Contoh:
- input: [70, 85, 65, 90]
  output: 2 orang lulus
- input: [0, 65, 30, 74]
  output: Tidak ada yang lulus
- input: [90, 100, 76, 85]
  output: Semua lulus
- input: []
  output: Data kosong


ATURAN CODING:
--------------
- Wajib menuliskan pseudocode atau algoritma.
  Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi
  soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan built-in function:
  - .map()
  - .filter()
  - .reduce()

*/

function graduatesCount (scores) {
    var tempLulus = 0
    var tempGlulus = 0
    for(var i = 0 ; i < scores.length; i ++){
        if(scores[i] >= 75){
            tempLulus ++
        }else if(scores[i] == 0){
            tempGlulus ++
        }     
    
    }

    if(tempLulus == scores.length && tempLulus > 0){
        return "semua orang lulus"
    }else if(tempGlulus == scores.length && tempGlulus > 0){
        // console.log('cek gak lulus' , tempGlulus)
        return "tidak ada yang lulus"
    }
    else if(tempLulus >= 1 ){
        return tempLulus + " yang lulus"
    }
    else{
        return "data kosong"
    } 

    
}

// Test cases

console.log(graduatesCount([76, 77, 30, 80, 10, 20])); // 3 orang lulus
console.log(graduatesCount([100, 100, 74, 60, 87])); // 3 orang lulus
console.log(graduatesCount([90, 100, 85, 79, 80, 74])); // 5 orang lulus
console.log(graduatesCount([100, 100, 100, 85, 90])); // Semua orang lulus
console.log(graduatesCount([0, 0, 0, 0, 0])); // Tidak ada yang lulus
console.log(graduatesCount([])); // Data kosong