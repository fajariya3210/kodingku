/* Encrypt me
    Kamu adalah seorang agen rahasia yang ingin mengirimkan pesan ke partnermu,untuk menmbuat kode yang kamu kirim tetap konfidental,
    kamu harus mengikuti sebuah kamus yang dimiliki oleh H8BI (Hacktiv8 Bureau of Investigation)

  Berikut adalah kamus huruf dari HBI
  huruf biasa abcdefghijklmnopqrstuvwxyz
  huruf H8BI  !@#$%^&*()-+1234567890[]{}

  Buatlah sebuah function yang mentranslate kata kata biasa, menjadi kata kata ter enkripsi menggunakan kamus H8BI!

  Note:
  - Selain karakter huruf biasa maka tidak akan di-translate

  Contoh 1:
  encrypt(dimitri) akan menghasilkan => $(1(86(

  Contoh 2:
  encrypt(@wtian) akan menghasilkan => @[8(!2

  Selamat berjuang, agen rahasia..

  RULES:
  ------
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE, jika tidak ada maka dianggap tidak mengerjakan
  - DILARANG MENGGUNAKAN BUILT IN FUNCTION .indexOf !

*/
function encrypt(input) {
  // your code here
  var hurufBiasa = "abcdefghijklmnopqrstuvwxyz";
  var hurufH8BI = "!@#$%^&*()-+1234567890[]{}";
  var tampung = ""
  
  for(var i = 0 ; i < input.length ; i ++){
    for(var j = 0 ; j < hurufBiasa.length ; j ++){
      if(input[i] == hurufBiasa[j]){
        tampung += hurufH8BI[j]
      }
      else if(input[i] == " " || input[i] == hurufH8BI[j]){
        tampung += input[i]
      }
      // else if(input[i] != hurufBiasa[j] && input[i] != hurufH8BI[j]){
      //   tampung += input[i]
      // }
      
    }

    

  }
  return input + " : " +tampung;
  
  
  }  

console.log(encrypt('dimitri')) // $(1(86(
console.log(encrypt('irsyah mardiah')) //(67{!* 1!6$(!*
// console.log(encrypt('dimitr€€')) // $(1(86€€
console.log(encrypt('d!mas')) // $!1!7
console.log(encrypt('@wtian')) // @[8(!2

// d i m i t r € €
// 0 1 2 3 4 5 6 7


  