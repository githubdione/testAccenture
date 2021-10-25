class pageEnterInsurant {
    elements = {
        firstNameInput: () => cy.get('[id="firstname"]'),
        lastNameInput: () => cy.get('[id="lastname"]'),
        dateOfBirthDatepicker: () => cy.get('[id="birthdate"]'),
        genderRadioBtn: () => cy.get('[type="radio"]'),
        streetAddressInput: () => cy.get('[id="streetaddress"]'),
        countrySelect: () => cy.get('[id="country"]'),
        zipCodeInput: () => cy.get('[id="zipcode"]'),
        cityInput: () => cy.get('[id="city"]'),
        hobbiesCheckbox: () => cy.get('[type="checkbox"'),
        occupationSelect: () => cy.get('[id="occupation"]'),
        websiteInput: () => cy.get('[id="website"]'),
        nextPageBtnInsurant: () => cy.get('[id="nextenterproductdata"]')
    }

    //Função para digitar First Name
    typeFirstName(firstNameValue) {
        this.elements.firstNameInput().type(firstNameValue);
    }

    //Função para digitar Last Name
    typeLastName(lastNameValue) {
        this.elements.lastNameInput().type(lastNameValue);
    }

    //Função para digitar Date of Birth
    typeDateOfBirth(dateOfBirthValue) {
        this.elements.dateOfBirthDatepicker().type(dateOfBirthValue);
    }

    //Função para escolher Gender
    chooseGender(genderValue) {
        this.elements.genderRadioBtn().check(genderValue, { force: true });
    }

    //Função para digitar Street Address
    typeStreetAddress(streetAddressValue) {
        this.elements.streetAddressInput().type(streetAddressValue);
    }

    //Função para selecionar Country
    selectCountry(countryValue) {
        this.elements.countrySelect().select(countryValue);
    }

    //Função para digitar Zip Code
    typeZipCode(zipCodeValue) {
        this.elements.zipCodeInput().type(zipCodeValue);
    }

    //Função para digitar City
    typeCity(cityValue) {
        this.elements.cityInput().type(cityValue);
    }

    //Função para selecionar Occupation
    selectOccupation(occupationValue) {
        this.elements.occupationSelect().select(occupationValue);
    }

    //Função para escolher Hobbies
    chooseHobbies(hobbiesValue) {
        this.elements.hobbiesCheckbox().check(hobbiesValue, { force: true });
    }

    //Função para digitar Website
    typeWebsite(websiteValue) {
        this.elements.websiteInput().type(websiteValue);
    }

    //Função clica no botão Next >>
    clickNextPageEnterInsurant() {
        this.elements.nextPageBtnInsurant().click();
    }
}

module.exports = new pageEnterInsurant();