---
description: Este wiki proporciona un tutorial para los motores de la serie Stackforce.
title: Motores Serie Stackforce
keywords:
- actuator
- motor
- robotics
image: https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/6010.webp
slug: /es/stackforce_series
last_update:
  date: 11/26/2025
  author: Li Shanghang
---

# Introducción a los Motores Serie Stackforce X

Este artículo presentará cómo comenzar con los motores de la serie Stackforce y cómo usarlos con C++ y Python en el reComputer Jetson Super.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/6010.webp" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱</font></span></strong>
    </a>
</div>

## Especificaciones

Aquí está la tabla completa con todos los parámetros llenos para todos los modelos de motor:

<table>
  <thead>
    <tr>
      <th>Parámetro</th>
      <th>6010</th>
      <th>8108</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Voltaje Nominal</td><td>24V</td><td>24V</td></tr>
    <tr><td>Corriente Nominal</td><td>10.5A</td><td>7.5A</td></tr>
    <tr><td>Potencia Nominal</td><td>240W</td><td>180W</td></tr>
    <tr><td>Torque Nominal</td><td>5 Nm</td><td>7.5 Nm</td></tr>
    <tr><td>Torque Máximo</td><td>11 Nm</td><td>22 Nm</td></tr>
    <tr><td>Velocidad Nominal</td><td>120 RPM</td><td>110 RPM</td></tr>
    <tr><td>Velocidad Máxima</td><td>270 RPM</td><td>320 RPM</td></tr>
    <tr><td>Relación de Engranajes</td><td>8:1</td><td>8:1</td></tr>
    <tr><td>Tipo de Codificador</td><td>Protocolo MIT</td><td>Protocolo MIT</td></tr>
    <tr><td>Modos de Control</td><td>Control de Posición, Velocidad, Torque</td><td>Control de Posición, Velocidad, Torque</td></tr>
    <tr><td>Diámetro Exterior</td><td>80 mm</td><td>97 mm</td></tr>
    <tr><td>Grosor</td><td>47 mm</td><td>46 mm</td></tr>
    <tr><td>Peso</td><td>392 g ±10%</td><td>395 g ±5%</td></tr>
    <tr><td>Resistencia de Fase</td><td>0.48 Ω ±10%</td><td>0.439 Ω ±10%</td></tr>
    <tr><td>Inductancia de Fase</td><td>368 μH ±10%</td><td>403 μH ±10%</td></tr>
  </tbody>
</table>

## Características Principales

1. **Salida de Alto Torque**
2. **Control en Modo MIT**
3. **Retroalimentación de Codificador Magnético**
4. **Diseño Compacto y Ligero**
5. **Soporte para Comunicación CAN Bus de Alta Velocidad**
6. **Aplicaciones Versátiles**

