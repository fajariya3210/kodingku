/*
    Diberikan sebuah function operasiMatriks yang menerima parameter dua buah array
    dua dimensi dan operator matematika.

    Dimana jika parameter operator matematika adalah '+' maka dua array tersebut ditambahkan
    dan jika parameter operator matematika adalah '-' maka dua array tersebut dikurangkan

    NOTE: operator matematika yang diterima hanya '+' dan '-'


    contoh :
    input:
      arr1:
        [
          [5, 4, 7],
          [3, 9, 3],
          [8, 3, 2]
        ]
      arr2:
        [
          [5, 4, 8],
          [1, 9, 3],
          [8, 2, 2]
        ]
      operator: '+'

    Proses:
      [
        [5+5, 4+4, 7+8],
        [3+1, 9+9, 3+3],
        [8+8, 3+2, 2+2]
      ]

    Output:
    [ [ 10, 8, 15 ], [ 4, 18, 6 ], [ 16, 5, 4 ] ]


    NOTE:
     - ASUMSI JUMLAH BARIS DAN KOLOM arr1 dan arr2 HARUS SAMA
     - Jika jumlah kolom atau jumlah baris dari kedua array berbeda maka
       RETURN 'Invalid array'

    RULES:
    - DILARANG menggunakan built-in function .map, .filter, .reduce
 */

function oeprasiMatriks(arr1) {
  //your code here
  var temp = []

  // var tampung

  for(var i = 0 ; i < arr1.length ; i ++){


    // console.log(arr1[0][0] + arr1[1][0])
    // console.log(arr1[0][1] + arr1[1][1])
    // console.log(arr1[0][2] + arr1[1][2])
    var temp2 = []

    for(var j = 0 ; j < arr1.length ; i ++){


    }
    var result = arr1[i] + arr1[j]
      temp2.push(result);

    
   
  }

return temp2;  
  


  
}

console.log(oeprasiMatriks([[5, 4, 7],[5, 4, 8]]))








// console.log(oeprasiMatriks(
//     [[5, 4, 7],[3, 9, 3],[8, 3, 2]],
//     [[5, 4, 8],[1, 9, 3],[8, 2, 2]]));
  //, [[5, 4, 8],[1, 9, 3],[8, 2, 2]], "+"));
   // [ [ 10, 8, 15 ], [ 4, 18, 6 ], [ 16, 5, 4 ] ]

// console.log(oeprasiMatriks([
//   [5, 4, 7],
//   [3, 9, 3],
//   [8, 3, 2]
// ], [
//   [5, 4, 8],
//   [1, 9, 3, 5],
//   [8, 2, 2]
// ], "+")); // kedua matriks tidak dapat diperasikan
