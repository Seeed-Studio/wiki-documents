---
description: "Capítulo 7 do Curso para Iniciantes em Inteligência Incorporada da Seeed — MotorBridge, a biblioteca de controle de motor CAN entre fornecedores, e como controlar motores DM e RS via web e Python."
title: Capítulo 7 - Biblioteca de Controle de Motor MotorBridge
keywords:
  - reBot
  - MotorBridge
  - DM Motor
  - RS Motor
  - CAN
  - Python
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_7
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: LiuJunjie
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/pt-br/rebot_embodied_ai_course_chapter_7/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 2 · Capítulo 7 · Prática</span>
    <h2>7. Biblioteca de Controle de Motor MotorBridge</h2>
    <p>
      Capítulo 7 do Curso para Iniciantes em Inteligência Incorporada da Seeed — MotorBridge, a
      biblioteca de controle de motor CAN entre fornecedores, e como controlar motores DM e RS via web e Python.
    </p>
    <div className="hero-actions">
      <a href="#install">Instalação</a>
      <a href="#dm-motors">Motores DM</a>
      <a href="#rs-motors">Motores RS</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Neste capítulo</strong>
    <span>7.1 O que é MotorBridge?</span>
    <span>7.2 Ambiente de Instalação</span>
    <span>7.3 MotorBridge Controla Motores DM</span>
    <span>7.4 MotorBridge Controla Motores RS</span>
  </div>
</section>

<RebotCourseNav />

## 7.1 O que é MotorBridge?

<section id="what-is-motorbridge" className="section-card">
  <div className="section-title">
    <span>Visão geral</span>
    <h2>7.1 O que é MotorBridge?</h2>
  </div>

MotorBridge é uma **pilha de software de controle de motor CAN unificada entre fornecedores** de código aberto pela **Seeed Studio**, voltada para motores de junta integrados para braços robóticos/robôs humanóides. Ela usa um núcleo Rust de alto desempenho na camada inferior, fornece uma interface padrão C ABI e vem com bindings de linguagem para Python/C++/ROS2. Um único conjunto de APIs pode acionar os principais motores de junta integrados do mercado.

:::tip Posicionamento central
**Um único conjunto de código, compatível com todos os principais motores de junta, eliminando as diferenças nos protocolos CAN proprietários de cada fornecedor** — resolvendo especificamente a dor da adaptação trabalhosa a múltiplas marcas de motores no desenvolvimento de braços robóticos.
:::

**Quais dores da indústria ela resolve:**

As juntas integradas no mercado (Damiao, RobStride, MyActuator, etc.) possuem cada uma protocolos CAN proprietários, formatos de comando e modos de controle completamente incompatíveis. MotorBridge fornece uma camada de encapsulamento abstrato — **as chamadas de API da camada superior são totalmente consistentes, e a camada inferior se adapta automaticamente aos diferentes protocolos de fornecedores**. Trocar de motor requer apenas modificar os parâmetros do fornecedor, sem alterar a lógica de controle de movimento.

Especificamente, ela resolve:

1. Trocar a marca do motor exige reescrever todo o conjunto de código de comunicação CAN e de controle de três malhas;
2. Desenvolvedores precisam aprender mais de 5 conjuntos de protocolos proprietários simultaneamente e manter múltiplas bibliotecas de código;
3. Falta de ferramentas unificadas de depuração, calibração e visualização — as ferramentas fornecidas com cada motor não são universais;
4. O controle nativo em Python tem desempenho em tempo real ruim, e as pausas do GC afetam o controle de movimento do robô.

| Fornecedor do Motor | Tipo de Barramento | Modos de Controle Suportados |
| :--- | :--- | :--- |
| Damiao | CAN2.0 / Ponte Serial | Controle de Impedância MIT, Posição-Velocidade, Velocidade Pura, Controle Força-Posição |
| RobStride | CAN2.0 | MIT, Posição, Velocidade |
| MyActuator RMD | CAN2.0 | Corrente, Posição, Velocidade |
| HighTorque | CAN2.0 | MIT, Posição-Velocidade, Velocidade Pura, Controle Força-Posição |
| Hexfellow | CAN-FD | MIT, Posição-Velocidade |

### Arquitetura em Camadas Geral (de cima para baixo)

**Camada de aplicação (camada de desenvolvimento do usuário):**

Suporta Python, C++ (em desenvolvimento), nós ROS2. Os desenvolvedores chamam diretamente APIs unificadas sem se preocupar com o protocolo CAN subjacente.

- Python: ctypes faz o binding da biblioteca dinâmica compilada em Rust, leve e sem perda de desempenho;
- Ferramentas de suporte: CLI de linha de comando, console de visualização Web MotorBridge-Studio.

### Vantagens em Relação a SDKs Tradicionais Específicos de Fornecedor

