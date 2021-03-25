const { createYield } = require("typescript");

describe("Deve testar a busca por aulas", () => {
  it("Deve buscar uma aula", () => {
    cy.request({
      url: "/classes",
      method: "GET",
      qs: {
        subject: "História",
        week_day: "1",
        time: "10:00"
      }
    }).as("response")
    cy.get("@response").then(res => {
      expect(res.status).to.be.equal(200)
      expect(res.statusText).to.be.equal("OK")
      expect(res.body.length).to.be.greaterThan(1)
    })
  })
});