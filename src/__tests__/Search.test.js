import { act } from "react-dom/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import appStore from "../utils/appStore";
import { DataContextProvider } from "../components/DataContextProvider";
import MOCK_DATA from "../mockData/restauListMockData.json";
import RestauContainer from "../components/RestauContainer";
import Header from "../components/Header";

// Mock global.fetch for API mocking
global.fetch = jest.fn(()=>{
  return Promise.resolve({
    json: (()=>{
      return Promise.resolve({MOCK_DATA})
    })
  })
})

test("Should change Restaurant Conatainer on Search",async ()=>{
  await act(async ()=>{
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <DataContextProvider >
            <Header/>
            <RestauContainer filterRestau={MOCK_DATA?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants}/>
          </DataContextProvider>
        </Provider>
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId("restauCard");
  expect(cardsBeforeSearch.length).toBe(9);

  const searchBtn = screen.getByTestId("searchBtn")
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);
  const cardsAfterSearch = screen.getAllByTestId("restauCard");
  console.log(cardsAfterSearch);
  expect(cardsAfterSearch.length).toBe(9);
})