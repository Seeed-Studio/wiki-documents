---
description: "Capítulo 37 do Curso para Iniciantes em IA Física da Seeed — cinemática e controle de trajetória no MuJoCo: espaço de juntas versus espaço cartesiano, leitura da pose do efetuador final, cinemática direta e inversa com o algoritmo DLS, posição e orientação alvo, interpolação de juntas, trajetórias lineares e de mínimo tranco, frequência de controle, limites de junta e quatro demos executáveis."
title: Capítulo 37 - Cinemática e Controle de Trajetória no MuJoCo
hide_title: true
keywords:
  - reBot
  - Robotic Arm
  - MuJoCo
  - Forward Kinematics
  - Inverse Kinematics
  - DLS
  - Trajectory
  - Minimum Jerk
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_37
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/pt-br/rebot_physical_ai_course_chapter_37/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 8 · Capítulo 37 · Teoria &amp; Prática</span>
    <h2>37. Cinemática e Controle de Trajetória no MuJoCo</h2>
    <p>
      Capítulo 37 do Curso para Iniciantes em IA Física da Seeed — cinemática e controle de trajetória no MuJoCo: espaço de juntas versus espaço cartesiano, leitura da pose do efetuador final, cinemática direta e inversa com o algoritmo DLS, posição e orientação alvo, interpolação de juntas, trajetórias lineares e de mínimo tranco, frequência de controle, limites de junta e quatro demos executáveis.
    </p>
    <div className="hero-actions">
      <a href="#overview">Visão geral do capítulo</a>
      <a href="#kinematics">Cinemática direta e inversa</a>
      <a href="#trajectory">Trajetórias</a>
      <a href="#demos">As quatro demos</a>
    </div>
  </div>
</section>

{/* TODO: this section of the original document ends with a screen recording (`2026-08-19%2017-21-02.mkv`, `2026-08-19%2017-03-15.mkv`). The file(s) are in 图片和附件/ but recordings are not published through the course CDN path - upload them and link them here once they are available. */}
> O Capítulo 36 fez o braço se mover no MuJoCo — mas isso era apenas controle no nível de “arrastar o slider”. Este capítulo sobe um nível: de “ângulos de junta” para “poses espaciais”, de “saltos instantâneos” para “trajetórias suaves”. Objetivo didático: permitir que os usuários pratiquem cinemática direta, cinemática inversa e controle de trajetória em um ambiente de simulação seguro, e observem os efeitos de diferentes métodos de controle.
>
>

<a id="overview"></a>

## 37.1 Espaço de Juntas e Espaço Cartesiano

O controle de robôs tem dois grandes sistemas de coordenadas; entender a diferença entre eles é o ponto de partida de todo planejamento de movimento.

### Espaço de Juntas

Você diz diretamente a cada junta “gire para quantos graus”. O espaço de juntas de um braço de 6 DOF é 6-dimensional, com cada dimensão correspondendo ao ângulo de um motor.

```text
Joint space goal = [j1, j2, j3, j4, j5, j6]  # unit: radians
```

Vantagens: direto, inequívoco, sem problema de inalcançável (desde que dentro dos limites).

Desvantagens: você não sabe para onde o efetuador final foi — é preciso usar cinemática direta para calculá-lo.

### Espaço Cartesiano

Você diz ao efetuador final “vá para qual ponto no espaço”. Use x, y, z para descrever a posição,

e uma matriz de rotação ou um quaternio para descrever a orientação.

```text
Cartesian goal = [x, y, z, qx, qy, qz, qw]  # position + orientation
```

Vantagens: intuitivo — “mova o efetuador final 30 cm acima da mesa”.

Desvantagens: é preciso cinemática inversa para traduzir a pose em ângulos de junta; pode não ter solução ou ter múltiplas soluções.

