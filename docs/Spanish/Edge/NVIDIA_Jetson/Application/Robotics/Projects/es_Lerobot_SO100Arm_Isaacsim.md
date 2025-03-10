---
description: Esta wiki proporciona instrucciones sobre cómo importar el brazo robótico SO100 Arm Kit a la plataforma de simulación Isaac Sim de NVIDIA y controlarlo mediante scripts ROS2 y Python.
title: Cómo importar y controlar el kit SO100Arm en Isaac Sim
keywords:
- Lerobot
- Huggingface
- Brazo robótico
- Robótica
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Isaac_sim_import_success.webp
slug: /es/lerobot_so100m_isaacsim
last_update:
  date: 01/16/2025
  author: ZhuYaoHui
---

# Cómo importar y controlar el kit SO100Arm en Isaac Sim

## Introducción

El [SO-100ARM](https://github.com/TheRobotStudio/SO-ARM100) es un proyecto de brazo robótico totalmente de código abierto lanzado por [TheRobotStudio](https://www.therobotstudio.com/). Incluye el brazo seguidor y el brazo robótico líder, y también proporciona archivos de impresión 3D detallados y guías de operación. [LeRobot](https://github.com/huggingface/lerobot/tree/main) se compromete a proporcionar modelos, conjuntos de datos y herramientas para la robótica del mundo real en PyTorch. Su objetivo es reducir la barrera de entrada de la robótica, permitiendo que todos contribuyan y se beneficien al compartir conjuntos de datos y modelos pre entrenados.

Esta wiki proporciona instrucciones sobre cómo importar el brazo robótico SO100 Arm Kit a la plataforma de simulación Isaac Sim de NVIDIA y controlarlo mediante scripts ROS2 y Python.

<iframe width="900" height="600" src="https://www.youtube.com/embed/buiqdmNQKwY?si=CvovjaHNQy2nZsR2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Introducción a los proyectos

El SO-ARM100 y el kit de robot inteligente reComputer Jetson AI combinan a la perfección el control del brazo robótico de alta precisión con una potente plataforma informática de IA, proporcionando una solución integral de desarrollo de robots. Este kit se basa en la plataforma Jetson Orin o AGX Orin, combinada con el brazo robótico SO-ARM100 y el marco de IA de LeRobot, ofreciendo a los usuarios un sistema de robot inteligente aplicable a múltiples escenarios como educación, investigación y automatización industrial.
Esta wiki proporciona el tutorial de ensamblaje y depuración para SO ARM100 y realiza la recopilación de datos y la capacitación dentro del marco de Lerobot.

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" />
  </div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Conseguir uno 🖱️</font></span></strong>
</a></div>

## Especificaciones

|Especificaciones| Arm Kit | Arm Kit Pro |
|--|--|--|
| Tipo | Arm Kit | Arm Kit Pro |
| Grados de libertad | 6 | 6 |
| Torque máximo | 19.5kg.cm 7.4V | 30kg.cm 12V |
| Servo | STS3215 Bus Servo | STS3215 Bus Servo |
| Fuente de alimentación | 5.5mm*2.1mm DC 5V4A | 5.5mm*2.1mm DC 12V1A |
| Encoder | 12-bit encoder magnético | 12-bit encoder magnético |
| Rango de temperatura recomendada | 0℃～40℃ | 0℃～40℃ |
| Comunicación | UART | UART |
| Plataforma de control | PC | PC |

## Lista de materiales

| Parte | Cantidad | Incluido|
|--|--|--|
| STS3215 Servo1 | 12 | ✅ |
| Placa de control Motor | 2 | ✅ |
| Cable USB-2 | 1 | ✅ |
| Fuente de alimentación | 2 | ✅ |
| Abrazadera de mesa | 1 | ❌ |
| Partes impresas del brazo | 1 | ❌ |

:::Precaución
Las piezas impresas en 3D y las abrazaderas de mesa no están incluidas en el producto. Sin embargo, el SO-100ARM proporciona [archivos STL de impresión 3D](https://github.com/TheRobotStudio/SO-ARM100/tree/main/stl_files_for_3dprinting) detallados y parámetros de impresión. Además, también ofrecemos las [piezas impresas en 3D de la abrazadera de mesa](https://makerworld.com/zh/models/908660).
:::

## Prerequisitos

  1. [Familiarízate con nuestro tutorial de uso básico de Lerobot SO100Arm](/lerobot_so100m).
  2. [Instala Isaac Sim según el tutorial.](https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_workstation.html)
  3. [Completa la instalación y configuración de ROS2 según el tutorial](https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_ros.html)

## Instalar el entorno Lerobot

  **Paso 1. Clonar el proyecto Lerobot**

  ```bash
    cd ~/
    git clone https://github.com/ZhuYaoHui1998/lerobot.git
    cd lerobot
  ```

  Asegúrate de haber instalado el [Entorno Lerobot según el tutorial.](/lerobot_so100m)
  
## Importar el URDF a Isaac Sim

  **Paso 1. Abrir Isaac Sim**

  **Asegúrate de que Isaac Sim se haya instalado de acuerdo con el [tutorial oficial] de NVIDIA (https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_workstation.html), [se haya instalado ROS2 y se haya completado la configuración básica del entorno] (https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_ros.html). Abre la interfaz de Isaac Sim con los parámetros que se muestran en la siguiente figura.**
  <div align="center">
      <img width={600}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/open_isaac_sim.png" />
  </div>

  **Paso 2. Uso del importador URDF**

  **Abre Isaac Utils → Workflows → URDF Importer en la barra de herramientas de Isaac Sim**

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/isaacsim_tooltab.png" />
  </div>

  **Paso 3. Importar URDF**

  **Manten los parámetros predeterminados, busca el archivo en Entrada e importa el URDF desde el repositorio clonado de Lerobot en `/lerobot/SO-ARM100/URDF/SO_5DOF_ARM100_8j_URDF.SLDASM/urdf/SO_5DOF_ARM100_8j_URDF.SLDASM.urdf`**

  <div align="center">
      <img width={600}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/urdf_importer.png" />
  </div>

  <div align="center">
      <img width={600}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/urdf_file.png" />
  </div>

  **Ahora puedes ver que nuestro brazo robótico SO100 ha sido importado a Isaac Sim.**

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Isaac_sim_import_success.png" />
  </div>

  **Paso 4. Añade elementos de Física**

  **En la barra de herramientas de Isaac Sim, navega hasta Crear → Física y agrega `Escena física` y `Plano terrestre` para configurar el entorno físico y el terreno.**

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/import_physics.png" />
  </div>

 **Paso 5. Eliminar la `Raíz de articulación` de `root_joint`**

  **En el panel Escenario de la derecha, busca `root_joint`. Haz click en él, luego en Propiedades a continuación, busca "Articulation root" en Física y haz click en × a la derecha para eliminar esta raíz.**
  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/delete_root.png" />
  </div>

 **Paso 6. Agrega la `Articulation Root` de `root_joint`**

  **En el panel Escenario, haz click en SO100, haz click derecho y luego Add → Physics → Articulation Root.**
  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/add_root.png" />
  </div>

## Agregar gráfico de acción

  **Paso 1. En la barra de herramientas, navega hasta Create → Visual Scripting y agrega Action Graph.**

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/add_graph.png" />
  </div>

  **Paso 2. Agregar componentes de acción.**

  **En el cuadro de búsqueda, agrega en orden: On Playback Tick, Isaac Read Simulation Time, ROS2 Publish Joint State, Articulation Controller, ROS2 Subscribe Joint State.**
  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/add_graph_action.png" />
  </div>

**Para una comprensión más clara de esta parte, realiza conexiones de acciones y configuraciones de parámetros básicos de acuerdo con el contenido del video.**

<iframe width="900" height="600" src="https://www.youtube.com/embed/buiqdmNQKwY?si=sHjysqfqxPVz-r3T&amp;start=92" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

  **Paso 3. Ejecuta**

  **Haz click en el botón Reproducir a la derecha para iniciar la acción normalmente. En este punto, usa el comando `ros2 topic list` para ver la información del tema.**
  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/ros2topic.png" />
  </div>

## **Control mediante Python ROS2 del movimiento del brazo robótico**

**Ahora puedes ejecutar los siguientes scripts de Python en el entorno ROS2 para controlar el brazo robótico. Los archivos de script se encuentran en `lerobot/lerobot/scripts/` como `control_motor.py` y `lerobot_publisher.py`.**

**`control_motor.py` te permite enviar el ángulo de un servo específico individualmente, con valores de ángulo que oscilan entre -π y π.**

<details>
<summary>control_motor.py</summary>

  ```python
  import threading

  import rclpy
  from sensor_msgs.msg import JointState

  rclpy.init()
  node = rclpy.create_node('position_velocity_publisher')
  pub = node.create_publisher(JointState, 'joint_command', 10)

  thread = threading.Thread(target=rclpy.spin, args=(node, ), daemon=True)
  thread.start()

  joint_state_position = JointState()

  joint_state_position.name = ["Rotation", "Pitch","Elbow","Wrist_Pitch","Wrist_Roll","Jaw"]

  joint_state_position.position = [0.2,0.2,float('nan'),0.2,0.2,0.2]
  #joint_state_position.position = [0.0,0.0,0.0,0.0,0.0,0.0]

  rate = node.create_rate(10)
  try:
      while rclpy.ok():
          pub.publish(joint_state_position)

          rate.sleep()
  except KeyboardInterrupt:
      pass
  rclpy.shutdown()
  thread.join()
  ```

  </details>

**`lerobot_publisher.py` implementa el envío continuo de comandos de acción a los servos.**

<details>
<summary>lerobot_publisher.py</summary>

  ```python
import rclpy
from rclpy.node import Node
from sensor_msgs.msg import JointState
import numpy as np
import time


class TestROS2Bridge(Node):
    def __init__(self):

        super().__init__("test_ros2bridge")

        # Create the publisher. This publisher will publish a JointState message to the /joint_command topic.
        self.publisher_ = self.create_publisher(JointState, "joint_command", 10)

        # Create a JointState message
        self.joint_state = JointState()

        self.joint_state.name = [
            "Rotation",
            "Pitch",
            "Elbow",
            "Wrist_Pitch",
            "Wrist_Roll",
            "Jaw"
        ]


        num_joints = len(self.joint_state.name)

        # make sure kit's editor is playing for receiving messages
        self.joint_state.position = np.array([0.0] * num_joints, dtype=np.float64).tolist()
        self.default_joints = [0, 0, 0, 0, 0, 0]

        # limiting the movements to a smaller range (this is not the range of the robot, just the range of the movement
        self.max_joints = np.array(self.default_joints) + 0.3
        self.min_joints = np.array(self.default_joints) - 0.3

        # position control the robot to wiggle around each joint
        self.time_start = time.time()

        timer_period = 0.05  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)

    def timer_callback(self):
        self.joint_state.header.stamp = self.get_clock().now().to_msg()

        joint_position = (
            np.sin(time.time() - self.time_start) * (self.max_joints - self.min_joints) * 0.5 + self.default_joints
        )
        self.joint_state.position = joint_position.tolist()

        # Publish the message to the topic
        self.publisher_.publish(self.joint_state)


def main(args=None):
    rclpy.init(args=args)

    ros2_publisher = TestROS2Bridge()

    rclpy.spin(ros2_publisher)

    # Destroy the node explicitly
    ros2_publisher.destroy_node()
    rclpy.shutdown()


if __name__ == "__main__":
    main()
  ```

  </details>

<iframe width="900" height="600" src="https://www.youtube.com/embed/buiqdmNQKwY?si=3CizpKK3Nhj4Vlp9&amp;start=232" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Referencias

TheRobotStudio Project: [SO-ARM100](https://github.com/TheRobotStudio/SO-ARM100)

Huggingface Project: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty: [Jetson Containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

[Jetson AI Lab](https://www.jetson-ai-lab.com/lerobot.html)

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

[ACT or ALOHA](https://tonyzhaozh.github.io/aloha/)

[TDMPC](https://www.nicklashansen.com/td-mpc/)

[VQ-BeT](https://sjlee.cc/vq-bet/)

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
