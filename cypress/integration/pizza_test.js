describe('Lambda Eats', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
    })

    const nameInput = () => cy.get('input[name=name]');
    const specialInput = () => cy.get('input[name=special]');
    const sizePicker = () => cy.get('select[name=size]');
    const sauceChoice = () => cy.get('input[name=sauce]:first')
    const pepCheck = () => cy.get('input[name=pepperoni]');
    const sausageCheck = () => cy.get('input[name=sausage]');
    const baconCheck = () => cy.get('input[name=bacon]');
    const meatCheck = () => cy.get('input[name=meatballs]');
    const submitBtn = () => cy.get('button[id="order-button"]');

    it('Checks if you can add text to the box', () => {
        nameInput().type('testName');
        nameInput().should('have.value', 'testName');
        specialInput().type('testSpecial');
        specialInput().should('have.value', 'testSpecial');
    })


    it('Checks that you can select multiple toppings', () => {
        pepCheck().click().should('be.checked');
        sausageCheck().click().should('be.checked');
        baconCheck().click().should('be.checked');
        meatCheck().click().should('be.checked');
    })

    it('Checks if you can submit the pizza', () => {
        nameInput().type('testName');
        sizePicker().select('XL');
        sauceChoice().click();
        pepCheck().click().should('be.checked');
        sausageCheck().click().should('be.checked');
        specialInput().type('Make it medium rare');
        submitBtn().click();
        nameInput().should('have.value', '');
    })

})