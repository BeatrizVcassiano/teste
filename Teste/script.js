//botão de modo claro e escuro

let escuro = true;

document.body.classList.add("tema-escuro");

function mudarFundo(){

    escuro = !escuro;

    const btn = document.getElementById("btnTema");

    if(escuro){
        document.body.classList.remove("tema-claro");
        document.body.classList.add("tema-escuro");
        btn.innerHTML = "🌙";
    }else{
        document.body.classList.remove("tema-escuro");
        document.body.classList.add("tema-claro");
        btn.innerHTML = "☀️";
    }

}

//botão de código

document.addEventListener("DOMContentLoaded", () => {

    const botao = document.getElementById("botaoSecreto");

    if(botao){

        botao.addEventListener("click", () => {

            window.location.href = "amigo.html";

        });

    }

});