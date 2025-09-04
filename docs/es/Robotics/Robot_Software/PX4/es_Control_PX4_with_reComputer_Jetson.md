---
description: Control PX4 with reComputer Jetson
title: Control PX4 with reComputer Jetson
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

-   Cómo conectar físicamente tu Jetson a un Pixhawk.
-   Los pros y contras de uXRCE-DDS, MAVSDK y MAVROS.
-   Instrucciones de configuración paso a paso para los tres métodos de comunicación.
-   Cómo verificar la conexión y solucionar problemas comunes.

:::

## Prerrequisitos

Antes de comenzar, asegúrate de tener lo siguiente:

-   **Hardware:** Todos los dispositivos listados en la tabla "Entorno de Laboratorio" a continuación.
-   **Software:** Una instalación nueva de Jetson Pack 6.2 y ROS 2 Humble.
-   **Herramientas:** `git` y `pip` instalados en tu Jetson.
-   **Conocimiento:** Familiaridad básica con la línea de comandos de Linux, conceptos de ROS 2 (nodos, tópicos) y parámetros PX4 en QGroundControl.

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

-   **Cableado**: Use un cable JST-GH de 4 pines para conectar el puerto **`TELEM1` del Pixhawk 4 Mini** al header **`UART1` del Jetson Orin Nano**.
-   **Archivo de Dispositivo**: Este puerto serie corresponde a `/dev/ttyTHS1` en el SO del Jetson.

<details>
<summary><strong>Detalles del Puerto y Pinout del Pixhawk 4 Mini (Haga clic para expandir)</strong></summary>

<br/>

| UART   | Dispositivo | Descripción del Parámetro QGC | Etiqueta del Puerto en FC      |
| :----- | :---------- | :----------------------------- | :------------------------------ |
| UART1  | /dev/ttyS0  | GPS1                           | GPS Module                      |
| USART2 | /dev/ttyS1  | TELEM1                         | TELEM1                          |
| USART3 | /dev/ttyS2  | TELEM2                         | N/A                             |
| UART4  | /dev/ttyS3  | TELEM/SERIAL4                  | UART/I2C B                      |
| USART6 | /dev/ttyS4  | N/A                            | RC IN                           |
| UART7  | /dev/ttyS5  | N/A                            | Debug                           |
| UART8  | /dev/ttyS6  | N/A                            | Not connected (no PX4IO)        |

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
| 2(amarillo)| SBUS* | +3.3V   |
| 3(nulo)    | RSSI** | +3.3V   |
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
| 3(null)    | RSSI**             | +3.3V   |
| 4(null)    | VDD_3V3_SPEKTRUM   | +3.3V   |
| 5(negro)   | GND                | GND     |

---
**Notas al pie:**

* **`*` (Puerto UART e I2C B):** Un puerto de repuesto para conectar sensores que soporten comunicación serie o I2C, por ejemplo, se puede conectar aquí un segundo módulo GPS.
* **`*` (Señal SBUS):** Conecta aquí el cable de señal del receptor SBUS o DSM/Spektrum.
* **`**` **(Señal RSSI):** Envía la información de intensidad de señal RC al piloto automático.

</details>

:::caution[CRÍTICO: Configurar Permisos del Puerto Serie]

Para evitar usar `sudo` en cada comando serie, debes añadir tu usuario al grupo `dialout`. Esta es una configuración única crucial.

```bash
sudo usermod -a -G dialout $USER
````

**You must reboot the Jetson for this change to take effect\!**

:::

## Choosing Your Method: A Comparison

Before diving in, understand the trade-offs. The right choice depends entirely on your project's goals.

| Feature             | uXRCE-DDS (ROS 2 Native) 🚀                                     | MAVSDK (High-Level API) 🐍                                         | MAVROS (ROS Bridge) 🌉                                                        |
| :------------------ | :--------------------------------------------------------------- | :----------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| **Architecture** | PX4 and ROS 2 share a DDS data space for **native communication**. | A standalone C++ library (with wrappers) providing a high-level API. | A **bridge/gateway** that translates MAVLink protocol to ROS topics/services. |
| **Performance** | **Highest**. Zero-copy data transfer with the lowest latency.      | **High**. The API calls directly generate efficient MAVLink messages.    | **Good**. A slight overhead exists due to the MAVLink-to-ROS translation layer. |
| **Ease of Use** | Moderate. Requires compiling the Agent and `px4_msgs`.          | **Easiest**. Intuitive, function-based API ideal for rapid prototyping. | Steep learning curve but offers the deepest integration with the ROS ecosystem. |
| **Flexibility** | **Excellent**. Provides direct access to all internal PX4 uORB topics. | **Limited**. Exposes common actions (takeoff, waypoints) but not raw data. | **Excellent**. Access to nearly all MAVLink messages, parameters, and services. |
| **ROS Integration** | **Native ROS 2**. The official, future-proof method for ROS 2.       | **ROS Agnostic**. Can be used in any project, easily wrapped in a ROS node. | **ROS Centric**. The de-facto standard for ROS 1 and widely used in ROS 2.    |
| **Use Case** | Performance-critical ROS 2 projects needing low-level data access. | Task-level scripting, rapid prototyping, non-ROS projects, and education. | Complex robotics systems integrated with ROS packages like Nav2 or MoveIt.    |


## Method 1: uXRCE-DDS (Native ROS 2 Integration)

This is PX4's official solution for ROS 2, bridging its internal `uORB` messaging system directly into the ROS 2 network for zero-overhead communication.

### Step 1: Compile the Micro XRCE-DDS Agent

The Agent is a small program on the Jetson that acts as a broker between the flight controller's serial connection and the ROS 2 network.

```bash title="Terminal on Jetson"
# 1. Clone the specific version of the Agent repository
cd ~
git clone -b v2.4.2 https://github.com/eProsima/Micro-XRCE-DDS-Agent.git
cd Micro-XRCE-DDS-Agent

