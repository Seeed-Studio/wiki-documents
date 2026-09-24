---
description: "Capítulo 12 do Curso para Iniciantes em Inteligência Incorporada da Seeed — conjuntos de dados de robôs e design de tarefas: o que é um Episódio, o que há em um registro de dados, carimbos de tempo e sincronização, condições de início/fim, consistência vs diversidade, quantidade vs qualidade de dados e um exemplo prático de criação de dados."
title: Capítulo 12 - Conjuntos de Dados de Robôs e Design de Tarefas
keywords:
  - reBot
  - LeRobot
  - Dataset
  - Episode
  - Data Collection
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_12
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: LiuJunjie
createdAt: '2026-09-19'
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/pt-br/rebot_embodied_ai_course_chapter_12/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 3 · Capítulo 12 · Teoria</span>
    <h2>12. Conjuntos de Dados de Robôs e Design de Tarefas</h2>
    <p>
      Capítulo 12 do Curso para Iniciantes em Inteligência Incorporada da Seeed — o que é um Episódio, o que
      há em um registro de dados, carimbos de tempo e sincronização, condições de início/fim, consistência vs
      diversidade, quantidade vs qualidade de dados e um exemplo prático de criação de dados.
    </p>
    <div className="hero-actions">
      <a href="#episode">Episódio</a>
      <a href="#consistency-diversity">Design de dados</a>
      <a href="#example">Exemplo</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Neste capítulo</strong>
    <span>12.1 O que é um Episódio?</span>
    <span>12.2 O que exatamente há em um registro de dados?</span>
    <span>12.3 Carimbos de tempo e sincronização de dados</span>
    <span>12.4 Design de tarefas: condições de início e fim</span>
    <span>12.5 Consistência vs. diversidade da tarefa</span>
    <span>12.6 Critérios de sucesso e falha</span>
    <span>12.7 Quantidade de dados vs. qualidade de dados</span>
    <span>12.8 Conjuntos de dados de tarefa única vs. multitarefa</span>
    <span>12.9 Iteração de coleta de dados</span>
    <span>12.10 Exemplo de criação de dados</span>
  </div>
</section>

<RebotCourseNav />

## 12.1 O que é um Episódio?

<section id="episode" className="section-card">
  <div className="section-title">
    <span>Episódio</span>
    <h2>12.1 O que é um Episódio?</h2>
  </div>

A partir deste capítulo, cada operação que você faz significa que você mudou de papel — **você não é mais o "motorista", você é o "professor".** Cada ação que você realiza será registrada e se tornará o livro didático do modelo. A unidade básica desse livro didático é o Episódio.

**Um Episódio é uma demonstração completa de tarefa.** Desde quando o braço está em sua pose inicial e a tarefa começa, até a conclusão da tarefa, todos os dados continuamente registrados pelo sistema constituem um Episódio.

</section>

## 12.2 O que exatamente há em um registro de dados?

<section id="data-record" className="section-card">
  <div className="section-title">
    <span>Dados</span>
    <h2>12.2 O que exatamente há em um registro de dados?</h2>
  </div>

Lembre-se do Capítulo 9 — isso deve parecer familiar. Sim, é o que aprendemos antes: **Observação, Estado, Ação**.

Observe a origem da Ação: ela registra a ação alvo dada (via o Leader), não a posição que o Follower realmente alcançou depois. Isso corresponde exatamente à definição de clonagem comportamental — o modelo aprende "diante desta observação e estado, o que o humano pretendia fazer naquele momento".

</section>

## 12.3 Carimbos de tempo e sincronização de dados

<section id="timestamps" className="section-card">
  <div className="section-title">
    <span>Sincronização</span>
    <h2>12.3 Carimbos de tempo e sincronização de dados</h2>
  </div>

Imagens passam por USB, dados das juntas passam por CAN — os dois fluxos de dados naturalmente chegam ao computador em momentos diferentes. LeRobot adiciona carimbos de tempo a cada quadro de dados, alinhando assim imagens, estados e ações do "mesmo momento" em uma única linha.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-01.png" alt="Timestamps and synchronization" />
</div>