|Dimensão de comparação|Espaço de juntas|Espaço cartesiano|
|---|---|---|
|Grandeza descrita|6 ângulos de junta|3 de posição + 3 de orientação|
|Precisa resolver algo?|Não, envia diretamente|Precisa resolver a CI|
|Interface típica|`/rebotarm/follow_joint_trajectory`|`/rebotarm/move_to_pose`|
|Risco de singularidade|Nenhum|Sim (a matriz Jacobiana degenera em certas poses)|
|Cenários aplicáveis|Homing de juntas, poses pré-definidas|Apreensão, desvio de obstáculos, trajetórias espaciais|

> Em uma frase: o espaço de juntas é a “língua nativa do braço”, o espaço cartesiano é a “língua dos humanos”, e a cinemática é o intérprete entre eles.
>
>

## 37.2 Lendo a Pose do Efetuador Final

No MuJoCo, a pose do efetuador final é obtida por meio de objetos do tipo site. O reBot Arm define

um site chamado `tcp` no MJCF, fixado na extremidade da garra:

```xml
<site name="tcp" pos="-0.105 0 0" size="0.008" rgba="1 0.34 0.16 1"/>
```

`tcp` significa Tool Center Point — o ponto onde a garra segura os objetos. `pos="-0.105 0 0"` significa que ele está 10,5 cm à frente ao longo do eixo X; `size="0.008"` é o raio de exibição. Após cada `mj_forward` ou `mj_step`, o MuJoCo escreve as coordenadas no mundo de todos os sites em `data.site_xpos` e `data.site_xmat`:

```python
import mujoco
import numpy as np

model = mujoco.MjModel.from_xml_path("rebotarm_b601_stl.xml")
data = mujoco.MjData(model)

# write joint angles
data.qpos[:] = [0, -0.5, -1.0, 0, 0, 0, 0]
mujoco.mj_forward(model, data)

# read the TCP pose
tcp_id = mujoco.mj_name2id(model, mujoco.mjtObj.mjOBJ_SITE, "tcp")
position = data.site_xpos[tcp_id]          # [x, y, z]
rotation = data.site_xmat[tcp_id].reshape(3, 3)  # 3x3 rotation matrix

print(f"TCP position: {position}")
print(f"TCP rotation:\n{rotation}")
```

`site_xpos` é um array de comprimento 3 (xyz no referencial do mundo), e `site_xmat` é um array de comprimento 9 (uma matriz de rotação 3x3 achatada) que precisa ser remodelada.

<a id="kinematics"></a>

## 37.3 Cálculo da Cinemática Direta

Cinemática Direta (FK) significa “dados os ângulos de junta, encontrar a pose do efetuador final”. No código de simulação do reBot Arm, a implementação de FK é bem direta — não chama nenhuma biblioteca externa de CI e depende inteiramente do próprio mecanismo de cinemática do MuJoCo. O método central é

`_fk_pose` em `sim_task_server.py`. Veja também https://docs.mujoco.cn/en/stable/APIreference/APIfunctions.html

Pontos-chave:

|Etapa|Código|Função|
|---|---|---|
|Reiniciar estado|`qpos[:] = base_qpos`|Limpa o estado de junta anterior para evitar resíduos|
|Escrever ângulos de junta|`qpos[qpos_addr] = ...`|Escreve cada junta de acordo com os endereços internos do MuJoCo|
|Cálculo direto|`mj_forward`|Atualiza a cinemática sem integrar a física|
|Ler pose|`site_xpos / site_xmat`|Obtém a pose do efetuador final a partir do site TCP|

Note que aqui é usado `mj_forward`, não `mj_step`. `mj_forward` apenas faz o cálculo de cinemática direta (atualizando coordenadas de sites, Jacobianas etc.), sem integração física — mais rápido e mais limpo para cálculo de cinemática pura.

O método `ros_to_mujoco_position` lida com o mapeamento de ângulos de junta do ROS para ângulos de junta do MuJoCo (incluindo escala e deslocamento), garantindo que ambos os sistemas de coordenadas sejam consistentes.

## 37.4 Resolução de Cinemática Inversa

