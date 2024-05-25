import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import LoginPage from "../components/LoginPage";
import { DataContextProvider } from "../components/DataContextProvider";
import MOCK_DATA from "../mockData/restauListMockData.json";

global.fetch = jest.fn(()=>{
  return Promise.resolve({
    json: (()=>{
      return Promise.resolve({MOCK_DATA})
    })
  })
})

test("Should render LoginPage", async ()=>{
  await act(async ()=>{
    render(
      <DataContextProvider >
        <LoginPage/>
      </DataContextProvider>
    );
  });
  const inputs = screen.getAllByRole("textbox");
  expect(inputs.length).toBe(3);
})