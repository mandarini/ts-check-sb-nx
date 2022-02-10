describe('two: Two component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=two--primary&args=name;age;test:false;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Two!');
    });
});
