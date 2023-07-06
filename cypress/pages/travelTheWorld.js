import destinationOfTheWeekPage from "./DestinationOfTheWeek"
import reservePage from "./reserve"

class travelTheWorldPage{

    get destinationOfTheWeekButton(){
       return cy.get('[href="vacation.html"]')
    }

    get depertureCity(){
        return cy.get('[name="fromPort"]')
    }

    get destinationCity(){
        return cy.get('[name="toPort"]')
    }

    get findFlights(){
        return cy.get('[value="Find Flights"]')
    }

    callthisPage(){
        cy.visit('/')
        return this
    }

    clickdestinationOfTheWeek(){
        this.destinationOfTheWeekButton.click()
        return destinationOfTheWeekPage
    }

    clickFindFlightsButton(){
        this.findFlights.click()
        return reservePage
    }

    pickDepertureCity(index){
        this.depertureCity.select(index)
        return this
    }

    pickDestinationCity(value){
        this.destinationCity.select(value)
        return this
    }

}

export default travelTheWorldPage