### Cinemática Inversa (IK)

CI significa “dada a pose do efetuador final, encontrar os ângulos de junta” — o núcleo do controle em espaço cartesiano. O reBot Arm não usa CI analítica (soluções em forma fechada), mas um método numérico — o Damped Least Squares (DLS) baseado na Jacobiana.

**Por que não usar a solução analítica?**

A CI analítica para um braço de 6 DOF exige condições geométricas específicas (por exemplo, um punho esférico), e a dedução é complexa e propensa a erros. Métodos numéricos não garantem otimalidade global, mas são gerais, concisos e aplicáveis a qualquer configuração.

### Princípio do algoritmo DLS

A equação central da CI padrão é `J * dq = dx`, onde J é a matriz Jacobiana, dx é o erro de pose do efetuador final, e dq é a correção do ângulo de junta. Inverter diretamente `dq = J^(-1) * dx` explode perto de singularidades (J não é invertível).

DLS adiciona um termo de amortecimento:

```text
dq = J^T * (J * J^T + lambda^2 * I)^(-1) * dx
```

onde lambda é o coeficiente de amortecimento. Lambda maior é mais estável, mas converge mais devagar; lambda menor é mais preciso, mas propenso a oscilações. Os parâmetros de CI do reBot Arm (definidos em `declare_parameter` de `sim_task_server.py`):

|Parâmetro|Valor padrão|Significado|
|---|---|---|
|`ik_iterations`|360|Número máximo de iterações|
|`ik_tolerance`|0.004|Limite de convergência de posição (4 mm)|
|`ik_damping`|0.035|Coeficiente de amortecimento lambda do DLS|
|`ik_orientation_weight`|0.75|Peso do erro de orientação|
|`ik_orientation_tolerance`|0.07|Limite de convergência de orientação|

## 37.5 Posição Alvo e Orientação Alvo

Metas em espaço cartesiano vêm em duas granularidades:

|Tipo de meta|Informação incluída|Comportamento da CI|
|---|---|---|
|Apenas posição|[x, y, z]|Otimiza apenas as coordenadas do efetuador final; a orientação é livre|
|Posição + orientação|[x, y, z, qx, qy, qz, qw]|Otimiza posição e orientação simultaneamente|

Na interface ROS2, as metas são passadas por meio da mensagem `Pose`. O método `_pose_to_matrix_if_requested` decide: se o quaternio estiver próximo de `[1, 0, 0, 0]` (quaternio identidade, ou seja, sem rotação), ele retorna `None` e a CI resolve apenas a posição; caso contrário, converte para uma matriz de rotação e a passa para o resolvedor de CI.

Na prática, o modo apenas posição é mais comum — tarefas de apreensão geralmente não se importam com a orientação do efetuador final, desde que o ponto alvo seja alcançado. Cenários que exigem orientação precisa (como montagem, conectar/desconectar) ativam a restrição de orientação.

## 37.6 Interpolação de Juntas

Com os ângulos de junta inicial e final, como fazer o braço ir “suavemente” de A para B?

O método mais simples é a interpolação linear:

```text
q(t) = q0 + (q1 - q0) * ratio       # ratio is in [0, 1]
```

Mas a interpolação linear tem um salto de velocidade no início e no fim (de 0 instantaneamente para a velocidade máxima), o que faz o braço tremer.

O reBot Arm usa interpolação smoothstep (Hermite cúbica) no método `_execute_joint_path`:

```python
ratio = self._clamp((now - t0) / (t1 - t0), 0.0, 1.0)
eased = ratio * ratio * (3.0 - 2.0 * ratio)
q = q0 + (q1 - q0) * eased
```

Essa função tem derivada zero em `ratio=0` e `ratio=1`, o que significa que as velocidades de início e fim

são zero — o braço começa suavemente e para suavemente.

