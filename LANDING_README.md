# 🎯 Landing Page Saúde PG - Resumo Rápido

## ✅ O que foi criado

Três novos arquivos principais:

1. **landing.html** - Página principal com 4 cards interativos
2. **landing-style.css** - Estilos com design responsivo e animações
3. **landing-script.js** - Lógica de navegação e interações

Arquivos de suporte:
- **LANDING_PAGE_GUIA.md** - Documentação completa
- **landing-teste.html** - Página de validação

## 🔄 Como funciona

```
1ª visita → landing.html (obrigatória)
        ↓
Usuário clica card → sessionStorage marca visita
        ↓
Redireciona para página (mapa, atendimento, direitos ou chatbot)
        ↓
Próxima visita na mesma sessão → acessa diretamente a página
        ↓
Nova aba/janela → landing page aparece novamente
```

## 📱 Responsividade

- **Desktop**: Grid 2x2
- **Tablet**: Grid 2x2 (mais compacto)
- **Mobile**: Grid 1 coluna (fullscreen)

## 🎨 Design

- Gradiente azul-verde
- Cards com hover elegante (elevação + zoom)
- Animações fade-in com delay
- Modo escuro suportado
- Acessibilidade completa

## ♿ Acessibilidade

- ✅ aria-labels
- ✅ Navegação por teclado (Tab, Enter, Space)
- ✅ Contraste WCAG AA
- ✅ Foco visível
- ✅ Respeita preferências do usuário

## 🚀 Comece aqui

1. **Ver demo**: [landing.html](landing.html)
2. **Validar implementação**: [landing-teste.html](landing-teste.html)
3. **Ler guia completo**: [LANDING_PAGE_GUIA.md](LANDING_PAGE_GUIA.md)

## 🔗 Rotas mapeadas

| Card | Rota | Arquivo |
|------|------|---------|
| Mapeamento | `/mapa` | mapa.html |
| Atendimento | `/atendimento` | atendimento.html |
| Direitos | `/direitos` | direitos.html |
| Chatbot | `/chatbot` | chat.html |

## 💡 Dica importante

A landing page aparece automaticamente na **primeira visita**. Nos acessos posteriores (mesma sessão), vai direto para a página. Para "resetar" e ver landing novamente, abra em uma **nova aba/janela**.

---

**Pronto para usar!** 🎉
