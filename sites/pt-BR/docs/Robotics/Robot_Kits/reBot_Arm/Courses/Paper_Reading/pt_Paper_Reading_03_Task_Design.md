---
description: "Projete sua primeira tarefa de aprendizado por imitação em torno de episódios, condições de início e parada e consistência das demonstrações; em seguida, conclua amostragem de cinco pontos e demonstrações de pega-e-coloca."
title: "Planejamento de Projeto de Tarefa e Demonstração"
hide_title: true
keywords:
  - Implantação prática
  - reBot
  - LeRobot
  - ACT
  - B601-DM
  - B601-RS
  - Braço robótico
  - IA física
  - Curso
  - Tutorial
  - SO101
  - SO-ARM101
  - Hugging Face
  - Braço
  - Robótica
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/hands_on_task_design
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/pt-br/robotics/hands_on_task_design/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page hands-on-reproduction-page">

<section className="paper-reading-intro" aria-labelledby="hands-on-task_design-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · IMPLANTAÇÃO PRÁTICA</span>
  <h1 id="hands-on-task_design-title">Planejamento de Projeto de Tarefa e Demonstração</h1>
  <p className="paper-reading-lead">Defina episódios, condições de início e parada e demonstrações consistentes; em seguida, use amostragem de cinco pontos para coletar uma tarefa completa de pega-e-coloca.</p>
  <ul className="paper-reading-badges" aria-label="Neste guia">
    <li>Episódio</li>
    <li>Projeto de tarefa</li>
    <li>Amostragem de cinco pontos</li>
    <li>Coleta de demonstrações</li>
  </ul>
</section>

## O que é um episódio?

**Um episódio é uma demonstração completa de tarefa.** Ele contém todos os dados gravados continuamente desde a pose inicial do braço e o início da tarefa até a conclusão da tarefa.

---

## O que um episódio contém?

Um episódio é composto por muitos quadros ao longo de uma linha do tempo. Cada quadro, normalmente gravado a 30 Hz (30 amostras por segundo), combina três tipos de informação: o que o sistema vê ou sente, a configuração atual do braço e para onde a pessoa ou a política o comanda a ir. Estes são a observação, o estado e a ação.

---

## Projeto de tarefa: condições de início e parada

Anote a definição da tarefa antes de gravar. Uma boa definição responde a duas perguntas: **Onde ela começa e o que conta como concluído?**

**Condição de início: dê ao modelo um estado inicial bem definido**

- **Use uma pose inicial fixa do braço.** Comece cada episódio a partir da mesma pose segura, como uma pose padrão próxima da posição zero. Inícios muito variados forçam o modelo a primeiro aprender como entrar na tarefa a partir de poses arbitrárias, adicionando dificuldade desnecessária.

**Condição de parada: dê ao episódio uma linha de chegada clara**

- **Conclusão bem-sucedida**: o objetivo da tarefa é alcançado, por exemplo, “o bloco está totalmente dentro da caixa, o gripper o soltou e o braço se afastou.”

- **Término por falha**: pare a gravação imediatamente se ocorrer um evento irrecuperável, como deixar o objeto cair, derrubar o recipiente ou atingir uma pose insegura do braço.

---

## Consistência e diversidade: o trade-off central no projeto de dados

Este é o ponto-chave do capítulo. Demonstrações de alta qualidade devem satisfazer dois requisitos aparentemente conflitantes.

**Consistência: ensine uma forma de executar a tarefa**

- **Estilo de operação consistente**: use a mesma estratégia em todos os episódios, como aproximar-se do bloco pela direita, agarrá-lo e movê-lo para dentro da caixa por cima. Com dados limitados, misturar agarres pelo lado esquerdo e direito pode fazer o modelo aprender uma média dos dois caminhos que não tem sucesso em nenhum deles.

- **Tempo consistente**: mantenha a velocidade de movimento e as pausas amplamente estáveis. Se o episódio for definido para 20 segundos, termine dentro de 20 segundos. Tempo de demonstração irregular pode levar a uma execução irregular do modelo.