|Método de interpolação|Fórmula|Velocidade de início/parada|Aceleração contínua|Cenários aplicáveis|
|---|---|---|---|---|
|Linear|`ratio`|Salto|Não|Testes simples|
|Smoothstep|`ratio^2 * (3 - 2*ratio)`|Zero|Não|Movimento suave geral|
|Mínimo Tranco|`10*r^3 - 15*r^4 + 6*r^5`|Zero|Sim|Trajetórias de alta precisão|

## 37.7 Trajetórias Lineares

Uma trajetória linear significa que o efetuador final se move em linha reta no espaço cartesiano. Há duas abordagens de implementação:

### Método 1: interpolação em espaço de juntas (não é uma linha reta cartesiana)

Interpolar diretamente no espaço de juntas — o efetuador final na verdade percorre um arco, não uma linha reta. O `_execute_joint_path` do reBot Arm é essa abordagem. Simples, rápido, nunca atinge singularidades, mas o caminho do efetuador final é imprevisível.

### Método 2: linha reta em espaço cartesiano

Interpolar linearmente a pose do efetuador final em espaço cartesiano, convertendo de volta para ângulos de junta com CI a cada passo:

```python
for t in np.linspace(0, 1, n_steps):
    target_pos = start_pos + (end_pos - start_pos) * t
    q = solve_ik(target_pos, current_q)
    publish(q)
```

Essa abordagem faz o efetuador final percorrer uma linha reta verdadeira, mas cada passo precisa de uma solução de IK (computacionalmente pesada) e pode atingir singularidades que fazem o IK não convergir.

|Dimensão de comparação|Interpolação no espaço de juntas|Linha reta no espaço cartesiano|
|---|---|---|
|Trajetória do efetuador final|Arco|Linha reta|
|Carga de computação|Baixa (interpolação direta)|Alta (IK a cada passo)|
|Risco de singularidade|Nenhum|Sim|
|Padrão do reBot Arm|Sim|Não|

<a id="trajectory"></a>

## 37.8 Trajetórias de Jerk Mínimo

Jerk Mínimo é um método de planejamento de trajetória ótimo que minimiza a integral do “jerk” (a derivada da aceleração). Sua fórmula é:

```text
s(t) = 10*t^3 - 15*t^4 + 6*t^5       # t is in [0, 1]
```

Características:

- Posição, velocidade e aceleração são todas zero no início e no fim
- A aceleração é contínua, sem saltos
- Movimento extremamente suave, adequado para tarefas de alta precisão

Atualmente o reBot Arm usa smoothstep (Hermite cúbico), que equilibra bem suavidade e custo computacional. Se for necessária maior precisão, ele pode ser substituído por Jerk Mínimo:

```python
def minimum_jerk(ratio):
    return 10 * ratio**3 - 15 * ratio**4 + 6 * ratio**5

# replace eased in _execute_joint_path
eased = minimum_jerk(ratio)
```

## 37.9 Frequência de Controle da Trajetória

O parâmetro central da execução da trajetória é a frequência de controle (`command_hz`), isto é, quantos comandos de junta são enviados para a simulação por segundo.

A configuração padrão do reBot Arm:

|Parâmetro|Valor padrão|Significado|
|---|---|---|
|`command_hz`|60 Hz|Frequência de envio de comandos de trajetória|
|`max_joint_speed`|1.4 rad/s|Limite máximo de velocidade das juntas|
|`record_hz`|30 Hz|Frequência de amostragem de gravação|

O loop central de `_execute_joint_path`:

```python
period = 1.0 / self.command_hz  # 1/60 = 0.0167s

while True:
    now = time.monotonic() - started
    ratio = clamp((now - t0) / (t1 - t0), 0.0, 1.0)
    eased = ratio * ratio * (3.0 - 2.0 * ratio)
    q = q0 + (q1 - q0) * eased
    self._publish_joint_targets(q)
    if ratio >= 1.0:
        break
    time.sleep(period)
```

