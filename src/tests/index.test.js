import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Home from "../pages/index";


describe("At the Home Page shows the:", () => {
  it("Banner Image", () => {
    render(<Home />);
    const bannerImage = screen.getByTestId("home__banner");

    expect(bannerImage).toBeInTheDocument();
  });
  it("First title", () => {
    render(<Home />);
    const homeTitle = screen.getByText("Qual o seu rolê?");
    expect(homeTitle).toBeInTheDocument();
  });

  it("Topic Texts", () => {
    render(<Home />);
    const firstTopic = screen.getByText(
      "Marque os lugares que já conheceu - Em breve"
    );
    const secondTopic = screen.getByText("Marque os lugares que quer conhecer");

    expect(firstTopic).toBeInTheDocument();
    expect(secondTopic).toBeInTheDocument();
  });
  it("Topic Icons", () => {
    render(<Home />);
    const iconLocation = screen.getByTestId("iconLocation");
    const iconAddLocation = screen.getByTestId("iconAddLocation");

    expect(iconLocation).toBeInTheDocument();
    expect(iconAddLocation).toBeInTheDocument();
  });

});
