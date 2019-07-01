/**

Drone Position
==============

Implementasikan function dronePosition untuk mencari koordinat drone yang
ada di dalam `grid`. Drone akan direpresentasikan sebagai karakter '*'.

Format koordinat: <baris>, <kolom>

# Asumsi:
- Drone ('*') selalu berjumlah 1, tidak mungkin ada drone lain

Contoh input ada di test case.

# Aturan coding:
- WAJIB menyertakan algoritma / pseudocode

*/

function dronePosition (grid) {
  // Code here
  var tmp1 = 0
  var tmp2 = 0
  var result = ""
  for(var i = 0 ; i < grid.length ; i ++){
    for(var j = 0 ; j < grid[i].length ;  j ++){
        if(grid[i][j] == "*"){
            tmp1 = i
            tmp2 = [j]
        }        
    }
  }

  if(tmp1 == 0 && tmp2 == 0){
      return "No Drone"
  }else{
    return result = tmp1 + ", " + tmp2  
  }
  
}

console.log(dronePosition([
  ['', '', ''],
  ['', '', ''],
  ['', '', '*']
])); // 2, 2

console.log(dronePosition([
  ['', '', ''],
  ['', '*', ''],
  ['', '', '']
])); // 1, 1

console.log(dronePosition([
  ['', '', '*'],
  ['', '', ''],
  ['', '', '']
])); // 0, 2

console.log(dronePosition([
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
])); // No drone
