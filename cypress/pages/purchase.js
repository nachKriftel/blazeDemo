import confirmationPage from "./confirmation"

class purchasePage{

    get name(){
        return cy.get('#inputName')
    }

    get address(){
        return cy.get('#address')
    }

    get city(){
        return cy.get('#city')
    }

    get state(){
        return cy.get('#state')
    }

    get zipCode(){
        return cy.get('#zipCode')
    }

    get cardType(){
        return cy.get('#cardType')
    }

    get creditCardNumber(){
        return cy.get('#creditCardNumber')
    }

    get creditCardMonth(){
        return cy.get('#creditCardMonth')
    }
    
    get creditCardYear(){
        return cy.get('#creditCardYear')  
    }

    get nameOnCard(){
        return cy.get('#nameOnCard')
    }

    get purchaseFlightButton(){
        return cy.get('[value="Purchase Flight"]')
    }


    enterPurchaseData(name,address,city,state,zipCode){
        this.name.type(name)
        this.address.type(address)
        this.city.type(city)
        this.state.type(state)
        this.zipCode.type(zipCode)
        return this
    }

    selcetTheCardType(index){
        this.cardType.select(index)
        return this
    }

    enterPurchaseData2(creditCardNumber,creditCardMonth,creditCardYear,nameOnCard){
        this.creditCardNumber.type(creditCardNumber)
        this.creditCardMonth.type(creditCardMonth)
        this.creditCardYear.type(creditCardYear)
        this.nameOnCard.type(nameOnCard)
        return this
    }

    clickThePurchaseButton(){
        this.purchaseFlightButton.click()

        return confirmationPage
    }

}

export default purchasePage
