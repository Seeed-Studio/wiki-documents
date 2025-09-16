---
description: reComputer JetsonでPX4を制御する
title: reComputer JetsonでPX4を制御する
keywords:
- NVIDIA
- PX4
- ROS
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.webp
slug: /ja/control_px4_with_recomputer_jetson
last_update:
  date: 7/21/2025
  author: TienjuiWong
---

**reComputer Mini J3010 (Jetson Orin Nano 4G)** のような高性能コンパニオンコンピュータと **PX4フライトコントローラ** を組み合わせることで、自律走行車、ボート、ドローンを含む幅広いインテリジェント無人システムのコアアーキテクチャが構築されます。この強力な組み合わせにより、物流、科学研究、捜索救助、精密農業などの分野で革新的なアプリケーションが実現されます。

このセットアップにより、視覚ナビゲーション、物体追跡、リアルタイム障害物回避などの複雑なオンボードタスクが可能になります。これら2つの「頭脳」間の通信リンクは、システム全体のパフォーマンスと信頼性にとって重要です。

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-optional-accessories.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlY29tcHUiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjoyLCJjX3RvdGFsX3Jlc3VsdHMiOjg4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

:::tip[学習内容]

- JetsonをPixhawkに物理的に接続する方法。
- uXRCE-DDS、MAVSDK、MAVROSの長所と短所。
- 3つの通信方法すべてのステップバイステップセットアップ手順。
- 接続を確認し、一般的な問題をトラブルシューティングする方法。

:::

## 前提条件

開始する前に、以下を確認してください：

- **ハードウェア:** 下記の「実験環境」表に記載されているすべてのデバイス。
- **ソフトウェア:** Jetson Pack 6.2とROS 2 Humbleの新規インストール。
- **ツール:** Jetsonに`git`と`pip`がインストールされていること。
- **知識:** Linuxコマンドライン、ROS 2の概念（ノード、トピック）、QGroundControlでのPX4パラメータの基本的な知識。

## システム構成

### 実験環境

| コンポーネント | デバイス/ソフトウェア | バージョン/モデル |
| :--------------------- | :--------------------------- | :-------------------------- |
| **コンパニオンコンピュータ** | **デバイス** | reComputer Mini J3010 (Jetson Orin Nano 4G)  |
|                        | **OS** | Ubuntu 22.04 (JetPack 6.2)  |
|                        | **ROS** | ROS 2 Humble                |
| **フライトコントローラ** | **MCU** | Pixhawk 4 Mini              |
|                        | **ファームウェア** | PX4 v1.15                   |
| **地上局PC** | **OS** | Ubuntu 22.04                |
|                        | **QGC** | QGroundControl v5.0以上 |

### ハードウェア接続

Jetsonのネイティブ UARTを使用することを強く推奨します。これにより、USBポートを占有しない堅牢な接続が実現できます。

- **配線**: 4ピンJST-GHケーブルを使用して、**Pixhawk 4 Miniの`TELEM1`**ポートを**Jetson Orin Nanoの`UART1`**ヘッダーに接続します。
- **デバイスファイル**: このシリアルポートは、JetsonのOSでは`/dev/ttyTHS1`に対応します。

<details>
<summary><strong>Pixhawk 4 Miniポートとピン配置の詳細（クリックして展開）</strong></summary>

<br/>

| UART   | Device      | QGC Parameter Description | Port Label on FC           |
| :----- | :---------- | :------------------------ | :------------------------- |
| UART1  | /dev/ttyS0  | GPS1                      | GPS Module                 |
| USART2 | /dev/ttyS1  | TELEM1                    | TELEM1                     |
| USART3 | /dev/ttyS2  | TELEM2                    | N/A                        |
| UART4  | /dev/ttyS3  | TELEM/SERIAL4             | UART/I2C B                 |
| USART6 | /dev/ttyS4  | N/A                       | RC IN                      |
| UART7  | /dev/ttyS5  | N/A                       | Debug                      |
| UART8  | /dev/ttyS6  | N/A                       | Not connected (no PX4IO)   |

### TELEM1, TELEM2 ポート

| Pin       | Signal  | Volt  |
| :-------- | :------ | :---- |
| 1(red)    | VCC     | +5V   |
| 2(black)  | TX(out) | +3.3V |
| 3(black)  | RX(in)  | +3.3V |
| 4(black)  | CTS(in) | +3.3V |
| 5(black)  | RTS(out)| +3.3V |
| 6(black)  | GND     | GND   |

### DSM RC ポート

