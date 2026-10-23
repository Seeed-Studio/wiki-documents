---
description: "Capítulo 11 do curso para iniciantes em SO-ARM Physical AI — datasets de robótica e design de tarefas: o que é um Episode, o que há num registro, carimbos de tempo e sincronização, condições de início/fim, consistência vs. diversidade, quantidade vs. qualidade, e um exemplo completo de A para B."
title: Capítulo 11 - Datasets de robótica e design de tarefas
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - dataset
  - Episode
  - coleta de dados
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_11
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_physical_ai_course_chapter_11/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Fase 3 · Capítulo 11 · Teoria</span>
    <h2>11. Datasets de robótica e design de tarefas</h2>
    <p>
      Capítulo 11 do curso para iniciantes em SO-ARM Physical AI — o que é um Episode, o que há num registro de dados, carimbos de tempo e sincronização, condições de início/fim, consistência vs. diversidade, quantidade vs. qualidade, e um exemplo completo de pegar e soltar de A para B.
    </p>
    <div className="hero-actions">
      <a href="#episode">Episode</a>
      <a href="#consistency-diversity">Design de dados</a>
      <a href="#example">Exemplo</a>
    </div>
  </div>
</section>

## 11.1 O que é um Episode?

<section id="episode" className="section-card">
  <div className="section-title">
    <span>Episode</span>
    <h2>11.1 O que é um Episode?</h2>
  </div>

A partir deste capítulo, cada operação sua significa troca de papel — **você não é mais o "motorista", é o "professor".** Cada ação sua será gravada e virará o livro didático do modelo. A unidade básica desse livro é o Episode.

**Um Episode é uma demonstração completa da tarefa.** Do braço na postura inicial e o começo da tarefa até a conclusão, todos os dados gravados continuamente pelo sistema formam um Episode.

</section>

## 11.2 O que exatamente há num registro de dados?

<section id="data-record" className="section-card">
  <div className="section-title">
    <span>Dados</span>
    <h2>11.2 O que exatamente há num registro de dados?</h2>
  </div>

Relembre o Capítulo 8 — deve parecer familiar. Sim, é o que já vimos: **Observação, Estado, Ação**.

No SO-ARM, um quadro gravado contém:

- **Observação**: as duas imagens de câmera (frontal + lateral);
- **Estado**: as 6 leituras de juntas do seguidor (5 juntas + garras);
- **Ação**: os 6 valores-alvo derivados do líder.

Note a origem da Ação: ela registra a ação-alvo dada (via líder), não a posição que o seguidor de fato alcançou depois. Isso corresponde exatamente à definição de clonagem de comportamento — o modelo aprende "com esta observação e estado, o que o humano queria fazer naquele momento".

</section>

## 11.3 Carimbos de tempo e sincronização

<section id="timestamps" className="section-card">
  <div className="section-title">
    <span>Sincronização</span>
    <h2>11.3 Carimbos de tempo e sincronização</h2>
  </div>

Imagens vão por USB, dados de juntas vão pelo barramento serial — as duas correntes chegam ao computador em momentos diferentes. O LeRobot carimba cada quadro, alinhando imagens, estados e ações do "mesmo instante" numa só linha.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-01.png" alt="Carimbos de tempo e sincronização" />
</div>

</section>

## 11.4 Design da tarefa: condições de início e fim

<section id="task-design" className="section-card">
  <div className="section-title">
    <span>Design de tarefa</span>
    <h2>11.4 Design da tarefa: condições de início e fim</h2>
  </div>

Antes de coletar, escreva a definição da tarefa com clareza. Uma boa definição responde duas perguntas: **Onde começa? Quando está pronto?**

### Condição de início: um "ponto de partida fixo" para o modelo

- **Postura inicial fixa**: todo Episode parte da mesma postura segura (ex.: a postura base calibrada). Se os inícios variam muito, o primeiro aprendizado do modelo vira "como entrar na tarefa a partir de qualquer postura", adicionando dificuldade desnecessária.

### Condição de fim: uma "linha de chegada" clara

- **Fim com sucesso**: objetivo alcançado (ex.: "objeto solto em B, garras aberta, braço afastado");
- **Fim por falha**: situação irrecuperável (objeto caído, fora do tapete, braço em postura perigosa) — interrompa imediatamente a gravação desse Episode.

</section>

