---
title: XIAO STM32C5 com MicroPython
description: Aprenda a instalar o MicroPython no Seeed Studio XIAO STM32C5 e usar GPIO, sinais de controle de servo gerados por software e CAN para construir aplicações práticas.
keywords:
  - xiao
  - stm32
  - stm32c5
  - micropython
image: https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/Seeed-Studio-XIAO-STM32C5.webp
slug: /xiao_stm32c5_with_micropython
sku: 100036669
last_update:
  date: 09/02/2026
  author: Zeller
createdAt: '2026-09-01'
updatedAt: '2026-09-02'
url: https://wiki.seeedstudio.com/pt-br/xiao_stm32c5_with_micropython/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiaostm32c5_micropython.png" style={{width:600, height:'auto'}}/></div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Adquira agora 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

## Visão geral

[MicroPython](https://github.com/micropython/micropython/wiki) é um interpretador Python com suporte à emissão de código nativo para trechos de código críticos em desempenho. Ele fornece um subconjunto dos recursos principais do Python 3.6+, otimizados para microcontroladores e sistemas com recursos limitados. Ele é diferente do CPython, e você pode ler mais sobre as diferenças na página [MicroPython vs CPython differences](https://github.com/micropython/micropython/wiki/Differences).

## Preparação de hardware

Antes de começar, você precisa preparar uma placa de desenvolvimento XIAO STM32C5.

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO STM32C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Implantando o firmware MicroPython

Atualize o firmware MicroPython no XIAO STM32C5 entrando no modo bootloader e copiando um arquivo de firmware `.uf2` para a unidade USB de armazenamento em massa da placa.

1. Baixe e extraia o arquivo compactado do firmware MicroPython para o XIAO STM32C5:

- **📄[Firmware]** [XIAO STM32C5 MicroPython Firmware](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/xiao-stm32c5-micropython-firmware.zip)

2. Conecte o XIAO STM32C5 ao computador via USB. Pressione rapidamente duas vezes o botão **Reset** para entrar no modo bootloader. Uma unidade USB chamada **XIAOC5BOOT** deve aparecer. Copie **micropython-xiao-stm32c5.uf2** do arquivo extraído para essa unidade. A placa será reiniciada automaticamente após a instalação do firmware.

:::tip
Se **XIAOC5BOOT** não aparecer, desconecte e reconecte o cabo USB e, em seguida, pressione duas vezes **Reset** novamente. Certifique-se de que o cabo USB suporta transferência de dados.
:::

## Instalar o [Thonny IDE](https://thonny.org/)

Escolha a versão apropriada para instalação. Aqui, estou instalando em um sistema Windows, então selecionei a versão para Windows.

Siga as instruções para a versão de Python desejada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/thonny_ide_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
Em seguida, basta seguir as etapas padrão de configuração.


### Configuração do interpretador

- Abra o Thonny IDE e configure o interpretador e a porta serial para o XIAO STM32C5.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/mpy_1.png" style={{width:800, height:'auto'}}/></div>
- Após o firmware ter sido instalado e o Thonny ter se conectado ao XIAO STM32C5, as informações do firmware MicroPython aparecerão no painel Shell.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/mpy_2.png" style={{width:800, height:'auto'}}/></div>
## Mapa de pinos

:::tip

- Para detalhes completos do pinout, consulte a [XIAO STM32C5 Pin List](https://wiki.seeedstudio.com/pt-br/xiao_stm32c5_getting_started/#visão-geral-do-hardware).

:::

| Pino / Sinal | GPIO | Função | Uso no MicroPython |
|---|---|---|---|
| D0 / A0 | PA0 | ADC1_IN0 / GPIO | `XiaoADC(0)` / `XiaoPin(0)` |
| D1 / A1 | PA1 | ADC1_IN1 / GPIO | `XiaoADC(1)` / `XiaoPin(1)` |
| D2 / A2 | PA2 | ADC1_IN2 / GPIO | `XiaoADC(2)` / `XiaoPin(2)` |
| D3 / A3 | PA3 | ADC1_IN3 / GPIO | `XiaoADC(3)` / `XiaoPin(3)` |
| D4 | PB7 | I2C1 SDA / GPIO | Dados I2C do conector |
| D5 | PB6 | I2C1 SCL / GPIO | Clock I2C do conector |
| D6 | PA9 | USART1 TX / GPIO | Transmissão UART |
| D7 | PA10 | USART1 RX / GPIO | Recepção UART |
| D8 | PE2 | SPI3 SCK / GPIO | Clock SPI por hardware |
| D9 | PB0 | SPI3 MISO / GPIO | Entrada de dados SPI por hardware |
| D10 | PB15 | SPI3 MOSI / GPIO | Saída de dados SPI por hardware |
| D11 | PB8 | GPIO / FDCAN1 RX disponível | FDCAN1 não está habilitado no firmware atual |
| D12 | PB9 | GPIO / FDCAN1 TX disponível | FDCAN1 não está habilitado no firmware atual |
| D13 | PB5 | FDCAN2 RX / GPIO | `XiaoCAN("can0", ...)` |
| D14 | PB13 | FDCAN2 TX / GPIO | `XiaoCAN("can0", ...)` |
| D15 / CAN_STB | PB14 | Standby do transceptor CAN | Low: normal; high: standby |
| CAN_H | — | Barramento diferencial CAN FD alto | Saída do transceptor CAN onboard; não é um GPIO |
| CAN_L | — | Barramento diferencial CAN FD baixo | Saída do transceptor CAN onboard; não é um GPIO |
| BAT_EN | PA15 | Habilitar medição da bateria | `XiaoPin("bat_en", Pin.OUT)` |
| BAT_READ | PA4 | ADC1_IN4 | `XiaoADC("vbat")`; a tensão da bateria é aproximadamente a tensão do ADC × 2 |
| IMU_SDA | PB4 | I2C2 SDA | Dados do LSM6DS3TR-C onboard |
| IMU_SCL | PB3 | I2C2 SCL | Clock do LSM6DS3TR-C onboard |
| IMU_INT | PC13 | IMU INT1 | `XiaoPin("imu_int", Pin.IN)` |
| IMU_HEATER_PWM | PA8 | TIM1_CH1 PWM | `XiaoPWM(0)` |
| USER_LED | PB12 | Saída GPIO | `XiaoPin("led", Pin.OUT)`; ativo em nível baixo |


## Piscar LED

Os pinos digitais realizam principalmente o controle liga-desliga de sensores e atuadores externos, por meio da saída de níveis lógicos alto e baixo. Combinado com a placa de expansão Grove Base for XIAO e módulos periféricos Grove padrão, esta seção detalha a lógica de driver subjacente e os métodos práticos de invocação dos pinos digitais no XIAO STM32C5.

### Preparação de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - LED Pack</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-led-pack-all-2.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Programa de software

Este exemplo usa o pino D1 do XIAO STM32C5 como saída digital para piscar um LED externo.

1. No Thonny, selecione **File > New** para criar um arquivo e, em seguida, insira o seguinte código:

```py
# Copyright (c) 2026 Seeed Technology Co., Ltd.
# SPDX-License-Identifier: Apache-2.0
#
# Blinky example for XIAO STM32C5 with TinyUF2 bootloader support.

import time
from machine import Pin
from boards.xiao import XiaoPin

SLEEP_TIME_MS = 1000
D1_PIN = 1

# D1 corresponds to PA1.
d1_gpio = XiaoPin(D1_PIN, Pin.OUT)

# Match GPIO_OUTPUT_ACTIVE in the Zephyr example.
led_state = True
d1_gpio.value(1)

try:
    while True:
        led_state = not led_state
        d1_gpio.value(1 if led_state else 0)

        print("LED state:", "ON" if led_state else "OFF")
        time.sleep_ms(SLEEP_TIME_MS)

except KeyboardInterrupt:
    # Turn the output off when the script is stopped.
    d1_gpio.value(0)
    print("Blinky stopped")
```

2. Selecione **Run > Run current script** ou pressione **F5**.

### Resultado

Após o início do script, o LED externo conectado ao D1 pisca em intervalos de um segundo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_1.gif" style={{width:600, height:'auto'}}/></div>

## Acionar um servo motor

PWM é uma função de saída de forma de onda temporizada implementada com base em GPIOs de saída digital. Ela alterna rapidamente os níveis do pino em uma frequência fixa e ajusta dinamicamente o ciclo de trabalho do nível alto dentro de um único ciclo, de modo a fornecer sinais analógicos equivalentes para os periféricos. Em aplicações de engenharia prática, PWM é amplamente utilizado para controle preciso de ângulo de servomotores e ajuste suave de brilho de LEDs.

### Preparação de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Servo</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedimg2016-06rjmxymiq9lqxkkxxwg6udxfm.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Servo.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Programa de software

Este exemplo usa D0 no XIAO STM32C5 como o pino de sinal de controle do servo. A temporização é gerada por software em vez de por um periférico PWM de hardware.

1. No Thonny, selecione **File > New** para criar um arquivo e, em seguida, insira o seguinte código:

```py
import time
from machine import Pin
from boards.xiao import XiaoPin

SERVO_PIN = 0                  # D0 / PA0
SERVO_PERIOD_US = 20_000       # 50 Hz
SERVO_MIN_US = 1_000           # Approximately 0 degrees
SERVO_MAX_US = 2_000           # Approximately 180 degrees

servo = XiaoPin(SERVO_PIN, Pin.OUT)
servo.value(0)


def output_servo_frame(angle):
    """Output one 20 ms servo-control frame."""
    angle = max(0, min(180, angle))

    pulse_us = SERVO_MIN_US + (
        angle * (SERVO_MAX_US - SERVO_MIN_US) // 180
    )

    frame_start = time.ticks_us()

    servo.value(1)
    time.sleep_us(pulse_us)
    servo.value(0)

    elapsed = time.ticks_diff(time.ticks_us(), frame_start)
    remaining = SERVO_PERIOD_US - elapsed

    if remaining > 0:
        time.sleep_us(remaining)


def hold_angle(angle, duration_ms):
    """Keep the servo at an angle for the specified duration."""
    frames = max(1, duration_ms // 20)

    for _ in range(frames):
        output_servo_frame(angle)


try:
    print("Software servo control started on D0")

    hold_angle(90, 1000)

    while True:
        for angle in range(0, 181):
            output_servo_frame(angle)

        for angle in range(180, -1, -1):
            output_servo_frame(angle)

except KeyboardInterrupt:
    print("Servo control stopped")

finally:
    servo.value(0)
```

2. Selecione **Run > Run current script** ou pressione **F5**.

### Resultado

Após o início do script, o servo varre repetidamente de aproximadamente 0° a 180° e volta para 0°. O loop avança o comando em 1° por quadro de controle de 20 ms, correspondendo a uma taxa nominal de varredura de comando de 50°/s (aproximadamente 0,87 rad/s), excluindo a sobrecarga de execução e os próprios limites mecânicos do servo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_2.gif" style={{width:600, height:'auto'}}/></div>

## Acionar um motor DM-J4310-2EC via CAN

O XIAO STM32C5 fornece duas interfaces CAN FD. Uma expõe sinais de transmissão e recepção em nível lógico para uso com um transceptor CAN externo. A outra está conectada ao transceptor CAN FD TCAN3403-Q1 integrado e pode se conectar diretamente a um barramento CAN por meio de CAN_H e CAN_L. O CAN FD permanece compatível com o CAN Clássico, ao mesmo tempo em que oferece uma carga útil maior e uma taxa de bits de fase de dados mais alta, tornando-o adequado para eletrônica automotiva, controle industrial, robótica e redes de sensores distribuídos.

O circuito CAN FD integrado também inclui um resistor de terminação de 120 Ω desconectável. Ative esse resistor quando a placa estiver em uma das extremidades do barramento. Desconecte-o quando a placa estiver no meio do barramento ou quando outro resistor de 120 Ω já estiver instalado na extremidade do barramento do XIAO. O transceptor também oferece suporte ao controle de standby para reduzir o consumo de energia quando a comunicação CAN não estiver em uso.

- Uso de referência: [XIAO STM32C5 CANFD Usage](https://wiki.seeedstudio.com/pt-br/xiao_stm32c5_canfd_usage/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_2.png" style={{width:550, height:'auto'}}/></div>

### Preparação de hardware

- XIAO STM32C5 × 1
- Computador e cabo de dados USB Tipo-C
- Fonte de alimentação DC regulada de 24 V adequada para o motor
- Motor DM-J4310-2EC × 1
- Placa de Separação de Energia XT30 2+2

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO STM32C5</th>
   <th>DM4310</th>
   <th>Placa de Separação de Energia XT30 2+2</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png"
            style={{width: 400, height: 'auto'}}
          />
        </div>
      </td>
         <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-100094243--seeed-gripper-01.jpg"
            style={{width: 400, height: 'auto'}}
          />
        </div>
      </td>
            <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100045091-xt30-2_2-power-separationboard.jpg"
            style={{width: 400, height: 'auto'}}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Adquira agora 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
      </td>
         <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Gripper-01-p-6561.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Adquira agora 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
      </td>
   <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XT30-2-2-Power-Separation-Board-p-6707.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Adquira agora 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>

### Programa de software

:::caution
O motor requer uma alimentação de 24 V. Use uma fonte de alimentação em conformidade, limitada em corrente e com uma corrente nominal apropriada. Desligue a fonte antes de alterar qualquer fiação, mantenha o motor sem carga durante os testes iniciais e conecte o terra do XIAO ao terminal negativo da fonte de alimentação do motor. Alimentação ou fiação incorretas podem danificar o equipamento e criar um risco de segurança.
:::

1. Use o software de configuração Damiao para computador host para definir o **CAN ID** do motor como `0x001` e o **Master ID** como `0x011`. Para mais detalhes, consulte [Getting Started with the Damiao 43 Series Motors](https://wiki.seeedstudio.com/pt-br/damiao_series/).

- Conecte o motor aos pads traseiros CAN_H e CAN_L do XIAO STM32C5. O transceptor integrado usa D13/PB5 (RX), D14/PB13 (TX) e D15/PB14 (standby); coloque D15 em nível baixo para operação normal.

2. No Thonny, selecione **File > New** para criar um arquivo e, em seguida, salve o seguinte programa como `driver_dm4310.py`:

<details>

<summary>driver_dm4310.py</summary>

```py
"""Drive a Damiao DM-J4310-2EC V1.1 from XIAO STM32C5.
This motor example uses Classical CAN at 1 Mbit/s (fd=False), although the board supports CAN FD.
Protocol: classic CAN 2.0B at 1 Mbit/s, Damiao speed mode.

Wiring:
    XIAO CAN_H -> motor CAN_H
    XIAO CAN_L -> motor CAN_L
    XIAO GND   -> motor GND / 24 V negative
    Motor VCC  -> external 24 V positive

Use 120-ohm termination at both ends of the CAN bus. Never connect the
MCU-side CAN TX/RX pins directly to the motor.
"""

import struct
import time
from machine import Pin
from boards.xiao import XiaoCAN, XiaoPin


# Motor and CAN configuration.
DM_MOTOR_ID = 0x001
DM_MASTER_ID = 0x011
DM_CAN_BITRATE = 1_000_000

DM_CONTROL_ID = 0x200 + DM_MOTOR_ID
DM_PARAM_ID = 0x7FF

DM_CMD_ENABLE = 0xFC
DM_CMD_DISABLE = 0xFD
DM_CMD_CLEAR_ERROR = 0xFB

DM_PARAM_WRITE = 0x55
DM_REG_CTRL_MODE = 0x0A
DM_CTRL_MODE_SPEED = 3

DM_VMAX_RAD_S = 30.0

CONTROL_PERIOD_MS = 20
GEAR_PERIOD_MS = 5_000
FEEDBACK_PRINT_MS = 500
START_DELAY_MS = 3_000

# Same speed sequence as the Zephyr example.
SPEED_SEQUENCE = (0.0, 3.0, 6.0, 10.0, 6.0, 3.0)


def send_control(can, command):
    payload = bytes((0xFF, 0xFF, 0xFF, 0xFF,
                     0xFF, 0xFF, 0xFF, command))
    can.send(DM_CONTROL_ID, payload)


def write_u32_parameter(can, register, value):
    payload = struct.pack(
        "<HBBI",
        DM_MOTOR_ID,
        DM_PARAM_WRITE,
        register,
        value,
    )
    can.send(DM_PARAM_ID, payload)


def send_speed(can, speed_rad_s):
    can.send(DM_CONTROL_ID, struct.pack("<f", float(speed_rad_s)))


def decode_feedback(frame):
    """Return decoded Damiao feedback, or None for an unrelated frame."""
    if frame is None or len(frame) < 2:
        return None

    can_id = frame[0]
    data = frame[1]

    if data is None or len(data) < 8:
        return None

    motor_id = data[0] & 0x0F
    if motor_id != (DM_MOTOR_ID & 0x0F):
        return None

    fault = data[0] >> 4
    position_raw = (data[1] << 8) | data[2]
    velocity_raw = (data[3] << 4) | (data[4] >> 4)
    torque_raw = ((data[4] & 0x0F) << 8) | data[5]

    velocity_rad_s = (
        (velocity_raw / 4095.0) * 2.0 - 1.0
    ) * DM_VMAX_RAD_S

    return {
        "can_id": can_id,
        "motor_id": motor_id,
        "fault": fault,
        "position_raw": position_raw,
        "velocity_raw": velocity_raw,
        "velocity_rad_s": velocity_rad_s,
        "torque_raw": torque_raw,
        "mos_temperature": data[6],
        "rotor_temperature": data[7],
    }


def print_feedback(feedback):
    print(
        "FB id=0x{:03X} motor={} err=0x{:X} pos=0x{:04X} "
        "vel=0x{:03X} {:.2f}rad/s tq=0x{:03X} mos={}C rotor={}C".format(
            feedback["can_id"],
            feedback["motor_id"],
            feedback["fault"],
            feedback["position_raw"],
            feedback["velocity_raw"],
            feedback["velocity_rad_s"],
            feedback["torque_raw"],
            feedback["mos_temperature"],
            feedback["rotor_temperature"],
        )
    )


def drain_feedback(can, duration_ms, print_frames=False):
    deadline = time.ticks_add(time.ticks_ms(), duration_ms)

    while time.ticks_diff(deadline, time.ticks_ms()) > 0:
        frame = can.recv(0)
        if frame is None:
            time.sleep_ms(5)
            continue

        feedback = decode_feedback(frame)
        if print_frames and feedback is not None:
            print_feedback(feedback)


def initialise_motor(can):
    # Clear error -> select speed mode -> enable.
    send_control(can, DM_CMD_CLEAR_ERROR)
    drain_feedback(can, 100)

    write_u32_parameter(can, DM_REG_CTRL_MODE, DM_CTRL_MODE_SPEED)
    drain_feedback(can, 100)

    send_control(can, DM_CMD_ENABLE)
    drain_feedback(can, 100)


def stop_motor(can):
    """Best-effort controlled stop followed by motor disable."""
    if can is None:
        return

    try:
        # Repeat zero speed briefly so the motor receives the stop request.
        for _ in range(5):
            send_speed(can, 0.0)
            time.sleep_ms(CONTROL_PERIOD_MS)
        send_control(can, DM_CMD_DISABLE)
        time.sleep_ms(50)
    except Exception as exc:
        print("Motor stop warning:", exc)


def main():
    can = None
    can_stb = None

    try:
        print("XIAO STM32C5 DM-J4310-2EC speed-mode driver")
        print(
            "motor_id=0x{:03X} master_id=0x{:03X} bitrate={}Mbps".format(
                DM_MOTOR_ID,
                DM_MASTER_ID,
                DM_CAN_BITRATE // 1_000_000,
            )
        )

        # PB14 / D15 is active-high standby. Drive it low for normal mode.
        can_stb = XiaoPin(15, Pin.OUT)
        can_stb.value(0)
        time.sleep_ms(10)

        can = XiaoCAN(
            "can0",
            bitrate=DM_CAN_BITRATE,
            data_bitrate=2_000_000,
            fd=False,
            loopback=False,
        )

        print("Check wiring and keep the motor unloaded.")
        print("Starting in {} seconds...".format(START_DELAY_MS // 1000))
        time.sleep_ms(START_DELAY_MS)

        initialise_motor(can)
        print("Motor enabled in speed mode")

        sequence_index = 0
        speed = SPEED_SEQUENCE[sequence_index]
        print("Target speed: {:.2f} rad/s".format(speed))

        next_gear = time.ticks_add(time.ticks_ms(), GEAR_PERIOD_MS)
        last_feedback_print = time.ticks_ms()

        while True:
            now = time.ticks_ms()

            if time.ticks_diff(now, next_gear) >= 0:
                sequence_index = (sequence_index + 1) % len(SPEED_SEQUENCE)
                speed = SPEED_SEQUENCE[sequence_index]
                print("Target speed: {:.2f} rad/s".format(speed))
                next_gear = time.ticks_add(next_gear, GEAR_PERIOD_MS)

            send_speed(can, speed)

            # Drain every queued frame so the MicroPython CAN queue cannot fill.
            while True:
                frame = can.recv(0)
                if frame is None:
                    break

                feedback = decode_feedback(frame)
                if feedback is None:
                    continue

                if time.ticks_diff(now, last_feedback_print) >= FEEDBACK_PRINT_MS:
                    print_feedback(feedback)
                    last_feedback_print = now

            time.sleep_ms(CONTROL_PERIOD_MS)

    except KeyboardInterrupt:
        print("User requested stop")
    except Exception as exc:
        print("Motor driver error:", exc)
        raise
    finally:
        stop_motor(can)

        if can is not None:
            try:
                can.deinit()
            except Exception:
                pass

        if can_stb is not None:
            try:
                can_stb.value(1)
            except Exception:
                pass

        print("Motor disabled; CAN transceiver in standby")


if __name__ == "__main__":
    main()

```

</details>

3. Selecione **Run > Run current script** ou pressione **F5**.

### Resultado

Depois que o motor é habilitado, o DM-J4310 alterna ciclicamente entre velocidades alvo de `0 → 3 → 6 → 10 → 6 → 3 rad/s`, mudando o alvo a cada cinco segundos. O Shell exibe a velocidade alvo selecionada e os dados de realimentação do motor decodificados. O exemplo não controla o LED onboard.

:::tip

Conecte o CAN_H no XIAO STM32C5 ao CAN_H no motor e o CAN_L ao CAN_L. Conecte também os terras. Inverter as linhas diferenciais ou omitir o terra comum pode impedir a comunicação.

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_12.gif" style={{width:400, height:'auto'}}/></div>
## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
