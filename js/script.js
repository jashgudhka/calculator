class Calculator {
  Calculator(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    /*Called the clear() method because as a calculator is created we want the screen to be empty.
        And we want to set everything to the default values. */
    this.clear();
  }
  // Function to clear out the calculator screen.
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  // Function to delete the last number, for eg: delete 9 from '69'.
  delete() {}

  // This will add a number as you type the number in the calculator or when a operation takes place.
  appendNumber(number) {}

  //   This will select the operation you choose to perform.
  chooseOperation(operation) {}

  //   After you're selecting the operand, this will perform the operation in BTS.
  compute() {}

  updateDisplay() {
    // This will update the inner text of the element. It will get the number from the append number which updated the currentOpreand.
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerHTML);
    calculator.updateDisplay();
    console.log(button);
  });
});
