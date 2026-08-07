import { describe, it, expect } from "vitest";
import { getByRole, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Shop from "../components/Shop";
import Header from "../components/Header";

describe("Header", () => {
  it("Renders correctly as per prop values", () => {
    // Must use MemoryRouter to simulate the routes.
    render(
      <MemoryRouter>
        <Header
          farmName="A Farm Called Quest"
          farmAddress="123 Compton, USA"
          logo="/src/assets/img/logo.png"
        />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("heading", { name: /a farm called quest/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/123 compton, usa/i, { selector: "address" }),
    ).toBeInTheDocument();
    const img = screen.getByRole("img", { name: /logo/i });
    const imgPath = new URL(img.src, window.location.origin).pathname;
    expect(imgPath).toBe("/src/assets/img/logo-bare.png");
    // TODO: fix this test to avoid implementation detail "logo-bare.png".
  });
});

describe("Shop", () => {
  it("Images load correctly", () => {
    render(<Shop />);
    expect(screen.getByRole("img", { name: "eggs" })).toBeInTheDocument();
    // TODO: fix this test to avoid implementation detail "eggs".
  });
});
