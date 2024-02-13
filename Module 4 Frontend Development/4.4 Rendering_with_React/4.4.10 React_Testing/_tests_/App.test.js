import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from "../src/App";
import Greeting from "../src/Greeting";

describe("Test App.js", () => {
  test("renders without crashing", () => {
    // Render the App component
    render(<App />);
    
    // Use screen query to check if the component is in the document
    const appComponent = screen.getByTestId("app-component");

    // Assert that the component is in the document
    expect(appComponent).toBeInTheDocument();
  });

  test("displays three greetings", () => {
    // Render the App component
    render(<App />);
    
    // Use screen query to check if all three greetings are in the document
    const greetings = screen.getAllByText(/Hello and/i);

    // Assert that there are three greetings in the document
    expect(greetings.length).toBe(3);
  });
});