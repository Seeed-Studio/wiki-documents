---
description: Este wiki proporciona un tutorial para los motores de la serie Damiao.
title: Motores de la Serie Damiao
keywords:
- actuator
- motor
- arm
- robotics
image: https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/damiao.webp
slug: /es/damiao_series
last_update:
  date: 06/1/2025
  author: ZhuYaoHui
---

# Introducción a los Motores de la Serie Damiao 43

Este artículo presentará cómo comenzar con los motores de la serie Damiao 43 y cómo usarlos con C++ y Python en el reComputer Mini Jetson Orin.

<div align="center">
    <img width={400}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/damiao.png" />
</div>

## Especificaciones

Aquí está la tabla completa con todos los parámetros completados para todos los modelos de motor:

 Motor Model | Rated Torque (Nm) | Peak Torque (Nm) | No-load Speed (rpm) | Rated Speed (rpm) | Reduction Ratio | Size Diameter*Height (mm) | Weight (g) | Supply Voltage (V) | Recommended Voltage Range (V) | Rated Phase Current (A) | Peak Phase Current (A) | Rated Power (W) | Pole Pairs | Communication Method | Encoder Type | Installation | Phase Resistance (Ω) | Phase Inductance (uH) | Flux Linkage (Wb) | Rotational Inertia (Kg*m²) | Torque Constant (Nm/A) | Drive Max Current (A) | Speed Loop KP | Default PMAX (rad) | Default VMAX (rad/s) | Default TMAX (Nm) | Speed Constant |
------------|------------------|-----------------|---------------------|------------------|----------------|--------------------------|-----------|-------------------|-----------------------------|------------------------|----------------------|----------------|-----------|---------------------|-------------|-------------|----------------------|---------------------|------------------|--------------------------|----------------------|---------------------|--------------|------------------|------------------|----------------|---------------|
J4310-2EC V1.1 | 3 | 7 | 200 | 120 | 10 | 57 * 46 | ~300 | 24 | 15-32 | 3.7 | 7.2 | 37.699112 | 14 | CAN, CANFD | Magnetic, Dual | Built-in | 0.85 | 345 | 0.0045 | 1.80E-05 | 0.945 | 10.261194 | 3.72E-04 | 12.5 | 30 | 10 | 87.512523 |
J4310-2EC V1.1(48V) | 3 | 7 | 400 | 120 | 10 | 57 * 46 | ~300 | 48 | 15-52 | 3.7 | 7.2 | 37.699112 | 14 | CAN, CANFD | Magnetic, Dual | Built-in | 0.85 | 345 | 0.0045 | 1.80E-05 | 0.945 | 10.261194 | 3.72E-04 | 12.5 | 30 | 10 | 87.512523 |
J4340-2EC | 9 | 27 | 52.5 | 36 | 40 | 57 * 53.3 | ~362 | 24 | 15-32 | 3 | 8 | 33.929201 | 14 | CAN, CANFD | Magnetic, Dual | Built-in | 0.88 | 360 | 0.00485 | 2.00E-05 | 4.074 | 10.261194 | 9.59E-05 | 12.5 | 8 | 28 | 81.197186 |
J4340-2EC(48V) | 9 | 27 | 100 | 36 | 40 | 57 * 53.3 | ~362 | 48 | 15-52 | 2.5 | 9 | 33.929201 | 14 | CAN, CANFD | Magnetic, Dual | Built-in | 0.88 | 360 | 0.00485 | 2.00E-05 | 4.074 | 10.261194 | 9.59E-05 | 12.5 | 8 | 28 | 81.197186 |
J4340P-2EC | 9 | 27 | 52.5 | 36 | 40 | 57 * 56.5 | ~375 | 24 | 15-32 | 3 | 8 | 33.929201 | 14 | CAN, CANFD | Magnetic, Dual | Built-in | 0.88 | 360 | 0.00485 | 2.00E-05 | 4.074 | 10.261194 | 9.59E-05 | 12.5 | 8 | 28 | 81.197186 |
J4340P-2EC(48V) | 9 | 27 | 100 | 36 | 40 | 57 * 56.5 | ~375 | 48 | 15-52 | 2.5 | 9 | 33.929201 | 14 | CAN, CANFD | Magnetic, Dual | Built-in | 0.88 | 360 | 0.00485 | 2.00E-05 | 4.074 | 10.261194 | 9.59E-05 | 12.5 | 8 | 28 | 81.197186 |

## Características Principales

1. **CAN BUS & CANFD**
2. **Codificador Dual**
3. **Alta Densidad de Torque**
4. **Alta Precisión**
5. **Diseño Hueco**

## Introducción

### Preparación del Entorno Antes del Uso

**Sistema Windows en PC**

- Descarga las [Herramientas de Depuración de Damiao](https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/Debugging_Tools_v.1.6.8.8.exe).
- Descarga las [Herramientas USB2CAN](https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/USB2CAN_2.0.0.3.exe)

### Conectar el Circuito a la PC

Utilizamos el método de comunicación CAN, que requiere una interfaz USB-CAN adicional para la depuración a través de una computadora superior en Windows.

<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/circcuit.jpg" />
</div>

Aquí, necesitas proporcionar una fuente de alimentación de 24V separada para el motor y conectar el USB a tu computadora.

### Usar el `Debugging_Tools_v.1.6.8.8.exe` para Probar el Motor

Puedes cambiar entre chino e inglés en la parte inferior de la aplicación.

| **Configurar parámetros de conexión del puerto serie** | **conectar al motor** | **Leer Parámetros** | **Establecer CAN ID** |**Escribir Parámetros** |
|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/1.png) | ![fig2](https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/2.png) | ![fig3](https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/3.png) | ![fig4](https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/4.png) |![fig5](https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/5.png) |
| Para el Puerto Serie, usa el puerto reconocido automáticamente por la computadora, con todas las demás configuraciones como predeterminadas. | Después de hacer clic en el botón 'Abrir Puerto', se conectará automáticamente a la computadora host. Si esta es la primera conexión, la información del motor se imprimirá en el cuadro de diálogo|En la sección 'Establecer Parámetros', hacer clic en 'Leer Parámetros' mostrará la información detallada actual del motor y el modo de movimiento.|Aquí, por favor primero configura el CAN ID. |Después de la configuración, haz clic en 'Escribir Parámetros' para actualizar los parámetros. |

:::tip

**​CAN_ID**: El ID de trama utilizado por el controlador para recibir comandos CAN (hexadecimal).

