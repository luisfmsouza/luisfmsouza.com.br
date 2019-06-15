describe("Visit my personal homepage", function() {
  it("finds the name and description", function() {
    cy.visit("/");

    cy.contains("Luís Felipe Souza");
    cy.contains(
      "Front-end Developer, traveler, beer lover and entrepreneur in my free time."
    );
  });
});
