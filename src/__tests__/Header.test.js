import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { DataContextProvider } from "../components/DataContextProvider";
import Header from "../components/Header";
import appStore from "../utils/appStore";
import MOCK_DATA from "../mockData/restauListMockData.json";

// Mock global.fetch for API mocking
global.fetch = jest.fn(()=>{
  return Promise.resolve({
    json: (()=>{
      return Promise.resolve({MOCK_DATA})
    })
  })
})

describe("",()=>{
  test("Should render with Login button",async ()=>{

    await act(async ()=>{
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <DataContextProvider >
              <Header/>
            </DataContextProvider>
          </Provider>
        </BrowserRouter>
      );
    });
  
    const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
  });

  test("Should render with LoginPage on button click",async ()=>{

    await act(async ()=>{
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <DataContextProvider >
              <Header/>
            </DataContextProvider>
          </Provider>
        </BrowserRouter>
      );
    });
  
    const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);
    const inputs = screen.getAllByRole("textbox")
    expect(inputs.length).toBe(4);
  });
  
  test("Should render with Cart button",async ()=>{
    await act(async ()=>{
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <DataContextProvider >
              <Header/>
            </DataContextProvider>
          </Provider>
        </BrowserRouter>
      );
    });
  
    const CartButton = screen.getByRole("link",{name:"Cart 0"});
    expect(CartButton).toBeInTheDocument();
  });
});