//Written my tests

describe('Pizza App', function () {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })
    it('sanity checks', () => {
        expect(10).to.equal(10)
        expect(1 + 2).to.equal(4 - 1)
        expect(1 + 2).to.equal(3)
    })
    const nameInput = () => cy.get('input[name="name"]')
    const sizeInput = () => cy.get('select')
    const toppings = () => cy.get('[type="checkbox"]')
    const orderBtn = () => cy.get('button')

    it('can UI in name, toppings, size and submit', () => {
        orderBtn()
            .should('be.disabled')
        nameInput()
            .should('have.value', '')
            .type('Test Name')
            .should('have.value', 'Test Name')
        sizeInput()
            .should('have.value', '')
            .select('18-inch')
            .should('have.value', '18')
        toppings()
            .check(['pepperoni', 'onion', 'extraCheese'])
            .should('be.checked')
        orderBtn()
            .should('be.enabled')
            .click()
    })
})