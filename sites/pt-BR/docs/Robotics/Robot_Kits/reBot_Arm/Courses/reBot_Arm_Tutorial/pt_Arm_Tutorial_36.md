---
description: "Capítulo 36 do Curso para Iniciantes em IA Física da Seeed — executando o reBot Arm no MuJoCo: instalando o ambiente de desenvolvimento MuJoCo, lendo a estrutura do modelo MJCF, importando o modelo do reBot Arm por meio dos pacotes ROS2, iniciando a simulação completa e acionando as juntas a partir da interface gráfica de controle deslizante do ROS2."
title: Capítulo 36 - Executando o reBot Arm no MuJoCo
hide_title: true
keywords:
  - reBot
  - Robotic Arm
  - MuJoCo
  - MJCF
  - ROS2
  - B601-RS
  - B601-DM
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/rebot_physical_ai_course_chapter_36
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/pt-br/robotics/rebot_physical_ai_course_chapter_36/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 8 · Capítulo 36 · Prática</span>
    <h2>36. Executando o reBot Arm no MuJoCo</h2>
    <p>
      Capítulo 36 do Curso para Iniciantes em IA Física da Seeed — executando o reBot Arm no MuJoCo: instalando o ambiente de desenvolvimento MuJoCo, lendo a estrutura do modelo MJCF, importando o modelo do reBot Arm por meio dos pacotes ROS2, iniciando a simulação completa e acionando as juntas a partir da interface gráfica de controle deslizante do ROS2.
    </p>
    <div className="hero-actions">
      <a href="#overview">Visão geral do capítulo</a>
      <a href="#install">Instalar o MuJoCo</a>
      <a href="#mjcf">O modelo MJCF</a>
      <a href="#import">Importar o braço</a>
    </div>
  </div>
</section>

O Capítulo 35 abordou a teoria de simulação; este capítulo é prático. O objetivo é simples: fazer o reBot Arm rodar no MuJoCo, observar seu movimento e entender a relação entre o modelo, as juntas e os comandos de controle.

Objetivo de ensino: permitir que os usuários concluam a primeira execução do reBot Arm no MuJoCo e entendam a relação entre o modelo do robô,

as juntas e os comandos de controle.

<a id="overview"></a>

## 36.1 Instalando o Ambiente de Desenvolvimento MuJoCo

Os bindings Python do MuJoCo são instalados via pip; não é necessária compilação de biblioteca C. O workspace do reBot Arm

usa um ambiente virtual (`.venv`) para gerenciar dependências Python, e o MuJoCo é instalado dentro dele.

**Método 1: usar o ambiente virtual integrado do workspace (recomendado)**

```bash
#RS:
cd ~/ReBot_Arm_DigitalTwin_RS
source scripts/rs_env.sh
python3 -c "import mujoco; print(mujoco.__version__)"

#DM:
cd ~/ReBot_Arm_DigitalTwin_DM/reBotArmController_ROS2-main
source scripts/source_rebotarm_env.sh
python3 -c "import mujoco; print(mujoco.__version__)"
```

Se a saída for algo como `3.10.0`, o MuJoCo está pronto. `source_rebotarm_env.sh` carrega automaticamente o ROS2, o ambiente virtual e o PYTHONPATH; todos os comandos subsequentes precisam fazer source nele primeiro.

**Método 2: instalação manual**

Se você não estiver no ambiente virtual do workspace, pode instalar com pip diretamente:

```bash
pip3 install mujoco
#MuJoCo 3.x is a pure pip package with built-in binary libraries; no extra system dependencies needed. After installation, `import mujoco` and `mujoco.viewer` are ready to use.
```

### Verificar a instalação do mujoco

```bash
python3 -c "
import mujoco
print('MuJoCo version:', mujoco.version)
print('GPU rendering:', mujoco.GL_CONTEXT_BACKENDS if hasattr(mujoco, 'GL_CONTEXT_BACKENDS') else 'auto')
"
```

### Resultado esperado

- **Sucesso**: se o ambiente estiver configurado corretamente, você verá uma saída semelhante à seguinte (o número da versão pode ser diferente):

```bash
MuJoCo version: 3.2.0
GPU rendering: ['egl', 'glfw']
```

- Ou `GPU rendering: auto` (dependendo das opções de compilação).
- **Falha**: se `mujoco` não estiver instalado ou o caminho não estiver configurado, será gerado um `ModuleNotFoundError`, indicando um problema de instalação.

<a id="mjcf"></a>

## 36.2 Entendendo a Estrutura do Modelo MJCF

