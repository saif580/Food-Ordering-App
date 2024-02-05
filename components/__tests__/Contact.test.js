import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  beforeAll(() => {
    console.log("Before all");
  });

  beforeEach(() => {
    console.log("Before each call");
  });

  afterAll(() => {
    console.log("after all");
  });

  afterEach(() => {
    console.log("after to each call");
  });

  test("Should load contact us component", () => {
    //Render it on react dom
    render(<Contact />);
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside my contact component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load placeholder with name inside the input component", () => {
    render(<Contact />);
    const namePlaceholder = screen.getByPlaceholderText("name");

    //Assertion
    expect(namePlaceholder).toBeInTheDocument();
  });
});
