import { loginPage } from "../pages/Login.page";

class LoginOperations {
    async waitForPage() { await loginPage.waitForPage(); }
    async waitForLoginPage() { await loginPage.waitForLoginWithEmailPage(); }
    async buildWorld() { await loginPage.buildWorld(); }
    async clickLoginWithEmailBtn() { await loginPage.loginWithEmailBtn.click(); }
    async loginWithEmail(email: string, password: string) {
        await loginPage.emailInput.setValue(email);
        await loginPage.passwordInput.setValue(password);
        await loginPage.loginBtn.click();
    }
}

export const loginOperations = new LoginOperations();