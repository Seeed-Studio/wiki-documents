---
description: "Capítulo 35 do Curso de Iniciação em IA Física da Seeed — simulação de robôs do zero: por que a simulação é um simulador de voo para robôs, os três elementos centrais (modelo, ambiente, controlador), os avatares visual / de colisão / inercial do modelo do robô, juntas, atuadores e sensores, tamanho do passo de simulação versus frequência de controle, os formatos URDF / MJCF / USD, MuJoCo versus Isaac Sim e o gêmeo digital."
title: Capítulo 35 - Fundamentos de Simulação de Robôs e Introdução a Plataformas
hide_title: true
keywords:
  - reBot
  - Robotic Arm
  - Simulation
  - MuJoCo
  - Isaac Sim
  - MJCF
  - USD
  - Digital Twin
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_35
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/pt-br/rebot_physical_ai_course_chapter_35/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 8 · Capítulo 35 · Teoria</span>
    <h2>35. Fundamentos de Simulação de Robôs e Introdução a Plataformas</h2>
    <p>
      Capítulo 35 do Curso de Iniciação em IA Física da Seeed — simulação de robôs do zero: por que a simulação é um simulador de voo para robôs, os três elementos centrais (modelo, ambiente, controlador), os avatares visual / de colisão / inercial do modelo do robô, juntas, atuadores e sensores, tamanho do passo de simulação versus frequência de controle, os formatos URDF / MJCF / USD, MuJoCo versus Isaac Sim e o gêmeo digital.
    </p>
    <div className="hero-actions">
      <a href="#overview">Visão geral do capítulo</a>
      <a href="#elements">Elementos centrais</a>
      <a href="#formats">URDF, MJCF, USD</a>
      <a href="#choose">Escolhendo um simulador</a>
    </div>
  </div>
</section>

### Hardware necessário para este estágio

O que preparar para este estágio. A lista completa para cada estágio está no [Capítulo 3](/pt-br/rebot_physical_ai_course_chapter_3/).

**Unidade de controle principal**

