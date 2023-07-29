console.log("Exercise 4 Rais Rahayu")

// No.1
console.log("No.1")
function segitiga(tinggi) {
  const totalElements = (tinggi * (tinggi + 1)) / 2;
  const numDigits = String(totalElements).length;
  let currentNumber = 1; 
  for (let i = 1; i <= tinggi; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += String(currentNumber).padStart(numDigits, "0") + " ";
      currentNumber++;
    }
    console.log(row);
  }
}

// Penggunaan
const tinggi = 4;
segitiga(tinggi);


// No.2
console.log("No.2")

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let output = "";
      
    if (i % 3 === 0) {
      output += "Fizz";
    }
      
    if (i % 5 === 0) {
       output += "Buzz";
    }
      
    console.log(output || i);
  }
}

// Penggunaan
fizzBuzz(15);


console.log("No.3")
function hitungBMI(berat, tinggi1) {
  const tinggiMeter = tinggi1 / 100;
  const bmi = berat / (tinggiMeter * tinggiMeter);
  if (bmi < 18.5) {
    return "less weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "ideal";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    return "overweight";
  } else if (bmi >= 30.0 && bmi <= 39.9) {
    return "very overweight";
  } else {
    return "obesity";
  }
}

// Penggunaan
const berat = 75; // kg
const tinggi1 = 180; // cm
const hasilBMI = hitungBMI(berat, tinggi1);
console.log("kategori BMI:", hasilBMI);


console.log("No.4")
function hilangkanGanjil(arr) {
  const angkaGenap = arr.filter((num) => num % 2 === 0);
  return angkaGenap;
}

// Penggunaan
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const hasilOddEven = hilangkanGanjil(inputArray);
console.log(hasilOddEven);
  

console.log("No.5")
function stringKeArray(inputString) {
  return string.split(' ');
}

// Penggunaan
const string = "Hello World";
const resultArray = stringKeArray(string);
console.log(resultArray);