MJCF (MuJoCo XML) é o formato de modelo nativo do MuJoCo. Um arquivo MJCF consiste nos seguintes elementos de nível superior:

|Element|Role|Embodiment in the reBot Arm|
|---|---|---|
|`<compiler>`|Opções de compilação: unidade de ângulo, sistema de coordenadas, caminho de malha|`angle="radian" coordinate="local" meshdir="../meshes"`|
|`<option>`|Parâmetros físicos: passo de tempo, gravidade, solver|`timestep="0.001" gravity="0 0 -9.81"`|
|`<visual>`|Parâmetros de renderização: luzes, neblina, visão global|`headlight`, `azimuth="135"`|
|`<asset>`|Declarações de recursos: malhas, materiais, texturas|10 malhas STL + vários materiais|
|`<default>`|Valores padrão: amortecimento de juntas, colisão de geometrias|`damping="0.8" armature="0.01"`|
|`<worldbody>`|Corpo do mundo: chão, luzes, câmeras, robô|Mesa, objetos, cadeia cinemática do braço|

Os arquivos MJCF do reBot Arm estão localizados em:

```bash
RS version (rebotarm_mujoco_rs package):
src/rebotarm_mujoco_rs/models/
  rs_arm.xml                   # physics model (STL mesh + full inertia + 7 actuators)
  rs_grasp_scene.xml            # grasping scene (with objects)
DM version (rebotarm_mujoco package):
src/rebotarm_mujoco/models/
  rebotarm_b601_stl.xml        # physics model (STL mesh + full inertia)
  rebotarm_b601_kinematic.xml  # kinematics model (simplified geometry + no inertia)
  rebotarm_b601_stl.xml         # physics model (STL mesh + full inertia, with scene objects)
  rebotarm_b601_kinematic.xml   # kinematics model (simplified geometry + no inertia)
  rebotarm_b601_colored.xml     # colored model (multi-material STL)
  simple_rebotarm.xml           # simplified model (primitive geometries)
```

Os dois modelos compartilham a mesma estrutura cinemática (nomes de juntas, eixos, limites). As diferenças são:

|Feature|STL model|Kinematics model|
|---|---|---|
|Visual|Malha STL (detalhada)|cápsula/esfera/cilindro (simplificado)|
|Inertial|Definido para cada elo|Em grande parte omitido|
|Collision|O gripper tem colisão em caixa|Sem colisão|
|timestep|0,001 s|0,002 s|
|Use|Simulação física, real2sim|Visualização leve|

Este capítulo usa o modelo STL, porque ele tem boa aparência e oferece suporte à simulação física.

<a id="import"></a>

## 36.3 Importando o Modelo do reBot Arm no MuJoCo

### Compilar os pacotes ROS2

```bash
#RS:
cd ~/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
colcon build --symlink-install
source install/setup.bash

#DM:
cd ~/ReBot_Arm_DigitalTwin_DM/reBotArmController_ROS2-main
source /opt/ros/jazzy/setup.bash
colcon build --symlink-install
source install/setup.bash
```

Após a compilação, o diretório share do pacote MuJoCo conterá os arquivos de modelo e as malhas STL:

```bash
# Verify the share directory (RS)
ros2 pkg prefix rebotarm_mujoco_rs
# output: ~/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/install/rebotarm_mujoco_rs
ls $(ros2 pkg prefix rebotarm_mujoco_rs)/share/rebotarm_mujoco_rs/models/
# meshes/  rs_arm.xml  rs_grasp_scene.xml

# Verify the share directory (DM)
ros2 pkg prefix rebotarm_mujoco
ls $(ros2 pkg prefix rebotarm_mujoco)/share/rebotarm_mujoco/models/
# rebotarm_b601_stl.xml  rebotarm_b601_kinematic.xml  rebotarm_b601_colored.xml  simple_rebotarm.xml
```

#### Iniciar via launch

```bash
#RS:
ros2 launch rebotarm_mujoco_rs mujoco_rs.launch.py use_viewer:=true
#DM:
ros2 launch rebotarm_mujoco real2sim.launch.py
```

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-36/ch36-01.png" alt="A cena de preensão do reBot Arm no visualizador MuJoCo" />
</div>

### Iniciar via ROS2 launch (com o ambiente completo)

```bash
#RS:
./scripts/start_rs_sim.sh
#DM:
./rebotarm start sim
or call the script directly:
~/ReBot_Arm_DigitalTwin_DM/reBotArmController_ROS2-main/scripts/start_rebot_mujoco_all.sh
```