| Pin        | Signal             | Volt  |
| :--------- | :----------------- | :---- |
| 1(null)    | VDD_5V_SBUS_RC     | +5V   |
| 2(yellow)  | SBUS* | +3.3V |
| 3(null)    | RSSI** | +3.3V |
| 4(red)     | VDD_3V3_SPEKTRUM   | +3.3V |
| 5(black)   | GND                | GND   |

### UART & I2C B ポート *

| Pin       | Signal  | Volt  |
| :-------- | :------ | :---- |
| 1(red)    | VCC     | +5V   |
| 2(black)  | TX(out) | +3.3V |
| 3(black)  | RX(in)  | +3.3V |
| 4(black)  | SCL2    | +3.3V |
| 5(black)  | SDA2    | +3.3V |
| 6(black)  | GND     | GND   |

### SBUS RC ポート

| Pin        | Signal             | Volt  |
| :--------- | :----------------- | :---- |
| 1(red)     | VDD_5V_SBUS_RC     | +5V   |
| 2(yellow)  | SBUS* | +3.3V |
| 3(null)    | RSSI** | +3.3V |
| 4(null)    | VDD_3V3_SPEKTRUM   | +3.3V |
| 5(black)   | GND                | GND   |

---
**脚注:**

- **`*` (UART & I2C B ポート):** シリアル通信やI2Cをサポートするセンサーを接続するための予備ポート。例えば、2番目のGPSモジュールをここに接続できます。
- **`*` (SBUS信号):** SBUSまたはDSM/Spektrumレシーバーの信号線をここに接続します。
- **`**` **(RSSI信号):** RC信号強度情報をオートパイロットに送信します。

</details>

:::caution[重要: シリアルポートの権限設定]

すべてのシリアルコマンドで `sudo` を使用することを避けるため、ユーザーを `dialout` グループに追加する必要があります。これは重要な一回限りの設定です。

```bash
sudo usermod -a -G dialout $USER
````

**You must reboot the Jetson for this change to take effect\!**

:::

## Choosing Your Method: A Comparison

Before diving in, understand the trade-offs. The right choice depends entirely on your project's goals.

| Feature             | uXRCE-DDS (ROS 2 Native) 🚀                                     | MAVSDK (High-Level API) 🐍                                         | MAVROS (ROS Bridge) 🌉                                                        |
| :------------------ | :--------------------------------------------------------------- | :----------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| **Architecture** | PX4 and ROS 2 share a DDS data space for **native communication**. | A standalone C++ library (with wrappers) providing a high-level API. | A **bridge/gateway** that translates MAVLink protocol to ROS topics/services. |
| **Performance** | **Highest**. Zero-copy data transfer with the lowest latency.      | **High**. The API calls directly generate efficient MAVLink messages.    | **Good**. A slight overhead exists due to the MAVLink-to-ROS translation layer. |
| **Ease of Use** | Moderate. Requires compiling the Agent and `px4_msgs`.          | **Easiest**. Intuitive, function-based API ideal for rapid prototyping. | Steep learning curve but offers the deepest integration with the ROS ecosystem. |
| **Flexibility** | **Excellent**. Provides direct access to all internal PX4 uORB topics. | **Limited**. Exposes common actions (takeoff, waypoints) but not raw data. | **Excellent**. Access to nearly all MAVLink messages, parameters, and services. |
| **ROS Integration** | **Native ROS 2**. The official, future-proof method for ROS 2.       | **ROS Agnostic**. Can be used in any project, easily wrapped in a ROS node. | **ROS Centric**. The de-facto standard for ROS 1 and widely used in ROS 2.    |
| **Use Case** | Performance-critical ROS 2 projects needing low-level data access. | Task-level scripting, rapid prototyping, non-ROS projects, and education. | Complex robotics systems integrated with ROS packages like Nav2 or MoveIt.    |

## Method 1: uXRCE-DDS (Native ROS 2 Integration)

This is PX4's official solution for ROS 2, bridging its internal `uORB` messaging system directly into the ROS 2 network for zero-overhead communication.

### Step 1: Compile the Micro XRCE-DDS Agent

The Agent is a small program on the Jetson that acts as a broker between the flight controller's serial connection and the ROS 2 network.

```bash title="Terminal on Jetson"
# 1. Clone the specific version of the Agent repository
cd ~
git clone -b v2.4.2 https://github.com/eProsima/Micro-XRCE-DDS-Agent.git
cd Micro-XRCE-DDS-Agent

# 2. IMPORTANT: Patch the Fast-DDS dependency version
# The v2.12.x tag for fastdds was removed by the vendor; we update it to a working one.
sed -i 's/v2.12.x/v2.13.x/g' SuperBuild.cmake

