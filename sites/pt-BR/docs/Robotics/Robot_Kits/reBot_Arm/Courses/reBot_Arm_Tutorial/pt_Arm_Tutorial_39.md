---
description: "Capítulo 39 do Curso para Iniciantes em IA Física da Seeed — Sincronização Real-para-Sim: mapeando em tempo real os estados das juntas do braço real para o MuJoCo, conversão de unidades entre DM e RS, frequências de comunicação, UDP versus ROS2, atualização de estado e latência, sincronização do estado do gripper, o design de segurança do programa de sincronização e dois fluxos de trabalho de demonstração."
title: Capítulo 39 - Sincronizando os Braços Real e Simulado
hide_title: true
keywords:
  - reBot
  - Robotic Arm
  - Real-to-Sim
  - Digital Twin
  - MuJoCo
  - ROS2
  - Latency
  - Gravity Compensation
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_39
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/pt-br/rebot_physical_ai_course_chapter_39/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 8 · Capítulo 39 · Prática</span>
    <h2>39. Sincronizando os Braços Real e Simulado</h2>
    <p>
      Capítulo 39 do Curso para Iniciantes em IA Física da Seeed — Sincronização Real-para-Sim: mapeando em tempo real os estados das juntas do braço real para o MuJoCo, conversão de unidades entre DM e RS, frequências de comunicação, UDP versus ROS2, atualização de estado e latência, sincronização do estado do gripper, o design de segurança do programa de sincronização e dois fluxos de trabalho de demonstração.
    </p>
    <div className="hero-actions">
      <a href="#overview">Visão geral do capítulo</a>
      <a href="#units">Unidades e frequências</a>
      <a href="#transport">UDP, Socket ou ROS2</a>
      <a href="#safety">Design de segurança</a>
    </div>
  </div>
</section>

{/* TODO: this section of the original document ends with a screen recording (`重力补偿.mp4`). The file(s) are in 图片和附件/ but recordings are not published through the course CDN path - upload them and link them here once they are available. */}
Using the actual source code of the reBotArm-RS project as an example, this chapter explains how to synchronize the joint states of the real arm to the MuJoCo simulation environment in real time. All code references point to the real files in this repository and can be read side by side.

<a id="overview"></a>

## 39.1 O que é Real-para-Sim

Real-para-Sim significa transmitir em tempo real os ângulos das juntas, velocidades, torques e outros estados do braço físico real para o ambiente de simulação, de modo que o braço virtual reproduza de forma síncrona o movimento do braço real. É a direção oposta de Sim-para-Real: Sim-para-Real treina políticas em simulação e depois as implanta no robô real, enquanto Real-para-Sim mapeia o estado do robô real para o modelo virtual.

Usos típicos de Real-para-Sim:

1. Gêmeo digital: observar em tempo real a pose do braço real em uma página web sem olhar para o dispositivo físico.
2. Gravação e reprodução: gravar o movimento do braço real como dados de trajetória e reproduzi-lo repetidamente na simulação para depuração.
3. Monitoramento de segurança: o ambiente de simulação pode sobrepor capacidades que o braço real não possui, como detecção de colisão e visualização do espaço de trabalho.
4. Reprodução de ensino: arrastar manualmente o braço real (modo de compensação de gravidade) enquanto o modelo de simulação segue de forma síncrona, usado para coletar dados de ensino.

Neste projeto, a cadeia central de Real-para-Sim é:

```text
Real RobStride motors → SocketCAN can0 → MotorBridge SDK state cache
→ HardwareManager._get_arm_state() → ROS JointState topic (60 Hz)
→ MuJoCo Sync node subscribes → MuJoCo qpos update → virtual arm moves
```

Arquivos-fonte principais:

- Leitura e cache do estado de hardware: `hardware_manager.py`
- Publicação de estados de juntas em ROS: `ros_publishers.py`
- Nó de sincronização do MuJoCo: `mujoco_sync.py`
- Driver falso no lado da simulação: `fake_rs_driver.py`

<a id="units"></a>

## 39.2 Conversão de Unidades de Juntas entre DM e RS

