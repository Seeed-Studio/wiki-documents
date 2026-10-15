---
description: "Capítulo 38 do Curso para Iniciantes em IA Física da Seeed — executando o reBot Arm no Isaac Sim: instalação e inicialização do Isaac Sim, estrutura da cena, noções básicas de USD, importação do braço com o URDF Importer, verificação de links, juntas, visuais e colisões, configuração da raiz de articulação e dos acionamentos das juntas, rigidez e amortecimento, o mecanismo do gripper, o chão e a bancada, controle em Python e quatro demonstrações práticas."
title: Capítulo 38 - Executando o reBot Arm no Isaac Sim
hide_title: true
keywords:
  - reBot
  - Braço Robótico
  - Isaac Sim
  - USD
  - Articulation
  - Joint Drive
  - Gripper
  - Simulação
  - Curso
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/rebot_physical_ai_course_chapter_38
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/pt-br/robotics/rebot_physical_ai_course_chapter_38/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 8 · Capítulo 38 · Prática</span>
    <h2>38. Executando o reBot Arm no Isaac Sim</h2>
    <p>
      Capítulo 38 do Curso para Iniciantes em IA Física da Seeed — executando o reBot Arm no Isaac Sim: instalação e inicialização do Isaac Sim, estrutura da cena, noções básicas de USD, importação do braço com o URDF Importer, verificação de links, juntas, visuais e colisões, configuração da raiz de articulação e dos acionamentos das juntas, rigidez e amortecimento, o mecanismo do gripper, o chão e a bancada, controle em Python e quatro demonstrações práticas.
    </p>
    <div className="hero-actions">
      <a href="#visão-geral">Visão geral do capítulo</a>
      <a href="#usd">Noções básicas de USD</a>
      <a href="#importar">Importar o braço</a>
      <a href="#demos">Demonstrações práticas</a>
    </div>
  </div>
</section>

Este capítulo explica a importação do modelo e o controle básico do braço reBotArm-RS no NVIDIA Isaac Sim. O Isaac Sim usa USD (Universal Scene Description) como formato de cena, o que é fundamentalmente diferente do MJCF do MuJoCo. Mapeamento de nomes de juntas, conversão de unidades do gripper, frequência de comunicação e projeto de segurança são abordados em detalhes no Capítulo 39 e não serão repetidos aqui; este capítulo foca apenas em conceitos e operações específicos do Isaac Sim.

> Permitir que os usuários dominem a importação do modelo do reBot Arm, a configuração de Articulation e o controle básico de juntas no Isaac Sim.
>
>

<a id="visão-geral"></a>

## 38.1 Instalando e Iniciando o Isaac Sim

O Isaac Sim é baseado na plataforma NVIDIA Omniverse e requer uma GPU RTX. Há duas maneiras de executá-lo:

1. **Aplicativo desktop**: baixe o instalador do Isaac Sim no site da NVIDIA e inicie a interface gráfica diretamente.
2. **Scripts Python**: execute em modo headless em um terminal por meio dos pacotes Python `isaaclab` ou `isaacsim`.

Após a inicialização, você entra na interface do Isaac Sim: à esquerda está a Stage Tree, à direita está o painel Property,

e no meio está o viewport 3D.

```bash
# Launch via a Python script (Isaac Sim 4.x+)
./python.sh my_script.py
```

Ponto-chave: o Isaac Sim é essencialmente um aplicativo Omn Kit; toda a funcionalidade é exposta por meio da API Python (`omni.isaac.*` / `isaacsim.*`), e as operações pela GUI e por script são equivalentes.

## 38.2 Entendendo a Estrutura de Cena do Isaac Sim

A cena do Isaac Sim é enraizada no **Stage** (stage USD), e cada objeto é um **Prim** (primitiva de cena).

Entender três níveis é suficiente:

```text
Stage (root)
  └── Prim (an object, e.g., arm, ground, workbench)
        └── child Prims (e.g., each link)
              └── Properties (e.g., joint, mesh, material)
```

Diferenças em relação ao MuJoCo:

|Conceito|MuJoCo (MJCF)|Isaac Sim (USD)|
|---|---|---|
|Raiz da cena|`<mujoco>`|Stage|
|Objeto|`<body>`|Prim|
|Junta|`<joint>`|Joint Prim (anexado sob um link)|
|Atuador|`<actuator>`|Joint Drive (propriedade USD)|
|Colisão|`<geom confluence>`|Collision API (anexada a uma malha)|

