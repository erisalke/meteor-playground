/// <reference types="Cypress" />

context('Global chat', () => {
  const userName = "user-name-new";
  const password = "password";

  beforeEach(() => {
    cy.login(userName, password);
  })

  it('creates account properly', () => {
    cy.get("#login-name-link").should("to.contain", userName);
  })

  // it('creates new global chat', () => {
  //   cy.get("[data-testid=menu]").contains('[placeholder="Add chat room"]').type("New chat")
  // })
})
