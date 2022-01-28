import { BUTTONS } from "./variables";

Cypress.Commands.add("runCommand", (commandName) => {
  cy.get("mat-form-field").find("input").click().type(commandName);
  cy.contains(BUTTONS.execute).click();
});

Cypress.Commands.add("verifyCommandOutput", (output) => {
  cy.get("mat-card").find("pre").should("have.text", output);
});