**​Master ID**: El ID de trama utilizado por el controlador para enviar retroalimentación (hexadecimal).

El ​Master ID es el ID del host. Se recomienda establecer ​Master IDs únicos para cada motor.

Una buena práctica es establecer el ​Master ID más alto que el ​CAN_ID por ​0x10 (por ejemplo, si CAN_ID = 0x01, Master ID = 0x11).

​Ejemplo:

​Motor 1: CAN_ID = 0x01, Master ID = 0x11

​Motor 2: CAN_ID = 0x02, Master ID = 0x12

​¡No establezca Master ID en 0x00!
:::

#### **(1) Parámetros Básicos**  

- **NPP**: El número de pares de polos del motor, determinado automáticamente a través de calibración.  
- **UV**: Si el voltaje de suministro cae por debajo del umbral (mínimo **15V**), el controlador dejará de funcionar.  
- **OV**: Establece el límite superior de voltaje. El controlador verifica el voltaje de suministro al encenderse y deshabilita la operación si se excede (verificado solo una vez al inicio).  
- **Acc/Dec**: Utilizado en **modos no-MIT** para limitar la tasa de cambio de velocidad.  
- **GR(Gear Ratio)**: Afecta la velocidad/posición de salida e influye indirectamente en la retroalimentación de torque. Soporta valores de punto flotante.  
- **OT**: Umbral de temperatura de la bobina (recomendado ≤ **100°C**). Exceder esto activa el modo de falla (deshabilita el motor e informa error).  
- **CAN_ID**: ID de trama para recibir comandos CAN (hexadecimal).  
- **Master ID**: ID de trama para retroalimentación del controlador (hexadecimal). Mejor práctica: Establecer `MasterID = CAN_ID + 0x10` (por ejemplo, `0x01` → `0x11`). **Nunca establecer en `0x00`.**  
- **CAN Timeout**: Entero de 32 bits que define el período de tiempo de espera (unidades: ciclos de 50µs). El motor entra en modo de protección si no se detectan comandos CAN dentro de este intervalo.  
- **Speed Limit** (*Solo modo de velocidad*): Velocidad máxima antes de la desaceleración (unidades: **rad/s**).  
- **Overcurrent**: Límite máximo de corriente de fase (porcentaje).  

#### **(2) Parámetros del Motor**  

- Identificados automáticamente por el controlador. **Recalibración requerida al reemplazar la placa del controlador**. Almacenados persistentemente en el controlador.  

#### **(3) Escalado de Comandos (Configuraciones de Amplitud)**  

- **PMAX**: En **modo MIT**, escala la entrada de comando; en otros modos, escala la salida de retroalimentación. Consulte el protocolo CAN para las reglas de mapeo.  
- **VMAX**: Igual que PMAX.  
- **TMAX**: Igual que PMAX.  
- **KT_OUT**: Constante de torque del motor. Establecer en **0** si los parámetros del motor están identificados con precisión.  
- **Gear Ratio Coefficient**: Relación de transmisión de torque para engranajes.  

> **Nota**: El controlador utiliza el **formato de protocolo de comunicación MIT**.  

#### **(4) Configuraciones de Control**  

- **Modos de Control**:  
  - **Modo MIT**  
  - **Modo Posición-Velocidad** (aceleración/desaceleración trapezoidal)  
  - **Modo Velocidad**  
- **Current Bandwidth**: Ganancia del bucle de corriente (predeterminado: `1000`).  
- **Speed KP/KI, Position KP/KI**: Parámetros PID para bucles de velocidad y posición.  

### Modo de Control MIT

**1. Modo de Control de Torque MIT:**

1. En la sección Establecer Parámetros, haz clic en ​Leer Parámetros para mostrar los parámetros actuales del motor.
2. Establece el ​Modo de Control en Modo MIT.
3. Verifica el ​CAN ID configurado.
4. Haz clic en ​Escribir Parámetros para guardar todas las configuraciones.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/7.png" />
</div>

5. En la pestaña ​Prueba, haz clic en el botón ​**"Habilitar Motor"** (Ente).
6. En la sección ​Control MIT:
    - Establece ​Torque (Nm) en ​1.
    - Haz clic en ​Actualizar → ​Enviar.

El motor comenzará a girar.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/6.png" />
</div>

También puedes copiar los datos CAN (en formato hexadecimal) y usar una herramienta de depuración de puerto serie para controlar el motor.

<div align="center">
    <img width={400}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/8.png" />
</div>

**2. Modo de Control de Velocidad MIT:**

1. En la pestaña ​Prueba, haz clic en el botón ​**"Habilitar Motor"** (Ente).
2. En la sección ​Control MIT:
    - Establece Vel (rad/s) en ​5.
    - Establece KD (N*s/r) en ​1.
    - Haz clic en ​Actualizar → ​Enviar.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/9.png" />
</div>

El motor comenzará a girar. También puedes copiar los datos CAN (en formato hexadecimal) y usar una herramienta de depuración de puerto serie para controlar el motor.

**3. Modo de Control de Posición MIT:**

1. En la pestaña ​Prueba, haz clic en el botón ​**"Habilitar Motor"** (Ente).
2. Puedes usar ​**"SaveZero"** para establecer la posición actual como el punto cero.
3. En la sección ​Control MIT:
    - Establece Pos (rad) en 3.14.
    - Establece KP (N/r) en ​2.
    - Establece KD (N*s/r) en ​1.
    - Haz clic en ​Actualizar → ​Enviar.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/10.png" />
</div>

El motor comenzará a girar. También puedes copiar los datos CAN (en formato hexadecimal) y usar una herramienta de depuración de puerto serie para controlar el motor.
### Modo de Control de Velocidad

1. En la sección Establecer Parámetros, haga clic en ​Leer Param para mostrar los parámetros actuales del motor.
2. Establezca el ​Modo de Control en Modo Vel.
3. Verifique el ​ID CAN configurado.
4. Haga clic en ​Escribir Param para guardar todas las configuraciones.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/11.png" />
</div>

5. En la pestaña ​Prueba, haga clic en el botón ​**"Habilitar Motor"** (Ente).
6. En la sección Control Vel:
    - Establezca Vel (rad/s) en 5.
    - Haga clic en ​Actualizar → ​Enviar.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/12.png" />
</div>

El motor comenzará a girar. También puede copiar los datos CAN (en formato hexadecimal) y usar una herramienta de depuración de puerto serie para controlar el motor.

### Modo de Control de Posición

