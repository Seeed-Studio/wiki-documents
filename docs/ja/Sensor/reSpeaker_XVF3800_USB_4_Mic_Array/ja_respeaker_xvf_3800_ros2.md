---
description: ReSpeaker XVF3800をROS2と統合してロボットアプリケーションに活用する方法を学びます。このチュートリアルでは、TurtlesimでDOAと音声検出をシミュレートし、ロボット制御とPID制御の基本的な理解を提供します。
title: ReSpeaker XVF3800でのROS2
keywords:
- reSpeaker
- Robotics
- ROS2
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /ja/respeaker_xvf3800_ros2
last_update:
  date: 9/26/2025
  author: Kasun Thushara
---

## はじめに

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/ros/RoS2reSpeakerXVF3800.gif" alt="pir" width={800} height="auto" /></p>

このプロジェクトでは、ReSpeaker XVF3800をROS2と統合してロボットアプリケーションに活用し、音声検出と到来方向（DOA）推定に焦点を当てます。Turtlesimノードを使用して、音声入力に基づくロボット制御をシミュレートし、PID制御による精密な移動を可能にします。このチュートリアルでは、ROS2環境のセットアップ、ReSpeaker XVF3800の設定、およびロボット制御のための音声コマンドの適用方法について説明します。最終的に、ユーザーは音声インターフェースとロボティクスの接続方法と、ナビゲーションのための基本的な制御アルゴリズムの使用方法を理解できるようになります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

## ホストコンピュータにROS 2をインストールする方法

このプロジェクトでは、ミドルウェアとして**ROS 2 Humble**を使用します。ROS 2を初めてインストールする場合は、詳細な手順について公式インストールガイドに従ってください：

[ROS 2 Humble インストールガイド（Ubuntu）](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html)

## ReSpeaker USB マイクアレイのセットアップ

ロボットや音声アプリケーションで**ReSpeaker USB マイクアレイ**を使用している場合は、以下の手順に従ってUbuntuシステムで設定してください。

### デバイスのベンダーIDとプロダクトIDを見つける

デバイスのIDを見つけるには、以下を実行します：

```bash
lsusb
```

ReSpeakerデバイス（例：`vendor 0x2886, product 0x001A`）を探してください。

### デバイス用のudevルールを作成する

ReSpeaker マイクアレイの適切な権限を確保するために、新しいudevルールを作成します：

```bash
sudo nano /etc/udev/rules.d/50-respeaker.rules
```

ファイルに以下の行を追加します：

```bash
# ReSpeaker USB Mic Array
SUBSYSTEM=="usb", ATTR{idVendor}=="2886", ATTR{idProduct}=="0018", MODE="0666", GROUP="plugdev"
SUBSYSTEM=="usb", ATTR{idVendor}=="2886", ATTR{idProduct}=="001a", MODE="0666", GROUP="plugdev"
```

### udevルールをリロードしてサービスを再起動する

変更を有効にするために、udevルールをリロードしてサービスを再起動します：

```bash
sudo udevadm control --reload-rules
sudo udevadm trigger
sudo service udev restart
```

新しいルールを適用するために、ReSpeaker USB マイクアレイを抜き差ししてください。

## ROS2ワークスペースのセットアップとROS2でのロボット制御

このガイドでは、ROS2ワークスペースのセットアップ、カスタムROS2パッケージの作成、Pythonを使用したロボット制御、およびROS2プロジェクトで使用するためのReSpeaker USB マイクアレイの設定プロセスについて説明します。

### 必要な依存関係をインストールする

**Python Colcon拡張機能をインストールする**

まず、ROS2パッケージをビルドするために必要なPython拡張機能がインストールされていることを確認します：

```bash
sudo apt install python3-colcon-common-extensions
```

### Colcon自動補完の設定（オプション）

colconの自動補完を設定する必要がある場合：

```bash
cd /usr/share/colcon_argcomplete/hook/
ls
gedit ~/.bashrc
clear
```

次に、環境をリロードするために`source ~/.bashrc`を追加します：

```bash
source ~/.bashrc
```

### ROS2ワークスペースを作成する

新しいROS2ワークスペースを作成し、環境を準備します：

```bash
mkdir ros2_ws
cd ros2_ws/
mkdir src
colcon build
```

### ROS2ワークスペースをソースする

ワークスペースをビルドした後、環境変数を設定するためにソースします：

```bash
source ~/ros2_ws/install/setup.bash
```

新しいターミナルを開くたびに自動的にワークスペースをソースするために、この行を`~/.bashrc`に追加できます：

```bash
echo "source ~/ros2_ws/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

### 新しいROS2パッケージを作成する

次に、ロボットコントローラー用の新しいROS2パッケージを作成しましょう。このパッケージは、ビルドに`ament_python`を使用し、依存関係として`rclpy`を使用します：

```bash
cd ~/ros2_ws/src
ros2 pkg create my_robot_controller --build-type ament_python --dependencies rclpy
```

### ロボット制御用のPythonスクリプトを追加する

新しく作成したパッケージに移動し、ロボットを制御するためのPythonスクリプト（例：`rotate_doa.py`）を作成します：

```bash
cd my_robot_controller/
touch rotate_doa.py
chmod +x rotate_doa.py
```

希望する制御ロジックでスクリプトを編集します（例：VS Codeなどのエディターを使用）：

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

package.xmlにこれらの依存関係を追加します

```bash
  <depend>rclpy</depend>
  <depend>geometry_msgs</depend>
  <depend>turtlesim</depend>
  <depend>std_msgs</depend>
```

package.xmlにこのエンドポイントを追加します

```python

entry_points={
        'console_scripts': [
            'rotate_doa = my_controller.rotate_doa:main',
        ],
    },

```

### パッケージをビルドして実行する

Pythonスクリプトを編集した後、パッケージをビルドします：

```bash
colcon build
source ~/ros2_ws/install/setup.bash
```

最後に、以下でパッケージを実行します：

```bash
ros2 run my_robot_controller rotate_doa
```

別のターミナルで、基本的なROS2ノード（例：テスト用の`turtlesim`）も実行できます：

```bash
ros2 run turtlesim turtlesim_node
```

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
