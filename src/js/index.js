 var imgAtual = "check-icon-mobile-checked.png";
 var imgAnterior = "check-icon-mobile.png";


 function trocar(){
    document.getElementById("figura").src = imgAtual;
    let aux = imgAtual;
    imgAtual = imgAnterior;
    imgAnterior = aux;
}


// JS da seção "tire suas dúvidas"

const pergunta = document.querySelectorAll('.pergunta')
 const resposta = document.querySelectorAll('.resposta')

 for(let i = 0; i < pergunta.length; i++){
     pergunta[i].addEventListener('click', () => {
         if(pergunta[i].classList.contains('fechar')){
             pergunta[i].classList.toggle('fechar')
             resposta[i].classList.toggle('ativar')
        }else{
           pergunta[i].classList.add('fechar')
             resposta[i].classList.add('ativar')
        }
    })
}