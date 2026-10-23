---
description: "Um mergulho profundo no DCT do FAST, quantização de coeficientes, compressão BPE, tokenizador de ações universal e política de ações autorregressiva."
title: "π₀-FAST — Tokenização de Ações Eficiente"
hide_title: true
keywords:
  - Mergulho Profundo em Artigo
  - pi0_fast
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
slug: /robotics/paper_reading_pi0_fast
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/pt-br/robotics/paper_reading_pi0_fast/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-pi0_fast-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · MERGULHO PROFUNDO EM ARTIGO</span>
  <h1 id="paper-reading-pi0_fast-title">π₀-FAST — Tokenização de Ações Eficiente</h1>
  <p className="paper-reading-lead">FAST: Tokenização de Ações Eficiente para Modelos Visão-Linguagem-Ação</p>
  <ul className="paper-reading-badges" aria-label="Neste guia">
    <li>Tokenização de ações</li>
    <li>DCT</li>
    <li>Compressão BPE</li>
    <li>Políticas autorregressivas</li>
  </ul>
</section>

**Relação com π0:** O artigo se chama FAST; π0-FAST é a política treinada usando-o. FAST é um método de tokenização, FAST+ um tokenizador de ações universal pré-treinado, e π0-FAST um VLA autorregressivo usando essa representação. Ele compartilha com o π0 a abordagem de backbone PaliGemma, mas muda a geração de ações; não é apenas um pré-processador de compressão adicionado ao especialista de flow matching do π0.

**Fonte de leitura:** O PDF original, Seções I–VII e Apêndices A–E, seguindo a estrutura do mergulho profundo em π0 anterior. A numeração de páginas se refere às páginas físicas do PDF de 19 páginas, de onde as figuras são extraídas. Derivações adicionais e exemplos numéricos são marcados como explicações em vez de atribuídos ao artigo.

![FAST / π0-FAST Paper Deep-Dive: FAST / π0-FAST Paper Deep-Dive (image-08)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/image-08.png)

## Pré-requisitos
### VLAs e Tokenização de Ações
**Explicação:** Um VLA converte uma cena visível e uma tarefa em linguagem em controles de robô. Para dobrar uma camiseta, imagens localizam a camiseta e os garras, a linguagem define o objetivo, o estado descreve os braços, e o modelo prediz ações futuras dos braços e garras.

Este artigo usa agrupamento de ações (action chunking): prever $H$ passos futuros em vez de apenas um. Defina:

$A_t=[a_t,a_{t+1},\ldots,a_{t+H-1}]\in\mathbb R^{H\times D},\qquad
o_t=(I_t^1,\ldots,I_t^m,\ell_t,q_t)$

Aqui $t$ é o tempo de controle do robô, $a_t$ uma ação $D$-dimensional, e $H$ o horizonte. $I_t^i$ é a vista de imagem $i$, $m$ a contagem de câmeras, $\ell_t$ a instrução, e $q_t$ a propriocepção. A política aprende $\pi_\theta(A_t\mid o_t)$, onde $\theta$ denota os parâmetros da rede.

**Artigo:** Os blocos têm principalmente **um segundo** de duração. Assim, $H$ depende da taxa de controle: 15 a 15 Hz, 20 a 20 Hz e 50 a 50 Hz. Não assuma $H=50$ do π0 para todo conjunto de dados aqui.

A tokenização de ações mapeia um bloco contínuo para símbolos discretos:

$\mathcal T(A_t)=[z_1,z_2,\ldots,z_n],\qquad z_k\in\{0,\ldots,V-1\}$

$\mathcal T$ é o tokenizador, $z_k$ um ID de token de ação, $V$ o tamanho do vocabulário, e $n$ o comprimento da sequência comprimida. Blocos com a mesma forma podem produzir $n$ diferentes, assim como frases com o mesmo comprimento podem ter diferentes contagens de subpalavras.

**Cuidado:** Um ID de token não é um ângulo de junta. Um token FAST não precisa corresponder a um instante de tempo, junta ou ação completa. Gere a sequência primeiro, depois decodifique-a para um bloco contínuo.

### Quantização Pontual, Flow Matching do π0 e FAST
![FAST / π0-FAST Paper Deep-Dive: 1.2 Pointwise Binning, π0 Flow Matching, and FAST (image-04)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/image-04-en.png)


A quantização convencional quantiza de forma independente cada instante de tempo e dimensão de ação. Uma configuração comum discutida no artigo usa 256 intervalos uniformes:

```text
D action components at step 1 → D tokens
D action components at step 2 → D tokens
……
D action components at step H → D tokens
Total: H × D tokens
```

Dados de alta taxa então produzem sequências longas com valores vizinhos altamente semelhantes. Copiar tokens repetidos pode reduzir a perda sem aprender o movimento global.

**Exemplo mínimo:** Valores $[0.200,0.201,0.202,0.203]$ podem todos cair em um mesmo intervalo grosseiro. Repetir o token anterior prediz muitos rótulos corretamente, mas falha em expressar a trajetória que muda de forma constante.

FAST usa:

```text
Continuous chunk → frequency coefficients → quantization → frequency-first flattening → BPE
          → fewer action tokens → autoregressive VLA prediction → continuous-chunk decoding
```

A transformada discreta do cosseno (DCT) expressa uma trajetória como componentes de cosseno em diferentes frequências; a codificação por pares de bytes (BPE) mescla subsequências inteiras comuns. Prever essa representação comprimida da trajetória remove supervisão redundante.

| Aspecto | VLA autorregressivo pontual | π0 original | π0-FAST |
|---|---|---|---|
| Representação | Valor discreto por instante de tempo e dimensão | Bloco contínuo | Tokens discretos comprimidos para um bloco |
| Objetivo | Predição do próximo token | Flow matching condicional | Predição do próximo token |
| Geração | Gerar sequencialmente $HD$ tokens | Atualizar iterativamente o bloco completo com um especialista | Gerar $n$ tokens comprimidos, depois decodificar |
| Dados de alta taxa | Mais tokens e repetição | A geração contínua evita decodificação dimensão a dimensão | Comprime redundância temporal e encurta a saída |
| Principal limitação | Destreza em alta taxa pode ser difícil de aprender | Requer um especialista contínuo dedicado | Quantização com perda; a inferência autorregressiva ainda pode ser lenta |

