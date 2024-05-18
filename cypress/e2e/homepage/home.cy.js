// This test contains 2 layout component(Header, Footer)
// and Featuredproducts, Hero, Faq, and testimonials
describe('Homepage test', () => {
  beforeEach(() => {
    cy.intercept(
      "GET", 
      "http://localhost:3000/featured_products",
      {
        statusCode:200,
        fixture : "featured_products"
      } 
    ).as('getFeaturedProducts')

    cy.visit('http://localhost:3001');
    cy.wait('@getFeaturedProducts').its('response.body').should('be.an', 'array').and('have.length', 2);
  });

  it('renders the logo and header text', () => {
    cy.get('header').within(() => {
      cy.get('img').should('have.attr', 'src');
      cy.get('span').contains('Pet Products');
    });
  });

  it('displays the correct heading and text', () => {
    cy.get('section').as('HeroSection');
    cy.get('@HeroSection').find('h1').should('contain', 'The Ultimate Pet products Store');
    cy.get('@HeroSection').find('p').should('contain', 'Pet products is the worlds most popular pet products store');
  });

  it('fetches and displays product cards', () => {
    cy.wait('@getFeaturedProducts');
    cy.get('.flex.flex-wrap').children().should('have.length.at.least', 1);
  });

  it('displays the correct header text', () => {
    cy.get('section h1').should('contain', 'Feature products').and('have.class', 'underline');
  });

  it('renders the testimonials section', () => {
    cy.get('section')
      cy.get('h1').should('contain', 'Testimonials about Pet Products').and('have.class', 'underline');
      cy.get('figure').should('have.length', 4);
  });

  it('renders all FAQ accordion items correctly', () => {
    cy.get('#accordion-flush').children().should('have.length', 4);
    cy.get('#accordion-flush').children().each(($el, index) => {
      cy.wrap($el).as(`accordionItem${index}`);
    });
  });
})
