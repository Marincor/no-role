import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../../pages/sobre";
import { BuscarProvider } from "../../store/buscar";

describe("At the About Page shows the:",() => {
    it('About texts', ()=>{
        render(
            <BuscarProvider>
                  <About />
            </BuscarProvider>
        );
        const text = screen.getByText("Marincor");
        expect(text).toBeInTheDocument();
    })
})