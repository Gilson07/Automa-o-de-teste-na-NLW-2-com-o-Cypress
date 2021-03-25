const { wait } = require("@testing-library/react")

describe("Deve buscar professores cadastrados", () => {
  before(() => {
    cy.visit("http://localhost:3000/")
  })

  it("Deve acessar a página de aulas", () => {
    cy.get(".study").click()
  })

  it("Deve preencher o formulario da aula", () => {
    cy.get("#subject").select("História")
    cy.get("#week_day").select("Segunda-feira")
    cy.get("#time").type("10:00")
    cy.get("button").click()
    cy.scrollTo(0, 100) 
    cy.wait(5000)
  })

  it("Deve entrar em contato", () => {
    cy.get(":nth-child(1) > footer > a").click()
  })
})