| Item de Comparação | SDKs Nativos do Fornecedor | MotorBridge |
| :--- | :--- | :--- |
| Compatibilidade com múltiplas marcas de motor | Dedicado a uma única marca, trocar de motor exige reescrever o código | API unificada, trocar de motor exige apenas modificar os parâmetros do fornecedor |
| Desempenho em tempo real | Implementação em Python, travamentos por GC, temporização instável | Camada inferior em Rust, sem coleta de lixo, forte desempenho em tempo real |
| Ferramentas de depuração | Cada um tem um software de supervisão independente, operações inconsistentes | CLI unificada + console de visualização Web |
| Suporte a múltiplas linguagens | A maioria fornece apenas Python | Python/C++/ROS2 compartilham a biblioteca de camada inferior |
| Encapsulamento de protocolo | Exige que os desenvolvedores analisem manualmente mensagens CAN | Oculta completamente os detalhes do protocolo CAN subjacente |
| Multiplataforma | Adaptação inconsistente | Suporte completo a Windows/macOS/Linux |

</section>

## 7.2 Ambiente de Instalação

<section id="install" className="section-card">
  <div className="section-title">
    <span>Configuração</span>
    <h2>7.2 Ambiente de Instalação</h2>
  </div>

### 7.2.1 Instalar Miniforge

#### Instalação no Ubuntu

```bash
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh
```

```bash
bash Miniforge3-Linux-x86_64.sh
```

Em seguida, siga as instruções para digitar `yes` ou pressionar a tecla Enter. Após a instalação bem-sucedida, insira o seguinte comando para atualizar o script do terminal:

```bash
source ~/.bashrc
```

:::note
Quando `(base)` aparecer antes do nome de usuário, a instalação foi bem-sucedida.
:::

#### Outras Plataformas

**Jetson / Raspberry Pi:**

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
```

```bash
bash Miniforge3-$(uname)-$(uname -m).sh
```

**macOS:**

```bash
curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-$(uname -m).sh"
```

```bash
bash Miniforge3-MacOSX-$(uname -m).sh
```

**Windows:**

Abra a [página de Releases do Miniforge](https://github.com/conda-forge/miniforge/releases) no seu navegador, encontre a versão mais recente de `Miniforge3-Windows-x86_64.exe` e clique para baixar.

### 7.2.2 Criar Ambiente

Ambiente virtual Python 3.10 ou superior — motorbridge requer versão do Python >= 3.10:

```bash
conda create -y -n rebot_motorbridge python=3.12
```

Em seguida, ative o ambiente virtual. Sempre que você abrir um terminal e quiser usar as funções relacionadas no ambiente virtual, será necessário executar novamente este comando de ativação:

```bash
conda activate rebot_motorbridge
```

#### Instalar motorbridge

Após ativar o ambiente virtual `rebot_motorbridge`, execute o seguinte comando para instalar o motorbridge:

```bash
pip install motorbridge
```

</section>

## 7.3 MotorBridge Controla Motores DM

<section id="dm-motors" className="section-card">
  <div className="section-title">
    <span>Motores DM</span>
    <h2>7.3 MotorBridge Controla Motores DM</h2>
  </div>

### Controle via Web

1. Abra o seguinte endereço no seu navegador:

```text
https://motorbridge.github.io/motorbridge-studio/
```

2. Clique na opção **Help**, copie o comando correspondente de acordo com o seu sistema operacional e a placa controladora utilizada, verifique o endereço IP e o número da porta e, em seguida, pressione Enter no terminal para executar.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7/ch7-01.jpg" alt="MotorBridge Help" />
</div>

Tomando como exemplo os motores Damiao DM:

- Plataforma **Linux**, insira o seguinte comando:

```bash
motorbridge-gateway -- \
  --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial \
  --serial-port /dev/ttyACM0 --serial-baud 921600 \
  --dt-ms 20
```

- Plataforma **macOS**, insira o seguinte comando:

```bash
motorbridge-gateway -- \
  --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial \
  --serial-port /dev/tty.usbmodem14101 --serial-baud 921600 \
  --dt-ms 20
