// EXAMPLE 1 - Remove file extension from a string using JavaScript

function removeExtension(filename) {
  return (
    filename.substring(0, filename.lastIndexOf('.')) || filename
  );
}

// 👇️ myFile
console.log(removeExtension('myFile.jpeg'));

// 👇️ myFile
console.log(removeExtension('myFile'));

// 👇️ /my-folder/myFile
console.log(removeExtension('/my-folder/myFile.jpeg'));

// ------------------------------------------------------------------

// // EXAMPLE 2 - Remove a file extension from a string in Node.js

// import path from 'path';

// // 👇️ if you use older CommonJS syntax
// // const path = require('path');

// console.log(path.parse('myFile.jpeg').name); // 👉️ "myFile"
// console.log(path.parse('myFile.jpeg').ext); // 👉️ ".jpeg"

// console.log(path.parse('myFile').name); // 👉️ "myFile"
// console.log(path.parse('myFile').ext); // 👉️ ""

// // 👇️ "myFile"
// console.log(path.parse('/my-folder/myFile.jpeg').name);

// // 👇️ ".jpeg"
// console.log(path.parse('myFolder/myFile.jpeg').ext);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Remove a file extension from a String using a regular expression

// function removeExtension(filename) {
//   return filename.replace(/\.[^\/.]+$/, '');
// }

// // 👇️ myFile
// console.log(removeExtension('myFile.jpeg'));

// // 👇️ myFile
// console.log(removeExtension('myFile'));

// // 👇️ /my-folder/myFile
// console.log(removeExtension('/my-folder/myFile.jpeg'));
