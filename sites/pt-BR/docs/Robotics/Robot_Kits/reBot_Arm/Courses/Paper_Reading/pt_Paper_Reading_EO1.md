---
description: "Como executar EO-1 no reBot Arm e no SO-ARM101: análise do backbone compartilhado do EO-1, o aprendizado intercalado visão-texto-ação, os dados de raciocínio encarnado e os experimentos de controle robótico."
title: "Como executar EO-1 no reBot Arm e no SO-ARM101"
hide_title: true
keywords:
  - Análise Detalhada de Artigo
  - eo1
  - Aprendizado de Robôs
  - reBot
  - B601-DM
  - B601-RS
  - Braço Robótico
  - IA Física
  - Curso
  - Tutorial
  - SO101
  - SO-ARM101
  - LeRobot
  - Hugging Face
  - Braço
  - Robótica
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/paper_reading_eo1
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/pt-br/robotics/paper_reading_eo1/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-eo1-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · ANÁLISE DETALHADA DE ARTIGO</span>
  <h1 id="paper-reading-eo1-title">Como executar EO-1 no reBot Arm e no SO-ARM101</h1>
  <p className="paper-reading-lead">EO-1: Um Modelo Fundamental Incorporado Aberto e Unificado para Controle Geral de Robôs</p>
  <ul className="paper-reading-badges" aria-label="Neste guia">
    <li>Modelo unificado de IA física</li>
    <li>Aprendizado intercalado</li>
    <li>Raciocínio incorporado</li>
    <li>Controle de robôs</li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/abs/2508.21112" target="_blank" rel="noopener noreferrer" aria-label="Ler o artigo do EO-1 no arXiv">
    <span className="paper-reading-source-tag">arXiv</span>
    <span>Ler o artigo</span>
    <span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

## Pré-requisitos: Entradas e Saídas
**Explicação:** Aprendizado por imitação aprende como se mover a partir de operações humanas gravadas. Um VLA adiciona compreensão de linguagem e normalmente recebe imagens, texto de tarefa e estado do robô como entradas.

Para “coloque o tomate na sacola de compras”, imagens localizam os objetos, o estado descreve o braço, o texto define o objetivo e as ações controlam a preensão e o posicionamento. EO-1 também pode responder “o que vem depois?” e “já terminou?”, conectando julgamentos antes e depois das ações.

| Conceito | Significado aqui |
|---|---|
| Observação | Imagens multivista e estado do robô; novas imagens vêm das câmeras. |
| Estado | Valores de baixa dimensão do robô, como juntas; dimensões variam por plataforma. |
| Ação | Controles contínuos com significados físicos dependentes da plataforma e do conjunto de dados. |
| Bloco de ações | Múltiplas ações futuras previstas em conjunto; EO-1 usa 16 passos. |
| Raciocínio incorporado | Julgamentos sobre objetos, espaço, progresso e interação física. |

Previsão de passo único é `observação atual → aₜ`; blocagem é `observação atual → [aₜ, aₜ₊₁, …, aₜ₊₁₅]`. **Ilustração:** uma dimensão de ação poderia ter `[0.1, 0.12, 0.15]`; as saídas reais do EO-1 são arrays multidimensionais de 16 passos.

Blocos de ações permitem que o modelo organize em conjunto um segmento de movimento, mas o comprimento do bloco não é o intervalo entre chamadas do modelo. O artigo não fornece uma fração de execução compartilhada, taxa de replanejamento ou taxa de controle para cada plataforma, então o número de chamadas de modelo por segundo não pode ser inferido a partir do comprimento do bloco.

---

## Resumo: Tradução e Comentários
### Tradução
As pessoas naturalmente alternam raciocínio multimodal e interação física em mundo aberto. VLAs avançaram o controle generalista por meio de co-treinamento de robô e imagem-texto, mas continuam menos flexíveis em conectar raciocínio com interação.

EO-Robotics é composto por EO-1 e EO-Data1.5M. EO-1 aprende raciocínio incorporado e controle por meio de pré-treinamento intercalado visão-texto-ação. Ele combina uma arquitetura que aceita imagens, texto, vídeo e ações com mais de 1,5 milhão de amostras de alta qualidade de raciocínio incorporado enfatizando compreensão intercalada.

