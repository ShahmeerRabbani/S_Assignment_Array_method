const array1 = [10, 20, 30, 40, 50];
const result1 = array1.map(num => num * 5);
console.log('RESULT OF Map', result1);

const array2 = [15, 26, 33, 40, 18, 29];
const result2 = array2.filter(num => num % 2 === 0);
console.log('RESULT OF Filter', result2);

const array3 = [5, 10, 15, 20];
const result3 = array3.reduce((acc, currentValue) => acc + currentValue, 0);
console.log('RESULT OF Reduce', result3); 

const array4 = [7, 14, 21, 28, 35];
const result4 = array4.find(num => num > 20);
console.log('RESULT OF Find', result4); 

const array5 = [3, 5, 7, 9, 11];
const result5 = array5.findIndex(num => num === 7);
console.log('RESULT OF FindIndex', result5); 

const array6 = [12, 24, 36, 48, 60];
const result6 = array6.includes(36);
console.log('RESULT OF Includes', result6); 

const array7 = [1, 2, 3, 4, 2, 5];
const result7 = array7.indexOf(2);
console.log('RESULT OF IndexOf', result7); 

const array8 = [1, 2, 3, 4, 2, 5];
const result8 = array8.lastIndexOf(2);
console.log('RESULT OF LastIndexOf', result8); 