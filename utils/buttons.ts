export const addAttributesToElement = async (e: string, name: string) => {
    await browser.execute((e: string, name: string) => {
        // @ts-ignore
        const els = document.querySelectorAll(e);
        els.forEach((element) => {
            const text = element.textContent;
            const arr = text.split(' ');
            for (let i = 0; i < arr.length; i++) {
                arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
            }
            const newText = arr.join("").replace(/,/g, '').replace(/[0-9]/g, '');
            element.setAttribute('jj-auto', `${newText}${name}`);
        });
    }, e, name);
}