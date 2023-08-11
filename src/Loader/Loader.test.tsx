import { render, screen } from "@testing-library/react";
import { Loader } from "./Loader";

describe("Loader", () => {
  it("renders without crashing", () => {
    render(<Loader />);
    const loader = screen.getByRole("progressbar");
    expect(loader).toBeInTheDocument();
  });

  it("renders the loader correctly", () => {
    render(<Loader />);
    const loader = screen.getByRole("progressbar");
    expect(loader).toHaveClass("loader_wrapper");
  });
});
