
describe("Deve testar o cadastro de aula", () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

  it("Deve acessar a página de dar aulas", () => {
    cy.get('.give-classes').click()
  })

  it("Deve preencher o formulario de dar aulas", () => {
    cy.get('#name').type("Gilson Soares Sales")
    cy.get('#avatar').type("img/avatar.svg")
    cy.get('#whatsapp').type("(31) 9 9999-9999")
    cy.get('#bio').type("Professor de cypress.")
    cy.get('#subject').select("História")
    cy.get('#cost').type("30")
    cy.get('#week_day').select("Segunda-feira")
    cy.get('#from').type("10:00")
    cy.get('#to').type("11:00")
    cy.get('legend > button').click()
    cy.get(':nth-child(3) > .select-block > #week_day').select("Terça-feira")
    cy.get(':nth-child(3) > :nth-child(2) > #from').type("13:00")
    cy.get(':nth-child(3) > :nth-child(3) > #to').type("14:00")
    cy.get('footer > button').click()
  })
})