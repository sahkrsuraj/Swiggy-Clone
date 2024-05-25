import { sum } from "../../Assignment/Assignment-13/sum"


test("Sum of two numbers", ()=>{
  const result = sum(12,9);
  // assertion
  expect(result).toBe(21);
})