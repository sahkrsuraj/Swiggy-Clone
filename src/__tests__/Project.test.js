import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Projects from "../components/Projects";

test("Check if Projects component is rendered",()=>{
  render(<Projects/>); 
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
})

test("Check if ul is present",()=>{
  render(<Projects/>); 
  const link = screen.getAllByRole("list");
  expect(link.length).toBe(1);
})