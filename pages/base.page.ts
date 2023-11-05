import { addAttributesToElement } from "../utils/buttons";

export abstract class BasePage {
    get currentPageUrl() {
        // @ts-ignore
        return browser.execute(() => document.location.href.toString());
    }

    protected async waitForPage(url: string, locator?: string, timeout?: number) {
        // @ts-ignore
        await browser.waitUntil(() => browser.execute(() => document.readyState === 'complete'), {
            timeout: 60 * 1000, // 60 seconds
            timeoutMsg: 'Begone ye who enter, for these waters are incomplete!',
        });
        await browser.waitUntil(
            async () => {
                const currUrl = await this.currentPageUrl;
                if (currUrl.includes(url)) return true;
            },
            {
                timeout: 60 * 1000,
                timeoutMsg: 'URL not matching',
            }
        );

        if (locator !== undefined && locator !== '') {
            await $(locator).waitForClickable();
        }
        // Sometimes you need a little explicit pause in your life. Use when needed, but not often.
        if (timeout !== undefined) {
            await browser.pause(timeout);
        }
    }

    async buildWorld(elements: [{ element: string, endText: string }]) {
        for (let i = 0; i < elements.length; i++) {
            await addAttributesToElement(elements[i].element, elements[i].endText);
        }
    }
}