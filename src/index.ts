//Vill bara påpeka att jag har fått hjälp av en Youtube video för att kunna jobba vidare med detta projekt. Jag har dock INTE bara kopierat och klistrat in. Jag har  gått genom varje rad kod och förstått hur kodden är uppbygt och även skrivit om det på mitt sätt och det har varit till stor hjälp. 

//en klass och fyra instansvariabler som tillhör denna klass.
class Calculator {
  previousOperandTextElement: HTMLElement;
  currentOperandTextElement: HTMLElement;
  currentOperand: string;
  previousOperand: string;
  operation: string | undefined;

  //en konstruktor för klassen. Det tar emot två argument, båda av typen "HTMLElement", som representerar elementen.
  constructor(
    previousOperandTextElement: HTMLElement,
    currentOperandTextElement: HTMLElement
  ) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  //metoder i calculator klassen.
  clear(): void {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete(): void {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number: string): void {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation: string): void {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  //denna kod definierar en metod som heter "compute" i en kalkylator-klassen, vilken utför aritmetiska beräkningar baserat på den aktuella och tidigare operanden samt den valda operationen. Den konverterar först operanderna från strängar till nummer, utför sedan den motsvarande aritmetiska operationen baserat på den valda operationen, och lagrar resultatet i en variabel "computation". Om operanderna inte är giltiga nummer eller om ingen operation är vald, returneras utan att något räknas ut. Det här är en metod som jag fått hjälp från youtube videos och lite mer advancerat än det vi har lärt oss.
  compute(): void {
    let computation: number;
    const prev: number = parseFloat(this.previousOperand);
    const current: number = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation.toString();
    this.operation = undefined;
    this.previousOperand = "";
  }

  getDisplayNumber(number: string | number): string {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay: string;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay(): void {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = "";
    }
  }
}

//hämtar element från HTML filen och lägger addEventListener för varje knapp.
const numberButtons = document.querySelectorAll<HTMLElement>("[data-number]");
const operationButtons =
  document.querySelectorAll<HTMLElement>("[data-operation]");
const deleteButton = document.querySelector<HTMLElement>("[data-delete]")!;
const allClearButton = document.querySelector<HTMLElement>("[data-all-clear]")!;

const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
) as HTMLElement;

const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
) as HTMLElement;

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

const equalsButton = document.querySelector("[data-equals]") as HTMLElement;

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

//det här skapar en kalkylator element som hämtar en bild som finns på src/images.mapen
const calculatorElement = previousOperandTextElement.parentElement;
const imgUrl = new URL("images/pic.jpg", import.meta.url);
if (calculatorElement !== null) {
  calculatorElement.style.backgroundImage = `url(${imgUrl})`
}