1. En la sección Establecer Parámetros, haga clic en ​Leer Param para mostrar los parámetros actuales del motor.
2. Establezca el ​Modo de Control en Modo Pos.
3. Verifique el ​ID CAN configurado.
4. Haga clic en ​Escribir Param para guardar todas las configuraciones.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/13.png" />
</div>

5. En la pestaña ​Prueba, haga clic en el botón ​**"Habilitar Motor"** (Ente).
6. En la sección Control Pos:
    - Establezca Pos en 3.14.
    - Establezca Vel (rad/s) en 5.
    - Haga clic en ​Actualizar → ​Enviar.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/14.png" />
</div>

El motor comenzará a girar. También puede copiar los datos CAN (en formato hexadecimal) y usar una herramienta de depuración de puerto serie para controlar el motor.

## Controlar el Motor Usando el [​reComputer Mini Jetson Orin](/es/recomputer_jetson_mini_getting_started)

Actualmente, las interfaces de comunicación CAN más comunes para motores en el mercado utilizan **XT30 (2+2)** y **conectores JST**. Nuestro **reComputer Mini Jetson Orin** y el dispositivo **reComputer Robotics** están equipados con **puertos duales XT30 (2+2)** e **interfaces CAN basadas en JST**, proporcionando compatibilidad perfecta.  

**reComputer Mini:**
<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

**reComputer Robotics**
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig5.jpg"/>  
</div>

