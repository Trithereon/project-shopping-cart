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
          itemsInCart={[]}
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
    expect(img).toBeInTheDocument();
  });
  it("Displays item count correctly on Cart nav button", () => {
    const { rerender } = render(
      <MemoryRouter>
        <Header itemsInCart={[]}></Header>
      </MemoryRouter>,
    );
    const count = screen.getByTestId("itemCount");
    expect(count.textContent).toBe("");
    rerender(
      <MemoryRouter>
        <Header itemsInCart={[{}, {}, {}]}></Header>
      </MemoryRouter>,
    );
    expect(count.textContent).toBe("3");
  });
});

describe("Shop", () => {
  it("Images load correctly", async () => {
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>,
    );
    expect(
      await screen.findByRole("img", { name: "Farm Fresh Eggs - Dozen" }),
    ).toBeInTheDocument();
  });
});