```

- **Windows**, insira o seguinte comando:

```bash
motorbridge-gateway -- --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial --serial-port COM3 --serial-baud 921600 --dt-ms 20
```

:::warning
O número da porta deve ser a porta correta, e as permissões devem ser concedidas antes da vinculação.
:::

3. Após inserir o comando acima, volte para a página da web e clique em **Connect**. Depois de uma conexão bem-sucedida, o texto verde `Connected` aparecerá no canto superior direito.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7/ch7-02.jpg" alt="Connected" />
</div>

4. Após selecionar o motor DM, clique em **Scan Damiao**.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7/ch7-03.jpg" alt="Scan Damiao" />
</div>

5. Após uma varredura bem-sucedida, o seguinte cartão aparece.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7/ch7-04.jpg" alt="Scan result card" />
</div>

6. À direita estão os parâmetros relacionados ao motor. Clique no botão de habilitar no canto inferior esquerdo, e a luz do motor ficará verde. Neste ponto, você pode controlar o motor.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7/ch7-05.jpg" alt="Motor parameters and enable" />
</div>

7. Arraste o controle deslizante ou insira o ângulo correspondente na pequena caixa (a unidade é rad), depois clique em **Move**, e o motor girará até o ângulo alvo.

8. Após clicar no botão **Enable**, clique em **Zero+Save** para definir a posição atual como o ponto zero.

9. Defina o ID do motor. Se o motor for usado no reBot, `can_id` deve ser definido como o número de junta correspondente, e `master_id` deve ser definido como `0x10 + can_id`.

Por exemplo, se `can_id` for 1, então `master_id` deve ser `0x11`, ou seja, 16 + 1 = 17. Em seguida, clique em **Set CAN_ID**.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7/ch7-06.jpg" alt="Set CAN ID" />
</div>

### Controle por Código Python

Se o ambiente não estiver instalado, consulte primeiro o ambiente de instalação na seção 7.2. Os exemplos relacionados ao motor DM são todos implementados através da porta serial da Damiao.

Primeiro, obtenha o código de exemplo:

```bash
git clone https://github.com/hopcan/motorbridge_ctrl.git
```

Em seguida, ative o ambiente conda correspondente e entre na pasta do código de exemplo:

```bash
conda activate rebot_motorbridge

cd your_folder_path/motorbridge_ctrl/dm_motor_ctrl
```

#### Habilitar/Desabilitar Motores DM

`1_enable_dm.py` é um exemplo típico de habilitar/desabilitar motores DM.

```bash
python 1_enable_dm.py
```

Fenômeno: Após o motor DM ser habilitado, a luz do motor fica verde. Após 3 segundos, o motor DM é desabilitado.

```python
# Enable specified motor, disable motor after 3 seconds
from motorbridge import Controller, Mode
import time

motor_configs = {
    1 : {
        "can_id": 0x01,
        "master_id": 0x11,  # 0x10 + 1
        "model": "4310",  # 4310 / 4340P / 6001
    },
}

ctrl = Controller.from_dm_serial("/dev/ttyACM0", 921600)

# Add motor to the bus
motor = {}
for num, cfg in motor_configs.items():
    motor[num] = ctrl.add_damiao_motor(cfg["can_id"], cfg["master_id"], cfg["model"])

# Enable all motors on the bus
ctrl.enable_all()

time.sleep(3)

# Disable all motors on the bus
ctrl.disable_all()
```

#### Escanear ID do Motor

`2_scan_DMmotor.py` é um exemplo de varredura do CAN ID de motores DM.

```bash
python 2_scan_DMmotor.py
```

A entrada da função principal de implementação `scan_damiao_motors` é o intervalo de CAN ID e a porta. Após a execução, o CAN ID escaneado e seu ID mestre correspondente serão exibidos. Este script pode ser usado para verificar se o CAN ID e o ID mestre correspondente estão corretos.

```python
from motorbridge import Controller

def scan_damiao_motors(start_can_id, end_can_id, channel="/dev/ttyACM0"):
    found_motors = []

    print(f"start scanning  {channel},canID : {start_can_id} - {end_can_id}")

    for motor_can_id in range(start_can_id, end_can_id + 1):
        ctrl = Controller.from_dm_serial(channel, 921600)
        temp_motor_master_id = 0x11 + motor_can_id

        try:
            motor = ctrl.add_damiao_motor(motor_can_id, temp_motor_master_id, "4340P")

            try:
                # Read register to get CAN ID
                esc_id = motor.get_register_u32(8, timeout_ms=100)
                master_id = motor.get_register_u32(7, timeout_ms=100)
                print(f"[find] motor_can_id=0x{esc_id:02X} motor_master_id=0x{master_id:02X}")
                found_motors.append(esc_id)

            except Exception:
                # Read error, no such CAN ID
                print(f"[no respond] motor_can_id=0x{motor_can_id:02X}")

            finally:
                motor.close()

        except Exception as e:
            print(f"[error] motor_can_id=0x{motor_can_id:02X}: {e}")
        finally:
            ctrl.close_bus()
            ctrl.close()

    print(f"\nfinish find {len(found_motors)} motor")
    return found_motors

# Run scanning
if __name__ == "__main__":
    motors = scan_damiao_motors(start_can_id=1, end_can_id=10, channel="/dev/ttyACM0")

    print("\nfind motor config:")
    for can_id in motors:
        print(f"  can_id=0x{can_id:02X}")
