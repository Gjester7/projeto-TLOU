const botoesCarrossel = document.querySelectorAll('.botao'); // lista dos botoes
const imagens = document.querySelectorAll('.imagem')

botoesCarrossel.forEach((botao, indice) => { //para cada botao, executar o codigo:
	botao.addEventListener('click', () => { //quando um botao for clicado:
		
		desativarBotaoSelecionado();
		
		selecionarBotao(botao);
		
		esconderImagemAtiva();
		
		mostrarImagemDeFundo(indice);
	})
})

function desativarBotaoSelecionado() {
	const botaoSelecionado = document.querySelector('.selecionado')
		botaoSelecionado.classList.remove('selecionado');
}

function esconderImagemAtiva() {
	const imagemAtiva = document.querySelector('.ativa');
		imagemAtiva.classList.remove('ativa');
}

function selecionarBotao(botao) {
	botao.classList.add('selecionado');
}

function mostrarImagemDeFundo(indice) {
	imagens[indice].classList.add('ativa')
}