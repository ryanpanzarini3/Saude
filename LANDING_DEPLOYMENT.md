<!-- 
LANDING PAGE - DEPLOYMENT E BOAS PRÁTICAS
Guia para deploy em produção e otimização
-->

# 🚀 Landing Page - Deployment e Boas Práticas

## 1. Pré-Deployment Checklist

### ✅ Funcionalidade
- [ ] Todos os 4 cards redirecionam corretamente
- [ ] Landing page aparece na primeira visita
- [ ] Navegação por teclado funciona (Tab, Enter, Space)
- [ ] Responsive em mobile, tablet e desktop
- [ ] Modo escuro funciona
- [ ] Animações rodam suavemente

### ✅ Acessibilidade
- [ ] aria-labels em todos os cards
- [ ] Contraste de cores verificado (WCAG AA)
- [ ] Sem erros no console
- [ ] Funciona com leitores de tela
- [ ] Sem repetição desnecessária de código

### ✅ Performance
- [ ] CSS é mínimo e otimizado
- [ ] Feather Icons está em CDN
- [ ] Sem bloqueios de renderização
- [ ] Modo escuro não causa flicker
- [ ] Animações usam GPU (transform)

### ✅ SEO
- [ ] Meta tags corretas
- [ ] Title apropriado
- [ ] Description completa
- [ ] Open Graph tags (opcional)
- [ ] Schema.org markup (opcional)

## 2. Estrutura Final de Arquivos

```
/
├── landing.html              ✨ Página principal
├── landing-style.css         🎨 Estilos
├── landing-script.js         ⚙️ Lógica
├── LANDING_README.md         📖 Resumo rápido
├── LANDING_PAGE_GUIA.md      📚 Documentação completa
├── LANDING_PERSONALIZACAO.md 🎨 Exemplos de customização
├── LANDING_DEPLOYMENT.md     🚀 Este arquivo
├── landing-teste.html        🧪 Página de validação
├── index.html                📄 Modificado
├── mapa.html                 📄 Modificado
├── atendimento.html          📄 Modificado
├── direitos.html             📄 Modificado
├── chat.html                 📄 Modificado
└── ...
```

## 3. Deploy em Servidor

### Passo 1: Verificar Arquivos
```bash
# Confirmador que os 3 arquivos principais existem:
# - landing.html (≈ 5KB)
# - landing-style.css (≈ 8KB)
# - landing-script.js (≈ 2KB)

# Total: ≈ 15KB
```

### Passo 2: Upload via FTP/SFTP
```bash
# Usar cliente FTP (FileZilla, WinSCP, etc)
# Ou linha de comando:

# SFTP
sftp user@server.com
put landing.html
put landing-style.css
put landing-script.js

# Depois update nas 5 páginas
put index.html
put mapa.html
put atendimento.html
put direitos.html
put chat.html
```

### Passo 3: Verificar Permissões
```bash
# Linux/Mac
chmod 644 landing.html
chmod 644 landing-style.css
chmod 644 landing-script.js

# Ou:
chmod 755 *
```

### Passo 4: Testar em Produção
1. Abrir em navegador incógnito
2. Visitar: `https://seu-dominio.com/landing.html`
3. Testar cada card
4. Testar navegação por teclado
5. Testar em mobile (DevTools)

## 4. Otimização para Produção

### CSS Minificado (Opcional)
Se quiser reduzir tamanho:

```css
/* ANTES: landing-style.css (8KB) */

/* DEPOIS: landing-style.min.css (≈5KB) */
body.landing-page{font-family:'Inter',...}
```