</section>

## 12.4 Design de tarefas: condições de início e fim

<section id="task-design" className="section-card">
  <div className="section-title">
    <span>Design de tarefas</span>
    <h2>12.4 Design de tarefas: condições de início e fim</h2>
  </div>

Antes de coletar dados, escreva claramente a definição da tarefa em texto. Uma boa definição de tarefa responde a duas perguntas: **Onde começa? Quando termina?**

### Condição de início: dê ao modelo um "ponto de partida fixo"

- **Pose inicial fixa do braço:** todo Episódio começa na mesma pose segura (por exemplo, uma pose padrão próxima de zero). Se as poses iniciais variarem muito, o primeiro passo do modelo será aprender "como entrar na tarefa a partir de qualquer pose", adicionando dificuldade desnecessária.

### Condição de fim: desenhe uma "linha de chegada" clara para o Episódio

- **Fim bem-sucedido:** objetivo da tarefa alcançado (por exemplo, "bloco totalmente dentro da caixa, garra solta, braço levantado para longe").
- **Término por falha:** ocorre uma situação irrecuperável (objeto derrubado, recipiente tombado, braço entra em uma pose perigosa) — pare de gravar este Episódio imediatamente.

</section>

## 12.5 Consistência vs. diversidade da tarefa

<section id="consistency-diversity" className="section-card">
  <div className="section-title">
    <span>Design de dados</span>
    <h2>12.5 Consistência vs. diversidade da tarefa: a tensão central no design de dados</h2>
  </div>

Esta é a seção mais crítica do capítulo. Dados de demonstração de alta qualidade devem satisfazer simultaneamente dois requisitos aparentemente contraditórios.

### Consistência: ensinar uma única "maneira de fazer"

- **Estilo de operação consistente:** para a mesma tarefa, todos os Episódios devem usar a mesma estratégia (por exemplo, sempre aproximar o bloco pela direita, agarrá-lo e abaixá-lo na caixa por cima). Se metade dos dados agarrar pela esquerda e metade pela direita, o modelo aprende a "média" de duas abordagens — muitas vezes um caminho estranho que não agarra nada.
- **Ritmo consistente:** velocidade de movimento e posições de pausa devem ser aproximadamente estáveis — se você definir 20 segundos, conclua em 20 segundos. Dados que variam em velocidade tornam as ações do modelo inconsistentes em velocidade.
- **Fluxo de trabalho consistente:** cada execução deve passar por todo o fluxo de trabalho "aproximar → agarrar → transportar → posicionar → recuar" sem pular etapas.
- **Estado inicial da cena controlado:** os objetos devem ser colocados dentro de uma área designada (a área pode ser grande, mas os limites devem ser claros); remova itens não relacionados da área de trabalho.
- **Posição fixa da câmera:** as câmeras não devem se mover durante a coleta — para o modelo, mover a câmera 5 cm significa que o mundo mudou.

### Diversidade: ver variações suficientes

- **Posições-alvo diversas:** blocos aparecem em várias posições na área de trabalho (cobertura em grade, não dispersão aleatória).
- **Poses iniciais diversas:** orientação do bloco e posição relativa a obstáculos devem variar.

</section>

## 12.6 Critérios de sucesso e falha

<section id="success-criteria" className="section-card">
  <div className="section-title">
    <span>Critérios</span>
    <h2>12.6 Critérios de sucesso e falha</h2>
  </div>

  | **Padrão não qualificado (ambíguo)**              | **Padrão qualificado (mensurável)**                                                                                  |
| :------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------- |
| "Desde que o objeto seja mais ou menos agarrado."       | "A garra está totalmente fechada e agarra o centro do bloco."                                                    |
| "Desde que o bloco seja colocado dentro da caixa."  | "O bloco é colocado próximo ao centro da caixa em vez de aleatoriamente perto da borda."                                 |
| "Basta pegar o bloco e colocá-lo na caixa." | "Todo o movimento deve ser suave, e a duração de cada episódio gravado deve permanecer razoavelmente consistente." |


