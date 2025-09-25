---
description: Controlar PX4 con reComputer Jetson
title: Controlar PX4 con reComputer Jetson
keywords:
- NVIDIA
- PX4
- ROS
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.webp
slug: /es/control_px4_with_recomputer_jetson
last_update:
  date: 7/21/2025
  author: TienjuiWong
---

Emparejar una computadora compañera de alto rendimiento como la **reComputer Mini J3010 (Jetson Orin Nano 4G)** con un **controlador de vuelo PX4** crea la arquitectura central para una amplia gama de sistemas no tripulados inteligentes, incluyendo automóviles autónomos, barcos y drones. Esta poderosa combinación desbloquea aplicaciones innovadoras en campos como logística, investigación científica, búsqueda y rescate, y agricultura de precisión.

Esta configuración permite tareas complejas a bordo como navegación visual, seguimiento de objetos y evasión de obstáculos en tiempo real. El enlace de comunicación entre estos dos "cerebros" es crítico para el rendimiento general y la confiabilidad del sistema.

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-optional-accessories.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlY29tcHUiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjoyLCJjX3RvdGFsX3Jlc3VsdHMiOjg4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
</a></div>

:::tip[Lo Que Aprenderás]

- Cómo conectar físicamente tu Jetson a un Pixhawk.
- Los pros y contras de uXRCE-DDS, MAVSDK y MAVROS.
- Instrucciones de configuración paso a paso para los tres métodos de comunicación.
- Cómo verificar la conexión y solucionar problemas comunes.

:::

## Prerrequisitos

Antes de comenzar, asegúrate de tener lo siguiente:

- **Hardware:** Todos los dispositivos listados en la tabla "Entorno de Laboratorio" a continuación.
- **Software:** Una instalación nueva de Jetson Pack 6.2 y ROS 2 Humble.
- **Herramientas:** `git` y `pip` instalados en tu Jetson.
- **Conocimiento:** Familiaridad básica con la línea de comandos de Linux, conceptos de ROS 2 (nodos, tópicos) y parámetros PX4 en QGroundControl.

## Configuración del Sistema

### Entorno de Laboratorio

| Componente              | Dispositivo/Software              | Versión/Modelo               |
| :--------------------- | :--------------------------- | :-------------------------- |
| **Computadora Compañera** | **Dispositivo** | reComputer Mini J3010 (Jetson Orin Nano 4G)  |
|                        | **SO** | Ubuntu 22.04 (JetPack 6.2)  |
|                        | **ROS** | ROS 2 Humble                |
| **Controlador de Vuelo** | **MCU** | Pixhawk 4 Mini              |
|                        | **Firmware** | PX4 v1.15                   |
| **PC Estación de Tierra** | **SO** | Ubuntu 22.04                |
|                        | **QGC** | QGroundControl v5.0 o superior |

### Conexión de Hardware

Recomendamos encarecidamente usar el UART nativo del Jetson para una conexión robusta que no ocupe un puerto USB.

- **Cableado**: Usa un cable JST-GH de 4 pines para conectar el puerto **`TELEM1` del Pixhawk 4 Mini** al header **`UART1` del Jetson Orin Nano**.
- **Archivo de Dispositivo**: Este puerto serie corresponde a `/dev/ttyTHS1` en el SO del Jetson.

<details>
<summary><strong>Detalles del Puerto y Pinout del Pixhawk 4 Mini (Haz clic para expandir)</strong></summary>

<br/>

| UART   | Dispositivo | Descripción del Parámetro QGC | Etiqueta del Puerto en FC      |
| :----- | :---------- | :----------------------------- | :------------------------------ |
| UART1  | /dev/ttyS0  | GPS1                           | Módulo GPS                      |
| USART2 | /dev/ttyS1  | TELEM1                         | TELEM1                          |
| USART3 | /dev/ttyS2  | TELEM2                         | N/A                             |
| UART4  | /dev/ttyS3  | TELEM/SERIAL4                  | UART/I2C B                      |
| USART6 | /dev/ttyS4  | N/A                            | RC IN                           |
| UART7  | /dev/ttyS5  | N/A                            | Depuración                      |
| UART8  | /dev/ttyS6  | N/A                            | No conectado (sin PX4IO)        |

