---
description: Este wiki proporciona un tutorial para el Sensor IMU HEXFELLOW Y200.
title: Sensor IMU HEXFELLOW Y200
keywords:
- IMU
- robotics
image: https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig1.webp
slug: /es/hexfellow_y200
last_update:
  date: 06/18/2025
  author: ZhuYaoHui
---

# Introducción al Sensor IMU HEXFELLOW Y200

El Y200 es un giroscopio de 9 ejes desarrollado específicamente para robots. El dispositivo soporta una fuente de alimentación máxima de 60V y utiliza una interfaz CAN XT30 estándar para una integración rápida en una red de robots. Cuenta con un proceso de encapsulado interno para una excelente resistencia a los golpes, y su carcasa está diseñada con una estructura reforzada para una instalación estable y confiable.

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig1.jpg" />
</div>

## Especificaciones

Aquí está la tabla completa con todos los parámetros completados para todos los modelos de motor:

### Parámetros de Salida de Ángulo

| Ángulo  |   | Valor                     | Nota     |
|----------------|-------|--------------------------|----------|
| **Roll**            | Precisión:  | 0.15°          | 1σ RMS   |
|                     | Rango:  | ±180°             |          |
| **Pitch**           | Precisión:  | 0.15°          | 1σ RMS   |
|                     | Rango:  | ±90°              |          |
| **Yaw (Sin referencia)** | Precisión:  | 0.2°        | 1σ RMS   |
|                     | Rango:  | ±180°             |          |
| **Resolución**      |   | 0.001°                   |          |

### Parámetros del Giroscopio

| Parámetro           | Valor             | Nota                     |
|---------------------|-------------------|--------------------------|
| **Rango**           | ±2000°/s         |                          |
| **No linealidad**   | ±0.05%FS         |                          |
| **Densidad de ruido**   | 0.015°/s/√Hz     |                          |
| **Inestabilidad de sesgo**| 5°/h             | Varianza de Allan, 1σ       |
| **Ancho de banda (-3dB)**| 50Hz             |                          |
| **Desplazamiento cero**     | ±0.5°/s          | 1σ RMS                   |
| **Deriva de temperatura**| ±1°/s           | 1σ RMS, -40~85°C         |

### Parámetros del Acelerómetro

| Parámetro            | Valor           | Nota                      |
|----------------------|-----------------|---------------------------|
| **Rango**            | ±12g           |                           |
| **No linealidad**    | ±0.5%FS        |                           |
| **Densidad de ruido**    | 190μg/√Hz      |                           |
| **Inestabilidad de sesgo** | 0.05mg         | Varianza de Allan, 1σ        |
| **Ancho de banda (-3dB)** | 50Hz           |                           |
| **Desplazamiento cero**      | ±20mg          | 1σ RMS                    |
| **Deriva de temperatura**| ±20mg          | 1σ RMS, -40~85°C          |

### Otros Parámetros

| Parámetro              | Valor             | Nota                                  |
|------------------------|-------------------|---------------------------------------|
| **Tolerancia de Voltaje**  | 12-60V            | Para conector XT30 2+2. No USB-C, pero la alimentación USB-C es compatible |
| **Comunicación**      | CAN               |                                       |
| **Frecuencia Máxima de Salida** | 200Hz           |                                       |
| **Dimensiones**         | 60×60×15 mm       |                                       |
| **Temperatura de Operación** | -20~85°C       |                                       |

### **Plataforma Soportada**

- [x] **reComputer Mini**
- [x] **reComputer Robotics**

### **Versión de ROS Soportada**

- [x] **ROS Noetic**
- [x] **ROS Humble**

### Diagrama de dimensiones de instalación

<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig3.png"/>
</div>

## Introducción con IMU en reComputer Jetson

Proporcionamos un controlador de Linux usando SocketCAN. Es la forma recomendada de trabajar con IMU.
Antes de comenzar, necesitas conectar el dispositivo a tu PC. Aquí está el cable del bus CAN y la definición de la velocidad de baudios del IMU

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig5.jpg"/>  
</div>

Tanto nuestro ​reComputer Mini​ como ​reComputer Robotics J40​ (mostrados arriba) cuentan con una interfaz de comunicación CAN ​XT30 2+2​, que soporta ​alimentación simultánea y comunicación para IMUs.

:::tip