Para segmentos com falha durante a gravação, o princípio é simples: **regrave este Episódio.** Não guarde dados com falha esperando que "talvez o modelo aprenda com isso" — o modelo de fato aprenderá, inclusive com as falhas.

"Tarefa concluída" deve ser um estado **objetivamente determinável**, não "parece bom o suficiente". Bons critérios de sucesso se parecem com isto:

</section>

## 12.7 Quantidade de dados vs. qualidade de dados

<section id="data-quantity" className="section-card">
  <div className="section-title">
    <span>Volume de dados</span>
    <h2>12.7 Quantidade de dados vs. qualidade de dados</h2>
  </div>

Referência empírica (para uma única tarefa de mesa em um ambiente limpo, como uma caixa de coleta de dados; se não houver caixa de coleta de dados, aumente o tamanho do conjunto de dados):

| Quantidade de dados | Efeito esperado |
| :--- | :--- |
| **50 Episódios** | Pipeline funciona; o modelo começa a funcionar na área coberta pelos dados (nível inicial para tarefas introdutórias) |
| **50–100 Episódios** | Taxa de sucesso atinge uma faixa utilizável; o ponto ideal para a maioria dos experimentos de tarefa única |
| **100+ Episódios** | Retornos decrescentes, a menos que a tarefa seja complexa ou os requisitos de taxa de sucesso sejam muito altos |

Para multitarefa, aumente os dados proporcionalmente à complexidade. Claro, os dados podem ser complementados após o treinamento — quando você perceber que o desempenho do modelo não está bom, pode adicionar mais dados.

Mas coloque esta frase antes dos números:

- **50 Episódios de alta qualidade são melhores do que 200 mal feitos.**
- **Se houver um problema na coleta de dados, não hesite — regrave este Episódio imediatamente.**
- **Se você quiser forte capacidade de generalização, precisará de centenas ou milhares de Episódios.**

</section>

## 12.8 Conjuntos de dados de tarefa única vs. multitarefa

<section id="single-multi-task" className="section-card">
  <div className="section-title">
    <span>Conjuntos de dados</span>
    <h2>12.8 Conjuntos de dados de tarefa única vs. multitarefa</h2>
  </div>

- **Conjunto de dados de tarefa única:** um conjunto de dados contém apenas uma tarefa (por exemplo, "bloco na caixa"). O modelo tem um único objetivo, os requisitos de dados são pequenos e a taxa de sucesso é mais fácil de alcançar. Seu primeiro modelo deve começar com uma única tarefa.
- **Conjunto de dados multitarefa:** um conjunto de dados contém várias tarefas (agarrar bloco, abrir gaveta, colocar bloco na gaveta); cada Episódio é rotulado com `task_index` para indicar a qual tarefa pertence. O aproveitamento de dados é alto e é a direção em rumo a políticas gerais, mas as tarefas competem pela capacidade do modelo, exigindo mais dados por tarefa para aprender bem.

</section>

## 12.9 Iteração de coleta de dados

<section id="iteration" className="section-card">
  <div className="section-title">
    <span>Iteração</span>
    <h2>12.9 Iteração de coleta de dados</h2>
  </div>

Colete em lotes com validação iterativa: colete 50 → treine → avalie no robô real → colete mais para cenários de falha → re-treine. Se a direção geral do modelo estiver correta, mas a precisão for ruim, adicionar dados ajuda; se o comportamento do modelo estiver completamente errado, há um problema com o design da tarefa ou dos dados, e nenhuma quantidade adicional de dados irá ajudar.

</section>

## 12.10 Exemplo de Criação de Dados

<section id="example" className="section-card">
  <div className="section-title">
    <span>Exemplo</span>
    <h2>12.10 Exemplo de Criação de Dados</h2>
  </div>