### Puertos TELEM1, TELEM2

| Pin       | Señal   | Voltaje |
| :-------- | :------ | :------ |
| 1(rojo)   | VCC     | +5V     |
| 2(negro)  | TX(out) | +3.3V   |
| 3(negro)  | RX(in)  | +3.3V   |
| 4(negro)  | CTS(in) | +3.3V   |
| 5(negro)  | RTS(out)| +3.3V   |
| 6(negro)  | GND     | GND     |

### Puerto DSM RC

| Pin        | Señal              | Voltaje |
| :--------- | :----------------- | :------ |
| 1(nulo)    | VDD_5V_SBUS_RC     | +5V     |
| 2(amarillo)| SBUS*              | +3.3V   |
| 3(nulo)    | RSSI**             | +3.3V   |
| 4(rojo)    | VDD_3V3_SPEKTRUM   | +3.3V   |
| 5(negro)   | GND                | GND     |

### Puerto UART & I2C B *

| Pin       | Señal   | Voltaje |
| :-------- | :------ | :------ |
| 1(rojo)   | VCC     | +5V     |
| 2(negro)  | TX(out) | +3.3V   |
| 3(negro)  | RX(in)  | +3.3V   |
| 4(negro)  | SCL2    | +3.3V   |
| 5(negro)  | SDA2    | +3.3V   |
| 6(negro)  | GND     | GND     |

### Puerto SBUS RC

| Pin        | Señal              | Voltaje |
| :--------- | :----------------- | :------ |
| 1(rojo)    | VDD_5V_SBUS_RC     | +5V     |
| 2(amarillo)| SBUS*              | +3.3V   |
| 3(nulo)    | RSSI**             | +3.3V   |
| 4(nulo)    | VDD_3V3_SPEKTRUM   | +3.3V   |
| 5(negro)   | GND                | GND     |

---
**Notas al pie:**

- **(Puerto UART e I2C B):** Un puerto de repuesto para conectar sensores que soporten comunicación serie o I2C; por ejemplo, aquí se puede conectar un segundo módulo GPS.
- **(Señal SBUS):** Conecta aquí el cable de señal del receptor SBUS o DSM/Spektrum.
- **(Señal RSSI):** Envía la información de intensidad de señal RC al piloto automático.

</details>

:::caution[CRÍTICO: Configurar Permisos del Puerto Serie]

Para evitar usar `sudo` en cada comando serie, debes añadir tu usuario al grupo `dialout`. Esta es una configuración única crucial.

```bash
sudo usermod -a -G dialout $USER
```

**Debes reiniciar el Jetson para que este cambio tenga efecto.**

:::

## Elección del Método: Una Comparación

Antes de profundizar, entiende las compensaciones. La elección adecuada depende totalmente de los objetivos de tu proyecto.

