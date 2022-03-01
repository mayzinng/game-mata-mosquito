
	var altura = 0
	var largura = 0
	var vidas = 1
	var tempo = 10


	var MoscaTime = 1800

	var nivel = window.location.search
	nivel = nivel.replace('?', '')


	if(nivel ==='normal') {
		MoscaTime = 1800
	} else if (nivel ==='médio') {
		MoscaTime = 1200
	} else if(nivel ==='difícil') {
	    MoscaTime = 800
	}

	// alert(nivel.replace('?', ''))
//altura e largura
function ajustaTamanho() { 
		altura = window.innerHeight
		largura = window.innerWidth
		console.log(altura, largura)
}

	ajustaTamanho()
//essa função mostra a adequação d etamanho da tela junto com o onresize 
//dentro da tag <body></body>


//função que faz as posições randomicas

var cronometro = setInterval(function () {
	tempo -= 1
	if (tempo == 0 && vidas < 3) {
		window.location.href = "vitoria.html"
	}
	document.getElementById('time').innerHTML = tempo
},1700)

function posicao() { 

//remover mosquito anterior caso exista

if(document.getElementById('mosquito')) { 

document.getElementById('mosquito').remove()

if (vidas > 3) { 

window.location.href = "fimjogo.html"

}

else {
	document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"

vidas++
}


}
var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90

//variaveis que arredondam a largura para baixo e escolhem posicionamento
//aleatório

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

// se posicaoX for menor q zero, atribua a posição ao objeto

console.log(posicaoY,posicaoX)

//criar elemento html

var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosca.png'
mosquito.className = tamanho() + ' ' + ladoAB()
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'

mosquito.onclick = function() {
	this.remove()
}


document.body.appendChild(mosquito)



// document.body.appendChild(mosquito1) //adincionou a imagem ao html
// document.body.appendChild(mosquito2) //adincionou a imagem ao html
 //adincionou a imagem ao html


}


function tamanho() {
	var classe = Math.floor(Math.random() * 3)
	
	// switch(classe){
	// 	case 0: 
	// 	return 'mosca1'

	// 	case 1:

	// 	return 'mosca2'

	// 	case 2:

	// 	return 'mosca3'

	// }

	if(classe == 0) {
		return 'mosca1'
	} else if (classe == 1) {
		return 'mosca2'
	} else {
		return 'mosca3'

	}
}

function ladoAB() {
	var classe = Math.floor(Math.random() * 2)
	
	switch(classe){
		case 0: 
		return 'ladoA'

		case 1:

		return 'ladoB'
	}

	
}