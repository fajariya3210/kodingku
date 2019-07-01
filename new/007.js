/**
Delete Undefined Keys
=====================
Implementasikan function `deleteUndefinedKeys` untuk menghapus
key di dalam object yang memiliki value undefined.

Function ini akan menerima satu parameter yaitu `data`
yang memiliki tipe data array.
Di dalam array `data` terdapat beberapa object yang memiliki
value undefined. Tugas kamu adalah untuk menghapus key tersebut

# Contoh I/O
Contoh input dan output bisa kamu lihat di test case

# Kondisi khusus
- Jika tidak ada elemen di dalam `data`, maka tampilkan 'No data'

CONSTRAINTS
============
- DILARANG menggunakan built-in function .map, .filter

*/

 // if(data[i].key != undefined){
    //     obj.key = data[i].key
    //   }if(data[i].address != undefined){
    //     obj.address = data[i].address
    //   }if(data[i].email != undefined){
    //     obj.email = data[i].email
    //   }if(data[i].age != undefined){
    //     obj.age = data[i].age
    //   }if(data[i].gender != undefined){
    //     obj.gender = data[i].gender
    //   }
    //   console.log()
    //   result.push(obj)

    // //   for(var key in obj){
    //     console.log(obj)
      // }



function deleteUndefinedKeys(data) {
  // Code here
  var c = []
    for (var j = 0 ; j < data.length ; j ++){
        var obb = {}
        var obj = {}
        obj = data[j]
        
        for(var key in obj){
            if(obj[key] != undefined){
                obb[key] = obj[key]
                // c.push(obj[key])
            }
        }
        c.push(obb)
    }
    
    return c;
}

console.log(deleteUndefinedKeys([{
    name: 'Dimitri',
    address: undefined,
    email: 'dimitri@mail.com',
    age: undefined,
    gender: 'male'
  },
  {
    name: 'Alexei',
    address: 'Earth',
    email: undefined,
    age: 18,
    gender: 'male'
  }
]));
/*
  [ { name: 'Dimitri', email: 'dimitri@mail.com', gender: 'male' },
    { name: 'Alexei', address: 'Earth', age: 18, gender: 'male' } ]
*/

console.log(deleteUndefinedKeys([
  {band: 'Ghost',
    formed: 2006,
    members: ['Papa Emeritus', 'Alpha', 'Omega', 'Water', 'Wind', 'Earth'],
    genre: 'Heavy Metal',
    rating: undefined
  },
  {
    band: 'BABYMETAL',
    formed: undefined,
    members: ['SU-METAL', 'MOAMETAL', 'YUIMETAL'],
    genre: 'Kawaii Metal',
    rating: undefined
  },
  {
    band: 'Avatar',
    formed: 2006,
    members: undefined,
    genre: undefined,
    rating: 5
  }
]));
/*
[ { band: 'Ghost',
    formed: 2006,
    members: [ 'Papa Emeritus', 'Alpha', 'Omega', 'Water', 'Wind', 'Earth' ],
    genre: 'Heavy Metal' },
  { band: 'BABYMETAL',
    members: [ 'SU-METAL', 'MOAMETAL', 'YUIMETAL' ],
    genre: 'Kawaii Metal' },
  { band: 'Avatar', formed: 2006, rating: 5 } ]
*/

console.log(deleteUndefinedKeys([]));
// No data
