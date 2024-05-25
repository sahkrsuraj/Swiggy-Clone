import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestauCard from "../components/RestauCard";
import MOCK_DATA from "../mockData/restauCardMock.json";


test("Should render RestauCard component with props data",()=>{
  render(<RestauCard restauData={MOCK_DATA}/>)
  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
});