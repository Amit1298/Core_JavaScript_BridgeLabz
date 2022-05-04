let n = 5;
let star = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        star += " ";
      }
  for (let k = 0; k < 2 * i - 1; k++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);




let n1 = 5;
let star1 = "";
// External loop
for (let i = 0; i < n1; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    star1 += " ";
  }
  // printing star
  for (let k = 0; k < 2 * (n1-i) - 1; k++) {
    star1 += "*";
  }
  star1 += "\n";
}
console.log(star1);