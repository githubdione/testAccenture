class pageEnterProduct {
    elements = {
        startDateDatepicker: () => cy.get('[id="startdate"]'),
        insuranceSumSelect: () => cy.get('[id="insurancesum"]'),
        meritRatingSelect: () => cy.get('[id="meritrating"]'),
        damageInsuranceSelect: () => cy.get('[id="damageinsurance"]'),
        euroProtectionCheckbox: () => cy.get('[id="EuroProtection"]'),
        legalDefenseInsurancenCheckbox: () => cy.get('[id="LegalDefenseInsurance"]'),
        courtesyCarSelect: () => cy.get('[id="courtesycar"]'),
        nextPageBtnProduct: () => cy.get('[id="nextselectpriceoption"]')
    }

    //Função para digitar Start Date
    typeStartDate(startDateValue) {
        this.elements.startDateDatepicker().type(startDateValue);
    }

    //Função para selecionar Insurance Sum [$]
    selectInsuranceSum(insuranceSumValue) {
        this.elements.insuranceSumSelect().select(insuranceSumValue);
    }

    //Função para selecionar Merit Rating
    selectMeritRating(meritRatingValue) {
        this.elements.meritRatingSelect().select(meritRatingValue);
    }

    //Função para selecionar Damage Insurance
    selectDamageInsurance(damageInsuranceValue) {
        this.elements.damageInsuranceSelect().select(damageInsuranceValue);
    }

    //Função para escolher Optional Products
    chooseOptionalProducts() {
        this.elements.euroProtectionCheckbox().check({ force: true });
        this.elements.legalDefenseInsurancenCheckbox().check({ force: true });
    }

    //Função para selecionar Courtesy Car
    selectCourtesyCar(courtesyCarValue) {
        this.elements.courtesyCarSelect().select(courtesyCarValue);
    }

    //Função clica no botão Next >>
    clickNextPageEnterProduct() {
        this.elements.nextPageBtnProduct().click();
    }
}

module.exports = new pageEnterProduct();