**Artigo:** A Tabela I reduz um bloco de camiseta de um segundo, 50 Hz, 14D de 700 tokens pontuais para uma média de 53 tokens FAST. A decodificação ainda produz 50 × 14 ações; o controle do robô não se torna “53 tokens por segundo”.

![FAST / π0-FAST Paper Deep-Dive: 1.2 Pointwise Binning, π0 Flow Matching, and FAST (image-05)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/image-05.png)

*Figura 2: predições da mesma spline cúbica em diferentes densidades de amostragem. Amarelo é quantização pontual; verde é DCT. A escala de cores inferior vai de amarelo claro a roxo conforme a contagem de amostras $H$ aumenta de 25 para 800. Da Figura 3 original, página 3 do PDF.*

**Lendo a figura:** Quatro pontos de entrada definem o mesmo tipo de alvo de interpolação enquanto a densidade aumenta. O erro da tokenização pontual cresce, eventualmente se aproximando de uma predição constante; o erro da DCT permanece baixo. O aprendizado pode falhar por causa da representação e não por uma tarefa mais difícil. Os valores 25–800 são amostras sintéticas por sequência, não frequências reais de controle de robô.

### Treinamento, Inferência e Avaliação
| Estágio | Entradas e operações | Saída e critério |
|---|---|---|
| Treinamento do tokenizador | Normalizar ações, aplicar DCT e quantização, e aprender BPE a partir de sequências inteiras. | Regras de codificação/decodificação; erro de compressão e reconstrução. |
| Treinamento da política | Condicionar em imagens, linguagem e estado; codificar ações futuras demonstradas como rótulos FAST. | Otimização de entropia cruzada e pesos do VLA. |
| Inferência da política | Gerar tokens, reverter BPE, desquantizar e aplicar DCT inversa. | Blocos contínuos para o controlador. |
| Avaliação no robô | Executar tarefas e condições iniciais especificadas. | Sucesso na tarefa ou progresso normalizado. |

**Artigo:** A avaliação inclui seis tarefas/configurações em robôs reais e um benchmark em simulação, além de testes offline separados de compressão FAST+ em diferentes corpos. Comprimir dados de humanóide não é o mesmo que treinar e validar fisicamente uma política para humanóide.

**Cuidado:** Perda de token, erro de reconstrução e pontuação de tarefa são distintos. Um achado chave é que rótulos repetitivos podem produzir baixa perda de treinamento enquanto trajetórias e comportamento do robô permanecem ruins.

---

## Resumo
### Tradução
Modelos de sequência autorregressivos, incluindo VLAs baseados em Transformer, podem representar comportamentos robóticos complexos e generalizáveis, mas exigem um tokenizador para mapear predições discretas para ações contínuas. Os autores constatam que uma quantização simples por dimensão e por instante de tempo tem desempenho ruim em dados hábeis de alta frequência.

Eles propõem a Tokenização de Sequência de Ações no Espaço de Frequência (FAST), usando compressão baseada em DCT para permitir que VLAs autorregressivos aprendam tarefas hábeis de alta frequência onde a discretização padrão falha.

FAST+ é um tokenizador universal treinado em um milhão de sequências de ações de robôs reais, utilizável como um tokenizador de caixa-preta em diferentes espaços de ação e frequências de controle.

Combinado com a abordagem de VLA do π0, FAST escala para 10.000 horas de dados de robô, iguala o desempenho de VLAs no estilo difusão e reduz o tempo de treinamento em até cinco vezes.

### Comentário
- **Motivação:** Ações em alta taxa contêm informação repetida. Tokens pontuais gastam esforço de predição em rótulos com pouca nova supervisão de movimento.

- **Mudança central:** Mudar a representação do alvo de aprendizado antes de treinar a política. FAST comprime a informação de trajetória sem reduzir a frequência de execução nem descartar pontos de controle.

- **Por que isso pode funcionar:** DCT concentra o formato da trajetória, a quantização cria coeficientes comprimíveis, e BPE encurta combinações comuns. Os três contribuem para os tokens finais.

- **Significado de “universal”:** FAST+ evita retreinar um vocabulário BPE específico de conjunto de dados, mas ainda requer normalização, dimensões e horizontes compatíveis. Seus um milhão de amostras de treinamento são principalmente blocos de um segundo, não um milhão de episódios completos de tarefa.

- **Escopo de “cinco vezes”:** Experimentos de política em larga escala reduzem as horas de GPU necessárias em até cerca de cinco vezes. Isso não é inferência mais rápida: a v1 relata cerca de 750 ms por bloco π0-FAST versus geralmente menos de 100 ms para π0.

---

## Introdução
![FAST / π0-FAST Paper Deep-Dive: 3. Introduction (01-tokenization-bottleneck)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/01-tokenization-bottleneck-en.png)

### Parágrafo 1: Localizar o Gargalo na Tokenização
- **Ponto principal:** Grandes Transformers podem aprender comportamento de robô do zero ou usar pré-treinamento imagem-texto, mas as ações precisam ser tokenizadas. A quantização pontual tem dificuldades em tarefas hábeis de alta taxa porque copiar valores recentes correlacionados alcança baixa perda e pode prender o aprendizado em um ótimo local ruim.

- **Problema:** Uma espinha dorsal poderosa não garante um aprendizado útil de ações; a representação do alvo pode limitar a supervisão.

- **Configuração:** A Seção IV estuda a densidade de amostragem com interpolação sintética; a Seção V propõe compressão.

![FAST / π0-FAST Paper Deep-Dive: Paragraph 1: Locate the Bottleneck in Tokenization (02-compress-then-predict)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/02-compress-then-predict-en.png)

### Parágrafo 2: Comprimir Primeiro, Prever Depois
- **Ponto principal:** Inspirado pela tokenização em linguagem, o FAST usa DCT para sinais contínuos de robôs. A predição padrão do próximo token então aprende tarefas que antes falhavam e oferece suporte a uma política DROID usada por meio de linguagem em cenários inéditos.

- **Problema:** Se a redundância temporal é o obstáculo, reduza a redundância dos rótulos em vez de apenas aumentar a capacidade da rede.

- **Configuração:** A Seção V-B apresenta o algoritmo, e a Seção VI avalia tarefas reais e a generalização do DROID.

![FAST / π0-FAST Paper Deep-Dive: Paragraph 2: Compress First, Predict Second (03-universal-tokenizer-and-scaling)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/03-universal-tokenizer-and-scaling-en.png)

