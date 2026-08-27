import { describe, it, expect } from "vitest";
import { getByRole, render, screen, within } from "@testing-library/react";
import { createMemoryRouter, MemoryRouter, RouterProvider } from "react-router";
import Shop from "../components/Shop";
import Header from "../components/Header";
import HeaderActions from "../components/HeaderActions";
import App from "../App";
import { AppContext } from "../App";
import { useContext } from "react";
import userEvent from "@testing-library/user-event";

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
        <AppContext value={{ itemsInCart: [] }}>
          <HeaderActions />
        </AppContext>
      </MemoryRouter>,
    );
    const count = screen.getByTestId("item-count");
    expect(count.textContent).toBe("");
    rerender(
      <MemoryRouter>
        <AppContext value={{ itemsInCart: [{}, {}, {}] }}>
          <HeaderActions />
        </AppContext>
      </MemoryRouter>,
    );
    expect(count.textContent).toBe("3");
  });
});

describe("Shop", () => {
  it("Loads images correctly", async () => {
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>,
    );
    expect(
      await screen.findByRole("img", { name: "Farm Fresh Eggs - Dozen" }),
    ).toBeInTheDocument();
  });
  it("Shows correct number of items in cart indicator", async () => {
    const router = createMemoryRouter(
      [
        {
          path: "/",
          element: <App />,
          children: [{ path: "shop", element: <Shop /> }],
        },
      ],
      { initialEntries: ["/shop"] },
    );

    render(<RouterProvider router={router} />);

    const itemCards = await screen.findAllByTestId("item-card");
    const itemCount = await screen.findByTestId("item-count");

    // Enable addToCart button by incrementing item count.
    await userEvent.click(within(itemCards[0]).getByText("+"));
    const firstAddBtn = within(itemCards[0]).getByRole("button", {
      name: /add to cart/i,
    });
    expect(firstAddBtn).toBeEnabled();
    await userEvent.click(firstAddBtn);

    // expect indicator on cart to increment.
    expect(itemCount.textContent).toBe("1");

    // Repeat test for second card.
    await userEvent.click(within(itemCards[1]).getByText("+"));
    const secondAddBtn = within(itemCards[1]).getByRole("button", {
      name: /add to cart/i,
    });
    expect(secondAddBtn).toBeEnabled();
    await userEvent.click(secondAddBtn);

    // expect indicator to increment again.
    expect(itemCount.textContent).toBe("2");
  });
});