| Característica          | uXRCE-DDS (ROS 2 Nativo) 🚀                                                         | MAVSDK (API de Alto Nivel) 🐍                                                         | MAVROS (Puente ROS) 🌉                                                             |
| :---------------------- | :---------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------- |
| **Arquitectura**        | PX4 y ROS 2 comparten un espacio de datos DDS para **comunicación nativa**.         | Una biblioteca C++ independiente (con envoltorios) que provee una API de alto nivel.  | Un **puente/pasarela** que traduce el protocolo MAVLink a tópicos/servicios ROS.   |
| **Rendimiento**         | **Máximo**. Transferencia de datos sin copia y con la menor latencia.               | **Alto**. Las llamadas a la API generan mensajes MAVLink eficientes.                  | **Bueno**. Existe una ligera sobrecarga por la capa de traducción MAVLink→ROS.     |
| **Facilidad de uso**    | Moderada. Requiere compilar el Agente y `px4_msgs`.                                 | **La más fácil**. API intuitiva basada en funciones, ideal para prototipado rápido.   | Curva de aprendizaje pronunciada, pero brinda la integración más profunda con ROS. |
| **Flexibilidad**        | **Excelente**. Acceso directo a todos los tópicos internos de PX4 (uORB).           | **Limitada**. Expone acciones comunes (despegue, waypoints) pero no datos en bruto.   | **Excelente**. Acceso a casi todos los mensajes, parámetros y servicios MAVLink.   |
| **Integración con ROS** | **Nativa en ROS 2**. Método oficial y preparado para el futuro.                     | **Agnóstica de ROS**. Puede usarse en cualquier proyecto y envolverla en un nodo ROS. | **Centrada en ROS**. Estándar de facto en ROS 1 y ampliamente usada en ROS 2.      |
| **Caso de uso**         | Proyectos ROS 2 críticos en rendimiento que necesitan acceso a datos de bajo nivel. | Scripting a nivel de tareas, prototipado rápido, proyectos fuera de ROS y educación.  | Sistemas robóticos complejos integrados con paquetes ROS como Nav2 o MoveIt.       |

## Método 1: uXRCE-DDS (Integración Nativa con ROS 2)

Esta es la solución oficial de PX4 para ROS 2, que enlaza su sistema de mensajería interna `uORB` directamente con la red ROS 2 para una comunicación sin sobrecarga.

### Paso 1: Compilar el Agente Micro XRCE-DDS

El Agente es un programa ligero en el Jetson que actúa como intermediario entre la conexión serie del controlador de vuelo y la red ROS 2.

```bash title="Terminal en Jetson"
# 1. Clonar la versión específica del repositorio del Agente
cd ~
git clone -b v2.4.2 https://github.com/eProsima/Micro-XRCE-DDS-Agent.git
cd Micro-XRCE-DDS-Agent

# 2. IMPORTANTE: Parchear la versión de la dependencia Fast-DDS
# La etiqueta v2.12.x de fastdds fue retirada por el proveedor; la actualizamos a una que funcione.
sed -i 's/v2.12.x/v2.13.x/g' SuperBuild.cmake

# 3. Compilar e instalar el Agente
mkdir build && cd build
cmake ..
make
sudo make install # Instala MicroXRCEAgent globalmente
```

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '16px'
}}>
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/01.png" alt="PX4_dev_01" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/02.png" alt="PX4_dev_02" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/03.png" alt="PX4_dev_03" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/04.png" alt="PX4_dev_04" />
</div>

### Paso 2: Construir el Paquete ROS 2 `px4_msgs`

Para permitir que ROS 2 entienda los tópicos de PX4, debes compilar sus definiciones de mensajes.

```bash title="Terminal en Jetson"
# 1. Crear un workspace de ROS 2
mkdir -p ~/px4_ros_ws/src
cd ~/px4_ros_ws/src

# 2. Clonar los repositorios necesarios
git clone https://github.com/PX4/px4_msgs.git
git clone https://github.com/PX4/px4_ros_com.git # Contiene ejemplos

# 3. Cambiar a la rama que coincide con tu versión de firmware
cd px4_msgs
git checkout release/1.15

# 4. Compilar el workspace
cd ~/px4_ros_ws
source /opt/ros/humble/setup.bash
colcon build
```

:::caution[Compatibilidad de hardware para uXRCE-DDS]

La versión de `px4_msgs` **debe** coincidir con la versión de tu firmware PX4. Esto es fundamental para la compatibilidad.

Además, el soporte nativo completo de ROS 2 mediante uXRCE-DDS, que se convirtió en estándar en el firmware PX4 v1.14 y posteriores, requiere controladores de vuelo con **2 MB de memoria flash** (como el Pixhawk 4 Mini usado en esta guía).

