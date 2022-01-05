// Spread Operator

// For Expand Elements Of Array & Characters of String

let a = [2, 3, 4];
console.log(...a);

let b = "AWESOME";
console.log(...b);

// For Copy One Array to Another

let c = [...a, 7, 8, ...b];
console.log(c);

// Passing Elements of Array to Argument

let sum = (n1, n2, n3) => {
  return n1 * n2 * n3;
};

console.log(sum(...a));
