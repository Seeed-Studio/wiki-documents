---
description: Learn to integrate the ReSpeaker XVF3800 with ROS2 for robotic applications. This tutorial covers simulating DOA and speech detection with Turtlesim, providing a basic understanding of robotic control and PID control.
title: ROS2 on ReSpeaker XVF3800
keywords:
- reSpeaker
- Robotics
- ROS2
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /respeaker_xvf3800_ros2
last_update:
  date: 9/26/2025
  author: Kasun Thushara
---

## Introduction

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/ros/RoS2reSpeakerXVF3800.gif" alt="pir" width={800} height="auto" /></p>

This project demonstrates the integration of the ReSpeaker XVF3800 with ROS2 for robotic applications, focusing on speech detection and Direction of Arrival (DOA) estimation. Using the Turtlesim node, we simulate robotic control based on speech input, enabling precise movement through PID control. The tutorial covers the setup of the ROS2 environment, configuration of the ReSpeaker XVF3800, and how to apply speech commands for controlling a robot. By the end, users will understand how to connect voice interfaces with robotics and use basic control algorithms for navigation.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## How to Install ROS 2 on the Host Computer

For this project, we use **ROS 2 Humble** as the middleware. If you are installing ROS 2 for the first time, please follow the official installation guide for detailed steps:

[ROS 2 Humble Installation Guide (Ubuntu)](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html)

## Set Up ReSpeaker USB Mic Array

If you're using the **ReSpeaker USB Mic Array** for your robot or voice applications, follow these steps to configure it on your Ubuntu system.

### Find Your Device's Vendor and Product IDs

To find your device's IDs, run:

```bash
lsusb
```

Look for the ReSpeaker device (e.g., `vendor 0x2886, product 0x001A`).

### Create a udev Rule for the Device

Create a new udev rule to ensure proper permissions for the ReSpeaker Mic Array:

```bash
sudo nano /etc/udev/rules.d/50-respeaker.rules
```

Add the following lines to the file:

```bash
# ReSpeaker USB Mic Array
SUBSYSTEM=="usb", ATTR{idVendor}=="2886", ATTR{idProduct}=="0018", MODE="0666", GROUP="plugdev"
SUBSYSTEM=="usb", ATTR{idVendor}=="2886", ATTR{idProduct}=="001a", MODE="0666", GROUP="plugdev"
```

### Reload udev Rules and Restart the Service

Reload the udev rules and restart the service for changes to take effect:

```bash
sudo udevadm control --reload-rules
sudo udevadm trigger
sudo service udev restart
```

Unplug and replug your ReSpeaker USB Mic Array to apply the new rules.

## Setting Up ROS2 Workspace and Controlling Your Robot with ROS2

This guide walks you through the process of setting up a ROS2 workspace, creating a custom ROS2 package, controlling a robot using Python, and configuring the ReSpeaker USB Mic Array for use in your ROS2 project.

### Install Required Dependencies

**Install Python Colcon Extension**

First, ensure that the necessary Python extensions for building ROS2 packages are installed:

```bash
sudo apt install python3-colcon-common-extensions
```

### Configure Colcon Auto-completion (Optional)

If you need to set up auto-completion for colcon:

```bash
cd /usr/share/colcon_argcomplete/hook/
ls
gedit ~/.bashrc
clear
```

Then, add `source ~/.bashrc` to reload the environment:

```bash
source ~/.bashrc
```

### Create a ROS2 Workspace

Create a new ROS2 workspace and prepare the environment:

```bash
mkdir ros2_ws
cd ros2_ws/
mkdir src
colcon build
```

### Source the ROS2 Workspace

After building the workspace, source it to set up the environment variables:

```bash
source ~/ros2_ws/install/setup.bash
```

You can add this line to your `~/.bashrc` to source the workspace automatically every time you open a new terminal:

```bash
echo "source ~/ros2_ws/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

### Create a New ROS2 Package

Now, let's create a new ROS2 package for your robot controller. This package will use `ament_python` for building and `rclpy` as a dependency:

```bash
cd ~/ros2_ws/src
ros2 pkg create my_robot_controller --build-type ament_python --dependencies rclpy
```

### Add Python Script for Robot Control

Navigate into your newly created package, and create a Python script (e.g., `rotate_doa.py`) to control the robot:

```bash
cd my_robot_controller/
touch rotate_doa.py
chmod +x rotate_doa.py
```

Edit the script with your desired control logic (e.g., using an editor like VS Code):

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

Add this dependancies to package.xml

```bash
  <depend>rclpy</depend>
  <depend>geometry_msgs</depend>
  <depend>turtlesim</depend>
  <depend>std_msgs</depend>
```

Add this endpoint to package.xml

```python

entry_points={
        'console_scripts': [
            'rotate_doa = my_controller.rotate_doa:main',
        ],
    },

```

### Build and Run the Package

After editing your Python script, build the package:

```bash
colcon build
source ~/ros2_ws/install/setup.bash
```

Finally, run the package with:

```bash
ros2 run my_robot_controller rotate_doa
```

In another terminal, you can also run a basic ROS2 node (e.g., `turtlesim` for testing):

```bash
ros2 run turtlesim turtlesim_node
```

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
