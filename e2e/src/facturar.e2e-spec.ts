import  { Facturar } from './facturar.po';
import { browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('Estacionamiento registrar ', () => {
    let facturaPage: Facturar;
    const placaMoto  : string = "NGI-583";
    const valorTotal : number = 3500;

    beforeEach(async () => {
        facturaPage = new Facturar();
        await facturaPage.navigateTo();
      })

      it('Genera la factura', async () => {

        // Arrange
    const valorTotal : number = 3500
    const expectedMessage = "Factura generada";

        await facturaPage.setTextPlaca(placaMoto);
        await facturaPage.clickBtnRegisterButton();
        await facturaPage.waitUntilToastMessageIsPresent();


        browser.sleep(5000);
        // Act
        const toastContent = await facturaPage.getToastMessageText().getText();

        // Assert
        expect(toastContent.trim()).toEqual(expectedMessage);

      })

})
