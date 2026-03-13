const carrinho = document.querySelector('.total-carrinho');
const carrinho2 = document.querySelector(".total-carrinho2");
const botoes = document.querySelectorAll(".botao");
const botoes2 = document.querySelectorAll(".botao2");


let contador = 0;
let totalvalor = 0;



botoes.forEach(function (botaoindividual) {
    botaoindividual.addEventListener("click", function () {
        const cardPrincipal = botaoindividual.closest(".card")
        const precounitario = cardPrincipal.querySelector(".card-preco").innerText;
        const valorNumerico = parseFloat(precounitario.replace("R$", "").replace(",", "."));

        alert("Produto ADICIONADO!");
        botaoindividual.classList.add("animar");
        setTimeout(function () {
            botaoindividual.classList.remove("animar");
        }, 100)

        contador = contador + 1;
        totalvalor = totalvalor + valorNumerico;


        carrinho.innerText = `${contador} itens | Total: R$ ${totalvalor.toFixed(2)}`;
    })

})

botoes2.forEach(function (botaoindividual) {
    botaoindividual.addEventListener("click", function () {
        const cardPrincipal = botaoindividual.closest(".card")
        const precounitario = cardPrincipal.querySelector(".card-preco").innerText;
        //    o ParseFloat transforma a string em numero (int),o replace troca a virgula 
        //   pelo ponto e tira esse R$ como indicado no codigo
        const valorNumerico = parseFloat(precounitario.replace("R$", "").replace(",", "."));

        

        alert("Produto RETIRADO!");
         botaoindividual.classList.add("animar");
        setTimeout(function () {
            botaoindividual.classList.remove("animar");
        }, 100)


        if (contador > 0) {
            contador = contador - 1;
        }
        if (totalvalor > 0) {
            totalvalor= totalvalor - valorNumerico;
        } 
            
        
        // tofixed garante 2 casas depois da virgula;
        carrinho.innerText = `${contador} itens | Total: R$ ${totalvalor.toFixed(2)}`;

    })
})

