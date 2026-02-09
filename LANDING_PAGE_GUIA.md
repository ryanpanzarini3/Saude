<!-- 
LANDING PAGE - SAÚDE PG
Documentação de Implementação
-->

# Landing Page - Saúde PG

## 📋 Visão Geral

A landing page é uma tela inicial obrigatória que aparece antes de qualquer outra página do site Saúde PG. Ela força o usuário a escolher o que está procurando antes de acessar o conteúdo principal, melhorando usabilidade, organização e acessibilidade.

## 🎯 Objetivo

- Centralizar a navegação principal do site
- Melhorar a experiência do usuário (UX) com opções claras
- Organizar o acesso às 4 principais seções do site
- Reforçar a marca e identidade visual de "Saúde PG"

## 📁 Arquivos Criados

### 1. `landing.html`
Arquivo HTML principal da landing page com estrutura semântica.

**Conteúdo:**
- Título principal: "Como podemos te ajudar hoje?"
- Subtítulo: "Escolha uma opção para continuar"
- 4 Cards interativos com:
  - Ícone SVG (Feather Icons)
  - Título
  - Descrição
  - Seta de navegação
- Rodapé com mensagem: "Informação pública, gratuita e acessível"

### 2. `landing-style.css`
Arquivo CSS com todos os estilos da landing page.

**Recursos:**
- Gradiente azul-verde moderno como fundo
- Grid responsivo (2x2 desktop, 1 coluna mobile)
- Cards com efeito hover (elevação + zoom)
- Animações de entrada suave (fade + slide)
- Acessibilidade: contraste, navegação por teclado, aria-labels
- Modo escuro (prefers-color-scheme)
- Redução de movimento para acessibilidade (prefers-reduced-motion)

### 3. `landing-script.js`
Arquivo JavaScript com lógica de interação.

**Funcionalidades:**
- Inicialização de Feather Icons
- Event listeners para cliques e navegação por teclado
- Suporte a teclas Enter e Space
- Efeito ripple (ondulação) ao clicar
- Navegação para rotas específicas

## 🔄 Fluxo de Navegação

1. **Acesso ao site** → Redireciona para `landing.html`
2. **Clique no card** → Armazena sessão e redireciona para página específica
3. **Volta ao site** → Acessa diretamente a página sem ver landing novamente (mesma sessão)

### Rotas Disponíveis

- `/mapa` → `mapa.html` (Mapeamento de Unidades)
- `/atendimento` → `atendimento.html` (Onde Ser Atendido)
- `/direitos` → `direitos.html` (Direitos do Cidadão)
- `/chatbot` → `chat.html` (Chatbot de Saúde)

## 🔧 Integração no Projeto

A landing page foi integrada automaticamente em todas as páginas principais através de um script que verifica se o usuário já passou pela landing page nesta sessão (usando `sessionStorage`).

**Modificações realizadas:**
- `index.html` - Script de redirecionamento adicionado
- `mapa.html` - Script de redirecionamento adicionado
- `atendimento.html` - Script de redirecionamento adicionado
- `direitos.html` - Script de redirecionamento adicionado
- `chat.html` - Script de redirecionamento adicionado

## 🎨 Características de Design

### Cores
- **Fundo**: Gradiente azul (`#0F6BFF`) para verde (`#10B981`)
- **Cards**: Branco com sombra suave
- **Ícones**: Gradiente azul-cyan
- **Texto**: Cores com contraste adequado

### Tipografia
- **Título**: Poppins Bold 2.5rem (desktop) / 1.75rem (mobile)
- **Subtítulo**: Inter 1.125rem
- **Card Title**: Poppins Bold 1.25rem
- **Card Description**: Inter 0.95rem

### Responsividade
- **Desktop**: Grid 2x2 com padding de 2rem
- **Tablet**: Grid 2x2 com padding de 1.5rem
- **Mobile**: Grid 1x1 com padding de 1rem

## ♿ Acessibilidade

✅ **Implementado:**
- Atributos `aria-label` em todos os cards
- Navegação por teclado (Tab, Enter, Space)
- Contraste de cores WCAG AA (mínimo)
- Foco visível em elementos interativos
- Suporte a modo escuro (prefers-color-scheme)
- Respeita preferência de redução de movimento (prefers-reduced-motion)
- Espaço mínimo para toque em dispositivos móveis (56px)
- Texto legível e bem estruturado

## 🚀 Como Usar

### 1. Acessar a Landing Page
```
http://seu-dominio.com/landing.html
```

### 2. Primeira Visita
- O script detecta que é a primeira visita
- Marca na sessão (`sessionStorage`) que landing foi visitada
- Usuário clica em um card
- Sistema redireciona para a página correspondente

### 3. Navegar para Outro Card (mesma sessão)
- O `sessionStorage` ainda está marcado
- Usuário pode acessar outras páginas sem ver landing novamente
- Ao sair e voltar (nova janela/aba), landing aparece novamente

### 4. Voltar à Landing Page
Use a função JavaScript:
```javascript
returnToLanding();
```

## 🎭 Animações

### Entrada
- **Title + Subtitle**: Fade in suave (0.8s)
- **Cards**: Fade in + slide up com delay escalonado (0.1s - 0.4s)

### Hover
- **Elevação**: TranslateY -8px
- **Ícone**: Scale 1.1
- **Sombra**: Aumenta intensidade
- **Seta**: TranslateX +4px

## 📱 Suporte Móvel

- ✅ Totalmente responsivo
- ✅ Touch-friendly (mínimo 56px de altura)
- ✅ Otimizado para diferentes tamanhos de tela
- ✅ Velocidade de animação preservada
- ✅ Viewport configurado corretamente

## 🔐 Segurança

- Uso de `sessionStorage` (não persiste entre sessões)
- Sem requisições externas sensíveis
- Apenas redirecionamento para páginas locais
- HTML semântico e validado

## 💡 Extras Implementados

✅ Animação de entrada suave com fade + slide  
✅ Efeito ripple ao clicar  
✅ Rodapé com mensagem institucional  
✅ Gradiente moderno azul + verde  
✅ Layout grid responsivo  
✅ Cards com hover elegante  
✅ Navegação por teclado  
✅ Ícones SVG otimizados  
✅ Modo escuro  
✅ Suporte a acessibilidade completo  

## 📝 Personalização

### Alterar Cores
Editar em `landing-style.css`:
```css
:root {
    --primary-blue: #0F6BFF;
    --primary-green: #10B981;
    /* ... */
}
```

### Alterar Rotas
Editar em `landing.html`:
```html
<button class="landing-card" data-route="/nova-rota">
```

E em `landing-script.js`:
```javascript
const routeMap = {
    '/nova-rota': 'nova-pagina.html'
};
```

### Alterar Ícones
Editar em `landing.html` (usar nomes de Feather Icons):
```html
<svg data-feather="novo-icone"></svg>
```

## 🐛 Troubleshooting

### Landing page não aparece
- Verificar se `sessionStorage` está habilitado
- Verificar se os arquivos estão no caminho correto
- Ver console para erros

### Redirecionamento não funciona
- Confirmar que os nomes dos arquivos HTML estão corretos
- Verificar caminhos relativos em `landing-script.js`
- Testar em servidor local (não funciona em file://)

### Ícones não aparecem
- Confirmar que Feather Icons está carregado
- Chamar `feather.replace()` após DOM pronto
- Verificar nomes de ícones válidos

## 📞 Suporte

Para modificações ou problemas, consulte os comentários no código-fonte dos arquivos.

---

**Versão**: 1.0  
**Última atualização**: Fevereiro 2026  
**Status**: ✅ Produção
