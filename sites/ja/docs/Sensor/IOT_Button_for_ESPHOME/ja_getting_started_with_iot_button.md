---
description: Seeed Studio IoT Button の使用開始
title: Seeed Studio IoT Button の使用開始
keywords:
  - IoT Button
  - ESP32-C6
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.webp
slug: /getting_started_with_seeed_iot_button
sku: 113110044
last_update:
  date: 04/08/2025
  author: Citric
createdAt: '2025-05-27'
updatedAt: '2026-01-19'
url: https://wiki.seeedstudio.com/ja/getting_started_with_seeed_iot_button/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-IoT-Button-p-6419.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## はじめに

IoT Button は、ESPHome（Wi-Fi 経由）と Zigbee を通じて Home Assistant との二重統合を提供する多機能スマートスイッチです。ESP32-C6 を搭載し、カスタマイズ可能な RGB LED インジケーター、複数のプレスパターンに対応するプログラム可能なイベントトリガー、USB-C 充電、柔軟な取り付けオプションを備えており、直感的なスマートホーム制御に必要なすべてを提供します。

このガイドでは、**V1 ハードウェア（ESPHome ファームウェアが出荷時にインストール済み）**または**V2 ハードウェア（Zigbee ファームウェアが出荷時にインストール済み）**のどちらをお持ちでも、IoT Button のセットアップ方法をご案内します。

### 特徴

- **Home Assistant 対応**: ESPHome または Zigbee Home Automation（ZHA）統合によるシームレスな統合。
- **1つのスイッチ、カスタマイズ可能なアクション**: シングルプレス、ダブルプレス、ロングプレスアクションをサポートし、異なる自動化をトリガーできます。
- **信頼性の高い電源供給**: 標準的な 18650 充電式バッテリーと便利な USB-C 充電ポートを搭載。
- **簡単な取り付けソリューション**: どこにでも設置でき、簡単にアクセスできるよう取り付け可能なコンパクトデザイン。
- **カスタマイズに対応**: 両方のハードウェアバージョンで ESPHome または Zigbee ファームウェアのフラッシュをサポートし、ニーズに最適なプロトコルを選択できます。

## ハードウェア概要

すべてを始める前に、製品の基本的なパラメータを把握することが非常に重要です。以下の表は、IoT Button の V1 と V2 両方の特性に関する情報を提供します。

<div class="table-center">
 <table align="center">
  <tr>
   <th>パラメータ</th>
   <th>説明</th>
  </tr>
  <tr>
   <td>MCU</td>
   <td>Espressif ESP32-C6</td>
  </tr>
  <tr>
   <td>フラッシュ</td>
   <td>4MB</td>
  </tr>
        <tr>
   <td>LED</td>
   <td>ユーザー RGB LED: WS2812B（GPIO19、GPIO18 の有効化が必要）<br />充電 LED: 緑<br />ユーザー LED（青）: GPIO2（V1）/ GPIO3（V2）<br />低バッテリー LED（赤）: GPIO14（<b>V2 のみ</b>）</td>
  </tr>
        <tr>
   <td>ワイヤレス</td>
   <td>2.4GHz Wi-Fi<br />Zigbee 3.0</td>
  </tr>
        <tr>
   <td>バッテリー</td>
   <td>3.6V Li-ion 18650 充電式バッテリー</td>
  </tr>
        <tr>
   <td>バッテリー監視</td>
   <td>電圧読み取り用 ADC（<b>V2 のみ</b>、GPIO1）</td>
  </tr>
        <tr>
   <td>充電インターフェース</td>
   <td>USB Type-C</td>
  </tr>
        <tr>
   <td>バッテリー保護</td>
   <td>逆極性保護</td>
  </tr>
        <tr>
   <td>ファームウェア更新</td>
   <td>OTA（Over-the-Air）サポート</td>
  </tr>
        <tr>
   <td>寸法</td>
   <td>92x32x25 mm</td>
  </tr>
 </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/3.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/4.png" style={{width:800, height:'auto'}}/></div>

## 使用開始

### ステップ 1: 初期セットアップ

IoT Button を初めて受け取った際は、使用前に初期アクティベーション手順を実行することが重要です。これは **V1 と V2 両方の**ハードウェアに適用されます。

1. 標準的な 5V USB Type-C データケーブルを使用して、IoT Button を電源（USB 充電器やコンピューターなど）に接続します。
2. **この初期電源接続は、内蔵バッテリーの保護回路をアクティベートするため重要です。**
3. **このアクティベーション手順なしでは、デバイスはバッテリー電源で正常に動作しません。**

