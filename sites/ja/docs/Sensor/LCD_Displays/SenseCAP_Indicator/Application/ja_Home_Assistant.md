---
description: MQTT 経由で SenseCAP Indicator を Home Assistant に接続する
title: Home Assistant - SenseCAP Indicator
keywords:
  - SenseCAP Indicator
  - Home Assistant
  - MQTT
  - ESP32S3
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-ha-thumbnail.jpg
slug: /SenseCAP_Indicator_Application_Home_Assistant
sku: E23010426,E24121301
sidebar_position: 1
last_update:
  date: 05/29/2026
  author: Spencer
createdAt: '2023-05-24'
updatedAt: '2026-05-29'
url: https://wiki.seeedstudio.com/ja/SenseCAP_Indicator_Application_Home_Assistant/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# MQTT 経由で Home Assistant と連携する SenseCAP Indicator

このガイドでは、SenseCAP Indicator を Home Assistant のコンパニオンパネルとして動作させる方法を説明します。セットアップ後は、Indicator が内蔵センサーの測定値を MQTT を通じて Home Assistant に送信し、Home Assistant からはスイッチやスライダーのコマンドを Indicator の画面へ送り返すことができます。

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/PKMcutZDjDg" title="SenseCAP Indicator Home Assistant demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="button-container">
<a class="button-style" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html">
        今すぐ入手
</a>
</div>

## 作成するもの

この連携では、3 つの固定された MQTT トピックを使用します：

| 方向 | トピック | 用途 |
| --- | --- | --- |
| Indicator から Home Assistant | `indicator/sensor` | 温度、湿度、CO2、tVOC の測定値を送信 |
| Home Assistant から Indicator | `indicator/switch/set` | スイッチおよびスライダーのコマンドを送信 |
| Indicator から Home Assistant | `indicator/switch/state` | 現在のスイッチおよびスライダーの状態を送信 |

Home Assistant 側では、4 つのセンサーエンティティ、6 つのスイッチエンティティ、2 つの number エンティティを作成します。Indicator 側では、Wi-Fi と MQTT ブローカーを設定し、画面をローカルのコントロールパネルとして使用します。

## 前提条件

- SenseCAP Indicator D1 または互換性のある SenseCAP Indicator ハードウェア
- 動作中の Home Assistant インスタンス
- Home Assistant と Indicator の両方から到達可能な MQTT ブローカー
- ファームウェアをソースからビルドする場合は ESP-IDF v5.4.x がインストールされていること
- 書き込みおよびシリアルモニタ用の USB ケーブル

続行する前に、ボードに不慣れな場合は [SenseCAP Indicator ユーザーガイド](/ja/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator) を読んでください。

## 1. Home Assistant を準備する

