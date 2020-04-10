// 2 завдання (номер 4)

class Person {
  constructor(name, surname, age, gender) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
  }
}

function toArray(object) {
  const array = [];
  for(let x in object) {
    const subarray = [x, object[x]];
    array.push(subarray)
  }
  return array;
}

// 3 завдання (номер 10)

function additivePersistance(number) {
  let count = 0;
  for (;number.toString().length > 1; count++) {
    let result = 0;
    for (let i = 0; i < number.toString().length; i++) {
      result += Number(number.toString()[i]);
    }
    number = result;
  }
  return count;
}

function multiplicativePersistence(number) {
  let count = 0;
  for (;number.toString().length > 1; count++) {
    let result = 1;
    for (let i = 0; i < number.toString().length; i++) {
      result *= Number(number.toString()[i]);
    }
    number = result;
  }
  return count;
}

// 2 завдання (номер 3)  (не обов'язкове)

function deleteFirstWord(string) {
  let array_of_string = string.split("");
  array_of_string.shift();
  string = array_of_string.join("");
  return string;
}

function stringWithSpaces(string) {
  const string_array = [];
  const len = string.length;
  for (let i = 0; i < len; i++) {
    string_array.push(string);
    string = " " + string;
  }
  string = deleteFirstWord(string);
  for (let i = 0; i < len - 1; i++) {
    string = deleteFirstWord(string);
    string_array.push(string);
  }
  return string_array;
}


//additivePersistance(1679583);
//multiplicativePersistence(123456);

/*let word = "helloworld";
result = stringWithSpaces(word);
for (let i = 0; i < result.length; i++)
  console.log(result[i]);
*/

//let person = new Person("Dima", "Lobunko", 18, "M");
//console.log(toArray(person));







