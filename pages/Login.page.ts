import { BasePage } from "./base.page";

class LoginPage extends BasePage {
    waitForPage() {
        return super.waitForPage('/', 'button', 2000);
    }

    waitForLoginWithEmailPage() {
        return super.waitForPage('/login/email', 'button', 2000);
    }

    buildWorld() {
        return super.buildWorld([
            { element: 'button', endText: 'Btn' }
        ]);
    }

    get loginWithEmailBtn() { return $('[jj-auto="LogInWithEmailBtn"]'); }
    get loginBtn() { return $('[jj-auto="LogInBtn"]'); }
    get emailInput() { return $('#email'); }
    get passwordInput() { return $('#password'); }
}

export const loginPage = new LoginPage();