```

#### Definir CAN ID e ID Mestre Correspondente

`3_set_id.py` é um exemplo de definição do CAN ID e do ID mestre de motores DM.

```bash
python 3_set_id.py
```

A entrada da função principal de implementação `set_DMmotor_ID` é o CAN ID antigo, o novo CAN ID a ser definido, o novo ID mestre a ser definido e a porta.

```python
from motorbridge import Controller
from motorbridge import Controller, RID_MST_ID, RID_ESC_ID
import time

# Set CAN ID and master ID
def set_DMmotor_ID(old_can_id, new_can_id, new_master_id, channel="/dev/ttyACM0"):

    ctrl = Controller.from_dm_serial(channel, 921600)
    temp_motor_master_id = 0x10 + old_can_id
    motor = ctrl.add_damiao_motor(old_can_id, temp_motor_master_id, "4340P")

    try:
        motor.write_register_u32(RID_MST_ID, new_master_id)
    except Exception:
        pass
    try:
        motor.write_register_u32(RID_ESC_ID, new_can_id)
    except Exception:
        pass
    new_motor = ctrl.add_damiao_motor(new_can_id, new_master_id, "4340P")
    new_motor.store_parameters()
    print("change ID and save")
    time.sleep(1)
    ctrl.close_bus()
    ctrl.close()

if __name__ == "__main__":
    old_can_id = 0x06
    new_can_id = 0x01
    new_master_id = 0x11
    set_DMmotor_ID(old_can_id, new_can_id, new_master_id, channel="/dev/ttyACM0")
```

#### Controlar Diferentes Modos

`4_mit_ctrl.py` é um exemplo de controle para o modo MIT. `kp` é a rigidez do controlador, `kd` é o amortecimento do controlador e `tau` é o torque de alimentação direta (feedforward).

```bash
python 4_mit_ctrl.py
```

Fenômeno: O exemplo fornece apenas tau, então o motor continuará girando. De acordo com o modo MIT, vários modos de controle podem ser derivados. Por exemplo, quando kp=0 e kd não é 0, fornecendo vel é possível obter rotação em velocidade constante; quando kp=0 e kd=0, fornecendo tau é possível obter saída de torque definido.

:::warning Notas
1. Ao fornecer apenas tau, não forneça um valor de tau muito grande. Se tau for muito grande, o motor irá girar cada vez mais rápido para atingir o tau desejado.
2. Ao controlar posição, kd não pode ser definido como 0, caso contrário causará oscilações no motor ou até perda de controle.
3. As unidades de pos e vlim são rad e rad/s, respectivamente, e o tipo de dado é float.
:::

```python
from motorbridge import Controller, Mode
import time


motor_can_id = 0x01
motor_master_id = 0x11
channel = "/dev/ttyACM0"

# Get motor control handle
ctrl = Controller.from_dm_serial(channel, 921600)
motor = ctrl.add_damiao_motor(motor_can_id, motor_master_id, "4340P")

# Enable all motors
ctrl.enable_all()

# Switch to MIT mode, timeout 1000ms
motor.ensure_mode(Mode.MIT, timeout_ms=1000)

# MIT control
motor.send_mit(
    pos=0.0,
    vel=0.0,
    kp=0.0,
    kd=0.0,
    tau=0.8  # 0.8 Nm
)

# Run for 5s
time.sleep(5)

# Disable all motors
ctrl.disable_all()
ctrl.close_bus()
ctrl.close()
```

`5_pos_vel_ctrl.py` é um exemplo de controle para o modo pos_vel.

```bash
python 5_pos_vel_ctrl.py
```

`pos` é a posição alvo para controle, e `vlim` é usado para limitar a velocidade absoluta máxima durante o movimento.

:::warning
As unidades de pos e vlim são rad e rad/s, respectivamente, e o tipo de dado é float.
:::

```python
from motorbridge import Controller, Mode
import time


motor_can_id = 0x01
motor_master_id = 0x11
channel = "/dev/ttyACM0"

# Get motor control handle
ctrl = Controller.from_dm_serial(channel, 921600)
motor = ctrl.add_damiao_motor(motor_can_id, motor_master_id, "4340P")

# Enable all motors
ctrl.enable_all()

# Switch to position-velocity mode, timeout 1000ms
motor.ensure_mode(Mode.POS_VEL, timeout_ms=1000)

# Position-velocity mode control
motor.send_pos_vel(
    pos=2.0,    # target angle (rad)
    vlim=1.5    # max vel (rad/s)
)

# Run for 5s
time.sleep(5)

# Disable all motors
ctrl.disable_all()
ctrl.close_bus()
ctrl.close()
```

`6_vel_ctrl.py` é um exemplo de controle para o modo vel.

```bash
python 6_vel_ctrl.py
```

```python
from motorbridge import Controller, Mode
import time


motor_can_id = 0x01
motor_master_id = 0x11
channel = "/dev/ttyACM0"

# Get motor control handle
ctrl = Controller.from_dm_serial(channel, 921600)
motor = ctrl.add_damiao_motor(motor_can_id, motor_master_id, "4340P")