# 3. Build and install the Agent
mkdir build && cd build
cmake ..
make
sudo make install # Installs MicroXRCEAgent globally
```

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '16px'
}}>
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/01.png" alt="PX4_dev_01" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/02.png" alt="PX4_dev_02" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/03.png" alt="PX4_dev_03" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/04.png" alt="PX4_dev_04" />
</div>

### ステップ2: `px4_msgs` ROS 2パッケージをビルドする

ROS 2がPX4のトピックを理解できるようにするには、そのメッセージ定義をビルドする必要があります。

```bash title="Terminal on Jetson"
# 1. Create a ROS 2 workspace
mkdir -p ~/px4_ros_ws/src
cd ~/px4_ros_ws/src

# 2. Clone the required repositories
git clone https://github.com/PX4/px4_msgs.git
git clone https://github.com/PX4/px4_ros_com.git # Contains examples

# 3. Checkout the branch matching your firmware version
cd px4_msgs
git checkout release/1.15

# 4. Build the workspace
cd ~/px4_ros_ws
source /opt/ros/humble/setup.bash
colcon build
```

:::caution[uXRCE-DDSのハードウェア互換性]

`px4_msgs`のバージョンは、お使いのPX4ファームウェアのバージョンと**必ず**一致させる必要があります。これは互換性にとって重要です。

さらに、PX4ファームウェアv1.14以降で標準となったuXRCE-DDSによる完全なネイティブROS 2サポートには、**2MBのフラッシュメモリ**を持つフライトコントローラー（このガイドで使用されているPixhawk 4 Miniなど）が必要です。

人気のある**Pixhawk 2.4.8**（およびその他のFMUv2ベースのボード）などの古い従来のハードウェアは、1MBのフラッシュしか持ちません。これらはこのuXRCE-DDS方式に必要な標準のプリビルドファームウェアを実行できません。カスタムの軽量ファームウェアを作成することは理論的には可能ですが、複雑なプロセスです。

**Pixhawk 2.4.8またはその他の1MBフラッシュボードを使用している場合は、この方式をスキップして直接[方式2（MAVSDK）](#4-method-2-mavsdk-high-level-api)または[方式3（MAVROS）](#5-method-3-mavros-the-powerful-ros-bridge)に進むことを強く推奨します。どちらもお使いのハードウェアで完全にサポートされているMAVLinkプロトコルを使用しているためです。**

:::

:::info
`px4_msgs`ブランチは、メッセージ定義の互換性を確保するために、お使いのPX4ファームウェアのバージョンと**必ず**一致させる必要があります。
:::

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '16px'
}}>
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/05.png" alt="PX4_dev_01" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/06.png" alt="PX4_dev_02" />
</div>

### ステップ3：PX4ファームウェアの設定

QGroundControlに接続し、以下のパラメータを設定します：

1. **`UXRCE_DDS_CFG`**：`TELEM1`に設定します。これによりそのポートでXRCE-DDSクライアントが有効になります。
2. **`SER_TEL1_BAUD`**：`921600 8N1`に設定します。
3. **`MAV_1_CONFIG`**：`Disabled`に設定します。これは同じポートでMAVLinkが競合することを防ぐために重要です。
4. パラメータを保存し、フライトコントローラーを再起動します。

### ステップ4：起動と確認

1. **Jetsonでエージェントを開始**（1つのターミナルで）：

    ```bash title="ターミナル1：エージェントの実行"
    MicroXRCEAgent serial --dev /dev/ttyTHS1 -b 921600
    ```

2. **ROS 2トピックの確認**（新しいターミナルで）：

    ```bash title="ターミナル2：トピックの確認"
    # 新しいターミナルごとにワークスペースをソースする
    source ~/px4_ros_ws/install/setup.bash

    # /fmu/で始まるトピックのリストが表示されるはずです
    ros2 topic list | grep /fmu/

    # トピックをエコーしてFCUからのライブデータストリームを確認
    ros2 topic echo /fmu/out/vehicle_odometry
    ```

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '16px'
}}>
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/11.png" alt="PX4_dev_01" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/12.png" alt="PX4_dev_02" />
</div>

-----

## 方式2：MAVSDK（高レベルAPI）

MAVSDKは、MAVLinkプロトコルの複雑さを抽象化し、ドローンをプログラムで制御するためのシンプルで現代的なAPIを提供します。高レベルのミッションスクリプトを書くのに最適です。

### ステップ1：PX4ファームウェアの設定

QGroundControlで、ポート設定をDDSからMAVLinkモードに戻します。

1. **`UXRCE_DDS_CFG`**：`Disabled`に戻します。
2. **`MAV_1_CONFIG`**：`TELEM 1`に設定してポートをMAVLinkに割り当てます。
3. **`MAV_1_MODE`**：`Onboard`に設定してリンクがコンパニオンコンピューター用であることを指定します。
4. **`SER_TEL1_BAUD`**：これが引き続き`921600 8N1`であることを確認します。
5. パラメータを保存し、フライトコントローラーを再起動します。

### ステップ2：MAVSDK-Pythonのインストール

```bash title="Terminal on Jetson"
pip3 install mavsdk
```

### ステップ3: 制御スクリプトの作成と実行

このPythonスクリプトは接続し、10メートルまで離陸し、待機してから着陸します。

```python title="takeoff_and_land.py"
import asyncio
from mavsdk import System

