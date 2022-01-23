import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Search from "../../pages/buscar";
import { BuscarProvider } from "../../store/buscar";



describe("At the Search Page shows the:", () => {
    it("Title", () => {
      render(
          <BuscarProvider>
                <Search />
          </BuscarProvider>
      );
      const pageTitle = screen.getByText("Encontre o rolê perfeito");
      expect(pageTitle).toBeInTheDocument();
    }),
    it("Search Input", () => {
      const setup = () => {
        const utils = render(<BuscarProvider>
          <Search />
      </BuscarProvider>)
        const input = utils.getAllByTestId('input');
        return {
          input,
          ...utils,
        }
      };
  

      const {input} = setup();
      expect(input[0].querySelector('input')).toBeInTheDocument();
    //  userEvent.type(input[0].querySelector('input'), 'london')
    //  expect(input[0].querySelector('input').value).toEqual('london');
    }),
    it("Search Button", () => {
  
        render(<BuscarProvider>
          <Search />
      </BuscarProvider>)
 
      const button = screen.getByTestId('searchButton');
     expect(button).toBeInTheDocument();
    
    })

});