O MuJoCo define atuadores como elementos independentes; o Isaac Sim anexa o "drive" como uma propriedade Drive diretamente na junta. Esta é a diferença arquitetural mais fundamental entre os dois motores.

<a id="usd"></a>

## 38.3 Noções Básicas de Modelo USD

USD (Universal Scene Description) é um formato de descrição de cena desenvolvido pela Pixar; o Isaac Sim o utiliza em vez de URDF/MJCF.

### USD vs URDF

Este repositório já possui o arquivo URDF do braço RS:

O Isaac Sim não usa URDF diretamente; em vez disso, ele o converte para USD por meio do URDF Importer.

|Recurso|URDF|USD|
|---|---|---|
|Formato|XML|Binário/texto|
|Sobrescritas em camadas|Não suportado|Suporta referências e sobrescritas de Layer|
|Separação colisão/visual|tags `<visual>` / `<collision>`|Collision API / Mesh API|
|Acionamento de junta|Nenhum (requer controlador externo)|Propriedade Joint Drive embutida|
|Acoplamento com motor de física|Não acoplado|Pode vincular propriedades PhysX|

### Conceitos-chave de USD

- **Reference**: um arquivo USD referencia outro, semelhante ao `<include>` do MuJoCo.
- **Override**: modifica propriedades em cima de uma referência sem alterar o arquivo original.
- **Payload**: uma referência carregada sob demanda, usada para otimização de cenas grandes.
- **Variant**: diferentes variantes do mesmo modelo (por exemplo, "com gripper" e "sem gripper").

Resumo da estrutura do reBot Arm (a partir da análise do URDF):

```text
base_link
  └── joint1 (revolute, -2.8~2.8 rad) → link1
        └── joint2 (revolute, 0~3.14) → link2
              └── joint3 (revolute, 0~3.14) → link3
                    └── joint4 (revolute, -1.57~1.57) → link4
                          └── joint5 (revolute, -1.57~1.57) → link5
                                └── joint6 (revolute, -3.14~3.14) → link6
                                      └── j_gripper_end (fixed) → gripper_end
                                            ├── gripper_joint1 (prismatic, 0~0.05) → gripper_left
                                            └── gripper_joint2 (prismatic, 0~0.0715) → gripper_right
```

Seis juntas revolutas mais uma junta fixa conectam o efetuador final, e duas juntas prismáticas acionam os dedos esquerdo e direito do gripper.

<a id="importar"></a>

## 38.4 Importando o USD do reBot Arm

### URDF Importer

O Isaac Sim possui uma ferramenta URDF Importer integrada; o caminho de menu é:

```text
Isaac Utils → Workflows → URDF Importer
```

Ou use a API Python:

```python
from isaacsim.import_config.urdf import ImportConfig
from omni.importer.urdf import _urdf

import_config = ImportConfig()
import_config.merge_fixed_joints = False      # keep the fixed joint structure
import_config.make_default_prim = True
import_config.create_physics_scene = False     # do not recreate if a scene already exists
import_config.fix_base = True                 # fix the arm base
import_config.default_drive_type = _urdf.UrdfJointTargetType.JOINT_DRIVE_POSITION

_urdf.import_urdf(urdf_path, output_usd_path, import_config)
```

### Escolhas principais ao importar

1. **merge_fixed_joints**: defina como False para manter a junta fixa `j_gripper_end`; caso contrário

`gripper_end` é mesclado em `link6`. Mantê-la é mais intuitivo; mesclar é mais eficiente.

2. **fix_base**: defina como True para fixar `base_link` ao mundo, de modo que o braço não caia devido à gravidade.
3. **default_drive_type**: escolha o acionamento por posição (POSITION), para que ângulos-alvo possam ser enviados diretamente após a importação.

### Caminhos dos arquivos de malha

As malhas STL referenciadas pelo URDF estão no diretório `meshes_rs/`. O importador resolve automaticamente o prefixo `package://rebotarm_bringup/description/meshes_rs/`. Se a importação falhar, verifique a variável de ambiente `ROS_PACKAGE_PATH` ou altere manualmente os caminhos das malhas para caminhos absolutos.

## 38.5 Verificando Links e Juntas

Após a importação, verifique a estrutura na Stage Tree:

```text
/rebotarm_rs          ← root Prim
  /base_link
    /link1
      /link2
        ...
          /gripper_end
            /gripper_left
            /gripper_right
```

