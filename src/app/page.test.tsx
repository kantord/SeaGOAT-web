import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./page";

it("checks the search field functionality", async () => {
  render(<Home />);
  const searchInput = screen.getByRole("searchbox");
  expect(searchInput).toBeInTheDocument();
  fireEvent.change(searchInput, { target: { value: "Test search" } });
  expect(searchInput.value).toBe("Test search");
});
