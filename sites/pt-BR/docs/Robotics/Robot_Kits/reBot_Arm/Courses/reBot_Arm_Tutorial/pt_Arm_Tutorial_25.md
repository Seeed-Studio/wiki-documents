---
description: "Capítulo 25 do Curso para Iniciantes em IA Física da Seeed — caminho versus trajetória, interpolação em espaço de juntas e em espaço cartesiano, polinômios lineares, cúbicos e quínticos, e o comando de torque construído a partir de feedforward (modelo e gravidade) mais correção de erro por feedback."
title: Capítulo 25 - Planejamento de Trajetória e Controle de Braço Robótico
hide_title: true
keywords:
  - reBot
  - Robotic Arm
  - Trajectory Planning
  - Interpolation
  - Quintic
  - Feedforward
  - Gravity Compensation
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_25
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-25
  author: Seeed Studio Robotics Team
createdAt: '2026-09-25'
updatedAt: '2026-09-25'
url: https://wiki.seeedstudio.com/pt-br/rebot_physical_ai_course_chapter_25/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 5 · Capítulo 25 · Teoria</span>
    <h2>25. Planejamento de Trajetória e Controle de Braço Robótico</h2>
    <p>
      Capítulo 25 do Curso para Iniciantes em IA Física da Seeed — caminho versus trajetória, interpolação em espaço de juntas e em espaço cartesiano, polinômios lineares, cúbicos e quínticos, e o comando de torque construído a partir de feedforward (modelo e gravidade) mais correção de erro por feedback.
    </p>
    <div className="hero-actions">
      <a href="#caminho-trajetória">Caminho vs trajetória</a>
      <a href="#interpolação">Interpolação</a>
      <a href="#controle">Feedforward e feedback</a>
    </div>
  </div>
</section>

## 25.1 Objetivos de Aprendizagem

Ajudar o usuário a entender como o braço gera um movimento contínuo, suave e seguro a partir de uma pose alvo.

Depois deste capítulo você deverá ser capaz de:

1. Separar um movimento em **caminho** (forma) e **trajetória** (temporalização), e dizer qual deles uma tarefa restringe.
2. Escolher entre interpolação em espaço de juntas e em espaço cartesiano.
3. Explicar a diferença entre interpolação linear, cúbica e quíntica, e por que o comportamento de partida/parada importa.
4. Explicar feedforward, feedback e compensação de gravidade, e como o comando de torque é composto.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-25/ch25-01.png" alt="Caminho versus trajetória (1/2)" />
</div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-25/ch25-02.png" alt="Caminho e trajetória em um braço robótico (2/2)" />
</div>

<a id="caminho-trajetória"></a>

## 25.2 Caminho vs. Trajetória

Imagine caminhar de casa até o escritório.

**Caminho** = a **rota** que você faz (forma)

> Vire à esquerda ao sair pela porta, pegue a rua principal, atravesse a ponte, vire à direita, chegue ao escritório
> 
> 

Não importa quão rápido ou devagar você anda, **essa rota permanece a mesma**.

**Trajetória** = o **ritmo** em que você anda (tempo + velocidade)

> Saia pela porta em 10 segundos, faça uma pausa na ponte por 1 minuto, espere no sinal vermelho embaixo por 30 segundos
> 
> 

Mesma estrada, **andar rápido ou devagar é diferente**.

**Diferença central**

|Dimensão|Caminho|Trajetória|
|:---|:---|:---|
|Descrição|Onde|Onde + quando|
|Domínio|Espaço|Espaço + tempo|
|Foco|Forma|Tempo, velocidade, aceleração|
|Exemplo|"Vá em linha reta de A até B"|"Vá de A até B a velocidade constante em 5 segundos"|

**Mapeamento no braço robótico**

|Tarefa|Caminho|Trajetória|
|:---|:---|:---|
|Soldagem|Formato do cordão de solda|Velocidade de movimento ao longo do cordão|
|Apreensão|De A até a borda do copo|Quando chegar, por quanto tempo segurar|
|Pintura|Área a ser pintada|Velocidade de movimento do pulverizador|

**Ordem de planejamento**:

> 1. Primeiro definir o **caminho** (forma)
> 
> 2. Depois definir a **trajetória** (quando estar em cada lugar)
> 
> 

**Um exemplo concreto**

O braço move um copo do ponto A para o ponto B.

**Caminho** (apenas forma):

> Erguer -> estender para frente -> abaixar
> 
> (uma curva espacial)
> 
> 

**Trajetória** (com tempo):

> Erguer 1 s -> pausar 0,5 s -> estender 2 s -> abaixar 1 s
> 
> (ângulos de junta em cada instante)
> 
> 

**O caminho pode estar certo enquanto a trajetória está errada** (por exemplo, muito agressiva, o copo voa para fora); **a trajetória estar certa exige que o caminho esteja certo primeiro** (um caminho errado torna inútil uma trajetória precisa).

**Por que discuti-los separadamente**

