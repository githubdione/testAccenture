class pageSendQuote {
    elements = {
        emailInput: () => cy.get('[id="email"]'),
        phoneInput: () => cy.get('[id="phone"]'),
        usernameInput: () => cy.get('[id="username"]'),
        passwordInput: () => cy.get('[id="password"]'),
        confirmPasswordInput: () => cy.get('[id="confirmpassword"]'),
        commentsInput: () => cy.get('[id="Comments"]'),
        sendBtn: () => cy.get('[id="sendemail"]'),
        sucessIcon: () => cy.get('[class="sa-icon sa-success animate"]'),
        sucessMsg: () => cy.get('[class="sa-icon sa-success animate"]')
    }

    //Função para digitar E-Mail
    typeEmail(emailValue) {
        this.elements.emailInput().type(emailValue);
    }

    //Função para digitar Phone
    typePhone(phoneValue) {
        this.elements.phoneInput().type(phoneValue);
    }

    //Função para digitar Username
    typeUsername(usernameValue) {
        this.elements.usernameInput().type(usernameValue);
    }

    //Função para digitar Password
    typePassword(passwordValue) {
        this.elements.passwordInput().type(passwordValue);
    }

    //Função para digitar Confirm Password
    typeConfirmPassword(confirmPasswordValue) {
        this.elements.confirmPasswordInput().type(confirmPasswordValue);
    }

    //Função para digitar Comments
    typeComments(commentsValue) {
        this.elements.commentsInput().type(commentsValue);
    }

    //Função clica no botão Send
    clickSendBtn() {
        this.elements.sendBtn().click({ force: true });
    }

    //Função Valida Mensagem Sucesso
    sucessMessage() {
        cy.wait(10000);
        this.elements.sucessIcon().should('be.visible');
        cy.contains('Sending e-mail success!');
    }
}

module.exports = new pageSendQuote();