Princípio: o Isaac Sim converte o `<joint>` do URDF em Joint Prims USD. Uma junta revoluta se torna um `PhysicsRevoluteJoint`, uma junta prismática se torna um `PhysicsPrismaticJoint`, e uma junta fixa se torna um `PhysicsFixedJoint`. O eixo da junta, limites e outros atributos são mapeados diretamente para propriedades USD.

## 38.6 Verificando Visual e Colisão

Os `<visual>` e `<collision>` do URDF são anotados com diferentes APIs em USD:

```python
from pxr import UsdPhysics

# check collision bodies
for prim in stage.Traverse():
    if prim.HasAPI(UsdPhysics.CollisionAPI):
        print("Collision:", prim.GetPath())

# check visual meshes
for prim in stage.Traverse():
    if prim.IsA(UsdGeom.Mesh):
        print("Mesh:", prim.GetPath())
```

Princípio: o Isaac Sim não marca corpos puramente visuais com `<geom contype="0" conaffinity="0">` como o MuJoCo. Em USD, toda malha é renderizável por padrão; apenas malhas com `CollisionAPI` participam de colisão física. Isso significa que a mesma malha pode ser ao mesmo tempo visual e de colisão, ou apenas visual.

## 38.7 Configurando a Raiz de Articulation

Este é o conceito mais importante no Isaac Sim, sem equivalente direto no MuJoCo.

### O que é uma Raiz de Articulation

A Raiz de Articulation diz ao PhysX: "estas juntas e links formam um sistema articulado; resolva-o de forma unificada com o algoritmo de Featherstone

em vez de tratá-los como corpos rígidos independentes conectados por restrições."

```text
Without an Articulation Root:
  base_link ←constraint→ link1 ←constraint→ link2 ...
  each parent-child link pair is a separate constraint solver; with many joints this becomes unstable.

With an Articulation Root:
  [Articulation Root] → base_link → link1 → link2 → ...
  the whole kinematic chain is solved in one pass with the Featherstone algorithm, numerically stable.
```

### Como configurá-la

Adicione a `PhysicsArticulationRootAPI` em `base_link`:

```python
from pxr import UsdPhysics

base_link = stage.GetPrimAtPath("/rebotarm_rs/base_link")
UsdPhysics.ArticulationRootAPI.Apply(base_link)
```

Princípio: a Raiz de Articulation deve ser colocada no link raiz da cadeia cinemática. Para o reBot Arm isso é *`base_link`*. Se for colocada no link errado, o PhysX trunca a cadeia e as juntas a jusante perdem seu acionamento. O URDF Importer geralmente adiciona a Raiz de Articulation automaticamente, mas se você editar o USD manualmente, verifique se ela ainda está lá.

## 38.8 Configurando Joint Drives

### Princípio do Drive

O MuJoCo usa atuadores *`<motor>`* ou *`<position>`*, com torques de acionamento calculados externamente em Python. O Drive do Isaac Sim é um **controlador PD embutido na junta**; o torque é calculado dentro do PhysX:

```bash
tau = kp * (target_pos - current_pos) + kv * (target_vel - current_vel) + feedforward
#This is almost the same PD control formula as MuJoCo's physics mode; the difference is that Isaac Sim puts the PD loop inside the engine, while MuJoCo computes it in Python and writes it into `data.ctrl`.
```

### Como configurá-lo

```python
from pxr import UsdPhysics

joint_path = "/rebotarm_rs/base_link/link1/joint1"
joint = UsdPhysics.Joint.Get(stage, joint_path)

drive = UsdPhysics.DriveAPI.Get(joint, "angular")  # revolute joints use angular, prismatic use linear
drive.GetTargetPositionsAttr().Set([0.0])    # target angle
drive.GetTargetVelocitiesAttr().Set([0.0])  # target velocity
drive.GetStiffnessAttr().Set(80.0)          # kp
drive.GetDampingAttr().Set(5.0)             # kv
drive.GetMaxForceAttr().Set(36.0)           # torque limit
```

### Correspondência com os ganhos do robô real

O `Stiffness` e o `Damping` do Drive do Isaac Sim correspondem ao `kp` e `kd` em modo MIT do braço real.

Você pode usar diretamente os valores de configuração do robô real (veja [rebotarm_hardware.yaml]/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/src/rebotarm_bringup/config/rebotarm_hardware.yaml)):

```yaml
# Real-robot RS MIT gains
mit_kp: [80.0, 150.0, 150.0, 50.0, 50.0, 50.0]
mit_kd: [5.0, 10.0, 10.0, 5.0, 4.0, 4.0]
```

