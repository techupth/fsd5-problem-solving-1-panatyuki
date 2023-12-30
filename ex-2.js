//Exercise 2: Valid Palindrome

const isPalindrome = function (s) {
  //Start Coding here
  // step 1) ทำการแปลงทุกตัวอักษรในข้อความเป็น lowercase
  // lowercase คือ การแปลงตัวอักษรจากตัวใหญ่เป็นตัวเล็ก
  // lowercase มักถูกใช้ในการเปรียบเทียบข้อความโดยไม่สนใจตัวอักษรที่เป็นตัวใหญ่หรือตัวเล็กแตกต่างกัน
  s = s.toLowerCase();

  // step 2) ลบทั้งหมดที่ไม่ใช่ตัวอักษร a-z และ 0-9 โดยใช้ Regular Expression
  s = s.replace(/[^a-z0-9あ-んก-ฮ]/g, "");

  // step 3)
  // ใช้ split('') เพื่อแยกทุกตัวอักษรในข้อความเป็นอาร์เรย์
  // ใช้ reverse() เพื่อกลับลำดับของอาร์เรย์
  // ใช้ join('') เพื่อรวมกลับเป็นข้อความ
  return s === s.split("").reverse().join("");
};

const result1 = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("race a car");
const result3 = isPalindrome(" ");

// result 4 กับ 5 ลองทำเพิ่มดูว่าสามารถตรวจสอบในภาษาไทยและญี่ปุ่นได้ด้วยไหม
const result4 = isPalindrome("โรงเรียน");
const result5 = isPalindrome("みずのずみ");

console.log(result1); // true
console.log(result2); // false
console.log(result3); // true
console.log(result4);
console.log(result5);
