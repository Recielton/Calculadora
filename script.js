const resultado = document.querySelector('.result');
const confirmar = document.querySelector('.igual');

// função para inserir os valores
function insert(valor){
    resultado.innerHTML += valor;
}

// função para limpar os valores
function clean(){
    resultado.innerHTML = ' ';
}

// função para exluir um valor por vez
function backspace(){
    if(resultado.textContent){
        let result = document.getElementById('resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length -1);
    }
}

// função para mostrar o resultado no visor
function confirma(){
    if(resultado.textContent != 'Erro'){
        document.getElementById('resultado').innerHTML = eval(resultado.innerHTML)
    }
}