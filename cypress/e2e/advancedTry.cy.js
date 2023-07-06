Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })


/*
it('try to get the cheapest ticket useing js',()=>{
    cy.visit('/')
    cy.get('[value="Find Flights"]').click()
    cy.get('[name="price"]').then((t)=>{
        var output = [].then((string)=>{
            Number(string)
            cy.log(output)
        })
        for (var i=0; i < t.length ; ++i)
            output.push(t[i]['value']);
            cy.log(output)

        })

        
        

    })

    it.only('try to get the cheapest ticket useing js',()=>{
        cy.visit('/')
        cy.get('[value="Find Flights"]').click()
        cy.get('[value="Choose This Flight"]').find('td')
    
            })
    
            
            
  */