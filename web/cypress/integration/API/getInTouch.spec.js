const { createYield } = require("typescript");

describe("Deve testar a funcionalidade de entrar em contato", () => {
  it("Deve acessar a página de entrar em contato", () => {
    cy.request({
      url: '/connections',
      method: 'POST',
      body: {
        user_id: 10
      }
    }).as('response')
    cy.get('@response').then(res => {
      expect(res.status).to.be.equal(201)
      expect(res.statusText).to.be.equal('Created')
      expect(res.requestBody).to.be.equal('{"user_id":10}')
    })
  })
});