Preencha esses valores nas propriedades de Drive de cada junta, e o comportamento da simulação ficará próximo ao do robô real.

## 38.9 Definindo Stiffness e Damping das juntas

Princípios de ajuste para stiffness e damping:

1. **Stiffness muito baixo**: a junta fica macia, atinge o ângulo alvo lentamente e cede visivelmente sob carga.
2. **Stiffness muito alto**: a junta fica muito rígida, pode oscilar e o PhysX se torna numericamente instável.
3. **Damping muito baixo**: oscila após atingir o alvo, com overshoot evidente.
4. **Damping muito alto**: o movimento fica lento, como se estivesse se movendo em xarope.

Valores iniciais recomendados (correspondentes ao robô real):

|Junta|Stiffness (kp)|Damping (kd)|Força Máxima|
|---|---|---|---|
|joint1|80|5|36|
|joint2|150|10|36|
|joint3|150|10|36|
|joint4|50|5|14|
|joint5|50|4|14|
|joint6|50|4|14|

Estratégia de ajuste: comece com valores baixos para garantir que não haja oscilação, depois aumente gradualmente o stiffness até que a resposta seja rápida o suficiente e então aumente o damping para eliminar a oscilação residual. Não comece com valores altos.

## 38.10 Configurando a ligação do gripper

### O jeito Isaac Sim

O Isaac Sim não possui restrição de igualdade; ele usa **Mimic Joint** para ligação. A tag `<mimic>` do URDF é convertida durante a importação:

```python
# The mimic in URDF (if the URDF does not have it, you need to add it manually in USD)
# <mimic joint="gripper_joint1" multiplier="1.43" offset="0"/>
```

O URDF RS atual não possui tag `<mimic>`, então a ligação precisa ser configurada manualmente após a importação. Dois métodos:

**Método 1: PhysX Mimic Joint API**

```python
from pxr import UsdPhysics

left_joint = UsdPhysics.Joint.Get(stage, ".../gripper_joint1")
UsdPhysics.MimicAPI.Apply(left_joint)
mimic = UsdPhysics.MimicAPI(left_joint)
mimic.GetReferenceJointRel().SetTargetPath(".../gripper_joint2")
mimic.GetMultiplierAttr().Set(1.43)  # 0.0715 / 0.05 = 1.43
```

**Método 2: enviar comandos de forma síncrona no controle em Python**

Se você não usar a Mimic API, simplesmente envie o mesmo alvo para ambas as juntas do gripper no código de controle:

```python
# The left and right gripper strokes differ: left 0-0.05m, right 0-0.0715m
# When sending commands, scale by each stroke ratio
left_target = target_ratio * 0.05
right_target = target_ratio * 0.0715
```

Princípio: a igualdade do MuJoCo é uma restrição rígida no nível do motor de física; a Mimic API do Isaac Sim também é uma ligação em nível de motor, enquanto o Método 2 é uma ligação de software no nível de controle. O Método 1 é mais estável; o Método 2 é mais flexível.

## 38.11 Adicionando o chão e a bancada de trabalho

### Chão

O Isaac Sim possui uma ferramenta embutida de geração de chão:

```python
from isaacsim.core.api import World

world = World(stage_units_in_meters=1.0)
world.scene.add_default_ground_plane()  # add a Z=0 ground collision plane
```

`add_default_ground_plane()` cria um Prim de plano com uma CollisionAPI; o coeficiente de atrito padrão é

0,5. No MuJoCo o chão é `<geom type="plane"/>`; no Isaac Sim ele é uma malha de plano com colisão.

### Bancada de trabalho

Adicione um Box como bancada de trabalho:

```python
from isaacsim.core.api.objects import DynamicCuboid

table = DynamicCuboid(
    prim_path="/World/table",
    name="table",
    position=np.array([0.5, 0.0, 0.4]),  # table top height 0.4m
    scale=np.array([0.6, 0.6, 0.02]),     # 60cm x 60cm x 2cm
    color=np.array([0.5, 0.4, 0.3]),
)
```

### Um objeto de tarefa simples

```python
red_cube = DynamicCuboid(
    prim_path="/World/red_cube",
    name="red_cube",
    position=np.array([0.5, 0.0, 0.42]),
    scale=np.array([0.03, 0.03, 0.03]),   # 3cm cube
    color=np.array([1.0, 0.0, 0.0]),
)
```