EO-1 é treinado em EO-Data1.5M usando decodificação autoregressiva e denoising por flow matching para conectar geração de ações de robô com raciocínio multimodal incorporado. Experimentos extensivos em diferentes corpos de robô e tarefas de manipulação hábil de longo horizonte validam o aprendizado intercalado para compreensão e generalização em mundo aberto. O artigo descreve a arquitetura, a construção dos dados e os métodos de treinamento como referência para modelos fundamentais incorporados.

### Comentários
- **A conexão entre raciocínio e ações muda.** Além de gerar ações a partir de uma imagem e instrução, o modelo aprende a reavaliar depois das ações usando novas imagens.

- **Arquitetura e dados são ambos necessários.** A rede deve suportar texto e ações contínuas, e os exemplos precisam conectá-los ao longo do tempo.

- **Mais de 1,5 milhão se refere ao conjunto de dados geral.** Nem todas as amostras contêm ações totalmente intercaladas; o texto relata separadamente cerca de 122.000 exemplos intercalados visão-texto-ação.

- **A eficácia é limitada pelos experimentos.** Resultados em múltiplas plataformas não estabelecem generalidade em nível humano ou para cenas arbitrárias.

---

## Introdução e Trabalhos Relacionados: Por que Intercalar?
### Os Sete Principais Parágrafos da Introdução
![EO-1 Análise detalhada: 3.1 Os Sete Principais Parágrafos da Introdução (imagem 12)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-12-en.png)

![EO-1 Análise detalhada: 3.1 Os Sete Principais Parágrafos da Introdução (imagem 08)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-08-en.png)

![EO-1 Análise detalhada: 3.1 Os Sete Principais Parágrafos da Introdução (imagem 18)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-18-en.png)

![EO-1 Análise detalhada: 3.1 Os Sete Principais Parágrafos da Introdução (imagem 01)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-01-en.png)

![EO-1 Análise detalhada: 3.1 Os Sete Principais Parágrafos da Introdução (imagem 11)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-11-en.png)

![EO-1 Análise detalhada: 3.1 Os Sete Principais Parágrafos da Introdução (imagem 04)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-04-en.png)

![EO-1 Análise detalhada: 3.1 Os Sete Principais Parágrafos da Introdução (imagem 15)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-15-en.png)

### Relação com Trabalhos Anteriores
![EO-1 Análise detalhada: 3.2 Relação com Trabalhos Anteriores (imagem 17)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-17-en.png)

---

## Método Central: Um Único Backbone, Duas Saídas
### Processamento Compartilhado com Interfaces Específicas de Modalidade
Texto aborda o que e por quê, enquanto ações especificam movimento. Ambos dependem dos mesmos objetos, objetivos e progresso. EO-1 compartilha um backbone pré-treinado para reduzir a separação entre planejamento e controle.

![EO-1 Análise detalhada: 4.1 Processamento Compartilhado com Interfaces Específicas de Modalidade (imagem 05)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-05.png)

**Artigo:** Um Transformer apenas decodificador inicializado a partir de Qwen2.5-VL mantém o codificador visual para imagens/vídeo e o tokenizer para texto. Estado e ações ruidosas são projetados no espaço de recursos compartilhado.

Tokens são elementos de sequência, não necessariamente palavras discretas. Tokens visuais, de estado e de ação podem ser vetores de características contínuas.

| Entrada bruta | Codificação | Representação no backbone |
|---|---|---|
| Imagens multivista e quadros de vídeo | Codificador visual pré-treinado | Sequência visual de largura `D`. |
| Instruções e QA de raciocínio | Tokenizer e camada de embedding | Sequência de texto de largura `D`. |
| Estado `qₜ` | Projeção de estado | Mapeia `d_q` dimensões de estado para largura `D`. |
| Bloco ruidoso `Xτ` e progresso `τ` | Projeção de entrada de ação | Sequência de ação de largura `D`. |

`D` é a largura do backbone e `d_q` a dimensão de estado da plataforma. Dimensões de estado/ação e contagens completas de tokens não são especificadas de forma uniforme entre plataformas, então os símbolos são mantidos.

As saídas se ramificam em uma **cabeça de LM**, que prediz tokens de texto, e uma **cabeça de flow**, que mapeia recursos ocultos para atualizações contínuas de ação. O bloco final é `16 × d_a`, com dimensão de ação específica da plataforma `d_a`.

**Exemplo de forma:** Para uma interface hipotética 7D, a saída é `16 × 7`, ou 112 valores. Esta não é uma configuração universal. Uma projeção mapeia a largura `D` de volta para `d_a`; as larguras não são somadas diretamente.