async def run():
    # Create a drone object and connect to the flight controller
    drone = System()
    await drone.connect(system_address="serial:///dev/ttyTHS1:921600")

    print("Waiting for drone to connect...")
    # This is an asynchronous generator that yields connection state updates
    async for state in drone.core.connection_state():
        if state.is_connected:
            print("--> Drone discovered!")
            break

if __name__ == "__main__":
    # Run the asyncio event loop
    asyncio.run(run())
```

ターミナルからスクリプトを実行してください：`python3 takeoff_and_land.py`。

-----

## 方法3：MAVROS（強力なROSブリッジ）

MAVROSは実戦で検証されたMAVLink-to-ROSゲートウェイで、複雑なROSベースシステムに対して包括的な機能と比類のない安定性を提供します。

### ステップ1：PX4ファームウェアの設定

MAVROSのPX4設定は**MAVSDKセットアップと同一**です。`TELEM1`が`Onboard`モードでMAVLink用に設定されていることを確認してください。

### ステップ2：MAVROSと依存関係のインストール

```bash title="Terminal on Jetson"
sudo apt update
sudo apt install ros-humble-mavros ros-humble-mavros-msgs
```

:::info[よくあるクラッシュを防ぐ！]
MAVROSは座標変換のために地理データセットを必要とします。データセットの欠如は起動時のクラッシュの一般的な原因です。このスクリプトはそれをダウンロードしてインストールします。

```bash title="Terminal on Jetson"
sudo bash /opt/ros/humble/lib/mavros/install_geographiclib_datasets.sh 
```

:::

### ステップ3: 起動と検証

1. **MAVROSノードを起動**:

    ```bash title="Terminal 1: Launch MAVROS"
    source /opt/ros/humble/setup.bash

    # Launch mavros, specifying the FCU connection URL via a parameter
    ros2 launch mavros px4.launch fcu_url:="serial:///dev/ttyTHS1:921600"
    ```

2. **接続を検証**:

    新しいターミナルで、MAVROSステートトピックをエコーします。

    ```bash title="Terminal 2: Verify Connection"
    ros2 topic echo /mavros/state
    ```

    出力を確認してください。`connected`フィールドが`true`に変わったら、MAVROSがPX4と正常に通信しています。

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '16px'
}}>
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/13.png" alt="PX4_dev_01" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/14.png" alt="PX4_dev_02" />
</div>

-----

## よくある問題のトラブルシューティング

問題が発生した場合は、まずこれらのよくある問題を確認してください。

- **シリアルポートで「Permission Denied」:** ユーザーを`dialout`グループに追加して再起動するのを忘れています。「ハードウェア接続」セクションを参照してください。
- **`/dev/ttyTHS1`で「No such file or directory」:** 物理的な配線を再確認してください。フライトコントローラーの電源は入っていますか？`ls /dev/ttyTHS*`を実行してデバイス名を確認してください。
- **MAVROS起動時にクラッシュ:** `install_geographiclib_dataset.sh`ステップを見逃している可能性があります。方法3のコマンドを実行してください。
- **`colcon build`が失敗:** 最初にROS 2環境をソースしているか確認してください（`source /opt/ros/humble/setup.bash`）。より複雑な依存関係の問題については、`rosdep install --from-paths src --ignore-src -r -y`を実行する必要があるかもしれません。

## 最後に

これで、Jetson OrinとPX4フライトコントローラー間の通信を可能にする3つの強力な方法を手に入れました。最適なツールは、プロジェクトのアーキテクチャ、パフォーマンス要件、開発速度によって異なります。トレードオフを理解することで、あらゆる自律ドローンアプリケーションのための堅牢な基盤を構築できます。

ハッピーフライング！🚁

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