# Enable all motors
ctrl.enable_all()

# Switch to velocity mode, timeout 1000ms
motor.ensure_mode(Mode.VEL, 1000)

# Velocity mode control
motor.send_vel(vel=1.0)  # 1 rad/s

# Run for 5s
time.sleep(5)

# Disable all motors
ctrl.disable_all()
ctrl.close_bus()
ctrl.close()
```

Onde `vel` é a velocidade alvo para controle.

:::warning
A unidade de pos é rad/s, e o tipo de dado é float.
:::

`7_force_pos.py` é um exemplo de controle para o modo force_pos.

```bash
python 7_force_pos.py
```

```python
from motorbridge import Controller, Mode
import time


motor_can_id = 0x01
motor_master_id = 0x11
channel = "/dev/ttyACM0"

# Get motor control handle
ctrl = Controller.from_dm_serial(channel, 921600)
motor = ctrl.add_damiao_motor(motor_can_id, motor_master_id, "4340P")

# Enable all motors
ctrl.enable_all()

# Switch to force_pos mode, timeout 1000ms
motor.ensure_mode(Mode.FORCE_POS, 1000)

# force_pos control
motor.send_force_pos(
    pos=0.5,    # target angle (rad)
    vlim=1.0,   # max vel (rad/s)
    ratio=0.3   # torque ratio (0.0 - 1.0), 0 means no torque, 1 means full torque
)

# Run for 5s
time.sleep(5)

# Disable all motors
ctrl.disable_all()
ctrl.close_bus()
ctrl.close()
```

`pos` é a posição alvo para controle, `vlim` é o limite de velocidade, e `ratio` representa a quantidade de torque utilizada. Quando ratio é 0, significa sem torque; quando é 1, significa torque total.

#### Obter Estado do Motor

`8_get_state.py` é um exemplo de obtenção do estado do motor.

```bash
python 8_get_state.py
```

```python
from motorbridge import Controller, Mode
import time


motor_can_id = 0x01
motor_master_id = 0x11
channel = "/dev/ttyACM0"

# Get motor control handle
ctrl = Controller.from_dm_serial(channel, 921600)
motor = ctrl.add_damiao_motor(motor_can_id, motor_master_id, "4340P")

# Enable all motors
ctrl.enable_all()

# Switch to pos_vel mode, timeout 1000ms
motor.ensure_mode(Mode.POS_VEL, 1000)

# Record start time
start = time.perf_counter()

# Control cycle
dt = 0.01  # 10ms

# Run for 5s
while time.perf_counter() - start < 5.0:
    now_time = time.perf_counter() - start
    motor.send_pos_vel(
        pos=2.0,    # target angle (rad)
        vlim=1.5    # max vel (rad/s)
    )
    time.sleep(dt)
    state = motor.get_state()

    if state:
        print(f"time:{now_time:.3f}")
        print(f"pos: {state.pos:.3f} rad")
        print(f"vel: {state.vel:.3f} rad/s")
        print(f"torque: {state.torq:.3f} Nm\n")
    else:
        print("no respond\n")

# Disable all motors
ctrl.disable_all()
ctrl.close_bus()
ctrl.close()
```

O exemplo dado em `8_get_state.py` serve para obter o quadro de resposta retornado pelo motor no quadro anterior durante o processo de controle. Esse quadro de resposta é enviado quando um quadro de controle é enviado ao motor, e o motor responderá, equivalente a um modo de pergunta e resposta. Se você quiser apenas que o motor retorne um quadro de resposta para obter o estado sem deixar o motor se mover, você pode consultar o método de leitura do estado do motor em `9_set_zero.py`.

#### Definir o ponto zero do motor

`9_set_zero.py` é um exemplo de definição do ponto zero do motor.

```bash
python 9_set_zero.py
```

```python
from motorbridge import Controller, Mode
import time


motor_can_id = 0x01
motor_master_id = 0x11
channel = "/dev/ttyACM0"

# Get motor control handle
ctrl = Controller.from_dm_serial(channel, 921600)
motor = ctrl.add_damiao_motor(motor_can_id, motor_master_id, "4340P")

# Set zero point
try:
    motor.set_zero_position()
    print("set zero successfully")
except Exception:
    print("set zero failed")
time.sleep(1)

# Check position
start = time.perf_counter()
dt = 0.01  # 10ms
while time.perf_counter() - start < 1.0:
    now_time = time.perf_counter() - start
    motor.request_feedback()
    time.sleep(dt)
    state = motor.get_state()
    if state:
        print(f"time:{now_time:.3f}")
        print(f"pos: {state.pos:.3f} rad")
        print(f"vel: {state.vel:.3f} rad/s")
        print(f"torque: {state.torq:.3f} Nm\n")
    else:
        print("no respond\n")

