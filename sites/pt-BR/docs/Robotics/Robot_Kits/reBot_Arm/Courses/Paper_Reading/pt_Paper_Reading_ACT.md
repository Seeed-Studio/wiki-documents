---
description: "Um mergulho profundo nos fundamentos de aprendizado por imitação do ACT, no sistema de teleoperação bimanual ALOHA, em segmentação de ações, combinação temporal e na rede CVAE."
title: "ACT — Manipulação Bimanual de Baixo Custo"
hide_title: true
keywords:
  - Análise Detalhada de Artigo
  - act
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
slug: /robotics/paper_reading_act
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/pt-br/robotics/paper_reading_act/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-act-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · ANÁLISE DETALHADA DE ARTIGO</span>
  <h1 id="paper-reading-act-title">ACT — Manipulação Bimanual de Baixo Custo</h1>
  <p className="paper-reading-lead">Aprendizado de Manipulação Bimanual em Detalhe com Hardware de Baixo Custo</p>
  <ul className="paper-reading-badges" aria-label="Neste guia">
    <li>Aprendizado por imitação</li>
    <li>ALOHA</li>
    <li>Segmentação de ações</li>
    <li>Combinação temporal</li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/abs/2304.13705" target="_blank" rel="noopener noreferrer" aria-label="Ler o artigo do ACT no arXiv">
    <span className="paper-reading-source-tag">arXiv</span>
    <span>Ler o artigo</span>
    <span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

## Pré-requisitos

### O que é aprendizado por imitação?

- **Aprendizado por imitação** começa com uma ideia simples: demonstre a tarefa e deixe o robô aprender a imitá-la.

    - Uma pessoa teleopera o braço enquanto o sistema registra observações das câmeras e as ações executadas. Essas demonstrações treinam um modelo que depois pode agir a partir de imagens sem um operador humano.

![ACT: O que é aprendizado por imitação? (Figura 07)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-07-en.png)

#### Observação: o mundo que o robô vê

- Uma observação é informação sobre o ambiente obtida por sensores: os olhos do robô. Para o reBot Arm, isso inclui:

    - A visão global de objetos e suas posições na mesa pela **câmera frontal / superior**.

    - A visão em close da **câmera de punho** sobre a relação entre a garra e seu alvo.

#### Estado: a própria configuração do robô

- Estado descreve o próprio robô, e não o entorno. É análogo à propriocepção: saber onde está sua mão ou o quanto seu cotovelo está dobrado com os olhos fechados. Para o reBot Arm, o estado inclui:

    - Ângulos atuais das seis juntas.

    - A abertura atual da garra.

#### Ação: o que é comandado ao robô

- Uma ação é o comando de saída do modelo para o braço. No reBot Arm, estado e ação têm a mesma dimensionalidade: seis juntas mais uma garra. O estado descreve a configuração atual; a ação especifica a configuração alvo:

    - Ângulos alvo para as seis juntas.

    - Abertura alvo da garra.

![ACT: Ação: o que é comandado ao robô (Figura 09)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-09-en.png)

### Ações de passo único e blocos de ações

#### Ações de passo único: uma decisão por quadro

- Para cada imagem, prever os próximos alvos das juntas, executá-los e obter outra imagem para a próxima previsão.

    - Pequenos erros de previsão mudam a posição do braço e podem afastar as observações subsequentes da distribuição de treinamento. Os erros posteriores então crescem. No robô, isso aparece como tremor, hesitação e paradas repetidas, como reconsiderar o próximo passo no meio de cada passada.

#### Blocos de ações: prever uma sequência de uma vez

- Prever uma sequência curta de futuro, como 50 alvos de juntas ao longo do próximo segundo, em vez de apenas a próxima ação.

    - **Menores requisitos de taxa de inferência.** Uma previsão cobre um intervalo curto, permitindo movimento mais suave mesmo quando a inferência é relativamente lenta, o que importa na implantação em hardware modesto.

    - **Mais estrutura temporal.** Prever várias ações futuras incentiva o modelo a representar a sequência pretendida, tornando menos provável que distrações momentâneas o desviem.

    - **Movimento mais suave e coerente.**

![ACT: Blocos de ações: prever uma sequência de uma vez (Figura 05)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-05-en.png)

Blocos mais longos nem sempre são melhores. Se um objeto se mover durante a execução, previsões distantes podem ficar desatualizadas. Sistemas práticos equilibram isso executando parte de um bloco em malha aberta, depois observando e prevendo novamente.

### Treinamento, inferência e avaliação

![ACT: Treinamento, inferência e avaliação (Figura 04)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-04-en.png)

