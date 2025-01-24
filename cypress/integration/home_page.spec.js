describe("Visit my personal homepage", () => {
  it("finds the name and description", () => {
    cy.visit("/");

    cy.contains("Luís Felipe Souza");
    cy.contains("Based in the sunny Valencia, Spain 🇪🇸");

    cy.percySnapshot();
  });
});
