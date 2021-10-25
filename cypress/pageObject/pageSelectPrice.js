class pageSelectPrice {
    elements = {
        silverRadioBtn: () => cy.get('[id="selectsilver"]'),
        goldRadioBtn: () => cy.get('[id="selectgold"]'),
        platinumRadioBtn: () => cy.get('[id="selectplatinum"]'),
        ultimateRadioBtn: () => cy.get('[id="selectultimate"]'),
        nextPageBtnPrice: () => cy.get('[id="nextsendquote"')
    }

    //Função para escolher Select Price Option
    chooseSelectPrice(selectPriceValue) {
        switch (selectPriceValue) {
            case 'Silver':
                this.elements.silverRadioBtn().check({ force: true });
                break;
            case 'Gold':
                this.elements.goldRadioBtn().check({ force: true });
                break;
            case 'Platinum':
                this.elements.platinumRadioBtn().check({ force: true });
                break;
            case 'Ultimate':
                this.elements.ultimateRadioBtn().check({ force: true });
                break;
        }
    }

    //Função clica no botão Next >>
    clickNextPageSelectPrice() {
        this.elements.nextPageBtnPrice().click();
    }
}

module.exports = new pageSelectPrice();