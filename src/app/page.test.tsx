import { fireEvent, getByText, render, screen } from "@testing-library/react";
import Home from "./page";

it("shows results from SeaGOAT when typing into the search box", async () => {
  render(<Home />);
  const searchInput = screen.getByRole("searchbox");
  expect(searchInput).toBeInTheDocument();

  fireEvent.change(searchInput, {
    target: { value: "create vector embeddings for chunks" },
  });
  expect(searchInput).toHaveValue("create vector embeddings for chunks");
  expect(screen.getByText("CHANGELOG.md")).toBeVisible();
  expect(screen.getByText("seagoat/utils/server.py")).toBeVisible();
  expect(
    screen.getByText(
      'help="Disable formatting. Automatically enabled when part of a bash pipeline.",',
    ),
  ).toBeVisible();
  expect(
    screen.getByText("or create a pull request to fix a problem."),
  ).toBeVisible();
});

it("does not display any results before the user searches for them", async () => {
  render(<Home />);
  const searchInput = screen.getByRole("searchbox");
  expect(searchInput).toBeInTheDocument();

  const resultsWithFoobar = screen.queryAllByText(/foobar/i);
  expect(resultsWithFoobar.length).toEqual(0);
});
