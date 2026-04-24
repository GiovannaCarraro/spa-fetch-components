// let result = "Now active";
// let isActive = false;
// console.log(result, isActive)

// if (isActive = true) {
//     let result = "Active"
// }else{
//     result = "Now active"
// }

// console.log(result, isActive)

// let num = 'senai'

// try{


// let x = Math.round(4.6)








// }catch(erro){
//     let text = `
//     <strong>Nome do erro:</strong> ${erro.name} <br />
//     <strong>Mensagem:</strong> ${erro.menssage} <br />
//     <strong>Stack:</strong> <span>${erro.stack}</span> <br />`;

//     document.body.innerHTML = text
// };

// try{

// }catch(erro){
    
// }


const carregarComponente = async (caminho, container) => {
    try{
        const resposta = await fetch(caminho);

        if (!resposta.ok) {
            throw new Error('Erro ao carregar componente')
        }

        const html = await resposta.text();

        container.innerHTML = html

    } catch (erro) {
        console.error(erro)
    }
};