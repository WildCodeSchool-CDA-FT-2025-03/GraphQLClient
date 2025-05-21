import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import Card from "./Card";

describe("Card wines display", () => {
  it("Should display the name and tannin", async () => {
    const mocktest = { name: "vin", tanin: "tanin" };
    await render(<Card wine={mocktest} />);

    const h2 = screen.getByRole("heading", { level: 2 });
    expect(h2).toHaveTextContent("vin");

    const p = screen.getByRole("paragraph");
    expect(p).toHaveTextContent("tanin");
  });

  it("Should display the only the name", async () => {
    const mocktest = { name: "vin" };
    await render(<Card wine={mocktest} />);

    const h2 = screen.getByRole("heading", { level: 2 });
    expect(h2).toHaveTextContent("vin");

    const p = screen.getAllByRole("paragraph");
    expect(p[0]).toHaveTextContent("Aucune info");
  });
});