### Parágrafo 3: Tokenização Universal e Políticas em Grande Escala
- **Ponto principal:** O FAST+ aprende um vocabulário a partir de um milhão de sequências cobrindo braços únicos, bimanual, móvel e interfaces e frequências de controle variadas. O π0-FAST escala a autorregressão para 10.000 horas com menos tempo de treinamento do que a comparação em estilo de difusão.

- **Problema:** Retreinar um tokenizador para cada robô adiciona sobrecarga, e o método precisa escalar além de conjuntos de dados individuais.

- **Configuração:** A Seção V-C e o Apêndice A descrevem o FAST+; a VI-C testa universalidade e a VI-F políticas em grande escala.

**Atenção:** A introdução contém três parágrafos principais, com o primeiro abrangendo as páginas 1–2. Quebras de página e legendas de figuras não são parágrafos extras. As afirmações sobre o “primeiro” resultado DROID refletem a avaliação dos autores na publicação, não um levantamento de trabalhos posteriores.

---

## Trabalhos Relacionados
- **Tokenização de texto, imagem e áudio:** O BPE de texto mescla subsequências frequentes; outras modalidades usam quantização aprendida ou representações em frequência. O FAST aplica o princípio de representação e compressão a blocos de ações contínuas. A DCT é analítica; apenas o vocabulário BPE é aprendido.

- **VLAs:** RT-2 e OpenVLA transferem conhecimento imagem-texto para controle, mas normalmente usam bins de ação pontuais. O FAST altera as saídas para que uma espinha dorsal autorregressiva possa aprender destreza em alta taxa; o π0 de fluxo contínuo é uma comparação fundamental.

- **Representações de ação:** Subtarefas semânticas e pontos-chave podem depender de controladores projetados manualmente; o binning representa diretamente os controles, mas tem redundância temporal; cabeças de regressão e difusão mudam os mecanismos de saída. O FAST mantém a predição de sequência discreta. A comparação de compressão aprendida usa quantização escalar finita (FSQ). O FAST não precisa de codificador neural e tem melhor desempenho nas reconstruções de alta fidelidade testadas e em tarefas de destreza, não necessariamente em todo tokenizador aprendido.

---

## Sistema de Política π0-FAST e Plataformas Experimentais
### Objetivos e Componentes
FAST é um método de processamento de ações, não um novo hardware de teleoperação. Esta seção do sistema explica como tokenização, o VLA, controle e avaliação se encaixam.

Os objetivos são comprimir ações em alta taxa mantendo trajetórias finas, reutilizar treinamento autorregressivo de VLM, suportar espaços de ação variados, permitir treinamento/reuso fácil de tokenizadores e escalar entre diferentes corpos robóticos.

| Componente | Configuração no artigo | Função |
|---|---|---|
| FAST / FAST+ | DCT, quantização, achatamento frequência-primeiro, BPE | Codificar blocos como símbolos previsíveis e decodificá-los. |
| Espinha dorsal π0-FAST | PaliGemma-3B | Codificar imagens/linguagem e gerar tokens de ação de forma autorregressiva. |
| Comparação de transferência de espinha dorsal | OpenVLA baseado em Prismatic 7B | Testar se os benefícios se estendem além do PaliGemma. |
| Imagens | Duas ou três visões $224\times224$ | Uma visão externa mais uma visão de pulso por braço. |
| Propriocepção | Discretização em 256 bins, depois tokenização de texto inteiro | Fornecer o estado atual do robô. |
| Execução | Controladores de baixo nível específicos da plataforma | Enviar valores contínuos decodificados para juntas, garras e outros controles. |

**Artigo:** Todos os pesos de política são ajustados por fine-tuning. Cada imagem é codificada separadamente, depois os tokens visuais são concatenados. O tamanho da imagem e a codificação de estado textual são especificados no Apêndice C em vez de inferidos do π0.

![FAST / π0-FAST Paper Deep-Dive: 5.1 Goals and Components (image-01)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/image-01.png)

| Tarefa / cenário | Plataforma e taxa de controle | Capacidade testada |
|---|---|---|
| LIBERO | Simulação | Generalização espacial, de objeto, de objetivo e de longo horizonte. |
| Limpeza de mesa | UR5/UR5e único, 20 Hz | Agarrar, classificar e armazenar 12 objetos. |
| Dobrar camiseta | ARX bimanual, 50 Hz | Agarrar e dobrar com precisão uma camiseta plana. |
| Ensacamento de compras | UR5/UR5e único, 20 Hz | Ensacar sete objetos sem colapsar ou rasgar a sacola. |
| Torrada fora da torradeira | Trossen Viper-X bimanual, 50 Hz | Remover duas fatias de torrada e colocá-las em um prato. |
| Dobrar roupa | ARX bimanual, 50 Hz | Retirar, abrir, dobrar e empilhar roupas de um cesto. |
| Tarefas de mesa DROID zero-shot | Dados e implantação em Franka, 15 Hz | Seguir linguagem para posicionamento, limpeza, operações com gavetas e tarefas relacionadas em novos cenários. |

**Atenção:** Alta frequência de controle significa muitos pontos de controle por segundo; alta frequência em DCT significa variação rápida ao longo de uma trajetória. Movimento suave a 50 Hz ainda pode ser dominado por coeficientes de baixa frequência. Nenhuma delas é a taxa completa de inferência do modelo.

### Conectando Codificação, Predição e Execução
O fluxo de trabalho completo é:

```text
Demonstrations → one-second future chunks → normalization and FAST → action-token labels
Current images + language + state → VLM prefix → learn action-token prediction
                                      ↓ after training
New observations → autoregressive tokens → FAST decoding → continuous chunk → execute
                                                                  ↓
                                                          observe and predict again
```

FAST codifica apenas alvos de ação; ele não interpreta imagens nem aplica DCT à propriocepção atual. Durante o treinamento, o modelo vê tokens de ações anteriores de verdade-terreno; na inferência, ele vê seus próprios tokens gerados.

**Artigo:** Símbolos de ação substituem slots raramente usados no vocabulário do VLM, reutilizando saídas discretas sem um especialista de fluxo ao estilo π0. Os experimentos com OpenVLA ainda modificam entradas de múltiplas imagens e saídas em blocos. Compatibilidade com espinhas dorsais autorregressivas não significa que todo código-base robótico existente não precise de adaptação.

**Temporização de execução:** O DROID prediz 15 passos e executa oito ou 15 em malha aberta antes de atualizar observações. A 15 Hz, isso cobre cerca de 0,53 ou um segundo de pontos de controle, não o total de ciclos de tempo de parede incluindo inferência e comunicação. A v1 não especifica um comprimento de execução único para todas as plataformas.

