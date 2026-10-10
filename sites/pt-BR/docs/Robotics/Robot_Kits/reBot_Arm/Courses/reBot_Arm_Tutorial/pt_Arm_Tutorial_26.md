---
description: "Capítulo 26 do Curso para Iniciantes em IA Física da Seeed — prática com Pinocchio e MeshCat no reBot Arm: instalando uv, carregando o URDF e executando as demos de cinemática direta, cinemática inversa (mínimos quadrados amortecidos com busca linear) e planejamento de trajetória (geodésica em SE(3) mais CLIK)."
title: Capítulo 26 - Pinocchio e MeshCat
hide_title: true
keywords:
  - reBot
  - Braço Robótico
  - Pinocchio
  - MeshCat
  - Cinemática Inversa
  - Planejamento de Trajetória
  - Curso
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_26
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-25
  author: Seeed Studio Robotics Team
createdAt: '2026-09-25'
updatedAt: '2026-09-25'
url: https://wiki.seeedstudio.com/pt-br/rebot_physical_ai_course_chapter_26/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 5 · Capítulo 26 · Prática</span>
    <h2>26. Pinocchio e MeshCat</h2>
    <p>
      Capítulo 26 do Curso para Iniciantes em IA Física da Seeed — prática com Pinocchio e MeshCat no reBot Arm: instalando uv, carregando o URDF e executando as demos de cinemática direta, cinemática inversa (mínimos quadrados amortecidos com busca linear) e planejamento de trajetória (geodésica em SE(3) mais CLIK).
    </p>
    <div className="hero-actions">
      <a href="#setup">Ambiente</a>
      <a href="#fk-demo">Demo de FK</a>
      <a href="#ik-demo">Demo de IK</a>
      <a href="#traj-demo">Demo de trajetória</a>
    </div>
  </div>
</section>

## 26.1 Objetivos de Aprendizagem

Aplicar transformações de coordenadas, teoria de cinemática e planejamento de trajetória em um framework real de desenvolvimento de robôs.

Aprender a usar Pinocchio e MeshCat

## 26.2 O que o Pinocchio e o MeshCat oferecem

