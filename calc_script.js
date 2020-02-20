<script>

  function back(calculator) {
    size = calculator.display.value.length;
    calculator.display.value = calculator.display.value.substring(0, size-1);
  }

  function clear(calculator) {
    size = calculator.display.value.length;
    calculator.display.value = ''
  }

  function process(calculator) {

    if (calculator.display.value.includes("%")) {

      size = calculator.display.value.length;
      n = Number(calculator.display.value.substring(0, size-1));
      calculator.display.value = n/100;
    } else {
      calculator.display.value = eval(calculator.display.value);
    }
}

</script>
