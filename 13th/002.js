/**
CSV to Object
==============
Implementasikan function `csvToObject` untuk merubah string yang
diberikan menjadi sebuah object baru.
`csvToObject` menerima 2 parameter yaitu `keys` dan `values`
yang merupakan sebuah CSV (Comma Separated Values)
Keys & values di dalam object baru nantinya akan diambil dari kedua
parameter yang diberikan.
Contoh:
- Input: 'name,age', 'Aang,112'
  Output: { name: 'Aang', age: '112' }
- Input: 'title,description,content', 'Foobar,Foo and Bar,Foobar content'
  Output: { title: 'Foobar', description: 'Foo and Bar', content: 'Foobar Content' }
- Input: '', ''
  Output: { }
*/

function splitString(nilai){
  var result = []
  var temp = "" 
  for(var i = 0 ; i < nilai.length ; i ++){
    if(nilai[i] == ","){
      result.push(temp)
      temp = ""
    }else if(i == nilai.length-1){
      temp += nilai[i]
      result.push(temp)
    }else{
      temp += nilai[i]
    }
  }

  return result;
}
// console.log(splitString('name,phoneNumber', 'Dimitri,+666123654'));

function csvToObject (keys, values) {
  // write your code here
  var splitKeys = splitString(keys);
  var splitValues = splitString(values);
  // var temp = [splitKeys,splitValues];
  var obj = {}
  for(var i = 0 ; i < splitKeys.length ; i ++){
    obj[splitKeys[i]] = splitValues[i]
  }
  return obj;
}

console.log(csvToObject('name,phoneNumber', 'Dimitri,+666123654'));
// { name: 'Dimitri', phoneNumber: '+666123654' }

console.log(csvToObject('firstName,lastName,nationality', 'Sergei,Dragunov,Russia'));
// { firstName: 'Sergei', lastName: 'Dragunov', nationality: 'Russia' }

console.log(csvToObject('', ''));
{ }