[Pinocchio](https://github.com/stack-of-tasks/pinocchio) é uma biblioteca open source para análise e otimização de dinâmica de robôs. Ela fornece cinemática direta/inversa eficiente, cálculo de dinâmica e planejamento de trajetória. [MeshCat](https://github.com/rdeits/meshcat) é uma ferramenta de visualização 3D baseada na web que pode exibir o estado do robô e trajetórias de movimento em tempo real.

$$
\underbrace{\text{URDF}}_{\text{describe}} \longrightarrow \underbrace{\text{Pinocchio}}_{\text{algorithm}} \longrightarrow \underbrace{\text{Result}}_{\text{FK / IK / dynamics}}
$$

Ao ler o modelo URDF do robô, o Pinocchio pode fazer o seguinte.

| Capacidade | Chamada no Pinocchio | Usado neste capítulo |
| :--- | :--- | :--- |
| Construir o modelo cinemático a partir do URDF | `pin.buildModelFromUrdf()` | Carregar `reBot-DevArm_fixend.urdf` |
| Cinemática direta (todas as poses dos elos) | `pin.forwardKinematics()` | Demo de FK, iteração de IK |
| Atualizar poses dos frames | `pin.updateFramePlacements()` | Ler a pose de `end_link` |
| Jacobiano de frame | `pin.getFrameJacobian()` | IK com mínimos quadrados amortecidos |
| Exponencial / logaritmo em SE(3) | `pin.exp6()` / `pin.log6()` | Erro de pose 6D, interpolação geodésica |
| Auxiliares de rotação | `pin.rpy.rpyToMatrix()`, `matrixToRpy()` | Leitura e impressão de poses |

Em seguida, use o repositório de controle do reBot para experimentar.

<a id="setup"></a>

## 26.3 Baixar a Demo e Configurar o Ambiente

Seguindo o tutorial, primeiro conclua a inicialização do braço.

## 26.4 Instalar uv (se ainda não estiver instalado)

```Bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

## 26.5 Sincronizar o Ambiente (instalar todas as dependências)

```Bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git
cd reBotArm_control_py
uv sync
```

`uv sync` cria o ambiente virtual e instala Pinocchio, MeshCat e as dependências do reBot. Verifique antes de prosseguir:

```Bash
uv run python -c "import pinocchio, meshcat; print(pinocchio.__version__)"
```

**Como alternar entre as configurações de motor Damiao e Robostride**

Modifique o arquivo de configuração `config/rebotarm_dm.yaml` (Damiao) ou `config/rebotarm_rs.yaml` (Robostride) e carregue a configuração correspondente no código.

| Versão | Arquivo de configuração | Barramento do motor | Frame do efetuador final |
| :--- | :--- | :--- | :--- |
| **B601-DM** (Damiao) | `config/rebotarm_dm.yaml` | Serial Damiao | `end_link` (a partir da config) |
| **B601-RS** (Robostride) | `config/rebotarm_rs.yaml` | SocketCAN | `end_link` (a partir da config) |

:::tip
`config/rebotarm.yaml` é o ponto de entrada: ele aponta para a configuração de hardware (`rebotarm_dm.yaml` /
`rebotarm_rs.yaml`), que por sua vez aponta para o URDF (`reBot-DevArm_fixend.urdf`). Se uma demo não conseguir
encontrar o modelo, verifique primeiro essa cadeia.
:::

<a id="fk-demo"></a>

## 26.6 Demo de Visualização de Cinemática Direta no MeshCat


<iframe width="560" height="315" src="https://www.youtube.com/embed/wVBwBnDO6X8?si=HSc4UqpDKHEg5Y43" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

```Plain Text
uv run ./example/sim/fk_sim.py

#Open the arm model visualization web address as prompted in the terminal

#Enter angles as prompted
45 -30 15 -60 90 -180

#The arm model moves accordingly
```

## 26.7 Passo a passo da Demo de Cinemática Direta

fk_sim.py é um **pipeline de cinemática direta direto**: ângulos de junta -> FK no Pinocchio -> pose do efetuador final + renderização no MeshCat.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-26/ch26-02.png" alt="" />
</div>


O motivo pelo qual esta demo é um bom ponto de partida: é o caminho mais curto possível de “seis números” até “um modelo 3D que se move”, sem IK, sem dinâmica e sem hardware no meio.

<a id="ik-demo"></a>

## 26.8 Demo de Visualização de Cinemática Inversa no MeshCat

<iframe width="560" height="315" src="https://www.youtube.com/embed/4B9ngX8e7x4?si=Ork_DT-A9zlxfEmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

```Plain Text
uv run ./example/sim/ik_sim.py

#Open the arm model visualization web address as prompted in the terminal

#Enter position and orientation as prompted

0.25 0.0 0.25              # position only

0.25 0.0 0.25 0 0 0        # position + orientation

```

## 26.9 Passo a passo da Demo de Cinemática Inversa

1. **Alvo de entrada** — o usuário fornece a posição desejada do efetuador final (xyz) e a orientação (rolagem/tangagem/guiagem); o programa as constrói em um objeto de pose SE3.

2. **Carregar modelo** — ler o URDF a partir do arquivo de configuração, construir o modelo cinemático do robô e determinar em qual frame está o efetuador final.

3. **Cinemática direta** — com base nos ângulos de junta atuais, calcular a pose SE3 real da extremidade no frame do mundo.

4. **Calcular o desvio** — usar `log6` para mapear por logaritmo o SE3 atual e o SE3 alvo, obtendo um erro de 6 dimensões (quanto a rotação difere, quanto a translação difere).

5. **Inferir a correção** — por meio do Jacobiano, “traduzir” o erro na extremidade em quanto cada junta deve girar; resolver com mínimos quadrados amortecidos para evitar saltos nas juntas.

6. **Iterar até convergir** — repetir os passos 3->5, com busca linear a cada vez para garantir que o erro diminua, até que o erro fique abaixo de um limite (~0,1 mm), ponto em que é considerado alcançado.

7. **Resultado de saída** — retornar os ângulos de junta resolvidos (radianos), se convergiu ou não, e o erro final, para controle subsequente.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-26/ch26-01.png" alt="" />
</div>


<a id="traj-demo"></a>

## 26.10 Demo de Visualização de Planejamento de Trajetória no MeshCat

<iframe width="560" height="315" src="https://www.youtube.com/embed/B5gz1Me78nQ?si=HDzRq-WhDX6N78V5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

```Plain Text
uv run python example/sim/traj_sim.py

#Open the arm model visualization web address as prompted in the terminal

#Enter position and orientation as prompted

0.25 0.0 0.25              # position only

0.25 0.0 0.25 0 0 0        # position + orientation

```

## 26.11 Passo a passo da Demo de Planejamento de Trajetória

#### Pose em SE(3)

**O que é**

SE(3) = **posição + orientação**, a descrição completa do “estado atual” de um corpo rígido 3D.

- **S** — *special*: a parte de rotação é uma rotação própria, $\det R = 1$
- **E** — *Euclidean*: comprimentos e ângulos são preservados
- **3** — o espaço é tridimensional

**Analogia**

Um carro em um estacionamento:

- **Posição** = na vaga P3
- **Orientação** = com o nariz voltado para fora
- Essas duas juntas são a pose SE(3) atual do carro

**Graus de liberdade**

- Posição: 3 números (cima/baixo, esquerda/direita, frente/trás)
- Orientação: 3 números (como está girado)
- Total de **6 DOF**

**Forma matricial (matriz homogênea 4x4)**

$$
T =
\begin{pmatrix}
R & \mathbf{t} \\
\mathbf{0}^\top & 1
\end{pmatrix}
$$

- Bloco superior esquerdo $3\times3$ = $R$, a matriz de rotação (orientação)
- Coluna superior direita $3\times1$ = $\mathbf{t}$, o vetor de translação (posição)
- A linha inferior $[0\ 0\ 0\ 1]$ é um preenchimento fixo

**Exemplo: posição muda -> $\mathbf{t}$ muda; orientação muda -> $R$ muda.**

#### **Geração de Trajetória**

**O amostrador gera uma linha do tempo densa de poses em SE(3)**.

O trabalho é feito em três camadas:

1. **Camada de geometria** — usar `log6`/`exp6` na variedade curva SE(3) para calcular uma geodésica (caminho mais curto): rotação segue slerp (grande círculo), translação segue uma linha reta no frame local da extremidade. Fórmula $T(s) = T_{start}\,\exp_6\big(\log_6(T_{start}^{-1} T_{end})\,s\big)$, onde $s \in [0, 1]$ é a fração do caminho.

2. **Camada de tempo** — escolher um perfil para determinar $s(\tau)$, com $\tau = t / \text{duration}$: LINEAR velocidade constante, MIN_JERK polinômio quíntico (padrão, velocidade e aceleração zero no início/fim), TRAPEZOID aceleração/desaceleração trapezoidal.

3. **Camada de amostragem** — em $dt = 0.02\ \text{s}$ (50 Hz) cortar $n$ frames em passos iguais; cada frame é $T(s(t))$, saindo como `CartesianTrajectory`: $(t = 0, T_{start}), (t = 0.02, T_1), \ldots, (t = \text{duration}, T_{end})$.

**Ideia central**: geometria (caminho) e tempo (ritmo) são desacoplados; a saída é toda em SE(3), sem conter informação de juntas, deixando para o CLIK resolver ao contrário.

**Carro em P3 (posição $(5, 0, 0)$), nariz voltado para leste (sem rotação)**

$$
T =
\begin{pmatrix}
1 & 0 & 0 & 5 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}
$$

**Carro movido: P3 inalterado, nariz agora voltado para o norte (rotacionado $90^\circ$ em torno de $z$)**

$$
T =
\begin{pmatrix}
0 & -1 & 0 & 5 \\
1 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}
$$

#### CLIK

Etapa 4: erro log6 -> sinal de realimentação

- Calcular a distância entre "onde a extremidade está" e "para onde a extremidade deve ir" como um torção de 6 dimensões
- Essas 6 dimensões são o sinal de erro $e$ em CLIK, equivalente ao desvio em um sistema de controle
- Os ângulos de Euler não são subtraídos diretamente, para evitar que o contorno de $360^\circ$ faça explodir o cálculo do erro

Etapa 5: solução de Jacobiano DLS -> controlador

- Este é o papel de "controlador" em CLIK
- Traduz o erro 6D da extremidade em quanto cada junta deve se mover
- DLS: $\Delta q = J^\top (J J^\top + \lambda^2 I)^{-1} e$, equivalente a minimizar $\|J\,\Delta q - e\|^2 + \lambda^2 \|\Delta q\|^2$
- O termo de amortecimento $\lambda^2 I$ impede que $\Delta q$ exploda quando $J$ se aproxima de uma singularidade (a pseudoinversa tende ao infinito em singularidades)

Etapa 6: iteração + busca linear -> estrutura em malha fechada

- Esta etapa dá o nome de "malha fechada"
- Cada rodada recalcula a FK -> recalcula o erro -> recalcula $\Delta q$, formando um laço de realimentação
- A busca linear $\alpha$ garante que cada atualização realmente reduza o erro, evitando oscilações
- Mesmo padrão do controle PID: medir o erro -> calcular o controle -> aplicar -> medir novamente

## 26.12 Controle de Cinemática Inversa para Trajetórias Suaves em Robôs Reais (`8_arm_traj_control.py`)

Usando cinemática inversa (IK) em modo MIT, dentro de um tempo alvo ele planeja automaticamente uma trajetória de movimento em velocidade constante ou com aceleração/desaceleração suave, evitando tremores violentos nas juntas.

**Formato de entrada**:

- Apenas posição: `<x> <y> <z>` (metros)
- Posição + orientação: `<x> <y> <z> <roll> <pitch> <yaw>` (graus)
- Posição + orientação + tempo (padrão 2.0): `<x> <y> <z> <roll> <pitch> <yaw> <time>` (graus)
- Digite `state`: ver os radianos atuais reais de cada junta.
- Digite `end_state`: ver as coordenadas reais (m) e ângulos de Euler (rad) da extremidade no espaço.

**Como executar**:

```Bash
uv run python example/8_arm_traj_control.py

*#Usage A*
> 0.3 0.0 0.4 *#position only, orientation defaults to 0, move time defaults to 2.0 s*

*#Usage B*
> 0.3 0.0 0.4 0.0 0.0 0.5 *#control position and orientation together: move to the target position while rotating the wrist yaw by 0.5 rad; move time defaults to 2.0 s*

*#Usage C*
> 0.3 0.0 0.4 0.0 0.0 0.0 5.0 *#move the arm to a specific position, taking 5.0 s to ease over there. (Note: if you input a time, the preceding orientation parameters 0 0 0 cannot be omitted)*

> ctrl + c *# exit the system*
```

## 26.13 Solução de Problemas dos Demos

| Sintoma | Causa provável | O que fazer |
| :--- | :--- | :--- |
| `ModuleNotFoundError: pinocchio` | Ambiente não sincronizado | Execute novamente `uv sync` dentro de `reBotArm_control_py` |
| Página do MeshCat abre mas fica vazia | O navegador bloqueou o websocket local | Use a URL impressa no terminal, tente outro navegador |
| `FileNotFoundError: ...urdf` | Diretório de trabalho incorreto | Execute a partir da raiz do repositório, como mostrado nos comandos |
| IK retorna `success: False` | Alvo fora da área de trabalho ou uma pose singular | Mova o alvo mais perto da base ou aumente o amortecimento |
| As juntas travam em um limite durante a IK | O alvo exige uma orientação inalcançável | Reduza a exigência de orientação ou altere a estimativa inicial `q_init` |

- **Pinocchio** transforma o URDF em um modelo cinemático; FK, Jacobianos e auxiliares de SE(3) vêm de uma única biblioteca.
- **MeshCat** oferece uma visualização no navegador dos mesmos números que o controlador usa — inestimável para depuração.
- As três demonstrações são a teoria dos Capítulos 23–25 tornada executável: **FK (pose a partir de ângulos)**, **IK (ângulos a partir de pose, DLS + busca linear)**, **planejamento de trajetória (geodésica + perfil de tempo + CLIK)**.
- No braço real, `8_arm_traj_control.py` mostra o mesmo pipeline acionando motores reais por meio de IK em modo MIT.


</div>
