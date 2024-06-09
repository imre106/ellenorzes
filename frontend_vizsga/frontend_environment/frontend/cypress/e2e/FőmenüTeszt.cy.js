describe('Betöltés teszt', () => {

  beforeEach('',()=>{
    cy.visit('http://localhost:5173')
  })

  it('Main komponens címsor 1 szöveg teszt',()=>{
    cy.get('h1').should('contains.text','Trolibusz hálózat')
  })

  it('Menü Főoldal menüpont teszt',()=>{
    cy.get('.btn').should('have.text','Főoldal')
  })

  it('Menü Járatok menüpont teszt',()=>{
    cy.get('.menu > li:nth-child(1) > a:nth-child(1)').should('have.text','Járatok')
  })

  it('Menü Új járat menüpont teszt',()=>{
    cy.get('.menu > li:nth-child(2) > a:nth-child(1)').should('have.text','Új járat')
  })

  it('Járatok menüpont kattintás teszt', () => {
    cy.get('.menu > li:nth-child(1) > a:nth-child(1)').should('have.text','Járatok').click()
  })

  it('Főoldal menüpont kattintás teszt', () => {
    cy.get('.btn').should('have.text','Főoldal').click()
  })

  it('Új járat menüpont kattintás teszt', () => {
    cy.get('.menu > li:nth-child(2) > a:nth-child(1)').should('have.text','Új járat').click()
    cy.get('input.input:nth-child(2)').type('120')
    cy.get('input.input:nth-child(4)').type('8C')
    cy.get('button.btn').click()
  })

  it('Új járat menüpont kattintás teszt', () => {
    cy.get('.menu > li:nth-child(2) > a:nth-child(1)').should('have.text','Új járat').click()
    cy.get('input.input:nth-child(2)').type('121')
    cy.get('input.input:nth-child(4)').type('23')
    cy.get('select.select:nth-child(6)').select('Metró')
    cy.get('select.select:nth-child(8)').select('Nem')
    cy.get('button.btn').click()
  })

})