El hardware más antiguo y clásico, como el popular **Pixhawk 2.4.8** (y otras placas basadas en FMUv2), solo tiene 1 MB de flash. No pueden ejecutar el firmware estándar precompilado necesario para este método uXRCE-DDS. Aunque es teóricamente posible crear un firmware personalizado y reducido, es un proceso complejo.

**Si estás usando un Pixhawk 2.4.8 u otra placa con 1 MB de flash, te recomendamos encarecidamente omitir este método y proceder directamente a [Método 2 (MAVSDK)](#4-method-2-mavsdk-high-level-api) o [Método 3 (MAVROS)](#5-method-3-mavros-the-powerful-ros-bridge), ya que ambos utilizan el protocolo MAVLink, que es totalmente compatible con tu hardware.**

:::

:::info
La rama de `px4_msgs` **debe** coincidir con la versión de tu firmware PX4 para garantizar que las definiciones de los mensajes sean compatibles.
:::

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '16px'
}}>
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/05.png" alt="PX4_dev_05" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/06.png" alt="PX4_dev_06" />
</div>

### Paso 3: Configurar el Firmware PX4

Conéctate a QGroundControl y establece los siguientes parámetros:

1. **`UXRCE_DDS_CFG`**: Establece en `TELEM1`. Esto activa el cliente XRCE-DDS en ese puerto.
2. **`SER_TEL1_BAUD`**: Establece en `921600 8N1`.
3. **`MAV_1_CONFIG`**: Establece en `Disabled`. Esto es crucial para evitar que MAVLink entre en conflicto en el mismo puerto.
4. Guarda los parámetros y reinicia el controlador de vuelo.

### Paso 4: Lanzar y Verificar

1. **Inicia el Agente en el Jetson** (en una terminal):

   ```bash title="Terminal 1: Ejecutar Agente"
   MicroXRCEAgent serial --dev /dev/ttyTHS1 -b 921600
   ```

2. **Verifica los Tópicos de ROS 2** (en una nueva terminal):

   ```bash title="Terminal 2: Verificar Tópicos"
   # Fuente tu workspace en cada nueva terminal
   source ~/px4_ros_ws/install/setup.bash

   # Deberías ver una lista de tópicos que comienzan con /fmu/
   ros2 topic list | grep /fmu/

   # Haz eco de un tópico para ver datos en vivo desde la FCU
   ros2 topic echo /fmu/out/vehicle_odometry
   ```

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '16px'
}}>
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/11.png" alt="PX4_dev_11" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/12.png" alt="PX4_dev_12" />
</div>

---

## Método 2: MAVSDK (API de Alto Nivel)

MAVSDK proporciona una API simple y moderna para controlar drones de forma programática, abstrayendo la complejidad del protocolo MAVLink. Es perfecto para escribir scripts de misión de alto nivel.

### Paso 1: Configurar el Firmware PX4

En QGroundControl, cambia la configuración del puerto del modo DDS de vuelta al modo MAVLink.

1. **`UXRCE_DDS_CFG`**: Establece de vuelta en `Disabled`.
2. **`MAV_1_CONFIG`**: Establece en `TELEM 1` para asignar el puerto a MAVLink.
3. **`MAV_1_MODE`**: Establece en `Onboard` para especificar que el enlace es para una computadora compañera.
4. **`SER_TEL1_BAUD`**: Asegúrate de que siga en `921600 8N1`.
5. Guarda los parámetros y reinicia el controlador de vuelo.

### Paso 2: Instalar MAVSDK-Python

```bash title="Terminal en Jetson"
pip3 install mavsdk
```

### Paso 3: Escribir y Ejecutar un Script de Control

Este script de Python se conecta, despega a 10 metros, espera y luego aterriza (el ejemplo muestra la conexión; amplíalo según tus necesidades).