- **Sequência consistente**: inclua a sequência completa “aproximar → agarrar → transportar → posicionar → retirar” em cada episódio.

- **Cena inicial controlada**: coloque os alvos dentro de uma região definida. A região pode ser grande, mas seu limite deve ser claro. Remova objetos não relacionados da área de trabalho.

- **Câmeras fixas**: não mova as câmeras durante a coleta. Para o modelo, mover uma câmera 5 cm muda o mundo que ele vê.

**Diversidade: cubra situações suficientes diferentes**

- **Varie as posições-alvo**: cubra a área de trabalho de forma sistemática com uma grade em vez de espalhar objetos arbitrariamente.

- **Varie as poses iniciais dos objetos**: altere a orientação do bloco e sua relação com obstáculos.

---

## Critérios de sucesso e falha

Se uma gravação contiver um segmento com falha, **grave esse episódio novamente**. Não mantenha demonstrações com falha na esperança de que o modelo de alguma forma aprenda o comportamento pretendido: ele também pode aprender a falha.

A conclusão da tarefa deve ser **objetivamente observável**, em vez de “boa o suficiente”. Defina o sucesso em termos de um estado final claro.

---

## Quantidade e qualidade de dados

Os seguintes são pontos de referência práticos para uma tarefa de bancada em um ambiente limpo e controlado, como um sandbox de coleta. Colete mais dados se o seu ambiente for menos controlado.

| Tamanho do conjunto de dados | Resultado esperado |
|---|---|
| **50 episódios** | Suficiente para começar a executar o fluxo de trabalho e operar dentro da região demonstrada; uma escala inicial para uma tarefa de iniciante. |
| **50–100 episódios** | Muitas vezes uma faixa útil para uma taxa de sucesso prática em experimentos de tarefa única. |
| **100+ episódios** | Os retornos podem diminuir, a menos que a tarefa seja complexa ou seja necessária uma taxa de sucesso muito alta. |

Para várias tarefas, aumente o conjunto de dados de acordo com a complexidade. Você pode adicionar demonstrações após o treinamento inicial quando a avaliação revelar fraquezas.

Mantenha estes princípios acima dos números:

- **50 demonstrações de alta qualidade são melhores do que 200 descuidadas.**

- **Se uma gravação tiver um problema, grave esse episódio novamente.**

- **Uma generalização forte pode exigir centenas ou milhares de episódios.**

---

## Conjuntos de dados de tarefa única e multitarefa

- **Conjunto de dados de tarefa única**: contém uma tarefa, como colocar um bloco em uma caixa. O objetivo é focado, os requisitos de dados são menores e taxas de sucesso altas são mais fáceis de alcançar. Comece seu primeiro modelo com uma tarefa.

- **Conjunto de dados multitarefa**: contém várias tarefas, como agarrar um bloco, abrir uma gaveta e colocar o bloco dentro. Cada episódio usa `task_index` para identificar sua tarefa. Isso melhora o reúso de dados e avança em direção a políticas de uso geral, mas as tarefas compartilham a capacidade do modelo, então cada uma precisa de mais dados para aprender bem.

---

## Itere sobre a coleta de dados

Colete e valide em lotes: 50 episódios → treinar → avaliar no robô → coletar mais exemplos de casos de falha → treinar novamente. Mais dados ajudam quando o comportamento geral está correto, mas a precisão é ruim. Se o comportamento estiver fundamentalmente errado, revise o projeto da tarefa ou do conjunto de dados antes de coletar mais.

---

## Exemplo de coleta de demonstrações

**Configuração da cena:**

1. Coloque o lagostim na caixa preta. Prenda o fundo da caixa com fita dupla face para evitar que ela se mova. Mantenha as câmeras e o braço fixos no lugar e mantenha a iluminação inalterada.

![Projete sua primeira tarefa de aprendizado por imitação: exemplo de coleta de demonstrações (Figura 1)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/task-design-01-task-scene.png)

2. Colete demonstrações com o lagostim nos cinco pontos ilustrados. Visite 1 → 2 → 3 → 4 → 5 para uma rodada e complete 10 rodadas.

