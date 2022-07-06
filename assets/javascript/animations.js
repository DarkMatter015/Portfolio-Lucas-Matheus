// Mouse na foto e botão principal
const case_foto= document.querySelector('#inicio-case-foto')
const botao= document.querySelector('#inicio-botao')

const foto= document.querySelector('#inicio-foto')
const texto= document.querySelector('#inicio-texto-foto')

function mouseover(){
    foto.style.opacity= 0.5;
    texto.style.opacity= 1;
    texto.style.zIndex= 1;
    texto.style.letterSpacing= '0.2rem';
}

function mouseout(){
    foto.style.opacity= 1;
    texto.style.opacity= 0;
    texto.style.zIndex= 0;
    texto.style.letterSpacing= 'normal';
}

function mouseclick(){
    foto.style.opacity= 0.5;
    texto.style.opacity= 1;
    texto.style.zIndex= 1;
    texto.style.letterSpacing= '0.2rem';
    texto.select()
    document.execCommand('copy')
    document.querySelector('#inicio-case-foto').setAttribute('title', 'Copiado')
    document.querySelector('#inicio-botao').setAttribute('title', 'Copiado')
}


// Animação de escrever o nome
function escrever(texto){
    const lista_texto= texto.innerHTML.split("")
    texto.innerHTML= ''
    console.log(lista_texto)
    lista_texto.forEach(function(letra, i){
        setTimeout(()=>{
            texto.innerHTML += letra
        }, 550 * i)
    })

}
const p= document.querySelector('#inicio-titulo-nome')
escrever(p)