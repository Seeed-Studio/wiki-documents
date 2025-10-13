---
description: Este wiki proporciona un tutorial para los motores de la serie Myactuator.
title: Motores de la Serie MyActuator
keywords:
- actuator
- motor
- arm
- robotics
image: https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/all.webp
slug: /es/myactuator_series
last_update:
  date: 05/29/2025
  author: ZhuYaoHui
---

# Introducción a los Motores de la Serie MyActuator X

Este artículo presentará cómo comenzar con los motores de la serie MyActuator y cómo usarlos con C++ y Python en el reComputer Mini Jetson Orin.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/all.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱</font></span></strong>
    </a>
</div>

## Especificaciones

Aquí está la tabla completa con todos los parámetros completados para todos los modelos de motor:

<table>
  <thead>
    <tr>
      <th>Parámetro</th>
      <th>X2-7</th>
      <th>X4-10</th>
      <th>X4-36</th>
      <th>X8-120</th>
      <th>X12-320</th>
      <th>X15-450</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Relación de Engranajes</td><td>28.17</td><td>12.6</td><td>36</td><td>19.61</td><td>20</td><td>20.25</td></tr>
    <tr><td>Voltaje de Entrada (V)</td><td>24</td><td>24</td><td>24</td><td>48</td><td>48</td><td>72</td></tr>
    <tr><td>Velocidad Sin Carga (RPM)</td><td>178</td><td>317</td><td>111</td><td>158</td><td>125</td><td>108</td></tr>
    <tr><td>Corriente de Entrada Sin Carga (A)</td><td>1</td><td>1</td><td>0.9</td><td>1.6</td><td>2.7</td><td>3.5</td></tr>
    <tr><td>Velocidad Nominal (RPM)</td><td>142</td><td>238</td><td>83</td><td>127</td><td>100</td><td>98</td></tr>
    <tr><td>Par Nominal (N.m)</td><td>2.5</td><td>4</td><td>10.5</td><td>43</td><td>85</td><td>145</td></tr>
    <tr><td>Potencia de Salida Nominal (W)</td><td>37</td><td>100</td><td>100</td><td>574</td><td>900</td><td>1480</td></tr>
    <tr><td>Corriente de Fase Nominal A(rms)</td><td>3</td><td>7.8</td><td>6.1</td><td>17.6</td><td>30</td><td>25</td></tr>
    <tr><td>Par Máximo (N.m)</td><td>7</td><td>10</td><td>34</td><td>120</td><td>320</td><td>450</td></tr>
    <tr><td>Corriente de Fase Máxima A(rms)</td><td>8.1</td><td>19.5</td><td>21.5</td><td>43.8</td><td>100</td><td>69.2</td></tr>
    <tr><td>Eficiencia (%)</td><td>63</td><td>69.5</td><td>63.1</td><td>79</td><td>75</td><td>82.4</td></tr>
    <tr><td>Constante de FEM del Motor (Vdc/Krpm)</td><td>4.3</td><td>6</td><td>6</td><td>19.2</td><td>17.9</td><td>29.9</td></tr>
    <tr><td>Constante de Par del Módulo (N.m/A)</td><td>0.8</td><td>0.8</td><td>1.9</td><td>2.4</td><td>3.3</td><td>5.8</td></tr>
    <tr><td>Resistencia de Fase del Motor (Ω)</td><td>0.61</td><td>0.32</td><td>0.35</td><td>0.18</td><td>0.12</td><td>0.08</td></tr>
    <tr><td>Inductancia de Fase del Motor (mH)</td><td>0.13</td><td>0.14</td><td>0.17</td><td>0.31</td><td>0.05</td><td>0.14</td></tr>
    <tr><td>Par de Polos</td><td>13</td><td>13</td><td>13</td><td>10</td><td>20</td><td>20</td></tr>
    <tr><td>Conexión de 3 Fases</td><td colspan="6">Y</td></tr>
    <tr><td>Par de Retroceso (N.m)</td><td>0.4</td><td>0.8</td><td>1.14</td><td>3.21</td><td>3.8</td><td>4</td></tr>
    <tr><td>Holgura (Arcmin)</td><td>12</td><td>10</td><td>10</td><td>10</td><td>10</td><td>10</td></tr>
    <tr><td>Tipo de Rodamiento de Salida</td><td colspan="2">Rodamientos de Bolas de Ranura Profunda</td><td colspan="4">Rodamientos de Rodillos Cruzados</td></tr>
    <tr><td>Carga Axial (KN)</td><td>0.25</td><td>1.2</td><td>1.3</td><td>4</td><td>4.5</td><td>5.4</td></tr>
    <tr><td>Esfuerzo Axial (KN)</td><td>0.25</td><td>1.2</td><td>1.3</td><td>1</td><td>4.5</td><td>5.4</td></tr>
    <tr><td>Carga Radial (KN)</td><td>1</td><td>1.2</td><td>1.5</td><td>4.5</td><td>5</td><td>6</td></tr>
    <tr><td>Inercia (Kg.cm²)</td><td>0.17</td><td>0.25</td><td>0.3</td><td>1.5</td><td>12.9</td><td>31.6</td></tr>
    <tr><td>Tipo de Codificador e Interfaz</td><td colspan="6">Codificador Dual ABS-17BIT (Entrada) / 17-18BIT (Salida)</td></tr>
    <tr><td>Precisión de Control (Grados)</td><td colspan="6">&lt;0.01</td></tr>
    <tr><td>Comunicación</td><td colspan="6">CAN BUS / EtherCAT</td></tr>
    <tr><td>Peso (Kg)</td><td>0.26</td><td>0.33</td><td>0.36</td><td>1.40</td><td>2.37</td><td>3.50</td></tr>
    <tr><td>Grado de Aislamiento</td><td colspan="6">F</td></tr>
  </tbody>