time.sleep(1)

ctrl.close_bus()
ctrl.close()
```

Fenômeno: Após definir o ponto zero com sucesso, o estado atual do motor será lido para confirmar se a definição do ponto zero foi bem-sucedida.

</section>

## 7.4 MotorBridge controla motores RS

Se o seu sistema ainda não tiver o driver PCAN instalado, consulte esta página: [PCAN driver installed](https://wiki.seeedstudio.com/pt-br/rebot_b601_rs_getting_started/#software-setup-and-calibration-workflow)

<section id="rs-motors" className="section-card">
  <div className="section-title">
    <span>Motores RS</span>
    <h2>7.4 MotorBridge controla motores RS</h2>
  </div>

### Controle via Web

1. Carregue o módulo de kernel `peak_usb`, verifique a porta, defina a taxa de transmissão e inicie a porta:

```bash
# The kit comes with PCAN-USB, which usually should directly appear as can0 or can1
sudo modprobe peak_usb
ip -br link

# If can0 appears, then set the bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

2. Abra o seguinte endereço no seu navegador:

```text
https://motorbridge.github.io/motorbridge-studio/
```

3. Clique na opção **Help**, copie o comando correspondente de acordo com o seu sistema operacional e a placa controladora utilizada, verifique o endereço IP e o número da porta e, em seguida, pressione Enter no terminal para executar.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7/ch7-07.jpg" alt="MotorBridge Help" />
</div>

- Plataforma **Linux**, insira o seguinte comando:

```bash
motorbridge-gateway -- --bind 127.0.0.1:9002 --transport socketcan --channel can0
```

- Plataforma **macOS**, insira o seguinte comando:

```bash
motorbridge-gateway -- --bind 127.0.0.1:9002 --transport socketcan --channel can0
```

- **Windows**, insira o seguinte comando:

```bash
motorbridge-gateway -- --bind 127.0.0.1:9002 --transport socketcan --channel can0@1000000
```

4. Após inserir o comando acima, volte para a página da web e clique em **Connect**. Após uma conexão bem-sucedida, o texto verde `Connected` aparecerá no canto superior direito.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7/ch7-08.jpg" alt="Connected" />
</div>

5. Após selecionar o motor RS, clique em **Scan RobStride motor**.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7/ch7-09.jpg" alt="Scan RobStride" />
</div>

6. Após uma varredura bem-sucedida, o seguinte cartão aparecerá.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7/ch7-10.jpg" alt="Scan result card" />
</div>

7. À direita estão os parâmetros relacionados ao motor. Clique no botão de habilitar no canto inferior esquerdo, e a luz do motor ficará verde. Neste ponto, você pode controlar o motor.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7/ch7-11.jpg" alt="Motor parameters and enable" />
</div>

8. Arraste o controle deslizante ou insira o ângulo correspondente na pequena caixa (a unidade é rad), depois clique em **Move**, e o motor irá girar até o ângulo alvo.

9. Após clicar no botão **Enable**, clique em **Zero+Save** para definir a posição atual como o ponto zero.

10. Defina o ID do motor. Se o motor for usado no reBot, `can_id` deve ser definido como o número da junta correspondente, e `master_id` é fixo.

### Controle por código Python

#### Habilitar/Desabilitar motores RS

`1_enable_rs.py` é um exemplo típico de habilitar/desabilitar motores RS.

```bash
python 1_enable_rs.py
```

```python
# Enable specified motor, disable motor after 3 seconds
from motorbridge import Controller, Mode
import time

motor_configs = {
    1 : {
        "can_id": 0x07,
        "master_id": 0xfd,  # fixed
        "model": "rs-00",  # rs-06 / rs-00
    },
}

ctrl = Controller("can0")

# Add motor
motor = {}
for num, cfg in motor_configs.items():
    motor[num] = ctrl.add_robstride_motor(cfg["can_id"], cfg["master_id"], cfg["model"])

# Enable all motors
ctrl.enable_all()

# Switch to MIT mode, timeout 1000ms
motor[1].ensure_mode(Mode.MIT, timeout_ms=1000)

# Control MIT
motor[1].send_mit(
    pos=0.0,
    vel=0.0,
    kp=0.0,
    kd=0.0,
    tau=0.3  # 0.3 Nm
)

time.sleep(3)

# Disable all motors
ctrl.disable_all()
```

Fenômeno: Após o motor RS ser habilitado, a luz do motor fica verde. Após 3 segundos, o motor RS é desabilitado e a luz do motor fica vermelha.

#### Verificar ID do motor

`2_scan_RSmotor.py` é um exemplo de varredura do CAN ID de motores RS.

```bash
python 2_scan_RSmotor.py
```