**Atenção:** “Nenhum parâmetro adicional específico de ação” deve ser lido como nenhum backbone especialista em ação separado. Projeções de estado/ação e cabeças de saída ainda contêm parâmetros.

### Gerar Texto Sequencialmente, Remover Ruído das Ações em Bloco
Autoregressão prediz o próximo token de texto a partir do contexto existente:

![EO-1 Análise detalhada: 4.2 Gerar Texto Sequencialmente, Remover Ruído das Ações em Bloco (imagem 00)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-00.png)

`w_j` é o token `j`, e `c_j` seu contexto multimodal precedente. **Exemplo:** depois de “em seguida, pegue”, o modelo prediz “o tomate”, usando também imagens anteriores e histórico de ações.

Ações usam flow matching: repetidamente prever como atualizar um array aleatório em direção a uma trajetória completa, em vez de soletrar controles como texto.

O treinamento mistura ações verdadeiras e ruído Gaussiano:

![EO-1 Análise detalhada: 4.2 Gerar Texto Sequencialmente, Remover Ruído das Ações em Bloco (imagem 06)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-06.png)

`A` e o Gaussiano padrão `Z` têm ambos forma `16 × d_a`. `τ∈[0,1]` é progresso interno de denoising, não segundos. Zero dá ruído, um dá dados; o artigo amostra de uma distribuição Beta enfatizando estágios mais ruidosos.

**Exemplo mínimo:** Para um elemento, `A=0.6`, `Z=−0.2` e `τ=0.5` dão `Xτ=0.2`: um valor intermediário em vez da resposta completa.

**Objetivo de treinamento, preservando a Equação (2):**

![EO-1 Análise detalhada: 4.2 Gerar Texto Sequencialmente, Remover Ruído das Ações em Bloco (imagem 16)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-16.png)

`Vθ` é o campo de atualização previsto pelo modelo compartilhado e pela cabeça de flow, `θ` parâmetros treináveis, e `C` contexto multimodal precedente. A norma compara arrays completos, e a expectativa faz a média do progresso amostrado. `L_AR` é entropia cruzada de texto; ambos os termos têm peso um. A meta de ação escrita no exemplo é `Z−A=−0.8`.

**Inferência, preservando a Equação (1):**

![EO-1 Análise detalhada: 4.2 Gerar Texto Sequencialmente, Remover Ruído das Ações em Bloco (imagem 13)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-13.png)

`Âτ` é a estimativa inicializada a partir de ruído novo; `δ` é um passo de integração. O texto integra de zero a um e usa dez atualizações. **Ilustração:** dez atualizações iguais dariam `δ=0.1`, um passo interno em vez de um período de execução.

**Cuidado: as instruções escritas são inconsistentes.** A derivada do caminho linear é `A−Z`, mas a Equação (2) usa `Z−A` e a Equação (1) uma atualização positiva. Tomadas literalmente em conjunto, elas não se alinham: a direção direta do exemplo é `0.8`, mas o alvo escrito é `−0.8`. As equações são mantidas; a reprodução deve verificar a convenção de tempo/sinal da implementação em vez de concluir que o treinamento real está errado.

### Sequências intercaladas: raciocinar novamente após agir
Um exemplo padrão de ação pode ser escrito como:

```text
Image → Task text → State → Action chunk
```

EO-1 também aprende essa estrutura temporal:

```text
Current image → Planning QA → State → Action chunk
→ New image → Completion QA → Next-step planning → Next chunk
```

**Artigo:** Cada modalidade tem marcadores de limite, incluindo `[BOI]/[EOI]` para imagens, `[BOR]/[EOR]` para estado e `[BOA]/[EOA]` para ações. A atenção causal condiciona no contexto precedente em vez de nas respostas futuras.

**Exemplo:** Após tentar ensacar um tomate, uma nova imagem pode mostrá‑lo ainda no garfo. O modelo pode julgar que o posicionamento está incompleto e gerar mais ações. Isso ilustra a estrutura de feedback, não uma garantia de recuperação confiável.

EO-1 gera texto e ações, não imagens de câmera futuras ou estado. O ambiente fornece novas observações. A intercalação também não exige uma resposta verbal antes de cada ponto de controle.

### Amostragem retificadora intercalada: histórico limpo, ações atuais ruidosas
Treinar a ação atual requer ruído, mas o texto posterior deve condicionar em ações concluídas. Manter ações passadas ruidosas cria uma incompatibilidade com o histórico executado.

![EO-1 Análise detalhada: 4.4 Amostragem retificadora intercalada: histórico limpo, ações atuais ruidosas (imagem 03)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-03.png)

