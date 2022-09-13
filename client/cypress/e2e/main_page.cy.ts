// describe("the main page", () => {
//   beforeEach(() => {
//     cy.visit("/");
//     cy.get("#lang-select").select("en");
//   });
// });

describe("ceasar cipher", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#lang-select").select("en");

    cy.intercept(
      { method: "POST", url: "/api" },
      { fixture: "cipher-response.json" }
    ).as("encrypt");

    cy.get("#encrypt-action").click();
    cy.get("#cipher-select").select("ceasar");
    cy.get("#msg-input").type("test message");
    cy.get("#action-btn").click();
  });

  it("creates proper request", () => {
    cy.get("@encrypt")
      .its("request.body")
      .should("deep.equal", {
        action: "encrypt",
        text: "test message",
        cipher: "ceasar",
        params: {
          shift: 1,
          alphabet: "en",
        },
      });
  });
});

describe("switch cipher", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#lang-select").select("en");

    cy.intercept(
      { method: "POST", url: "/api" },
      { fixture: "cipher-response.json" }
    ).as("encrypt");

    cy.get("#encrypt-action").click();
    cy.get("#cipher-select").select("switch");
    cy.get("#msg-input").type("test message");
    cy.get("#action-btn").click();
  });

  it("creates proper request", () => {
    cy.get("@encrypt")
      .its("request.body")
      .should("deep.equal", {
        action: "encrypt",
        text: "test message",
        cipher: "switch",
        params: {
          shift: 1,
          alphabet: "en",
          switchKey: "ga-de-ry-po-lu-ki",
        },
      });
  });
});
