import {
  BUTTONS,
  COMMAND_OUTPUT,
  ERROR_MESSAGES,
  EXAMPLE_COMMANDS,
} from "../support/variables";

describe("QA - command view", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should run uname command and display output", () => {
    cy.get("mat-card-title").contains("qa-test");
    cy.get("mat-card-subtitle").contains("qa-test app is running!");
    cy.runCommand(EXAMPLE_COMMANDS.uname);
    cy.verifyCommandOutput(COMMAND_OUTPUT.uname);
  });

  it("should run uname -all command and display output", () => {
    cy.runCommand(EXAMPLE_COMMANDS.unameAll);
    cy.verifyCommandOutput(COMMAND_OUTPUT.unameAll);
  });

  it("should run list files command and display output", () => {
    cy.runCommand(EXAMPLE_COMMANDS.listFiles);
    cy.verifyCommandOutput(COMMAND_OUTPUT.listFiles);
  });

  it("should run each command and display output", () => {
    cy.runCommand(EXAMPLE_COMMANDS.echo);
    cy.verifyCommandOutput(COMMAND_OUTPUT.echo);
  });

  it("should run cat command and display output", () => {
    cy.runCommand(EXAMPLE_COMMANDS.cat);
    cy.verifyCommandOutput(COMMAND_OUTPUT.cat);
  });

  //BUG IMO - more details: README
  it.skip("should not allow to execute without given value", () => {
    cy.get("mat-form-field").find("input").should("be.empty");
    cy.contains(BUTTONS.execute).should("be.disabled");
  });

  describe("Unhappy paths", () => {
    const UNSUPPORTED_COMMAND = "test";
    const LONG_COMMAND = `$ printf "%sn" "This is a very long printf. How long is it?`;

    it("should throw error unsupported command", () => {
      cy.runCommand(UNSUPPORTED_COMMAND);
      cy.get("mat-icon");
      cy.verifyCommandOutput(ERROR_MESSAGES.unsupported);
      cy.reload();
      cy.runCommand(LONG_COMMAND);
      cy.get("mat-icon");
      cy.verifyCommandOutput(ERROR_MESSAGES.unsupported);
    });
  });
});