**Justificativa:** Blocos preservam a coerência da trajetória; a compressão torna rótulos em alta taxa aprendíveis; saídas autorregressivas permitem que pesos de imagem-texto pré-treinados participem diretamente. Os controladores recebem valores contínuos, não IDs de BPE.

### Dados, Capacidades e Resultados
#### Escala e Configuração do Conjunto de Dados
| Uso | Escopo | Distinção |
|---|---|---|
| Treinamento do tokenizador FAST+ | Cerca de um milhão de blocos de ações reais de um segundo | Aprende BPE, não compreensão visual do VLA. |
| Cobertura do FAST+ | Braço único, bimanual, móvel; controles de junta, efetuador final em referencial mundial e efetuador final em referencial de câmera; frequências variadas | Um robô pode contribuir com múltiplas parametrizações de ação. |
| Política em grande escala | Mistura π0: 903M passos internos, com dados abertos recebendo peso de amostragem de mistura de 9,1% | Fontes abertas incluem Bridge v2, DROID e OXE; 9,1% não é uma fração do volume bruto de dados. |
| Política específica do DROID | 75k episódios bem-sucedidos, cerca de 21M amostras | Filtragem leve e remoção de ações ociosas totalmente zero; o treinamento da política ainda é necessário. |
| Treinamento do DROID | Lote 256, 240k iterações, cerca de três épocas | O Apêndice D relata cerca de quatro dias em oito H100s para esta configuração. |

**Artigo:** O treinamento do FAST+ preenche ações até 32 dimensões. Isso alinha os dados do tokenizador, não o tamanho de saída de toda política, e difere da interface 18D do π0. Novas plataformas ainda precisam ter suas dimensões efetivas de ação definidas.

O DROID usa uma imagem externa e uma de pulso. O treinamento escolhe aleatoriamente entre duas câmeras externas disponíveis e três anotações de linguagem por episódio, sem informações de calibração de câmera. Os controles são velocidades de junta e posição absoluta da garra. Implantação em novas visões não elimina a necessidade de configurar coordenadas e interfaces de controle.

#### Compressão: Menos Tokens, o Mesmo Horizonte de Ação
Estes resultados de um segundo reproduzem a Tabela I. A compressão é a contagem pontual de tokens dividida pela contagem média de FAST em erro de reconstrução semelhante.

| Conjunto de dados / tarefa | Dimensão $D$ | Taxa e horizonte $H$ | Tokens pontuais | Tokens FAST médios | Compressão |
|---|---|---|---|---|---|
| BridgeV2 | 7 | 5 Hz, 5 passos | 35 | 20 | 1,75 |
| DROID | 7 | 15 Hz, 15 passos | 105 | 29 | 3,6 |
| Limpeza de mesa | 7 | 20 Hz, 20 passos | 140 | 28 | 5,0 |
| Dobrar camiseta | 14 | 50 Hz, 50 passos | 700 | 53 | 13,2 |

**Interpretação:** Aumentar pontos de controle não adiciona necessariamente, de forma proporcional, novas informações de movimento. Cerca de 30 tokens por braço por segundo é uma observação empírica aqui, não um comprimento fixo.

**Verificação de versão:** A Tabela III do Apêndice usa alguns conjuntos de dados offline de dimensões diferentes, incluindo DROID Joint 8D e limpeza de mesa, enquanto a Tabela I lista 7D. A convenção da Tabela I é mantida em vez de mesclar diferentes parametrizações em uma especificação única.

#### Avaliação: Sucesso e Progresso São Diferentes
| Tarefa | Avaliação |
|---|---|
| LIBERO | Sucesso binário por episódio; quatro suítes treinadas conjuntamente em cerca de 270k amostras por 40k iterações. |
| Limpeza de mesa | Fração dos 12 objetos colocados corretamente no lixo ou no recipiente de armazenamento. |
| Dobrar camiseta | Sucesso de dobra julgado por humanos em cinco camisetas já vistas. |
| Ensacamento de compras | Fração dos sete objetos colocados na sacola. |
| Remoção de torrada | Um ponto por fatia removida e um por fatia colocada no prato; quatro pontos no total, depois normalizados. |
| Dobrar roupa | Dobra e empilhamento de roupas julgados por humanos, com cinco peças aleatórias no cesto. |
| Testes quantitativos do DROID | 44 tentativas por política, com pontos de progresso específicos da tarefa, como agarre e destino corretos. |

**Verificação de versão:** O texto principal chama a quarta suíte do LIBERO de Libero-10; o apêndice a chama de Libero-Long. Ela é descrita aqui como a suíte de horizonte longo. O Apêndice E menciona 16 tarefas DROID, enquanto a Tabela II lista 17 nomes; as contagens de tentativas ainda somam 44. A discrepância é preservada em vez de ser resolvida silenciosamente.

**Limite das evidências:** Implantações em Berkeley, Stanford e na University of Washington são demonstrações qualitativas adicionais sem taxas de sucesso reportadas. Zero-shot significa nenhum treinamento adicional para o novo cenário de implantação, não ausência de treinamento DROID. O treinamento de vocabulário FAST+ também inclui dados de tarefas reais de avaliação, então a Figura 6 não mostra tanto o tokenizador quanto a política completamente desconhecendo todas as tarefas.

#### Comparando tokenizadores
![FAST / π0-FAST Paper Deep-Dive: Comparing Tokenizers (image-06)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/image-06.png)

Em bussing de mesa a 20 Hz e dobra de camiseta a 50 Hz, o agrupamento pontual (pointwise binning) faz pouco progresso, enquanto FAST e FAST+ aprendem políticas úteis. FSQ reforça o valor da compressão, mas geralmente fica atrás do FAST nessas tarefas de destreza. O FAST+ universal fica próximo ao FAST específico de dataset, apoiando seu uso como padrão.

**Cuidado:** A figura faz a média de pontuações de tarefas diferentes, portanto não é uma taxa de sucesso média uniforme. As barras de erro também limitam conclusões sobre pequenas diferenças entre barras semelhantes.

#### Comparação em um único dataset com π0
![FAST / π0-FAST Paper Deep-Dive: Single-Dataset Comparison with π0 (image-09)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/image-09.png)

- Em datasets menores como LIBERO e dobra de camiseta, os autores julgam o desempenho comparável.

