class SelectBlock {
    constructor(menu, classActive, displayItem, selectItens, boolStorage, nameLocal = 'language') {
        this.menu = document.querySelector(menu);
        this.classActive = classActive;
        this.selectItens = document.querySelectorAll(selectItens);
        this.displayItem = document.querySelector(displayItem);
        this.boolStorage = boolStorage;
        this.nameLocal = nameLocal;
    }

    /* Método que salva e recupera do LocalStorage */
    onLocalStorage() {
        this.indexLang;
        const lang = localStorage.getItem(this.nameLocal);
        if (this.boolStorage === false || !lang) this.indexLang = 0;
        else {
            this.selectItens.forEach((element, index) => {
                if (element.matches(`#language-${lang}`)) this.indexLang = index;
            });
        }
    }

    /* Método que pega os dados do item clicado */
    onClickItem(event) {
        const imagemSelecionada = event.path[2].children[0].children[0].src;
        this.displayItem.style.backgroundImage = `url(${imagemSelecionada})`;
        this.menu.classList.toggle(this.classActive);
        this.displayItem.attributes.id.value = event.path[2].getAttribute('id');
        this.onEvents(0);
    }

    /* Método para sair do menu ao clicar fora */
    onOutsideMenu(event) {
        if (!(event.target.dataset.select === 'true' && this.menu.classList.contains(this.classActive))) {
            this.menu.classList.toggle(this.classActive);
            this.onEvents(0);
            this.selectItens.forEach((item) => item.removeEventListener('click', this.onClickItem));
        }
    }

    /* Método que abre o menu select */
    onOpenMenu(event) {
        event.preventDefault();
        this.menu.classList.toggle(this.classActive);
        this.onEvents(1);
        this.selectItens.forEach((item) => item.addEventListener('click', this.onClickItem));
    }

    /* Todos os eventos */
    onEvents(index) {
        if (index === 0) {
            this.displayItem.addEventListener('click', this.onOpenMenu);
            window.removeEventListener('click', this.onOutsideMenu);
            setTimeout(() => {
                this.displayItem.dataset.select = 'true';
            }, 50);
        } else {
            this.displayItem.removeEventListener('click', this.onOpenMenu);
            window.addEventListener('click', this.onOutsideMenu);
            setTimeout(() => {
                this.displayItem.dataset.select = '';
            }, 50);
        }
    }

    /* Método que coloca UMA bandeira ativa ao iniciar */
    onStart(index) {
        this.displayItem.style.backgroundImage = `url(${this.selectItens[index].children[0].children[0].src})`;
        this.displayItem.attributes.id.value = this.selectItens[index].getAttribute('id');
    }

    onBind() {
        this.onStart = this.onStart.bind(this);
        this.onEvents = this.onEvents.bind(this);
        this.onOpenMenu = this.onOpenMenu.bind(this);
        this.onOutsideMenu = this.onOutsideMenu.bind(this);
        this.onClickItem = this.onClickItem.bind(this);
    }

    init() {
        this.onBind();
        this.displayItem.addEventListener('click', this.onOpenMenu);
        this.onLocalStorage();
        this.onStart(this.indexLang);
        return this;
    }
}
