
/*
Tranpose the Matrix
================
Author: Muhammad Ramadiansyah
Description: matrixTranspose adalah sebuah fungsi untuk menukar posisi baris dan kolom
              dari sebuah matriks
Examples:
1. input = [
  [1, 2],
  [3, 4],
  [5, 6]
]
  output = [
    [1, 3, 5],
    [2, 4, 6]
  ]
2. input = [
    [1, 2]
]
  output = [
    [1],
    [2]
  ]
*/
function matrixTranspose(matriks) {
  // write your code here
  var result = []
  for(var i = 0 ; i < matriks.length ; i ++){
    var temp1 = []
    var temp2 = []
    
    for(var j = 0 ; j < matriks[i].length ; j ++){
      if(matriks[i][j] == [j]){
        temp1.push(matriks[i][j])
      }else if(matriks[i][j] == j+1){
        temp2.push(matriks[i][j])
      }
    }
    result.push(temp1)
    result.push(temp2)
  }
  return result;
}

console.log(matrixTranspose([[1, 2], [3, 4], [5, 6]]))
/*
  input:
  [
    [1, 2],
    [3, 4],
    [5, 6]
  ]
  output :
  [
    [1, 3, 5],
    [2, 4, 6]
  ]
*/

// console.log(matrixTranspose([[1, 2], [3, 4]]));

// /*
//   input:
//   [
//     [1, 2],
//     [3, 4]
//   ]
//   output :
//   [
//     [1, 3],
//     [2, 4]
//   ]
// */

// console.log(matrixTranspose([[1, 2]]))
// /*
//   input:
//   [
//     [1, 2]  
//   ]
//   output :
//   [
//     [1],
//     [2]
//   ]
// */

// console.log(tranpose_matriks([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
// /*
//   input = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ]
//     output = [
//       [1, 4, 7],
//       [2, 5, 8],
//       [3, 6, 9]
//     ]
// */