function verificarSenha(){

    const senha =
        document.getElementById("senhaVilao")
        .value
        .toLowerCase();

    if(senha === "johan"){

        alert("Vilão descoberto!");

        window.location.href = "vilao-secreto.html";

    }else{

        alert("Código incorreto.");

    }

}