let num = [5, 8, 2, 9, 3];

num.push(1);
num.sort();
console.log(num);
console.log(`Nosso vetor tem ${num.length} posições.`);
console.log(`A primeira posição é ${num[0]}`);

/*
for (let i = 0; i < num.length; i++)
{
    console.log(num[i]);
}
*/

for (let i in num)
{
    console.log(num[i]);
}
