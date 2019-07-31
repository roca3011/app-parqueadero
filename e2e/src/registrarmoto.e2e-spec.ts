import  { RegisterPage } from './registrar.po';
import { browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('Estacionamiento registrar ', () => {
    let registerPage: RegisterPage;
    const placaMoto  : string = "NGI-000";
    const cilindrajeMoto : number = 600;
    const tipoVehiculoMoto : number = 1;

    beforeEach(async () => {
        registerPage = new RegisterPage();
        await registerPage.navigateTo();
      })

      it('deberia registrar moto', async () => {

        // Arrange
        const expectedMessage = "Se registro el vehiculo con placa: " + placaMoto;

        await registerPage.setTextPlaca(placaMoto);
        await registerPage.clickVehicleTypeSelect();
        await registerPage.setVehicleTypeOptionSelect(tipoVehiculoMoto);
        await registerPage.setTextCilindraje(cilindrajeMoto);
        await registerPage.clickBtnRegisterButton();
        await registerPage.waitUntilToastMessageIsPresent();

        browser.sleep(5000);
        // Act
        const toastContent = await registerPage.getToastMessageText().getText();
        const mensaje = await registerPage.getMensaje();
        // Assert
        expect(toastContent.trim()).toEqual(expectedMessage);
        expect(mensaje).toEqual(expectedMessage);

      })

})
