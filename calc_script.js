//backspace
  function back(calculator) {
    size = calculator.display.value.length;
    calculator.display.value = calculator.display.value.substring(0, size-1);
  }

//clear input
  function clear(calculator) {
    calculator.display.value = '';
  }

//to evaluate the inputs
  function process(calculator) {
    try {
        calculator.display.value = eval(calculator.display.value);
    } catch (e) {
        alert("Invalid operation");
        calculator.display.value = "";
    }
  }
