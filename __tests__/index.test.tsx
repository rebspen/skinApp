import { render, screen, fireEvent, act } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import { SessionProvider } from "next-auth/react";

const productsMock = {
  products: [
    {
      name: "CeraVe SA Smoothing Cleanser",
      ingredients: [
        "Sodium Lauroyl Sarcosinate",
        "Cocamidopropyl Hydroxysultaine",
        "Glycerin",
        "Niacinamide",
        "Gluconolactone",
        "Sodium Methyl Cocoyl Taurate",
      ],
      id: 1,
    },
    {
      name: "Effaclar Purifying Cleansing Gel by La Roche-Posay",
      ingredients: ["Water", "Decyl Glycoside"],
      id: 2,
    },
  ],
};

describe("Home", () => {
  it("renders a heading", () => {
    render(
      <SessionProvider session={null}>
        <Home {...productsMock} />
      </SessionProvider>
    );

    const heading = screen.getByRole("heading", {
      name: /Products Page/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders all products", () => {
    render(
      <SessionProvider session={null}>
        <Home {...productsMock} />
      </SessionProvider>
    );
    const link1 = screen.queryByRole("link", {
      name: "Effaclar Purifying Cleansing Gel by La Roche-Posay",
    });
    const link2 = screen.queryByRole("link", {
      name: "CeraVe SA Smoothing Cleanser",
    });

    expect(link1).toBeInTheDocument();
    expect(link2).toBeInTheDocument();
  });

  it("search with", async () => {
    render(
      <SessionProvider session={null}>
        <Home {...productsMock} />
      </SessionProvider>
    );

    const input = screen.getByPlaceholderText("alcohol...");
    await act(async () => {
      fireEvent.input(input, {
        target: {
          value: "water",
        },
      });
    });

    const link1 = screen.queryByRole("link", {
      name: "Effaclar Purifying Cleansing Gel by La Roche-Posay",
    });
    const link2 = screen.queryByRole("link", {
      name: "CeraVe SA Smoothing Cleanser",
    });

    expect(link1).toBeInTheDocument();
    expect(link2).not.toBeInTheDocument();
  });
});