DM (motores Damiao) e RS (motores RobStride) usam radianos como unidade de ângulo, mas as unidades do gripper diferem significativamente —

este é um elo propenso a erros na sincronização.

### Juntas do braço

As seis juntas do braço, tanto de DM quanto de RS, usam radianos, e o modelo MuJoCo também usa radianos (`<compiler angle="radian"/>`),

portanto as juntas do braço não precisam de conversão de unidade.

### Diferenças de unidade do gripper

O gripper envolve quatro grandezas diferentes com unidades distintas:

|Grandeza|Faixa|Unidade|Uso|
|---|---|---|---|
|Ângulo do motor do gripper RS|0-5|rad|Comandos e feedback do SDK do robô real|
|Largura de abertura do gripper na Web/tarefa|0-0.0715|m|Semântica de comando do usuário|
|Estado de um único dedo em ROS|0-0.045|m|Deslocamento visual após mapeamento pelo publicador de estado|
|Deslocamento do gripper no MuJoCo|0-0.05|m|Curso de deslizamento da junta 7 na simulação|

## 39.3 Frequências de Comunicação

Existem vários elos com frequências diferentes na cadeia de Real-para-Sim; entender suas relações é a base para solucionar problemas de latência e travamentos.

|Elo|Frequência|Descrição|
|---|---|---|
|Loop de controle do robô real RS|125 Hz|Os comandos MIT finalmente enviados aos motores|
|Polling de feedback de hardware para sincronização|20 Hz|Consulta estados do RobStride e atualiza o cache|
|Publicação de estados de juntas em ROS|60 Hz|Publica o tópico JointState a partir do cache|
|Sincronização da simulação MuJoCo|250 Hz|Frequência de passo da simulação|
|Navegador recebendo estados do MuJoCo|Até 25 Hz|Assinatura do rosbridge limitada a 40 ms|
|Renderização no navegador|Cerca de 60 Hz|requestAnimationFrame|

Pontos-chave a entender:

- A página web envia comandos em até 60 Hz, o que não significa que os motores sejam controlados apenas a 60 Hz. Depois que o controlador RS recebe um novo alvo, ele continua gerando e enviando comandos MIT com seu próprio loop de 125 Hz.
- O feedback de hardware atualiza o cache a 20 Hz, e o ROS publica a partir do cache a 60 Hz. O loop MIT em tempo real não faz consultas síncronas de parâmetros via CAN.
- O MuJoCo executa passos a 250 Hz, mas sua entrada vem do tópico ROS de 60 Hz, então o MuJoCo mantém o último alvo entre entradas adjacentes.

<a id="transport"></a>

## 39.4 Comunicação via UDP, Socket ou ROS2

Este projeto escolhe tópicos ROS2 como camada de comunicação para Real-para-Sim, em vez de UDP ou Sockets brutos. Entender o motivo dessa escolha ajuda a tomar decisões corretas de arquitetura em outros cenários.

### Por que ROS2

1. Abstração de tópicos: `sensor_msgs/JointState` é um tipo de mensagem padrão; publicadores e assinantes não precisam concordar sobre o formato dos dados.
2. Políticas de QoS: `qos_profile_sensor_data` fornece confiabilidade BEST_EFFORT e pequena profundidade, adequado para dados de sensores de alta frequência.
3. Comunicação muitos-para-muitos: um único tópico de estado de juntas pode ser assinado pelo nó de sincronização do MuJoCo, pela página web, por logging e por vários outros nós ao mesmo tempo.
4. Integração com o ecossistema: o rosbridge pode fazer a ponte diretamente entre tópicos ROS e WebSocket, então a página web não precisa de uma camada extra de comunicação.

### Topologia de tópicos

```text
/rebotarm/joint_states          ← published by the real-robot controller (60 Hz)
    ↓
MuJoCo Sync node subscribes
    ↓
/rebotarm/mujoco/joint_states   ← published by the MuJoCo sync node (250 Hz)
    ↓
rosbridge WebSocket → browser
```

A assinatura e a publicação do nó de sincronização do MuJoCo são definidas em `mujoco_sync.py`:

```python
self.subscription = self.create_subscription(
    JointState, input_topic, self._joint_state_callback, qos_profile_sensor_data,
)
self.publisher = self.create_publisher(
    JointState, output_topic, qos_profile_sensor_data,
)
```

### Isolamento por namespace

O robô real e a simulação usam namespaces diferentes para evitar conflitos de tópicos:

|Ambiente|Namespace padrão|Script de lançamento|
|---|---|---|
|Robô real|`/rebotarm`|`scripts/start_rs_hardware.sh`|
|Driver falso + MuJoCo|`/rebotarm_rs`|`scripts/start_rs_sim.sh`|
|MuJoCo seguindo o robô real|`/rebotarm` (seguindo)|`scripts/start_rs_mujoco_follow.sh`|

No cenário de Real-para-Sim, o nó de sincronização do MuJoCo assina o `/rebotarm/joint_states` do robô real, e seu próprio

namespace também é definido como `rebotarm`, mas ele apenas assina e nunca envia comandos para os motores, portanto não entra em conflito com o controlador do robô real.

### Alcance de descoberta do DDS

`rs_env.sh` restringe o alcance de descoberta do DDS ao host local, evitando que nós se percam após roaming de Wi-Fi:

```bash
export ROS_AUTOMATIC_DISCOVERY_RANGE="${REBOTARM_ROS_DISCOVERY_RANGE:-LOCALHOST}"
```

### Cenários aplicáveis de UDP vs ROS2

|Recurso|Tópicos ROS2|UDP|
|---|---|---|
|Latência|Na ordem de milissegundos, com overhead do middleware DDS|Mais baixa, na ordem de microssegundos|
|Confiabilidade|Configurável BEST_EFFORT / RELIABLE|Precisa ser implementada por você|
|Múltiplos assinantes|Suportado nativamente|É preciso implementar broadcast por conta própria|
|Ferramentas de depuração|ros2 topic echo / hz|Precisam ser implementadas por você|
|Cenários aplicáveis|Colaboração multi-nó, precisa do ecossistema|Latência ultrabaixa ponto-a-ponto|

Os requisitos de latência deste projeto (estados a 60 Hz, aceitável ao olho humano) estão muito longe de exigir UDP; tópicos ROS2 são a escolha mais natural.

## 39.5 Atualização de Estado e Latência

### Separando o cache assíncrono da frequência de feedback

`hardware_manager.py` é projetado em torno da separação da frequência de polling de feedback de hardware da

frequência de publicação em ROS:

```python
# JointStatePublisher in ros_publishers.py
period = 1.0 / max(float(rate_hz), 1.0)           # publish at 60 Hz
self._feedback_poll_period = 1.0 / max(float(feedback_poll_rate_hz), 1.0)  # feedback at 20 Hz

def publish(self) -> None:
    now = time.monotonic()
    request_feedback = now - self._last_feedback_poll >= self._feedback_poll_period
    if request_feedback:
        self._last_feedback_poll = now
    pos, vel, effort = self._hardware.get_joint_state(request_feedback=request_feedback)
```
Among the 60 Hz publish frames, one third (20 Hz) triggers a synchronous CAN read, and the remaining frames return directly from the cache. This
both keeps the ROS topic refresh rate high and prevents the CAN bus from being occupied by feedback polling.

### Tempo limite de obsolescência no lado do MuJoCo

O nó de sincronização do MuJoCo tem um parâmetro `stale_timeout` (padrão de 1,0 segundo). Se nenhuma nova mensagem JointState for
recebida dentro desse tempo, a simulação para de atualizar:

```python
def _update(self) -> None:
    if self.last_input_time == 0.0:
        return
    if (self.stale_timeout > 0.0
        and time.monotonic() - self.last_input_time > self.stale_timeout):
        return
```

Isso impede que a simulação continue se movendo com dados obsoletos depois que o robô real se desconecta.

### Camadas de latência e solução de problemas

Quando a sincronização apresenta atraso ou não responde bem, meça camada por camada ao longo da cadeia em vez de ajustar um único parâmetro:

1. Camada de feedback do robô real: use `ros2 topic hz /rebotarm/joint_states` para confirmar que está estável em 60 Hz.
2. Camada de sincronização do MuJoCo: confirme se `last_input_time` continua sendo atualizado.
3. Camada de recepção no navegador: a limitação de taxa da assinatura do rosbridge pode manter o lado do navegador abaixo de 25 Hz.
4. Camada de interpolação de exibição: o navegador interpola entre 32-120 ms entre medições adjacentes.

Para o fluxo de dados detalhado e métodos de solução de problemas, consulte `DATA_FLOW_RS_ZH.md`.

## 39.6 Sincronização do estado do gripper

A sincronização do gripper é mais complexa do que a das juntas do braço, porque envolve conversão de unidades e o vínculo por restrição de igualdade do MuJoCo.

### Modelo de gripper no MuJoCo

Em `rs_arm.xml`, o gripper é composto por três juntas:

```xml
<joint name="joint7" type="slide" axis="0 1 0" range="0 0.05"/>
<joint name="joint_left" type="slide" .../>
<joint name="joint_right" type="slide" .../>

<equality>
  <joint joint1="joint7" joint2="joint_left" polycoef="0 1 0 0 0"/>
  <joint joint1="joint7" joint2="joint_right" polycoef="0 1 0 0 0"/>
</equality>
```

`joint7` é a junta motriz, e `joint_left` e `joint_right` a seguem em proporção 1:1 por meio da restrição de igualdade. Ao sincronizar, você só precisa definir o `qpos` de `joint7`; os dedos esquerdo e direito seguem automaticamente.

### Código de sincronização

Quando o nó de sincronização do MuJoCo recebe uma mensagem JointState, ele primeiro converte as unidades do gripper e, em seguida, define o qpos das três juntas durante a atualização:

```python
def _joint_state_callback(self, msg: JointState) -> None:
    if "gripper_joint1" in values:
        self.target_gripper = self._visual_to_mujoco_gripper(
            values["gripper_joint1"], _RS_ROS_VISUAL_OPEN_M
        )

def _update_kinematic(self) -> None:
    self.data.qpos[self.gripper_qpos_addr] = next_gripper      # joint7
    self.data.qpos[self.left_qpos_addr] = next_gripper         # joint_left
    self.data.qpos[self.right_qpos_addr] = next_gripper        # joint_right
```

Observação: no modo cinemático, as três juntas recebem diretamente o mesmo valor; no modo físico, apenas `joint7_motor` é acionada, e os dedos esquerdo/direito seguem automaticamente por meio da restrição de igualdade.

<a id="safety"></a>

## 39.7 Projeto de segurança do programa de sincronização

### Porta de confirmação de hardware

`start_rs_hardware.sh` exige confirmação explícita antes de iniciar o controlador do robô real, para evitar que uma operação acidental mova o braço:

```bash
if [[ "${REBOTARM_RS_HARDWARE_CONFIRM:-}" != "I_UNDERSTAND_RS_WILL_MOVE" ]]; then
  echo "Hardware launch blocked." >&2
  exit 2
fi
```

Mas o script de acompanhamento do MuJoCo `start_rs_mujoco_follow.sh` não precisa dessa confirmação, porque ele apenas assina os tópicos do robô real e não envia comandos de motor nem abre o SocketCAN:

### Trava de exclusão mútua de processo

`start_rs_hardware.sh` usa flock para exclusão mútua de processo ao iniciar o hardware, impedindo que dois controladores disputem os motores ao mesmo tempo:

```bash
exec 9>"${REBOTARM_HARDWARE_LOCK}"
if ! flock -n 9; then
  # identify and safely terminate the previous launch
  stop_processes "the previous RS hardware launch" "${REBOTARM_LOCK_HOLDERS[@]}"
fi
```

Ele também consegue reconhecer controladores pausados com Ctrl+Z, enviar primeiro SIGCONT e depois SIGINT e, por fim, limpar a memória compartilhada residual do Fast DDS.

### Arbitragem por máquina de estados

`hardware_manager.py` usa uma máquina de estados para rejeitar comandos inseguros:

```python
def _begin_lowlevel_streaming(self, required_mode: str) -> None:
    if not self._enabled:
        raise RuntimeError("rejecting low-level command while arm is disabled")
    if self._gravity_comp_active or self.state_machine == "GRAVITY_COMP":
        raise RuntimeError("rejecting low-level command during gravity compensation")
    if self.state_machine == "SAFE_HOMING":
        raise RuntimeError("rejecting low-level command during safe home")
```

Os estados incluem: `IDLE`, `LOWLEVEL_STREAMING`, `TRAJ_RUNNING`, `GRAVITY_COMP`, `SAFE_HOMING`. Cada estado aceita apenas tipos específicos de comando e rejeita todo o resto.

### Homing seguro

Antes de desabilitar, se o braço não estiver próximo da pose zero (o módulo do ângulo de qualquer junta exceder 2 graus ou a velocidade exceder 0,15 rad/s), o controlador primeiro entra no estado `SAFE_HOMING`: limpa alvos antigos, fecha o gripper, executa o homing, verifica a chegada e só então desabilita os motores. Para o fluxo detalhado, consulte a Seção 5 de `DATA_FLOW_RS_ZH.md`.

---

## 39.8 Demos práticos

### Demo 1: Sincronizando o braço real com o MuJoCo

#### Cadeia geral

```text
Real reBot Arm (RobStride motors)
  ↓  CAN bus
Python SDK (motorbridge + reBotArm_control_py)
  ↓  read encoder feedback
ROS controller (rebotarmcontroller)
  ↓  publish JointState topics
MuJoCo sync node (mujoco_sync.py)
  ↓  kinematics mode directly writes qpos
MuJoCo virtual arm
```

#### Inicialização do DEMO

Os 6 motores RobStride (juntas 1–6) e 1 motor do gripper no braço relatam continuamente seus estados de encoder (posição, velocidade, torque, códigos de status) no barramento SocketCAN `can0` a 1 Mbps. Essa camada é puramente de hardware e não envolve software.

Antes de iniciar, configure a interface CAN:

```text
sudo ip link set can0 down 2>/dev/null || true
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

Inicie o controlador do robô real:

```text
# Terminal 1: real-robot controller
REBOTARM_RS_HARDWARE_CONFIRM=I_UNDERSTAND_RS_WILL_MOVE ./rebotarm start rs

# Terminal 2: MuJoCo follow (same as Demo 1)
./scripts/start_rs_mujoco_follow.sh

# Terminal 3: web page
./rebotarm start web
```

### Demo 2: Sincronização de ensino manual com compensação de gravidade

#### Cadeia geral

```text
Click "Start gravity comp" on the web page
  ↓  rosbridge → ROS Service
The real-robot controller enters gravity compensation mode (GRAVITY_COMP)
  ↓  Pinocchio computes gravity torques + low-gain MIT holding
The user manually drags the real arm
  ↓  motor encoders report new angles
The controller publishes JointState (60 Hz, same as normal motion)
  ↓
The MuJoCo follow node subscribes → the virtual arm reproduces in real time
Meanwhile the web 3D model also displays the feedback in real time
```

Diferença principal em relação ao Demo 1: o robô real não é mais conduzido passivamente por alvos de posição; ele entra no **modo de compensação de gravidade** — o usuário arrasta o braço real com a mão, o feedback dos encoders continua mudando, JointState é publicado normalmente, e tanto o MuJoCo quanto a página web acompanham. A parte de acompanhamento no MuJoCo reutiliza totalmente o script do Demo 1 e não precisa de configuração extra.

#### Etapa 1: Operação na web — iniciar compensação de gravidade

###### Pré-requisitos

Três terminais, lançando respectivamente o robô real, o acompanhamento no MuJoCo e a página web:

```text
# Terminal 1: real-robot controller
REBOTARM_RS_HARDWARE_CONFIRM=I_UNDERSTAND_RS_WILL_MOVE ./rebotarm start rs

# Terminal 2: MuJoCo follow (same as Demo 1)
./scripts/start_rs_mujoco_follow.sh

# Terminal 3: web page
./rebotarm start web
```

Abra `http://localhost:3002` no navegador e siga estes passos:

1. **Selecionar o namespace**: escolha "RS real robot (`/rebotarm`)" como alvo de controle;
2. **Conectar**: preencha o ROS WebSocket com `ws://localhost:9090` e clique em conectar;
3. **Abrir o bloqueio de controle**: marque a caixa de seleção do bloqueio de controle;
4. **Enable**: clique no botão "Enable" e aguarde até o status indicar habilitado;
5. **Start gravity comp**: clique no botão "Start gravity comp".

#### Etapa 2: O controlador do robô real entra em compensação de gravidade

Alguns pontos-chave de projeto:

- **Transição suave de ganhos**: use smoothstep para fazer a transição gradual dentro de `transition_duration` (padrão 0,5 s) dos ganhos rígidos `[80,150,150,50,50,50]` / `[5,10,10,5,4,4]` para os ganhos complacentes `kp=2.0` / `kd=1.0` (config RS). smoothstep tem derivadas zero em ambas as extremidades, evitando uma queda brusca de rigidez no instante da comutação.
- **Alvo segue o ângulo medido**: `q_target` é interpolado suavemente do ângulo mantido na inicialização para o ângulo medido em tempo real. Após a conclusão da transição, `q_target = q`, ou seja, o alvo sempre é igual ao ângulo atual — para onde o usuário arrastar, o braço segue.
- **Feedforward de gravidade**: a cada ciclo, recalcular `compute_generalized_gravity` com os ângulos em cache (sem leitura CAN) e adicioná-lo ao torque MIT. Os motores só precisam fornecer uma pequena força de erro de posição; o `tau` serve principalmente para cancelar a gravidade.
- **Cache em vez de leituras CAN em tempo real**: `_read_gravity_comp_positions(request=False)` obtém os ângulos do cache atualizado a 20 Hz; o loop de 125 Hz não faz consultas síncronas de parâmetros via CAN, evitando bloqueios.

###### Regras de segurança durante a compensação de gravidade

Enquanto a máquina de estados estiver em `GRAVITY_COMP`, o controlador rejeita todos os comandos de juntas via web, arraste de TCP, reprodução de trajetórias e comandos do gripper. Apenas o botão "Stop gravity comp" e solicitações de desabilitar podem interrompê-la.

---

#### Fluxo de dados completo

```text
User clicks "Start gravity compensation" on the web page
  → rosbridge WebSocket
  → /rebotarm/gravity_compensation/start service
  → HardwareManager.start_gravity_compensation()
  → per-joint switch to MIT + gravity feedforward
  → 125 Hz compliant control loop
The user manually drags the real robot
  → encoder feedback → SocketCAN → state cache
  → /rebotarm/joint_states (60 Hz)
  → web mirror (Three.js model follows)
  → MuJoCo Sync (virtual arm follows)
```

###### Braço virtual no MuJoCo + modelo 3D na web + braço real reproduzidos em tempo real

## 39.9 Resumo

O núcleo da sincronização Real-to-Sim é passar os estados das juntas do robô real para o ambiente de simulação em uma frequência e formato apropriados. Os pontos práticos deste projeto

são:

1. Mapear juntas por nome, não pela ordem do array.
2. O gripper envolve quatro unidades; cada etapa da cadeia de conversão deve estar clara.
3. Separar a frequência de polling de feedback de hardware da frequência de publicação ROS; não fazer leituras CAN síncronas no loop em tempo real.
4. Tópicos ROS2 superam UDP neste cenário; os benefícios do ecossistema e das ferramentas de depuração superam a diferença de latência em microssegundos.
5. O projeto de segurança permeia toda a cadeia: porta de confirmação de hardware, trava de exclusão mútua de processo, arbitragem por máquina de estados, homing seguro.
6. O ensino com compensação de gravidade é um cenário Real-to-Sim de alto valor: baixa rigidez + feedforward de gravidade + alvo seguindo o feedback

são o ponto-chave de projeto.

## 39.10 FAQ

---

{/* Observação: partes desta etapa foram elaboradas com a ajuda da Doubao AI. */}

</div>