### Design da Cena

1. Coloque tubos de ensaio em um suporte para tubos de ensaio. Observação: fixe a base do suporte com fita dupla face para evitar que se mova; mantenha as câmeras e o braço em posições fixas e não altere a iluminação.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-02.png" alt="Scene design" />
</div>

2. Coloque os tubos de ensaio de acordo com os pontos mostrados na figura; 1→2→3→4→5 é uma rodada. Colete por 10 rodadas.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-03.png" alt="Test tube placement points" />
</div>

O problema mais doloroso para iniciantes ao registrar dados é "como posicionar os objetos para praticar de forma completa" — uma disposição aleatória pode concentrar tudo em uma pequena área (o modelo só reconhece aquele ponto e falha em outras posições) ou espalhar de forma irregular (algumas áreas são praticadas demais, outras nunca são tocadas). É como revisar resolvendo apenas questões que você já sabe, e depois ir mal na prova quando o formato muda; ou como mostrar a um robô apenas um tipo de lanche, de modo que ele não faça ideia por onde começar em um buffet. Aqui vai um método simples e padronizado:

1. **Marcar pontos:** use um lápis para marcar **5 pontos** na área de coleta de dados (caixa de coleta / tapete de mesa), dispostos em **forma de cruz** — 1 no centro, um em cima, embaixo, à esquerda e à direita.
2. **Definir espaçamento:** pontos adjacentes devem estar separados por **5–10 cm**, garantindo que todos os cinco pontos estejam dentro da área de trabalho do braço e claramente visíveis em ambos os fluxos de câmera.
3. **Distribuir:** colete **10 Episódios em cada ponto**; 5 pontos × 10 = **50 Episódios**, o que atende à meta. Observe também: não colete 10 Episódios no ponto 1, depois 10 no ponto 2, etc.; em vez disso, colete 1 Episódio em cada ponto (5 pontos = 1 rodada) e faça 10 rodadas dessa forma.

### Design de Pegada e Colocação

1. Posição inicial

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-04.jpg" alt="Initial position" />
</div>

2. Agarrar o objeto

- Mova o braço diretamente acima do tubo de ensaio (sempre mova para o centro do tubo na mesma altura acima dele).

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-05.jpg" alt="Move above the test tube" />
</div>

- Abra a garra (por que começar a uma distância fixa? Para evitar bater no tubo ao abrir a garra e deslocar sua posição).

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-06.jpg" alt="Open the gripper" />
</div>

- Agarre sempre com a mesma força e velocidade.

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-07.jpg" alt="Grasp the object" />
</div>

3. Colocar o objeto

- Mova diretamente acima do centro do suporte de tubos de ensaio.

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-08.jpg" alt="Move above the rack" />
</div>

- Abra a garra em velocidade constante e levante o braço; você deve ver o tubo se acomodar suavemente no suporte.

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-09.jpg" alt="Place the object" />
</div>

- Após colocar o tubo, retorne o braço para sua posição inicial.

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-10.jpg" alt="Return to home" />
</div>

É isso — um Episódio perfeito está concluído. Agora é só repetir isso 50 vezes.

### Questões de Design

Por que não posso mover o suporte de tubos de ensaio, as câmeras, as posições dos tubos ou mudar a iluminação?

- **Desfazendo o equívoco:** "Mover tudo livremente" gera ruído, não diversidade.
- **Teoria do orçamento de generalização:** com dados limitados, variações gastas em uma dimensão ensinam o modelo sobre essa dimensão — gastar em posição do alvo o ensina a agarrar tubos em diferentes posições; gastar em variações de posição da câmera faz o modelo aprender tanto a pegada quanto as diferenças de ponto de vista, exigindo muito mais dados e produzindo resultados ruins.
- **E se eu realmente precisar de variações:** não se trata de "não fixar" durante a gravação, mas sim dos dados suplementares na iteração posterior — expandir conscientemente os limites para alcançar a generalização que buscamos.

</section>

</div>