|Etapa|Foco|
|:---|:---|
|**Planejamento de caminho**|Evitar obstáculos, encontrar uma forma viável|
|**Planejamento de trajetória**|Tornar o movimento suave, sem trepidações ou excesso de velocidade|

**Caminho** é um problema geométrico; **trajetória** é um problema de temporização.

**A trajetória do braço deve ser "suave"**

Não apenas "de A até B", mas também:

- Velocidade contínua (sem saltos súbitos para/de 0)
- Aceleração contínua (sem trancos bruscos)
- Dentro dos limites de velocidade do motor
- Dentro dos limites de torque

**Tudo isso pertence ao planejamento de trajetória**.

## 25.3 Trajetórias em Espaço de Juntas e em Espaço Cartesiano

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-25/ch25-03.png" alt="Trajetória a partir de condições de contorno" />
</div>

|Dimensão|Trajetória em espaço de juntas|Trajetória em espaço cartesiano|
|:---|:---|:---|
|Objeto interpolado|Ângulos de junta|Pose do efetuador final|
|Função de interpolação|Polinômio|Linha / arco / geodésica|
|Propriedade de velocidade|Velocidade de junta constante|Velocidade constante do efetuador final|

**Portanto, "juntas vs. cartesiano" é discutido em ambos os níveis**, mas **o que mais se pergunta é no nível de caminho** — porque isso é a chave para o braço "fazer coisas diferentes".

**Por que o caminho recebe mais atenção**

|Tarefa|Qual caminho escolher|Motivo|
|:---|:---|:---|
|Soldagem|**Cartesiano** (linha reta)|O cordão de solda é uma linha reta|
|Pintura|**Cartesiano** (curva específica)|A superfície a ser pintada deve ser coberta|
|Paletização|Qualquer um, espaço de juntas|O caminho da ponta não importa|
|Transporte livre|Espaço de juntas|Não é necessário se preocupar com o caminho da ponta|
|Colocar após pegar|Espaço de juntas|Sem exigência de linha reta|

:::warning
Uma trajetória em espaço cartesiano é a forma natural de *descrever* uma tarefa, mas é a forma cara de
*executá-la*: cada pose amostrada precisa de uma solução de IK. Planeje em espaço cartesiano, depois verifique se a
trajetória resultante em espaço de juntas respeita os limites das juntas e se mantém longe de singularidades — ou gere
o caminho em espaço cartesiano e a temporização em espaço de juntas.
:::

## 25.4 Interpolação Linear

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-25/ch25-04.png" alt="Por que a interpolação linear causa trancos" />
</div>

Trajetória em espaço de juntas:

$$
\theta(t) = \theta_{start} + (\theta_{end} - \theta_{start})\,t
$$

A junta vai suavemente de 0° a 90°, assumindo um valor a cada 10% do caminho.

Trajetória em espaço de posição:

$$
\mathbf{p}(t) = \mathbf{p}_{start} + (\mathbf{p}_{end} - \mathbf{p}_{start})\,t
$$

A ponta se move em linha reta de $(0, 0, 0)$ até $(1, 0, 0)$; uma posição intermediária é $\mathbf{p}_{start} + s\,(\mathbf{p}_{end} - \mathbf{p}_{start})$, onde a razão $s$ vai de 0 a 1.

**Prós e contras**

O problema é o perfil de velocidade: a junta se move a uma velocidade constante, diferente de zero, e então para instantaneamente.

$$
\dot{\theta}(t) = \frac{\theta_{end} - \theta_{start}}{T} \ne 0, \qquad \ddot{\theta}(t) = 0
$$

**Prós:**

- Simples e fácil de calcular
- Feito em uma linha de código
- Alto desempenho em tempo real

**Contras:**

- Saltos de velocidade no início e no fim (ela não é zero nesses pontos)
- O braço "dá trancos" ao iniciar/parar
- Não é adequado para tarefas de alta precisão

O "tranco" de início/parada é o problema central — por isso trajetórias mais refinadas usam polinômios cúbicos/quintícos.

<a id="interpolação"></a>

## 25.5 Interpolação Polinomial

**Por que polinômios são necessários**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-25/ch25-05.png" alt="Polinômios lineares, cúbicos e quínticos" />
</div>

**Diferenças centrais**

|Dimensão|Linear|Cúbico|Quíntico|
|:---|:---|:---|:---|
|Velocidade de início/parada|Salto|0|0|
|Aceleração de início/parada|Salto|Salto|0|
|Suavidade|Ruim|Média|Boa|
|Carga de cálculo|Mínima|Média|Média|
|Melhor para|Movimento grosseiro|Uso geral|Alta precisão|

**Aplicações em braços robóticos**

|Cenário|Qual usar|
|:---|:---|
|Transporte grosseiro, paletização|Cúbico|
|Soldagem, montagem|**Quíntico**|
|Robôs colaborativos|**Quíntico** (devem ser estáveis perto de humanos)|
|Movimento em alta velocidade|Cúbico (suficiente)|
|Pesquisa / demonstração|Quíntico (mais suave)|

