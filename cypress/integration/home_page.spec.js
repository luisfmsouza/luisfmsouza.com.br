describe("Visit my personal homepage", () => {
  it("finds the name and description", () => {
    cy.visit("/");

    cy.contains("Luís Felipe Souza");
    cy.contains("Engineering Manager @ FindHotel. Based in Amsterdam 🇳🇱");

    cy.percySnapshot();
  });
});
