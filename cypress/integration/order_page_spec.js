/* eslint-disable no-undef */

describe("Order Page", function() {
  it("increments a counter", function() {
    cy.visit("http://localhost:3000");

    cy.contains("Add").click();
    cy.contains("In OrderPage: 1");
    cy.contains("Add").click();
    cy.contains("In OrderPage: 2");
  });

  it("loads the user", function() {
    cy.visit("http://localhost:3000");

    cy.contains("userId: 1");
  });
});
