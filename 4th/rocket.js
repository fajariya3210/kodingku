/**

Virus Percentage
================

Implementasikan function virusPercentage untuk menghitung
persentase virus yang ada. Hanya akan ada 4 tipe virus, yaitu:
- *
- #
- @
- $

# Contoh:
- `input` -> **##@
  output -> 40% *, 40% #, 20% @
- `input` -> **#*##
  output -> 50% *, 50% #

Contoh lain ada di test case

# Asumsi:
- `input` tidak akan pernah kosong
- `input` pasti berisi virus

# Aturan coding:
- DILARANG menggunakan regex

*/

function virusPercentage (input) {
    var obj = {}
    var virusArr = []
    var count = 0

    for(var i = 0 ; i < input.length ; i ++){
       
        if(!obj[input[i]]){
            obj[input[i]] = 1
        }else{
            obj[input[i]] +=1
        }

}
for (var key in obj){
            count = obj[key] * 100 / input.length + '%' + key
            // console.log(count)
            virusArr.push(count)
        }
//console.log(virusArr)
return `${virusArr}`

}

console.log(virusPercentage('**#*##')); // 50% *, 50% #
console.log(virusPercentage('**######')); // 75% #, 25% *
console.log(virusPercentage('**##@')); // 40% *, 40% #, 20% @
console.log(virusPercentage('@')); // 100% @
console.log(virusPercentage('#$*@')); // 25% #, 25% $, 25% *, 25% @


