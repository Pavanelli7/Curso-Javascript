const Dom = {
    seletor: 'li',
    element() {
        return elementoSelecionado = document.querySelector(this.seletor);
    },
    ativar() {
        this.element().classList.add('ativar');
    }
}