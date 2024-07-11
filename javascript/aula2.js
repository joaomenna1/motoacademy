// //estrutura de dados


// const pessoa = {
//     nome: "joao",
//     idade: 29,
//     profissao: "dev",
//     saudacao: function () {
//         console.log("oi mundo");
//     }
// }


// console.log(pessoa);
// console.log(pessoa.nome);
// console.log(pessoa['nome']);
// pessoa.saudacao()

const pessoas = [
    {
        nome: "eucides",
        idade: 22,
        profissao: "analista de sistemas"
    },
    {
        nome: "teleze",
        idade: 24,
        profissao: "analista de sistemas"
    },
    {
        nome: "eucieucidesdes",
        idade: 29,
        profissao: "analista de sistemas"
    },{
        nome: "eucideucideses",
        idade: 40,
        profissao: "analista eucidesde sistemas"
    },{
        nome: "tucuma",
        idade: 40,
        profissao: "analista de eeucidesucides"
    }

]

// for (let contador = 0; contador < pessoas.length; contador++) {
//     if (pessoas[contador].idade > 22) {
//         console.log(pessoas[contador]);
//     }  
// }

// pessoas.map((pessoas) => {
//     if (pessoas.idade > 22) {
//         console.log(pessoas.nome);
//     }
// })

pessoas.filter((pessoas) => {
    if (pessoas.nome != "eucides") {
        console.log(pessoas.nome);
    }
})