### Controlando pela interface gráfica de controle deslizante de juntas do ROS2

O reBot Arm fornece uma interface gráfica de controle deslizante de juntas em Tkinter (joint_slider_gui.py) para controlar cada junta por meio de uma interface gráfica:

#### 1. Inicie a sim primeiro

```bash
#1. First start the sim (full physics simulation)
#RS:
cd ~/ReBot_Arm_DigitalTwin_RS
./scripts/start_rs_sim.sh
#DM:
cd ~/ReBot_Arm_DigitalTwin_DM
./rebotarm start sim
```

#### 2. Abra outro terminal

```bash
#The slider GUI defines 7 joint controls:
#RS:
source /opt/ros/jazzy/setup.bash
source ~/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/install/setup.bash
ros2 launch rebotarm_mujoco_rs joint_slider_gui.launch.py

#DM:
source /opt/ros/jazzy/setup.bash
source ~/ReBot_Arm_DigitalTwin_DM/reBotArmController_ROS2-main/install/setup.bash
ros2 launch rebotarm_mujoco joint_slider_gui.launch.py
```

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-36/ch36-02.png" alt="Acionando o braço simulado a partir da interface gráfica de controle deslizante de juntas do ROS2" />
</div>

<a id="faq"></a>

## 36.4 FAQ

**P1: O visualizador MuJoCo mostra uma tela preta ou trava após abrir. O que devo fazer?**

Isso geralmente é um problema de renderização da GPU. Tente definir o backend de renderização:

```bash
export MUJOCO_GL=egl    # use EGL (recommended, no display needed)
export MUJOCO_GL=glfw    # use GLFW (requires a desktop environment)
export MUJOCO_GL=osmesa  # use software rendering (slowest but most compatible)
```

Em servidores headless (por exemplo, via SSH), use `egl` ou `osmesa`.

**P2: "mesh file not found" ao carregar o MJCF. O que devo fazer?**

No MJCF, `meshdir="../meshes"` é um caminho relativo. Se você executar o script a partir de outro diretório, os arquivos de

malha podem não ser encontrados. Soluções:

1. Após compilar os pacotes ROS2, carregue a partir do diretório share (recomendado): ros2 pkg prefix rebotarm_mujoco_rs (RS) ou ros2 pkg prefix rebotarm_mujoco (DM)
2. Ou certifique-se de executar o script a partir do diretório models/ (seu diretório pai contém meshes/)
3. O mujoco_sync.py do RS resolve automaticamente os caminhos de malha; o DM precisa carregar a partir do diretório install

**P3: Depois de arrastar a interface gráfica de controle deslizante de juntas, o braço no MuJoCo não se move. O que devo fazer?**

Verifique os três elos:

1. O driver falso está em execução? RS: ros2 topic echo /rebotarm_rs/joint_states --once; DM: ros2 topic echo /rebotarm/joint_states --once
2. O nó de sincronização está inscrito no tópico correto? O RS assina /rebotarm_rs/joint_states por padrão; o DM assina /rebotarm/joint_states por padrão
3. O visualizador está aberto? O terminal deve mostrar que o nó de sincronização está pronto

Se o nome do tópico não corresponder, especifique-o com um parâmetro:

```bash
RS: REAL2SIM_JOINT_STATE_TOPIC=/rebotarm_rs/joint_states ./scripts/start_rs_sim.sh
DM: REAL2SIM_JOINT_STATE_TOPIC=/rebotarm/joint_states ./rebotarm start sim
```

**P4: Apenas um lado do gripper se move. O que devo fazer?**

RS: verifique se a restrição `equality` está configurada corretamente (`joint_left` e `joint_right` devem seguir `joint7`).

DM: verifique se tanto `finger_left` quanto `finger_right` recebem comandos. Se apenas `finger_left` for enviado sem um `target` para `finger_right`, somente um lado irá se mover.

**P5: Os objetos voam para longe no modo de apreensão com física. O que devo fazer?**

Os parâmetros de PD podem estar muito agressivos. Tente reduzir `arm_kp` e `arm_kd`:

```bash
RS: ros2 launch rebotarm_mujoco_rs mujoco_rs.launch.py simulation_mode:=physics arm_torque_limit:=10.0
DM: ros2 launch rebotarm_mujoco mujoco_physics_grasp.launch.py arm_torque_limit:=10.0
```

Reduzir o limite de torque do padrão 30.0 para 10.0 evita que os objetos sejam arremessados por torques excessivos nas juntas. Você também pode reduzir `control_hz` para diminuir a agressividade do loop de controle.

---

</div>
