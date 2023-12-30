//Exercise 1: Add Strings

const addStrings = function (num1, num2) {
  //Start coding here
  // แปลงให้ค่าของพารามิเตอร์เป็น Number ด้วย parseInt
  const result = parseInt(num1) + parseInt(num2);

  // แปลงผลลัพธ์กลับเป็น string ด้วย toString
  return result.toString();
};

const result1 = addStrings("11", "123");
const result2 = addStrings("456", "77");
const result3 = addStrings("0", "0");

console.log(result1); // "134"
console.log(result2); // "533"
console.log(result3); // "0"