- Em dados grandes de bussing de mesa, FAST atinge desempenho forte mais cedo; π0 leva cerca de três vezes mais passos para se aproximar disso.

- Em DROID, π0-FAST segue a linguagem de forma mais confiável enquanto o π0 com flow-matching frequentemente a ignora; o artigo não estabelece a causa subjacente.

**Explicação:** Teacher forcing calcula perdas para posições de saída em paralelo durante o treinamento; a inferência autoregressiva permanece sequencial. Treinamento mais rápido e inferência mais lenta podem coexistir. Esses resultados não estabelecem superioridade autoregressiva universal.

#### Generalistas em larga escala e comparação com computação equivalente
![FAST / π0-FAST Paper Deep-Dive: Large-Scale Generalists and Compute-Matched Comparison (image-02)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/image-02.png)

π0-FAST tem desempenho geral semelhante ao π0 em dobra, bussing, ensacamento, torrada e lavanderia. Tarefas individuais variam; torrada não sustenta uma afirmação de superioridade universal do FAST. O π0-FAST avaliado usa cerca de um quinto das horas de GPU.

**Cuidado:** A Seção VI-F descreve de forma ampla a comparação zero-shot, mas o Apêndice E especifica fine-tuning de tarefa de alta qualidade para lavanderia após pré-treinamento em larga escala. Ensacamento e torrada usam modelos pré-treinados diretamente. Nem toda tarefa da Figura 6 está livre de fine-tuning específico de tarefa.

![FAST / π0-FAST Paper Deep-Dive: Large-Scale Generalists and Compute-Matched Comparison (image-10)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/image-10.png)

A equiparação de computação apoia de forma mais direta a convergência mais rápida: FAST tem uma média geral mais alta e ganhos claros em bussing/ensacamento, embora ainda fique atrás em torrada. Isso é evidência de eficiência de treinamento, não de capacidade final mais forte em toda tarefa.

**Limite de implantação:** Em uma RTX 4090, a Seção VI-E relata geralmente menos de 100 ms para π0 e cerca de 750 ms para π0-FAST por bloco de um segundo. FAST decodifica aproximadamente 30–60 tokens através de todo o backbone de linguagem; π0 repete principalmente seu expert menor de 300M por dez atualizações de flow. Tarefas estáticas toleram essa latência, mas tarefas dinâmicas e otimização de inferência permanecem como trabalho futuro.

---

## Tokenização no domínio da frequência e modelagem de política autoregressiva
### Mecanismo 1: Expressar uma trajetória com DCT
#### Problema e intuição
Pontos de controle vizinhos em trajetórias suaves são semelhantes. Alvos independentes crescem com a taxa de amostragem sem adicionar muita informação. DCT, em vez disso, descreve quais formas de cosseno se combinam, e com quais amplitudes, para formar a trajetória.

Alguns poucos coeficientes de baixa frequência frequentemente descrevem a forma global suave; frequências mais altas representam mudanças rápidas e detalhes. **A própria DCT nem descarta altas frequências nem impõe um filtro passa-baixa fixo.** DCT completa e DCT inversa são reversíveis; a quantização introduz a perda.

#### Expressão formal
**Explicação:** O artigo aplica DCT de forma independente ao longo de cada dimensão de ação. Uma convenção DCT-II ortonormal é usada abaixo para clareza, sem afirmar que o pseudocódigo especifica essa normalização.

Para um bloco normalizado $X\in\mathbb R^{H\times D}$:

$C_{k,d}=\alpha_k\sum_{j=0}^{H-1}X_{j,d}
\cos\left[\frac{\pi}{H}\left(j+\frac12\right)k\right]$

$\alpha_0=\sqrt{\frac1H},\qquad
\alpha_k=\sqrt{\frac2H}\quad(k>0)$

$j$ indexa o tempo dentro do bloco, $d=1,\ldots,D$ dimensões de ação, e $k=0,\ldots,H-1$ frequência. $C\in\mathbb R^{H\times D}$ é a matriz de coeficientes. $k=0$ é constante; $k$ maiores variam mais rápido. DCT atua ao longo do tempo, não entre juntas.

A inversa correspondente é:

$X_{j,d}=\sum_{k=0}^{H-1}\alpha_k C_{k,d}
\cos\left[\frac{\pi}{H}\left(j+\frac12\right)k\right]$

Cada ponto no tempo depende de múltiplas frequências; um coeficiente de frequência geralmente afeta todo o bloco.

#### Exemplo numérico mínimo
**Explicação:** Considere $H=4,D=2$, com ações normalizadas ilustrativas:

$X=\begin{bmatrix}
0.2&0.0\\
0.2&0.1\\
0.2&0.2\\
0.2&0.3
\end{bmatrix}
\quad\Longrightarrow\quad
C\approx\begin{bmatrix}
0.4&0.3\\
0&-0.2230\\
0&0\\
0&-0.0159
\end{bmatrix}$

A primeira dimensão constante precisa de apenas um coeficiente constante diferente de zero. A segunda dimensão crescente é representada principalmente pelo componente constante e pelo primeiro componente variante, com um pequeno coeficiente de frequência mais alta. Ainda há quatro instantes de tempo e duas dimensões; apenas a representação de coordenadas muda.

**Por que isso ajuda:** Amostras densas de movimento suave adicionam pontos semelhantes sem necessariamente adicionar frequências importantes. Concentrar informação compartilhada torna possível a compressão em menos tokens informativos.

**Escala e limites:** Blocos geralmente têm cerca de um segundo. $H=1$ não oferece redundância temporal; blocos curtos limitam a compressão, enquanto blocos longos aumentam o horizonte e, se executados em malha aberta, atrasam o feedback. Contato abrupto ou transições do gripper podem exigir frequências mais altas; algumas poucas baixas frequências não conseguem representar com precisão toda ação.

### Mecanismo 2: Quantização, ordenação por frequência e BPE
#### Por que DCT sozinha é insuficiente
DCT ainda produz $HD$ coeficientes reais. Tokenizar cada um separadamente não encurta a sequência, e coeficientes próximos de zero criam rótulos repetidos. FAST portanto adiciona quantização e BPE.

![FAST / π0-FAST Paper Deep-Dive: Why DCT Alone Is Insufficient (image-00)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/image-00.png)

#### Normalização por percentil por dimensão
**Artigo:** Mapear os percentis 1 e 99 de cada dimensão dos dados de treinamento para $-1$ e $1$, reduzindo diferenças de escala e a influência de outliers.

