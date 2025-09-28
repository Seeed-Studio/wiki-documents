---
description: 学习如何将 ReSpeaker XVF3800 与 ROS2 集成用于机器人应用。本教程涵盖使用 Turtlesim 模拟 DOA 和语音检测，提供机器人控制和 PID 控制的基础理解。
title: ReSpeaker XVF3800 上的 ROS2
keywords:
- reSpeaker
- Robotics
- ROS2
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /cn/respeaker_xvf3800_ros2
last_update:
  date: 9/26/2025
  author: Kasun Thushara
---

## 介绍

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/ros/RoS2reSpeakerXVF3800.gif" alt="pir" width={800} height="auto" /></p>

本项目演示了 ReSpeaker XVF3800 与 ROS2 在机器人应用中的集成，重点关注语音检测和到达方向（DOA）估计。使用 Turtlesim 节点，我们基于语音输入模拟机器人控制，通过 PID 控制实现精确移动。本教程涵盖 ROS2 环境的设置、ReSpeaker XVF3800 的配置，以及如何应用语音命令来控制机器人。最终，用户将了解如何将语音接口与机器人技术连接，并使用基本控制算法进行导航。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 如何在主机上安装 ROS 2

对于本项目，我们使用 **ROS 2 Humble** 作为中间件。如果您是第一次安装 ROS 2，请按照官方安装指南的详细步骤进行：

[ROS 2 Humble 安装指南（Ubuntu）](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html)

## 设置 ReSpeaker USB 麦克风阵列

如果您在机器人或语音应用中使用 **ReSpeaker USB 麦克风阵列**，请按照以下步骤在 Ubuntu 系统上配置它。

### 查找设备的供应商和产品 ID

要查找设备的 ID，请运行：

```bash
lsusb
```

查找 ReSpeaker 设备（例如，`vendor 0x2886, product 0x001A`）。

### 为设备创建 udev 规则

创建新的 udev 规则以确保 ReSpeaker 麦克风阵列的正确权限：

```bash
sudo nano /etc/udev/rules.d/50-respeaker.rules
```

将以下行添加到文件中：

```bash
# ReSpeaker USB Mic Array
SUBSYSTEM=="usb", ATTR{idVendor}=="2886", ATTR{idProduct}=="0018", MODE="0666", GROUP="plugdev"
SUBSYSTEM=="usb", ATTR{idVendor}=="2886", ATTR{idProduct}=="001a", MODE="0666", GROUP="plugdev"
```

### 重新加载 udev 规则并重启服务

重新加载 udev 规则并重启服务以使更改生效：

```bash
sudo udevadm control --reload-rules
sudo udevadm trigger
sudo service udev restart
```

拔出并重新插入您的 ReSpeaker USB 麦克风阵列以应用新规则。

## 设置 ROS2 工作空间并使用 ROS2 控制机器人

本指南将引导您完成设置 ROS2 工作空间、创建自定义 ROS2 包、使用 Python 控制机器人以及配置 ReSpeaker USB 麦克风阵列在 ROS2 项目中使用的过程。

### 安装所需依赖项

**安装 Python Colcon 扩展**

首先，确保安装了构建 ROS2 包所需的 Python 扩展：

```bash
sudo apt install python3-colcon-common-extensions
```

### 配置 Colcon 自动补全（可选）

如果您需要为 colcon 设置自动补全：

```bash
cd /usr/share/colcon_argcomplete/hook/
ls
gedit ~/.bashrc
clear
```

然后，添加 `source ~/.bashrc` 来重新加载环境：

```bash
source ~/.bashrc
```

### 创建 ROS2 工作空间

创建新的 ROS2 工作空间并准备环境：

```bash
mkdir ros2_ws
cd ros2_ws/
mkdir src
colcon build
```

### 源化 ROS2 工作空间

构建工作空间后，源化它以设置环境变量：

```bash
source ~/ros2_ws/install/setup.bash
```

您可以将此行添加到 `~/.bashrc` 中，以便每次打开新终端时自动源化工作空间：

```bash
echo "source ~/ros2_ws/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

### 创建新的 ROS2 包

现在，让我们为您的机器人控制器创建一个新的 ROS2 包。此包将使用 `ament_python` 进行构建，并将 `rclpy` 作为依赖项：

```bash
cd ~/ros2_ws/src
ros2 pkg create my_robot_controller --build-type ament_python --dependencies rclpy
```

### 添加机器人控制的 Python 脚本

导航到您新创建的包中，并创建一个 Python 脚本（例如，`rotate_doa.py`）来控制机器人：

```bash
cd my_robot_controller/
touch rotate_doa.py
chmod +x rotate_doa.py
```

使用您所需的控制逻辑编辑脚本（例如，使用 VS Code 等编辑器）：

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

将这些依赖项添加到 package.xml

```bash
  <depend>rclpy</depend>
  <depend>geometry_msgs</depend>
  <depend>turtlesim</depend>
  <depend>std_msgs</depend>
```

将此端点添加到 package.xml

```python

entry_points={
        'console_scripts': [
            'rotate_doa = my_controller.rotate_doa:main',
        ],
    },

```

### 构建并运行包

编辑 Python 脚本后，构建包：

```bash
colcon build
source ~/ros2_ws/install/setup.bash
```

最后，运行包：

```bash
ros2 run my_robot_controller rotate_doa
```

在另一个终端中，您还可以运行基本的 ROS2 节点（例如，用于测试的 `turtlesim`）：

```bash
ros2 run turtlesim turtlesim_node
```

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a><a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
