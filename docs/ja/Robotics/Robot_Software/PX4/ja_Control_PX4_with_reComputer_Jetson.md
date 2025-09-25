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
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
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
<summary><strong>Pixhawk 4 Miniのポート／ピン配置の詳細（クリックして展開）</strong></summary>

<br/>

| UART   | デバイス     | QGCパラメータの説明 | FC上のポートラベル            |
| :----- | :----------- | :------------------ | :---------------------------- |
| UART1  | /dev/ttyS0  | GPS1                | GPSモジュール                 |
| USART2 | /dev/ttyS1  | TELEM1              | TELEM1                        |
| USART3 | /dev/ttyS2  | TELEM2              | なし                          |
| UART4  | /dev/ttyS3  | TELEM/SERIAL4       | UART/I2C B                    |
| USART6 | /dev/ttyS4  | なし                | RC IN                         |
| UART7  | /dev/ttyS5  | なし                | デバッグ                      |
| UART8  | /dev/ttyS6  | なし                | 未接続（PX4IOなし）          |

### TELEM1 / TELEM2 ポート

| ピン       | 信号     | 電圧   |
| :--------- | :------- | :----- |
| 1（赤）    | VCC      | +5V    |
| 2（黒）    | TX（出力） | +3.3V |
| 3（黒）    | RX（入力） | +3.3V |
| 4（黒）    | CTS（入力）| +3.3V |
| 5（黒）    | RTS（出力）| +3.3V |
| 6（黒）    | GND      | GND    |

### DSM RC ポート

| ピン        | 信号               | 電圧   |
| :---------- | :----------------- | :----- |
| 1（なし）   | VDD_5V_SBUS_RC     | +5V    |
| 2（黄）     | SBUS*              | +3.3V  |
| 3（なし）   | RSSI**             | +3.3V  |
| 4（赤）     | VDD_3V3_SPEKTRUM   | +3.3V  |
| 5（黒）     | GND                | GND    |

### UART & I2C B ポート *

| ピン       | 信号     | 電圧   |
| :--------- | :------- | :----- |
| 1（赤）    | VCC      | +5V    |
| 2（黒）    | TX（出力） | +3.3V |
| 3（黒）    | RX（入力） | +3.3V |
| 4（黒）    | SCL2     | +3.3V  |
| 5（黒）    | SDA2     | +3.3V  |
| 6（黒）    | GND      | GND    |

### SBUS RC ポート

| ピン        | 信号               | 電圧   |
| :---------- | :----------------- | :----- |
| 1（赤）     | VDD_5V_SBUS_RC     | +5V    |
| 2（黄）     | SBUS*              | +3.3V  |
| 3（なし）   | RSSI**             | +3.3V  |
| 4（なし）   | VDD_3V3_SPEKTRUM   | +3.3V  |
| 5（黒）     | GND                | GND    |

---
**脚注:**

- **（UART & I2C B ポート）:** シリアル通信やI2Cをサポートするセンサーを接続するための予備ポート。例：2基目のGPSモジュールなど。
- **（SBUS信号）:** SBUSまたはDSM/Spektrumレシーバーの信号線をここに接続します。
- **（RSSI信号）:** RC信号強度情報をオートパイロットへ送信します。

</details>

:::caution[重要: シリアルポートの権限設定]

すべてのシリアルコマンドで `sudo` を使うのを避けるには、ユーザーを `dialout` グループに追加する必要があります。これは一度だけ行う重要な設定です。

```bash
sudo usermod -a -G dialout $USER
```

**この変更を反映させるには、Jetsonを再起動する必要があります。**

:::

## 方法の選び方：比較

作業に入る前に、トレードオフを理解しましょう。最適な選択はプロジェクトの目的によって決まります。

| 特徴          | uXRCE-DDS（ROS 2ネイティブ）🚀                | MAVSDK（高レベルAPI）🐍                        | MAVROS（ROSブリッジ）🌉                               |
| :---------- | :------------------------------------- | :--------------------------------------- | :---------------------------------------------- |
| **アーキテクチャ** | PX4とROS 2がDDSデータ空間を共有し、**ネイティブ通信**を実現。 | ラッパー付きのスタンドアロンC++ライブラリで高レベルAPIを提供。       | MAVLinkプロトコルをROSのトピック／サービスへ変換する**ブリッジ／ゲートウェイ**。 |
| **性能**      | **最高**。ゼロコピーで最小レイテンシ。                  | **高い**。API呼び出しが効率的なMAVLinkメッセージを直接生成。    | **良好**。MAVLink→ROS変換レイヤ由来の軽微なオーバーヘッドあり。         |
| **使いやすさ**   | 中程度。Agentと`px4_msgs`のビルドが必要。           | **最も簡単**。関数ベースで直感的。素早いプロトタイピングに最適。       | 学習コストは高いが、ROSエコシステムとの統合が最も深い。                   |
| **柔軟性**     | **優秀**。PX4内部（uORB）の全トピックへ直接アクセス可能。     | **限定的**。離陸やウェイポイントなど一般的操作は可、rawデータは不可。   | **優秀**。ほぼ全てのMAVLinkメッセージ／パラメータ／サービスへアクセス可。      |
| **ROS統合**   | **ROS 2ネイティブ**。公式で将来性のある方法。            | **ROSに非依存**。どのプロジェクトでも利用可、ROSノードで包むのも容易。 | **ROS中心**。ROS 1のデファクトで、ROS 2でも広く利用。             |
| **ユースケース**  | 低レベルデータへのアクセスが必要な性能重視のROS 2案件。         | タスクレベルのスクリプト、試作、非ROS案件、教育用途。             | Nav2やMoveItなどと統合する複雑なROSシステム。                   |

