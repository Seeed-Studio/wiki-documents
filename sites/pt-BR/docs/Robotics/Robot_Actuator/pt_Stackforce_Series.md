---
description: Este wiki fornece tutoriais para motores da série Stackforce.
title: Motores Stackforce Série
keywords:
  - actuator
  - motor
  - robotics
image: https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/6010_homepage.webp
slug: /stackforce_series
last_update:
  date: 12/25/2025
  author: Li Shanghang
translation:
  skip:
    - zh-CN
createdAt: '2025-11-26'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/stackforce_series/
---

# Primeiros Passos com Motores Stackforce Série X

Este artigo apresentará como começar a usar os motores da série Stackforce e como utilizá-los com C++ e Python no reComputer Jetson Super.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/6010.webp" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱</font></span></strong>
    </a>
</div>

## Especificações

Aqui está a tabela completa com todos os parâmetros preenchidos para todos os modelos de motor:

<table>
  <thead>
    <tr>
      <th>Parâmetro</th>
      <th>6010</th>
      <th>8108</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Tensão Nominal</td><td>24V</td><td>24V</td></tr>
    <tr><td>Corrente Nominal</td><td>10.5A</td><td>7.5A</td></tr>
    <tr><td>Potência Nominal</td><td>240W</td><td>180W</td></tr>
    <tr><td>Torque Nominal</td><td>5 Nm</td><td>7.5 Nm</td></tr>
    <tr><td>Torque de Pico</td><td>11 Nm</td><td>22 Nm</td></tr>
    <tr><td>Velocidade Nominal</td><td>120 RPM</td><td>110 RPM</td></tr>
    <tr><td>Velocidade Máxima</td><td>270 RPM</td><td>320 RPM</td></tr>
    <tr><td>Taxa de Engrenagem</td><td>8:1</td><td>8:1</td></tr>
    <tr><td>Protocolo de Comunicação</td><td>MIT Protocol</td><td>MIT Protocol</td></tr>
    <tr><td>Modos de Controle</td><td>Controle de Posição, Velocidade, Torque</td><td>Controle de Posição, Velocidade, Torque</td></tr>
    <tr><td>Diâmetro Externo</td><td>80 mm</td><td>97 mm</td></tr>
    <tr><td>Espessura</td><td>47 mm</td><td>46 mm</td></tr>
    <tr><td>Peso</td><td>392 g ±10%</td><td>395 g ±5%</td></tr>
    <tr><td>Resistência de Fase</td><td>0.48 Ω ±10%</td><td>0.439 Ω ±10%</td></tr>
    <tr><td>Indutância de Fase</td><td>368 μH ±10%</td><td>403 μH ±10%</td></tr>
  </tbody>
</table>

## Principais Recursos

1. **Alto Torque de Saída**
2. **Controle em Modo MIT**
3. **Realimentação por Encoder Magnético**
4. **Design Compacto e Leve**
5. **Suporte para Comunicação CAN Bus de Alta Velocidade**
6. **Aplicações Versáteis**