Para más detalles sobre el uso de CAN, puede consultar esta [wiki](https://wiki.seeedstudio.com/es/recomputer_jetson_mini_hardware_interfaces_usage/#can ).

### Habilitar Interfaces CAN

**Paso1:** Antes de usar CAN0 y CAN1, retire la cubierta inferior y configure ambas resistencias de terminación de 120Ω en la posición ​ON.

<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/7.png" />
</div>

**Paso2:** Conecte el motor directamente al CAN0 del reComputer Mini a través de la interfaz XT30 (2+2).

:::tip
Para la interfaz CAN del reComputer Mini, los pines H/L están invertidos en comparación con los H/L del motor. Por lo tanto, necesita invertir las conexiones H/L en el arnés de cables XT30 2+2.
:::

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can0-datasheet.png"/>
</div>

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/15.jpg" />
</div>

:::danger
Esta fuente de alimentación es solo para aprendizaje y pruebas de un solo motor. Para múltiples motores, diseñe una placa de alimentación separada y aísle la fuente de alimentación del Jetson de la fuente de alimentación del motor para evitar que pase alta corriente directamente a través del Jetson.
:::

#### Habilitar comunicación CAN del Jetson

Abra una terminal e ingrese el siguiente comando para poner el pin GPIO en alto y activar CAN0:

```bash
gpioset --mode=wait 0 43=0
```

Si está usando la interfaz JST CAN1, ponga el pin 106 en alto.

```bash
gpioset --mode=wait 0 106=0
```

Mantenga esta terminal abierta, lance una nueva terminal y configure CAN0.

```bash
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

### Para Ejemplos en C++

#### Instalación y Compilación  

- **Instalar CMake**  

```shell
sudo apt update  
sudo apt install cmake  
```  

- **Instalar Herramientas CAN**  

```shell
sudo apt install can-utils  
```  

- **Descargar y Compilar el Programa**  

1. Crear un espacio de trabajo y clonar el repositorio:  

```shell
mkdir -p ~/orin_ws/src  
cd ~/orin_ws/src  
git clone https://gitee.com/xauter/orin-control.git  
```  

2. Compilar:  

```shell
cd ~/orin_ws/src/orin-control/dm_hw  
mkdir build  
cd build  
cmake ..  
make  
```  

#### Uso  

1. **Verificar Dispositivos CAN**  

Abra una terminal y ejecute:  

```shell
ip -brief link | grep can  
```  

2. **Ejecutar el Programa**  

En la carpeta `build`, ejecute:  

```shell
cd ~/orin_ws/src/orin-control/dm_hw/build  
./dm_main  
```  

El motor se iluminará en **verde** y girará a una **velocidad sinusoidal**.

### Control Usando Python

- **Instalar Entorno Python**  

```bash
pip install python-can numpy
```

- **Crear una carpeta llamada scripts bajo el directorio `~/damiao/scripts` para almacenar scripts de Python.**

```bash
mkdir -p ~/damiao/scripts
```

- **Crear el archivo damiao_motor.py**

```bash
cd ~/damiao/scripts
touch damiao_motor.py
```

Copie el siguiente código a damiao_motor.py

<details>

<summary>damiao_motor.py</summary>

```python
## This is a derivative of the following software.
## https://github.com/cmjang/DM_Control_Python/blob/main/DM_CAN.py

import can
from time import sleep, time
import numpy as np
from enum import IntEnum
from struct import unpack
from struct import pack

class Motor:
    def __init__(self, MotorType, SlaveID, MasterID):
        """
        define Motor object 定义电机对象
        :param MotorType: Motor type 电机类型
        :param SlaveID: CANID 电机ID
        :param MasterID: MasterID 主机ID 建议不要设为0
        """
        self.Pd = float(0)
        self.Vd = float(0)
        self.goal_position = float(0)
        self.goal_tau = float(0)
        self.state_q = float(0)
        self.state_dq = float(0)
        self.state_tau = float(0)
        self.state_tmos = int(0)
        self.state_trotor = int(0)
        self.SlaveID = SlaveID
        self.MasterID = MasterID
        self.MotorType = MotorType
        self.isEnable = False
        self.NowControlMode = Control_Type.MIT
        self.temp_param_dict = {}

    def recv_data(self, q: float, dq: float, tau: float, tmos: int, trotor: int):
        self.state_q = q
        self.state_dq = dq
        self.state_tau = tau
        self.state_tmos = tmos
        self.state_trotor = trotor

    def getPosition(self):
        """
        get the position of the motor 获取电机位置
        :return: the position of the motor 电机位置
        """
        return self.state_q

    def getVelocity(self):
        """
        get the velocity of the motor 获取电机速度
        :return: the velocity of the motor 电机速度
        """
        return self.state_dq

    def getTorque(self):
        """
        get the torque of the motor 获取电机力矩
        :return: the torque of the motor 电机力矩
        """
        return self.state_tau

    def getParam(self, RID):
        """
        get the parameter of the motor 获取电机内部的参数，需要提前读取
        :param RID: DM_variable 电机参数
        :return: the parameter of the motor 电机参数
        """
        if RID in self.temp_param_dict:
            return self.temp_param_dict[RID]
        else:
            return None


class MotorControl:
    #send_data_frame = np.array(
    #    [0x55, 0xAA, 0x1e, 0x03, 0x01, 0x00, 0x00, 0x00, 0x0a, 0x00, 0x00, 0x00, 0x00, 0, 0, 0, 0, 0x00, 0x08, 0x00,
    #     0x00, 0, 0, 0, 0, 0, 0, 0, 0, 0x00], np.uint8)
    #                4310           4310_48        4340           4340_48
    Limit_Param = [[12.5, 30, 10], [12.5, 50, 10], [12.5, 8, 28], [12.5, 10, 28],
                   # 6006           8006           8009            10010L         10010
                   [12.5, 45, 20], [12.5, 45, 40], [12.5, 45, 54], [12.5, 25, 200], [12.5, 20, 200],
                   # H3510            DMG62150      DMH6220
                   [12.5 , 280 , 1],[12.5 , 45 , 10],[12.5 , 45 , 10]]

    def __init__(self, channel: str, bitrate: int = 1000000):
        """
        define MotorControl object 定义电机控制对象
        :param serial_device: serial object 串口对象
        """
        #self.serial_ = serial_device
        self.motors_map = dict()
        self.data_save = bytes()  # save data
        #if self.serial_.is_open:  # open the serial port
        #    print("Serial port is open")
        #    serial_device.close()
        #self.serial_.open()
        self.canbus = can.interface.Bus(channel=channel, interface='socketcan', bitrate=bitrate)

        #print("can is open")


    def controlMIT(self, DM_Motor, kp: float, kd: float, q: float, dq: float, tau: float):
        """
        MIT Control Mode Function 达妙电机MIT控制模式函数
        :param DM_Motor: Motor object 电机对象
        :param kp: kp
        :param kd:  kd
        :param q:  position  期望位置
        :param dq:  velocity  期望速度
        :param tau: torque  期望力矩
        :return: None
        """
        if DM_Motor.SlaveID not in self.motors_map:
            print("controlMIT ERROR : Motor ID not found")
            return
        kp_uint = float_to_uint(kp, 0, 500, 12)
        kd_uint = float_to_uint(kd, 0, 5, 12)
        MotorType = DM_Motor.MotorType
        Q_MAX = self.Limit_Param[MotorType][0]
        DQ_MAX = self.Limit_Param[MotorType][1]
        TAU_MAX = self.Limit_Param[MotorType][2]
        q_uint = float_to_uint(q, -Q_MAX, Q_MAX, 16)
        dq_uint = float_to_uint(dq, -DQ_MAX, DQ_MAX, 12)
        tau_uint = float_to_uint(tau, -TAU_MAX, TAU_MAX, 12)
        data_buf = np.array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], np.uint8)
        data_buf[0] = (q_uint >> 8) & 0xff
        data_buf[1] = q_uint & 0xff
        data_buf[2] = dq_uint >> 4
        data_buf[3] = ((dq_uint & 0xf) << 4) | ((kp_uint >> 8) & 0xf)
        data_buf[4] = kp_uint & 0xff
        data_buf[5] = kd_uint >> 4
        data_buf[6] = ((kd_uint & 0xf) << 4) | ((tau_uint >> 8) & 0xf)
        data_buf[7] = tau_uint & 0xff
        self.__send_data(DM_Motor.SlaveID, data_buf)
        self.recv()  # receive the data from serial port

    def control_delay(self, DM_Motor, kp: float, kd: float, q: float, dq: float, tau: float, delay: float):
        """
        MIT Control Mode Function with delay 达妙电机MIT控制模式函数带延迟
        :param DM_Motor: Motor object 电机对象
        :param kp: kp
        :param kd: kd
        :param q:  position  期望位置
        :param dq:  velocity  期望速度
        :param tau: torque  期望力矩
        :param delay: delay time 延迟时间 单位秒
        """
        self.controlMIT(DM_Motor, kp, kd, q, dq, tau)
        sleep(delay)

    def control_Pos_Vel(self, Motor, P_desired: float, V_desired: float):
        """
        control the motor in position and velocity control mode 电机位置速度控制模式
        :param Motor: Motor object 电机对象
        :param P_desired: desired position 期望位置
        :param V_desired: desired velocity 期望速度
        :return: None
        """
        if Motor.SlaveID not in self.motors_map:
            print("Control Pos_Vel Error : Motor ID not found")
            return
        motorid = 0x100 + Motor.SlaveID
        data_buf = np.array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], np.uint8)
        P_desired_uint8s = float_to_uint8s(P_desired)
        V_desired_uint8s = float_to_uint8s(V_desired)
        data_buf[0:4] = P_desired_uint8s
        data_buf[4:8] = V_desired_uint8s
        self.__send_data(motorid, data_buf)
        self.recv()  # receive the data from serial port

    def control_Vel(self, Motor, Vel_desired):
        """
        control the motor in velocity control mode 电机速度控制模式
        :param Motor: Motor object 电机对象
        :param Vel_desired: desired velocity 期望速度
        """
        if Motor.SlaveID not in self.motors_map:
            print("control_VEL ERROR : Motor ID not found")
            return
        motorid = 0x200 + Motor.SlaveID
        data_buf = np.array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], np.uint8)
        Vel_desired_uint8s = float_to_uint8s(Vel_desired)
        data_buf[0:4] = Vel_desired_uint8s
        self.__send_data(motorid, data_buf)
        self.recv()  # receive the data from serial port

    def control_pos_force(self, Motor, Pos_des: float, Vel_des, i_des):
        """
        control the motor in EMIT control mode 电机力位混合模式
        :param Pos_des: desired position rad  期望位置 单位为rad
        :param Vel_des: desired velocity rad/s  期望速度 为放大100倍
        :param i_des: desired current rang 0-10000 期望电流标幺值放大10000倍
        电流标幺值：实际电流值除以最大电流值，最大电流见上电打印
        """
        if Motor.SlaveID not in self.motors_map:
            print("control_pos_vel ERROR : Motor ID not found")
            return
        motorid = 0x300 + Motor.SlaveID
        data_buf = np.array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], np.uint8)
        Pos_desired_uint8s = float_to_uint8s(Pos_des)
        data_buf[0:4] = Pos_desired_uint8s
        Vel_uint = np.uint16(Vel_des)
        ides_uint = np.uint16(i_des)
        data_buf[4] = Vel_uint & 0xff
        data_buf[5] = Vel_uint >> 8
        data_buf[6] = ides_uint & 0xff
        data_buf[7] = ides_uint >> 8
        self.__send_data(motorid, data_buf)
        self.recv()  # receive the data from serial port

    def enable(self, Motor):
        """
        enable motor 使能电机
        最好在上电后几秒后再使能电机
        :param Motor: Motor object 电机对象
        """
        self.__control_cmd(Motor, np.uint8(0xFC))
        sleep(0.1)
        self.recv()  # receive the data from serial port

    def enable_old(self, Motor ,ControlMode):
        """
        enable motor old firmware 使能电机旧版本固件，这个是为了旧版本电机固件的兼容性
        可恶的旧版本固件使能需要加上偏移量
        最好在上电后几秒后再使能电机
        :param Motor: Motor object 电机对象
        """
        data_buf = np.array([0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xfc], np.uint8)
        enable_id = ((int(ControlMode)-1) << 2) + Motor.SlaveID
        self.__send_data(enable_id, data_buf)
        sleep(0.1)
        self.recv()  # receive the data from serial port

    def disable(self, Motor):
        """
        disable motor 失能电机
        :param Motor: Motor object 电机对象
        """
        self.__control_cmd(Motor, np.uint8(0xFD))
        sleep(0.1)
        self.recv()  # receive the data from serial port

    def set_zero_position(self, Motor):
        """
        set the zero position of the motor 设置电机0位
        :param Motor: Motor object 电机对象
        """
        self.__control_cmd(Motor, np.uint8(0xFE))
        sleep(0.1)
        self.recv()  # receive the data from serial port

    def recv(self):
        # 把上次没有解析完的剩下的也放进来
        # data_recv = b''.join([self.data_save, self.serial_.read_all()])
        #data_recv = b''.join([self.data_save, self.canbus.recv()])


        # packets = self.__extract_packets(data_recv)
        # for packet in packets:
        #     data = packet[7:15]
        #     CANID = (packet[6] << 24) | (packet[5] << 16) | (packet[4] << 8) | packet[3]
        #     CMD = packet[1]
        #     self.__process_packet(data, CANID, CMD)

        data_recv = self.canbus.recv(0.1)

        if data_recv is not None:
            # data = data_recv.data
            # err = data[0] >> 12
            # id = data[0] & 0x7f
            # pos = (data[1] << 8) + data[2]
            # vel = (data[3] << 4) + (data[4] >> 4)
            # tau = ((data[4] & 0x0f) << 8) + data[5]
            # t_mos = data[6]
            # t_rotor = data[7]
            # print(hex(id), err, id, pos, vel, tau, goal_tau, t_mos, t_rotor)
            # CANID = data_recv.arbitration_id
            CANID = data_recv.data[0]
            # CMD = data_recv.data[3]
            CMD = 0x11                  # 飯田：修正の必要あり
            self.__process_packet(data_recv.data, CANID, CMD)

            # 飯田：Debug print
            # print(hex(CANID),hex(CMD))
            # print(hex(data_recv.data[0]),hex(data_recv.data[1]),hex(data_recv.data[2]),hex(data_recv.data[3]),hex(data_recv.data[4]),hex(data_recv.data[5]),hex(data_recv.data[6]),hex(data_recv.data[7]))
            #return data

    def recv_set_param_data(self):
        #data_recv = self.serial_.read_all()

        # packets = self.__extract_packets(data_recv)
        # for packet in packets:
        #     data = packet[7:15]
        #     CANID = (packet[6] << 24) | (packet[5] << 16) | (packet[4] << 8) | packet[3]
        #     CMD = packet[1]
        #     self.__process_set_param_packet(data, CANID, CMD)

        data_recv = self.canbus.recv(0.1)


        if data_recv is not None:
            data = data_recv.data
            CANID = data_recv.arbitration_id
            # CANID = data_recv.data[0]
            # CMD = data_recv.data[3]  
            CMD = 0x11                  # 飯田：修正の必要あり
            self.__process_packet(data, CANID, CMD)


            # 飯田：Debug print
            print(hex(CANID),hex(CMD))
            print(hex(data_recv.data[0]),hex(data_recv.data[1]),hex(data_recv.data[2]),hex(data_recv.data[3]),hex(data_recv.data[4]),hex(data_recv.data[5]),hex(data_recv.data[6]),hex(data_recv.data[7]))

    def __process_packet(self, data, CANID, CMD):
        if CMD == 0x11:
            if CANID != 0x00:
                if CANID in self.motors_map:
                    q_uint = np.uint16((np.uint16(data[1]) << 8) | data[2])
                    dq_uint = np.uint16((np.uint16(data[3]) << 4) | (data[4] >> 4))
                    tau_uint = np.uint16(((data[4] & 0xf) << 8) | data[5])
                    t_mos = data[6]
                    t_rotor = data[7]
                    MotorType_recv = self.motors_map[CANID].MotorType
                    Q_MAX = self.Limit_Param[MotorType_recv][0]
                    DQ_MAX = self.Limit_Param[MotorType_recv][1]
                    TAU_MAX = self.Limit_Param[MotorType_recv][2]
                    recv_q = uint_to_float(q_uint, -Q_MAX, Q_MAX, 16)
                    recv_dq = uint_to_float(dq_uint, -DQ_MAX, DQ_MAX, 12)
                    recv_tau = uint_to_float(tau_uint, -TAU_MAX, TAU_MAX, 12)
                    self.motors_map[CANID].recv_data(recv_q, recv_dq, recv_tau, t_mos, t_rotor)
            else:
                MasterID=data[0] & 0x0f
                if MasterID in self.motors_map:
                    q_uint = np.uint16((np.uint16(data[1]) << 8) | data[2])
                    dq_uint = np.uint16((np.uint16(data[3]) << 4) | (data[4] >> 4))
                    tau_uint = np.uint16(((data[4] & 0xf) << 8) | data[5])
                    t_mos = data[6]
                    t_rotor = data[7]
                    MotorType_recv = self.motors_map[MasterID].MotorType
                    Q_MAX = self.Limit_Param[MotorType_recv][0]
                    DQ_MAX = self.Limit_Param[MotorType_recv][1]
                    TAU_MAX = self.Limit_Param[MotorType_recv][2]
                    recv_q = uint_to_float(q_uint, -Q_MAX, Q_MAX, 16)
                    recv_dq = uint_to_float(dq_uint, -DQ_MAX, DQ_MAX, 12)
                    recv_tau = uint_to_float(tau_uint, -TAU_MAX, TAU_MAX, 12)
                    self.motors_map[MasterID].recv_data(recv_q, recv_dq, recv_tau, t_mos, t_rotor)


    def __process_set_param_packet(self, data, CANID, CMD):
        if CMD == 0x11 and (data[2] == 0x33 or data[2] == 0x55):
            masterid=CANID
            slaveId = ((data[1] << 8) | data[0])
            if CANID==0x00:  #防止有人把MasterID设为0稳一手
                masterid=slaveId

            if masterid not in self.motors_map:
                if slaveId not in self.motors_map:
                    return
                else:
                    masterid=slaveId

            RID = data[3]
            # 读取参数得到的数据
            if is_in_ranges(RID):
                #uint32类型
                num = uint8s_to_uint32(data[4], data[5], data[6], data[7])
                self.motors_map[masterid].temp_param_dict[RID] = num

            else:
                #float类型
                num = uint8s_to_float(data[4], data[5], data[6], data[7])
                self.motors_map[masterid].temp_param_dict[RID] = num


    def addMotor(self, Motor):
        """
        add motor to the motor control object 添加电机到电机控制对象
        :param Motor: Motor object 电机对象
        """
        self.motors_map[Motor.SlaveID] = Motor
        if Motor.MasterID != 0:
            self.motors_map[Motor.MasterID] = Motor
        return True

    def __control_cmd(self, Motor, cmd: np.uint8):     # 飯田：コマンドは通ります
        data_buf = np.array([0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, cmd], np.uint8)
        self.__send_data(Motor.SlaveID, data_buf)

    def __send_data(self, motor_id, data):
        """
        send data to the motor 发送数据到电机
        :param motor_id:
        :param data:
        :return:
        """
        #self.send_data_frame[13] = motor_id & 0xff
        #self.send_data_frame[14] = (motor_id >> 8)& 0xff  #id high 8 bits
        #self.send_data_frame[21:29] = data
        #self.serial_.write(bytes(self.send_data_frame.T))

        msg =can.Message(is_extended_id=False,arbitration_id=motor_id,data=data,is_remote_frame = False)
        self.canbus.send(msg)

    def __read_RID_param(self, Motor, RID):             # 飯田：修正の必要あり?
        can_id_l = Motor.SlaveID & 0xff #id low 8 bits
        can_id_h = (Motor.SlaveID >> 8)& 0xff  #id high 8 bits
        data_buf = np.array([np.uint8(can_id_l), np.uint8(can_id_h), 0x33, np.uint8(RID), 0x00, 0x00, 0x00, 0x00], np.uint8)
        self.__send_data(0x7FF, data_buf)



    def __write_motor_param(self, Motor, RID, data):             # 飯田：修正の必要あり?
        can_id_l = Motor.SlaveID & 0xff #id low 8 bits
        can_id_h = (Motor.SlaveID >> 8)& 0xff  #id high 8 bits
        data_buf = np.array([np.uint8(can_id_l), np.uint8(can_id_h), 0x55, np.uint8(RID), 0x00, 0x00, 0x00, 0x00], np.uint8)
        if not is_in_ranges(RID):
            # data is float
            data_buf[4:8] = float_to_uint8s(data)
        else:
            # data is int
            data_buf[4:8] = data_to_uint8s(int(data))
        self.__send_data(0x7FF, data_buf)

    def switchControlMode(self, Motor, ControlMode):
        """
        switch the control mode of the motor 切换电机控制模式
        :param Motor: Motor object 电机对象
        :param ControlMode: Control_Type 电机控制模式 example:MIT:Control_Type.MIT MIT模式
        """
        max_retries = 20
        retry_interval = 0.1  #retry times
        RID = 10
        self.__write_motor_param(Motor, RID, np.uint8(ControlMode))
        for _ in range(max_retries):
            sleep(retry_interval)
            self.recv_set_param_data()
            if Motor.SlaveID in self.motors_map:
                if RID in self.motors_map[Motor.SlaveID].temp_param_dict:
                    if abs(self.motors_map[Motor.SlaveID].temp_param_dict[RID] - ControlMode) < 0.1:
                        return True
                    else:
                        return False
        return False

    def save_motor_param(self, Motor):
        """
        save the all parameter  to flash 保存所有电机参数
        :param Motor: Motor object 电机对象
        :return:
        """
        can_id_l = Motor.SlaveID & 0xff #id low 8 bits
        can_id_h = (Motor.SlaveID >> 8)& 0xff  #id high 8 bits
        data_buf = np.array([np.uint8(can_id_l), np.uint8(can_id_h), 0xAA, 0x00, 0x00, 0x00, 0x00, 0x00], np.uint8)
        self.disable(Motor)  # before save disable the motor
        self.__send_data(0x7FF, data_buf)
        sleep(0.001)

    def change_limit_param(self, Motor_Type, PMAX, VMAX, TMAX):
        """
        change the PMAX VMAX TMAX of the motor 改变电机的PMAX VMAX TMAX
        :param Motor_Type:
        :param PMAX: 电机的PMAX
        :param VMAX: 电机的VMAX
        :param TMAX: 电机的TMAX
        :return:
        """
        self.Limit_Param[Motor_Type][0] = PMAX
        self.Limit_Param[Motor_Type][1] = VMAX
        self.Limit_Param[Motor_Type][2] = TMAX

    def refresh_motor_status(self,Motor):
        """
        get the motor status 获得电机状态
        """
        can_id_l = Motor.SlaveID & 0xff #id low 8 bits
        can_id_h = (Motor.SlaveID >> 8) & 0xff  #id high 8 bits
        data_buf = np.array([np.uint8(can_id_l), np.uint8(can_id_h), 0xCC, 0x00, 0x00, 0x00, 0x00, 0x00], np.uint8)
        self.__send_data(0x7FF, data_buf)
        self.recv()  # receive the data from serial port

    def change_motor_param(self, Motor, RID, data):
        """
        change the RID of the motor 改变电机的参数
        :param Motor: Motor object 电机对象
        :param RID: DM_variable 电机参数
        :param data: 电机参数的值
        :return: True or False ,True means success, False means fail
        """
        max_retries = 20
        retry_interval = 0.05  #retry times

        self.__write_motor_param(Motor, RID, data)
        for _ in range(max_retries):
            self.recv_set_param_data()
            if Motor.SlaveID in self.motors_map and RID in self.motors_map[Motor.SlaveID].temp_param_dict:
                if abs(self.motors_map[Motor.SlaveID].temp_param_dict[RID] - data) < 0.1:
                    return True
                else:
                    return False
            sleep(retry_interval)
        return False

    def read_motor_param(self, Motor, RID):
        """
        read only the RID of the motor 读取电机的内部信息例如 版本号等
        :param Motor: Motor object 电机对象
        :param RID: DM_variable 电机参数
        :return: 电机参数的值
        """
        max_retries = 5
        retry_interval = 0.05  #retry times
        self.__read_RID_param(Motor, RID)
        for _ in range(max_retries):
            sleep(retry_interval)
            self.recv_set_param_data()
            if Motor.SlaveID in self.motors_map:
                if RID in self.motors_map[Motor.SlaveID].temp_param_dict:
                    return self.motors_map[Motor.SlaveID].temp_param_dict[RID]
        return None

    # -------------------------------------------------
    # Extract packets from the serial data
    def __extract_packets(self, data):          
        frames = []
        header = 0xAA
        tail = 0x55
        frame_length = 16
        i = 0
        remainder_pos = 0

        while i <= len(data) - frame_length:
            if data[i] == header and data[i + frame_length - 1] == tail:
                frame = data[i:i + frame_length]
                frames.append(frame)
                i += frame_length
                remainder_pos = i
            else:
                i += 1
        self.data_save = data[remainder_pos:]
        return frames