## 方法1：uXRCE-DDS（ROS 2ネイティブ統合）

PX4の内部メッセージング `uORB` をROS 2ネットワークへ直接ブリッジし、オーバーヘッド無しの通信を実現するPX4公式の解決策です。

### ステップ1：Micro XRCE-DDS Agentのコンパイル

AgentはJetson上で動作する軽量プログラムで、フライトコントローラのシリアル接続とROS 2ネットワークの仲介役を担います。

```bash title="Jetsonのターミナル"
# 1. Agentリポジトリの特定バージョンをクローン
cd ~
git clone -b v2.4.2 https://github.com/eProsima/Micro-XRCE-DDS-Agent.git
cd Micro-XRCE-DDS-Agent

# 2. 重要：Fast-DDS依存バージョンをパッチ
# fastddsのv2.12.xタグはベンダにより削除されたため、動作する版へ更新
sed -i 's/v2.12.x/v2.13.x/g' SuperBuild.cmake

# 3. Agentをビルドしてインストール
mkdir build && cd build
cmake ..
make
sudo make install # MicroXRCEAgentをグローバルにインストール
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

ROS 2がPX4のトピックを理解できるよう、メッセージ定義をビルドします。

```bash title="Jetsonのターミナル"
# 1. ROS 2ワークスペースを作成
mkdir -p ~/px4_ros_ws/src
cd ~/px4_ros_ws/src

# 2. 必要なリポジトリをクローン
git clone https://github.com/PX4/px4_msgs.git
git clone https://github.com/PX4/px4_ros_com.git # サンプルを含む

# 3. 利用中のファームウェアに一致するブランチへチェックアウト
cd px4_msgs
git checkout release/1.15

# 4. ワークスペースをビルド
cd ~/px4_ros_ws
source /opt/ros/humble/setup.bash
colcon build
```

:::caution[ハードウェア互換性（uXRCE-DDS 用）]

`px4_msgs` のバージョンは、PX4 ファームウェアのバージョンと**必ず**一致している必要があります。これは互換性のために非常に重要です。

さらに、PX4 ファームウェア v1.14 以降で標準となった uXRCE-DDS による完全なネイティブ ROS 2 サポートを利用するには、**2MB のフラッシュメモリ**を搭載したフライトコントローラ（本ガイドで使用している Pixhawk 4 Mini など）が必要です。

古いクラシックハードウェア、たとえばよく使われる **Pixhawk 2.4.8**（およびその他の FMUv2 ベースのボード）はフラッシュメモリが 1MB しかなく、この方法に必要な標準のプリビルドファームウェアを実行できません。理論的にはカスタムで削減版ファームウェアを作ることも可能ですが、非常に複雑です。

**もし Pixhawk 2.4.8 やその他 1MB フラッシュのボードを使用している場合、この方法はスキップし、代わりに [方法 2 (MAVSDK)](#4-method-2-mavsdk-high-level-api) または [方法 3 (MAVROS)](#5-method-3-mavros-the-powerful-ros-bridge) を使用することを強くお勧めします。これらは MAVLink プロトコルを使用しており、あなたのハードウェアで完全にサポートされています。**

:::

:::info
`px4_msgs` のブランチは、PX4 ファームウェアのバージョンと**一致**している必要があります。これによりメッセージ定義の互換性が保証されます。
:::

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '16px'
}}>
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/05.png" alt="PX4_dev_05" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/06.png" alt="PX4_dev_06" />
</div>

### ステップ3：PX4ファームウェアの設定

QGroundControlに接続し、以下のパラメータを設定します：

1. **`UXRCE_DDS_CFG`**：`TELEM1`に設定（当該ポートでXRCE-DDSクライアントを有効化）。
2. **`SER_TEL1_BAUD`**：`921600 8N1`に設定。
3. **`MAV_1_CONFIG`**：`Disabled`に設定（同一ポートでのMAVLink競合を防止）。
4. パラメータを保存し、フライトコントローラを再起動。

### ステップ4：起動と確認

1. **JetsonでAgentを起動**（1つ目のターミナル）：

   ```bash title="ターミナル1：Agentの実行"
   MicroXRCEAgent serial --dev /dev/ttyTHS1 -b 921600
   ```

2. **ROS 2トピックを確認**（新しいターミナル）：

   ```bash title="ターミナル2：トピック確認"
   # 各ターミナルでワークスペースを読み込む
   source ~/px4_ros_ws/install/setup.bash

   # /fmu/で始まるトピックが列挙されるはず
   ros2 topic list | grep /fmu/

   # トピックをエコーしてFCUからのライブデータを確認
   ros2 topic echo /fmu/out/vehicle_odometry
   ```

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '16px'
}}>
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/11.png" alt="PX4_dev_11" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/12.png" alt="PX4_dev_12" />
</div>

---

## 方式2：MAVSDK（高レベルAPI）

MAVSDKはMAVLinkの複雑さを抽象化し、プログラムによるドローン制御のためのシンプルでモダンなAPIを提供します。高レベルのミッションスクリプトに最適です。

### ステップ1：PX4ファームウェアの設定

QGroundControlで、ポート設定をDDSからMAVLinkモードに戻します。

1. **`UXRCE_DDS_CFG`**：`Disabled`に戻す。
2. **`MAV_1_CONFIG`**：`TELEM 1`に設定（ポートをMAVLinkに割り当て）。
3. **`MAV_1_MODE`**：`Onboard`に設定（コンパニオン用リンク）。
4. **`SER_TEL1_BAUD`**：`921600 8N1`が継続していることを確認。
5. 保存してFCを再起動。

### ステップ2：MAVSDK-Pythonのインストール

```bash title="Jetsonのターミナル"
pip3 install mavsdk
```

### ステップ3: 制御スクリプトの作成と実行

次のPythonは接続後、（例では接続確認まで。離陸・着陸は各自で拡張可）メッセージを表示します。

```python title="takeoff_and_land.py"
import asyncio
from mavsdk import System