60 Hz significa que um comando é enviado a cada 16,7 ms. Para um braço de 6 DOF, essa frequência é suficientemente suave — o olho humano não consegue perceber saltos acima de 30 Hz. Mas atenção: `command_hz` é a frequência da camada de trajetória, não da camada de física. A simulação física

(`mujoco_physics_grasp.py`) roda em `control_hz=500`, isto é, controle de torque PD a cada 2 ms. Esses são loops de controle em camadas diferentes:

|Camada de controle|Frequência|Módulo responsável|Tipo de comando|
|---|---|---|---|
|Loop de controle de física|500 Hz|`mujoco_physics_grasp`|Torque PD|
|Loop de controle de trajetória|60 Hz|`sim_task_server`|Metas de posição de junta|
|Loop de publicação de estado|30 Hz|`real2sim_sync`|JointState|
|Loop de amostragem de gravação|30 Hz|`sim_task_server`|Registros CSV|

## 37.10 Limites de Alcance e Velocidade das Juntas

### Alcance das juntas

Os limites das 6 juntas e da garra do reBot Arm são definidos no MJCF. Durante a solução de IK, a cada passo os ângulos das juntas são atualizados e restringidos dentro do alcance por meio do método `clamp_ros`:

```python
def ros_to_mujoco_position(self, value: float) -> float:
    mapped = float(value) * self.scale + self.offset
    if self.lower is not None:
        mapped = max(mapped, self.lower)
    if self.upper is not None:
        mapped = min(mapped, self.upper)
    return mapped
```

### Limites de velocidade

Durante a execução da trajetória, cada comando de junta carrega um limite de velocidade `vlim`:

```python
msg = JointMotorCmd()
msg.use_pos = True
msg.use_vlim = True
msg.vlim = float(self.max_joint_speed)  # 1.4 rad/s
```

`max_joint_speed=1.4` rad/s é cerca de 80 deg/s. Esse valor limita o limite superior da velocidade angular das juntas, impedindo que o braço se mova em velocidades perigosas.

A duração da trajetória é determinada pelas diferenças de juntas entre o início e o fim e pelo limite de velocidade:

```text
Minimum time = max(|q1[i] - q0[i]| / max_joint_speed)   for each joint i
```

Por exemplo, a junta2 indo de 0 para -1,57 rad: tempo mínimo = 1,57 / 1,4 = 1,12 segundos.

Se o `duration` especificado for menor que o tempo mínimo, o braço se move na velocidade máxima (`max_joint_speed`) e pode terminar antes de alcançar o alvo — portanto, deixe margem suficiente em `duration`.

<a id="demos"></a>

## 37.11 Demo 1: Cinemática Direta

Objetivo: inserir um conjunto de ângulos de junta, calcular e exibir a pose do efetuador final (TCP). Este Demo não precisa iniciar o ROS2 —

apenas chamadas Python do MuJoCo, verificando se o mapeamento de ângulo de junta para posição final está correto.

```python
DM:
cd ~/ReBot_Arm_DigitalTwin_DM/reBotArmController_ROS2-main
source scripts/source_rebotarm_env.sh
python3 demo1_fk.py
RS:
cd ~/ReBot_Arm_DigitalTwin_RS
source scripts/rs_env.sh
python3 demo1_fk.py
```

A saída esperada é semelhante a:

```text
Model: DM (rebotarm_b601_stl.xml)

--- Pose 1 ---
Joint angles: [0, 0, 0, 0, 0, 0]
TCP position: x=0.1553, y=0.0000, z=0.1917
TCP rotation matrix:
  [1.0000 0.0000 -0.0000]
  [0.0000 1.0000 0.0001]
  [0.0000 -0.0001 1.0000]

--- Pose 2 ---
Joint angles: [0, -0.5, -1.0, 0, 0, 0]
TCP position: x=0.1141, y=0.0000, z=0.5034
TCP rotation matrix:
  [0.8776 0.0000 -0.4794]
  [0.0000 1.0000 0.0001]
  [0.4794 -0.0001 0.8776]

--- Pose 3 ---
Joint angles: [0, -0.8, -1.5, 0.5, 0, 0]
TCP position: x=0.1409, y=0.0000, z=0.5559
TCP rotation matrix:
  [0.9801 0.0000 -0.1987]
  [0.0000 1.0000 0.0001]
  [0.1987 -0.0001 0.9801]

```