**Artigo:** A amostragem retificadora intercalada divide uma sequência com `N` segmentos de ação em `N+1` prefixos de treinamento nos limites de ação. As ações históricas são limpas; a ação que está sendo gerada no momento é ruidosa.

**Exemplo mínimo:** Uma sequência com duas ações:

```text
Image₁ / Text₁ → Action₁ → Image₂ / Text₂ → Action₂ → Image₃ / Text₃
```

Para `N=2`, construa três prefixos:

| Amostra | Contexto e alvo |
|---|---|
| Amostra1 | Imagem₁ / Texto₁ → Ação₁ ruidosa; treinar a remoção de ruído da ação₁. |
| Amostra2 | Imagem₁ / Texto₁ → Ação₁ limpa → Imagem₂ / Texto₂ → Ação₂ ruidosa; treinar o texto subsequente e a ação₂. |
| Amostra3 | Ambas as ações são histórico limpo; aprender o texto₃ final. |

As ações recebem supervisão de remoção de ruído quando geradas e contribuem com gradientes como contexto limpo para previsões posteriores. O modelo aprende tanto a geração de ações quanto o raciocínio a partir do histórico de ações.

**Limites e custo:** Reprocessar prefixos adiciona computação que não é medida separadamente; não há ablação de remoção isolada. O histórico de treinamento limpo vem de gravações, enquanto o histórico de implantação pode incluir erros do modelo. A amostragem retificadora não remove essa incompatibilidade e não é ensemble temporal ACT nem suavização de ações.

### Treinamento e inferência completos
**Treinamento:** fontes imagem‑texto, registros de robô e exemplos intercalados → codificar modalidades → adicionar ruído às ações atuais, manter o histórico limpo → backbone compartilhado → entropia cruzada de texto e perda de fluxo → atualizações conjuntas. Amostras apenas de QA fornecem supervisão de texto sem ações inventadas.

**Inferência:** imagens, instrução, estado e histórico → gerar o texto necessário → refinar novo ruído por meio de dez atualizações em um bloco de 16 etapas → executar → adicionar novas observações ao contexto. O cache de KV reutiliza a computação de contexto; ele não substitui a re‑observação.

A implementação relata cinco épocas de pré‑treinamento, comprimento médio empacotado de 16.384 e tamanho de lote igual a um. A taxa de aprendizado de projeção de linguagem/multimodal é `5×10⁻⁵`, do codificador visual `1×10⁻⁵`. Estas são configurações experimentais, não ótimos universais.

---

## EO-Data1.5M: material compartilhado para raciocínio e controle
### Três grupos de dados
| Categoria | Escala da Tabela 1 do texto principal | Supervisão |
|---|---|---|
| Multimodal da web | 5,7M de amostras, 7,1B de tokens | QA de imagem, compreensão de vídeo, grounding e tarefas relacionadas. |
| Controle de robô | 1,2M de trajetórias, 127,3B de tokens | Operação contínua em vários robôs. |
| Dados incorporados EO-Data1.5M | 1,5M de amostras, 1B de tokens | Raciocínio espacial, temporal, físico e de tarefas, além de operação intercalada. |

**Cuidado:** Trajetórias, amostras de QA e tokens são unidades diferentes e não podem ser somadas como contagens de operação. EO-Data1.5M não é todo o corpus de treinamento, e sequências intercaladas completas são apenas um subconjunto.

### Pipeline: preservar cenas diversas e depois adicionar raciocínio
![EO-1 Análise detalhada: 5.2 Pipeline: preservar cenas diversas e depois adicionar raciocínio (imagem 02)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-02.png)

**Artigo:** Agrupar recursos visuais de vídeo, amostrar por cluster e inspecionar manualmente para reduzir cenas repetidas. Segmentar vídeos em subtarefas, criar descrições de ações com modelos e humanos, construir perguntas baseadas em templates, gerar respostas candidatas, selecioná‑las ou reescrevê‑las manualmente e, em seguida, limpar regras e redação.

Tarefas temporais incluem senso comum físico, planejamento, descrições de vídeo, QA de affordance, verificação, QA de subtarefas e detecção de falhas. Tarefas espaciais incluem relacionamentos, previsão de trajetória, caixas delimitadoras, apontar e apontar com múltiplas visões.

**Explicação:** Um registro de agarrar pode responder o que agarrar, onde se aproximar e se o posicionamento teve sucesso. Essas anotações vêm de demonstrações, não da exploração de todas as ações possíveis.

