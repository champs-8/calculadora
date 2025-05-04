//animação de clique
const btn = document.getElementsByTagName('button');

const soltou = (data) => {
    let tag = document.getElementById(data);
    if(tag.classList.contains('clicado')){
        tag.classList.remove('clicado');
    }
}
const clicou = (data) => {
    let tag = document.getElementById(data);
    if(tag.classList.contains('clicado') == false){
        tag.classList.add('clicado');
    }
}
//tudo ok
//=========================================================


//calculos
const insert = (num) => {
    const contas = document.querySelector('#contas');
    const resultado = document.querySelector('#resultado');
    const operadores = ['+', '-', '*', '/', '^'];
    const raiz = '√';

    if (contas.innerHTML === '' && resultado.innerHTML !== '') {
        if (operadores.includes(num) || num === raiz) {
            contas.innerHTML = resultado.innerHTML + num;
        } else {
            contas.innerHTML = num;
            resultado.innerHTML = '';
        }
    } else {
        const atual = contas.innerHTML;
        const ultimo = atual[atual.length - 1];

        // Impede dois operadores seguidos (exceto raiz)
        if (operadores.includes(ultimo) && operadores.includes(num)) {
            contas.innerHTML = atual.slice(0, -1) + num;

        // Impede dois '√' seguidos
        } else if (ultimo === raiz && num === raiz) {
            return; // Ignora o segundo √

        } else {
            contas.innerHTML += num;
        }
    }
};



const calcular = () => {
    let contas = document.querySelector('#contas').innerHTML;

    if (contas) {
        // Substitui todas as ocorrências de √n por Math.sqrt(n)
        contas = contas.replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)');

        // Substitui potências do tipo 2^3
        contas = contas.replace(/(\d+)\^(\d+)/g, 'Math.pow($1,$2)');

        try {
            let resultadoFinal = eval(contas);
            document.querySelector('#resultado').innerHTML = resultadoFinal;
            document.querySelector('#contas').innerHTML = '';
        } catch (e) {
            document.querySelector('#resultado').innerHTML = 'Erro';
        }
    } else {
        document.querySelector('#resultado').innerHTML = '0';
    }
};


//=========================================================

//demais funções
const limpar = () => {
    document.getElementById('contas').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}

const deletar = () => {
    let del = document.getElementById('contas').innerHTML;
    document.getElementById('contas').innerHTML = del.substring(0, del.length-1);
}

//funções das teclas