![Projete sua primeira tarefa de aprendizado por imitação: exemplo de coleta de demonstrações (Figura 2)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/task-design-02-five-point-sampling.png)

- Iniciantes muitas vezes têm dificuldade em saber onde colocar objetos para prática adequada. Colocação aleatória pode concentrar todos os exemplos em uma pequena região, de modo que o modelo não consiga agarrar em outros lugares, ou deixar lacunas irregulares, com algumas posições praticadas com frequência e outras nunca vistas. É como revisar apenas questões de prova familiares e ficar perdido quando a questão muda, ou mostrar a um robô apenas um tipo de lanche e depois enviá-lo a um buffet. Use o seguinte método simples e sistemático:

1. **Marque os pontos**: desenhe **cinco pontos em cruz** dentro da área de coleta ou do tapete da mesa: um no centro e um acima, abaixo, à esquerda e à direita.

2. **Defina o espaçamento**: mantenha pontos adjacentes a cerca de **5–10 cm** de distância. Todos os cinco devem estar ao alcance do braço e claramente visíveis em ambas as visões de câmera.

3. **Distribua as demonstrações**: colete **10 episódios por ponto**, totalizando 5 × 10 = **50 episódios**. Não conclua todos os 10 em um ponto antes de seguir para o próximo. Colete um em cada um dos cinco pontos por rodada e depois repita por 10 rodadas.

**Projete a sequência de pega-e-coloca:**

1. Pose inicial

![Projete sua primeira tarefa de aprendizado por imitação: exemplo de coleta de demonstrações (Figura 3)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/task-design-03-start-pose.jpg)

2. Agarre o objeto

- Mova-se diretamente acima do lagostim. Alinhe com o centro dele e mantenha a mesma altura de aproximação a cada vez.

![Projete sua primeira tarefa de aprendizado por imitação: exemplo de coleta de demonstrações (Figura 4)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/task-design-04-approach-object.jpg)

- Abra o gripper. A folga acima do lagostim evita que a abertura dos dedos o atinja e mude sua posição.

![Projete sua primeira tarefa de aprendizado por imitação: exemplo de coleta de demonstrações (Figura 5)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/task-design-05-open-gripper.jpg)

- Agarre com força e velocidade consistentes.

![Projete sua primeira tarefa de aprendizado por imitação: exemplo de coleta de demonstrações (Figura 6)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/task-design-06-grasp-object.jpg)

3. Posicione o objeto

- Mova-se diretamente acima do centro da caixa preta.

![Projete sua primeira tarefa de aprendizado por imitação: exemplo de coleta de demonstrações (Figura 7)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/task-design-07-move-to-box.jpg)

- Abra o gripper em uma taxa constante e levante o braço. O lagostim deve se acomodar dentro da caixa.

![Projete sua primeira tarefa de aprendizado por imitação: exemplo de coleta de demonstrações (Figura 8)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/task-design-08-release-object.jpg)

- Retorne o braço à sua pose inicial após o posicionamento.

![Projete Sua Primeira Tarefa de Aprendizado por Imitação: Exemplo de Coleta de Demonstração (Figura 9)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/task-design-09-return-home.jpg)

- Um episódio completo agora está registrado. Repita este procedimento para coletar 50 demonstrações.

**Perguntas sobre a configuração**

Por que manter a caixa preta, a posição da câmera, o esquema de posicionamento do objeto e a iluminação controlados?

- **Corrija um equívoco**: mudar tudo de forma arbitrária adiciona ruído em vez de diversidade útil.

- **Pense em um orçamento de generalização**: com dados limitados, o modelo aprende as variações nas quais você gasta esses dados. Variar as posições-alvo ensina apreensões em diferentes posições; variar as câmeras o força a aprender tanto a apreensão quanto mudanças de ponto de vista, o que exige muito mais dados e pode reduzir o desempenho.

- **Se você precisar de uma variação mais ampla**: amplie a cobertura deliberadamente em rodadas posteriores de coleta e avaliação, em vez de deixar a configuração descontrolada durante a gravação.

</div>
