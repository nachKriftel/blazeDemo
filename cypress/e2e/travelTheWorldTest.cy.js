import destinationOfTheWeekPage from "../pages/DestinationOfTheWeek"
import confirmationPage from "../pages/confirmation"
import purchasePage from "../pages/purchase"
import reservePage from "../pages/reserve"
import travelTheWorldPage from "../pages/travelTheWorld"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

it("should the destination of the week!(Button) navigate to it's page", ()=>{
   const _travelTheWorldPage = new travelTheWorldPage()
   const _destinationOfTheWeekPage = new destinationOfTheWeekPage()
   _travelTheWorldPage.callthisPage()
   .clickdestinationOfTheWeek()
   _destinationOfTheWeekPage.theImage.should('be.visible')
})

it('should the flight be booked with valid credintials',()=>{
    const _travelTheWorldPage = new travelTheWorldPage()
    const _reservePage = new reservePage()
    const _purchasePage = new purchasePage()
    const _ticketconfirmed = new confirmationPage()
    _travelTheWorldPage.callthisPage()
    .pickDepertureCity(3)
    .pickDestinationCity(4)
    .clickFindFlightsButton()
    _reservePage.clickChooseButton()
    _purchasePage.enterPurchaseData('testName','testAddress','testCity','testState','testZipCode')
    .selcetTheCardType(0)
    .enterPurchaseData2('0123565688566','12','2023','testName')
    .clickThePurchaseButton()
    _ticketconfirmed.text.should('contain', 'Thank')
})