# 2. IMPORTANT: Patch the Fast-DDS dependency version
# The v2.12.x tag for fastdds was removed by the vendor; we update it to a working one.
sed -i 's/v2.12.x/v2.13.x/g' SuperBuild.cmake

# 3. Build and install the Agent
mkdir build && cd build
cmake ..
make
sudo make install # Installs MicroXRCEAgent globally
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

Para permitir que ROS 2 entienda los temas de PX4, debes construir sus definiciones de mensajes.

```bash title="Terminal on Jetson"
# 1. Create a ROS 2 workspace
mkdir -p ~/px4_ros_ws/src
cd ~/px4_ros_ws/src

# 2. Clone the required repositories
git clone https://github.com/PX4/px4_msgs.git
git clone https://github.com/PX4/px4_ros_com.git # Contains examples

# 3. Checkout the branch matching your firmware version
cd px4_msgs
git checkout release/1.15

# 4. Build the workspace
cd ~/px4_ros_ws
source /opt/ros/humble/setup.bash
colcon build
```

:::caution[Compatibilidad de Hardware para uXRCE-DDS]

La versión de `px4_msgs` **debe** alinearse con la versión de tu firmware PX4. Esto es crítico para la compatibilidad.

Además, el soporte completo nativo de ROS 2 vía uXRCE-DDS, que se convirtió en estándar en el firmware PX4 v1.14 y posteriores, requiere controladores de vuelo con **2MB de memoria flash** (como el Pixhawk 4 Mini usado en esta guía).

El hardware clásico más antiguo como el popular **Pixhawk 2.4.8** (y otras placas basadas en FMUv2) solo tienen 1MB de flash. No pueden ejecutar el firmware estándar pre-compilado requerido para este método uXRCE-DDS. Aunque crear un firmware personalizado y reducido es teóricamente posible, es un proceso complejo.

**Si estás usando un Pixhawk 2.4.8 u otra placa de 1MB de flash, recomendamos encarecidamente que omitas este método y procedas directamente al [Método 2 (MAVSDK)](#4-method-2-mavsdk-high-level-api) o [Método 3 (MAVROS)](#5-method-3-mavros-the-powerful-ros-bridge), ya que ambos usan el protocolo MAVLink que es completamente soportado en tu hardware.**

:::

:::info
La rama de `px4_msgs` **debe** coincidir con la versión de tu firmware PX4 para asegurar que las definiciones de mensajes sean compatibles.
:::

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '16px'
}}>
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/05.png" alt="PX4_dev_01" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/06.png" alt="PX4_dev_02" />
</div>


### Paso 3: Configurar el Firmware PX4

Conéctate a QGroundControl y establece los siguientes parámetros:

1.  **`UXRCE_DDS_CFG`**: Establece a `TELEM1`. Esto activa el cliente XRCE-DDS en ese puerto.
2.  **`SER_TEL1_BAUD`**: Establece a `921600 8N1`.
3.  **`MAV_1_CONFIG`**: Establece a `Disabled`. Esto es crucial para prevenir que MAVLink entre en conflicto en el mismo puerto.
4.  Guarda los parámetros y reinicia el controlador de vuelo.

### Paso 4: Lanzar y Verificar

1.  **Iniciar el Agente en el Jetson** (en una terminal):

    ```bash title="Terminal 1: Run Agent"
    MicroXRCEAgent serial --dev /dev/ttyTHS1 -b 921600
    ```

2.  **Verificar Tópicos de ROS 2** (en una nueva terminal):

    ```bash title="Terminal 2: Verify Topics"
    # Source your workspace in every new terminal
    source ~/px4_ros_ws/install/setup.bash

    # You should see a list of topics starting with /fmu/
    ros2 topic list | grep /fmu/

    # Echo a topic to see live data streaming from the FCU
    ros2 topic echo /fmu/out/vehicle_odometry
    ```

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '16px'
}}>
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/11.png" alt="PX4_dev_01" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/12.png" alt="PX4_dev_02" />
</div>


