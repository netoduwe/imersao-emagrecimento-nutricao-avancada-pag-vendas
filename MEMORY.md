# Memória do Projeto: Imersão Nutrição Avançada (Vendas Astro)

**Última Atualização:** 25/04/2026

## Melhorias de CRO (Conversion Rate Optimization) - 25/04/2026
- **Oferta VIP:** Bônus foram "abertos" (removido details/summary). Valores em R$ de cada e-book agora estão expostos para aumentar percepção de valor imediata.
- **Seção Chega (Pendente):** Recomendada a troca da imagem por uma foto de estúdio do Ney com expressão de autoridade/seriedade para manter o tom premium.
- **Prompt Recomendado para Imagem "Chega":** "Professional studio portrait, Ney Felipe, serious and authoritative expression, high-end lighting, Sage Green and Off-White palette, ultra-minimalist background, 8k photorealistic."

## Identidade do Projeto
- **Produto:** Imersão em Atualização no Tratamento do Sobrepeso e Obesidade (4ª Edição)
- **Tipo:** Página de Vendas Principal (Checkout / Conversão)
- **Stack:** Astro, HTML/CSS nativo, JS puro (sem frameworks pesados).
- **Repositório Git Original:** `imersao-emagrecimento-nutricao-avancada-pag-vendas` (Já no ar).

## Regras de Negócio e Contexto Atual
- **Data do Evento:** 16/05/2026 (das 9h às 18h).
- **Status das Vendas:** ABERTAS.
- **TopBar:** Configurada para mostrar o evento como "LOTE ZERO". Se a data do evento (16/05/2026) chegar, o script do `Layout.astro` mudará automaticamente para "VENDAS ABERTAS" (ou encerradas, dependendo do direcionamento futuro).
- O texto do countdown foi ajustado para **"O evento começa em:"** (antes estava "Vendas iniciam em", o que era um erro pois as vendas já estão abertas).
- **UI Mobile:** O cabeçalho (Header) foi ocultado em dispositivos móveis (`max-width: 768px`) para reduzir a poluição visual, mantendo apenas a `top-bar` com o contador.
- **Cronograma Premium:** Implementado o novo componente `Schedule.astro` com design inspirado em Linear/Stripe, incluindo Timeline horizontal, glassmorphism sutil e ícones minimalistas.
- **Hero Premium (Rebuilt):** Reconstrução total mobile-first seguindo o prompt técnico `astro-hero-prompt-v1`. Layout ultra-limpo com background off-white, navbar simplificada, PriceCard sem bordas duplicadas e BenefitsGrid 2x2. Componentizado em `Hero`, `CTAButton`, `PriceCard` e `BenefitsGrid`.

## Estrutura Chave
- `src/layouts/Layout.astro`: Onde fica a TopBar, o script do cronômetro global e a chamada do Chatbase.
- `src/components/`: Componentes principais da landing page (Hero, FAQ, Cronograma, etc).

## Histórico Recente de Decisões
- O workspace foi reestruturado e este projeto foi renomeado de `imersao-consolidated-repo` para `imersao/vendas-astro` para melhor clareza.

## Atualizações de UI e Mobile Optimization - 25/04/2026
- **News Carousel:** Implementado carrossel interativo usando Swiper.js na seção de notícias. Isso resolve o problema de leitura das notícias, permitindo que o usuário pause e navegue entre os slides.
- **Hero Footer (Segunda Dobra):** Otimizado para mobile. O item "CERTIFICADO" foi ocultado especificamente no celular, e os 3 itens restantes agora ficam lado a lado (`flex-direction: row`) para economizar espaço vertical. No desktop, o certificado continua aparecendo normalmente.
- **Correção TopBar:** Removida a duplicação do texto "O evento começa em:" no banner de urgência.
- **PriceCard & ProgressBar Fix:** Ajustado o layout de ambos os componentes de escassez (Hero e Seção de Preços) para evitar compressão/encavalamento de elementos em telas de celulares pequenos.
- **Schedule (Cronograma):** Implementado grid 2x2 no mobile para reduzir a altura da seção e evitar a necessidade de "2 scrolls" para passar pela informação.