```python
from motorbridge import Controller, Mode
import time


def scan_robstride_motors(start_can_id, end_can_id, channel="can0"):
    found_motors = []
    for motor_can_id in range(start_can_id, end_can_id + 1):
        ctrl = Controller(channel)

        try:
            motor = ctrl.add_robstride_motor(motor_can_id, 0xfd, "rs-00")

            try:
                can_id, respond_id = motor.robstride_ping()
                found_motors.append(can_id)
                print(f"can_id={can_id:02X} respond_id={respond_id:02X}")  # response ID is not master ID

            except Exception:
                # Scan error
                print(f"[no respond] no this motor_can_id=0x{motor_can_id:02X}")

            finally:
                motor.close()

        except Exception as e:
            print(f"[error] motor_can_id=0x{motor_can_id:02X}: {e}")
        finally:
            ctrl.close_bus()
            ctrl.close()
    print(f"\nfinish find {len(found_motors)} motor\n")
    return found_motors

if __name__ == "__main__":
    motors = scan_robstride_motors(1, 10, channel="can0")

    print("\nfind motor config:")
    for can_id in motors:
        print(f"  can_id=0x{can_id:02X}")
```

A entrada da função principal de implementação `scan_robstride_motors` é o intervalo de CAN ID e a porta. Após a execução, serão exibidos o CAN ID encontrado e seu master ID correspondente. Este script pode ser usado para verificar se o CAN ID e o master ID correspondente estão corretos.

#### Definir CAN ID e master ID correspondente

`3_set_id.py` é um exemplo de definição do CAN ID e do master ID de motores RS.

```bash
python 3_set_id.py
```

```python
from motorbridge import Controller
from motorbridge import Controller, RID_MST_ID, RID_ESC_ID
import time

# Set CAN ID
def set_RSmotor_ID(old_can_id, new_can_id, channel="can0"):

    ctrl = Controller(channel)

    motor = ctrl.add_robstride_motor(old_can_id, 0xfd, "rs-00")
    try:
        motor.robstride_set_device_id(new_can_id)
        print(f"change to new id :{new_can_id}")
    except Exception:
        print("set id failed")

    time.sleep(1)
    ctrl.close_bus()
    ctrl.close()

if __name__ == "__main__":
    old_can_id = 0x01
    new_can_id = 0x01
    set_RSmotor_ID(old_can_id, new_can_id, channel="can0")
```

A entrada da função principal de implementação `set_RSmotor_ID` é o CAN ID antigo, o novo CAN ID a ser definido e a porta.

#### Controlar diferentes modos

`4_mit_ctrl.py` é um exemplo de controle para o modo MIT. `kp` é a rigidez do controlador, `kd` é o amortecimento do controlador e `tau` é o torque de alimentação direta (feedforward).

```bash
python 4_mit_ctrl.py
```

```python
from motorbridge import Controller, Mode
import time


motor_can_id = 0x01
motor_master_id = 0xfd
channel = "can0"

# Get motor handle
ctrl = Controller(channel)
motor = ctrl.add_robstride_motor(motor_can_id, motor_master_id, "rs-00")

# Enable all motors
ctrl.enable_all()

# Switch to MIT mode, timeout 1000ms
motor.ensure_mode(Mode.MIT, timeout_ms=1000)

# Control MIT
motor.send_mit(
    pos=0.0,
    vel=0.0,
    kp=0.0,
    kd=0.0,
    tau=0.3  # 0.3 Nm
)

# Run for 3s
time.sleep(3)

# Disable all motors
ctrl.disable_all()
ctrl.close_bus()
ctrl.close()
```

Fenômeno: O exemplo fornece apenas tau, portanto o motor continuará girando. De acordo com o modo MIT, vários modos de controle podem ser derivados. Por exemplo, quando kp=0 e kd não é 0, fornecendo vel é possível obter rotação em velocidade constante; quando kp=0 e kd=0, fornecendo tau é possível obter saída de torque definido.

:::warning Notes
1. Ao fornecer apenas tau, não forneça um valor de tau muito grande. Se tau for muito grande, o motor irá girar cada vez mais rápido para atingir o tau desejado.
2. Ao controlar a posição, kd não pode ser definido como 0, caso contrário causará oscilações no motor ou até mesmo perda de controle.
3. As unidades de pos e vlim são rad e rad/s respectivamente, e o tipo de dado é float.
:::

`5_pos_vel_ctrl.py` é um exemplo de controle para o modo pos_vel.

```bash
python 5_pos_vel_ctrl.py
```

```python
from motorbridge import Controller, Mode
import time


motor_can_id = 0x01
motor_master_id = 0xfd
channel = "can0"

# Get motor handle
ctrl = Controller(channel)
motor = ctrl.add_robstride_motor(motor_can_id, motor_master_id, "rs-00")

# Enable all motors
ctrl.enable_all()

# Switch to position-velocity mode, timeout 1000ms
motor.ensure_mode(Mode.POS_VEL, timeout_ms=1000)

# Control position-velocity
motor.send_pos_vel(
    pos=2.0,    # target angle (rad)
    vlim=1.5    # max vel (rad/s)
)

# Run for 5s
time.sleep(5)

# Disable all motors
ctrl.disable_all()
ctrl.close_bus()
ctrl.close()
```