-----

## Método 2: MAVSDK (API de Alto Nivel)

MAVSDK proporciona una API simple y moderna para controlar drones programáticamente, abstrayendo las complejidades del protocolo MAVLink. Es perfecto para escribir scripts de misión de alto nivel.

### Paso 1: Configurar el Firmware PX4

En QGroundControl, cambia la configuración del puerto de modo DDS de vuelta al modo MAVLink.

1.  **`UXRCE_DDS_CFG`**: Establece de vuelta a `Disabled`.
2.  **`MAV_1_CONFIG`**: Establece a `TELEM 1` para asignar el puerto a MAVLink.
3.  **`MAV_1_MODE`**: Establece a `Onboard` para especificar que el enlace es para una computadora compañera.
4.  **`SER_TEL1_BAUD`**: Asegúrate de que esto siga siendo `921600 8N1`.
5.  Guarda los parámetros y reinicia el controlador de vuelo.

### Paso 2: Instalar MAVSDK-Python

```bash title="Terminal on Jetson"
pip3 install mavsdk
```

### Paso 3: Escribir y Ejecutar un Script de Control

Este script de Python se conecta, despega a 10 metros, espera, y luego aterriza.

```python title="takeoff_and_land.py"
import asyncio
from mavsdk import System

async def run():
    # Create a drone object and connect to the flight controller
    drone = System()
    await drone.connect(system_address="serial:///dev/ttyTHS1:921600")

    print("Waiting for drone to connect...")
    # This is an asynchronous generator that yields connection state updates
    async for state in drone.core.connection_state():
        if state.is_connected:
            print("--> Drone discovered!")
            break

if __name__ == "__main__":
    # Run the asyncio event loop
    asyncio.run(run())
```

Ejecuta el script desde tu terminal: `python3 takeoff_and_land.py`.

-----

## Método 3: MAVROS (El Puente ROS Poderoso)

MAVROS es el gateway MAVLink-a-ROS probado en batalla, que ofrece funcionalidad integral y estabilidad sin igual para sistemas complejos basados en ROS.

### Paso 1: Configurar el Firmware PX4

La configuración de PX4 para MAVROS es **idéntica a la configuración de MAVSDK**. Asegúrate de que `TELEM1` esté configurado para MAVLink en modo `Onboard`.

### Paso 2: Instalar MAVROS y Dependencias

```bash title="Terminal on Jetson"
sudo apt update
sudo apt install ros-humble-mavros ros-humble-mavros-msgs
```

:::info[¡Prevenir un Fallo Común!]
MAVROS requiere un conjunto de datos geográficos para las transformaciones de coordenadas. Un conjunto de datos faltante es una causa común de fallos al inicio. Este script lo descarga e instala.

```bash title="Terminal on Jetson"
sudo bash /opt/ros/humble/lib/mavros/install_geographiclib_datasets.sh 
```

:::

### Paso 3: Lanzar y Verificar

1.  **Lanzar el nodo MAVROS**:

    ```bash title="Terminal 1: Lanzar MAVROS"
    source /opt/ros/humble/setup.bash

    # Launch mavros, specifying the FCU connection URL via a parameter
    ros2 launch mavros px4.launch fcu_url:="serial:///dev/ttyTHS1:921600"
    ```

2.  **Verificar la Conexión**:

    En un nuevo terminal, haz echo del tópico de estado de MAVROS.

    ```bash title="Terminal 2: Verificar Conexión"
    ros2 topic echo /mavros/state
    ```

    Observa la salida. Una vez que el campo `connected` cambie a `true`, MAVROS se está comunicando exitosamente con tu PX4.

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '16px'
}}>
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/13.png" alt="PX4_dev_01" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/14.png" alt="PX4_dev_02" />
</div>

-----

## Solución de Problemas Comunes

Si tienes problemas, revisa primero estos problemas comunes.

  - **"Permission Denied" en Puerto Serial:** Olvidaste agregar tu usuario al grupo `dialout` y reiniciar. Ve la sección "Conexión de Hardware".
  - **"No such file or directory" para `/dev/ttyTHS1`:** Verifica dos veces tu cableado físico. ¿Está encendido el controlador de vuelo? Ejecuta `ls /dev/ttyTHS*` para confirmar el nombre del dispositivo.
  - **MAVROS se Bloquea al Iniciar:** Probablemente omitiste el paso `install_geographiclib_dataset.sh`. Ejecuta el comando del Método 3.
  - **`colcon build` Falla:** Asegúrate de haber configurado primero el entorno ROS 2 (`source /opt/ros/humble/setup.bash`). Para problemas de dependencias más complejos, podrías necesitar ejecutar `rosdep install --from-paths src --ignore-src -r -y`.

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
