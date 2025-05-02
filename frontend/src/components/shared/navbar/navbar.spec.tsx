import { render, screen } from "@testing-library/react";

import { config } from "@/lib/config";

import { NavBar } from "./navbar";

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe("<NavBar />", () => {
  it("should render with the logo and a tab nav for the website features", () => {
    const { container } = render(<NavBar/>);

    expect(screen.getByText(config.website.title)).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();

    expect(container.querySelector("nav")).toBeInTheDocument();
    expect(container.querySelectorAll("li").length).toBe(4);
  });
});
