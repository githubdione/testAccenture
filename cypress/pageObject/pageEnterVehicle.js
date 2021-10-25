class pageEnterVehicle {

    elements = {
        makeSelect: () => cy.get('[id="make"]'),
        modelSelect: () => cy.get('[id="model"]'),
        cylinderCapacityInput: () => cy.get('[id="cylindercapacity"]'),
        enginePerformanceInput: () => cy.get('[id="engineperformance"]'),
        dateOfManufactureDatepicker: () => cy.get('[id="dateofmanufacture"]'),
        numberOfSeatsSelect: () => cy.get('[id="numberofseats"]'),
        rightHandDriveRadioBtn: () => cy.get('[type="radio"]'),
        numberOfSeatsMotorcycleSelect: () => cy.get('[id="numberofseatsmotorcycle"]'),
        fuelTypeSelect: () => cy.get('[id="fuel"]'),
        payloadInput: () => cy.get('[id="payload"]'),
        totalWeightInput: () => cy.get('[id="totalweight"]'),
        listPriceInput: () => cy.get('[id="listprice"]'),
        licensePlateNumberInput: () => cy.get('[id="licenseplatenumber"]'),
        annualMileageInput: () => cy.get('[id="annualmileage"]'),
        nextPageBtnVehicle: () => cy.get('[id="nextenterinsurantdata"]')
    }

    //Função para selecionar Make
    selectMakeValue(makeValue) {
        this.elements.makeSelect().select(makeValue);
    }

    //Função para selecionar Model
    selectModelValue(modelValue) {
        this.elements.modelSelect().select(modelValue);
    }

    //Função para digitar Cylinder Capacity [ccm]
    typeCylinderCapacity(cylinderCapacityValue) {
        this.elements.cylinderCapacityInput().type(cylinderCapacityValue);
    }

    //Função para digitar Engine Performance [kW]
    typeEnginePerformance(enginePerformanceValue) {
        this.elements.enginePerformanceInput().type(enginePerformanceValue);
    }

    //Função para digitar Date of Manufacture
    typeDateOfManufacture(dateOfManufactureValue) {
        this.elements.dateOfManufactureDatepicker().type(dateOfManufactureValue);
    }

    //Função para selecionar Number of Seats
    selectNumberOfSeats(numberOfSeatsValue) {
        this.elements.numberOfSeatsSelect().select(numberOfSeatsValue);
    }

    //Função para escolher Right Hand Drive
    chooseRightHandDrive(rightHandDrivValue) {
        this.elements.rightHandDriveRadioBtn().check(rightHandDrivValue, { force: true });
    }

    //Função para selecionar Number of Seats
    selectNumberOfSeatsMotorcycle(numberOfSeatsMotorcycleValue) {
        this.elements.numberOfSeatsMotorcycleSelect().select(numberOfSeatsMotorcycleValue);
    }

    //Função para selecionar Fuel Type
    selectFuelType(fuelTypeValue) {
        this.elements.fuelTypeSelect().select(fuelTypeValue);
    }

    //Função para digitar Payload [kg]
    typePayload(payloadValue) {
        this.elements.payloadInput().type(payloadValue);
    }

    //Função para digitar Total Weight [kg]
    typeTotalWeight(totalWeightValue) {
        this.elements.totalWeightInput().type(totalWeightValue);
    }

    //Função para digitar List Price [$]
    typeListPrice(listPriceValue) {
        this.elements.listPriceInput().type(listPriceValue);
    }

    //Função para digitar License Plate Number
    typeLicensePlateNumber(licensePlateNumberValue) {
        this.elements.licensePlateNumberInput().type(licensePlateNumberValue);
    }

    //Função para digitar Annual Mileage [mi]
    typeAnnualMileage(annualMileageValue) {
        this.elements.annualMileageInput().type(annualMileageValue);
    }

    //Função clica no botão Next >>
    clickNextPageEnterVehicle() {
        this.elements.nextPageBtnVehicle().click();
    }

}

module.exports = new pageEnterVehicle();
