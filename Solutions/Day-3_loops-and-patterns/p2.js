/**
 
 *  **Print Pyramid Pattern**

   * Input: `Rows = 5`
   * Output:

     ```
         *
        ***
       *****
      *******
     *********
     ```
   * ✨ *Teaches alignment using spaces and nested loops.*
 */

let rows = 5;

for (let i = 1; i <= rows; i++) {
  let str = "";

  for (let j = 1; j <= i; j++) {
    str += str.padStart(i) + "*";
  }
  console.log(str);
}