すでに Home Assistant と MQTT ブローカーをお持ちの場合は、[ステップ 3: ファームウェアをビルドして書き込む](#3-ファームウェアをビルドして書き込む) に進んでかまいません。

Home Assistant OS は、Mosquitto ブローカーや File editor などの Add-on をサポートしているため、最も簡単な導入方法です。

:::note
Home Assistant には複数のインストールモードがあります。Home Assistant Container を使用している場合、Add-on は利用できないため、Mosquitto や EMQX などの MQTT ブローカーを別途動かす必要があります。
:::

<Tabs>
<TabItem value="Home Assistant Green" label="Home Assistant Green">

<div align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA/HA_Green.png" style={{ width: 680, height: 'auto', "border-radius": '6.66px' }}/></div>

[Home Assistant Green](https://www.home-assistant.io/green) は、Home Assistant を使い始めるためのプラグアンドプレイな方法です。

</TabItem>
<TabItem value="Home Assistant Yellow" label="Home Assistant Yellow">

<div align="center"><img width={680} src="https://www.home-assistant.io/images/yellow/home-assistant-yellow-exploded-and-labeled.png" style={{ width: 680, height: 'auto', "border-radius": '6.66px' }}/></div>

[Home Assistant Yellow](https://www.home-assistant.io/yellow) は、Raspberry Pi Compute Module 4 ベースの Home Assistant ハブです。

</TabItem>
</Tabs>

お使いのデバイス向けに、公式の [Home Assistant インストールガイド](https://www.home-assistant.io/installation/) に従ってください。オンボーディングが完了すると、Home Assistant のダッシュボードが表示されるはずです。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Installed.png"/></div>

## 2. Mosquitto をインストールして MQTT を有効化する

### Add-on をインストールする

Home Assistant OS では、次の 2 つの Add-on をインストールします：

- MQTT メッセージング用の **Mosquitto broker**
- Home Assistant の Web UI から `configuration.yaml` を編集するための **File editor**

**Settings** > **Add-ons** > **Add-on Store** に移動し、両方の Add-on をインストールします。

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Setting.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Add-ons.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Press_Add.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add-on_Store.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

利便性のために、File editor では **Show in sidebar** を有効にしておきます。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_editor_show.png"/></div>

インストール後、両方の Add-on が表示されているはずです。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Two_Adds.png"/></div>

### MQTT インテグレーションを有効にする

**Settings** > **Devices & services** > **Integrations** に移動し、**MQTT** を検索してセットアップフローに従います。

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Devices.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Config_MQTT.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

:::tip
Home Assistant がブローカーを自動検出しない場合は、ブローカーのホストを手動で入力してください。Mosquitto Add-on ではなく外部ブローカーを使用している場合によくある状況です。
:::

### MQTT 認証情報を作成する

MQTT ブローカーが認証を必要とする場合は、Indicator 用のユーザー名とパスワードを作成します。Mosquitto broker Add-on でユーザーを追加し、その認証情報を手元に控えておきます。後で Indicator に入力します。

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_User.png" style={{width:480, height:'auto'}} alt="Add User Button"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Create_User.png" style={{width:480, height:'auto'}} alt="Create User Form"/></div></td>
    </tr>
  </table>
</div>

## 3. ファームウェアをビルドして書き込む

現在の Home Assistant 用ファームウェアは、`sensecap-indicator-ha` リポジトリで管理されています。

```bash
git clone https://github.com/Love4yzp/sensecap-indicator-ha
cd sensecap-indicator-ha
```

ESP-IDF v5.4.x をインストールし、シェルで `IDF_PATH` をエクスポートします。その後、ビルド、書き込み、シリアルモニタの起動を行います：

```bash
./dev build
./dev flash
./dev monitor
```

シリアルモニタを終了するには、`Ctrl-]` を押します。

:::tip
`./dev flash` はシリアルポートを自動検出します。ポートを指定する必要がある場合は、`./dev flash -p /dev/ttyUSB0` を実行するか、お使いの OS に対応するシリアルデバイス名を使用してください。
:::

<details>
<summary>ESP-IDF コマンドを手動で実行する場合</summary>

ESP-IDF を直接呼び出したい場合：

```bash
. "$IDF_PATH/export.sh"
idf.py build
idf.py -p /dev/ttyUSB0 -b 460800 flash monitor
```

ESP32-S3 ファームウェアは ESP-IDF v5.4.x と LVGL 9 を使用します。特に `CONFIG_LV_MEM_CUSTOM=y`、PSRAM 120 MHz OCT モード、CPU 240 MHz、QIO 120 MHz フラッシュなど、プロジェクトの `sdkconfig.defaults` の設定を維持してください。

</details>

## 4. Indicator で Wi-Fi と MQTT を設定する

書き込み後、Indicator のタッチスクリーンで Wi-Fi と MQTT を設定します。MQTT ブローカーアドレスは、Home Assistant が使用しているブローカーを指す必要があります。

MQTT はシリアルコンソールから設定することもできます：

| コマンド | 説明 |
| --- | --- |
| `mqtthelp` | ブローカー、トピック、ペイロードの例を表示 |
| `haconfig` | 現在の MQTT および Home Assistant 設定を表示 |
| `setmqtt -a <addr>` | ブローカーアドレスを設定 |
| `setmqtt -a <addr> -c <client-id> -u <user> -p <pass>` | ブローカーアドレス、クライアント ID、ユーザー名、パスワードを設定 |

例：

```text
setmqtt -a 192.168.1.10 -c indicator-01 -u mqtt_user -p mqtt_password
setmqtt --addr mqtt://192.168.1.10:1883
setmqtt --addr mqtt://broker.emqx.io
```

`setmqtt` が成功すると、設定は不揮発性ストレージに保存され、MQTT クライアントが自動的に再起動します。

:::caution
Indicator と Home Assistant は、同じ MQTT ブローカーに到達できなければなりません。異なるネットワークや VLAN 上にある場合は、ルーティング、ファイアウォールルール、およびブローカーのリスナー設定を確認してください。
:::

## 5. MQTT エンティティを Home Assistant に追加する

Home Assistant には、ファームウェアのトピックに一致するエンティティ定義が必要です。**File editor** を開き、`configuration.yaml` を選択し、トップレベルの `mqtt:` キーの下に次のブロックを追加します。

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_File_editor.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_Choose_config.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_edit.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

:::caution
`configuration.yaml` 全体を置き換えないでください。すでに `mqtt:` セクションがある場合は、その既存セクション内に `sensor`、`switch`、`number` エントリを追記してください。
:::

<details>
<summary>MQTT エンティティの YAML</summary>

```yaml
mqtt:
  sensor:
    - unique_id: indicator_temperature
      name: "Indicator Temperature"
      state_topic: "indicator/sensor"
      suggested_display_precision: 1
      unit_of_measurement: "°C"
      value_template: "{{ value_json.temp }}"
    - unique_id: indicator_humidity
      name: "Indicator Humidity"
      state_topic: "indicator/sensor"
      unit_of_measurement: "%"
      value_template: "{{ value_json.humidity }}"
    - unique_id: indicator_co2
      name: "Indicator CO2"
      state_topic: "indicator/sensor"
      unit_of_measurement: "ppm"
      value_template: "{{ value_json.co2 }}"
    - unique_id: indicator_tvoc
      name: "Indicator tVOC"
      state_topic: "indicator/sensor"
      unit_of_measurement: ""
      value_template: "{{ value_json.tvoc }}"
  switch:
    - unique_id: indicator_switch1
      name: "Indicator Switch1"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch1 }}"
      payload_on: '{"switch1":1}'
      payload_off: '{"switch1":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch2
      name: "Indicator Switch2"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch2 }}"
      payload_on: '{"switch2":1}'
      payload_off: '{"switch2":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch3
      name: "Indicator Switch3"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch3 }}"
      payload_on: '{"switch3":1}'
      payload_off: '{"switch3":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch4
      name: "Indicator Switch4"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch4 }}"
      payload_on: '{"switch4":1}'
      payload_off: '{"switch4":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch6
      name: "Indicator Switch6"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch6 }}"
      payload_on: '{"switch6":1}'
      payload_off: '{"switch6":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch7
      name: "Indicator Switch7"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch7 }}"
      payload_on: '{"switch7":1}'
      payload_off: '{"switch7":0}'
      state_on: 1
      state_off: 0
  number:
    - unique_id: indicator_switch5
      name: "Indicator Switch5"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      command_template: '{"switch5": {{ value }} }'
      value_template: "{{ value_json.switch5 }}"
    - unique_id: indicator_switch8
      name: "Indicator Switch8"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      command_template: '{"switch8": {{ value }} }'
      value_template: "{{ value_json.switch8 }}"
```

</details>

ファイルを保存し、**Developer Tools** > **YAML** に移動して YAML 設定を再読み込みします。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_ALL_YAML.png" alt="Developer Tools の YAML 設定"/></div>

:::tip
エンティティが表示されない場合は、まず **Check configuration** を使用してください。設定が有効であるにもかかわらずエンティティが表示されない場合は、Home Assistant を再起動し、Indicator が `indicator/sensor` にパブリッシュしていることを確認してください。
:::

## 6. ダッシュボードを作成する

新しいエンティティは任意のダッシュボードに追加できます。Indicator を分離しておくために、**Settings** > **Dashboards** から専用のダッシュボードを作成します。

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_dashboard_info.png" style={{width:480, height:'auto'}} alt="ダッシュボードを作成"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard.png" style={{width:480, height:'auto'}} alt="新しいダッシュボード"/></div></td>
    </tr>
  </table>
</div>

ダッシュボードを開き、**Edit Dashboard** を選択してから、**Raw configuration editor** を使用します。

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_SenseCAP.png" style={{width:480, height:'auto'}} alt="ダッシュボードを編集"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard.png" style={{width:480, height:'auto'}} alt="制御を取得"/></div></td>
    </tr>
  </table>
</div>

<details>
<summary>ダッシュボード YAML</summary>

:::caution
この YAML は Lovelace ダッシュボードの Raw configuration editor 用です。`configuration.yaml` に貼り付けないでください。
:::

```yaml
views:
  - title: Indicator device
    icon: ''
    badges: []
    cards:
      - graph: line
        type: sensor
        detail: 1
        icon: mdi:molecule-co2
        unit: ppm
        entity: sensor.indicator_co2
      - graph: line
        type: sensor
        entity: sensor.indicator_temperature
        detail: 1
        icon: mdi:coolant-temperature
      - graph: line
        type: sensor
        detail: 1
        entity: sensor.indicator_humidity
      - graph: line
        type: sensor
        entity: sensor.indicator_tvoc
        detail: 1
        icon: mdi:air-filter
      - type: entities
        entities:
          - entity: switch.indicator_switch1
          - entity: switch.indicator_switch2
          - entity: switch.indicator_switch3
          - entity: switch.indicator_switch4
          - entity: number.indicator_switch5
          - entity: switch.indicator_switch6
          - entity: switch.indicator_switch7
          - entity: number.indicator_switch8
        title: Indicator control
        show_header_toggle: false
        state_color: true
```

</details>

ダッシュボード設定を保存します。

<div class="table-center">
   <table align="center">
      <tr>
         <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard_config.png" style={{width:480, height:'auto'}} alt="Raw Configuration Editor"/></div>
         </td>
         <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard_Save.png" style={{width:480, height:'auto'}} alt="設定を保存"/></div>
         </td>
      </tr>
   </table>
</div>

これで Home Assistant 上に Indicator のセンサー値とコントロールが表示されるはずです。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_data_show.gif"/></div>

## MQTT プロトコルリファレンス

MQTT トラフィックをデバッグしたり、独自の Home Assistant カードを作成したい場合にこのセクションを使用してください。

| トピック | ペイロード例 |
| --- | --- |
| `indicator/sensor` | `{"temp":"23.5","humidity":"45","co2":"450","tvoc":"100"}` |
| `indicator/switch/set` | `{"switch1":1,"switch5":50}` |
| `indicator/switch/state` | `{"switch1":1,"switch2":0}` |

センサーキー：

| キー | 意味 |
| --- | --- |
| `temp` | 温度 |
| `humidity` | 相対湿度 |
| `co2` | CO2 濃度 |
| `tvoc` | 総揮発性有機化合物 |

制御キー：

| キー | Home Assistant エンティティタイプ | 範囲 |
| --- | --- | --- |
| `switch1` から `switch4`、`switch6`、`switch7` | `switch` | `0` または `1` |
| `switch5`、`switch8` | `number` | 整数値 |

## トラブルシューティング

| 症状 | 確認事項 |
| --- | --- |
| Home Assistant にエンティティが表示されない | YAML が `mqtt:` の下に追加されていることを確認し、その後 YAML を再読み込みするか Home Assistant を再起動します |
| センサー値が unknown のままになる | Indicator が Wi-Fi に接続され、`indicator/sensor` にパブリッシュしていることを確認します |
| コントロールが Indicator を更新しない | Home Assistant が `indicator/switch/set` にパブリッシュしており、Indicator が同じブローカーに接続されていることを確認します |
| MQTT ログインに失敗する | Indicator 上、または `setmqtt` を使用してブローカーアドレス、ユーザー名、パスワードを再入力します |
| シリアルコマンドが分かりにくい | シリアルコンソールで `mqtthelp` を実行します |

## 開発者向け情報

このファームウェアはデュアル MCU 設計を採用しています：

| MCU | 役割 |
| --- | --- |
| ESP32-S3 | ディスプレイ、タッチ、Wi-Fi、MQTT、Home Assistant ロジック、設定、およびコンソール |
| RP2040 | 内蔵および Grove センサーの取得を担当し、UART 経由で ESP32-S3 に中継 |

ESP32-S3 ファームウェアは ESP-IDF v5.4.x と LVGL 9 で構築されています。ランタイムドメインは model/view スライスとして構成されています：model コードは状態、NVS、MQTT、およびセンサー解析を管理し、view コードは LVGL オブジェクトとタッチスクリーンコールバックを管理します。

便利な開発者向けコマンド：

```bash
python3 scripts/dev_check.py --skip-build
python3 scripts/dev_check.py
./dev build
```

PC シミュレータは、ハードウェアを書き込みせずに UI レイアウトを反復する際に役立ちます：

```bash
cmake -S sim -B sim/build && cmake --build sim/build -j4
./sim/build/sensecap_sim
```

## リソース

- [sensecap-indicator-ha ファームウェアリポジトリ](https://github.com/Love4yzp/sensecap-indicator-ha)
- [SenseCAP Indicator ユーザーガイド](/ja/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator)
- [Home Assistant インストールガイド](https://www.home-assistant.io/installation/)
- [Home Assistant MQTT インテグレーション](https://www.home-assistant.io/integrations/mqtt)
- [ESP-IDF v5.4 入門ガイド](https://docs.espressif.com/projects/esp-idf/en/v5.4/esp32s3/get-started/)
- [SenseCAP Indicator SDK とサンプル](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32)

## 技術サポート

SenseCAP Indicator についてサポートが必要ですか？[Seeed Official Discord Channel](https://discord.gg/kpY74apCWj) を訪問するか、[SenseCAP Indicator SDK GitHub discussions](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) でディスカッションを開始してください。
