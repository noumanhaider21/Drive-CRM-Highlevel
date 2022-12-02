/// <reference types="cypress-xpath" />

import { method } from "cypress/types/bluebird"
import { post } from "cypress/types/jquery"
import { url } from "inspector"








describe('CRM Highlevel tests', () => {

  beforeEach('Login to CRM', () => {

    cy.loginUI('ayaz@imedhealth.us','1')

    cy.visit('https://crm.driveshopsdev.app/pages/crm/orgEmailTemplates')

    // cy.request('Post','https://crm-be.driveshopsdev.app/api/core/init',{
    //   userName: "ayaz@imedhealth.us", password: "1",}

    //   ).then((r) =>{
  
    //   window.localStorage.setItem("authtoken",r.body.authtoken)
      
    // })
  })
    

  
  it('Click on Email Templates of account level', () => {

    // cy.visit("https://crm.driveshopsdev.app/pages/crm/orgEmailTemplates")
    cy.emailTemplates()
    
  })

  it('Click on Text Templates of account level', () => {

    cy.textTemplates()
    
  })

  it('Click on Phone statuses of account level', () => {

    cy.phoneStatuses()
    
  })

  it('Click on Social Hashtags of account level', () => {

    cy.socialHashtags()
    
  })

  it('Click on Social Tags of account level', () => {

    cy.socialTags()
    
  })

  it('Click on Social posts of account level', () => {

    cy.socialPosts()
    
  })

  it('Click on Social Queue of account level', () => {

    cy.socialQueue()
    
  })

  it('Click on Social Queue requests of account level', () => {

    cy.socialQueueRequests()
    
  })

  it('Click on Options of account level', () => {

    cy.options()
    
  })



})