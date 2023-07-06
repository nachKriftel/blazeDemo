import purchasePage from "./purchase"

class reservePage{
    get chooseButton(){
        return cy.get('[type="submit"]').eq(2)
    }


    clickChooseButton(){
        this.chooseButton.click()
        return purchasePage
    }


}

export default reservePage

