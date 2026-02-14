let vNum = [];
let slctNum = document.getElementById('slctNum');
let msg = document.getElementById('msg');

function enviar ()
{
    let num = document.getElementById('inum');
    let n = Number(num.value);
    

    if (vNum.indexOf(n)!= -1 || n < 1 || n > 100)
    {
        window.alert('Número inválido ou já digitado, por favor digite outro!');
    }
    else
    {

        vNum.push(n);

        let item = document.createElement('option');
        item.text = `Valor ${n} adicionado.`;
        slctNum.appendChild(item);
    }
    num.value = "";
    //Coloca o cursor dentro do input
    num.focus();
    
}

function finalizar()
{
    if (vNum.length == 0)
    {
        window.alert("Adicione valores antes de finalizar!")
    }
    else{
        msg.innerHTML = `<br><br> Ao todo, temos ` + vNum.length + ` valores adicionados.`

        //Math max retorna o maior número entre vários informados, serve para variáveis, nesse caso, por se tratar de um array, ele necessita dos "...", assim ele separa cada index como se fossem um único argumento.
        let maior = Math.max(... vNum);
        //Math min faz a mesma coisa, mas dessa vez ele retorna o menor número.
        let menor = Math.min(... vNum);
        let soma = 0;

        msg.innerHTML += `<br><br> O maior valor informado foi ${maior}`;
        msg.innerHTML += `<br><br> O menor número informado foi ${menor}`;

        for (let i = 0; i < vNum.length; i++)
        {
            soma += vNum[i];
        }

        let media = soma / vNum.length;

        msg.innerHTML += `<br><br> Somando todos os valores, temos ${soma}`
        msg.innerHTML += `<br><br> A média desses valores é ${media}`
    }
}
