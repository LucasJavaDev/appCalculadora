function calcular(tipo, valor){
    console.log(tipo, valor)
    if(tipo === 'acao'){
        if(valor === 'c'){
            //lógica para limpar o elemento resultado
            document.getElementById('resultado').value = ''
        }
        //lógica dos botões ação
        if(valor === '+' || valor === '-' 
        || valor === '*' || valor === '/' 
        || valor === '.'){
            document.getElementById('resultado').value += valor
        }
        //lógica do botão de igualdade
        if( valor === '='){
            var valor_campo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_campo
            // console.log(valor_campo) para visualizar a lógica

        }
    }else if(tipo === 'valor'){
        //lógica para armazenar os valores em resultado
        document.getElementById('resultado').value += valor
    }
}