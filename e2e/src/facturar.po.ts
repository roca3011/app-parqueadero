import { browser, element, by, ExpectedConditions, ProtractorExpectedConditions, ElementFinder, $ } from 'protractor';


export class Facturar {
    until: ProtractorExpectedConditions;

    constructor() {
        this.until = ExpectedConditions;
    }

    // navegando
    navigateTo(url = "factura"): Promise<void> {
        return browser.get(`${browser.baseUrl}${url}`) as Promise<void>
    }

    getPlacaImput(): ElementFinder {
      return $('#placa');
    }
    getToastMessage(): ElementFinder {
        return element(by.className("toast-message"));
    }
    getBtnRegisterButton(): ElementFinder {
        return $('#btnFactura');
    }

    // devolver contenido
    getToastMessageText(): ElementFinder {
      return element(by.className("toast-message"));
    }

    async setTextPlaca(text: string): Promise<void> {
      return await this.getPlacaImput().sendKeys(text);
    }

    // click en elementos
    async clickBtnRegisterButton(): Promise<void> {
        await this.getBtnRegisterButton().click();
    }

    // metodos en espera de accion
    async waitUntilToastMessageIsPresent(): Promise<void> {
        return await this.waitUntilIsPresent(this.getToastMessage());
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
    async waitUntilIsNotPresent(element: ElementFinder): Promise<void> {
        const id = await element.getId()
        return await browser.wait(
            this.until.stalenessOf(element),
            5000,
            `Element ${id} taking too long to disappear in the DOM`
        );

    }

}
