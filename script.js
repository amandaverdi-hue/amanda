document.addEventListener('DOMContentLoaded', () => {
    // Função simples para demonstrar JavaScript
    // Pode ser expandida para validação de formulário, efeitos visuais, etc.
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Previne o envio padrão do formulário
            alert('Mensagem enviada com sucesso! 🎬\n\n(Esta é uma simulação. Em um site real, a mensagem seria enviada para um servidor.)');
            contactForm.reset(); // Limpa o formulário após o "envio"
        });
    }

    // Exemplo de função para destacar cards (pode ser ativada com um evento, por exemplo)
    const movieCards = document.querySelectorAll('.card');
    movieCards.forEach(card => {
        card.addEventListener('click', () => {
            console.log('Card clicado:', card.querySelector('h3').textContent);
            // Adicione aqui a lógica para destacar o card, abrir um modal, etc.
            // Por exemplo, adicionar uma classe para um efeito visual:
            // card.classList.toggle('highlight-card');
        });
    });
});

    console.log('Script.js carregado com sucesso!');
});