### Como três formatos intercalados conectam perguntas‑respostas e ações
![EO-1 Análise detalhada: 5.3 Como três formatos intercalados conectam perguntas‑respostas e ações (imagem 09)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-09.png)

| Formato | Conexão | Foco de aprendizado |
|---|---|---|
| Raciocínio temporal | Imagem → QA da próxima subtarefa → inserir resposta na instrução → ação → nova imagem e verificação. | O que fazer e se está completo. |
| Raciocínio espacial | Imagem → QA de trajetória → inserir trajetória na instrução → ação → nova imagem e verificação. | Traduzir objetivos espaciais em movimento. |
| QA livre | Imagem → outro QA de raciocínio → instrução da tarefa original → ação → verificação. | Preservar raciocínios variados dentro do contexto de controle. |

As trajetórias espaciais são coordenadas `[x,y]` no plano da imagem, não comandos de juntas. `(480,125) → (485,144)` descreve um caminho na imagem; a geração de ações contínuas ainda aprende o movimento real.

O texto relata cerca de 122.000 exemplos intercalados. **Cuidado:** As contagens diferem: a Tabela 1 fornece 5,7M de amostras da web, o Apêndice Tabela 6 fornece 6,2M; a Figura 3(a) rotula compreensão espacial 376k, enquanto a Seção 3.2.1 afirma 1,5M. Cada figura é atribuída à sua localização em vez de ser mesclada em um total não verificado.

---

## Experimentos: evidências para as alegações
### Avaliar raciocínio e controle separadamente
Perda de treinamento, pontuações de QA, sucesso em simulação e conclusão de tarefas reais medem capacidades diferentes e não podem substituir umas às outras.

| Avaliação | Resultado do EO-1 | Comparação e interpretação |
|---|---|---|
| RoboVQA, BLEU-4 | 58,5 | Qwen2.5-VL 3B: 55,9; correspondência de texto com resposta de referência. |
| ERQA, acurácia | 45,5% | Qwen2.5-VL 3B: 35,3%; Gemini 1.5 Flash: 46,3%. EO-1 não supera todas as linhas de base. |
| EO-Bench, espacial / temporal | 36,4 / 38,9 | Qwen2.5-VL 3B: 20,0 / 22,6; raciocínio de tarefas aprimorado com muitos erros restantes. |
| LIBERO, sucesso médio | 98,2±0,3% | π0: 94,2±0,9%; OpenVLA-OFT: 97,1±0,6%. |
| SimplerEnv, WidowX / Google VM / Google VA | 72,7% / 76,5% / 63,0% | π0: 69,2% / 71,4% / 54,7%; ganhos de 3,5 / 5,1 / 8,3 pontos percentuais. |

*Fonte: Tabelas 2–4, páginas 13–14. Nomes e versões de modelos seguem o artigo. Essas métricas não formam uma única pontuação intercambiável de capacidade robótica.*

**Cuidado:** As contagens do EO-Bench também entram em conflito: a Seção 3.3 diz 648 perguntas, suas quatro categorias somam 642, e a 4.2 diz 700 distribuídas uniformemente. Elas não são usadas para inferir significância ou contagens por categoria.

### O que foi testado em robôs reais?
Os 28 cenários de tarefa compreendem sete tarefas de pick‑and‑place com Franka Panda, 13 testes prontos para uso com WidowX 250 S, quatro tarefas há muito prazo com destreza com AgiBot G-1 e quatro tarefas de raciocínio‑controle. SO100 também está envolvido.

Os modelos recebem visões, estado e instruções e produzem controles. As configurações de **dados de treinamento** da Tabela 6 do Apêndice incluem visões ego/esquerda/direita do AgiBot a 30 FPS; esquerda/direita/punho do DROID a 15 FPS; terceira pessoa/punho do SO100 a 30 FPS; e terceira pessoa/punho do IPEC‑Franka a 10 FPS. Essas configurações de origem não são contagens universais de câmeras de avaliação nem taxas de controle.

O fine‑tuning de longo prazo usa 150 demonstrações por tarefa por 25 épocas, misturando dados de subtarefa e de tarefa completa em 9:1, depois dez avaliações por tarefa. São relatados cerca de 500k quadros e oito etapas por suíte, não uma duração de tarefa uniforme.

