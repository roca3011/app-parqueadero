import  { RegisterPage } from './registrar.po';
import { browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('Estacionamiento registrar ', () => {
    let registerPage: RegisterPage;
    const placaCarro : string = "HMA-123";
    const cilindrajeCarro : number = 1500;
    const tipoVehiculoCarro : number = 0;

    beforeEach(async () => {
        registerPage = new RegisterPage();
        await registerPage.navigateTo();
      })

      it('Registra un vehiculo tipo carro', async () => {

        // Arrange
        const expectedMessage = "Se registro el vehiculo con placa: " + placaCarro;

        await registerPage.setTextPlaca(placaCarro);
        await registerPage.setTextCilindraje(cilindrajeCarro);
        await registerPage.clickVehicleTypeSelect();
        await registerPage.setVehicleTypeOptionSelect(tipoVehiculoCarro);
        await registerPage.clickBtnRegisterButton();
        //await registerPage.waitUntilToastMessageIsPresent();

        browser.sleep(5000);

        // Act
        const mensaje = await registerPage.getMensaje();
        // Assert
        //expect(toastContent.trim()).toEqual(expectedMessage);
        expect(mensaje).toEqual(expectedMessage);

      })




    })
