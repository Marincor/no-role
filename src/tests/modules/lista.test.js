import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import List from "../../pages/lista";
import { BuscarProvider } from "../../store/buscar";

describe("At the List Page shows the:",() => {
    it('List title', ()=>{
        render(
            <BuscarProvider>
                  <List />
            </BuscarProvider>
        );
        const pageTitle = screen.getByText("Sua lista");
        expect(pageTitle).toBeInTheDocument();
    })
})