#### Treinamento: aprendizado offline

O treinamento é um processo **offline** após a coleta. O braço pode ficar desligado enquanto a GPU faz o trabalho.

- Entrada: sequências gravadas de imagens, estados e ações.

- Processo: ajustar repetidamente os parâmetros do modelo para aproximar as ações previstas das demonstrações humanas.

- Saída: pesos do modelo treinado.

A **loss** acompanha o ajuste do treinamento: loss decrescente significa que as previsões estão se tornando mais semelhantes às demonstrações.

#### Inferência: decisões online

- Inferência é **implantar o modelo no robô real para trabalhar em tempo real**: ler imagens das câmeras e estados das juntas → prever um bloco de ações → enviá-lo para os motores. As previsões devem chegar em dezenas de milissegundos, ou o braço vai engasgar.

#### Avaliação: medir o sucesso da tarefa

Um modelo treinado com baixa loss ainda pode falhar na tarefa. **Loss baixa mede a precisão da imitação, não a conclusão da tarefa.** Avalie no robô real:

- Defina critérios claros de sucesso, como o bloco terminar dentro da caixa.

- Varie as condições iniciais, incluindo posição do objeto e iluminação, ao longo de N tentativas.

- Meça a taxa de sucesso: 14 sucessos em 20 tentativas resultam em 70%.

Falhas se tornam entrada para a próxima rodada de coleta. Adicione demonstrações para as situações que falham e então treine novamente. Isso fecha o ciclo dados–treinamento–avaliação usado em aprendizado de robôs na prática.

---

## Contexto do artigo

Autores: Tony Z. Zhao¹, Vikash Kumar³, Sergey Levine², Chelsea Finn¹. Afiliações: ¹ Universidade de Stanford; ² UC Berkeley; ³ Meta.

Contexto do artigo: publicado em 2023 por uma equipe conjunta de Stanford e Berkeley, este algoritmo leve de aprendizado por imitação combina redes convolucionais e Transformers. A plataforma experimental é o sistema de teleoperação bimanual ALOHA de seis DoF, com câmeras monoculares nos dois garras e uma câmera monocular global superior.

![ACT: Aprendizado de manipulação bimanual detalhada com hardware de baixo custo (Figura 12)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-12.png)

---

## Resumo

![ACT: Resumo (Figura 03)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-03.png)

- Explicação:

Manipulação fina, como passar um lacre de cabo ou inserir uma bateria, é difícil para robôs. Ela exige precisão, forças de contato coordenadas e realimentação visual em malha fechada. Soluções convencionais muitas vezes dependem de robôs caros, sensores precisos ou calibração cuidadosa. O aprendizado pode permitir que hardware barato e menos preciso execute essas tarefas?

O artigo apresenta um sistema de baixo custo que coleta demonstrações reais por meio de uma interface de teleoperação personalizada para aprendizado por imitação direto de ponta a ponta. Os desafios incluem erros de política que se acumulam e demonstrações humanas não estacionárias, especialmente em tarefas de alta precisão. O algoritmo proposto, Action Chunking with Transformers (ACT), aprende um modelo generativo de sequências de ações. Com apenas 10 minutos de demonstrações, o robô consegue executar seis tarefas desafiadoras do mundo real, como abrir copos translúcidos de condimentos e inserir baterias, com taxas de sucesso chegando a 80–90%.

- Comentário:

O aprendizado por imitação convencional costuma repetir “observar → prever uma ação → executar → observar novamente”. Em tarefas de precisão, mesmo um pequeno erro pode levar o robô a um estado ausente das demonstrações, fazendo com que previsões posteriores se desviem ainda mais. Isso é **erro acumulado**.

A ideia central do ACT é a **segmentação de ações**: gerar uma sequência contínua de futuro em vez de uma ação por vez. Isso dá suporte à continuidade temporal e reduz o horizonte efetivo de decisão ao longo do qual os erros se acumulam.

Transformers são bem adequados para relações em sequência: eles podem aprender como as ações se relacionam ao longo do tempo, em vez de considerar apenas o que o robô deve fazer no instante atual.

**ACT permite que o robô preveja uma sequência curta de ações de uma vez.**

---

## Introdução

- **Parágrafo 1: o problema.** Tarefas delicadas que envolvem pinçar, alavancar ou rasgar, como abrir um copo ou inserir uma bateria, exigem realimentação visual precisa e coordenação mão–olho para que as ações possam ser ajustadas conforme o ambiente muda.

