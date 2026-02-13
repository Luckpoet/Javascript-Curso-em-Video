function carregar() 
{
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var data = new Date;
    var hora = data.getHours();
    var min = data.getMinutes();
    min = min.toString();
    min = min.padStart(2, "0");

    if (hora >= 0 && hora < 12)
    {
        //BOM DIA!
        msg.innerHTML = `Agora são ${hora}:${min}. <strong>Bom Dia!</strong>`;
        img.src = `manha.png`;
        document.body.style.backgroundColor = "#e2cd9f"
    }
    else if (hora >= 12 && hora <= 18)
    {
        //BOA TARDE!
        msg.innerHTML = `Agora são ${hora}:${min}. <strong>Boa Tarde!</strong>`;
        img.src = `tarde.png`;
        document.body.style.backgroundColor = "#b9846f";
    }
    else 
    {
        //BOA NOITE
        msg.innerHTML = `Agora são ${hora}:${min}. <strong>Boa Noite!</strong>`;       
        img.src = `noite.png`;
        document.body.style.backgroundColor = "#515154"
    }
}