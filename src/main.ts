import chroma from 'chroma-js';

window.addEventListener('load', () => {
    init();
}, false);

function init(): void {
    let elem: HTMLElement = <HTMLElement>document.querySelector('body');

    let colorList: { [key: string]: chroma.Color } = {
        'chroma.rgb(235, 64, 52)': chroma.rgb(235, 64, 52),
        'chroma.rgb(235, 64, 52).alpha(0.5)': chroma.rgb(235, 64, 52).alpha(0.5),
        'chroma.hsv(229, 0.78, 0.92)': chroma.hsv(229, 0.78, 0.92),
        'chroma.hsv(229, 0.78, 0.92).darken()': chroma.hsv(229, 0.78, 0.92).darken(),
        'chroma.hsv(229, 0.78, 0.92).brighten()': chroma.hsv(229, 0.78, 0.92).brighten(),
        'chroma.hsv(229, 0.78, 0.92).saturate()': chroma.hsv(229, 0.78, 0.92).saturate(),
        'chroma.hsv(229, 0.78, 0.92).desaturate()': chroma.hsv(229, 0.78, 0.92).desaturate(),
    };


    Object.keys(colorList).forEach(key => {
        let color: chroma.Color = colorList[key];
        let colorElem = document.createElement('span');
        colorElem.className = 'colorPanel';
        colorElem.style.backgroundColor = color.css();
        colorElem.innerText = color.hex();

        let labelElem = document.createElement('span');
        labelElem.innerText = key;

        let div = document.createElement('div');
        div.append(colorElem);
        div.append(labelElem);
        elem.append(div);
    });
}