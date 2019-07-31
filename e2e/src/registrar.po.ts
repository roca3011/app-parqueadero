import { browser, element, by, ExpectedConditions, ProtractorExpectedConditions, ElementFinder, $ } from 'protractor';


export class RegisterPage {
    until: ProtractorExpectedConditions;

    constructor() {
        this.until = ExpectedConditions;
    }

    // navegando
    navigateTo(url = "registro"): Promise<void> {
        return browser.get(`${browser.baseUrl}${url}`) as Promise<void>
    }

    geMensajeImput(): ElementFinder {
      return $('#mensaje');
    }

    getPlacaImput(): ElementFinder {
      return $('#placa');
    }

    getCilindrajeImput(): ElementFinder {
      return $('#cilindraje');
    }
    getTipoVehiculoSelect(): ElementFinder {
        return $('#tipoVehiculo');
    }
    getToastMessage(): ElementFinder {
        return element(by.className("toast-message"));
    }
    getBtnRegisterButton(): ElementFinder {
        return $('#btnRegistro');
    }

    // devolver contenido
    getToastMessageText(): ElementFinder {
      return element(by.className("toast-message"));
    }

    getVehiculoIngresado(placa:string): ElementFinder {

      return $('#btnSalir' + placa);
    }

    async getMensaje(): Promise<string> {
      return await this.geMensajeImput().getAttribute('value');
    }

    async setTextPlaca(text: string): Promise<void> {
      return await this.getPlacaImput().sendKeys(text);
    }

    async setTextCilindraje(text: number): Promise<void> {
      return await this.getCilindrajeImput().sendKeys(text);
    }

    // modificar elementos del DOM

    async setVehicleTypeOptionSelect(optionI: number): Promise<void> {

        await browser.sleep(500);
        const options: ElementFinder[] = await this.getTipoVehiculoSelect().all(by.tagName('option'));
        options[optionI].click();
        await browser.sleep(800);
    }

    // click en elementos

    async clickBtnRegisterButton(): Promise<void> {
        await this.getBtnRegisterButton().click();
    }

    async clickVehicleTypeSelect(): Promise<void> {
        await this.getTipoVehiculoSelect().click();
    }

    // metodos en espera de accion

    async waitUntilToastMessageIsPresent(): Promise<void> {
        return await this.waitUntilIsPresent(this.getToastMessage());
    }

    ///Verificar///
    async verificarIngreso(text: string): Promise<void> {
      return await this.getVehiculoIngresado(text);
  }

    async waitUntilIsPresent(element: ElementFinder): Promise<void> {
        const id = await element.getId()
        return await browser.wait(
            this.until.presenceOf(element),
            8000,
            `Element ${id} taking too long to appear in the DOM`
        );
    }

    async waitUntilIsEnabled(element: ElementFinder): Promise<void> {
        const id = await element.getId()
        return await browser.wait(
            this.until.elementToBeClickable(element),
            8000,
            `Element ${id} taking too long to appear in the DOM`
        );
    }

    // metodos en espera de accion al no aparecer

    /*async waitUnilToastMessageIsNotPresent(): Promise<void> {
        return await this.waitUntilIsNotPresent(this.getToastMessage());
    }*/

    async waitUntilIsNotPresent(element: ElementFinder): Promise<void> {
        const id = await element.getId()
        return await browser.wait(
            this.until.stalenessOf(element),
            5000,
            `Element ${id} taking too long to disappear in the DOM`
        );

    }

}
