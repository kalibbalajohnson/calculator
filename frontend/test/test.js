// import React from "react";
// import Calculate from "../src/calculate";
// const { hanldeCalculate } = Calculate();

const hanldeCalculate = (selectedOperation, operandOne, operandTwo) => {
  let calculatedResult;
  switch (selectedOperation) {
    case "+":
      calculatedResult = parseInt(operandOne) + parseInt(operandTwo);
      break;
    case "-":
      calculatedResult = parseInt(operandOne) - parseInt(operandTwo);
      break;
    case "*":
      calculatedResult = parseInt(operandOne) * parseInt(operandTwo);
      break;
    case "/":
      calculatedResult = parseInt(operandOne) / parseInt(operandTwo);
      break;
    default:
      calculatedResult = 0;
  }
  return calculatedResult;
};

import { assert } from "chai";
import { describe, it } from "mocha";
describe("Should return the operation depending on the operator passed", function () {
  it("1+1=2", function () {
    assert.equal(hanldeCalculate("+", "1", "1"), 2);
  });
  it("10-5=5", function () {
    assert.equal(hanldeCalculate("-", "10", "5"), 5);
  });
  it("20*5=100", function () {
    assert.equal(hanldeCalculate("*", "20", "5"), 100);
  });
  it("10/5=2", function () {
    assert.equal(hanldeCalculate("/", "10", "5"), 2);
  });
});