## Guía de Introducción
### Preparativos Antes del Uso
**En una PC con Sistema Windows**
- [Manual del Producto](https://files.seeedstudio.com/products/stackforce/%E6%96%B0%E7%89%886010%E5%85%B3%E8%8A%82%E7%94%B5%E6%9C%BA%E7%94%A8%E6%88%B7%E6%96%87%E6%A1%A3V1.1.pdf).
- Descargar [VOFA](https://www.vofa.plus/).

El CANID y CANMode del motor se modifican ambos a través del puerto serie. El motor se envía con un CANID predeterminado de 0x01 y CANMode de CAN2.0 a 1Mbps.

### Cableado del Puerto Serie
Conecte V, G, T, R al VCC (3.3V), GND, RX, TX del módulo de comunicación serie respectivamente (RX y TX deben estar conectados cruzados). Como se muestra en la figura a continuación:

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/串口通信端口
    .png"/>
</div>

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/串口工具.png"/>
</div>

### Modificando CANID
Configure la velocidad de baudios del puerto serie a 1Mbps.

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/修改CANID.png"/>
</div>

El CANID a enviar es 0x**, y el ID configurado es 0x**, con un límite máximo de 0x7F. Después de configurar exitosamente el CANID, se imprimirá el siguiente registro:

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/修改CANID反馈.png"/>
</div>

### Modificando el Modo CAN
Envíe CANMODE:0 o CANMODE:1 a través del puerto serie.

CANMODE:0 representa el modo CAN2.0 (1Mbps), mientras que CANMODE:1 representa el modo CANFD (5Mbps).

La modificación exitosa del modo CAN se muestra en las figuras a continuación:

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/CAN模式反馈1.png"/>
</div>

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/CAN模式反馈2.png"/>
</div>

## Usando [reComputer Mini Jetson Orin](/cn/recomputer_jetson_mini_getting_started) para Controlar Motores
Las interfaces de comunicación CAN más comunes para motores en el mercado son **XT30 (2+2)** y **conectores JST**. Nuestros dispositivos **reComputer Mini Jetson Orin** y **reComputer Robotics** están equipados con **interfaces duales XT30 (2+2)** e **interfaces CAN basadas en JST**, proporcionando compatibilidad perfecta.

**reComputer Mini:**
<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg "/>  
</div>

**reComputer Robotics**
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig5.jpg "/>  
</div>

Para información más detallada sobre el uso de CAN, consulte este [wiki](https://wiki.seeedstudio.com/cn/recomputer_jetson_mini_hardware_interfaces_usage/#can ).

### Habilitando la Interfaz CAN

**Paso 1:** Antes de usar CAN0 y CAN1, retire la cubierta inferior y configure las dos resistencias terminales de 120Ω en la posición ON.

<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/7.png " />
</div>

Apague el interruptor de la resistencia terminal de comunicación CAN de 120Ω integrada en el motor.

<div align="center">
    <img width={400} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/电阻开关.png" />
</div>

:::tip
Si el Recomputer Mini no ha configurado la resistencia terminal de 120Ω en ON, puede elegir encender el interruptor de la resistencia terminal de comunicación CAN del motor.
:::

**Paso 2:** Conecte el motor directamente al CAN0 del reComputer Mini a través de la interfaz XT30 (2+2).

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/Mini连接.jpg" />
</div>

:::tip
Dado que [el diseño de la interfaz CAN del reComputer Mini](https://wiki.seeedstudio.com/cn/recomputer_jetson_mini_hardware_interfaces_usage/#can0can1-%E9%80%9A%E4%BF%A1) es opuesto al de la interfaz CAN del motor, se requiere soldadura manual para invertir las líneas de datos.

<div align="center">
    <img width={400} 
     src="https://files.seeedstudio.com/wiki/recomputer_mini/can0-datasheet.png" />
     <img width={400} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/电机can接口.png" />
</div>

<div align="center">
    <img width={600} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/TX30.jpg" />
</div>

Considerando el alto voltaje y corriente requeridos por el motor, se recomienda comprar un adaptador de alimentación de 24V 300W para alimentar el reComputer Mini para manejar un solo motor. Si se necesitan conectar más motores, se puede comprar un adaptador de alimentación de mayor potencia según el requerimiento.

<div align="center">
    <img width={600} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/适配器.jpg " />
</div>
:::

:::danger
Esta fuente de alimentación es solo para aprendizaje y pruebas de un solo motor. Para múltiples motores, diseñe una placa de alimentación separada y aísle la fuente de alimentación de Jetson de la fuente de alimentación del motor para evitar que pase alta corriente directamente a través de Jetson.
:::

### Habilitando la Comunicación CAN de Jetson
Abra una terminal e ingrese el siguiente comando para poner el pin GPIO en alto para activar CAN0:
```bash
gpioset --mode=wait 0 43=0
```

Si usa CAN1 con la interfaz JST, ponga el pin 106 en alto.
```bash
gpioset --mode=wait 0 106=0
```

Mantenga esta terminal abierta, inicie una nueva terminal y configure CAN0.
```bash
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

### Configurando el Entorno de Python y C++

**Paso 1:** Clone el SDK.
```bash
git clone https://github.com/Seeed-Projects/Stackforce-Motor-SDK.git 
```

**Paso 2:** El SDK del controlador requiere las siguientes dependencias. Para Debian Linux, se pueden instalar a través de los siguientes comandos:

```bash
sudo apt-get install -y build-essential cmake
sudo apt install linux-modules-extra-5.15.0-1025-nvidia-tegra # For Jetson Jetpack 6.0
```

Si se necesitan enlaces de Python, instale adicionalmente Python 3, pip y pybind11:
```bash
sudo apt-get install -y python3 python3-pip python3-pybind11 python3-setuptools
```

Después de instalar las dependencias, siga los pasos a continuación para instalar el SDK del controlador como una biblioteca de C++ o un paquete de Python. Ambos usarán CMake para compilar el código C++.

### Usando C++ para Control

```bash
cd build
cmake ..
make
```

El ejecutable compilado estará ubicado en `build/sfmotor_control`. Ejecute el programa:

```bash
./sfmotor_control
```

El programa por defecto controla el motor con ID 0x01. Durante la operación, puede ingresar el valor del ángulo objetivo (en radianes) a través del teclado. También recibe datos de retroalimentación sobre el ángulo y velocidad angular del motor.

### Usando Python para Control

El script de Python está ubicado en el directorio `script/` y puede ejecutarse directamente sin compilación.

```bash
python main.py 
```

El programa por defecto controla el motor con ID 0x01. Durante la operación, puede ingresar el valor del ángulo objetivo (en radianes) a través del teclado. También recibe datos de retroalimentación sobre el ángulo y velocidad angular del motor.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
