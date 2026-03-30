---
description: ReSpeaker XVF3800 を ROS2 と統合してロボットアプリケーションに活用する方法を学びます。本チュートリアルでは、Turtlesim を用いた DOA と音声検出のシミュレーションを通して、ロボット制御と PID 制御の基礎的な理解を提供します。
title: reSpeaker XVF3800 上の ROS2
keywords:
  - reSpeaker
  - ロボティクス
  - ROS2
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /respeaker_xvf3800_ros2
last_update:
  date: 9/26/2025
  author: Kasun Thushara
createdAt: '2025-09-28'
updatedAt: '2026-02-27'
url: https://wiki.seeedstudio.com/ja/respeaker_xvf3800_ros2/
---

## はじめに

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/ros/RoS2reSpeakerXVF3800.gif" alt="pir" width={800} height="auto" /></p>

このプロジェクトでは、音声検出と到来方向 (DOA) 推定に焦点を当てながら、ReSpeaker XVF3800 を ROS2 と統合してロボットアプリケーションに利用する方法を示します。Turtlesim ノードを使用して音声入力に基づくロボット制御をシミュレートし、PID 制御による精密な動作を実現します。本チュートリアルでは、ROS2 環境のセットアップ、ReSpeaker XVF3800 の設定、およびロボット制御に音声コマンドを適用する方法を取り上げます。最後まで進めることで、音声インターフェースをロボティクスに接続し、ナビゲーションのための基本的な制御アルゴリズムを使用する方法を理解できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## ホストコンピュータへの ROS 2 のインストール方法

このプロジェクトでは、ミドルウェアとして **ROS 2 Humble** を使用します。ROS 2 を初めてインストールする場合は、公式インストールガイドに従って詳細な手順を確認してください。

[ROS 2 Humble インストールガイド (Ubuntu)](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html)

## ReSpeaker USB Mic Array のセットアップ

ロボットや音声アプリケーションに **ReSpeaker USB Mic Array** を使用する場合は、Ubuntu システム上で次の手順に従って設定してください。

### デバイスの Vendor ID と Product ID を確認する

デバイスの ID を確認するには、次を実行します。

```bash
lsusb
```

ReSpeaker デバイス（例: `vendor 0x2886, product 0x001A`）を探します。

### デバイス用の udev ルールを作成する

ReSpeaker Mic Array に適切なパーミッションを付与するため、新しい udev ルールを作成します。

```bash
sudo nano /etc/udev/rules.d/50-respeaker.rules
```

ファイルに次の行を追加します。

```bash
# ReSpeaker USB Mic Array
SUBSYSTEM=="usb", ATTR{idVendor}=="2886", ATTR{idProduct}=="0018", MODE="0666", GROUP="plugdev"
SUBSYSTEM=="usb", ATTR{idVendor}=="2886", ATTR{idProduct}=="001a", MODE="0666", GROUP="plugdev"
```

### udev ルールを再読み込みしてサービスを再起動する

変更を反映させるために、udev ルールを再読み込みし、サービスを再起動します。

```bash
sudo udevadm control --reload-rules
sudo udevadm trigger
sudo service udev restart
```

新しいルールを適用するために、ReSpeaker USB Mic Array を一度抜き差ししてください。

## ROS2 ワークスペースのセットアップと ROS2 によるロボット制御

このガイドでは、ROS2 ワークスペースのセットアップ、カスタム ROS2 パッケージの作成、Python を用いたロボット制御、そして ROS2 プロジェクトで使用するための ReSpeaker USB Mic Array の設定手順を順を追って説明します。

### 必要な依存関係のインストール

**Python Colcon 拡張機能のインストール**

まず、ROS2 パッケージをビルドするために必要な Python 拡張機能がインストールされていることを確認します。

```bash
sudo apt install python3-colcon-common-extensions
```

### Colcon の自動補完を設定する（オプション）

colcon の自動補完を設定する必要がある場合は、次を実行します。

```bash
cd /usr/share/colcon_argcomplete/hook/
ls
gedit ~/.bashrc
clear
```

その後、環境を再読み込みするために `source ~/.bashrc` を追加します。

```bash
source ~/.bashrc
```

### ROS2 ワークスペースを作成する

新しい ROS2 ワークスペースを作成し、環境を準備します。

```bash
mkdir ros2_ws
cd ros2_ws/
mkdir src
colcon build
```

### ROS2 ワークスペースを source する

ワークスペースをビルドしたら、環境変数を設定するために source します。

```bash
source ~/ros2_ws/install/setup.bash
```

新しいターミナルを開くたびに自動的にワークスペースを source するには、この行を `~/.bashrc` に追加できます。

```bash
echo "source ~/ros2_ws/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

### 新しい ROS2 パッケージを作成する

それでは、ロボットコントローラ用の新しい ROS2 パッケージを作成しましょう。このパッケージはビルドに `ament_python` を使用し、依存関係として `rclpy` を利用します。

```bash
cd ~/ros2_ws/src
ros2 pkg create my_robot_controller --build-type ament_python --dependencies rclpy
```

### ロボット制御用の Python スクリプトを追加する

新しく作成したパッケージに移動し、ロボットを制御するための Python スクリプト（例: `rotate_doa.py`）を作成します。

```bash
cd my_robot_controller/
touch rotate_doa.py
chmod +x rotate_doa.py
```

VS Code などのエディタを使用して、任意の制御ロジックでスクリプトを編集します。

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

これらの依存関係を package.xml に追加します

```bash
  <depend>rclpy</depend>
  <depend>geometry_msgs</depend>
  <depend>turtlesim</depend>
  <depend>std_msgs</depend>
```

このエンドポイントを package.xml に追加します

```python

entry_points={
        'console_scripts': [
            'rotate_doa = my_controller.rotate_doa:main',
        ],
    },

```

### パッケージをビルドして実行する

Python スクリプトを編集したら、パッケージをビルドします。

```bash
colcon build
source ~/ros2_ws/install/setup.bash
```

最後に、次のコマンドでパッケージを実行します。

```bash
ros2 run my_robot_controller rotate_doa
```

別のターミナルでは、基本的な ROS2 ノード（テスト用に `turtlesim` など）を実行することもできます。

```bash
ros2 run turtlesim turtlesim_node
```

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