def LIMIT_MIN_MAX(x, min, max):
    if x <= min:
        x = min
    elif x > max:
        x = max


def float_to_uint(x: float, x_min: float, x_max: float, bits):
    LIMIT_MIN_MAX(x, x_min, x_max)
    span = x_max - x_min
    data_norm = (x - x_min) / span
    return np.uint16(data_norm * ((1 << bits) - 1))


def uint_to_float(x: np.uint16, min: float, max: float, bits):
    span = max - min
    data_norm = float(x) / ((1 << bits) - 1)
    temp = data_norm * span + min
    return np.float32(temp)


def float_to_uint8s(value):
    # Pack the float into 4 bytes
    packed = pack('f', value)
    # Unpack the bytes into four uint8 values
    return unpack('4B', packed)


def data_to_uint8s(value):
    # Check if the value is within the range of uint32
    if isinstance(value, int) and (0 <= value <= 0xFFFFFFFF):
        # Pack the uint32 into 4 bytes
        packed = pack('I', value)
    else:
        raise ValueError("Value must be an integer within the range of uint32")

    # Unpack the bytes into four uint8 values
    return unpack('4B', packed)


def is_in_ranges(number):
    """
    check if the number is in the range of uint32
    :param number:
    :return:
    """
    if (7 <= number <= 10) or (13 <= number <= 16) or (35 <= number <= 36):
        return True
    return False


