  function back(calculator) {
    size = calculator.display.value.length;
    calculator.display.value = calculator.display.value.substring(0, size-1);
  }

  function clear(calculator) {
    calculator.display.value = '';
  }

  function process(calculator) {
    try {
        calculator.display.value = eval(calculator.display.value);
    } catch (e) {
        alert("Invalid operation");
        calculator.display.value = "";
    }
  }
