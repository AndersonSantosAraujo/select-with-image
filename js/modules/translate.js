export default class Translate {
    constructor(classHidden, displayItem, selectItens, boolStorage, nameLocal = 'language') {
        this.classHidden = classHidden;
        this.displayItem = displayItem;
        this.selectItens = document.querySelectorAll(selectItens);
        this.boolStorage = boolStorage;
        this.nameLocal = nameLocal;
    }

    /* Método que adiciona o evento ao clique */
    onClick() {
        this.selectItens.forEach((element) => {
            element.addEventListener('click', this.onTranslate);
        });
    }

    /* Monta o array de idiomas */
    onLanguages() {
        this.arrayLanguage = [];
        this.selectItens.forEach((element) => {
            const elementId = element.getAttribute('id');
            const lang = elementId.replace('language-', '');
            this.arrayLanguage.push(lang);
        });
    }

    /* Método que faz a tradução */
    onTranslate() {
        const elementsTranslate = document.querySelectorAll('[data-translate]');
        elementsTranslate.forEach((element) => {
            element.classList.add(this.classHidden);
        });

        setTimeout(() => {
            const display = document.querySelector(this.displayItem);
            const displayId = display.getAttribute('id');

            for (let i = 0; i < this.arrayLanguage.length; i++) {
                const element = this.arrayLanguage[i];
                if (`language-${element}` === displayId) {
                    const el = document.querySelectorAll(`[data-translate='language-${element}']`);
                    el.forEach((element) => {
                        element.classList.remove(this.classHidden);
                    });
                    document.documentElement.setAttribute('lang', element);
                    if (this.boolStorage) localStorage.setItem(this.nameLocal, element);
                    else localStorage.removeItem(this.nameLocal);
                }
            }
        }, 100);
    }

    onBind() {
        this.onLanguages = this.onLanguages.bind(this);
        this.onTranslate = this.onTranslate.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    init() {
        this.onBind();
        this.onLanguages();
        this.onTranslate();
        this.onClick();
        return this;
    }
}