**Explicação:** Para uma dimensão não degenerada:

$X_{j,d}=2\frac{A_{t}[j,d]-L_d}{U_d-L_d}-1$

$L_d$ e $U_d$ são os percentis 1 e 99, respectivamente; $A_t[j,d]$ é o componente de ação física, e $X_{j,d}$ seu valor normalizado sem unidade. Se $L_d=0,U_d=2$ para uma junta, ações físicas $0,1,2$ mapeiam para $-1,0,1$.

**Cuidado:** Mapear percentis não força todo valor para dentro de $[-1,1]$. Siga a implementação para clipping e para o caso degenerado $L_d=U_d$; a versão 1 não detalha isso. Salve as estatísticas de treinamento para implantação em vez de recomputar percentis em cada bloco previsto.

#### Escalar e arredondar para criar inteiros comprimíveis
$Q_{k,d}=\operatorname{round}(\gamma C_{k,d}),\qquad
\widehat C_{k,d}=\frac{Q_{k,d}}{\gamma}$

$Q$ é a matriz de inteiros, $\gamma>0$ é a escala, e $\widehat C$ são os coeficientes reconstruídos. $\gamma$ maior torna a malha mais fina, geralmente melhorando a reconstrução, mas potencialmente aumentando os tokens; valores menores zeram mais coeficientes pequenos e comprimem mais ao custo de maior erro.

**Artigo:** Experimentos específicos de dataset usam $\gamma=10$ e vocabulário $V=1024$, com sensibilidade limitada na faixa testada. Esses não são ajustes universais para espaços de ação arbitrários.

Continuando o exemplo com $\gamma=10$:

$Q=\begin{bmatrix}
4&3\\
0&-2\\
0&0\\
0&0
\end{bmatrix}$

A mais alta frequência $-0.0159$ se torna zero, enquanto $-0.2230$ se torna $-2$. Nenhuma regra mantém apenas as duas primeiras frequências; qualquer coeficiente suficientemente grande pode permanecer diferente de zero.

**Explicação:** O arredondamento comum dá $\|\widehat C_{k,d}-C_{k,d}\|\leq 1/(2\gamma)$. Isso limita o erro de um coeficiente, não o erro diretamente na junta física, que também depende da transformação inversa, da escala de ação e do clipping.

#### Ordenação por frequência prioriza a forma global
Antes do BPE, FAST ordena os coeficientes por frequência crescente, depois por dimensão de ação dentro de cada frequência:

$u=[Q_{0,1},\ldots,Q_{0,D},Q_{1,1},\ldots,Q_{1,D},\ldots,Q_{H-1,D}]$

$u$ contém $HD$ inteiros. No exemplo:

```text
Frequency 0, two dimensions: 4, 3
Frequency 1, two dimensions: 0, -2
Frequency 2, two dimensions: 0, 0
Frequency 3, two dimensions: 0, 0
Flattened: 4, 3, 0, -2, 0, 0, 0, 0
```

**Artigo:** A ordenação por frequência produz rollouts mais estáveis do que a ordenação por dimensão ao prever primeiro a forma global de baixa frequência. A matriz original $D\times H$ chama isso de ordem por colunas; a convenção $H\times D$ deste guia a torna ordem por linhas. A ordenação semântica é o que importa, não o rótulo de linha/coluna.

#### BPE mescla subsequências inteiras comuns
BPE aprende combinações frequentes de símbolos adjacentes e as adiciona a um vocabulário finito. Um vocabulário ilustrativo poderia mesclar $[0,0,0,0]$ ou $[4,3]$ em tokens individuais, encurtando o exemplo de oito inteiros.

**Explicação:** As regras reais de mesclagem e os IDs dependem dos dados de treinamento; estes não são o vocabulário literal do artigo. Um token pode abranger dimensões ou frequências vizinhas, e a decodificação o expande de volta em inteiros.

**Distinção importante:** Arredondar coeficientes é com perda; BPE é sem perda na sequência de inteiros quantizados. As posições de zero são preservadas e comprimidas, não removidas. Caso contrário, a transformação inversa perderia suas localizações de frequência e dimensão.

![FAST / π0-FAST Paper Deep-Dive: 4. BPE Merges Common Integer Subsequences (image-03)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/image-03.png)

**Lendo a ablação:** Sem BPE, a DCT ainda concentra informação e supera o binning ponto a ponto, mas tokens de zero repetidos diluem a supervisão e adicionam etapas de decodificação. O desempenho cai em ambas as tarefas reais, apoiando contribuições separadas da DCT e do BPE.

### Demonstrações de Modelagem e Reutilização de FAST+ entre Corpos
#### Uma Observação Pode Ter Várias Ações Válidas
Uma pessoa pode segurar qualquer um dos cantos da camisa ou desdobrá-la de forma diferente. Regressão direta de erro quadrático médio pode fazer a média de alternativas válidas em um caminho intermediário inválido. π0 modela uma distribuição contínua; π0-FAST modela probabilidades sobre tokens comprimidos.

Fatorização autoregressiva:

$p_\theta(z_{1:n}\mid o_t)
=\prod_{k=1}^{n}p_\theta(z_k\mid o_t,z_{<k})$

$z_{1:n}$ é a sequência FAST e $z_{<k}$ seu prefixo antes do token $k$. Cada etapa prediz probabilidades no vocabulário em vez de fazer a média de valores de ações físicas; a sequência completa decodifica para uma trajetória.

**Atenção:** FAST não tem codificador CVAE, bloco de ação gaussiano ruidoso ou entrada de tempo de fluxo como π0. Esta seção explica a modelagem de demonstrações sem importar módulos de ACT ou π0. A cobertura ainda depende dos dados, da fidelidade da quantização e do aprendizado.

#### Por Que Rótulos Repetidos em Alta Taxa Enfraquecem o Aprendizado
**Explicação:** Quando valores adjacentes mal mudam, a entropia condicional do próximo token pode ser baixa:

$\mathrm H(Z_k\mid Z_{<k},o_t)$

$Z_k$ é um token de ação aleatório e $\mathrm H$ entropia condicional, distinta do horizonte $H$. Um prefixo previsível explica grande parte do próximo rótulo, então a repetição pode obter boa pontuação sem dependência suficiente da imagem ou da tarefa.

Essa perspectiva de informação explica os resultados sintéticos e de alta taxa; não é prova de que toda política com binning falha ou de que menos tokens sempre ajudam. Perda severa de compressão ainda pode produzir comportamento incorreto.