## Guia de Introdução
### Preparações Antes do Uso
**Em um PC com Sistema Windows**
- [Manual do Produto](https://files.seeedstudio.com/products/stackforce/%E6%96%B0%E7%89%886010%E5%85%B3%E8%8A%82%E7%94%B5%E6%9C%BA%E7%94%A8%E6%88%B7%E6%96%87%E6%A1%A3V1.1.pdf).
- Baixe o [VOFA](https://www.vofa.plus/).

O CANID e o CANMode do motor são ambos modificados via porta serial. O motor é enviado com um CANID padrão de 0x01 e CANMode de CAN2.0 a 1Mbps.

### Fiação da Porta Serial
Conecte V, G, T, R respectivamente ao VCC (3.3V), GND, RX, TX do módulo de comunicação serial (RX e TX devem ser conectados cruzados). Como mostrado na figura abaixo:

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/串口通信端口
    .png"/>
</div>

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/串口工具.png"/>
</div>

### Modificando o CANID
Defina a taxa de baud da porta serial para 1Mbps.

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/修改CANID.png"/>
</div>

O CANID a ser enviado é 0x**, e o ID definido é 0x**, com um limite máximo de 0x7F. Após definir o CANID com sucesso, o seguinte log será impresso:

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/修改CANID反馈.png"/>
</div>

:::tip
Você pode definir o CANID:0x01 para facilitar o teste no código subsequente.
:::

### Modificando o Modo CAN
Envie CANMODE:0 ou CANMODE:1 via porta serial.

CANMODE:0 representa o modo CAN2.0 (1Mbps), enquanto CANMODE:1 representa o modo CANFD (5Mbps).

A modificação bem-sucedida do modo CAN é mostrada nas figuras abaixo:

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/CAN模式反馈1.png"/>
</div>

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/CAN模式反馈2.png"/>
</div>

:::tip
Você pode definir o CANMODE:0 para facilitar o teste no código subsequente.
:::

## Usando o [reComputer Mini Jetson Orin](/pt-br/recomputer_jetson_mini_getting_started) para Controlar Motores
As interfaces de comunicação CAN mais comuns para motores no mercado são **XT30 (2+2)** e **conectores JST**. Nossos dispositivos **reComputer Mini Jetson Orin** e **reComputer Robotics** são equipados com **interfaces XT30 (2+2) duplas** e **interfaces CAN baseadas em JST**, proporcionando compatibilidade perfeita.

**reComputer Mini:**
<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg "/>  
</div>

**reComputer Robotics**
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig5.jpg "/>  
</div>

Para informações mais detalhadas sobre o uso do CAN, consulte este [wiki](https://wiki.seeedstudio.com/cn/recomputer_jetson_mini_hardware_interfaces_usage/#can-).

### Habilitando a Interface CAN

**Etapa 1:** Antes de usar CAN0 e CAN1, remova a tampa inferior e defina os dois resistores terminais de 120Ω para a posição ON.

<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/7.png " />
</div>

Desligue a chave seletora do resistor terminal de comunicação CAN de 120Ω integrado no motor.

<div align="center">
    <img width={400} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/EN/resistance_switch.png" />
</div>

:::tip
Se o Recomputer Mini não tiver definido o resistor terminal de 120Ω para ON, você pode optar por ligar a chave seletora do resistor terminal de comunicação CAN do motor.
:::

**Etapa 2:** Conecte o motor diretamente ao CAN0 do reComputer Mini por meio da interface XT30 (2+2).

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/Mini连接.jpg" />
</div>
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/Hardware_connect.png" />
</div>

:::tip
Como [o design da interface CAN do reComputer Mini](https://wiki.seeedstudio.com/cn/recomputer_jetson_mini_hardware_interfaces_usage/#can0can1-%E9%80%9A%E4%BF%A1) é oposto ao da interface CAN do motor, é necessária soldagem manual para inverter as linhas de dados.

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/recomputer_mini/can0-datasheet.png" />
     <img width={700} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/EN/MotorCAN.png" />
</div>

<div align="center">
    <img width={500} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/EN/TX30.jpg" />
</div>

Considerando a alta tensão e corrente exigidas pelo motor, recomenda-se comprar um adaptador de energia de 24V 300W para alimentar o reComputer Mini para acionar um único motor. Se for necessário conectar mais motores, pode-se adquirir um adaptador de energia de `maior potência` de acordo com a necessidade.

<div align="center">
    <img width={600} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/EN/Power_adapter.png" />
</div>
:::

:::danger
Esta fonte de alimentação é apenas para aprendizagem e teste com um único motor. Para múltiplos motores, projete uma placa de alimentação separada e isole a alimentação do Jetson da alimentação do motor para evitar que uma corrente alta passe diretamente pelo Jetson.
:::

### Habilitando a Comunicação CAN do Jetson
Abra um terminal e insira o seguinte comando para puxar o pino GPIO para nível alto e ativar o CAN0:
```bash
gpioset --mode=wait 0 43=0
```

Se estiver usando o CAN1 com a interface JST, puxe o pino 106 para nível alto.
```bash
gpioset --mode=wait 0 106=0
```

Mantenha este terminal aberto, inicie um novo terminal e configure o CAN0.
```bash
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

### Configurando o Ambiente C++ e Python

**Etapa 1:** Clone o SDK.
```bash
git clone https://github.com/Seeed-Projects/Stackforce-Motor-SDK.git 
```

**Etapa 2:** O SDK do driver requer as seguintes dependências. Para Debian Linux, elas podem ser instaladas com os seguintes comandos:

```bash
sudo apt-get install -y build-essential cmake
sudo apt install linux-modules-extra-5.15.0-1025-nvidia-tegra # For Jetson Jetpack 6.0
```

Se forem necessárias ligações Python, instale adicionalmente Python 3, pip e pybind11:
```bash
sudo apt-get install -y python3 python3-pip python3-pybind11 python3-setuptools
```

Após instalar as dependências, siga as etapas abaixo para instalar o SDK do driver como uma biblioteca C++ ou um pacote Python. Ambos usarão CMake para compilar o código C++.

## Controle de Motor e Recebimento de Dados

### C++

<details>
<summary>main.cpp</summary>
```cpp
#include <chrono>
#include <cstdint>
#include <cmath>
#include <cstdio>
#include <thread>
#include "CAN_comm.h"
#include "config.h"

MIT devicesState[4];

uint32_t sendNum; // for testing send speed
uint32_t recNum;

MIT MITCtrlParam;

uint16_t sendCounter = 0;
bool motorEnable = true;
int receivedNumber = 0;
uint64_t prev_ts = 0;
float t = 0.0f;
float targetJointAngle = 0.0f; // Target joint angle (can be modified at runtime via input)

namespace {
uint64_t micros_steady(){
  using namespace std::chrono;
  return duration_cast<microseconds>(steady_clock::now().time_since_epoch()).count();
}
}

void setup() {
  std::printf("SF Motor Control (Jetson) start\n");
  CANInit();
  enable(0x01); // Enable motor with ID 0x01  <- Change ID to control different motors
  prev_ts = micros_steady();
  t = 0.0f;
}

uint16_t printCount = 0;
uint16_t recCount = 0;

void loop() {

  recCANMessage();

  // Check for new joint angle input
  // (Check once every 1000 loops to avoid frequent blocking input calls)
  static uint16_t inputCheckCount = 0;
  if(++inputCheckCount >= 1000){
    inputCheckCount = 0;
    float newAngle;
    if(std::scanf("%f", &newAngle) == 1){
      targetJointAngle = newAngle;
      std::printf("Target joint angle updated: %.3f rad\n", newAngle);
    }
  }

  static int IDswitch = 0x01; // <- Change ID to control different motors
  uint64_t current_ts = micros_steady();

  /*
   * Function:
   *   Update control parameters based on time difference and send MIT command.
   *
   * Parameters:
   *   - current_ts: current timestamp
   *   - prev_ts   : previous timestamp
   *   - t         : time variable used for sine/cosine calculations
   *   - MITCtrlParam:
   *       Control parameter structure including position, velocity,
   *       position gain (Kp), velocity gain (Kd), and torque
   *   - IDswitch  : motor ID selector
   *
   * Return:
   *   None
   */
  if(current_ts - prev_ts >= 1000){ // 1 ms control period
    // Update time variable (increase by 1 ms)
    t += 0.001;

    // Set control parameters:
    // target position, target velocity, position gain, velocity gain, and torque
    MITCtrlParam.pos = targetJointAngle;
    MITCtrlParam.vel = 0;
    MITCtrlParam.kp  = 0.5;
    MITCtrlParam.kd  = 0.3;
    MITCtrlParam.tor = 0;

    // Update previous timestamp
    prev_ts = current_ts;

    // IDswitch++;
    // If IDswitch exceeds 0x04, reset it to 0x01
    // if(IDswitch > 0x04){
    //   IDswitch = 0x01;
    // }

    sendMITCommand(IDswitch, MITCtrlParam); // Send MIT command

    printCount++;
    if(printCount >= 100){
      printCount = 0;
      // Only print when IDswitch is 0x01
      // Print commanded position/velocity and actual motor position/velocity
      if(IDswitch == 0x01){
        std::printf( "[CMD] pos: %6.3f rad vel: %6.3f rad/s | " "[FB] pos: %6.3f rad vel: %6.3f rad/s\n", MITCtrlParam.pos, MITCtrlParam.vel, devicesState[IDswitch - 1].pos, devicesState[IDswitch - 1].vel );
      }
    }
  }

  std::this_thread::sleep_for(std::chrono::milliseconds(1));
}

int main(){
  setup();

  while(true){
    loop();
  }

  disable(0x01); // Disable motor with ID 0x01
  return 0;
}
```

</details>

```bash
cd build
cmake ..
make
```

O executável compilado estará localizado em `build/sfmotor_control`. Execute o programa:

```bash
./sfmotor_control
```

O programa, por padrão, controla o motor com ID 0x01. Durante a operação, você pode inserir o valor do ângulo alvo (em radianos) pelo teclado. Ele também recebe dados de retorno sobre o ângulo e a velocidade angular do motor.

### Python

<details>
<summary>main.py</summary>
```python
import sys
import time
import select

# Import core control module (assumes sf_can_controller.py is in the same directory)
from sf_can_controller import MotorController 

# --- Core Configuration ---
IFACE = "can0"        
MOTOR_ID = 1         # <- Change ID to control different motors
UPDATE_RATE_HZ = 100.0 
PRINT_EVERY = 2     
INITIAL_TARGET_DEG = 0.0

# --- Main Control Loop ---
def run_simple_test() -> None:
    """Run a simplified position control loop."""

    # 1. Initialization
    update_period = 1.0 / UPDATE_RATE_HZ
    target_rad = INITIAL_TARGET_DEG

    KP, KD = 0.5, 0.3  # Default MIT parameters

    controller = MotorController(interface=IFACE, motor_id=MOTOR_ID)
    print(f"--- SF Motor Test Start ---")
    print(f"Interface: {IFACE}, ID: {MOTOR_ID}, Rate: {UPDATE_RATE_HZ} Hz")

    # 2. Enable motor
    controller.enable()

    last_send_time = time.perf_counter()
    print_counter = 0

    inputCheckCount = 0

    # 3. Main loop
    while True:
        controller.poll_rx()
        current_state = controller.get_motor_state()

        now = time.perf_counter()

        # --- Periodic input check (every 500 loops) ---
        inputCheckCount += 1
        if inputCheckCount >= 500:
            inputCheckCount = 0

            # Blocking I/O waiting for user input (this will pause the control loop)
            # Note: If the input is not a number, a ValueError will be raised.
            line = input("Please enter target joint angle: ").strip()
            if line:
                angle_deg = float(line)
                target_rad = angle_deg
                print(f"Target joint angle updated: {angle_deg:.3f} deg")

        # Periodically send MIT command
        if now - last_send_time >= update_period:
            last_send_time = now

            # Send target position command
            controller.send_mit_command(
                pos=target_rad,
                vel=0.0,
                kp=KP,
                kd=KD,
                tor=0.0
            )

            # Print motor state
            print_counter += 1
            if print_counter >= PRINT_EVERY:
                print_counter = 0
                print(
                    f"Cmd={target_rad:.2f} | "
                    f"Pos={current_state.pos:.2f} (Vel={current_state.vel:.2f})"
                )

        time.sleep(0.001)


if __name__ == "__main__":
    # Run test
    run_simple_test()
```
</details>

O script Python está localizado no diretório `script/` e pode ser executado diretamente, sem compilação.

```bash
python main.py 
```

O programa, por padrão, controla o motor com ID 0x01. Durante a operação, você pode inserir o valor do ângulo alvo (em radianos) pelo teclado. Ele também recebe dados de retorno sobre o ângulo e a velocidade angular do motor.


## Citação

[Step 6010](https://wiki.seeedstudio.com/pt-br/wiki/robotics/Actuator/stackforce/Citation/6010.stp)  

[Step 8108](https://wiki.seeedstudio.com/pt-br/wiki/robotics/Actuator/stackforce/Citation/8108.stp)

[8108 Motor_Curve](https://wiki.seeedstudio.com/pt-br/wiki/robotics/Actuator/stackforce/Citation/8108Motor_Curve.png)

[6010Motor_Document.pdf](https://wiki.seeedstudio.com/pt-br/wiki/robotics/Actuator/stackforce/Citation/6010Motor_Document.pdf)

[8108Motor_Document.pdf](https://wiki.seeedstudio.com/pt-br/wiki/robotics/Actuator/stackforce/Citation/8108Motor_Document.pdf)


## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