**Ferramentas:**
- [CSS Minifier](https://cssminifier.com/)
- [Minify Tools](https://www.minifytools.com/)

**Em HTML:**
```html
<link rel="stylesheet" href="landing-style.min.css">
```

### JavaScript Minificado (Opcional)
```javascript
// ANTES
function handleCardClick() { ... }

// DEPOIS (minificado)
function a(){...}
```

**Ferramentas:**
- [JavaScript Minifier](https://www.minifytools.com/)
- [Terser](https://terser.org/)

### Lazy Loading para Imagens (Se usar)
```html
<img loading="lazy" src="...">
```

## 5. Analytics e Monitoramento

### Rastrear Cliques nos Cards

Adicionar em `landing-script.js`:

```javascript
function handleCardClick() {
    const route = this.getAttribute('data-route');
    const cardTitle = this.querySelector('.card-title').textContent;
    
    // Google Analytics (se usar)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'landing_card_click', {
            'card_name': cardTitle,
            'target_route': route
        });
    }
    
    // Seu próprio tracking
    fetch('/api/track', {
        method: 'POST',
        body: JSON.stringify({
            card: cardTitle,
            route: route,
            timestamp: new Date().toISOString()
        })
    }).catch(err => console.log(err));
    
    // ... resto da função
}
```

### Meta Pixels (Facebook)
```html
<!-- Adicionar em landing.html -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  // ... pixel code
}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
</script>
```

## 6. Cache e Performance

### Cache Headers (em .htaccess)
```apache
# Agressivo para CSS/JS
<FilesMatch "\.(css|js)$">
    Header set Cache-Control "max-age=31536000, public"
</FilesMatch>

# Menos agressivo para HTML
<FilesMatch "\.html$">
    Header set Cache-Control "max-age=3600, must-revalidate"
</FilesMatch>
```

### Service Worker (PWA)
Adicionar em `landing-script.js`:
```javascript
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
}
```

## 7. Segurança

### HTTPS Obrigatório
```javascript
// landing-script.js - força HTTPS
if (window.location.protocol !== 'https:' && 
    window.location.hostname !== 'localhost') {
    window.location.protocol = 'https:';
}
```

### Content Security Policy
```html
<!-- Em landing.html -->
<meta http-equiv="Content-Security-Policy" content="
    default-src 'self';
    script-src 'self' https://cdn.jsdelivr.net;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src https://fonts.gstatic.com;
    img-src 'self' data:;
">
```

### Evitar XSS
```javascript
// ✗ ERRADO
element.innerHTML = userInput;

// ✓ CERTO
element.textContent = userInput;
```

## 8. Monitoramento em Produção

### Erros no Console
```javascript
// Adicionar em landing-script.js
window.addEventListener('error', function(e) {
    console.error('Erro detectado:', e);
    // Enviar para servidor/Sentry/etc
});
```

### Performance Monitoring
```javascript
// Medir tempo de carregamento
window.addEventListener('load', function() {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('Tempo de carregamento:', pageLoadTime, 'ms');
});
```

## 9. Relatórios e Métricas

### Core Web Vitals
Monitorar em:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [GTmetrix](https://gtmetrix.com/)

**Metas:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

### Google Analytics 4
```html
<!-- Em landing.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXX');
</script>
```

## 10. Rollback Plan

Se algo der errado em produção:

### Backup Anterior
```bash
# Fazer backup ANTES de qualquer mudança
cp landing.html landing.html.bak
cp landing-style.css landing-style.css.bak
cp landing-script.js landing-script.js.bak
```

### Reverter Rápido
```bash
# Se houver problema, restaurar backup:
cp landing.html.bak landing.html
cp landing-style.css.bak landing-style.css
cp landing-script.js.bak landing-script.js
```

### Feature Flag (Avançado)
```javascript
// Em base-config.js ou config
const FEATURES = {
    landing_page_enabled: true  // Mudar para false para desabilitar
};

// Em index.html
if (FEATURES.landing_page_enabled && !sessionStorage.getItem('landingPageVisited')) {
    window.location.href = 'landing.html';
}
```

## 11. Documentação para Equipe

### README para Devs
```markdown
# Landing Page Setup

## Instalação
1. Clonar repo
2. Arquivos já inclusos: landing.html, landing-style.css, landing-script.js

## Desenvolvimento
- Editar landing.html para conteúdo
- Editar landing-style.css para estilos
- Editar landing-script.js para lógica

## Deploy
- Rodar testes
- Fazer upload via FTP
- Testar em produção

## Rollback
- Restaurar arquivo .bak se necessário
```

### Contato/Responsável
- **Desenvolvedor**: [Nome]
- **Última atualização**: [Data]
- **Versão**: 1.0

## 12. Manutenção Regular

### Checklist Mensal
- [ ] Verificar erro de console
- [ ] Checar analytics
- [ ] Testar navegação
- [ ] Validar em navegadores
- [ ] Verificar performance

### Checklist Trimestral
- [ ] Atualizar dependências (Feather Icons)
- [ ] Testar acessibilidade novamente
- [ ] Revisar código
- [ ] Atualizar documentação
- [ ] Backup completo

## 13. Troubleshooting em Produção

| Problema | Solução |
|----------|---------|
| Landing não aparece | Verificar sessionStorage, limpar cache |
| Cards não redirecionam | Verificar rotas em landing-script.js |
| Ícones não carregam | Verificar CDN Feather Icons |
| Animações lentas | Reduzir complexidade, verificar GPU |
| Modo escuro errado | Testar prefers-color-scheme |

## 14. Versioning

### Git Workflow
```bash
# Feature branch
git checkout -b feature/landing-page

# Commit
git add landing.*
git commit -m "feat: Add landing page"

# Tag versão
git tag -a v1.0 -m "Landing page v1.0"

# Push
git push origin feature/landing-page
git push origin v1.0
```

### SemVer (Semantic Versioning)
- `1.0.0` - Versão inicial
- `1.0.1` - Bug fix
- `1.1.0` - Nova feature
- `2.0.0` - Breaking change

---

**Status**: ✅ Pronto para Deploy em Produção

**Próximos passos**:
1. Fazer backup dos arquivos atuais
2. Upload dos novos arquivos
3. Testar em staging (se disponível)
4. Deploy em produção
5. Monitorar por 24h
6. Recolher feedback
7. Iterar conforme necessário