def uint8s_to_uint32(byte1, byte2, byte3, byte4):
    # Pack the four uint8 values into a single uint32 value in little-endian order
    packed = pack('<4B', byte1, byte2, byte3, byte4)
    # Unpack the packed bytes into a uint32 value
    return unpack('<I', packed)[0]


def uint8s_to_float(byte1, byte2, byte3, byte4):
    # Pack the four uint8 values into a single float value in little-endian order
    packed = pack('<4B', byte1, byte2, byte3, byte4)
    # Unpack the packed bytes into a float value
    return unpack('<f', packed)[0]


def print_hex(data):
    hex_values = [f'{byte:02X}' for byte in data]
    print(' '.join(hex_values))


def get_enum_by_index(index, enum_class):
    try:
        return enum_class(index)
    except ValueError:
        return None


class DM_Motor_Type(IntEnum):
    DM4310 = 0
    DM4310_48V = 1
    DM4340 = 2
    DM4340_48V = 3
    DM6006 = 4
    DM8006 = 5
    DM8009 = 6
    DM10010L = 7
    DM10010 = 8
    DMH3510 = 9
    DMH6215 = 10
    DMG6220 = 11


class DM_variable(IntEnum):
    UV_Value = 0
    KT_Value = 1
    OT_Value = 2
    OC_Value = 3
    ACC = 4
    DEC = 5
    MAX_SPD = 6
    MST_ID = 7
    ESC_ID = 8
    TIMEOUT = 9
    CTRL_MODE = 10
    Damp = 11
    Inertia = 12
    hw_ver = 13
    sw_ver = 14
    SN = 15
    NPP = 16
    Rs = 17
    LS = 18
    Flux = 19
    Gr = 20
    PMAX = 21
    VMAX = 22
    TMAX = 23
    I_BW = 24
    KP_ASR = 25
    KI_ASR = 26
    KP_APR = 27
    KI_APR = 28
    OV_Value = 29
    GREF = 30
    Deta = 31
    V_BW = 32
    IQ_c1 = 33
    VL_c1 = 34
    can_br = 35
    sub_ver = 36
    u_off = 50
    v_off = 51
    k1 = 52
    k2 = 53
    m_off = 54
    dir = 55
    p_m = 80
    xout = 81


