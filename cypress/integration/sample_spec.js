/* eslint-disable no-undef */

describe("My First Test", function() {
  it("Does not do much!", function() {
    cy.visit("http://localhost:3000");

    cy.contains("Add").click();
    cy.contains("In OrderPage: 1");
    cy.contains("Add").click();
    cy.contains("In OrderPage: 2");
  });
});
