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

  // file names are visible
  expect(screen.getByText("CHANGELOG.md")).toBeVisible();
  expect(screen.getByText("seagoat/utils/server.py")).toBeVisible();
  expect(
    screen.getByText(
      "environment. For example to test the development version of the",
    ),
  ).toBeVisible();

  // code lines are visible
  expect(
    screen.getByText("after this malformed commit message:"),
  ).toBeVisible();

  expect(
    screen.getByText("after this malformed commit message:"),
  ).toBeVisible();

  // line numbers are visible
  expect(screen.getByText("62")).toBeVisible();
  expect(screen.getByText("89")).toBeVisible();
});

it("does not display any results before the user searches for them", async () => {
  render(<Home />);
  const searchInput = screen.getByRole("searchbox");
  expect(searchInput).toBeInTheDocument();

  const resultsWithFoobar = screen.queryAllByText(/foobar/i);
  expect(resultsWithFoobar.length).toEqual(0);
});