</table>

## Convenciones de Nomenclatura de la Serie RMD-X V4

- **RMD**: Nombre de Marca R-Reductor M-Motor D-Accionamiento
- **X2**: X Representa el Nombre de la Serie: Actuador Planetario Integrado, 2 representa el número de modelo del motor ej: X2 X4 X6 X8 etc
- **P28**: Relación de engranajes planetarios ej: P12 P28 P32 etc
- **7**: Par máximo 7N.m
- **E**: Comunicación E: CAN BUS & EtherCAT

## Características Principales

1. **CAN BUS & EtherCAT**
2. **Rodamientos de Rodillos Cruzados**
3. **Codificador Dual**
4. **Alta Densidad de Par**
5. **Alta Precisión**
6. **Diseño Hueco**

## Introducción

### Preparación del Entorno Antes del Uso

**Sistema Windows en PC**

- Descarga el [manual del producto correspondiente](https://www.myactuator.com/_files/archives/cab28a_b3f2a1c77d4645a08052a923690b40fc.zip?dn=MYACTUATOR_Setup%20Software_V4.0_20250206.zip).
- Descarga el [MYACTUATOR_Setup Software_V4.0.zip](https://www.myactuator.com/_files/archives/cab28a_b3f2a1c77d4645a08052a923690b40fc.zip?dn=MYACTUATOR_Setup%20Software_V4.0_20250206.zip)

- Extrae `MYACTUATOR_Setup Software_V4.0.zip` e instala lo siguiente:
  - `USBCAN_AllInOne_x86_x64_2.0.0.1.exe` ubicado en el directorio `Required Runtime Environment\ZLGUSBCAN_Driver`
  - `MSVBCRT.AIO.2019.10.19.X86 X64.exe` ubicado en el directorio `Required Microsoft Runtime Libraries`

### Conectar el Circuito

Aquí hemos seleccionado el motor X4-36, y su diagrama de interfaz se muestra a continuación.

<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/X4-36-circuit.png" />
</div>

<table>
  <tr>
    <th>Definición del Puerto</th>
    <th>Descripción del Puerto</th>
  </tr>
  <tr>
    <td>① VCC</td>
    <td>Positivo de alimentación</td>
  </tr>
  <tr>
    <td>② GND</td>
    <td>Negativo de alimentación</td>
  </tr>
  <tr>
    <td>③ CAN_H</td>
    <td>Terminal de señal de red CAN_H</td>
  </tr>
  <tr>
    <td>④ CAN_L</td>
    <td>Terminal de señal de red CAN_L</td>
  </tr>
  <tr>
    <td>⑤ EtherCAT_IN</td>
    <td>Terminal de entrada EtherCAT</td>
  </tr>
  <tr>
    <td>⑥ EtherCAT_OUT</td>
    <td>Terminal de salida EtherCAT</td>
  </tr>
  <tr>
    <td>⑦ T+</td>
    <td>El maestro envía comandos de control al módulo</td>
  </tr>
  <tr>
    <td>⑧ T-</td>
    <td>El módulo envía retroalimentación de estado al maestro</td>
  </tr>
  <tr>
    <td>⑨ R+</td>
    <td>El maestro refleja los datos de estado del módulo</td>
  </tr>
  <tr>
    <td>⑩ R-</td>
    <td>El módulo refleja los comandos de control del maestro</td>
  </tr>
</table>

Aquí, utilizamos el método de comunicación CAN, que requiere una interfaz USB-CAN adicional para depuración a través de una computadora superior en Windows.

<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/6.jpg" />
</div>

Aquí, necesitas proporcionar una fuente de alimentación de 24V separada para el motor y conectar el USB a tu computadora.

### Usar el `MYACTUATOR Setup Software 250206.exe` para Probar el Motor

| **Configurar ID y Conexión** | **Leer Información del Motor** | **Calibrar el motor** | **Calibrar el motor** |**Ejecutar una prueba de rotación del motor.** |
|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/1.png) | ![fig2](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/2.png) | ![fig3](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/3.png) | ![fig4](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/4.png) |![fig5](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/5.png) |
| El ID predeterminado del motor es 1. Ingresa ID como 1 y haz clic en "Connect". | Después de conectar, haz clic en "Read" para recuperar la información actual del motor.|Para el primer uso, haz clic en "Calibrate Motor" para realizar la calibración.|Después de la calibración, haz clic en "Read" y "Save". |Ahora puedes probar diferentes modos de control del motor en la sección Motor Running. |

Para más características detalladas, consulta el **Setup Software Instruction Manual - V3.0.pdf** incluido en el archivo [MYACTUATOR_Setup Software_V4.0.zip](https://www.myactuator.com/_files/archives/cab28a_b3f2a1c77d4645a08052a923690b40fc.zip?dn=MYACTUATOR_Setup%20Software_V4.0_20250206.zip).

## Controlar el Motor Usando el [reComputer Mini Jetson Orin.](/es/recomputer_jetson_mini_getting_started)

Actualmente, las interfaces de comunicación CAN más comunes para motores en el mercado utilizan **XT30 (2+2)** y **conectores JST**. Nuestro dispositivo **reComputer Mini Jetson Orin** y **reComputer Robotics** está equipado con **puertos duales XT30 (2+2)** e **interfaces CAN basadas en JST**, proporcionando compatibilidad perfecta.

**reComputer Mini:**
<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

**reComputer Robotics**
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig5.jpg"/>  
</div>

Para más detalles sobre el uso de CAN, puedes consultar este [wiki](https://wiki.seeedstudio.com/es/recomputer_jetson_mini_hardware_interfaces_usage/#can ).

### Habilitar Interfaces CAN

**Paso1:** Antes de usar CAN0 y CAN1, por favor retira la cubierta inferior y configura ambas resistencias de terminación de 120Ω en la posición ON.

<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/7.png" />
</div>

**Paso2:** Conecta el motor directamente al CAN0 del reComputer Mini a través de la interfaz XT30 (2+2).

Esta es la interfaz CAN0 para reComputer Mini

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can0-datasheet.png"/>
</div>

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/8.jpg" />
</div>

:::dangerEsta fuente de alimentación es solo para el aprendizaje y pruebas de un solo motor. Para múltiples motores, por favor diseñe una placa de alimentación separada y aísle la fuente de alimentación del Jetson de la fuente de alimentación del motor para evitar que pase alta corriente directamente a través del Jetson.
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

### Construir Entorno Python y C++

**Paso1:** Clonar el SDK con Git.

```bash
git clone https://github.com/ZhuYaoHui1998/myactuator_rmd.git
```

**Paso2:** Este SDK del controlador requiere que se instalen las siguientes dependencias. Para Debian Linux se pueden instalar a través de apt de la siguiente manera:

```bash
sudo apt-get install -y build-essential cmake
sudo apt install linux-modules-extra-5.15.0-1025-nvidia-tegra # For Jetson Jetpack 6.0
```

En caso de que quiera usar los enlaces de Python tendrá que instalar adicionalmente Python 3, pip y pybind11:

```bash
sudo apt-get install -y python3 python3-pip python3-pybind11 python3-setuptools
```

Después de haber instalado sus dependencias tendrá que instalar el SDK del controlador ya sea como una biblioteca C++ o paquete Python como se describe en los siguientes pasos. Ambos usarán CMake para compilar el código C++.

#### Construir la Biblioteca C++

Para construir el SDK del controlador C++ abra una nueva terminal dentro de esta carpeta y ejecute los siguientes comandos. En versiones más antiguas de Linux la construcción podría fallar con el mensaje de error error: 'const struct can_frame' has no member named 'len' y tendrá que aplicar la modificación de código discutida en [issue 5](https://github.com/2b-t/myactuator_rmd/issues/5).

```bash
cd ~/myactuator_rmd
mkdir build
cd build
cmake .. -D PYTHON_BINDINGS=on
make -j $(nproc)
sudo make install
```

La bandera PYTHON_BINDINGS (por defecto desactivada) construye los enlaces de Python adicionalmente a la biblioteca C++. En caso de que solo esté interesado en usar la biblioteca C++ siéntase libre de dejarla desactivada. Cuando construya los enlaces de Python de esta manera serán compilados a una biblioteca compartida pero no serán instalados. Esto significa que tendrá que instalar la biblioteca manualmente o solo podrá importarlos localmente dentro de la carpeta de construcción.

Para desinstalar el paquete nuevamente puede usar el siguiente comando `xargs rm < install_manifest.txt`.

#### Construir la Biblioteca Python

Para construir e instalar los enlaces de Python para este SDK abra una nueva terminal dentro de la carpeta principal y ejecute el siguiente comando:

```bash
cd ~/myactuator_rmd
pip3 install .
```

Esto usará el setup.py para invocar CMake e instalar los enlaces como una biblioteca C++. Si quiere removerlos nuevamente simplemente invoque `pip3 uninstall myactuator-rmd-py`.

### Control Usando C++

1. Crear estructura de directorio del proyecto  
Cree su directorio de proyecto bajo el directorio src del código, por ejemplo, nómbrelo `myactuator_example`, y cree una carpeta src bajo el subdirectorio.

```bash  
cd ~/myactuator_rmd
mkdir -p ~/myactuator_rmd/src/myactuator_example/src  
cd ~/myactuator_rmd/src/myactuator_example  
```  

2. Escribir CMakeLists.txt  
En el archivo `~/myactuator_rmd/src/myactuator_example/CMakeLists.txt`, escriba el siguiente contenido:

```bash
touch CMakeLists.txt
```

```cmake  
cmake_minimum_required(VERSION 3.20)  
project(myactuator_example)  

# Find the myactuator_rmd library  
find_package(myactuator_rmd REQUIRED)  

# Create executable  
add_executable(myactuator_node  
src/main.cpp  
)  

# Use C++17 standard  
target_compile_features(myactuator_node PUBLIC  
cxx_std_17  
)  

# Link the myactuator_rmd library  
target_link_libraries(myactuator_node PUBLIC  
myactuator_rmd::myactuator_rmd  
)  
```

3. Escribir main.cpp  
En el archivo `~/myactuator_rmd/src/myactuator_example/src/main.cpp`, escriba el siguiente código:  

```bash
touch src/main.cpp
```

```cpp
#include <cstdlib>
#include <iostream>
#include <myactuator_rmd/myactuator_rmd.hpp>

int main() {
myactuator_rmd::CanDriver driver {"can0"};
myactuator_rmd::ActuatorInterface actuator {driver, 1};

std::cout << actuator.getVersionDate() << std::endl;
std::cout << actuator.sendPositionAbsoluteSetpoint(180.0, 500.0) << std::endl;
actuator.shutdownMotor();
return EXIT_SUCCESS;
}
```

4. Construir el proyecto  

```bash
cd ~/myactuator_rmd/src/myactuator_example
mkdir build && cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
make
```

5. Ejecutar el programa  

```bash
sudo ./myactuator_node
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/Cresult.png" />
</div>

**Prerrequisitos**  

- La interfaz CAN `can0` debe estar configurada correctamente (asegúrese de que su motor y bus CAN estén conectados correctamente).  
- La biblioteca `myactuator_rmd` debe estar instalada correctamente (si no, instálela primero).

Para más detalles de implementación en C++, por favor consulte todo el contenido en `myactuator_rmd.hpp`. Proporcionaremos una introducción detallada a los métodos de uso de Python.

### Control Usando Python

Cree una carpeta llamada scripts bajo el directorio `~/myactuator_rmd/src/myactuator_example` para almacenar scripts de Python.

```bash
cd ~/myactuator_rmd/src/myactuator_example
mkdir scripts
```

#### **Obtener número de versión**

Cree un script de Python personalizado llamado `test.py` bajo el directorio scripts y llénelo con el siguiente código.

```python
import myactuator_rmd_py as rmd
import time

# Initialize CAN driver and actuator interface
driver = rmd.CanDriver("can0")  # Using can0
actuator = rmd.ActuatorInterface(driver, 1)  # CAN ID set to 1

# Get version number
print("Version number:", actuator.getVersionDate())
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/8.png" />
</div>

Cargue la biblioteca y continúe para crear un controlador para una interfaz de red particular (aquí can0) y unidad (aquí 1 correspondiente a la dirección CAN 0x140 + 1 = 0x141).

#### **Obtener Estado del Motor**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Motor Status 1
status1 = actuator.getMotorStatus1()
print(f"""
Motor Status 1:
Temperature: {status1.temperature}°C
Brake Status: {'Released' if status1.is_brake_released else 'Locked'}
Voltage: {status1.voltage}V
Error Code: {status1.error_code}
""")

# Motor Status 2
status2 = actuator.getMotorStatus2()
print(f"""
Motor Status 2:
Temperature: {status2.temperature}°C
Current: {status2.current}A
Shaft Speed: {status2.shaft_speed} RPM
Shaft Angle: {status2.shaft_angle}°
""")

# Motor Status 3
status3 = actuator.getMotorStatus3()
print(f"""
Motor Status 3:
Temperature: {status3.temperature}°C
Phase A Current: {status3.current_phase_a}A
Phase B Current: {status3.current_phase_b}A
Phase C Current: {status3.current_phase_c}A
""")

## Torque Calculation

import myactuator_rmd_py as rmd
from myactuator_rmd_py.actuator_constants import X4_24  # Import according to your motor model

def get_normalized_torque(actuator):
    """Calculate normalized torque from current"""
    # Get current value
    status = actuator.getMotorStatus2()
    current = status.current

    # Calculate normalized torque (current/rated)
    torque_ratio = current / X4_24.rated_current
    actual_torque = torque_ratio * X4_24.rated_torque
    return actual_torque

# Usage example
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

try:
    while True:
        torque = get_normalized_torque(actuator)
        print(f"Current Torque: {torque:.3f} Nm (Rated: {X4_24.rated_torque} Nm)", end='\r')
        time.sleep(0.1)
except KeyboardInterrupt:
    actuator.shutdownMotor()
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/9.png" />
</div>

#### **Modo de Control**

- **Obtener Modo de Control Actual**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)
mode = actuator.getControlMode()
print(f"Current Control Mode: {mode}")
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/10.png" />
</div>

- **Control de Posición Absoluta**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Move to 180 degree position at 100 deg/s
actuator.sendPositionAbsoluteSetpoint(180.0, 300.0)
time.sleep(5)  # Wait for motor to reach target position

# Get current position
angle = actuator.getMultiTurnAngle()
print(f"Current position: {angle}°")

time.sleep(5)
mode = actuator.getControlMode()
print(f"Current control mode: {mode}")
actuator.shutdownMotor()
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/11.png" />
</div>

Verá su motor rotar a la posición de 180 grados.

- **Control de Posición Relativa**

```python
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Move an additional 90 degrees from current position
current_angle = actuator.getMultiTurnAngle()
target_angle = current_angle + 90.0
actuator.sendPositionAbsoluteSetpoint(target_angle, 50.0)
time.sleep(3)
angle = actuator.getMultiTurnAngle()
print(f"Current position: {angle}°")
mode = actuator.getControlMode()
print(f"Current control mode: {mode}")
actuator.shutdownMotor()
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/12.png" />
</div>

Observará el motor rotando 90 grados en sentido antihorario.

- **Control de Velocidad**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Continuous rotation at 500 RPM
actuator.sendVelocitySetpoint(500.0)
time.sleep(15)

# Stop motor
actuator.stopMotor()

# Get current position
angle = actuator.getMultiTurnAngle()
print(f"Current position: {angle}°")

mode = actuator.getControlMode()
print(f"Current control mode: {mode}")```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/13.png" />
</div>

- **Control de Par**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Apply 0.5A current (torque)
actuator.sendCurrentSetpoint(0.5)
time.sleep(2)

# Stop torque output
actuator.stopMotor()

# Get current position
angle = actuator.getMultiTurnAngle()
print(f"Current position: {angle}°")

mode = actuator.getControlMode()
print(f"Current control mode: {mode}")
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/14.png" />
</div>

- **Control de Movimiento en Bucle Cerrado**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time

# Initialization
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Position control with feedback
feedback = actuator.sendPositionAbsoluteSetpoint(180.0, 100.0)
time.sleep(5)
print(feedback)


# Velocity control with feedback
feedback = actuator.sendVelocitySetpoint(20.0)
time.sleep(5)
print(feedback)

# Torque control with feedback
torque_constant = 0.32  # Set according to motor model
feedback = actuator.sendTorqueSetpoint(1.5, torque_constant)
time.sleep(5)
print(feedback)

actuator.stopMotor()
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/15.png" />
</div>

#### Control de Freno del Motor

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Engage brake
actuator.lockBrake()
print("Brake engaged")

# Release brake
actuator.releaseBrake()
print("Brake released")
```

#### Control de Energía del Motor

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Power off motor
actuator.shutdownMotor()
print("Motor powered off")
```

#### Funciones del Encoder

- **Obtener Posición del Encoder Multi-vuelta**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)
encoder_pos = actuator.getMultiTurnEncoderPosition()
print(f"Multi-turn encoder position: {encoder_pos}")
```

- **Establecer Posición Actual como Punto Cero (Requiere Reinicio)**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)
actuator.setCurrentPositionAsEncoderZero()
print("Current position set as encoder zero point")
```

- **Establecer Punto Cero Personalizado (Requiere Reinicio)**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time

driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Get current position as zero point
current_pos = actuator.getMultiTurnEncoderOriginalPosition()
print(f"Raw encoder position: {current_pos}")

# Set zero offset
actuator.setEncoderZero(current_pos)
print(f"Encoder zero point set to: {current_pos}")

# Reboot to apply settings
actuator.shutdownMotor()
time.sleep(1)  # Wait for shutdown
actuator = rmd.ActuatorInterface(driver, 1)  # Reinitialize

# Verify
new_pos = actuator.getMultiTurnEncoderPosition()
print(f"Post-reboot position (should be near 0): {new_pos}")
```

#### Configuración de Aceleración

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
from myactuator_rmd_py.actuator_state import AccelerationType

# Initialization
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

## Get initial acceleration
print(f"Initial acceleration: {actuator.getAcceleration()}")

actuator.setAcceleration(5000, AccelerationType.POSITION_PLANNING_ACCELERATION)

## Get modified acceleration
print(f"Modified acceleration: {actuator.getAcceleration()}")

# Set different acceleration types
actuator.setAcceleration(1000, AccelerationType.POSITION_PLANNING_ACCELERATION)
actuator.setAcceleration(800, AccelerationType.POSITION_PLANNING_DECELERATION)
actuator.setAcceleration(1200, AccelerationType.VELOCITY_PLANNING_ACCELERATION)
actuator.setAcceleration(1000, AccelerationType.VELOCITY_PLANNING_DECELERATION)
```

<div class="video-container">
<iframe width="960" height="640" src="https://www.youtube.com/embed/0HLx3iQitXg?si=Z39mFeatUdp4j9dh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