## 11.5 Consistência vs. diversidade

<section id="consistency-diversity" className="section-card">
  <div className="section-title">
    <span>Design de dados</span>
    <h2>11.5 Consistência vs. diversidade: a tensão central do design de dados</h2>
  </div>

A seção mais crítica do capítulo. Dados de demonstração de alta qualidade devem satisfazer dois requisitos aparentemente contraditórios.

### Consistência: ensinar "um único jeito de fazer"

- **Estilo de operação consistente**: para a mesma tarefa, todos os Episodes usam a mesma estratégia (ex.: sempre aproximar por cima do objeto, agarrar e colocar em B). Se metade pega pela esquerda e metade pela direita, o modelo aprende a "média" de dois métodos — quase sempre uma trajetória esquisita que não agarra nada.
- **Ritmo consistente**: velocidade e pausas aproximadamente estáveis — se definiu 20–30 segundos, cumpra dentro disso. Dados de velocidade variável deixam as ações do modelo instáveis em velocidade.
- **Fluxo consistente**: cada passada percorre "aproximar → agarrar → transportar → colocar → recolher" sem pular etapas.
- **Cena inicial controlada**: objetos dentro de uma área designada (pode ser ampla, mas com limites claros); retire itens alheios do espaço.
- **Câmera fixa**: não mexa nas câmeras durante a coleta — para o modelo, mover a câmera 5 cm significa que o mundo mudou.

### Diversidade: "variações" suficientes vistas

- **Posições-alvo diversas**: objetos em várias posições do espaço (cobertura em grade, não dispersão aleatória).
- **Posturas iniciais diversas**: orientação do objeto e posição relativa a obstáculos com variação.

</section>

## 11.6 Critérios de sucesso e falha

<section id="success-criteria" className="section-card">
  <div className="section-title">
    <span>Critérios</span>
    <h2>11.6 Critérios de sucesso e falha</h2>
  </div>

"Tarefa completa" precisa ser um estado **objetivamente determinável**, não "parece que sim". Bons critérios:

| **Padrão inadequado (ambíguo)** | **Padrão adequado (mensurável)** |
| :------------------------------------------------ | :---------------------------------------------------------------- |
| "Basta agarrar mais ou menos." | "A garras fecha por completo e segura o centro do objeto." |
| "Basta deixar no B." | "O objeto fica dentro da área marcada de B, sem pendurar na borda." |
| "Pegar e soltar já vale." | "O movimento é fluido e a duração de cada episódio permanece consistente." |

Para trechos falhos durante a gravação, o princípio é simples: **regrave este Episode.** Não guarde dados ruins esperando que "talvez o modelo aprenda com eles" — ele aprende, inclusive com as falhas.

</section>

## 11.7 Quantidade vs. qualidade dos dados

<section id="data-quantity" className="section-card">
  <div className="section-title">
    <span>Volume</span>
    <h2>11.7 Quantidade vs. qualidade dos dados</h2>
  </div>

Referência empírica (tarefa única de mesa em cena limpa e consistente):

| Quantidade | Efeito esperado |
| :--- | :--- |
| **20–30 Episodes** | Primeira política utilizável para A→B fixo (nível inicial) |
| **50 Episodes** | O pipeline funciona; o modelo começa a operar na área coberta |
| **50–100 Episodes** | Taxa de sucesso em faixa utilizável; ponto ideal da maioria dos experimentos de tarefa única |
| **100+ Episodes** | Retornos decrescentes, salvo tarefa complexa ou exigência alta de sucesso |

Para multitarefa, aumente proporcionalmente à complexidade. Claro, dá para complementar dados depois de treinar — se o modelo render pouco, acrescente.

Mas ponha estas frases à frente dos números:

- **50 Episodes de alta qualidade valem mais que 200 desleixados.**
- **Deu problema na coleta, não hesite — regrave este Episode na hora.**
- **Para generalização forte, serão necessários centenas ou milhares de Episodes.**

:::tip
Estratégia prática em lotes (a mesma do fluxo sem código do Capítulo 22): grave uns 10 episódios por leva; após 2–3 levas, mantenha 20–30 válidos para o primeiro treinamento; acrescente dados de variantes difíceis conforme os resultados.
:::

</section>

## 11.8 Dataset de tarefa única vs. multitarefa

