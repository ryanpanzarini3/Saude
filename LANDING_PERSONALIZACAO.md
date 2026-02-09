<!-- 
LANDING PAGE - EXEMPLOS DE PERSONALIZAÇÃO
Guia prático para customizar cores, textos e comportamento
-->

# 🎨 Personalização da Landing Page

Este guia mostra como fazer personalizações comuns na landing page Saúde PG.

## 1. Alterar Cores

### Método 1: Editar variáveis CSS

Arquivo: `landing-style.css`

```css
:root {
    --primary-blue: #0F6BFF;      /* Azul principal */
    --primary-green: #10B981;     /* Verde principal */
    --primary-cyan: #00D4FF;      /* Cyan dos ícones */
    --primary-dark: #1a1f3a;      /* Texto escuro */
    --text-secondary: #64748b;    /* Texto cinza */
    /* ... outros */
}
```

**Exemplo**: Mudar para tons de roxo:
```css
:root {
    --primary-blue: #7C3AED;      /* Roxo vibrant */
    --primary-green: #A855F7;     /* Roxo claro */
    --primary-cyan: #C4B5FD;      /* Roxo suave */
}
```

### Método 2: Editar gradiente do fundo

Arquivo: `landing-style.css`, procurar por:
```css
body.landing-page {
    background: linear-gradient(135deg, #0F6BFF 0%, #10B981 100%);
}
```

Mudar para:
```css
body.landing-page {
    background: linear-gradient(135deg, #EC4899 0%, #F59E0B 100%);
}
```

## 2. Alterar Textos

### Título e Subtítulo

Arquivo: `landing.html`

```html
<!-- ANTES -->
<h1 class="landing-title">Como podemos te ajudar hoje?</h1>
<p class="landing-subtitle">Escolha uma opção para continuar</p>

<!-- DEPOIS -->
<h1 class="landing-title">Bem-vindo ao portal de saúde</h1>
<p class="landing-subtitle">Selecione o serviço desejado</p>
```

### Conteúdo dos Cards

Arquivo: `landing.html`

```html
<!-- ANTES -->
<button class="landing-card" data-route="/mapa">
    <h2 class="card-title">Mapeamento de Unidades</h2>
    <p class="card-description">Encontre postos, UBS e hospitais próximos</p>
</button>

<!-- DEPOIS -->
<button class="landing-card" data-route="/localizacao">
    <h2 class="card-title">Encontrar Unidades</h2>
    <p class="card-description">Localize a unidade mais próxima de você</p>
</button>
```

### Texto do Rodapé

Arquivo: `landing.html`

```html
<!-- ANTES -->
<p class="footer-text">Informação pública, gratuita e acessível</p>

<!-- DEPOIS -->
<p class="footer-text">© 2026 Secretaria de Saúde - Ponta Grossa</p>
```

## 3. Adicionar Novo Card

### Passo 1: Adicionar HTML

Arquivo: `landing.html`

```html
<!-- Adicionar antes do fechamento da grid -->
<button class="landing-card" data-route="/novo-servico" aria-label="Novo Serviço - Descrição aqui">
    <div class="card-icon-wrapper">
        <svg data-feather="star" class="card-icon"></svg>
    </div>
    <h2 class="card-title">Novo Serviço</h2>
    <p class="card-description">Descrição do novo serviço</p>
    <span class="card-arrow">→</span>
</button>
```

### Passo 2: Adicionar Rota

Arquivo: `landing-script.js`

```javascript
// Encontrar a seção 'routeMap' na função handleCardClick
const routeMap = {
    '/mapa': 'mapa.html',
    '/atendimento': 'atendimento.html',
    '/direitos': 'direitos.html',
    '/chatbot': 'chat.html',
    '/novo-servico': 'novo-servico.html'  // ← Adicionar esta linha
};
```

### Passo 3: Definir Ícone (opcional)

Feather Icons disponíveis:
- `star` - Estrela
- `heart` - Coração
- `bell` - Sino
- `settings` - Configurações
- `phone` - Telefone
- `book` - Livro
- `eye` - Olho
- `calendar` - Calendário