#### Um Vocabulário Universal com FAST+
As etapas analíticas de FAST se transferem entre conjuntos de dados, mas um vocabulário BPE específico de conjunto de dados não necessariamente faz isso. FAST+ aprende uma cobertura mais ampla a partir de cerca de um milhão de blocos entre corpos diferentes:

```text
Multiple robots, action spaces, and control rates
→ Normalize for each data configuration
→ Pad training actions to 32 dimensions
→ DCT, quantization, frequency-first flattening
→ Train BPE on the pooled integer sequences
→ Reusable FAST+ tokenizer
```

O vocabulário aprende padrões comuns de coeficientes e zeros, não semântica de câmera ou o controlador cinemático completo de um robô. Uma nova política ainda precisa de dados de imagem, linguagem, estado e ação para aprender o que fazer. Tokenização universal e controle generalista são níveis diferentes.

![FAST / π0-FAST Paper Deep-Dive: A Universal Vocabulary with FAST+ (image-12)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/image-12.png)

**Lendo a figura:** FAST+ comprime formas, dimensões e frequências variadas. A Seção VI-C chama os testes de dados não vistos, enquanto a Tabela III inclui versões de plataformas/tarefas também nomeadas no treinamento. “Não visto” é, portanto, mantido no nível de divisão de dados do artigo, não estendido a todas as categorias de robôs.

**Limite:** A Figura 10 é compressão offline, não sucesso de locomoção humanoide, mão hábil ou política de direção. A Seção VII observa que as políticas físicas são validadas principalmente em manipuladores estacionários. A Tabela III inclui dados humanoides de 40D, então o preenchimento de treinamento em 32D não é um máximo matemático para o método.

### Treinando, Codificando e Decodificando o Tokenizer
#### Treinamento do Tokenizer
Para blocos de demonstração $\{A^{(s)}\}$, com índice de amostra $s$:

1. Calcule e salve estatísticas de percentil por dimensão para cada configuração de dados.

2. Normalize para $X^{(s)}$ e aplique DCT ao longo do tempo independentemente por dimensão.

3. Quantize para inteiro $Q^{(s)}$ usando $\gamma$ fixo.

4. Achate em ordem de frequência-primeiro para $u^{(s)}$.

5. Treine BPE de tamanho fixo em todas as sequências de inteiros para obter vocabulário e regras de mesclagem $\Phi$.

**Artigo:** BPE é o único componente aprendido do tokenizer. Um vocabulário específico geralmente é treinado em minutos, não nos dias ou mais necessários para um VLA. DCT e quantização não têm pesos neurais e não precisam de codificador/decodificador VQ separado.

#### Codificação: Transformar Demonstrações Futuras em Rótulos
A codificação completa é:

$z_{1:n}=\operatorname{BPE}_{\Phi}\!\left(
\operatorname{Flatten}_{\rm freq}\!\left[
\operatorname{round}\left(\gamma\operatorname{DCT}[\operatorname{Norm}(A_t)]\right)
\right]\right)$

$\operatorname{Norm}$ é normalização, $\operatorname{Flatten}_{\rm freq}$ achatamento com frequência primeiro, e $\Phi$ regras BPE fixas. A DCT atua ao longo do tempo por dimensão. A codificação precisa de ações futuras reais, então cria rótulos de treinamento em vez de assumir conhecimento futuro durante a implantação.

**Atenção:** O Algoritmo 1 começa na DCT, omitindo a normalização explícita, enquanto a Seção V-B a especifica em prosa. Este guia segue o pipeline completo. O arredondamento não pode ser invertido exatamente, então a decodificação reconstrói uma aproximação das ações pré-quantizadas.

#### Decodificação: Transformar Previsões em Ações Executáveis
Após gerar $\widehat z_{1:\widehat n}$:

$\widehat u=\operatorname{BPE}^{-1}_{\Phi}(\widehat z_{1:\widehat n}),\qquad
\widehat Q=\operatorname{Unflatten}_{H,D}(\widehat u)$

$\widehat C=\widehat Q/\gamma,\qquad
\widehat X=\operatorname{IDCT}(\widehat C),\qquad
\widehat A_t=\operatorname{Norm}^{-1}(\widehat X)$

$\widehat n$ é a contagem de tokens gerados; $\operatorname{Unflatten}_{H,D}$ reconstrói a matriz de coeficientes e $\operatorname{IDCT}$ é a inversa correspondente. O $\widehat A_t\in\mathbb R^{H\times D}$ final é contínuo. A implantação ainda precisa de $H,D$ alvo; o comprimento variável de tokens não substitui a definição da interface de controle.

Para a normalização linear anterior, a desnormalização é:

$\widehat A_t[j,d]=L_d+\frac{\widehat X_{j,d}+1}{2}(U_d-L_d)$

**Explicação:** A transformação inversa do exemplo com $\gamma=10$ dá aproximadamente:

$\widehat X\approx\begin{bmatrix}
0.2&0.0193\\
0.2&0.0959\\
0.2&0.2041\\
0.2&0.2807
\end{bmatrix}$

A segunda dimensão original é $[0,0.1,0.2,0.3]$; a reconstrução preserva sua forma crescente com pequenos erros. A decodificação BPE não adiciona mudança a $Q$: a quantização causa o erro. Estes são valores normalizados, não diretamente radianos ou milímetros.

#### Verificar Compressão e Reconstrução em Conjunto
![FAST / π0-FAST Paper Deep-Dive: Check Compression and Reconstruction Together (image-07)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/image-07.png)

**Lendo a figura:** FSQ aprendido pode ser eficaz em baixa precisão e com pouquíssimos tokens. Em maior precisão, o erro de FAST diminui mais com a contagem de tokens e se adequa melhor às tarefas de controle fino testadas. A sequência mais curta não é automaticamente a melhor representação de trajetória.

**Limites:** Escalas de quantização muito pequenas podem apagar coeficientes e produzir movimento quase constante; escalas grandes melhoram a fidelidade, mas criam menos zeros comprimíveis e inteiros mais complexos. Vocabulários maiores representam mais combinações, mas consomem mais posições de saída. A faixa testada não estabelece ganhos de desempenho monotônicos.

**Nota de engenharia:** Tokens previstos ou comprimentos expandidos podem ser inválidos. Verifique o formato do bloco, dimensões efetivas e limites de controle antes da execução. A v1 não especifica totalmente reparos, então preenchimento ou truncamento não devem ser apresentados como uma implementação documentada do artigo.

