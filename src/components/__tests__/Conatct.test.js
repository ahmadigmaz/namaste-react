import { render, screen } from "@testing-library/react"
import Contact from "../ConatctUs";
import "@testing-library/jest-dom";

describe("testCases to test the contact us page",() => {

test("to test contact Us page is rendering or not", () => {
render(<Contact/>)
const heading = screen.getByRole("heading");
expect(heading).toBeInTheDocument()
})

it("to test that button is rendering inside the contact Us page or not", ()=>{
    render(<Contact/>)
    const button  = screen.getByRole("button");
    //second way to find anything on scree
    // const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
})

test("to test that input box  is rendering inside the contact Us page or not", ()=>{
    render(<Contact/>)
    //getting by placeholder name
    const input  = screen.getByPlaceholderText("Name")
    expect(input).toBeInTheDocument();
})
//it and test are the same thing
it("testing that all the two input boxes are loaded or not", () => {
 render(<Contact/>)
 const inputBoxes = screen.getAllByRole("textbox");
 expect(inputBoxes.length).toBe(2)
}) 

})