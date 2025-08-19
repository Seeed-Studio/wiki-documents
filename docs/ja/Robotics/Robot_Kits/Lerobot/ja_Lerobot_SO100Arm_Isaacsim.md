---
description: この Wiki は、SO100 Arm Kit ロボットアームを NVIDIA の Isaac Sim シミュレーションプラットフォームにインポートし、ROS2 と Python スクリプトを使用して制御する方法を説明します。
title: Isaac Sim で SO100Arm Kit をインポートして制御する方法
keywords:
- Lerobot
- Huggingface
- Arm
- Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Isaac_sim_import_success.webp
slug: /ja/lerobot_so100m_isaacsim
last_update:
  date: 05/15/2025
  author: ZhuYaoHui
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Isaac Sim で SO100Arm Kit をインポートして制御する方法

## はじめに

[SO-100ARM](https://github.com/TheRobotStudio/SO-ARM100) は、[TheRobotStudio](https://www.therobotstudio.com/) によって開始された完全オープンソースのロボットアームプロジェクトです。このプロジェクトには、フォロワーアームとリーダーロボットアームが含まれており、詳細な 3D プリントファイルと操作ガイドも提供されています。[LeRobot](https://github.com/huggingface/lerobot/tree/main) は、PyTorch を使用して現実世界のロボティクス向けのモデル、データセット、およびツールを提供することを目指しています。その目的は、ロボティクスの参入障壁を下げ、誰もがデータセットや事前学習モデルを共有することで貢献し、利益を得られるようにすることです。

この Wiki では、SO100 Arm Kit ロボットアームを NVIDIA の Isaac Sim シミュレーションプラットフォームにインポートし、ROS2 と Python スクリプトを使用して制御する方法を説明します。

<iframe width="900" height="600" src="https://www.youtube.com/embed/buiqdmNQKwY?si=CvovjaHNQy2nZsR2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## プロジェクト紹介

SO-ARM100 と reComputer Jetson AI インテリジェントロボットキットは、高精度のロボットアーム制御と強力な AI コンピューティングプラットフォームをシームレスに組み合わせ、包括的なロボット開発ソリューションを提供します。このキットは Jetson Orin または AGX Orin プラットフォームをベースに、SO-ARM100 ロボットアームと LeRobot AI フレームワークを組み合わせており、教育、研究、産業オートメーションなどの複数のシナリオに適用可能なインテリジェントロボットシステムをユーザーに提供します。
この Wiki では、SO ARM100 の組み立てとデバッグのチュートリアルを提供し、Lerobot フレームワーク内でのデータ収集とトレーニングを実現します。

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" />
  </div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
</a></div>

## 仕様

| 仕様 | Arm Kit | Arm Kit Pro |
|--|--|--|
| タイプ | Arm Kit | Arm Kit Pro |
| 自由度 | 6 | 6 |
| 最大トルク | 19.5kg.cm 7.4V | 30kg.cm 12V |
| サーボ | STS3215 バスサーボ | STS3215 バスサーボ |
| 電源供給 | 5.5mm*2.1mm DC 5V4A | 5.5mm*2.1mm DC 12V1A |
| 角度センサー | 12ビット磁気エンコーダー | 12ビット磁気エンコーダー |
| 推奨動作温度範囲 | 0℃～40℃ | 0℃～40℃ |
| 通信方法 | UART | UART |
| 制御方法 | PC | PC |

## 部品表 (BOM)

| 部品 | 数量 | 含まれる |
|--|--|--|
| STS3215 サーボ1 | 12 | ✅ |
| モーター制御ボード | 2 | ✅ |
| USB-C ケーブル 2本 | 1 | ✅ |
| 電源2 | 2 | ✅ |
| テーブルクランプ | 1 | ❌ |
| アームの3Dプリント部品 | 1 | ❌ |

:::caution
3Dプリント部品とテーブルクランプは製品に含まれていません。ただし、SO-100ARMは詳細な[3Dプリント用STLファイル](https://github.com/TheRobotStudio/SO-ARM100/tree/main/stl_files_for_3dprinting)と印刷パラメータを提供しています。また、[テーブルクランプの3Dプリント部品](https://makerworld.com/zh/models/908660)も提供しています。
:::

## 前提条件

1. [Lerobot SO100Armの基本使用チュートリアルに精通していること](/ja/lerobot_so100m)。
2. [チュートリアルに従ってIsaac Simをインストールする](https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_workstation.html)。
3. [チュートリアルに従ってROS2のインストールと設定を完了する](https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_ros.html)。

## Lerobot環境のインストール

**ステップ1. Lerobotプロジェクトをクローンする**

```bash
cd ~/
git clone https://github.com/ZhuYaoHui1998/lerobot.git
cd lerobot
```

[チュートリアルに従ってLerobot環境をインストールしていることを確認してください](/ja/lerobot_so100m)。

## URDFをIsaac Simにインポートする

**ステップ1. Isaac Simを開く**

**NVIDIAの[公式チュートリアル](https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_workstation.html)に従ってIsaac Simをインストールし、[ROS2をインストールし、基本的な環境設定を完了していること](https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_ros.html)を確認してください。以下の図に示すパラメータでIsaac Simインターフェースを開きます。**
<div align="center">
    <img width={600}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/open_isaac_sim.png" />
</div>

**ステップ2. URDFインポーターを使用する**

**Isaac SimツールバーでIsaac Utils → Workflows → URDF Importerを開きます。**

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/isaacsim_tooltab.png" />
</div>

**ステップ3. URDFをインポートする**

**デフォルトのパラメータを保持し、Inputでファイルを参照し、クローンしたLerobotリポジトリの`/lerobot/SO-ARM100/URDF/SO_5DOF_ARM100_8j_URDF.SLDASM/urdf/SO_5DOF_ARM100_8j_URDF.SLDASM.urdf`からURDFをインポートします。**

<div align="center">
    <img width={600}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/urdf_importer.png" />
</div>

<div align="center">
    <img width={600}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/urdf_file.png" />
</div>

**これでSO100ロボットアームがIsaac Simにインポートされたことが確認できます。**

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Isaac_sim_import_success.png" />
</div>

**ステップ4. 物理要素を追加する**

**Isaac SimツールバーでCreate → Physicsに移動し、`Physics Scene`と`Ground Plane`の両方を追加して物理環境と地面を設定します。**

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/import_physics.png" />
</div>

**ステップ5. `root_joint`の`Articulation Root`を削除する**

**右側のStageパネルで`root_joint`を見つけます。それをクリックし、下部のPropertiesでPhysicsの`Articulation Root`を見つけ、右側の×をクリックしてこのルートを削除します。**
<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/delete_root.png" />
</div>

**ステップ6. `root_joint`に`Articulation Root`を追加する**

**StageパネルでSO100をクリックし、右クリックしてAdd → Physics → Articulation Rootを選択します。**
<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/add_root.png" />
</div>

## アクショングラフを追加する

  **ステップ 1. ツールバーで、Create → Visual Scripting に移動し、Action Graph を追加します。**

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/add_graph.png" />
  </div>

  **ステップ 2. アクションコンポーネントを追加します。**

  **検索ボックスで以下の順に追加します: On Playback Tick, Isaac Read Simulation Time, ROS2 Publish Joint State, Articulation Controller, ROS2 Subscribe Joint State。**
  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/add_graph_action.png" />
  </div>

**この部分をより明確に理解するために、動画の内容に従ってアクションの接続と基本的なパラメータ設定を行ってください。**

<iframe width="900" height="600" src="https://www.youtube.com/embed/buiqdmNQKwY?si=sHjysqfqxPVz-r3T&amp;start=92" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

  **ステップ 3. 再生**

  **右側の再生ボタンをクリックしてアクションを正常に開始します。この時点で、`ros2 topic list` コマンドを使用してトピック情報を確認します。**
  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/ros2topic.png" />
  </div>

## **ROS2 Python によるロボットアームの動作制御**

**これで、ROS2環境で以下のPythonスクリプトを実行してロボットアームを制御できます。スクリプトファイルは `lerobot/lerobot/scripts/` フォルダ内にあり、`control_motor.py` と `lerobot_publisher.py` という名前です。**

**`control_motor.py` は特定のサーボの角度を個別に送信することができ、角度値は -π から π の範囲です。**

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

**`lerobot_publisher.py` はサーボに対してアクションコマンドを継続的に送信します。**

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

        # パブリッシャーを作成します。このパブリッシャーは JointState メッセージを /joint_command トピックに送信します。
        self.publisher_ = self.create_publisher(JointState, "joint_command", 10)

        # JointState メッセージを作成します
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

        # メッセージを受信するためにキットのエディタが再生中であることを確認してください
        self.joint_state.position = np.array([0.0] * num_joints, dtype=np.float64).tolist()
        self.default_joints = [0, 0, 0, 0, 0, 0]

        # 動きを小さい範囲に制限します（これはロボットの範囲ではなく、動きの範囲です）
        self.max_joints = np.array(self.default_joints) + 0.3
        self.min_joints = np.array(self.default_joints) - 0.3

        # ロボットを各ジョイント周辺で揺れ動かす位置制御
        self.time_start = time.time()

        timer_period = 0.05  # 秒
        self.timer = self.create_timer(timer_period, self.timer_callback)

    def timer_callback(self):
        self.joint_state.header.stamp = self.get_clock().now().to_msg()

        joint_position = (
            np.sin(time.time() - self.time_start) * (self.max_joints - self.min_joints) * 0.5 + self.default_joints
        )
        self.joint_state.position = joint_position.tolist()

        # トピックにメッセージを送信します
        self.publisher_.publish(self.joint_state)


def main(args=None):
    rclpy.init(args=args)

    ros2_publisher = TestROS2Bridge()

    rclpy.spin(ros2_publisher)

    # ノードを明示的に破棄します
    ros2_publisher.destroy_node()
    rclpy.shutdown()


if __name__ == "__main__":
    main()
  ```

  </details>

<iframe width="900" height="600" src="https://www.youtube.com/embed/buiqdmNQKwY?si=3CizpKK3Nhj4Vlp9&amp;start=232" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 引用

TheRobotStudio プロジェクト: [SO-ARM100](https://github.com/TheRobotStudio/SO-ARM100)

Huggingface プロジェクト: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty: [Jetson Containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

[Jetson AI Lab](https://www.jetson-ai-lab.com/lerobot.html)

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

[ACT or ALOHA](https://tonyzhaozh.github.io/aloha/)

[TDMPC](https://www.nicklashansen.com/td-mpc/)

[VQ-BeT](https://sjlee.cc/vq-bet/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>