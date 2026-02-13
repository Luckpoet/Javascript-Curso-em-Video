var dia = new Date();
var hora = dia.getHours();
var minutos = dia.getMinutes();
console.log(`Agora são exatamente ${hora} horas e ${minutos} minutos.`);

if (hora > 0 && hora < 6)
{
    console.log("Boa madrugada!");
}
else if (hora < 12)
{
    console.log("Bom dia!");
}
else if (hora <= 18)
{
    console.log("Boa tarde!");
}
else 
{
    console.log("Boa noite!");
}