Princípio: o Isaac Sim anexa propriedades de colisão e dinâmica diretamente aos Prims de objeto. `DynamicCuboid` cria automaticamente um corpo de colisão e uma API de corpo rígido; `FixedCuboid` cria apenas um corpo de colisão sem corpo rígido. Isso é mais conciso do que no MuJoCo, onde você precisa escrever `<geom contype>` e `<body>` separadamente em XML.

## 38.12 Controlando o braço com Python

### Articulation API

O Isaac Sim encapsula a interface de controle de todo o braço com a classe `Articulation`, então você não precisa operar junta por junta:

```python
from isaacsim.core.api import World
from isaacsim.core.primitives import Articulation

world = World()
world.scene.add_default_ground_plane()

robot = Articulation(prim_path="/rebotarm_rs")
world.reset()

# get joint information
num_joints = robot.num_joints
joint_names = robot.get_dof_names()
```

Princípio: `Articulation` chama internamente a Articulation API do PhysX para obter/definir todos os estados das juntas de uma só vez. Isso corresponde à forma do MuJoCo de operar juntas por meio dos arrays `data.qpos` e `data.ctrl`, mas encapsulado em uma interface de objeto Python.

<a id="demos"></a>

## 38.13 Demos de prática

### Demo 1: Carregando o USD do reBot Arm

**Princípio**: quando o Isaac Sim carrega um arquivo USD, ele constrói a árvore Stage, e o PhysX cria um corpo articulado para a subárvore de Prim com um Articulation Root. Malhas visuais são ligadas à camada de renderização; malhas com uma CollisionAPI são ligadas à camada de física.

```python
from isaacsim.core.api import World
from isaacsim.core.primitives import Articulation
import numpy as np

world = World(stage_units_in_meters=1.0)
world.scene.add_default_ground_plane()       # ground

# add the workbench
from isaacsim.core.api.objects import FixedCuboid
table = FixedCuboid(
    prim_path="/World/table", name="table",
    position=np.array([0.5, 0.0, 0.4]),
    scale=np.array([0.6, 0.6, 0.02]),
)

# add the task object
from isaacsim.core.api.objects import DynamicCuboid
cube = DynamicCuboid(
    prim_path="/World/red_cube", name="red_cube",
    position=np.array([0.5, 0.0, 0.42]),
    scale=np.array([0.03, 0.03, 0.03]),
    color=np.array([1.0, 0.0, 0.0]),
)

# load the arm (assuming the USD has been imported)
robot = Articulation(prim_path="/rebotarm_rs")
world.reset()

# verify the loading result
print("Number of joints:", robot.num_joints)
print("Joint names:", robot.get_dof_names())
```

**Resultado esperado**: a viewport 3D mostra o modelo do braço em pé sobre a bancada de trabalho no chão, com o cubo vermelho sobre a mesa. A Stage Tree mostra a hierarquia completa de base_link até gripper_right.

### Demo 2: Leitura dos estados das juntas

**Princípio**: `Articulation` lê os arrays de estado das juntas do corpo articulado a partir do PhysX a cada frame. Posição e velocidade são saídas do solver interno do PhysX, não lidas de sensores externos — assim como `data.qpos` / `data.qvel` do MuJoCo, elas são estados de simulação.

```python
world.step(render=True)  # first advance one physics frame

# joint positions (radians)
positions = robot.get_joint_positions()
print("Joint positions:", positions)

# joint velocities
velocities = robot.get_joint_velocities()
print("Joint velocities:", velocities)

# joint names and count
joint_names = robot.get_dof_names()
print("Joint names:", joint_names)
print("Number of joints:", robot.num_joints)

# end-effector pose (world frame)
ee_position, ee_orientation = robot.get_local_pose()  # end link pose
```

**Nota de princípio**: `get_joint_positions()` retorna um array NumPy cuja ordem corresponde a `get_dof_names()`. O Articulation Root determina quais juntas pertencem a esse corpo articulado; juntas fora do corpo articulado não podem ser lidas.

### Demo 3: Controle de posição das juntas

**Princípio**: após definir a posição alvo do Drive, o controlador PD dentro do PhysX calcula o torque a cada frame e aciona a junta. Você só precisa enviar o alvo uma vez; o motor conclui sozinho o processo de chegada. Isso difere do modo de física do MuJoCo, em que o Python calcula torques PD a cada frame e os escreve em `data.ctrl` — o Isaac Sim coloca o loop PD dentro do motor.

