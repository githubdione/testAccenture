import pageEnterVehicle from '../pageObject/pageEnterVehicle'
import pageEnterInsurant from '../pageObject/pageEnterInsurant'
import pageEnterProduct from '../pageObject/pageEnterProduct'
import pageSelectPrice from '../pageObject/pageSelectPrice'
import pageSendQuote from '../pageObject/pageSendQuote'

describe('Teste ACCENTURE', () => {

  it('Acessa o site', () => {
    cy.visit('http://sampleapp.tricentis.com/101/app.php', { timeout: 30000 });
  })

  //Preenche o formulário da aba “Enter Vehicle Data”
  it('Preenche o formulário da aba “Enter Vehicle Data”', () => {
    pageEnterVehicle.selectMakeValue('Audi');
    pageEnterVehicle.selectModelValue('Scooter');
    pageEnterVehicle.typeCylinderCapacity('150');
    pageEnterVehicle.typeEnginePerformance('50');
    pageEnterVehicle.typeDateOfManufacture('05/10/2018');
    pageEnterVehicle.selectNumberOfSeats('2');
    pageEnterVehicle.chooseRightHandDrive('No');
    pageEnterVehicle.selectNumberOfSeatsMotorcycle('2');
    pageEnterVehicle.selectFuelType('Gas');
    pageEnterVehicle.typePayload('200');
    pageEnterVehicle.typeTotalWeight('200');
    pageEnterVehicle.typeListPrice('15000');
    pageEnterVehicle.typeLicensePlateNumber('ABC1234');
    pageEnterVehicle.typeAnnualMileage('10000');
    pageEnterVehicle.clickNextPageEnterVehicle();
  })

  //Preenche o formulário da aba “Enter Insurant Data”
  it('Preenche o formulário da aba “Enter Insurant Data”', () => {
    pageEnterInsurant.typeFirstName('Joao');
    pageEnterInsurant.typeLastName('Teste');
    pageEnterInsurant.typeDateOfBirth('10/10/2000');
    pageEnterInsurant.chooseGender('Female');
    pageEnterInsurant.typeStreetAddress('Rua do Teste');
    pageEnterInsurant.selectCountry('Brazil');
    pageEnterInsurant.typeZipCode('80598048');
    pageEnterInsurant.typeCity('Curitiba');
    pageEnterInsurant.selectOccupation('Employee');
    pageEnterInsurant.chooseHobbies('Speeding');
    pageEnterInsurant.typeWebsite('http://sampleapp.tricentis.com/101/app.php');
    pageEnterInsurant.clickNextPageEnterInsurant();
  })

  //Preenche o formulário da aba “Enter Product Data” 
  it('Preenche o formulário da aba “Enter Product Data”', () => {
    pageEnterProduct.typeStartDate('12/19/2021');
    pageEnterProduct.selectInsuranceSum('10.000.000,00');
    pageEnterProduct.selectMeritRating('Malus 10');
    pageEnterProduct.selectDamageInsurance('Full Coverage');
    pageEnterProduct.chooseOptionalProducts();
    pageEnterProduct.selectCourtesyCar('Yes');
    pageEnterProduct.clickNextPageEnterProduct();
  })

  //Preenche o formulário da aba “Select Price Option” 
  it('Preenche o formulário da aba “Select Price Option”', () => {
    pageSelectPrice.chooseSelectPrice('Platinum');
    pageSelectPrice.clickNextPageSelectPrice();
  })

  //Preenche o formulário da aba “Send Quote”
  it('Preenche o formulário da aba “Send Quote”', () => {
    pageSendQuote.typeEmail('emailteste@gmail.com');
    pageSendQuote.typePhone('41988452014');
    pageSendQuote.typeUsername('test');
    pageSendQuote.typePassword('Test@123');
    pageSendQuote.typeConfirmPassword('Test@123');
    pageSendQuote.typeComments('Estou inserindo um comentario');
    pageSendQuote.clickSendBtn();
    pageSendQuote.sucessMessage();
  })

})