```python title="takeoff_and_land.py"
import asyncio
from mavsdk import System

async def run():
    # Crear un objeto de dron y conectarse al controlador de vuelo
    drone = System()
    await drone.connect(system_address="serial:///dev/ttyTHS1:921600")

    print("Esperando a que el dron se conecte...")
    # Generador asíncrono que emite actualizaciones del estado de conexión
    async for state in drone.core.connection_state():
        if state.is_connected:
            print("--> ¡Dron detectado!")
            break

if __name__ == "__main__":
    # Ejecutar el bucle de eventos de asyncio
    asyncio.run(run())
```

Ejecuta el script desde tu terminal: `python3 takeoff_and_land.py`.

---

## Método 3: MAVROS (El Puente ROS Poderoso)

MAVROS es el gateway MAVLink-a-ROS probado en batalla, que ofrece funcionalidad integral y una estabilidad sin igual para sistemas complejos basados en ROS.

### Paso 1: Configurar el Firmware PX4

La configuración de PX4 para MAVROS es **idéntica a la configuración de MAVSDK**. Asegúrate de que `TELEM1` esté configurado para MAVLink en modo `Onboard`.

### Paso 2: Instalar MAVROS y Dependencias

```bash title="Terminal en Jetson"
sudo apt update
sudo apt install ros-humble-mavros ros-humble-mavros-msgs
```

:::info[¡Previene un bloqueo común!]
MAVROS requiere un conjunto de datos geográficos para las transformaciones de coordenadas. La falta de este conjunto de datos es una causa común de fallos al iniciar. Este script lo descarga e instala.

```bash title="Terminal en Jetson"
sudo bash /opt/ros/humble/lib/mavros/install_geographiclib_datasets.sh 
```

:::

### Paso 3: Lanzar y Verificar

1. **Lanzar el nodo MAVROS**:

   ```bash title="Terminal 1: Lanzar MAVROS"
   source /opt/ros/humble/setup.bash

   # Inicia mavros, especificando la URL de conexión de la FCU mediante un parámetro
   ros2 launch mavros px4.launch fcu_url:="serial:///dev/ttyTHS1:921600"
   ```

2. **Verificar la Conexión**:

   En una nueva terminal, haz eco del tópico de estado de MAVROS.

   ```bash title="Terminal 2: Verificar Conexión"
   ros2 topic echo /mavros/state
   ```

   Observa la salida. Una vez que el campo `connected` cambie a `true`, MAVROS se está comunicando exitosamente con tu PX4.

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '16px'
}}>
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/13.png" alt="PX4_dev_13" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/14.png" alt="PX4_dev_14" />
</div>

---

## Solución de Problemas Comunes

Si tienes problemas, revisa primero estos puntos frecuentes.

- **"Permission Denied" en puerto serie:** Olvidaste agregar tu usuario al grupo `dialout` y reiniciar. Revisa la sección "Conexión de Hardware".
- **"No such file or directory" para `/dev/ttyTHS1`:** Verifica dos veces tu cableado físico. ¿Está encendido el controlador de vuelo? Ejecuta `ls /dev/ttyTHS*` para confirmar el nombre del dispositivo.
- **MAVROS se bloquea al iniciar:** Probablemente omitiste el paso `install_geographiclib_dataset.sh`. Ejecuta el comando del Método 3.
- **Fallo en `colcon build`:** Asegúrate de haber configurado primero el entorno de ROS 2 (`source /opt/ros/humble/setup.bash`). Para problemas de dependencias más complejos, podrías necesitar ejecutar `rosdep install --from-paths src --ignore-src -r -y`.

## Palabras Finales

Ahora tienes tres métodos poderosos para habilitar la comunicación entre un Jetson Orin y un controlador de vuelo PX4. La mejor herramienta depende de la arquitectura de tu proyecto, las necesidades de rendimiento y la velocidad de desarrollo. Al entender las compensaciones, puedes construir una base robusta para cualquier aplicación de dron autónomo.

¡Feliz vuelo! 🚁

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
