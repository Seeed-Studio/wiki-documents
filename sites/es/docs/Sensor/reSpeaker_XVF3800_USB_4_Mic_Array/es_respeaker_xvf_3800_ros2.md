---
description: Aprende a integrar el ReSpeaker XVF3800 con ROS2 para aplicaciones robóticas. Este tutorial cubre la simulación de DOA y detección de voz con Turtlesim, proporcionando una comprensión básica del control robótico y el control PID.
title: ROS2 en reSpeaker XVF3800
keywords:
- reSpeaker
- Robótica
- ROS2
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /es/respeaker_xvf3800_ros2
last_update:
  date: 9/26/2025
  author: Kasun Thushara
---

## Introducción

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/ros/RoS2reSpeakerXVF3800.gif" alt="pir" width={800} height="auto" /></p>

Este proyecto demuestra la integración del ReSpeaker XVF3800 con ROS2 para aplicaciones robóticas, centrándose en la detección de voz y la estimación de la Dirección de Llegada (DOA). Usando el nodo Turtlesim, simulamos el control robótico basado en la entrada de voz, permitiendo un movimiento preciso mediante control PID. El tutorial cubre la configuración del entorno ROS2, la configuración del ReSpeaker XVF3800 y cómo aplicar comandos de voz para controlar un robot. Al final, los usuarios comprenderán cómo conectar interfaces de voz con robótica y utilizar algoritmos de control básicos para la navegación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Cómo instalar ROS 2 en el ordenador host

Para este proyecto, utilizamos **ROS 2 Humble** como middleware. Si estás instalando ROS 2 por primera vez, sigue la guía de instalación oficial para ver los pasos detallados:

[Guía de instalación de ROS 2 Humble (Ubuntu)](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html)

## Configurar ReSpeaker USB Mic Array

Si estás utilizando el **ReSpeaker USB Mic Array** para tu robot o aplicaciones de voz, sigue estos pasos para configurarlo en tu sistema Ubuntu.

### Encontrar los IDs de proveedor y producto de tu dispositivo

Para encontrar los IDs de tu dispositivo, ejecuta:

```bash
lsusb
```

Busca el dispositivo ReSpeaker (por ejemplo, `vendor 0x2886, product 0x001A`).

### Crear una regla udev para el dispositivo

Crea una nueva regla udev para garantizar los permisos adecuados para el ReSpeaker Mic Array:

```bash
sudo nano /etc/udev/rules.d/50-respeaker.rules
```

Añade las siguientes líneas al archivo:

```bash
# ReSpeaker USB Mic Array
SUBSYSTEM=="usb", ATTR{idVendor}=="2886", ATTR{idProduct}=="0018", MODE="0666", GROUP="plugdev"
SUBSYSTEM=="usb", ATTR{idVendor}=="2886", ATTR{idProduct}=="001a", MODE="0666", GROUP="plugdev"
```

### Recargar las reglas udev y reiniciar el servicio

Recarga las reglas udev y reinicia el servicio para que los cambios surtan efecto:

```bash
sudo udevadm control --reload-rules
sudo udevadm trigger
sudo service udev restart
```

Desconecta y vuelve a conectar tu ReSpeaker USB Mic Array para aplicar las nuevas reglas.

## Configuración del espacio de trabajo ROS2 y control de tu robot con ROS2

Esta guía te acompaña en el proceso de configurar un espacio de trabajo ROS2, crear un paquete ROS2 personalizado, controlar un robot usando Python y configurar el ReSpeaker USB Mic Array para usarlo en tu proyecto ROS2.

### Instalar las dependencias necesarias

**Instalar la extensión Colcon para Python**

Primero, asegúrate de que las extensiones de Python necesarias para compilar paquetes ROS2 estén instaladas:

```bash
sudo apt install python3-colcon-common-extensions
```

### Configurar la autocompletación de Colcon (opcional)

Si necesitas configurar la autocompletación para colcon:

```bash
cd /usr/share/colcon_argcomplete/hook/
ls
gedit ~/.bashrc
clear
```

Luego, añade `source ~/.bashrc` para recargar el entorno:

```bash
source ~/.bashrc
```

### Crear un espacio de trabajo ROS2

Crea un nuevo espacio de trabajo ROS2 y prepara el entorno:

```bash
mkdir ros2_ws
cd ros2_ws/
mkdir src
colcon build
```

### Cargar el espacio de trabajo ROS2

Después de compilar el espacio de trabajo, cárgalo para configurar las variables de entorno:

```bash
source ~/ros2_ws/install/setup.bash
```

Puedes añadir esta línea a tu `~/.bashrc` para cargar el espacio de trabajo automáticamente cada vez que abras una nueva terminal:

```bash
echo "source ~/ros2_ws/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

### Crear un nuevo paquete ROS2

Ahora, vamos a crear un nuevo paquete ROS2 para tu controlador de robot. Este paquete utilizará `ament_python` para la compilación y `rclpy` como dependencia:

```bash
cd ~/ros2_ws/src
ros2 pkg create my_robot_controller --build-type ament_python --dependencies rclpy
```

### Añadir un script de Python para el control del robot

Navega dentro de tu paquete recién creado y crea un script de Python (por ejemplo, `rotate_doa.py`) para controlar el robot:

```bash
cd my_robot_controller/
touch rotate_doa.py
chmod +x rotate_doa.py
```

Edita el script con la lógica de control que desees (por ejemplo, usando un editor como VS Code):

```bash
cd ..
code .
```

<details>
<summary>rotate_doa.py</summary>

```python
import sys
import struct
import usb.core
import usb.util
import time
import rclpy
from rclpy.node import Node
from geometry_msgs.msg import Twist
from turtlesim.msg import Pose
from std_msgs.msg import Float32
import math

