Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
   firstName: 'John',
   lastName: 'Dutton',
   email: 'johndutton@example.com',
   text: 'test' 
})   => {
cy.get('#firstName').type(data.firstName)
cy.get('#lastName').type(data.lastName)
cy.get('#email').type(data.email)
cy.get('#open-text-area').type(data.text)
cy.contains('button', 'Enviar'). click()
})