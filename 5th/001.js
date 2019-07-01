/*
Array Remover
Array remover merupakan sebuah function yang berfungsi untuk menghapus value
dari sebuah array yang diberikan berdasarkan jumlah yang ingin dihapus dan index
mulai.

Array remover menerima tiga parameter yaitu array of number, index untuk mulai
menghapus dan jumlah data yang akan dihapus

Contoh:
Input:
  array: [ 666, 666, 333, 10, 5, 6]
  index: 1
  count: 2

Output:
  [ 666, 10, 5, 6 ]

RULES:
  - WAJIB MENYERTAKAN ALGORITMA / PSEUDOCODE
  - Dilarang menggunakan built-in function .map, .filter, .reduce!
*/
 
function arrayRemover (array, index, count) {
  // your code here
  
  // console.log(array)
  for(var i = 0 ; i < count ; i ++){
    if(index === 0){
      //array.shift(array[i])
      array[i] = 'delete'
    }else{
      //array.shift(array[i+1]) 
      array[i+1] = 'delete'
    }
    

  }

  // console.log(array)

  var hasil = []
  for(var j = 0 ; j < array.length ; j ++){
    if(array[j] == 'delete'){
      continue;
    }else{
      hasil.push(array[j])
    }
  }



 

return hasil;




}

console.log(arrayRemover([ 1, 2, 3] , 0 , 2 )); // [3]
console.log(arrayRemover([ 666, 666, 333, 10, 5, 6] , 1 , 2 )); // [ 666, 10, 5, 6 ]
console.log(arrayRemover([ 1, 2, 3], 0, 3)) // []


// var aku = ['aku', 'sayang' , 'kamu']

// for(var i = 0 ; i < aku.length ; i ++){
    