# name, resid, cmdid, length, type
PARAMETERS = {
    "VERSION": (48, 0, 4, "ro", "uint8"),
    "AEC_AZIMUTH_VALUES": (33, 75, 16 + 1, "ro", "radians"),
    "DOA_VALUE": (20, 18, 4 + 1, "ro", "uint16"),
}

class ReSpeaker:
    TIMEOUT = 100000

    def __init__(self, dev):
        self.dev = dev

    def write(self, name, value):
        pass

    def read(self, name):
        try:
            data = PARAMETERS[name]
        except KeyError:
            return

        resid = data[0]
        cmdid = 0x80 | data[1]
        length = data[2]

        response = self.dev.ctrl_transfer(
            usb.util.CTRL_IN | usb.util.CTRL_TYPE_VENDOR | usb.util.CTRL_RECIPIENT_DEVICE,
            0, cmdid, resid, length, self.TIMEOUT)

        if data[4] == 'uint8':
            result = response.tolist()
        elif data[4] == 'radians':
            byte_data = response.tobytes()
            float1, float2, float3, float4 = struct.unpack('<ffff', byte_data[1:17])
            result = [float1 * 180 / 3.1415926,
                      float2 * 180 / 3.1415926,
                      float3 * 180 / 3.1415926,
                      float4 * 180 / 3.1415926]
        elif data[4] == 'uint16':
            result = response.tolist()

        return result

    def close(self):
        """
        close the interface
        """
        usb.util.dispose_resources(self.dev)


def find(vid=0x2886, pid=0x001A):
    dev = usb.core.find(idVendor=vid, idProduct=pid)
    if not dev:
        return None
    return ReSpeaker(dev)


class AngleController(Node):
    def __init__(self):
        super().__init__('angle_controller')
        self.target_angle = 0.0
        self.pose_sub = self.create_subscription(Pose, '/turtle1/pose', self.pose_callback, 10)
        self.cmd_pub = self.create_publisher(Twist, '/turtle1/cmd_vel', 10)

        # PID params
        self.kp = 1.5
        self.ki = 0.0
        self.kd = 0.2

        self.integral = 0.0
        self.prev_error = 0.0
        self.prev_time = self.get_clock().now()

    def publish_angle(self, angle_deg: float):
        self.target_angle = math.radians(angle_deg)  # Convert to radians
        self.get_logger().info(f"New target angle: {angle_deg:.2f}°")

    def pose_callback(self, msg: Pose):
        current_yaw = msg.theta
        error = self.normalize_angle(self.target_angle - current_yaw)

        now = self.get_clock().now()
        dt = (now - self.prev_time).nanoseconds / 1e9
        self.prev_time = now

        self.integral += error * dt
        derivative = (error - self.prev_error) / dt if dt > 0 else 0.0

        control = self.kp * error + self.ki * self.integral + self.kd * derivative

        twist = Twist()
        twist.angular.z = control
        self.cmd_pub.publish(twist)

        self.prev_error = error

    @staticmethod
    def normalize_angle(angle):
        while angle > math.pi:
            angle -= 2.0 * math.pi
        while angle < -math.pi:
            angle += 2.0 * math.pi
        return angle


def main(args=None):
    rclpy.init(args=args)
    node = AngleController()

    # Setup ReSpeaker device
    dev = find()
    if not dev:
        node.get_logger().error("No ReSpeaker device found")
        return

    # Function to handle publishing DOA angle when speech is detected
    def publish_doa_angle():
        result = dev.read("DOA_VALUE")
        if result:
            speech_detected = result[3]
            doa_angle = result[1]
            if speech_detected:  # If speech is detected
                node.publish_angle(doa_angle)
                node.get_logger().info(f"Speech detected, DOA angle: {doa_angle}°")

    # Timer to check for DOA updates every 1 second
    timer = node.create_timer(1.0, publish_doa_angle)

    rclpy.spin(node)
    node.destroy_node()
    rclpy.shutdown()
    dev.close()


if __name__ == '__main__':
    main()

```

</details>

Añade estas dependencias a package.xml

```bash
  <depend>rclpy</depend>
  <depend>geometry_msgs</depend>
  <depend>turtlesim</depend>
  <depend>std_msgs</depend>
```

Añade este endpoint a package.xml

```python

entry_points={
        'console_scripts': [
            'rotate_doa = my_controller.rotate_doa:main',
        ],
    },

```

### Compilar y ejecutar el paquete

Después de editar tu script de Python, compila el paquete:

```bash
colcon build
source ~/ros2_ws/install/setup.bash
```

Finalmente, ejecuta el paquete con:

```bash
ros2 run my_robot_controller rotate_doa
```

En otra terminal, también puedes ejecutar un nodo ROS2 básico (por ejemplo, `turtlesim` para pruebas):

```bash
ros2 run turtlesim turtlesim_node
```

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