:::note
アクティベーション処理には、準拠した 5V USB Type-C ケーブルを使用してください。非標準ケーブルを使用すると、適切にアクティベートされない場合があります。
:::

### ステップ 2: 接続方法の選択

IoT Button は Home Assistant への接続方法を 2 つ提供しています。選択は、お持ちのハードウェアバージョンまたはお好みのプロトコルによって決まります。

- **IoT Button V1** には **ESPHome** ファームウェアがプリロードされています。**方法 1** に従ってください。
- **IoT Button V2** には **Zigbee** ファームウェアがプリロードされています。**方法 2** に従ってください。

上級ユーザーの場合、どちらのハードウェアバージョンにもどちらのファームウェアもフラッシュできます。詳細については「高度な使用方法」セクションをご覧ください。

---

### 方法 1: ESPHome（Wi-Fi）統合

この方法は **V1 ハードウェア**のデフォルトで、IoT Button を Wi-Fi 経由で Home Assistant に接続したいユーザー向けです。

#### 1. Home Assistant のセットアップ

最適なパフォーマンスのため、Raspberry Pi や Home Assistant Green などのデバイスに [Home Assistant OS](https://www.home-assistant.io/installation/) をインストールすることをお勧めします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"3"}>Home Assistant Green を購入</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Yellow-Kit-with-selectable-CM4-p-5680.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"3"}>Home Assistant Yellow を購入</font></span></strong>
    </a>
</div><br />

Home Assistant が動作したら、アドオンストアから **ESPHome アドオン**がインストールされ、開始されていることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/5.png" style={{width:1000, height:'auto'}}/></div>

#### 2. ESPHome ファームウェアのフラッシュ/更新（必要に応じて）

デバイスはプリフラッシュされています。[最新のファームウェアバージョン](https://github.com/Seeed-Studio/xiao-esphome-projects/releases)に更新したい場合や、既存のファームウェアが破損している場合にのみ、この手順を実行する必要があります。

<Tabs>
<TabItem value='Web Tool' label='Web ツール'>

最も簡単な方法は、[**XIAO ESPHome Projects Firmware Flasher**](https://gadgets.seeed.cc/) を使用することです。

1. USB ケーブルで IoT Button をコンピューターに接続します。
2. フラッシャーページで「Seeed Studio IoT Button」を見つけ、**INSTALL** をクリックします。
3. ポップアップダイアログから正しい COM ポートを選択します。
4. ブラウザが自動的に最新の ESPHome ファームウェアをダウンロードし、デバイスにフラッシュします。

</TabItem>
<TabItem value='ESPHome Web' label='ESPHome Web'>

または、公式の [ESPHome Web](https://web.esphome.io/) ツールを使用することもできます。

1. [GitHub Releases ページ](https://github.com/Seeed-Studio/xiao-esphome-projects/releases)から最新の `*.factory.bin` ファームウェアファイルをダウンロードします。
2. IoT Button を PC に接続します。
3. [ESPHome Web](https://web.esphome.io/) ページにアクセスし、**CONNECT** をクリックして正しい COM ポートを選択します。
4. **INSTALL** をクリックし、ダウンロードした `.bin` ファイルを選択します。

</TabItem>
</Tabs>

#### 3. Wi-Fi と Home Assistant への接続

1. フラッシュ後、IoT Button は `seeedstudio-iot-button` という名前の Wi-Fi アクセスポイントを作成します。
2. スマートフォンまたはコンピューターからこの Wi-Fi ネットワークに接続します。
3. キャプティブポータルが自動的に開くはずです。開かない場合は、ブラウザで `192.168.4.1` にアクセスしてください。
4. ホーム Wi-Fi ネットワーク（SSID）を選択し、パスワードを入力します。ボタンがネットワークに接続されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/opt-for-wifi-ap.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

#### 4. Home Assistant でのデバイス追加

IoT Button が Home Assistant サーバーと同じネットワークに接続されると、自動的に検出されるはずです。

1. **Settings > Devices & Services** に移動します。
2. "Discovered" セクションで、`Seeed Studio IoT Button` が表示されるはずです。
3. **CONFIGURE** をクリックし、次に **SUBMIT** をクリックして、デバイスをエリア（例：Living Room）に割り当てます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/18.png" style={{width:1000, height:'auto'}}/></div>

#### 5. ESPHome での自動化作成

ESPHome ファームウェアは、異なるプレスパターンを個別のスイッチとして公開します。

1. **Settings > Automations & Scenes** に移動し、**CREATE AUTOMATION** をクリックします。
2. **Trigger** で `Device` を選択し、IoT Button を選択します。
3. リストからトリガータイプを選択します：
    - `Single-press action`
    - `Double-press action`
    - `Long-press action`
4. **Action** で、制御したいデバイスまたはサービス（例：`light.toggle`）を選択します。
5. 自動化を保存します。

---

### 方法 2: Zigbee 統合

この方法は **V2 ハードウェア**のデフォルトで、IoT Button を Zigbee メッシュネットワークに接続したいユーザー向けです。

#### 1. Home Assistant での Zigbee セットアップ

ペアリング前に、Home Assistant インスタンスに接続された Zigbee コーディネーターが必要です。

1. **Zigbee コーディネーターのインストール**: [Home Assistant SkyConnect](https://www.seeedstudio.com/Home-Assistant-SkyConnect-p-5479.html) などのコーディネーターをサーバーに接続します。
2. **Zigbee Home Automation（ZHA）のセットアップ**:
    - **Settings > Devices & Services** に移動します。
    - **Add Integration** をクリックし、**Zigbee Home Automation** を検索します。
    - プロンプトに従って、コーディネーターで ZHA をセットアップします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/5.png" style={{width:1000, height:'auto'}}/></div>

#### 2. IoT Button と Home Assistant のペアリング

1. Home Assistant で、**Zigbee Home Automation** 統合ページに移動します。
2. **Add Device** をクリックして、コーディネーターをペアリングモードにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/15.png" style={{width:1000, height:'auto'}}/></div>

3. IoT Button のボタンを一度押して、デバイスを起動しペアリングを開始します。
    - ペアリングしない場合、デバイスがスリープ状態になっている可能性があります。再度押してください。
    - 強制的にペアリングするには、ボタンを **5 秒以上**長押しします。これにより工場出荷時リセットがトリガーされ、デバイスが直接ペアリングモードに入ります。RGB LED が点滅して確認されます。
4. Home Assistant は **Seeed Studio IoT_Button** としてデバイスを検出するはずです。
5. デバイスは複数のエンティティとして表示されます：リアルタイム状態用のバイナリセンサーと、異なるクリックアクション用の複数のスイッチ。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/iot_button_zigbee/2.png" style={{width:1000, height:'auto'}}/></div>

#### 3. Zigbee でオートメーションを作成

ペアリングが完了したら、ボタンのアクションに基づいてオートメーションを作成できます。

1. **Settings > Automations & Scenes** に移動し、**CREATE AUTOMATION** をクリックします。
2. **Trigger** で `Device` を選択し、IoT Button を見つけます。
3. ZHA はクリックをデバイスアクションとして公開します。リストから希望するトリガーを選択します。例：
    - `"remote_button_short_press"`
    - `"remote_button_double_press"`
    - `"remote_button_long_press"`
4. 実行したい **Action** を設定します。
5. オートメーションを保存します。

**ダブルクリック**でライトを切り替える Home Assistant YAML のオートメーション例：

```yaml
alias: IoT Button Double Click - Toggle Living Room Light
description: ""
trigger:
  - platform: device
    domain: zha
    device_id: YOUR_DEVICE_ID_HERE # Replace with your button's device ID
    type: "remote_button_double_press" # The exact type may vary, select it from the UI
action:
  - service: light.toggle
    target:
      entity_id: light.living_room
mode: single
```

## 高度な使用法：ファームウェアの切り替え

IoT Button の主要な特徴の一つは、その柔軟性です。**V1 または V2 ハードウェアのいずれでも**、ESPHome と Zigbee ファームウェア間で切り替えることができます。

- （推奨されません）**ESPHome に切り替える場合**：ボタンが Zigbee ファームウェアを実行していて Wi-Fi を使用したい場合は、**方法 1、ステップ 2** のフラッシュ手順に従って ESPHome ファームウェアをインストールするだけです。

- **Zigbee に切り替える場合**：ボタンが ESPHome を実行していて Zigbee ネットワークに参加したい場合は、[Arduino IDE を使用して Zigbee ファームウェア](https://wiki.seeedstudio.com/ja/seeed_iot_button_with_zigbee/)をコンパイルしてフラッシュする必要があります。フラッシュ後、**方法 2** のペアリング手順に従ってください。

## リソース

- **[GITHUB]** [Seeed Studio IoT Button V2 Github リポジトリ](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/seeedstudio-iot-button)
- **[PCB 設計ファイル]** [Seeed Studio IoT Button V2 KiCad プロジェクト](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed%20IoT%20Button-C6%20v2.0_SCH&PCB_250721.zip)
- **[回路図]** [Seeed Studio IoT Button V2 回路図](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed%20IoT%20Button-C6%20v2.0_SCH_250721.pdf)


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
