import { addAttributesToElement } from "../utils/buttons";
import { loginOperations } from "../operations/Login.operations";

describe('Go To GM', () => {
   before(() => {
      browser.url('https://digital.uat.greatminds.dev/');
   });

   it('Should fetch all buttons on the page', async () => {
        await loginOperations.waitForPage();
        await loginOperations.buildWorld();
        await loginOperations.clickLoginWithEmailBtn();

        await loginOperations.waitForLoginPage();
        await loginOperations.buildWorld();
        await loginOperations.loginWithEmail('sit_em2_t1@yopmail.com', 'Test@123');

        await addAttributesToElement('.module-card', 'ModuleCard');
        await $('[jj-auto="CountingAndCardinalityModuleCard"]').click();

        await addAttributesToElement('.lesson-link span[class*="Title"]', 'Lesson');
        await $('[jj-auto="ClassifyObjectsIntoTwoCategoriesLesson"]').click();

        await browser.pause(50000);
   });
});