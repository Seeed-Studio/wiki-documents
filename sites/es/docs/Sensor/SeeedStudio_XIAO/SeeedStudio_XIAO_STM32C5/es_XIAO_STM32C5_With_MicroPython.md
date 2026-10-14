---
title: XIAO STM32C5 con MicroPython
description: Aprende cómo instalar MicroPython en la Seeed Studio XIAO STM32C5 y usar GPIO, señales de control de servomotor generadas por software y CAN para crear aplicaciones prácticas.
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
url: https://wiki.seeedstudio.com/es/xiao_stm32c5_with_micropython/
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
                  Consigue uno ahora 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

## Descripción general

[MicroPython](https://github.com/micropython/micropython/wiki) es un intérprete de Python con compatibilidad para emisión de código nativo para el código crítico en rendimiento. Proporciona un subconjunto de las funciones principales de Python 3.6+, optimizado para microcontroladores y sistemas con recursos limitados. Es diferente de CPython, y puedes leer más sobre las diferencias en la página [MicroPython vs CPython differences](https://github.com/micropython/micropython/wiki/Differences).

## Preparación de hardware

Antes de comenzar, necesitas preparar una placa de desarrollo XIAO STM32C5.

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Despliegue del firmware MicroPython

Actualiza el firmware MicroPython en la XIAO STM32C5 entrando en modo bootloader y copiando un archivo de firmware `.uf2` a la unidad de almacenamiento masivo USB de la placa.

1. Descarga y extrae el archivo comprimido del firmware MicroPython para XIAO STM32C5:

- **📄[Firmware]** [Firmware MicroPython para XIAO STM32C5](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/xiao-stm32c5-micropython-firmware.zip)

2. Conecta la XIAO STM32C5 a tu ordenador mediante USB. Pulsa rápidamente dos veces el botón **Reset** para entrar en modo bootloader. Debería aparecer una unidad USB llamada **XIAOC5BOOT**. Copia **micropython-xiao-stm32c5.uf2** desde el archivo extraído a esa unidad. La placa se reiniciará automáticamente después de que el firmware se haya instalado.

:::tip
Si **XIAOC5BOOT** no aparece, desconecta y vuelve a conectar el cable USB y, a continuación, pulsa dos veces **Reset** de nuevo. Asegúrate de que el cable USB admite transferencia de datos.
:::

## Instalar [Thonny IDE](https://thonny.org/)

Elige la versión adecuada para la instalación. Aquí lo estoy instalando en un sistema Windows, así que he seleccionado la versión para Windows.

Sigue las instrucciones para la versión de Python deseada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/thonny_ide_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
Luego, simplemente sigue los pasos predeterminados para la configuración.


### Configuración del intérprete

- Abre Thonny IDE y configura el intérprete y el puerto serie para la XIAO STM32C5.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/mpy_1.png" style={{width:800, height:'auto'}}/></div>
- Después de que el firmware se haya instalado y Thonny se haya conectado a la XIAO STM32C5, la información del firmware MicroPython aparecerá en el panel Shell.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/mpy_2.png" style={{width:800, height:'auto'}}/></div>
## Mapa de pines

:::tip

- Para obtener detalles completos del pinout, consulta la [lista de pines de XIAO STM32C5](https://wiki.seeedstudio.com/es/xiao_stm32c5_getting_started/#visión-general-del-hardware).

:::

| Pin / Señal | GPIO | Función | Uso en MicroPython |
|---|---|---|---|
| D0 / A0 | PA0 | ADC1_IN0 / GPIO | `XiaoADC(0)` / `XiaoPin(0)` |
| D1 / A1 | PA1 | ADC1_IN1 / GPIO | `XiaoADC(1)` / `XiaoPin(1)` |
| D2 / A2 | PA2 | ADC1_IN2 / GPIO | `XiaoADC(2)` / `XiaoPin(2)` |
| D3 / A3 | PA3 | ADC1_IN3 / GPIO | `XiaoADC(3)` / `XiaoPin(3)` |
| D4 | PB7 | I2C1 SDA / GPIO | Datos I2C del encabezado |
| D5 | PB6 | I2C1 SCL / GPIO | Reloj I2C del encabezado |
| D6 | PA9 | USART1 TX / GPIO | Transmisión UART |
| D7 | PA10 | USART1 RX / GPIO | Recepción UART |
| D8 | PE2 | SPI3 SCK / GPIO | Reloj SPI por hardware |
| D9 | PB0 | SPI3 MISO / GPIO | Entrada de datos SPI por hardware |
| D10 | PB15 | SPI3 MOSI / GPIO | Salida de datos SPI por hardware |
| D11 | PB8 | GPIO / FDCAN1 RX compatible | FDCAN1 no está habilitado en el firmware actual |
| D12 | PB9 | GPIO / FDCAN1 TX compatible | FDCAN1 no está habilitado en el firmware actual |
| D13 | PB5 | FDCAN2 RX / GPIO | `XiaoCAN("can0", ...)` |
| D14 | PB13 | FDCAN2 TX / GPIO | `XiaoCAN("can0", ...)` |
| D15 / CAN_STB | PB14 | Modo de espera del transceptor CAN | Bajo: normal; alto: espera |
| CAN_H | — | Bus diferencial CAN FD alto | Salida del transceptor CAN integrado; no es un GPIO |
| CAN_L | — | Bus diferencial CAN FD bajo | Salida del transceptor CAN integrado; no es un GPIO |
| BAT_EN | PA15 | Habilitación de medición de batería | `XiaoPin("bat_en", Pin.OUT)` |
| BAT_READ | PA4 | ADC1_IN4 | `XiaoADC("vbat")`; el voltaje de la batería es aproximadamente el voltaje ADC × 2 |
| IMU_SDA | PB4 | I2C2 SDA | Datos del LSM6DS3TR-C integrado |
| IMU_SCL | PB3 | I2C2 SCL | Reloj del LSM6DS3TR-C integrado |
| IMU_INT | PC13 | IMU INT1 | `XiaoPin("imu_int", Pin.IN)` |
| IMU_HEATER_PWM | PA8 | TIM1_CH1 PWM | `XiaoPWM(0)` |
| USER_LED | PB12 | Salida GPIO | `XiaoPin("led", Pin.OUT)`; activo en bajo |


## Parpadeo de LED

Los pines digitales realizan principalmente el control de encendido y apagado de sensores y actuadores externos mediante la salida de niveles lógicos altos y bajos. Combinado con la placa de expansión Grove Base for XIAO y los módulos periféricos Grove estándar, esta sección detalla la lógica de controlador subyacente y los métodos prácticos de invocación de los pines digitales en la XIAO STM32C5.

### Preparación de hardware

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Programa de software

Este ejemplo utiliza el pin D1 de la XIAO STM32C5 como salida digital para hacer parpadear un LED externo.

1. En Thonny, selecciona **File > New** para crear un archivo y luego introduce el siguiente código:

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

2. Selecciona **Run > Run current script**, o pulsa **F5**.

### Resultado

Después de que el script se inicie, el LED externo conectado a D1 parpadea a intervalos de un segundo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_1.gif" style={{width:600, height:'auto'}}/></div>

## Controlar un servomotor

PWM es una función de salida de forma de onda temporizada implementada sobre la base de GPIO de salida digital. Cambia rápidamente los niveles del pin a una frecuencia fija y ajusta dinámicamente el ciclo de trabajo del nivel alto dentro de un solo ciclo, para así enviar señales analógicas equivalentes a los periféricos. En aplicaciones de ingeniería práctica, PWM se utiliza ampliamente para el control preciso del ángulo de servomotores y el ajuste suave del brillo de los LED.

### Preparación de hardware

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Servo.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Programa de software

Este ejemplo utiliza D0 en el XIAO STM32C5 como el pin de señal de control del servo. El temporizado se genera por software en lugar de mediante un periférico PWM de hardware.

1. En Thonny, selecciona **File > New** para crear un archivo y luego introduce el siguiente código:

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

2. Selecciona **Run > Run current script**, o pulsa **F5**.

### Resultado

Después de que el script se inicie, el servo barre repetidamente desde aproximadamente 0° hasta 180° y de vuelta a 0°. El bucle avanza la orden en 1° por cada trama de control de 20 ms, lo que corresponde a una velocidad nominal de barrido de 50°/s (aproximadamente 0,87 rad/s), excluyendo la sobrecarga de ejecución y los propios límites mecánicos del servo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_2.gif" style={{width:600, height:'auto'}}/></div>

## Controlar un motor DM-J4310-2EC mediante CAN

El XIAO STM32C5 proporciona dos interfaces CAN FD. Una expone señales de transmisión y recepción a nivel lógico para usar con un transceptor CAN externo. La otra está conectada al transceptor CAN FD TCAN3403-Q1 integrado y puede conectarse directamente a un bus CAN a través de CAN_H y CAN_L. CAN FD sigue siendo compatible con CAN Clásico y al mismo tiempo admite una carga útil mayor y una mayor velocidad de bits en la fase de datos, lo que lo hace adecuado para electrónica automotriz, control industrial, robótica y redes de sensores distribuidos.

El circuito CAN FD integrado también incluye una resistencia de terminación de 120 Ω desconectable. Activa esta resistencia cuando la placa esté en un extremo del bus. Desconéctala cuando la placa esté en medio del bus o cuando ya haya otra resistencia de 120 Ω instalada en el extremo del bus del XIAO. El transceptor también admite control de modo de espera para reducir el consumo de energía cuando la comunicación CAN no está en uso.

- Uso de referencia: [XIAO STM32C5 CANFD Usage](https://wiki.seeedstudio.com/es/xiao_stm32c5_canfd_usage/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_2.png" style={{width:550, height:'auto'}}/></div>

### Preparación de hardware

- XIAO STM32C5 × 1
- Ordenador y cable de datos USB tipo C
- Fuente de alimentación de CC regulada de 24 V adecuada para el motor
- Motor DM-J4310-2EC × 1
- XT30 2+2 Power Separation Board

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO STM32C5</th>
   <th>DM4310</th>
   <th>XT30 2+2 Power Separation Board</th>
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
                  Consigue uno ahora 🖱️
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
                  Consigue uno ahora 🖱️
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
                  Consigue uno ahora 🖱️
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
El motor requiere una alimentación de 24 V. Utiliza una fuente de alimentación conforme, limitada en corriente y con una corriente nominal adecuada. Apaga la fuente antes de cambiar cualquier cableado, mantén el motor sin carga durante las pruebas iniciales y conecta la tierra del XIAO al terminal negativo de la fuente de alimentación del motor. Una alimentación o un cableado incorrectos pueden dañar el equipo y crear un riesgo para la seguridad.
:::

1. Utiliza el software de configuración Damiao para ordenador host para establecer el **CAN ID** del motor en `0x001` y el **Master ID** en `0x011`. Para más detalles, consulta [Getting Started with the Damiao 43 Series Motors](https://wiki.seeedstudio.com/es/damiao_series/).

- Conecta el motor a las almohadillas CAN_H y CAN_L traseras del XIAO STM32C5. El transceptor integrado utiliza D13/PB5 (RX), D14/PB13 (TX) y D15/PB14 (modo de espera); lleva D15 a nivel bajo para el funcionamiento normal.

2. En Thonny, selecciona **File > New** para crear un archivo y luego guarda el siguiente programa como `driver_dm4310.py`:

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

3. Selecciona **Run > Run current script** o presiona **F5**.

### Resultado

Después de que el motor esté habilitado, el DM-J4310 recorre velocidades objetivo de `0 → 3 → 6 → 10 → 6 → 3 rad/s`, cambiando el objetivo cada cinco segundos. La Shell muestra la velocidad objetivo seleccionada y los datos de retroalimentación del motor decodificados. El ejemplo no controla el LED integrado.

:::tip

Conecta CAN_H en la XIAO STM32C5 a CAN_H en el motor, y CAN_L a CAN_L. Conecta también las tierras. Invertir las líneas diferenciales u omitir la tierra común puede impedir la comunicación.

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_12.gif" style={{width:400, height:'auto'}}/></div>
## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
