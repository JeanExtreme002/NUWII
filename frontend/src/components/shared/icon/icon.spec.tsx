import { render, screen } from "@testing-library/react";

import { Icon } from "./icon";

describe("<Icon />", () => {
  it("should render an image", () => {
    render(<Icon name="404" width={ 100 } height={ 100 }/>);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
