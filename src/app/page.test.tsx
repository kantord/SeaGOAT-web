import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./page";

it("shows results from SeaGOAT when typing into the search box", async () => {
  render(<Home />);
  const searchInput = screen.getByRole("searchbox");
  expect(searchInput).toBeInTheDocument();

  fireEvent.change(searchInput, {
    target: { value: "where do we handle foobar" },
  });
  expect(searchInput).toHaveValue("where do we handle foobar");

  const resultsWithFoobar = screen.getAllByText(/foobar/i);

  resultsWithFoobar.forEach((article) => {
    expect(article.closest("article")).toBeVisible();
  });
  expect(resultsWithFoobar.length).toBeGreaterThan(0);
});

it("does not display any results before the user searches for them", async () => {
  render(<Home />);
  const searchInput = screen.getByRole("searchbox");
  expect(searchInput).toBeInTheDocument();

  const resultsWithFoobar = screen.queryAllByText(/foobar/i);
  expect(resultsWithFoobar.length).toEqual(0);
});
