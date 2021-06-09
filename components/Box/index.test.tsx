import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Box from "./index";

it("renders the icon button", () => {
  render(<Box name="box" />);
  expect(screen.queryByText("box"));
});