$$
\begin{aligned}
\text{Linear:}\quad  \theta(t) &= a_0 + a_1 t \\
\text{Cúbico:}\quad   \theta(t) &= a_0 + a_1 t + a_2 t^2 + a_3 t^3 \\
\text{Quíntico:}\quad \theta(t) &= a_0 + a_1 t + a_2 t^2 + a_3 t^3 + a_4 t^4 + a_5 t^5
\end{aligned}
$$

**Quíntico com condições de contorno repouso-a-repouso** — o braço começa em repouso e para em repouso:

$$
\begin{aligned}
\theta(0) &= 0, & \dot{\theta}(0) &= 0, & \ddot{\theta}(0) &= 0 \\
\theta(T) &= 90^\circ, & \dot{\theta}(T) &= 0, & \ddot{\theta}(T) &= 0
\end{aligned}
$$

Seis condições, seis incógnitas $a_0, a_1, \ldots, a_5$ — uma solução única.

<a id="controle"></a>

## 25.6 Feedforward, Feedback e Compensação de Gravidade

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-25/ch25-06.png" alt="Feedforward versus feedback" />
</div>

O torque enviado ao motor é **a soma de duas coisas**:

$$
\tau_{cmd} = \underbrace{\tau_{feedforward}}_{\text{calculado com antecedência, incl. compensação de gravidade}} + \underbrace{\tau_{feedback}}_{\text{corrigido a partir do erro, conserta o que dá errado}}
$$

**Feedforward: enviar antecipadamente com base no modelo**

Dada a trajetória e os parâmetros do braço, pode-se calcular **quanto torque é necessário em cada instante**:

|O modelo contém|Finalidade|
|:---|:---|
|Termo de inércia|Vencer a inércia ao acelerar|
|Termo de Coriolis|Contrabalançar o acoplamento ao girar|
|**Termo de gravidade**|**Presente mesmo quando o braço está parado; cancela diretamente a gravidade**|

**O termo de gravidade é especialmente importante** — o braço deve enviá-lo **mesmo parado**, caso contrário a gravidade o puxa para baixo.

**Analogia**: sabendo que hoje há uma subida de 5 km, aumentar o esforço com antecedência.

**Feedback: corrigir quando algo está errado**

Por mais preciso que seja o modelo, há erros e perturbações externas -> a posição real deriva.

Feedback é **comparação em tempo real e correção em tempo real**:

- O quão distante está -> adicionar essa quantidade (feedback de posição)
- Quão rápido está derivando -> amortecer nessa medida (feedback de velocidade)

**Analogia**: sabendo que hoje há uma subida, mas há buracos na estrada — desviar deles quando você os vê.

**Como os dois trabalham juntos**

|Origem|Papel|Parcela (típica)|
|:---|:---|:---|
|**Feedforward**|Maior parte do torque|80~95%|
|**Feedback**|Compensar pequenos erros|5~20%|

**Feedforward lida com a maior parte, feedback lida com o pequeno restante** — juntos, eles são rápidos e precisos.

**Comparação**

|Dimensão|Feedforward|Feedback|
|:---|:---|:---|
|Tempo|Calcula com antecedência|Corrige em tempo real|
|Depende de|Precisão do modelo|Leituras dos sensores|
|Resposta|Imediata|Atrasa um quadro|
|Rejeição de perturbações|Fraca|Forte|
|Inclui|Inclui compensação da gravidade|Não inclui|

**Como é o controlador de fato**

$$
\begin{aligned}
\tau_{cmd} &= \tau_{feedforward} + \tau_{feedback} \\
&= \underbrace{\big[ M(q)\,\ddot{q} + C(q, \dot{q})\,\dot{q} + G(q) \big]}_{\text{feedforward (incl. gravity)}} + \underbrace{\big[ K_p\,e + K_d\,\dot{e} \big]}_{\text{feedback}}
\end{aligned}
$$

**A gravidade está dentro de feedforward** — não há necessidade de calculá-la separadamente.

**Em uma frase**

> **Feedforward** envia torque com antecedência com base no modelo (incluindo gravidade); **feedback** compensa em tempo real com base no erro; **não é necessário mencionar a gravidade separadamente** — ela é o subt termo em feedforward que deve ser calculado mesmo quando o braço está parado.
> 
> 

- **Path** = geometria, **trajectory** = temporização; planeje primeiro o caminho, depois a temporização.
- A interpolação no espaço de juntas é barata e livre de singularidades; a interpolação no espaço cartesiano é o que a tarefa normalmente exige.
- A interpolação linear dá trancos; a **cúbica** remove o salto de velocidade e a **quíntica** também remove o salto de aceleração.
- O comando de torque é **feedforward (modelo + gravidade) mais feedback (correção de erro)**; a gravidade vive dentro de feedforward.
- Próximo capítulo: executar tudo isso no modelo real do reBot Arm com Pinocchio e MeshCat.

</div>