`pos` é a posição alvo para controle, e `vlim` é usado para limitar a velocidade absoluta máxima durante o movimento.

:::warning Notas
1. As unidades de pos e vlim são rad e rad/s respectivamente, e o tipo de dado é float.
2. O modo pos_vel usado aqui é o modo posição-velocidade (PP).
:::

`6_vel_ctrl.py` é um exemplo de controle para o modo vel.

```bash
python 6_vel_ctrl.py
```

```python
from motorbridge import Controller, Mode
import time


motor_can_id = 0x01
motor_master_id = 0xfd
channel = "can0"

# Get motor handle
ctrl = Controller(channel)
motor = ctrl.add_robstride_motor(motor_can_id, motor_master_id, "rs-00")

# Enable all motors
ctrl.enable_all()

# Switch to position-velocity mode, timeout 1000ms
motor.ensure_mode(Mode.POS_VEL, timeout_ms=1000)

# Control position-velocity
motor.send_pos_vel(
    pos=2.0,    # target angle (rad)
    vlim=1.5    # max vel (rad/s)
)

# Run for 5s
time.sleep(5)

# Disable all motors
ctrl.disable_all()
ctrl.close_bus()
ctrl.close()
```

Onde `vel` é a velocidade alvo para controle.

:::warning
A unidade de pos é rad/s, e o tipo de dado é float.
:::

#### Obter Estado do Motor

`7_get_state.py` é um exemplo de obtenção do estado do motor.

```bash
python 7_get_state.py
```

```python
from motorbridge import Controller, Mode
import time


motor_can_id = 0x01
motor_master_id = 0xfd
channel = "can0"

# Get motor handle
ctrl = Controller(channel)
motor = ctrl.add_robstride_motor(motor_can_id, motor_master_id, "rs-00")

# Enable all motors
ctrl.enable_all()

# Switch to position-velocity mode, timeout 1000ms
motor.ensure_mode(Mode.POS_VEL, 1000)

# Record start time
start = time.perf_counter()

# Control cycle
dt = 0.01  # 10ms

# Run for 5s
while time.perf_counter() - start < 5.0:
    now_time = time.perf_counter() - start
    motor.send_pos_vel(
        pos=2.0,    # target angle (rad)
        vlim=1.5    # max vel (rad/s)
    )
    time.sleep(dt)
    state = motor.get_state()

    if state:
        print(f"time:{now_time:.3f}")
        print(f"pos: {state.pos:.3f} rad")
        print(f"vel: {state.vel:.3f} rad/s")
        print(f"torque: {state.torq:.3f} Nm\n")
    else:
        print("no respond\n")

# Disable all motors
ctrl.disable_all()
ctrl.close_bus()
ctrl.close()
```

O exemplo dado em `7_get_state.py` é para obter o quadro de resposta retornado pelo motor no quadro anterior durante o processo de controle. Este quadro de resposta é enviado quando um quadro de controle é enviado ao motor, e o motor irá responder, equivalente a um modo de pergunta e resposta. Se você quiser apenas que o motor retorne um quadro de resposta para obter o estado sem deixar o motor se mover, você pode consultar o exemplo de leitura do estado do motor em `8_set_zero.py`.

#### Definir Ponto Zero do Motor

`8_set_zero.py` é um exemplo de definição do ponto zero do motor.

```bash
python 8_set_zero.py
```

```python
from motorbridge import Controller, Mode
import time


motor_can_id = 0x01
motor_master_id = 0xfd
channel = "can0"

# Get motor handle
ctrl = Controller(channel)
motor = ctrl.add_robstride_motor(motor_can_id, motor_master_id, "rs-00")

try:
    motor.set_zero_position()
    print("set zero successfully")
except Exception:
    print("set zero failed")
time.sleep(1)

# Check position
start = time.perf_counter()
dt = 0.01  # 10ms
while time.perf_counter() - start < 1.0:
    now_time = time.perf_counter() - start
    motor.request_feedback()
    time.sleep(dt)
    state = motor.get_state()
    if state:
        print(f"time:{now_time:.3f}")
        print(f"pos: {state.pos:.3f} rad")
        print(f"vel: {state.vel:.3f} rad/s")
        print(f"torque: {state.torq:.3f} Nm\n")
    else:
        print("no respond\n")

time.sleep(1)

ctrl.close_bus()
ctrl.close()
```

Fenômeno: Após definir o ponto zero com sucesso, o estado atual do motor será lido para confirmar se a definição do ponto zero foi bem-sucedida.

</section>

</div>