Las asignaciones de pines ​CAN_H​ y ​CAN_L​ en nuestros dispositivos están ​invertidas​ en comparación con la mayoría de motores y sensores disponibles comercialmente. Por lo tanto, al cablear, debes ​intercambiar las conexiones H y L​ para asegurar una comunicación adecuada. Para tutoriales de uso de CAN en más dispositivos, consulta el [enlace](https://wiki.seeedstudio.com/es/recomputer_jetson_mini_hardware_interfaces_usage/#can).

:::

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig4.jpg"/>  
</div>

### Conectando Cables XT30 2+2

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig2.jpg"/>  
</div>

:::tip

Las asignaciones de pines ​CAN_H​ y ​CAN_L​ en nuestros dispositivos están ​invertidas​ en comparación con la mayoría de motores y sensores disponibles comercialmente. Por lo tanto, al cablear, debes ​intercambiar las conexiones H y L​ para asegurar una comunicación adecuada. Para tutoriales de uso de CAN en más dispositivos, consulta el [enlace](https://wiki.seeedstudio.com/es/recomputer_jetson_mini_hardware_interfaces_usage/#can).
:::

### Instalar ROS en Jetson

Por favor consulta el tutorial sobre [Instalar ROS2 Humble](/es/install_ros2_humble) o [Instalar ROS1](/es/installing_ros1) en reComputer Jetson

### Habilitar Función CAN

**Para reComputer Robotics J401:**

```bash
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 500000
sudo ip link set can0 up
gpioset --mode=time --sec=60 2 3=0 & # For CAN1: gpioset --mode=time --sec=60 2 4=0 &
```

**Para reComputer Mini:**

```bash
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 500000
sudo ip link set can0 up
gpioset --mode=time --sec=30 0 43=0 # For CAN1: gpioset --mode=time --sec=30 0 106=0 &
```

### Instalar las dependencias

Clonar el repositorio:

```bash
cd ~/
pip3 install numpy==1.24
git clone https://github.com/hexfellow/hex_utils.git
```

Construir el paquete:

```bash
cd hex_utils
sudo apt-get install python3-venv
python3 -m build
```

Instalar el paquete:

```bash
pip3 install dist/hex_utils-0.0.1-py3-none-any.whl
```

### Crear un espacio de trabajo `catkin_ws` y entrar al `src`

```shell
mkdir -p catkin_ws/src
cd catkin_ws/src
```

### Clonar este repositorio

```shell
git clone git@github.com:hexfellow/hex_imu.git
```

### Ir al directorio `catkin_ws` y construir el repositorio

- **ROS1**

```shell
cd ../
catkin_make
```

- **ROS2**

```shell
cd ../
colcon build
```

### Cargar el `setup.bash` y ejecutar la prueba a continuación

- **ROS 1**

```shell
source devel/setup.bash --extend
```

- **ROS 2**

```shell
source install/setup.bash --extend
```

### **Uso**

1. Lanzar el nodo principal:

- **ROS 1**

```shell
roslaunch hex_imu canopen_imu.launch
```

- **ROS 2**

```shell
ros2 launch hex_imu canopen_imu.launch.py
```

2. También ofrecemos un archivo de lanzamiento dedicado para visualizar datos IMU. Sigue los pasos a continuación para comenzar:

 Antes de comenzar, asegúrate de tener el plugin necesario instalado para RViz:

- **ROS 1**

```
sudo apt install ros-noetic-rviz-imu-plugin
```

- **ROS 2**

```
sudo apt install ros-humble-rviz-imu-plugin
```

	Una vez que el plugin esté instalado, puedes iniciar la herramienta de visualización con el siguiente comando:

- **ROS 1**

```shell
roslaunch hex_imu canopen_imu_display.launch
```

- **ROS 2**

```shell
ros2 launch hex_imu canopen_imu_display.launch.py
```

3. Si quieres obtener el Azimut, puedes ejecutar el siguiente código de ejemplo (solo soporta ROS1)

```shell
roslaunch hex_imu canopen_imu.launch

rosrun hex_imu example.py
```

## **APIs Públicas**

### **Publicar**

| Tópico              | Tipo de Msg                  | Descripción                                |
| ------------------ | ------------------------- | ------------------------------------------ |
| `/imu_data`        | `sensor_msgs/Imu`         | Datos IMU incluyendo orientación, velocidad angular y aceleración lineal |
| `/magnetic_data`   | `sensor_msgs/MagneticField` | Datos del campo magnético |

### **Suscribir**

| Tópico    | Tipo de Msg                      | Descripción                           |
| -------- | ----------------------------- | ------------------------------------- |
| Ninguno     | Ninguno                          | No se requiere suscripción              |

### **Parámetros**

| Nombre                    | Tipo de Dato             | Descripción                                                                                |
| ----------------------- | --------------------- | ------------------------------------------------------------------------------------------ |
| `node_id`              | `int`                 | ID de nodo CANopen del dispositivo IMU                                                          |
| `channel`              | `string`              | Nombre del canal CAN (ej., 'can0')                                                            |
| `imu_topic`            | `string`              | Nombre del tópico para publicar datos IMU                                                         |
| `magnetic_topic`       | `string`              | Nombre del tópico para publicar datos del campo magnético                                              |

---

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
