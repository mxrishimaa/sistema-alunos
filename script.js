const readline = require("readline-sync");

// ========================================
// SISTEMA DE ALUNOS
// ========================================

let alunos = [];

let executando = true;

while (executando) {

    console.log("\n==============================");
    console.log("      SISTEMA DE ALUNOS");
    console.log("==============================");
    console.log("1 - Cadastrar aluno");
    console.log("2 - Listar alunos");
    console.log("3 - Consultar aluno");
    console.log("4 - Ver situação dos alunos");
    console.log("5 - Sair");
    console.log("==============================");

    let opcao = readline.question("Escolha uma opcao: ");

    switch (opcao) {

        // --------------------------------
        // CADASTRAR
        // --------------------------------
        case "1":
                console.log("\n--- CADASTRO DE ALUNO ---");
    
                let nome = readline.question("Nome: ");
                let idade = Number(readline.question("Idade: "));
                let nota = parseFloat(readline.question("Nota: "));

            // Verificar se a nota está entre 0 e 10
            if (Number.isNaN(nota) || nota < 0 || nota > 10) {
                console.log("Dado inválido, digite novamente!")
                break;
            }
            // Criar um objeto aluno
            let aluno = {
                "Nome": nome.trim(),
                "Idade": idade,
                "Nota": nota
            }
            // Adicionar o aluno ao array
            alunos.push(aluno);
            console.log("Aluno cadastrado com sucesso!")

        // --------------------------------
        // LISTAR
        // --------------------------------
        case "2":

            console.log("1 - Listar");
            console.log("2 - Buscar");
            let opcao = readline.question("Escolha uma opcao: ");

            switch (opcao) {
            
            // Verificar se existem alunos cadastrados
            case "1":
                console.log("\n--- ALUNOS CADASTRADOS ---");
                console.log(alunos);
                
            // Percorrer o array utilizando FOR
            for (let aluno in alunos) {
                console.log()
            }
            // Mostrar:
            // Nome
            // Idade
            // Nota


            break;


        // --------------------------------
        // CONSULTAR
        // --------------------------------
        case "3":

            console.log("\n--- CONSULTAR ALUNO ---");

            let nomeBusca = readline.question("Digite o nome: ");

            let alunoEncontrado = false;

            // TODO:
            // Percorrer o array procurando
            // pelo nome informado.

            // Se encontrar:
            // - Mostrar os dados
            // - Alterar alunoEncontrado para true
            // - Utilizar BREAK


            if (!alunoEncontrado) {
                console.log("Aluno nao encontrado.");
            }

            break;


        // --------------------------------
        // SITUAÇÃO
        // --------------------------------
        case "4":

            console.log("\n--- SITUACAO DOS ALUNOS ---");

            // TODO:
            // Percorrer todos os alunos

            // Se nota >= 7
            //    Aprovado
            //
            // Senão se nota >= 5
            //    Recuperacao
            //
            // Senão
            //    Reprovado


            break;


        // --------------------------------
        // SAIR
        // --------------------------------
        case "5":

            console.log("\nSistema encerrado!");

            executando = false;

            break;


        // --------------------------------
        // OPÇÃO INVÁLIDA
        // --------------------------------
        default:

            console.log("\nOpcao invalida!");

            break;
    }
}
