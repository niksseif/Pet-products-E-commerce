describe('Product List Page test', () => {
        beforeEach(() => {
            cy.intercept(
              "GET", 
              /http:\/\/localhost:3000\/products\?name_like=.*/,
              {
                statusCode:200,
                fixture : "allProducts"
              } 
            ).as('getAllProducts')
            cy.visit('http://localhost:3001/products');
            cy.wait('@getAllProducts');
    });
  
    it('sets the document title correctly', () => {
      cy.title().should('eq', 'Explore our Pet products page - Pet products');
    });
  
  })