O Demo 1 é puramente computacional: carregar o modelo MJCF -> definir ângulos de junta -> calcular a cinemática direta com `mj_forward` -> imprimir a pose do TCP. Todo o processo acontece em memória: sem viewer, sem tópicos ROS2, sem driver falso, portanto o braço não se move. Apenas chamadas Python do MuJoCo. Ele verifica se o mapeamento de ângulo de junta para pose final está correto — se você medir manualmente a posição final do braço na pose zero, ela deve coincidir com o resultado de FK.

## 37.12 Demo 2: Cinemática Inversa

**Objetivo**: dado uma posição alvo, resolver os ângulos de junta e mover o braço até lá. Use a interface de Service do ROS2 `/rebotarm/move_to_pose_ik`:

Antes de executar, você precisa iniciar a pilha de simulação:

```bash
RS:
cd ~/ReBot_Arm_DigitalTwin_RS
./scripts/start_rs_sim.sh
DM:
cd ~/ReBot_Arm_DigitalTwin_DM
./rebotarm start sim

# Terminal 2: run the IK client
python3 demo2_ik.py
```

Saída esperada:

```text
Namespace: /rebotarm
Success: True
Message: IK success, error=9.6 mm, orient=0.000
Joint solution: [-0.3425787656649655, -1.5209255751808715, -0.707446304651899, -0.39301552902275094, 0.08498990704705993, -4.1821209004842323e-07]
```

Observação: move_to_pose_ik apenas retorna a solução de juntas; ele não executa o movimento. Para ver o braço realmente se mover até lá, use a interface de Action no Demo 3.

error indica a distância (em mm) entre a posição final resolvida pelo IK e o alvo. O script de launch define ik_tolerance como 0,020 (20 mm); um erro dentro de 20 mm é considerado sucesso.

## 37.13 Demo 3: Controle de Trajetória

**Objetivo**: mover o efetuador final até o ponto alvo do objeto e observar o efeito de transição suave.

Use a interface de Action `/rebotarm/move_to_pose` para executar trajetórias multi-segmento:

1. Certifique-se de que a pilha de simulação está em execução
2. Execute o script

```bash
./rebotarm start web
```

3. Observe o movimento do braço no viewer do MuJoCo

**Experimento de comparação**: para comparar a diferença entre interpolação linear e smoothstep, você pode modificar

a função de interpolação de `_execute_joint_path` em `sim_task_server.py`:

```python
# Linear interpolation (will shake)
eased = ratio

# Smoothstep (current default)
eased = ratio * ratio * (3.0 - 2.0 * ratio)

# Minimum Jerk (smoothest)
eased = 10 * ratio**3 - 15 * ratio**4 + 6 * ratio**5
```

Execute cada uma e observe o movimento do efetuador final: a interpolação linear tem trepidações óbvias nas trocas de waypoints, smoothstep inicia e para suavemente, e Jerk Mínimo é extremamente suave em todo o percurso.

## 37.14 Demo 4: Uma Ação Simples de Grasping

**Objetivo**: colocar um bloco na cena e completar o fluxo de pick-and-place.

A cena já tem três objetos (definidos no MJCF `rebotarm_b601_stl.xml`):

|Objeto|Posição [x, y, z]|Cor|
|---|---|---|
|red_cube|[0.34, -0.13, 0.061]|Cubo vermelho|
|blue_block|[0.50, 0.11, 0.055]|Bloco azul|
|yellow_cylinder|[0.44, -0.02, 0.065]|Cilindro amarelo|

Fluxo de grasping:

```text
Move above the object -> descend -> close the gripper -> lift -> move to the target position -> open the gripper
```