<section id="single-multi-task" className="section-card">
  <div className="section-title">
    <span>Datasets</span>
    <h2>11.8 Dataset de tarefa única vs. multitarefa</h2>
  </div>

- **Dataset de tarefa única**: contém uma só tarefa (ex.: "objeto de A para B"). Objetivo único, pouca exigência de dados, taxa de sucesso alcançável. Seu primeiro modelo deve começar assim.
- **Dataset multitarefa**: contém várias tarefas; cada Episode carrega um `task_index` indicando a qual pertence. Aproveitamento maior e rumo às políticas gerais, mas as tarefas disputam a capacidade do modelo e cada uma precisa de mais dados.

</section>

## 11.9 Iteração da coleta

<section id="iteration" className="section-card">
  <div className="section-title">
    <span>Iteração</span>
    <h2>11.9 Iteração da coleta</h2>
  </div>

Colete em lotes com validação iterativa: 50 → treinar → avaliar no robô real → coletar mais onde falhou → retreinar. Se a direção geral está certa mas falta precisão, acrescentar dados ajuda; se o comportamento está completamente errado, o problema é do design de tarefa ou de dados, e volume extra não resolve.

</section>

## 11.10 Exemplo de criação de dados: pegar e soltar de A para B

<section id="example" className="section-card">
  <div className="section-title">
    <span>Exemplo</span>
    <h2>11.10 Exemplo de criação de dados: pegar e soltar de A para B</h2>
  </div>

A tarefa de exemplo do resto da fase: **pegar o objeto em A e colocá-lo em B** — a mesma do Capítulo 22 sem código, para comparar as duas rotas diretamente.

### Design da cena

1. Marque duas posições fixas no tapete: A para o início do objeto, B para o destino. Prepare um objeto de tamanho adequado e fácil de agarrar, como um bloquinho.
2. Garanta que A, B, os dois braços e o objeto apareçam nas duas vistas sem obstrução. Fixe as câmeras, mantenha a luz e deixe o líder fora do campo das câmeras.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/01-3-scene-and-safety-soarm-en.webp" alt="Cena da tarefa com A e B" />
</div>

O problema que mais atormenta iniciantes é "como dispor os objetos para treinar de forma completa" — a disposição aleatória ou se agrupa (o modelo só reconhece aquele ponto) ou se espalha sem regra (umas áreas treinosas, outras intocadas). Método simples e padronizado:

1. **Marque pontos**: com lápis, **5 pontos** na área, dispostos em **cruz** — um no centro, um em cima, baixo, esquerda e direita;
2. **Espaçamento**: entre pontos vizinhos, **5–10 cm**, todos dentro do espaço de trabalho e visíveis nas duas câmeras;
3. **Distribuição**: **10 Episodes por ponto**; 5 × 10 = **50 Episodes**, meta cumprida. Não grave 10 seguidos no ponto 1 e passe ao 2; grave 1 por ponto (5 pontos = 1 rodada) e faça 10 rodadas.

### Design de pegar e soltar

1. **Posição inicial**: braço na postura base; objeto em A;
2. **Pegar:**
   - Mover para logo acima do objeto (sempre à mesma altura sobre o centro dele);
   - Abrir a garras à distância fixa (por que fixa? Para não esbarrar no objeto ao abrir e deslocá-lo);
   - Agarrar sempre com a mesma força e velocidade;
3. **Soltar:**
   - Mover para logo acima do centro de B;
   - Abrir a garras em velocidade constante e erguer o braço — o objeto deve assentar suave dentro da área marcada;
   - Devolver o braço à postura base.

Pronto — um Episode perfeito concluído. Agora repita isso 50 vezes.

### Questões de design

Por que não posso mexer o tapete, as câmeras, as posições dos objetos ou a iluminação?

- **Desmontando o mito**: "mexer em tudo livremente" gera ruído, não diversidade.
- **Teoria do orçamento de generalização**: com dados limitados, a variação gasta numa dimensão ensina essa dimensão — gastar em posições-alvo ensina a agarrar em vários pontos; gastar em variações de câmera faz o modelo aprender agarre e mudança de ponto de vista juntos, exigindo muito mais dados e rendendo pior.
- **Se realmente precisar de variação**: não é "não fixar" durante a gravação, mas a iteração posterior de dados — expandir conscientemente as fronteiras para alcançar a generalização desejada.

</section>

</div>
