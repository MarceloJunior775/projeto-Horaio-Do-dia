    let res = document.querySelector('div.res')
    let resHora = document.querySelector('div.resHora')
    let img = document.querySelector('img#img')
    let h1 = document.querySelector('h1#h1')
function carregar(){
   
    //aqui estou pegando a hora em que meu programa esta rodando
    const agora = new Date()
    const hora = agora.getHours()
    //aqui estou pegando os minutos do horario em que o programa esta sendo usado
    const agoram = new Date()
    const minutos = agoram.getMinutes()

    if(hora >= 0 && hora <= 9){
        img.src = 'capa-cafedamanha.jpg'
        resHora.innerHTML = `${hora}${minutos}`
        res.innerHTML = 'Bom dia! é hora do cafe'
        document.body.style.background = 'orange'
    }
    else if (hora > 9 && hora <= 12){
        img.src = 'capa-almoco.jpg'
        resHora.innerHTML = `${hora}:${minutos}`  
        res.innerHTML = 'Bom dia! é hora do almoço'
        document.body.style.background = 'yellow'
    }
    else if(hora == 15 || hora == 16){
        img.src = 'capa-cafedatarde.jpg'
        resHora.innerHTML = `${hora}:${minutos}`  
        res.innerHTML = 'Boa tarde! é hora do café da tarder'
        document.body.style.background = 'blue'
    }
    else if(hora >= 18 && hora <= 22){
        img.src = 'capa-jantar.jpg'
        resHora.innerHTML = `${hora}:${minutos}`   
        res.innerHTML = 'Boa noite, é hora do jantar'
        h1.style.color = 'white'
        document.body.style.background = 'black'
    }
}