class Control_Type(IntEnum):
    MIT = 1
    POS_VEL = 2
    VEL = 3
    Torque_Pos = 4

class DamiaoPort:
    def __init__(self, device, types, can_ids, master_ids, motor_with_torque, control_mode=Control_Type.MIT):
        self.device = device
        self.types = types
        self.can_ids = can_ids
        self.master_ids = master_ids
        self.control = MotorControl(self.device, bitrate=4000000)
        self.motors = [Motor(type, can_id, master_id) for type, can_id, master_id in zip(types, can_ids, master_ids)]
        self.stat_data = []
        self.stat_time = []
        for motor in self.motors:
            self.control.addMotor(motor)
            self.control.enable(motor)

    def get_present_status(self):
        self.stat_time.append(time())
        stat = [[
            motor.goal_position,
            motor.goal_tau,
            motor.getPosition(),
            motor.getVelocity(),
            motor.getTorque(),
            motor.state_tmos,
            motor.state_trotor,
        ] for motor in self.motors]
        self.stat_data.append(stat)

        return stat

    def save_status(self, filename):
        np.savez(filename, np.array(self.stat_time), np.array(self.stat_data))

    def disable(self):
        for motor in self.motors:
            self.control.disable(motor)

    def shutdown(self):
        for motor in self.motors:
            self.control.controlMIT(motor, 0, 0, 0, 0, 0)
        self.control.canbus.shutdown()

    def set_zero_position(self):
        for motor in self.motors:
            self.control.disable(motor)
        sleep(1)
        for motor in self.motors:
            self.control.set_zero_position(motor)
        sleep(1)
        for motor in self.motors:
            self.control.enable(motor)
        return 0

    async def move_towards(self, goal_positions, kps, kds):
        for motor, goal_position, kp, kd in zip(self.motors, goal_positions, kps, kds):
            delta = goal_position - motor.getPosition()
            v = motor.getVelocity()
            tau = kp * delta - kd * v
            motor.goal_position = goal_position
            motor.goal_tau = tau
            self.control.controlMIT(motor, 0, 0, 0, 0, tau)
            await asyncio.sleep(0.00003)

    def move_regressor_sync(self, regs, search_range, search_step, goal_positions, kps, kds):
        TORQUE_SCALER=30
        if len(self.stat_data) == 0:
            return self.move_towards_sync(goal_positions, kps, kds)
        for motor, reg, goal_position, kp, kd, stat in zip(
                self.motors, regs, goal_positions, kps, kds, self.stat_data[-1]):
            pos = motor.getPosition()
            vel = motor.getVelocity()
            delta = goal_position - pos
            goal_tau = kp * delta - kd * vel
            _goal_pos, _goal_tau, _pos, _vel, _tau = stat
            x = np.array([[_pos, _vel, _tau, _goal_pos, _goal_tau],
                          [pos, vel, motor.getTorque(), goal_position, goal_tau]])
            x /= np.array([[np.pi, 10, TORQUE_SCALER, np.pi, TORQUE_SCALER]])
            xs = []
            for tau in np.linspace(goal_tau/TORQUE_SCALER - search_range,
                                   goal_tau/TORQUE_SCALER + search_range,
                                   num=search_step):
                x_ = x.copy()
                x_[0,4] = tau
                xs.append(x_.flatten())
            h = reg.predict(xs)
            diff = h - goal_position
            tau = TORQUE_SCALER * xs[np.argmin(diff ** 2)][4]
            goal_tau = tau
            motor.goal_position = goal_position
            motor.goal_tau = goal_tau
            self.control.controlMIT(motor, 0, 0, 0, 0, goal_tau)
            sleep(0.00003)

    def move_towards_sync(self, goal_positions, kps, kds):
        for motor, goal_position, kp, kd in zip(self.motors, goal_positions, kps, kds):
            delta = goal_position - motor.getPosition()
            v = motor.getVelocity()
            tau = kp * delta - kd * v
            motor.goal_position = goal_position
            motor.goal_tau = tau
            self.control.controlMIT(motor, 0, 0, 0, 0, tau)
            # sleep(0.00003)

    def set_goal_torque_sync(self, goal_taus):
        for motor, goal_tau in zip(self.motors, goal_taus):
            motor.goal_position = 0
            motor.goal_tau = goal_tau
            self.control.controlMIT(motor, 0, 0, 0, 0, motor.goal_tau)
            sleep(0.00003)

    def move_torque_sync(self, taus):
        for motor,tau in zip(self.motors, taus):
            motor.goal_position = 0
            motor.goal_tau = tau
            self.control.controlMIT(motor, 0, 0, 0, 0, motor.goal_tau)
            sleep(0.00003)

    def keep_torque_sync(self):
        for motor in self.motors:
            self.control.controlMIT(motor, 0, 0, 0, 0, motor.goal_tau)
            sleep(0.00003)

    async def set_goal_positions(self, goal_positions, kps):
        for motor, goal_position, kp in zip(self.motors, goal_positions, kps):
            motor.goal_position = goal_position
            motor.goal_tau = 0
            self.control.controlMIT(motor, kp, 1.2, goal_position, 0, 0)
            await asyncio.sleep(0.00003)

    def set_goal_positions_sync(self, goal_positions, kps, kds):
        for motor, goal_position, kp, kd in zip(self.motors, goal_positions, kps, kds):
            motor.goal_position = goal_position
            motor.goal_tau = 0
            self.control.controlMIT(motor, kp, kd, goal_position, 0, 0)
            sleep(0.00003)

    def set_goal_posvel(self, goal_positions):
        for motor, goal_position in zip(self.motors, goal_positions):
            motor.goal_position = goal_position
            motor.goal_tau = 0
            self.control.control_pos_force(motor, goal_position, 1, 1)

    def controlMIT(self, motor, kp, kd, q, dq, tau):
        self.control.controlMIT(self.motors[motor], kp, kd, q, dq, tau)

