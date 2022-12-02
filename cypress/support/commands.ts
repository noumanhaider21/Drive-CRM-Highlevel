// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// //

import cypressConfig from "../../cypress.config"
import loginPage from "../Page Objects/loginPage"

const objlogin = new loginPage

// -- This is a parent command --
Cypress.Commands.add('loginUI', (username, password) => {
    
// cy.visit('https://crm.driveshopsdev.app/')
// cy.xpath(objlogin.username).type(usernmae)
// cy.xpath(objlogin.password).type(password)
// cy.get(objlogin.login).click()

cy.session([username, password], () => {
    cy.request({
      method: 'POST',
      url: 'https://crm-be.driveshopsdev.app/api/core/init',
      body: { username, password },
    }).then(({ body }) => {
      window.localStorage.setItem('authToken', body.token)

      cy.visit('https://crm.driveshopsdev.app/pages/crm/orgEmailTemplates')
    })
  })

})