```python
# target pose (radians): zero all joints
target_positions = np.array([0.0, 0.0, 0.0, 0.0, 0.0, 0.0])

# Method 1: set the target through the Drive API
robot.set_joint_position_targets(target_positions)

# advance the simulation and let the PD controller drive to the target
for _ in range(100):
    world.step(render=True)

# check whether it has arrived
current = robot.get_joint_positions()
error = np.abs(current[:6] - target_positions)
print("Arrival error:", error)
```

Você também pode enviar um alvo diferente de zero para mover o braço para uma pose especificada:

```python
wave_pose = np.array([0.0, 0.5, 1.0, 0.0, 0.5, 0.0])  # raise the arm and wave
robot.set_joint_position_targets(wave_pose)
for _ in range(200):
    world.step(render=True)
```

**Nota de princípio**: `set_joint_position_targets` apenas atualiza a propriedade de posição alvo do Drive; ele não

aplica força diretamente. O torque real é determinado por `Stiffness` e `Damping`, e a velocidade de chegada depende desses dois parâmetros e

de `Max Force`.

### Demo 4: Controle do gripper

**Princípio**: as duas juntas prismáticas do gripper (gripper_joint1 e gripper_joint2) têm cursos diferentes (0,05 m e 0,0715 m), mas devem se mover em sincronia. O princípio é mapear a mesma razão de abertura/fechamento para as posições alvo de ambas as juntas simultaneamente.

```python
GRIPPER_LEFT_RANGE = 0.05      # gripper_joint1 stroke
GRIPPER_RIGHT_RANGE = 0.0715   # gripper_joint2 stroke

def set_gripper(robot, open_ratio: float):
    """open_ratio: 0=fully closed, 1=fully open"""
    open_ratio = max(0.0, min(1.0, open_ratio))
    left_target = open_ratio * GRIPPER_LEFT_RANGE
    right_target = open_ratio * GRIPPER_RIGHT_RANGE

    # assume the gripper joints come after the arm joints
    joint_names = robot.get_dof_names()
    arm_joints = 6  # the first 6 are arm joints

    positions = robot.get_joint_positions()
    positions[arm_joints]     = left_target    # gripper_joint1
    positions[arm_joints + 1] = right_target   # gripper_joint2
    robot.set_joint_position_targets(positions)

    for _ in range(50):
        world.step(render=True)

# open the gripper
set_gripper(robot, 1.0)

# close the gripper
set_gripper(robot, 0.0)

# half open
set_gripper(robot, 0.5)
```

**Observação de princípio**: aqui o encadeamento por software no nível de controle substitui a restrição física. Se a Mimic API estiver configurada (Método 1 em 38.10), você só precisa controlar uma junta e a outra a seguirá automaticamente. O exemplo atual usa sincronização por software, que é mais intuitiva e adequada para ensino.

**Pontos-chave da sincronização de dois dedos**

Os cursos dos garras esquerda e direita são diferentes, mas as direções de movimento são as mesmas (ambas abrem para fora), portanto use o mesmo `open_ratio` para escalar

cada limite de curso. Se as direções dos eixos das duas juntas fossem opostas (uma positiva e outra negativa), você também precisaria negar,

mas no URDF do reBot Arm, ambas as juntas da garra têm eixo `0 0 1`, então as direções são consistentes.

## 38.14 Resumo

As principais diferenças conceituais entre Isaac Sim e MuJoCo:

1. **Formato de modelo**: USD substitui MJCF, oferecendo suporte a referências em camadas e substituições.
2. **Corpo articulado**: o Articulation Root é um conceito específico do Isaac Sim, que entrega toda a cadeia cinemática ao algoritmo de Featherstone para solução uniforme. O MuJoCo não possui esse conceito; todos os corpos vivem naturalmente em uma única árvore.
3. **Método de acionamento**: Drive é um controlador PD embutido na junta, que calcula o torque dentro do PhysX. O atuador `<motor>` do MuJoCo calcula o torque externamente em Python e o escreve em `data.ctrl`.
4. **Vinculação da garra**: o Isaac Sim usa a Mimic API ou sincronização por software; o MuJoCo usa a restrição de igualdade.
5. **Anotação de colisão**: USD usa a CollisionAPI para distinguir corpos de colisão de corpos apenas visuais; o MuJoCo usa os atributos `contype` / `conaffinity`.

Depois que você dominar essas diferenças, o conteúdo sobre mapeamento de juntas, conversão de unidades, comunicação e projeto de segurança no Capítulo 39 poderá ser aplicado diretamente à cena do Isaac Sim.

---

</div>
