describe('one: One component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=one--primary&args=name;age;test:false;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to One!');
    });
});
