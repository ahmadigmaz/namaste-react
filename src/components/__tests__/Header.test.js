import { Provider } from "react-redux"
import Header from "../Header"
import { fireEvent, render, screen } from "@testing-library/react"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"

it("should render the login button on the header", ()=>{
    render(
    <BrowserRouter>
      <Provider store={appStore}>
       <Header/>
      </Provider>
    </BrowserRouter>
 );
    const loginButton = screen.getByRole("button")
    expect(loginButton).toBeInTheDocument()
});

it("should render the login button on the header", ()=>{
    render(
    <BrowserRouter>
      <Provider store={appStore}>
       <Header/>
      </Provider>
    </BrowserRouter>
 );
    const logoutButton = screen.getByRole("button", {name:"Logout"});
    fireEvent.click(logoutButton);
    const loginButton = screen.getByRole("button", {name:"Login"});
    expect(loginButton).toBeInTheDocument()
});