[Ver todos os ícones](https://feathericons.com/)

## 4. Alterar Animações

### Velocidade de Entrada

Arquivo: `landing-style.css`

```css
@keyframes fadeInUp {
    /* ... */
}

.landing-card {
    animation: fadeInUp 0.6s ease-out backwards;
    /* ↑ Mudar 0.6s para velocidade desejada */
}
```

**Valores sugeridos:**
- `0.3s` - Muito rápida
- `0.6s` - Normal (padrão)
- `1s` - Lenta
- `1.5s` - Muito lenta

### Efeito Hover

Arquivo: `landing-style.css`

```css
.landing-card:hover {
    transform: translateY(-8px);  /* Mudar -8px para outro valor */
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}
```

**Exemplos:**
```css
/* Mais elevação */
transform: translateY(-12px);

/* Menos elevação */
transform: translateY(-4px);

/* Zoom em vez de elevação */
transform: scale(1.05);

/* Ambos */
transform: translateY(-8px) scale(1.02);
```

## 5. Alterar Tipografia

### Fonte do Título

Arquivo: `landing-style.css`

```css
.landing-title {
    font-family: 'Poppins', sans-serif;  /* Mudar aqui */
    font-size: 2.5rem;
    font-weight: 800;
}
```

**Fontes alternativas (importadas em landing.html):**
- Poppins
- Inter
- Roboto
- Open Sans

**Para adicionar outra fonte:**

1. Adicionar link em `landing.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
```

2. Usar em CSS:
```css
.landing-title {
    font-family: 'Playfair Display', serif;
}
```

### Tamanho de Título

```css
.landing-title {
    font-size: 2rem;     /* Menor */
    /* ou */
    font-size: 3rem;     /* Maior */
}
```

## 6. Layout e Grid

### Mudar Número de Colunas

Arquivo: `landing-style.css`

```css
.landing-cards-grid {
    grid-template-columns: repeat(2, 1fr);  /* 2 colunas */
    /* Opções: */
    /* repeat(1, 1fr)  → 1 coluna */
    /* repeat(3, 1fr)  → 3 colunas */
    /* repeat(4, 1fr)  → 4 colunas */
}
```

### Aumentar Espaço Entre Cards

```css
.landing-cards-grid {
    gap: 1.5rem;        /* Atual */
    /* Mudar para: */
    gap: 2rem;          /* Mais espaço */
    gap: 1rem;          /* Menos espaço */
}
```

### Aumentar Padding

```css
.landing-container {
    padding: 2rem;      /* Atual */
    /* Mudar para: */
    padding: 3rem;      /* Mais padding */
    padding: 1rem;      /* Menos padding */
}
```

## 7. Redirecionamentos Customizados

### Redirecionar para URL externa

Arquivo: `landing-script.js`

```javascript
function handleCardClick() {
    const route = this.getAttribute('data-route');
    
    if (route.startsWith('http')) {
        // Link externo
        window.open(route, '_blank');
    } else {
        // Link local
        sessionStorage.setItem('landingPageVisited', 'true');
        window.location.href = routeMap[route] || 'index.html';
    }
}
```

Usar em HTML:
```html
<button class="landing-card" data-route="https://exemplo.com">
```

### Adicionar Função ao Clicar

```javascript
// Em landing-script.js, dentro de handleCardClick
if (route === '/mapa') {
    console.log('Usuário clicou em Mapa');
    // Fazer algo antes de redirecionar
}
```

## 8. Modo Escuro Customizado

Arquivo: `landing-style.css`

```css
@media (prefers-color-scheme: dark) {
    body.landing-page {
        background: linear-gradient(135deg, #0A4BAD 0%, #0D8B5C 100%);
    }

    .landing-card {
        background: #1f2937;
        color: white;
    }
    
    /* Adicionar mais estilos aqui */
}
```

## 9. Remover a Landing Page (voltar ao fluxo antigo)

Se não quiser mais a landing page obrigatória:

1. Remover script de redirecionamento de todas as páginas:

```javascript
// REMOVER estas linhas de index.html, mapa.html, etc:
if (!sessionStorage.getItem('landingPageVisited')) {
    window.location.href = 'landing.html';
}
```

2. Deletar arquivos (opcional):
   - landing.html
   - landing-style.css
   - landing-script.js

## 10. Checklist de Personalização Comum

- [ ] Mudar cores para brand colors da prefeitura
- [ ] Atualizar textos dos cards
- [ ] Adicionar novo card se necessário
- [ ] Ajustar animações (velocidade, tipo)
- [ ] Testar em mobile
- [ ] Testar navegação por teclado
- [ ] Testar modo escuro
- [ ] Validar contraste de cores
- [ ] Atualizar SEO meta tags
- [ ] Testar em diferentes navegadores

## 📞 Troubleshooting

### Cores não estão mudando
- Verificar se CSS está sendo carregado
- Limpar cache do navegador (Ctrl+Shift+Delete)
- Verificar console para erros

### Cards com layout estranho
- Verificar se grid está corretamente configurada
- Testar em different resolutions
- Ver se max-width está bom

### Ícones não aparecem
- Confirmar que Feather Icons está carregado
- Verificar nome do ícone (deve existir em feathericons.com)
- Chamar `feather.replace()` em landing-script.js

### Animações muito lentes/rápidas
- Ajustar valores em CSS (0.3s, 0.6s, 1s, etc)
- Testar diferentes easing: ease, ease-in, ease-out, ease-in-out

---

**Dúvidas?** Consulte o LANDING_PAGE_GUIA.md para documentação completa!
