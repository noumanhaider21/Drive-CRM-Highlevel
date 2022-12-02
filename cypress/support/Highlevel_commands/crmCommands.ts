import cypress from "cypress";
import loginPage from "../../Page Objects/loginPage";
import crmPage from "../../Page Objects/CRM-Page/crmPage";
const crmpage = new crmPage

Cypress.Commands.add('emailTemplates',()=>{

    cy.xpath(crmpage.email_templates_account).click()

})

Cypress.Commands.add('textTemplates',()=>{

    cy.xpath(crmpage.text_template_account).click()

})

Cypress.Commands.add('phoneStatuses',()=>{

    cy.xpath(crmpage.phone_statuses_account).click()

})

Cypress.Commands.add('socialHashtags',()=>{

    cy.xpath(crmpage.social_hashtags_account).click()

})

Cypress.Commands.add('socialTags',()=>{

    cy.xpath(crmpage.social_tags).click()

})

Cypress.Commands.add('socialPosts',()=>{

    cy.xpath(crmpage.social_posts).click()

})

Cypress.Commands.add('socialQueue',()=>{

    cy.xpath(crmpage.social_queue).click()

})

Cypress.Commands.add('socialQueueRequests',()=>{

    cy.xpath(crmpage.social_queue_requests).click()

})

Cypress.Commands.add('socialAccounts',()=>{

    cy.xpath(crmpage.social_accounts_account).click()

})

Cypress.Commands.add('options',()=>{

    cy.xpath(crmpage.options_account).click()

})
