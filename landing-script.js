/**
 * Landing Page Script
 * Gerencia a interação dos cards da landing page
 */

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar Feather Icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

    // Obter todos os cards
    const landingCards = document.querySelectorAll('.landing-card');

    // Adicionar listeners aos cards
    landingCards.forEach(card => {
        // Clique do mouse
        card.addEventListener('click', handleCardClick);

        // Teclado (Enter ou Space)
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCardClick.call(this);
            }
        });

        // Ripple effect (opcional - efeito visual)
        card.addEventListener('mousedown', createRipple);
    });

    // Função para lidar com cliques nos cards
    function handleCardClick() {
        const route = this.getAttribute('data-route');
        
        if (route) {
            // Verificar se é uma rota relativa ou absoluta
            if (route.startsWith('/')) {
                // Navegação interna - redirecionar para o arquivo HTML correspondente
                const routeMap = {
                    '/mapa': 'mapa.html',
                    '/atendimento': 'atendimento.html',
                    '/direitos': 'direitos.html',
                    '/chatbot': 'chat.html'
                };

                const targetFile = routeMap[route] || 'index.html';
                
                // Marcar que o usuário já passou pela landing page nesta sessão
                sessionStorage.setItem('landingPageVisited', 'true');
                
                // Redirecionar
                window.location.href = targetFile;
            }
        }
    }

    // Efeito ripple (ondulação) ao clicar nos cards
    function createRipple(e) {
        const card = e.currentTarget;
        const ripple = document.createElement('span');
        
        const rect = card.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        // Remover ripples antigos se houver
        const oldRipple = card.querySelector('.ripple');
        if (oldRipple) {
            oldRipple.remove();
        }

        card.appendChild(ripple);
    }

    // Suporte para navegação por teclado (Tab)
    document.addEventListener('keydown', function(e) {
        // Suporte para navegação com setas e Enter
        if (e.key === 'Tab') {
            const activeElement = document.activeElement;
            if (activeElement.classList.contains('landing-card')) {
                // O navegador já cuida da navegação Tab padrão
            }
        }
    });

    console.log('Landing page inicializada com sucesso');
});

/**
 * Função para voltar à landing page (pode ser usada de outras páginas)
 */
function returnToLanding() {
    sessionStorage.removeItem('landingPageVisited');
    window.location.href = 'landing.html';
}

/**
 * Exportar a função para uso global
 */
window.returnToLanding = returnToLanding;