**Cuidado:** As pontuações de longo prazo fazem a média da conclusão sob instruções de subtarefa; elas não são sucesso autônomo de tarefa completa a partir de uma única instrução geral. “Pronto para uso” também não implica que a corporificação estivesse ausente do pré‑treinamento.

### O raciocínio melhora as ações?
![EO-1 Análise detalhada: 6.3 O raciocínio melhora as ações? (imagem 07)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-07.png)

EO-1 obtém pontuações de `0.76, 0.79, 0.84, 0.55` em jogo da velha, rearranjo por referência de imagem, preparo de sanduíche e preparo de bife. As linhas de base de jogo da velha são π0 em `0.24` e GR00T-N1.5 em `0.36`, apoiando melhor integração de julgamento de tabuleiro e posicionamento neste cenário.

Essas tarefas usam dados especializados e fine‑tuning: 800 demonstrações de rearranjo e 450 amostras de jogo da velha. As linhas de base combinam um planejador GPT-4o externo com controladores, enquanto EO-1 usa um decodificador unificado. Os resultados apoiam a abordagem completa de sistema/treinamento, não um componente isolado ou aprendizado de nova tarefa em zero‑shot.

### Generalização e o Papel dos Dados
![EO-1 Análise detalhada: 6.4 Generalização e o Papel dos Dados (imagem 10)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-10.png)

As pontuações de conclusão sob variações visuais, de linguagem e de ação são `0.72, 0.79, 0.67`, com `0.73` no geral. As variações de ação mudam principalmente posições de objetos, pontos de vista do robô e instâncias de objetos, não habilidades inéditas arbitrárias. O texto e as figuras divergem quanto ao total de tarefas, portanto os “18 Tasks” da Figura 9 não são tratados como uma contagem de experimentos para todo o artigo.

![EO-1 Análise detalhada: 6.4 Generalização e o Papel dos Dados (imagem 14)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-14.png)

Quatro configurações são comparadas: `fast`, ações FAST totalmente autoregressivas; `base`, um backbone compartilhado com continuous flow matching treinado apenas em dados de controle; `llava`, adicionando instruções genéricas de imagem-texto; e `interleaved`, adicionando dados intercalados relevantes.

A Tabela 5 fornece duas observações principais:

- **A geração contínua ajuda:** LIBERO `base` atinge 98,2% em comparação com `fast` em 88,0%. Isso apoia a decodificação híbrida neste cenário, não uma inferioridade universal de ações discretas.

- **A relevância importa mais do que simplesmente adicionar modalidades:** a conclusão geral do WidowX sobe de `base` `0.71` para `interleaved` `0.80`, enquanto o `llava` com dados genéricos obtém `0.34`. O alinhamento de tarefas é importante; dados da web não são universalmente prejudiciais.

Os ganhos têm limites: as pontuações de generalização de ação do sanduíche AgiBot permanecem em `0.75` tanto para `base` quanto para `interleaved`. Rótulos intercalados não fornecem automaticamente diversidade de movimento ausente nas demonstrações.

---

## Interpretando a Conclusão
**Conclusão sustentada:** Nesses cenários, um backbone compartilhado com dados corporificados intercalados melhora o raciocínio relevante para a tarefa e o controle contínuo. Ele fornece uma interface treinável para raciocínio antes das ações e reavaliação depois.

Mantenha três limites:

- **Unificado não significa totalmente confiável.** Tarefas complexas como cozinhar bife continuam fracas, o EO-Bench está longe de ser perfeito, e navegação, desvio de obstáculos, análise de falhas e colaboração permanecem como direções futuras.

- **Raciocínio e movimento não são arbitrariamente concorrentes.** Arquiteturas eficientes e inferência assíncrona permanecem como trabalhos futuros. A intercalação expressa dependências temporais, não pensamento e ação simultâneos em nível humano.

- **A reprodução precisa de detalhes de implementação.** Contagens e sinais de fluxo entram em conflito, e dimensões de estado/ação e cronogramas de execução não podem ser inferidos a partir de diagramas. São relatados cerca de 6 GB de memória de inferência em uma RTX 4090, sem medições universais de latência ou taxa de controle, portanto a execução em tempo real em qualquer plataforma não é garantida.

**Explicação:** EO-1 oferece uma rota para aprender julgamento semântico e controle em conjunto. A rede compartilhada lida com informações conjuntas, os dados intercalados fornecem relações temporais e o sampling de retificação distingue ações históricas da atenuação de ruído atual. Os resultados práticos ainda dependem da cobertura das demonstrações, das tarefas e dos sistemas de execução.

</div>