async def run():
    # ドローンオブジェクトを作成し、フライトコントローラに接続
    drone = System()
    await drone.connect(system_address="serial:///dev/ttyTHS1:921600")

    print("ドローンの接続を待機中...")
    # 接続状態の更新を返す非同期ジェネレータ
    async for state in drone.core.connection_state():
        if state.is_connected:
            print("--> ドローンを検出しました！")
            break

if __name__ == "__main__":
    # asyncioイベントループを実行
    asyncio.run(run())
```

ターミナルから実行：`python3 takeoff_and_land.py`

---

## 方法3：MAVROS（強力なROSブリッジ）

MAVROSは実績あるMAVLink→ROSゲートウェイで、複雑なROSベースのシステムに包括的機能と高い安定性を提供します。

### ステップ1：PX4ファームウェアの設定

MAVROS向けのPX4設定は**MAVSDKと同一**です。`TELEM1`が`Onboard`モードでMAVLink用に設定されていることを確認してください。

### ステップ2：MAVROSと依存関係のインストール

```bash title="Jetsonのターミナル"
sudo apt update
sudo apt install ros-humble-mavros ros-humble-mavros-msgs
```

:::info[よくあるクラッシュを防ぐ！]  
MAVROS は座標変換のために地理データセットを必要とします。データセットがないと、起動時にクラッシュする一般的な原因となります。このスクリプトはそれをダウンロードしてインストールします。

```bash title="Jetson のターミナル"
sudo bash /opt/ros/humble/lib/mavros/install_geographiclib_datasets.sh 
```

:::

### ステップ3: 起動と検証

1. **MAVROSノードを起動**:

   ```bash title="ターミナル1：MAVROSを起動"
   source /opt/ros/humble/setup.bash

   # パラメータでFCU接続URLを指定してmavrosを起動
   ros2 launch mavros px4.launch fcu_url:="serial:///dev/ttyTHS1:921600"
   ```

2. **接続を検証**:

   新しいターミナルでMAVROSのステートトピックをエコー。

   ```bash title="ターミナル2：接続確認"
   ros2 topic echo /mavros/state
   ```

   出力を確認し、`connected` フィールドが `true` になればPX4と正常に通信しています。

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '16px'
}}>
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/13.png" alt="PX4_dev_13" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/14.png" alt="PX4_dev_14" />
</div>

---

## よくある問題のトラブルシューティング

問題が発生した場合は、まずこちらを確認してください。

- **シリアルポートで「Permission Denied」:** ユーザーを`dialout`グループへ追加＆再起動を忘れている可能性。上記「ハードウェア接続」を参照。
- **`/dev/ttyTHS1`で「No such file or directory」:** 物理配線を再確認。FCの電源は入っていますか？`ls /dev/ttyTHS*`でデバイス名を確認。
- **MAVROSが起動時にクラッシュ:** `install_geographiclib_dataset.sh` を未実行の可能性。方法3のコマンドを実行。
- **`colcon build` が失敗:** まず `source /opt/ros/humble/setup.bash` を実行してROS 2環境を読み込む。依存関係が複雑な場合は `rosdep install --from-paths src --ignore-src -r -y` を検討。

## 最後に

これで、Jetson OrinとPX4フライトコントローラ間の通信を実現する3つの強力な方法を理解できました。最適解はプロジェクトのアーキテクチャ、要求性能、開発スピードによって異なります。トレードオフを理解し、堅牢な基盤を構築しましょう。

ハッピーフライング！🚁

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。できるだけスムーズにご利用いただけるよう、複数のサポート窓口をご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
