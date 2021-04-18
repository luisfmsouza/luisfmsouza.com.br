describe("Visit my personal homepage", function () {
  it("finds the name and description", function () {
    cy.visit("/");

    cy.contains("Luís Felipe Souza");
    cy.contains("Front-end Engineer @ FindHotel. Based in Amsterdam 🇳🇱");

    cy.percySnapshot();
  });
});
