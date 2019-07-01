/**
Reverse Even
Implementasikan function reverseEven untuk membalikkan setiap elemen string dengan urutan ganjil
yang ada di dalamnya.
Contoh:
- input: ['awtian', 'raijin', 'thunderkeg']
  output: ['naitwa', 'raijin', 'gekrednuht']
- input: ['draco', 'luna', 'riddle', 'hagrid']
  output: ['ocard', 'luna', 'elddir', 'hagrid']
- input: []
  output: []
Aturan coding:
WAJIB MENYERTAKAN ALGORITHMA DAN PSEUDOCODE
Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()
- .reverse()
- .split()
- .join()
*/
function reverseEven(arr){
    var result = []
    for(var i = 0 ; i < arr.length ; i ++){
        var temp = ""
        if(i % 2 != 0){
            result.push(arr[i])
        }else{
            
            for(var j = arr[i].length-1 ; j >= 0 ; j --){
                temp += arr[i][j]
            }
        }
        
        result.push(temp)
    }
    return result;
   
}

console.log(reverseEven(['clinkz', 'jahrakal', 'kael']));
// [ 'zknilc', 'jahrakal', 'leak' ]

console.log(reverseEven(['moonfang', 'nightshade', 'lightbringer', 'strygwyr']));
// [ 'gnafnoom', 'nightshade', 'regnirbthgil', 'strygwyr' ]

console.log(reverseEven([]));
// // []
