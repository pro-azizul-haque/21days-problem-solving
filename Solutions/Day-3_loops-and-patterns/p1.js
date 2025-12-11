const row = 100;
for (let i = 1; i <= row; i++) {
  let str = "";

  // creating string for each loop
  for (let ii = 1; ii <= i; ii++) {
    str = str + "*";
  }
  //   console.log(str, i);
}
// pattern hocche each loop er modde ekta string banate hobe ekon kivabe banaba etay tumar logic

for (let i = 1; i <= row; i++) {
  let str = "";

  // creating string for each loop
  for (let ii = row; ii >= i; ii--) {
    str = str + "*";
  }
  console.log(str, row + 1 - i);
}