```

</details>

- **Crear el archivo damiao_test.py**

Copia el siguiente código a damiao_test.py

<details>

<summary>damiao_motor.py</summary>

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import time
import math
import numpy as np
from damiao_motor import Motor, MotorControl, DM_Motor_Type, Control_Type

# Configuration parameters
NUM_MOTORS = 1  # Number of motors to control
CAN_INTERFACE = "can0"  # CAN interface name
CAN_BITRATE = 1000000  # CAN bus baud rate
MOTOR_TYPE = DM_Motor_Type.DM4310  # Motor model

# Sine wave parameters
FREQUENCY = 0.1  # Frequency (Hz)
AMPLITUDE = 6  # Amplitude (rad)
DURATION = 60.0  # Operation duration (s)

def main():
    # Create motor controller object
    control = MotorControl(CAN_INTERFACE, bitrate=CAN_BITRATE)

    # Create and add motors
    motors = []
    for i in range(NUM_MOTORS):
        motor = Motor(MOTOR_TYPE, i + 1, i + 0X10)  # CAN IDs start from 1
        control.addMotor(motor)
        motors.append(motor)
        control.enable(motor)
        print(f"Motor {i + 1} enabled")

    try:
        start_time = time.time()
        while time.time() - start_time < DURATION:
            current_time = time.time() - start_time

            # Calculate sine wave position
            position = AMPLITUDE * math.sin(2 * math.pi * FREQUENCY * current_time)

            # Control all motors
            for motor in motors:
                control.controlMIT(
                    motor,
                    kp=10.0,  # Position gain
                    kd=1.0,   # Velocity gain
                    q=position,  # Target position
                    dq=0.0,   # Target velocity
                    tau=0.0   # Feedforward torque
                )

            # Control frequency
            time.sleep(0.001)  # 1kHz control frequency

    except KeyboardInterrupt:
        print("\nProgram interrupted by user")
    finally:
        # Disable all motors
        for motor in motors:
            control.disable(motor)
            print(f"Motor {motor.SlaveID} disabled")

if __name__ == "__main__":
    main()

```

</details>

- **Ejecutar damiao_test.py**

```bash
python damiao_test.py
```

<iframe width="960" height="640" src="https://www.youtube.com/embed/e5hajjlaXAM?si=mTwNAeU5cfQEIuOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

El motor se iluminará en **verde** y rotará a una **velocidad sinusoidal**.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
