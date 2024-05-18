
const tabela = document.querySelector('.table');
tabelaContent = [];

var pos = camp1.getBoundingClientRect();
peca1.offsetX = `${pos.x}px`;

console.log(peca1.x," ",pos.left);

for (const linha of tabela.rows) {
    const linhaContent = [];

    for (const celula of linha.cells) {
        /*
        const referencePos = celula.getBoundingClientRect();
        peca1.style.top = referencePos.top+'px';
        peca1.style.left = referencePos.left+'px'; */
        linhaContent.push(celula.textContent)
    }

    tabelaContent.push(linhaContent);
}

console.log(tabelaContent);

var inicio = {
    initializar: function name(params) {
        this.tbpecas= document.querySelector('.table-pieces');   
        this.tbCopy = [];
        
        for (const lin of tbpecas.rows) {
            this.linCopy = [];

            for (const cel of lin.rows) {
                const peca = document.querySelector('.peca'+'1');
                peca.style.left = cel.getBoundingClientRect().left + 50+'px';
                peca.style.top = cel.getBoundingClientRect().top + 50+'px';
            }

        }
    }
}

const jogo = Object.assign({}, inicio);
jogo.initializar();