Execute:

```bash
# Terminal 1: start the physics simulation (physics grasp mode is needed to grasp objects)
./scripts/start_rebot_mujoco_all.sh

# Terminal 2: run the grasping demo on the web page
./rebotarm start web
```

## 37.15 FAQ

**P1: A solução de IK falha (erro > 20 mm). O que devo fazer?**

Causas comuns:

1. A posição alvo está fora da área de trabalho — o alcance do reBot Arm é de cerca de 50 cm; alvos muito distantes não têm solução
2. O alvo está próximo de uma singularidade — por exemplo, quando o efetuador final está totalmente estendido, a matriz Jacobiana se degenera
3. Os limites de junta impedem a convergência — algumas poses exigem que as juntas excedam os limites para serem alcançadas

Soluções: ajuste a posição alvo ou aumente `ik_tolerance` e `ik_damping`:

```bash
ros2 launch rebotarm_mujoco mujoco_sim_task_server.launch.py \
  ik_tolerance:=0.010 ik_damping:=0.05
```

**P2: O braço treme durante a execução da trajetória. O que devo fazer?**

Verifique se `command_hz` está muito baixo (abaixo de 30 Hz causa trepidação visível). Os 60 Hz padrão geralmente são suficientes.

Se estiver usando o modo de física, verifique se os parâmetros PD são apropriados — um `arm_kp` muito grande causa oscilações.

**P3: O objeto é empurrado para longe durante o grasping. O que devo fazer?**

No modo de física, o torque PD está muito alto. Reduza `arm_torque_limit`:

```bash
ros2 launch rebotarm_mujoco mujoco_physics_grasp.launch.py \
  arm_torque_limit:=10.0
```

Você também pode reduzir a velocidade de descida (aumentar o parâmetro `duration`) para que a garra se aproxime do objeto lentamente.

**P4: Qual é a diferença entre `move_to_pose` e `move_to_pose_ik`?**

|Interface|Tipo|Comportamento|
|---|---|---|
|`/rebotarm/move_to_pose_ik`|Service|Apenas resolve IK e retorna os ângulos das juntas; não executa o movimento|
|`/rebotarm/move_to_pose`|Action|Resolve IK + executa uma trajetória suave; oferece suporte a feedback e cancelamento|

**P5: Como alternar entre o modo cinemático e o modo físico?**

```bash
# Kinematics mode (directly writes qpos, no physical interaction)
MUJOCO_GRASP_MODE=kinematic ./scripts/start_rebot_mujoco_all.sh

# Physics mode (PD torque control, can grasp objects)
MUJOCO_GRASP_MODE=physics ./scripts/start_rebot_mujoco_all.sh
```

O modo cinemático é adequado para depurar cinemática e planejamento de trajetória; o modo físico é adequado para testar preensão e interação.

**P6: Qual é a diferença entre `mj_forward` e `mj_step`?**

`mj_forward` apenas realiza o cálculo direto (cinemática, Jacobiano, coordenadas de sites), sem integração física.

`mj_step` também realiza a integração física (forças, contatos, colisões) além do que faz `mj_forward`.

Use `mj_forward` para cálculo puro de IK/FK e `mj_step` para simulação física.

- O espaço de juntas é a linguagem nativa do braço, o espaço cartesiano é a linguagem humana, e a cinemática é o intérprete.
- `mj_forward` calcula a cinemática, `mj_step` calcula a dinâmica — o primeiro olha apenas para a geometria, o segundo de fato calcula a física.
- Adicionar amortecimento em DLS não é um compromisso, mas sim sabedoria de engenharia — é melhor convergir um pouco mais devagar do que explodir em uma singularidade.
- Smoothstep faz o braço "começar de leve e chegar de forma estável"; Minimum Jerk o deixa "suavemente fluido o tempo todo".
- 60 Hz envia comandos, 500 Hz calcula torques, 30 Hz publica estados — três malhas de controle, cada uma com sua própria função.

---

</div>
