---
description: Aprenda a integrar o ReSpeaker XVF3800 com ROS2 para aplicações robóticas. Este tutorial aborda a simulação de DOA e detecção de fala com o Turtlesim, fornecendo uma compreensão básica de controle de robôs e controle PID.
title: ROS2 no reSpeaker XVF3800
keywords:
  - reSpeaker
  - Robótica
  - ROS2
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /respeaker_xvf3800_ros2
last_update:
  date: 9/26/2025
  author: Kasun Thushara
createdAt: '2025-09-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_ros2/
---

## Introdução

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/ros/RoS2reSpeakerXVF3800.gif" alt="pir" width={800} height="auto" /></p>

Este projeto demonstra a integração do ReSpeaker XVF3800 com ROS2 para aplicações robóticas, com foco na detecção de fala e na estimativa da Direção de Chegada (DOA). Usando o nó Turtlesim, simulamos o controle de um robô baseado em entrada de voz, permitindo movimento preciso por meio de controle PID. O tutorial aborda a configuração do ambiente ROS2, a configuração do ReSpeaker XVF3800 e como aplicar comandos de voz para controlar um robô. Ao final, os usuários entenderão como conectar interfaces de voz à robótica e usar algoritmos de controle básicos para navegação.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Como instalar o ROS 2 no computador host

Para este projeto, usamos o **ROS 2 Humble** como middleware. Se você estiver instalando o ROS 2 pela primeira vez, siga o guia de instalação oficial para obter etapas detalhadas:

[Guia de Instalação do ROS 2 Humble (Ubuntu)](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html)

## Configurar o ReSpeaker USB Mic Array

Se você estiver usando o **ReSpeaker USB Mic Array** para o seu robô ou aplicações de voz, siga estas etapas para configurá-lo no seu sistema Ubuntu.

### Encontrar os IDs de fornecedor e produto do seu dispositivo

Para encontrar os IDs do seu dispositivo, execute:

```bash
lsusb
```

Procure pelo dispositivo ReSpeaker (por exemplo, `vendor 0x2886, product 0x001A`).

### Criar uma regra udev para o dispositivo

Crie uma nova regra udev para garantir as permissões corretas para o ReSpeaker Mic Array:

```bash
sudo nano /etc/udev/rules.d/50-respeaker.rules
```

Adicione as seguintes linhas ao arquivo:

```bash
# ReSpeaker USB Mic Array
SUBSYSTEM=="usb", ATTR{idVendor}=="2886", ATTR{idProduct}=="0018", MODE="0666", GROUP="plugdev"
SUBSYSTEM=="usb", ATTR{idVendor}=="2886", ATTR{idProduct}=="001a", MODE="0666", GROUP="plugdev"
```

### Recarregar as regras udev e reiniciar o serviço

Recarregue as regras udev e reinicie o serviço para que as alterações entrem em vigor:

```bash
sudo udevadm control --reload-rules
sudo udevadm trigger
sudo service udev restart
```

Desconecte e reconecte o seu ReSpeaker USB Mic Array para aplicar as novas regras.

## Configurando o workspace ROS2 e controlando seu robô com ROS2

Este guia conduz você pelo processo de configuração de um workspace ROS2, criação de um pacote ROS2 personalizado, controle de um robô usando Python e configuração do ReSpeaker USB Mic Array para uso em seu projeto ROS2.

### Instalar dependências necessárias

**Instalar a extensão Python Colcon**

Primeiro, certifique-se de que as extensões Python necessárias para compilar pacotes ROS2 estejam instaladas:

```bash
sudo apt install python3-colcon-common-extensions
```

### Configurar auto-completar do Colcon (Opcional)

Se você precisar configurar o auto-completar para o colcon:

```bash
cd /usr/share/colcon_argcomplete/hook/
ls
gedit ~/.bashrc
clear
```

Em seguida, adicione `source ~/.bashrc` para recarregar o ambiente:

```bash
source ~/.bashrc
```

### Criar um workspace ROS2

Crie um novo workspace ROS2 e prepare o ambiente:

```bash
mkdir ros2_ws
cd ros2_ws/
mkdir src
colcon build
```

### Fazer source do workspace ROS2

Após compilar o workspace, faça o source dele para configurar as variáveis de ambiente:

```bash
source ~/ros2_ws/install/setup.bash
```

Você pode adicionar esta linha ao seu `~/.bashrc` para fazer o source do workspace automaticamente sempre que abrir um novo terminal:

```bash
echo "source ~/ros2_ws/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

### Criar um novo pacote ROS2

Agora, vamos criar um novo pacote ROS2 para o seu controlador de robô. Este pacote usará `ament_python` para compilação e `rclpy` como dependência:

```bash
cd ~/ros2_ws/src
ros2 pkg create my_robot_controller --build-type ament_python --dependencies rclpy
```

### Adicionar script Python para controle do robô

Navegue até o seu pacote recém-criado e crie um script Python (por exemplo, `rotate_doa.py`) para controlar o robô:

```bash
cd my_robot_controller/
touch rotate_doa.py
chmod +x rotate_doa.py
```

Edite o script com a lógica de controle desejada (por exemplo, usando um editor como o VS Code):

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

Adicione estas dependências ao package.xml

```bash
  <depend>rclpy</depend>
  <depend>geometry_msgs</depend>
  <depend>turtlesim</depend>
  <depend>std_msgs</depend>
```

Adicione este endpoint ao package.xml

```python

entry_points={
        'console_scripts': [
            'rotate_doa = my_controller.rotate_doa:main',
        ],
    },

```

### Compilar e executar o pacote

Após editar seu script Python, compile o pacote:

```bash
colcon build
source ~/ros2_ws/install/setup.bash
```

Por fim, execute o pacote com:

```bash
ros2 run my_robot_controller rotate_doa
```

Em outro terminal, você também pode executar um nó ROS2 básico (por exemplo, `turtlesim` para testes):

```bash
ros2 run turtlesim turtlesim_node
```

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
