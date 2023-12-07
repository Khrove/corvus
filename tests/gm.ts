import { addAttributesToElement } from "../utils/buttons";
import { loginOperations } from "../operations/Login.operations";

describe('Go To GM', () => {
   before(() => {
      browser.url('any-url');
   });

   it('Should fetch all buttons on the page', async () => {
        await loginOperations.waitForPage();
        await loginOperations.buildWorld();
        await loginOperations.clickLoginWithEmailBtn();

        await loginOperations.waitForLoginPage();
        await loginOperations.buildWorld();
        await loginOperations.loginWithEmail('obscured-login', 'obscured-password');

        await addAttributesToElement('.module-card', 'ModuleCard');
        await $('[jj-auto="CountingAndCardinalityModuleCard"]').click();

        await addAttributesToElement('.lesson-link span[class*="Title"]', 'Lesson');
        await $('[jj-auto="ClassifyObjectsIntoTwoCategoriesLesson"]').click();

        await browser.pause(50000);
   });
});
