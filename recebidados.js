function soNumero(str) { //Função que devolve apenas os números de uma string
    str = str.toString();
    return str.replace(/\D/g, "");
}

function valida(){ // Função que recebi o retorno da função testaCpf 
    var local = document.getElementById ('local').value;
    var nome = document.getElementById ('nome').value;
    var exame = document.getElementById ('exame').value;
    var data = document.getElementById ('data').value;
    var email = document.getElementById ('email').value;
    var fone = document.getElementById ('txttelefone').value;
    var msg = document.getElementById ('msg').value;
    var cpf = document.getElementById ('cpf').value;
    
    /* Variável apenas com números */
    var foneNum = soNumero(fone);
    var cpfNum = soNumero(cpf);

    //console.log('Variavel cpf' + cpf + '\n' + 'Variavel fone' + fone + '\n');
    //console.log('Variavel cpfNum' + cpfNum + '\n' + 'Variavel foneNum' + foneNum + '\n');

    //Verifica se o valor passado está vazio
    if (cpf == null){
        alert('CPF Vazio');
    }
    /*
        Primeira Forma de Imprimir Conteúdo
        document.getElementById('retorno').innerText = 'CPF Válido' + 'Local do Exame: ' + local + 'Data do Exame: ' + data;

        Segunda Forma de imprimir conteúdo
        var div = document.getElementById("divResultado");
        div.innerText = "<h1>" + titulo +"</h1>"+ "\n" + subtitulo;
    */
    //Chama a função que verifica se o CPF é válido e retorna
    if(testaCPF(cpfNum) == true){
        document.getElementById('retornoDadosPessoais').innerText = 'Nome: ' + nome + '\n' + 'Fone: ' + fone + '\n' + 'CPF: ' + cpf;
        document.getElementById('retornoDadosExames').innerText = 'Local: ' + local + '\n' + 'Exame: ' + exame + 'Data: ' + data;
        document.getElementById('retornoDadosMsg').innerText = 'Mensagem: ' + msg;
        document.getElementById('retorno').innerText = 'Local do Exame: ' + local + '\n' + 'Data do Exame: ' + data + '\n' + 'Exame: ' + exame
        + '\n' + 'Mensagem Informada: ' + msg ;
        //alert('CPF Válido');
    }else{
        document.getElementById("retorno").innerText = 'CPF Inválido';
        //alert('CPF Inválido');
    }
}

function testaCPF(strCPF) { //Função com o cálculo que valida o CPF
    var Soma, digitos_iguais;
    var Resto;
    Soma = 0;

    //Verifica se todos os números são iguais
    for (i = 0; i < strCPF.length - 1; i++){
        if(strCPF.charAt(i) != strCPF.charAt(i + 1)){
            digitos_iguais = 0;
            break;
        }else{
            alert('CPF com Números Repetidos');
            window.location.href = 'index.php';
            digitos_iguais++;
        }
    }
    
    for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i); 
    
    Resto = (Soma * 10) % 11;
    
    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;
    
    Soma = 0;
    
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    
    Resto = (Soma * 10) % 11;
    
    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    
    return true;
}