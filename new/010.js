/**
================
Hitung Kembalian
================

buatlah function yang akan menghitung nominal dan jumlah pecahan pengembalian transaksi.
function tersebut akan menerima 2 parameter parameter pertama adalah nilai pembayaran, 
parameter kedua adalah nilai yang harus dibayarkan. 

Code dibuat se dinamis mungkin untuk menghandle apabila ketersediaan uang nominal dan jumlahnya
diubah-ubah dan asumsi uang kembaliannya selalu cukup dengan jumlah ketersediaan uang
 
*/

function hitungKembalian(bayar, harga){
    var sisa = bayar - harga
    var tamp = sisa
    var arryAngka = []
    var t100 = 0
    var t50 = 0
    var t20 = 0
    var t10 = 0
    var t5 = 0
    
    var tampNilai = 0

    for(var i = 0 ; i < 5 ; i ++){
      if(tamp >= 100000){
        tamp = tamp - 100000
        arryAngka.push(tamp)
        t100 ++      
      }
    }
      if(tamp >= 50000){
        for(var i = 0 ; i < 5 ; i ++){
          
          if(tamp >= 50000){
            tamp = tamp - 50000
            arryAngka.push(tamp)
            t50 ++
          }
        }
      }
      if(tamp >= 20000 ){
        for(var i = 0 ; i < 5 ; i ++){
          if(tamp >= 20000){
            tamp = tamp - 20000
            arryAngka.push(tamp)
            t20 ++
          }
        }
      }

      if(tamp >= 10000){
        for(var i = 0 ; i < 5 ; i ++){
          if(tamp >= 10000){
            tamp = tamp - 10000
            arryAngka.push(tamp)
            t10 ++
          }
        }
      }
      if(tamp >= 5000){
        for(var i = 0 ; i < 5 ; i ++){
          if(tamp >= 5000){
          tamp = tamp - 5000
          arryAngka.push(tamp)
          t5 ++
          }
        }
      }



    console.log('100.000 : ' + t100);
    console.log('50.000 : ' + t50)
    console.log('20.000 : ' + t20)
    console.log('10.000 : ' + t10)
    console.log('5.000 : ' + t5)
    return arryAngka;
  
 
}
// Test Case 3
//console.log(hitungKembalian(920000, 80000));
/*
output
  { 
    '10000': 1, 
    '20000': 4, 
    '50000': 5, 
    '100000': 5 
  }
*/

// Test Case
console.log(hitungKembalian(1000000, 755000));
/*
output
  { 
    '5000': 1, 
    '20000': 2, 
    '100000': 2 
  }
*/

// Test Case
//console.log(hitungKembalian(40000, 35000));
/*
output
  { '5000': 1 }
*/


// TEST CASE 4
// console.log(hitungKembalian(50000,50000)); // {}

// TEST CASE 5
// console.log(hitungKembalian(50000,500000)); // Uang tidak cukup


