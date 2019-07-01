/**
Buatlah sebuah algoritma untuk kasus berikut:
Seorang pengajar sedang memeriksa ujian mahasiswa dan akan memberikan desc nilai dari A-E dengan ketentuan sebagai berikut:
 - Nilai 80 - 100: A
 - Nilai 65 - 79: B
 - Nilai 50 - 64: C
 - Nilai 35 - 49: D
 - Nilai 0 - 34: E

 Tampilkan desc nilai dan nama siswa saat pengajar tersebut memasukkan nilai dan nama yang dia inginkan.

NOTED:
Jika nilai mahasiswa kurang dari 0 atau lebih dari 100 maka tampilkan 'Nilai Invalid'
**/


var nilai = 0
var nama = "fajar"

if(nilai >= 80 && nilai <= 100){
    console.log(nama , " mendapatkan nilai A")
}else if(nilai >= 65 && nilai <=79){
    console.log(nama , " mendapatkan nilai B")
}else if(nilai >= 50 && nilai <= 64){
    console.log(nama , " mendapatkan nilai C")
}else if(nilai >= 35 && nilai <= 49){
    console.log(nama , " mendapatkan nilai D")
}else if(nilai >= 0 && nilai <= 34){
    console.log(nama , " mendapatkan nilai E")
}else{
    console.log("nilai invalid")
}