const { createYield } = require("typescript");

describe("Deve testar o cadastro de aula", () => {
  it("Deve cadastrar uma aula", () => {
    cy.request({
      url: '/classes',
      method: 'POST',
      body: {
        name: "Gilson Soares Sales", 
        avatar: "img/avatar.svg", 
        whatsapp: "(31) 9 9999-9999",
        cost: 30,
        bio: "Professor de cypress.",
        schedule: [{week_day: "1", from: "10:00", to: "11:00"}, {week_day: "2", from: "10:00", to: "11:00"}],
        subject: "História"
      }
    }).as('response')
    cy.get('@response').then(res => {
      expect(res.status).to.be.equal(201)
      expect(res.statusText).to.be.equal('Created')
    })
  })
});