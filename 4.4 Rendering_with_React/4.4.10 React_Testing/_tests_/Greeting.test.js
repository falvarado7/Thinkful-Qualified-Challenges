import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from "../src/App";
import Greeting from "../src/Greeting";

describe("Test Greeting.js", () => {
  test("renders name and greeting props correctly", () => {
    // Render the Greeting component with specific props
    render(<Greeting name="Jane" greeting="it's a pleasure to meet you" />);

    // Use screen queries to check if the rendered text contains the name and greeting
    const greetingText = screen.getByText(/Hello and it's a pleasure to meet you, Jane!/i);

    // Assert that the greeting text is in the document
    expect(greetingText).toBeInTheDocument();
  });
});