| Item | Comprar | Qtde |
| :--- | :---: | :---: |
| [reComputer Robotics J4012](https://www.seeedstudio.com/reComputer-Robotics-J3011-with-GMSL-extension-board-p-6538.html) | 🛒 | 1 |
| [NVIDIA Jetson AGX Thor 128G](https://www.seeedstudio.com/reComputer-Classic-J5012-p-6881.html) | 🛒 | 1 |

Também é necessário um desktop ou laptop: Ubuntu 22.04, GTX 4080 ou superior com 12GB+ de VRAM, 16GB+ de RAM.

**Para este estágio**

| Item | Comprar | Qtde |
| :--- | :---: | :---: |
| [reBot Arm B601 DM/RS](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html) | 🛒 | 1 |


{/* TODO: o documento original mostra uma figura aqui (imagem 1.png) que não foi exportada - o arquivo não está em 图片和附件/ e não há nada para enviar, então a figura precisa ser recriada antes que a página esteja completa. */}
<a id="overview"></a>

## 35.1 Por Que Usar Simulação? — A Lógica do "Simulador de Voo"

A simulação de robôs não é uma "peça de demonstração"; é o campo de testes seguro da robótica moderna.

- **Reduzir o risco de depuração**: Um braço real fora de controle pode quebrar equipamentos ou ferir pessoas; na simulação, o pior caso é o modelo sair voando (explosão do motor de física).
- **Quebrar limites de tempo e dinheiro**: Você pode executar algoritmos 24/7 sem esperar o braço real carregar ou ser consertado, e nenhuma linha de produção física é ocupada.
- **Obter "rótulos perfeitos"**: Na simulação, você conhece o torque de cada junta, a força em cada elo e a pose 6D do efetuador final com precisão absoluta — coisas que, no mundo físico real, geralmente exigem sensores caros para medir.

Para o reBot Arm, simulação não é opcional; é o caminho de desenvolvimento padrão. O script `start_fake_bringup.sh` no workspace inicia um ambiente de simulação puro — usando interfaces de hardware simuladas, ele consegue completar toda a validação, do controle de juntas ao planejamento de movimento com MoveIt2, sem conectar um braço real.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-35/ch35-01.png" alt="Por que usar simulação: risco de depuração, custo e rótulos" />
</div>

## 35.2 Os Três Papéis Centrais da Simulação no Desenvolvimento

|Estágio de desenvolvimento|O que a simulação ajuda você a fazer|
|---|---|
|Validação de algoritmos (cinemática/dinâmica)|Testar se o algoritmo de cinemática inversa (IK) converge, se o planejamento de trajetória é suave e se o controlador (PID/MPC) é estável.|
|Teste Software-in-the-loop (SIL)|Seu código de decisão de alto nível (por exemplo, comandos de saída do modelo VLA) permanece completamente inalterado; apenas a interface de comunicação de baixo nível é trocada por Topics simulados, para verificar se a lógica de software funciona de ponta a ponta.|
|Treinamento de aprendizado por reforço (RL)|Deixar o braço "morrer" dezenas de milhares de vezes na simulação para aprender políticas, obtendo dados de treinamento massivos a custo zero (transferência Sim2Real).|

<a id="elements"></a>

## 35.3 Os Três Elementos Centrais da Simulação: Modelo, Ambiente, Controlador

Um sistema de simulação completo é composto por estas três partes, nenhuma delas pode faltar:

**Modelo do robô (Agente)**: descreve "como eu pareço, quanto eu peso e como minhas juntas giram."

**Ambiente**: descreve "onde eu estou e o que está ao meu redor." (chão, mesa, objetos para agarrar, obstáculos)

**Controlador**: descreve "como eu me movimento." (política VLA, interpolação de trajetória, PID de baixo nível)

Em uma frase: o controlador emite comandos de torque/posição -> faz o modelo se mover no ambiente -> os sensores retornam o estado ao controlador, formando um laço fechado.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-35/ch35-02.png" alt="Os três elementos centrais: modelo do robô, ambiente e controlador" />
</div>

No modelo MJCF do reBot Arm, as três partes têm manifestações concretas: modelo do robô — começando de `base_link`, construindo a cadeia cinemática completa por meio de elementos `<body>` aninhados:

```bash
base_link -> link1 -> link2 -> link3 -> link4 -> link5 -> link6 -> end_link
                                                              |- finger_left_link
                                                               `- finger_right_link
```

Ambiente — o MJCF define uma cena completa de agarrar:

```xml
<geom name="floor" type="plane" size="1.0 1.0 0.02" material="floor_mat"/>

<body name="task_table" pos="0.42 0 0.015">
  <geom name="task_table_top" type="box" size="0.30 0.26 0.015"
        contype="1" conaffinity="1" condim="6" friction="2.2 0.12 0.02"/>
</body>

<body name="red_cube" pos="0.34 -0.13 0.061">
  <freejoint/>
  <geom type="box" size="0.025 0.025 0.025" mass="0.04" contype="1" conaffinity="1"/>
</body>
```

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-35/ch35-03.jpg" alt="Uma cena de agarrar no MuJoCo com objetos de tarefa coloridos" />
</div>

A cena contém uma mesa, três objetos para agarrar (um cubo vermelho, um bloco azul, um cilindro amarelo) e uma esfera alvo de IK do tipo mocap. Esses elementos de ambiente fazem com que a simulação seja mais do que apenas "ver o braço se mover" — você pode testar o fluxo de pegar e colocar em uma cena completa de agarrar.

O controlador — a simulação do reBot Arm no MuJoCo tem dois métodos de controle:

- Definir diretamente `qpos` (modo cinemático): `real2sim_sync.py` escreve os estados das juntas do ROS em `data.qpos`, chama `mj_forward` para corrigir a cinemática e não envolve forças nem dinâmica.
- Aplicar torque (modo dinâmico): `mujoco_torque_control.py` aplica torques de junta por meio de `data.qfrc_applied` e chama `mj_step` para avançar a simulação física.

## 35.4 Os "Três Avatares" do Modelo do Robô: Visual, Colisão, Inercial

Em arquivos de simulação (como URDF / MJCF), um elo geralmente contém estes três atributos, cada um com sua própria função:

|Atributo|Metáfora|Função|Requisito gráfico|
|---|---|---|---|
|Visual (modelo visual)|A "pele/aparência" do ator|Usado apenas para exibição de renderização, para ficar bonito na interface gráfica.|Malhas finas (STL/DAE), muitos triângulos.|
|Collision (modelo de colisão)|A "bolha de segurança/esqueleto" do ator|Usado pelo motor de física para calcular detecção de colisão e forças de contato.|Extremamente simplificado (envolto em esferas, cápsulas, caixas), pouquíssimas faces, garantindo cálculo rápido.|
|Inertial (modelo inercial)|O "peso e centro de gravidade" do ator|Define massa, posição do centro de massa (origem) e momento de inércia (matriz de inércia). A chave para o realismo físico.|Apenas parâmetros matemáticos, sem gráficos.|

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-35/ch35-04.png" alt="Representações visual, de colisão e inercial de um elo de robô" />
</div>

**Alerta de armadilha**: Muitas pessoas copiam o Visual diretamente para Collision por conveniência, o que deixa a simulação travando (a GPU não acompanha) e a detecção de colisão extremamente instável. Collision deve ser simplificado com Convex Hull!

O modelo MJCF do reBot Arm faz exatamente isso — visual usa malhas STL, colisão usa caixas:

```xml
<!-- Visual: fine STL mesh, only for looks -->
<geom name="gripper_base_visual" type="mesh" mesh="gripper_base_mesh" material="gripper_mat"/>

<!-- Collision: simplified box, only for collision detection -->
<geom name="gripper_palm_collision" type="box" pos="-0.090 0 0"
      size="0.018 0.090 0.034" contype="1" conaffinity="1" condim="6"/>
```

Para as partes de elo (link1-link6), os geoms visuais usam por padrão `contype="0" conaffinity="0"`, não participando da detecção de colisão. Isso é um projeto intencional: a autocolisão do braço é gerenciada pela matriz ACM do SRDF (veja o Capítulo 34),

e no nível do MuJoCo apenas as colisões entre o gripper e os objetos são tratadas. Para o modelo Inertial, o modelo STL MJCF do reBot Arm define parâmetros inerciais completos para cada corpo:

```xml
<inertial pos="-0.000007849 -0.0000011531 0.029841"
          mass="0.8366"
          diaginertia="0.00133040 0.00213119 0.00275877"/>
```

Distribuição de massa de cada elo

|Elo|Massa (kg)|Descrição|
|---|---|---|
|base_link|0.8366|Base, o mais pesado|
|link2|1.3266|Braço superior, o segundo mais pesado|
|link3|0.8353|Antebraço|
|link4|0.52|Inclinação do punho|
|link5|0.383|Giro do punho|
|link6|0.3663|Rotação da ferramenta|
|end_link|0.5|Base do gripper|

Vale notar que o modelo cinemático (`rebotarm_b601_kinematic.xml`) omite os dados inerciais da maioria dos elos, porque o modo cinemático não precisa calcular forças e dinâmica, apenas relações geométricas.

## 35.5 Juntas, Atuadores e Sensores (As "Terminações Nervosas" na Simulação)

&#123;&#123;/* TODO: o documento original mostra uma figura aqui (imagem 1.png) que não foi exportada - o arquivo não está na pasta e não há nada para enviar, então a figura precisa ser recriada. */&#125;&#125;

### **Joint**: define o movimento relativo entre elos.

Tipos comuns:

|Tipo de junta|Nome URDF|Nome MJCF|Descrição|
|---|---|---|---|
|Junta rotativa|`revolute`|`hinge`|Como um servo, com limites.|
|Rotação contínua|`continuous`|`hinge` (sem faixa)|Como uma roda, rotação ilimitada.|
|Junta prismática|`prismatic`|`slide`|Como uma haste hidráulica.|
|Junta fixa|`fixed`|Nenhum (soldado diretamente)|Solda dois elos juntos.|

O reBot Arm usa `hinge` (joint1-joint6) e `slide` (finger_left, finger_right):

```xml
<joint name="joint1" type="hinge" axis="0 0 1" range="-2.8 2.8"/>
<joint name="joint2" type="hinge" axis="0 0 -1" range="-3.14 0"/>
<joint name="finger_left" type="slide" axis="0 1 0" range="0 0.0285"/>
```

Cada junta em MJCF possui parâmetros de amortecimento (damping) e inércia do rotor (armature):

```xml
<default>
  <joint damping="0.8" armature="0.01" limited="true"/>
</default>
```

`damping="0.8"` simula o atrito da junta, fazendo com que a junta desacelere naturalmente sem forças externas. `armature="0.01"` simula a inércia equivalente do rotor do motor, tornando a simulação mais próxima das características de resposta de um motor real.

### **Atuador**: na simulação, define os limites de força/torque de acionamento e o atraso de transmissão. Por exemplo, se você enviar um comando de torque de -10~10 Nm, o atuador o limita antes de passá-lo para o motor de física.

Mas o modelo MJCF do reBot Arm não define nenhum elemento `<actuator>` — isso não é uma omissão,

mas sim um projeto intencional:

- `real2sim_sync.py` escreve diretamente em `data.qpos`, ignorando o atuador, para obter sincronização cinemática.
- `mujoco_torque_control.py` escreve diretamente em `data.qfrc_applied`, ignorando o atuador,

para obter controle de torque. A limitação de torque é feita no nível de código: `torque_limit=18.0`.

Esse projeto "sem atuador" dá aos desenvolvedores liberdade máxima de controle: você pode escolher o modo cinemático (definir posições diretamente) ou o modo dinâmico (definir torques diretamente), sem ser limitado pelo modelo de atuador.

### **Sensor**: o simulador pode simular perfeitamente (ou adicionar ruído para simular a realidade)

|Tipo de sensor|Método de simulação|Manifestação no reBot Arm|
|---|---|---|
|Encoder de posição/velocidade da junta|Ler diretamente `data.qpos` / `data.qvel`|`mujoco_torque_control.py` lê os estados das juntas|
|Sensor de força/torque (F/T)|Ler `data.qfrc_bias` (força de bias = gravidade + força de Coriolis)|O núcleo do recurso de comparação de torque|
|IMU|Ler a aceleração e a velocidade angular do corpo|Não usado no projeto|
|Câmera/LiDAR|Gerar RGB ou nuvens de pontos através do motor de renderização|MJCF define a câmera `overhead_rgb`|

O modelo MJCF do reBot Arm não define elementos `<sensor>`; os dados dos sensores são lidos diretamente pela API Python:

```python
# Read joint position
qpos = self.data.qpos[joint.qpos_addr]

# Read joint velocity
qd = self.data.qvel[joint.dof_addr]

# Read the gravity compensation torque (bias force)
mujoco.mj_forward(self.model, self.gravity_data)
tau_g = self.gravity_data.qfrc_bias[joint.dof_addr]
```

## 35.6 Principais parâmetros de tempo: tamanho do passo de simulação vs frequência de controle (facilmente confundidos)

**Physics dt**: o intervalo de tempo da iteração interna de integração do motor de física. Ex.: 0,001 s = 1 kHz. Quanto menor o passo, mais precisa e estável é a física, mas maior a carga de CPU.

**Taxa de controle**: a frequência com que o nó de controle envia comandos para a simulação.

Por exemplo, 100 Hz. O período de controle deve ser um múltiplo inteiro do passo de simulação (por exemplo, calcular um comando de controle a cada 10 passos de física).

**Regra de ouro**: a frequência de controle deve cobrir suficientemente a largura de banda mecânica do braço (tipicamente malha de velocidade da junta > 1 kHz, malha de posição > 100 Hz), enquanto o passo de simulação deve ser 5–10x mais rápido que a frequência de controle para manter os comandos de torque suaves ao longo do tempo.

Os dois modelos MJCF do reBot Arm usam passos de tempo diferentes:

|Modelo|timestep|Significado|
|---|---|---|
|`rebotarm_b601_stl.xml` (modelo físico)|0,001 s (1 ms = 1 kHz)|Avança 1 ms de física por passo|
|`rebotarm_b601_kinematic.xml` (modelo cinemático)|0,002 s (2 ms = 500 Hz)|Avança 2 ms por passo, sem computação física|

O modelo físico usa um passo de tempo menor (1 ms), porque a simulação dinâmica precisa de resolução suficiente para garantir estabilidade numérica. O modelo cinemático não precisa resolver equações de movimento, então 2 ms são suficientes.

```xml
<option timestep="0.001" gravity="0 0 -9.81" iterations="100" noslip_iterations="20"/>
```

`iterations="100"` e `noslip_iterations="20"` são parâmetros do solucionador de restrições, afetando a precisão da solução de contatos e atrito. Valores maiores são mais precisos, porém mais caros computacionalmente.

Em `mujoco_torque_control.py`, a frequência de controle e a frequência de publicação são separadas:

```python
self.declare_parameter("control_hz", 500.0)   # control loop 500 Hz
self.declare_parameter("publish_hz", 60.0)     # state publishing 60 Hz
```

O loop de controle roda a 500 Hz (a cada 2 ms), combinando com o passo de tempo de 1 ms do MuJoCo — cada ciclo de controle chama `mj_step` para avançar a simulação física. A publicação de estados roda a 60 Hz e publica externamente por meio de tópicos ROS2, evitando inundar os assinantes com dados de alta frequência.

A frequência de sincronização de `real2sim_sync.py` é muito menor:

```python
self.declare_parameter("sync_hz", 60.0)  # sync rendering at 60 Hz
```

Como real2sim faz apenas sincronização cinemática (escrever qpos + mj_forward), sem chamar mj_step, ele não precisa de computação física em alta frequência. 60 Hz são suficientes para manter os visuais suaves.

<a id="formats"></a>

## 35.7 Comparando os três formatos de modelo: URDF, MJCF e USD

|Formato|Nome completo / origem|Características|Cenários aplicáveis|
|---|---|---|---|
|URDF|Unified Robot Description Format (padrão ROS)|Estrutura em árvore (sem elos fechados); extremamente forte para cinemática, mas fraco para descrição de dinâmica (inércia) e não suporta terrenos complexos.|Braços tradicionais, bases móveis, padrão do ecossistema ROS.|
|MJCF|MuJoCo XML Format|Otimizado especificamente para dinâmica de corpos múltiplos e contato; descrição extremamente detalhada de parâmetros físicos (atrito, elasticidade, amortecimento). Suporta geração automática de casco convexo.|Reinforcement learning (RL), tarefas de contato de alta precisão (por exemplo, preensão com mão hábil).|
|USD|Universal Scene Description (open source pela Pixar)|Gerenciamento de cena em nível Hollywood; suporta cenas ultra-grandes, composição hierárquica e materiais e iluminação extremamente realistas.|Isaac Sim, gêmeos digitais, geração de dados sintéticos de alta fidelidade (profundamente integrado com NVIDIA Omniverse).|

**Recomendação de caminho de desenvolvimento**: use URDF para algoritmos de braço tradicionais; use MJCF para reinforcement learning/manipulação hábil; escolha USD para geração de dados de simulação/renderização fotorrealista.

O desenvolvimento do reBot Arm envolve os dois primeiros:

URDF — exportado do SolidWorks, cada elo contém os três subelementos `<inertial>`, `<visual>`,

e `<collision>`, usados para exibição no RViz e planejamento no MoveIt2:

```xml
<link name="base_link">
  <inertial>
    <mass value="0.79874480798149"/>
    <inertia ixx="..." iyy="..." izz="..."/>
  </inertial>
  <visual>
    <geometry>
      <mesh filename="package://rebotarm_bringup/description/meshes_b601_gripper/base_link.STL"/>
    </geometry>
  </visual>
  <collision>
    <geometry>
      <mesh filename="package://rebotarm_bringup/description/meshes_b601_gripper/base_link.STL"/>
    </geometry>
  </collision>
</link>
```

Observe a limitação do URDF: collision só pode reutilizar a malha visual; você não pode definir separadamente um corpo de colisão simplificado.

Esse também é o motivo pelo qual o reBot Arm mantém MJCF em paralelo — MJCF pode definir de forma independente visual (malha) e colisão (caixa) no mesmo elo.

MJCF — o MJCF do reBot Arm também suporta elementos de cena que o URDF não consegue expressar (mesa, objetos, câmera):

```xml
<camera name="overhead_rgb" mode="fixed" pos="0.42 0 0.86" fovy="50"/>
<body name="red_cube" pos="0.34 -0.13 0.061">
  <freejoint/>
  <geom type="box" size="0.025 0.025 0.025" mass="0.04"/>
</body>
```

USD — o reBot Arm não o utiliza atualmente, mas se for necessário migrar para o Isaac Sim no futuro, a conversão pode ser feita com as ferramentas `urdf_to_usd` ou `mjcf_to_usd`.

<a id="choose"></a>

## 35.8 Os dois gigantes de simulador: MuJoCo VS Isaac Sim (respondendo "Qual devo escolher")

|Dimensão de comparação|MuJoCo|Isaac Sim|
|---|---|---|
|Posicionamento central|Laboratório de física leve (a ferramenta do matemático)|Plataforma de gêmeo digital de nível empresarial (o metaverso do engenheiro)|
|Motor de física|Baseado em otimização convexa/complementaridade cônica; contatos estáveis e resistentes a explosões numéricas, simulação extremamente rápida (pode rodar a 10x de velocidade ou mais).|Baseado em PhysX 5 (acelerado por GPU); suporta corpos rígidos/moles e fluidos; forte realismo físico.|
|Capacidade de renderização|Rudimentar (OpenGL), quase sem iluminação ou sombras.|Ray tracing cinematográfico (RTX); pode gerar imagens perfeitas semânticas/de profundidade/segmentação.|
|Requisito de hardware|Roda suavemente em CPU (funciona mesmo sem GPU).|Requer uma GPU NVIDIA RTX (pelo menos uma 3060 para começar).|
|Cenários típicos|Treinamento de políticas de reinforcement learning (por exemplo, OpenAI Gym), controle ótimo (MPC), dispositivos de baixo poder de computação.|Geração de dados sintéticos (treinar modelos fundamentais de visão), hardware-in-the-loop (HIL), simulação de linha de fábrica completa.|

O motivo da escolha do MuJoCo pelo reBot Arm é claro: o projeto precisa de validação dinâmica precisa (comparação de torque de compensação de gravidade) e espelhamento em tempo real do robô real (real2sim). Essas tarefas exigem alta precisão física e velocidade de computação, mas baixa qualidade de renderização. MuJoCo satisfaz exatamente essa necessidade.

Critérios de seleção entre os dois:

|Requisito|Plataforma recomendada|Motivo|
|---|---|---|
|Modelagem de dinâmica e análise de torque|MuJoCo|Alta precisão física, API dá acesso direto aos torques|
|Planejamento de movimento e validação de trajetória|MuJoCo / RViz|Leve, inicialização rápida|
|Percepção visual e simulação de sensores|Isaac Sim|Suporta câmeras, LiDAR e outros sensores|
|Treinamento de reinforcement learning|Isaac Sim|Paralelismo em GPU, ambientes em grande escala|
|Espelhamento em tempo real do robô real|MuJoCo|Roda em CPU, baixa latência|
|Renderização fotorrealista de cena|Isaac Sim|Ray tracing RTX|

## 35.9 Braço Simulado vs Braço Real: "Espelho" e "Lacuna"

**Relação**: o braço simulado é uma "projeção matemática idealizada" do braço real.

**Semelhanças**: a cinemática (soluções direta/inversa) é completamente idêntica; limites de junta e limites de velocidade podem ser preenchidos exatamente de acordo com os parâmetros reais.

As seis juntas do reBot Arm têm exatamente os mesmos limites em MJCF e URDF:

|Junta|Faixa|Limites URDF|Limites MJCF|
|---|---|---|---|
|joint1|-2.8 ~ 2.8 rad|lower="-2.8" upper="2.8"|range="-2.8 2.8"|
|joint2|-3.14 ~ 0 rad|lower="-3.14" upper="0"|range="-3.14 0"|
|joint3|-3.14 ~ 0 rad|lower="-3.14" upper="0"|range="-3.14 0"|
|joint4|-1.87 ~ 1.57 rad|lower="-1.87" upper="1.57"|range="-1.87 1.57"|
|joint5|-1.57 ~ 1.57 rad|lower="-1.57" upper="1.57"|range="-1.57 1.57"|
|joint6|-3.14 ~ 3.14 rad|lower="-3.14" upper="3.14"|range="-3.14 3.14"|

**Diferenças (Sim2Real Gap, a lacuna a ser superada)**:

### **1. Diferenças de dinâmica**

Na realidade há atrito, folga mecânica e deformação flexível; a simulação costuma ser um corpo rígido perfeito ou ter um modelo de atrito simplificado. No MJCF do reBot Arm, `damping="0.8"` e `armature="0.01"` são valores estimados; o atrito real das juntas e a inércia do rotor do motor precisam ser obtidos por identificação de sistema. O recurso de comparação de torque de `mujoco_torque_control.py` existe justamente para quantificar esse erro — ele calcula simultaneamente o torque de compensação de gravidade do MuJoCo e o torque de compensação de gravidade do SDK, e publica a diferença:

```python
tau_mujoco = self._compute_mujoco_tau_g(q)  # computed by MuJoCo
tau_sdk = self._sdk_gravity(q=q)              # computed by SDK
diff = tau_mujoco - tau_sdk                    # difference
```

O resultado da comparação é publicado por meio de três tópicos:

|Tópico|Conteúdo|
|---|---|
|`/rebotarm/mujoco/tau_g`|Torque de compensação de gravidade calculado pelo MuJoCo|
|`/rebotarm/mujoco/sdk_tau_g`|Torque de compensação de gravidade calculado pelo SDK|
|`/rebotarm/mujoco/tau_g_diff`|A diferença entre os dois|

Se a diferença for pequena, o modelo de simulação corresponde bem à dinâmica do robô real, e o risco de transferência sim-para-real é baixo. Se a diferença for grande, os parâmetros do modelo precisam de calibração.

### **2. Diferenças de latência**

Na simulação, comandos de controle são executados quase instantaneamente, com latência zero; na realidade é preciso passar por "atraso de comunicação -> aceleração do motor -> estabelecimento de torque". `real2sim_sync.py` lida com isso usando o parâmetro `stale_timeout`:

```python
self.declare_parameter("stale_timeout", 1.0)  # stop syncing after 1 second without data
```

Se o estado das juntas do braço real não for atualizado por mais de 1 segundo, o modelo de simulação para de seguir, evitando exibir poses desatualizadas.

### **3. Diferenças de percepção**

A câmera simulada gera RGB perfeito sem desfoque de movimento; uma câmera real tem atraso de exposição, deriva de balanço de branco e desfoque dinâmico. O MJCF do reBot Arm define uma câmera fixa:

```xml
<camera name="overhead_rgb" mode="fixed" pos="0.42 0 0.86" fovy="50"/>
```

Essa câmera pode renderizar a cena no visualizador do MuJoCo, mas há uma lacuna entre ela e a qualidade de imagem de uma câmera real.

## 35.10 Gêmeo Digital — A Forma Suprema de Simulação

**Definição**: não é apenas "simulação offline", mas o estabelecimento de um canal de dados em tempo real para que cada ângulo de junta, torque e temperatura do braço real seja mapeado para o modelo virtual em tempo real, enquanto o modelo virtual também pode "ensaiar" ao contrário os próximos segundos de movimento (manutenção preditiva).

Os três níveis de gêmeos digitais:

|Nível|Nome|Capacidade|
|---|---|---|
|Nível 1|Visualização|Dashboard 3D, apenas para visualização.|
|Nível 2|Diagnóstico|Quando ocorre um erro real, o gêmeo destaca a parte com falha e rastreia os logs.|
|Nível 3|Previsão|Com base na carga atual, o corpo virtual calcula antecipadamente que "o motor pode sobrecarregar em 2 segundos", acionando proteção de redução de velocidade no mundo real.|

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-35/ch35-05.png" alt="Arquitetura de gêmeo digital do reBot Arm" />
</div>

**Suavização e timeout**: gêmeos digitais precisam lidar com jitter e interrupção dos dados do robô real. O parâmetro `smoothing_alpha` controla a suavidade do rastreamento (1.0 é rastreamento direto; menor que 1.0 é suavização exponencial), e `stale_timeout` controla o comportamento após o timeout de dados.

**Apreensão virtual**: `real2sim_sync.py` também implementa apreensão virtual — quando a garra se fecha até certo grau e o TCP está próximo de um objeto, o objeto se torna "preso" ao TCP e se move junto com ele; quando a garra abre, o objeto é liberado e cai livremente. Isso permite que o gêmeo digital não apenas espelhe poses, mas também simule interações de apreensão.

**Gêmeo em nível de torque**: `mujoco_torque_control.py` eleva o gêmeo digital do nível de cinemática para o nível de dinâmica. Ele não apenas sincroniza posições de juntas, mas também torques — usando o loop fechado de torque do MuJoCo para rastrear a trajetória das juntas do braço real, enquanto compara os torques de compensação de gravidade do MuJoCo e do SDK. Este é o passo-chave para o gêmeo digital passar de "consegue ver" para "calcula com precisão", e a base para avançar em direção ao Nível 2 (diagnóstico) e Nível 3 (previsão).

---

</div>
