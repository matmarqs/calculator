function add(a, b) {
  return a + b;
}

function operator(a, op, b) {
  switch (op) {
    case "+":
      return a + b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "-":
      return a - b;
    default:
      console.error("operator: Not an operator");
  }
}
