import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Page from "../page";

describe("Eligibility Page", () => {
  it("renders heading and textarea", () => {
    render(<Page />);

    expect(
      screen.getByText("Eligibility Check")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Describe your claim concern...")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /analyze claim/i })
    ).toBeInTheDocument();
  });
});

describe("Eligibility Page Endpoint", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it("calls analyze endpoint", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      json: async () => [],
    });

    render(<Page />);

    fireEvent.change(
      screen.getByPlaceholderText("Describe your claim concern..."),
      {
        target: { value: "I injured my back at work" },
      }
    );

    fireEvent.click(
      screen.getByRole("button", { name: /analyze claim/i })
    );

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        "/api/analyzeClaim",
        expect.objectContaining({
          method: "POST",
        })
      );
    });
  });
});

it("renders returned services", async () => {
  (fetch as jest.Mock).mockResolvedValue({
    json: async () => [
      {
        key: "wsib",
        name: "WSIB Claim",
        probability: 0.85,
      },
    ],
  });

  render(<Page />);

  fireEvent.click(
    screen.getByRole("button", { name: /analyze claim/i })
  );

  expect(
    await screen.findByText("WSIB Claim")
  ).toBeInTheDocument();

  expect(
    screen.getByText(/85.0%/)
  ).toBeInTheDocument();
});