### A Rede π0-FAST Completa
#### Entradas e Formatos
Cada previsão é condicionada em:

- Duas ou três imagens RGB de $224\times224\times3$.

- Instrução em linguagem natural $\ell_t$.

- Propriocepção $q_t$, com dimensões dependentes da plataforma.

- Apenas durante o treinamento, ações futuras reais $A_t\in\mathbb R^{H\times D}$ para supervisão FAST.

O cenário de camisa da Tabela I usa $H=50,D=14$, resultando em $50\times14$ rótulos; seu cenário DROID usa $H=15,D=7$, resultando em $15\times7$. Use o espaço de ação efetivo para a versão real do conjunto de dados.

**Diferença em relação a π0:** π0 projeta continuamente estado e ações ruidosas em um especialista. FAST v1 faz binning do estado atual em 256 níveis e tokeniza os inteiros como texto, enquanto ações futuras usam FAST. O estado é uma condição atual em vez de uma saída longa em alta taxa, então os autores consideram o binning simples suficiente ali.

#### Recursos de Imagem e Texto em um Único Backbone
Um codificador pré-treinado produz tokens visuais por câmera; strings de tarefa e estado produzem tokens de texto. Juntos, eles formam o prefixo de observação. PaliGemma-3B é o backbone principal, com OpenVLA/Prismatic 7B como comparação de transferência.

**Explicação:** Com $N_v$ tokens por imagem e $N_\ell,N_q$ tokens de linguagem/estado, o comprimento do prefixo é:

$N_o=mN_v+N_\ell+N_q$

$m$ é a contagem de câmeras e $N_o$ o comprimento do prefixo, ignorando alguns separadores/tokens especiais. Para largura de embedding $E$, a representação é $N_o\times E$. Isso explica dimensões, não uma especificação completa da v1; contagens visuais, largura, separadores e codificações de posição não são todos fornecidos.

#### Sufixo de Ação e Atenção
FAST codifica ações demonstradas como $n$ tokens, mapeados para posições de VLM raramente usadas e fornecidos como um sufixo de previsão após o prefixo de observação.

**Explicação:** Prever o token $k$ usa observações e os $k-1$ tokens de ação anteriores, nunca rótulos futuros. Isso é autoregressão causal, sem codificador CVAE ou decodificador de fluxo contínuo.

Os estados ocultos do backbone se tornam logits de vocabulário e probabilidades de classificação. $V=1024$ é o vocabulário de ações em experimentos específicos de conjunto de dados, não o vocabulário completo de linguagem.

#### Perda de Treinamento da Política
**Explicação:** A log-verossimilhança negativa padrão expressa o objetivo declarado de próximo token:

$\mathcal L_{\rm AR}(\theta)
=\mathbb E_{(o_t,A_t)}\left[
-\sum_{k=1}^{n}\log p_\theta(z_k\mid o_t,z_{<k})
\right],\qquad z_{1:n}=\mathcal T(A_t)$

$\mathcal L_{\rm AR}$ é a perda autoregressiva, $\theta$ são os pesos da política, e a esperança faz a média sobre as demonstrações; $n$ varia por amostra. A v1 não especifica totalmente a média sobre tokens nem o tratamento de símbolos de fim.

Teacher forcing usa o $z_{<k}$ de verdade-terreno durante o treinamento. Uma máscara causal permite perdas em todas as posições em um único forward pass, enquanto a inferência depende de prefixos gerados e prossegue sequencialmente. Alvos mais curtos reduzem a sobrecarga sem remover a dependência serial da inferência.

**Configuração do artigo:** 1.000 passos lineares de aquecimento, depois taxa de aprendizado $5\times10^{-5}$; AdamW com $\beta_1=0.9,\beta_2=0.95$, sem decaimento de peso, clipping de gradiente em 1 e coeficiente de média móvel exponencial 0,999. Todos os pesos da política são ajustados (fine-tuned).

#### Amostragem e Saídas Contínuas
A maioria das tarefas usa decodificação gananciosa (greedy). Dobragem de camisa bimanual, remoção de torrada e lavanderia usam temperatura 0,7, o que os autores consideram ajudar a escapar de comportamentos quase estacionários em torno das poses iniciais.

**Explicação:** Para logits $r_{k,v}$ e temperatura $\eta>0$:

$p_{k,v}=\frac{\exp(r_{k,v}/\eta)}{\sum_{w}\exp(r_{k,w}/\eta)}$

$v,w$ indexam candidatos e $p_{k,v}$ é a probabilidade de amostragem. Este guia usa $\eta$ para distinguir a temperatura dos $\beta_1,\beta_2$ do otimizador; o artigo escreve a temperatura como $\beta=0.7$. Ela difere da escala de quantização $\gamma=10$.

FAST decodifica tokens para $\widehat A_t\in\mathbb R^{H\times D}$ nas unidades físicas do conjunto de dados. DROID usa velocidade de junta e posição absoluta do gripper; outras tarefas usam as configurações de sua plataforma. Controladores executam ações válidas e então novas observações geram o próximo bloco.

**Ablation:** Depois de adicionar entrada multi-imagem e blocos de um segundo ao OpenVLA, substituir binning por FAST+ melhora substancialmente a dobragem de camisa. Os benefícios se estendem além do backbone π0, mas o teste não estabelece ganhos iguais para todos os VLMs.

#### Fluxo Completo em Comparação com π0
```text
Training:
Demonstration images + task language + current state + real next-second actions
→ Encode images as visual tokens
→ Tokenize language and discretized state text as the observation prefix
→ Normalize actions; DCT; quantize; frequency-first flatten; BPE
→ Map action tokens to VLM output slots
→ Compute teacher-forced next-token cross-entropy
→ Fine-tune all policy weights to obtain π0-FAST

Inference:
Current images + task language + state
→ Construct observation prefix
→ Greedily decode or sample action tokens at the specified temperature
→ Reverse BPE and restore integer coefficient ordering
→ Dequantize, inverse DCT, denormalize
→ Obtain an H × D continuous chunk
→ Execute the configured steps with the low-level controller
→ Observe and predict again

In one sentence:
The VLM selects actions from the scene and task;
DCT concentrates shared information from densely sampled trajectories;
quantization and BPE turn coefficients into shorter token sequences;
autoregressive training models their conditional distribution, and FAST decoding restores continuous control.
The main benefits are action representation and training efficiency; v1 inference latency remains a major limitation.
```

</div>