- **Parágrafo 2: limitações anteriores e a abordagem proposta.** Trabalhos como [Grasping with Chopsticks](https://arxiv.org/abs/2011.06719) e [Goal-conditioned dual-action imitation learning](https://arxiv.org/abs/2203.09749) dependem de hardware caro ou calibração cuidadosa. Os autores, em vez disso, buscam um sistema **acessível, disponível e reprodutível**: imagens RGB comuns → rede neural → ações do robô.

- **Parágrafo 3: a plataforma.** O hardware experimental custa menos de US\$20.000.

- **Parágrafo 4: ACT aborda erros acumulados em aprendizado por imitação.**

Mesmo com boas demonstrações, previsões de ações podem conter pequenos erros. Em tarefas de precisão, um erro pode levar o robô a um estado diferente daqueles do treinamento, tornando previsões subsequentes progressivamente menos confiáveis.

Os autores se inspiram em **segmentação de ações** na psicologia: as pessoas organizam movimentos contínuos em unidades coerentes em vez de tratar cada instante como uma ação independente.

Aprendizado por imitação convencional: **observação atual → próxima ação**.

ACT: **observação atual → ações para os próximos k passos de tempo**.

Prever uma sequência curta efetivamente encurta o horizonte de decisão em **um fator k**, reduzindo o efeito de erros que se acumulam ao longo de decisões individuais.

A segmentação também ajuda a explicar irregularidades em demonstrações humanas, como pausas. Um modelo de sequência pode interpretar uma pausa no contexto dos movimentos antes e depois dela, em vez de tratar uma observação instantânea como suficiente para explicá-la.

Para uma execução mais suave, a **combinação temporal** reúne blocos sobrepostos previstos em momentos diferentes. Em vez de escolher apenas uma previsão para o instante atual, o ACT as combina com pesos, reduzindo o tremor.

A arquitetura usa um **Transformer** para sequências de ações e um **VAE condicional (CVAE)** para a variabilidade das demonstrações. Uma tarefa pode ter várias trajetórias, velocidades ou ordens de ações válidas; o CVAE modela essa distribuição em vez de assumir uma sequência exclusivamente correta.

**Fragmentação de ações com Transformers: ACT.**

![ACT: Introdução (Figura 02)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-02-en.png)

- **Parágrafo 5: as duas contribuições são uma plataforma de teleoperação de baixo custo e o algoritmo ACT.**

O artigo aborda dois problemas conectados de aprendizado de robôs:

**1. De onde vêm as demonstrações?**

Um sistema de teleoperação de baixo custo permite que pessoas realizem manipulações finas diretamente e coletem demonstrações de alta qualidade de forma eficiente.

**2. Como o robô aprende a partir delas?**

O ACT combina fragmentos de ações, Transformers, um CVAE e ensemble temporal para aprender manipulação fina com feedback visual. A contribuição é a **combinação de hardware e aprendizado**: **teleoperação humana → demonstrações → treinamento do ACT → execução autônoma pelo robô**.

Com cerca de **dez minutos, ou aproximadamente 50 trajetórias humanas**, o sistema aprende seis tarefas reais de manipulação fina, incluindo abrir potes de condimentos e inserir baterias. Algumas tarefas alcançam **80–90%** de sucesso.

---

## Trabalhos Relacionados

Esta seção revisa abordagens anteriores de clonagem comportamental e suas limitações. Leia para obter contexto; é opcional para os objetivos práticos de aprendizado deste guia.

---

## ALOHA: Um Sistema de Teleoperação Bimanual de Baixo Custo

### Objetivos de Projeto e Hardware

![ACT: Objetivos de Projeto e Hardware (Figura 14)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-14.png)

Os autores definem cinco princípios de projeto para dar suporte à manipulação fina enquanto reduzem a barreira de reprodução em laboratórios comuns.

ALOHA usa dois braços **ViperX 6-DoF** como **robôs seguidores**, em vez de braços industriais caros. Cada ViperX custa cerca de US$5.600 e tem precisão de posicionamento de aproximadamente **5–8 mm**.

### Teleoperação Líder–Seguidor

Uma escolha central de projeto é a teleoperação **líder–seguidor**. O operador move o líder com a mão, enquanto o seguidor ViperX acompanha o movimento de suas juntas.

**Mover o líder → Ler seus ângulos de junta → Mover o seguidor de forma síncrona → Executar a tarefa.**

Isso é um **mapeamento no espaço de juntas**, com várias vantagens:

- Nenhum cálculo frequente de cinemática inversa.

- Comportamento mais estável próximo a singularidades cinemáticas.

- Menor latência de controle.

- Um mapeamento direto do movimento do operador para o robô.

### Câmeras, Coleta de Dados e Capacidades

ALOHA registra as demonstrações usando **quatro câmeras RGB comuns**:

![ACT: Câmeras, Coleta de Dados e Capacidades (Figura 01)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-01.png)

Os autores agrupam amplamente as tarefas em três categorias:

---

## Fragmentação de Ações e Ensemble Temporal

![ACT: Transformer-Based Fragmentação de Ações e Ensemble Temporal (Figura 15)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-15.png)

### Fragmentação de Ações: Prever uma Sequência Curta

O aprendizado por imitação convencional prevê uma próxima ação a partir do estado atual: avançar um pouco, depois descer um pouco. Um pequeno erro pode mudar a próxima observação e se acumular até a falha da tarefa. A **fragmentação de ações** é a resposta central do ACT para esse problema.

**Prever uma sequência contínua de futuro em vez de uma única ação.** Com `chunk_size = 4`, uma política de passo único toma decisões em `t=0→a0, t=1→a1, t=2→a2, t=3→a3`; o ACT prevê `[a0,a1,a2,a3]` em `t=0`. Essa sequência é um **fragmento de ação**. A política muda de `πθ(at|st)` para `πθ(at:t+k|st)`, onde `k` é o comprimento do fragmento.

![ACT: Segmentação de ações: pensar em uma sequência curta em vez de um passo de cada vez (Figura 00)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-00-en.png)

A intuição é considerar uma sequência curta em vez de improvisar a cada instante. Ao inserir uma bateria, as pessoas naturalmente organizam “aproximar → alinhar → inserir” como um movimento coerente, em vez de uma longa lista de correções de um milímetro. A fragmentação ensina essa estrutura ao robô.

Ela também reduz o **horizonte efetivo por um fator k**. Uma tarefa de 100 passos de tempo exige 100 decisões de passo único; com `chunk_size=10`, ela pode ser considerada como menos segmentos contínuos. Olhar vários passos à frente torna um pequeno erro isolado menos propenso a descarrilar imediatamente o restante da sequência.

Demonstrações humanas também incluem pausas, hesitação e mudanças de velocidade. Aprender “aproximar → pausar → ajustar → inserir” como uma sequência torna essas relações mais fáceis de representar do que aprender instantes isolados.

https://github\.com/huggingface/lerobot/blob/main/src/lerobot/policies/act/modeling\_act\.py

### Ensemble Temporal

O ACT prevê uma sequência curta de futuro, mas **o que acontece se o ambiente mudar enquanto ela está sendo executada?**

Com ensemble temporal, o ACT observa e prevê um novo fragmento **a cada passo de tempo**, em vez de executar cegamente um fragmento inteiro. Para `chunk_size = 4`, as previsões podem ser assim:

`t=0 → [a0, a1, a2, a3]`
`t=1 → [a1', a2', a3', a4']`
`t=2 → [a2'', a3'', a4'', a5'']`

O mesmo instante futuro, portanto, recebe múltiplas previsões. Em `t=2`, por exemplo:

`a2`, prevista em `t=0`.
`a2'`, prevista em `t=1`.
`a2''`, prevista em `t=2`.

Em vez de selecionar apenas uma, o ACT faz uma **combinação ponderada das previsões para o mesmo passo de tempo** para obter a ação executada. Isso é o **ensemble temporal**.

> O modelo revisita a mesma ação futura em momentos diferentes usando observações diferentes e depois combina essas estimativas.
> 
> 

![ACT: Ensemble Temporal (Figura 08)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-08-en.png)

Seguir apenas a previsão mais recente pode causar saltos bruscos. A média ponderada suaviza a execução. Ela aborda principalmente dois problemas:

O artigo usa pesos exponenciais:

$w_i = \exp(-m i)$

**A fragmentação de ações olha vários passos à frente. O ensemble temporal observa e prevê repetidamente e depois combina suavemente estimativas sobrepostas.**

### Modelando Demonstrações Humanas com um CVAE

A fragmentação de ações prevê uma sequência e o ensemble temporal suaviza a execução, mas outro problema permanece: **as demonstrações humanas não são idênticas**.

Ao inserir uma bateria, diferentes operadores podem:

- Aproximar por ângulos diferentes.

- Mover em velocidades diferentes.

- Ajustar para a esquerda antes de inserir.

- Alinhar diretamente e inserir.

Mesmo **a mesma pessoa** produz trajetórias diferentes em tentativas repetidas. Uma dada observação, portanto, não tem apenas uma sequência de ações correta. Assumir que

> “Esta imagem deve produzir exatamente uma trajetória de ação”
> 
> 

pode incentivar a média entre estratégias distintas. Considere duas demonstrações:

```text
Demonstration A: go around the left → insert
Demonstration B: go around the right → insert
```

Uma média simples poderia se tornar:

```text
Go straight through the middle
```

Mas pode haver um obstáculo no meio.

O objetivo é aprender:

> **Quais sequências de ações razoáveis uma pessoa poderia usar no estado atual.**
> 
> 

Isso motiva o **autoencoder variacional condicional (CVAE)**.

### Como o CVAE Funciona no ACT

![ACT: Como o CVAE Funciona no ACT (Figura 11)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-11-en.png)

O CVAE tem dois componentes principais:

O codificador usa:

- O estado atual do robô.

- A sequência de ações demonstrada.

Ele infere um “estilo de movimento” latente. Em vez de produzir um único $z$ fixo, ele prevê parâmetros de distribuição Gaussiana $\mu,\sigma$:

- Uma média.

- Variância.

A amostragem de $z$ a partir dessa distribuição permite que o modelo represente incerteza sobre o estilo da demonstração em vez de atribuir um valor rígido. Essa é uma ideia central de VAEs.

Em princípio, o codificador CVAE em tempo de treinamento poderia receber:

```text
Image + Robot State + Action Sequence
```

Para um treinamento mais rápido, os autores omitem imagens do codificador do CVAE.

Suas entradas reais são:

```text
Robot State + Action Sequence
        ↓
   CVAE Encoder
```

As imagens ainda entram na política ACT que prevê ações. Assim:

> **O codificador CVAE extrai o estilo da demonstração; a política de predição de ações ainda usa imagens de câmera para decidir o que o robô deve fazer.**
> 
> 

---

### A Rede Completa do ACT

![ACT: A Rede Completa do ACT (Figura 13)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-13.png)

![ACT: A Rede Completa do ACT (Figura 06)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-06-en.png)

As posições das juntas e o fragmento de ação demonstrado entram primeiro no codificador CVAE para representar diferenças no estilo da demonstração, produzindo parâmetros Gaussianos $\mu,\sigma$ e uma variável de estilo latente $z$. Esse codificador processa estados de juntas e sequências de ações em vez de imagens de câmera.

Alimentar imagens RGB brutas de $480x640$ em um Transformer seria caro. O **ResNet18** primeiro converte cada imagem de câmera em um mapa de características $15x20x512$, achatado em uma sequência de características $300x512$. As quatro câmeras do ALOHA, portanto, geram $1200x512$ tokens visuais.

O modelo projeta separadamente a **posição de junta de 14 dimensões** e o estilo latente $z$ em 512 dimensões e os concatena com as características visuais. O codificador Transformer recebe:

1200\+1\+1=1202

Isso fornece uma sequência $1202x512$. O codificador funde três tipos de informação: **o que o robô vê, sua configuração atual e o estilo de movimento da demonstração**.

Um **decodificador Transformer** então usa $k$ consultas posicionais, uma para cada passo de tempo futuro. A atenção cruzada recupera informações do ambiente a partir da saída do codificador e prediz todas as $k$ ações juntas. Os dois braços do ALOHA têm 14 dimensões controladas de juntas/garras no total, resultando em:

$k\times14$

Para `chunk_size = 100`, uma inferência prediz **100 passos de tempo × 14 posições de juntas**: o bloco de ações completo.

O treinamento compara blocos previstos com demonstrações humanas usando uma **perda de reconstrução L1**, mais uma perda KL do CVAE que regulariza a distribuição latente.

Na implantação não há bloco de ações futuras demonstradas, então **o codificador do CVAE é removido e $z=0$**. Imagens e posições atuais das juntas geram novos blocos; o agrupamento temporal combina previsões sobrepostas, e a ação atual é enviada para o robô.

O fluxo completo é:

**Treinamento: demonstração → CVAE aprende $z$ → imagens + juntas + $z$ → Transformer → bloco de ações**

**Inferência: imagens + juntas + $z=0$ → Transformer → bloco de ações → agrupamento temporal → robô**

Lembre-se dos papéis separadamente:

> **A segmentação de ações determina quantas ações futuras são previstas juntas; o agrupamento temporal suaviza a execução; o CVAE modela o fato de que várias demonstrações podem ser válidas para a mesma tarefa.**
> 
> 

O pipeline do ACT agora se encaixa:

![ACT: A Rede Completa do ACT (Figura 10)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-10-en.png)

</div>
