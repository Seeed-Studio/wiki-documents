---
description: Seeed Studio IoTボタンをESPHomeに接続する方法
title: IoTボタンをESPHomeに接続する方法
keywords:
  - ESPHOME
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.jpg
slug: /ja/iot_botton_connect_to_esphome
last_update:
  date: 05/15/2025
  author: qiuyu wei
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.jpg" style={{width:600, height:'auto'}}/></div>

この例では、IoTボタンをホームアシスタントに接続し、IoTボタンを使用してブザーのオンとオフを制御する方法を紹介します。

### 必要な材料

<div class="table-center">
  <table align="center">
    <tr>
      <th>IoTボタン</th>
      <th>XIAO ESP32C3</th>
      <th>XIAO用拡張ボードベース</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/XIAOESP32C3.png" style={{width:170, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/BOARD.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://files.seeedstudio.com/seeed_iot_botton_connect_to_esphome" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
       <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Seeed Studio XIAO用の強力な機能拡張ボードで、ブザーを含む豊富な周辺機器を備えています。XIAO ESP32C3はマスターコントロールとして選ばれましたが、もちろん自由にカスタマイズして独自のケースを作成することも可能です！

## ホームアシスタントにESPHomeをインストールする

 **ステップ 1**. **設定をクリック** --> **アドオン** --> **ADD-ON STORE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/1.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/1.5.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 2**. **ESPHome**を検索します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/2.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 3**. **INSTALL**をクリックし、その後**START**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/3.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 4**. インストール成功

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/4.png" style={{width:1000, height:'auto'}}/></div>

## ESPHomeにIoTボタンを追加する

**ステップ 5**. **+NEW DEVICE** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/5.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 6**. **NEXT** をクリックし、デバイスに任意の名前を付けます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/6.png" style={{width:800, height:'auto'}}/></div>

**ステップ 7**. デバイスタイプを選択します。

ここでは、ESPHomeが現在ESP32C6をサポートしていないため、リストにESP32C6のオプションが表示されません。そのため、現時点では最初のオプションを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/7.png" style={{width:580, height:'auto'}}/></div>

**ステップ 8**. デバイスが正常に追加されたら、最後に **SKIP** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/8.png" style={{width:780, height:'auto'}}/></div>

## IoTボタンの設定

### IoTボタンにプログラムを追加する

**ステップ 9**. ESPHomeページに対応するデバイスカードが表示されるので、**EDIT** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/9.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 10**. 編集画面に入ったら、**ESP32** を設定する必要があります。以下のコードを直接コピーできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/10.png" style={{width:1000, height:'auto'}}/></div>

```yaml
esp32:
  board: esp32-c6-devkitc-1
  variant: esp32c6
  flash_size: 4MB # upload.flash_size
  framework:
    type: esp-idf
    platform_version: 6.5.0 # ESP32-C6には少なくとも6.4が必要

    # Tasmotaのリリースバージョン5.1.3は動作しますが、公式リリースは動作しません LOL
    version: 5.1.3
    source: https://github.com/tasmota/esp-idf/releases/download/v5.1.3.240325/esp-idf-v5.1.3.zip

    # フラッシュサイズを修正するために、IDFフラッシュサイズも設定されていることを確認します（デフォルトでは2MBになっていました?!?）
    # 詳細は https://github.com/esphome/issues/issues/5404 を参照
    sdkconfig_options:
      CONFIG_ESPTOOLPY_FLASHSIZE_4MB: y
```

**ステップ 11**. 対応するコンポーネントを追加し、デバイスのピンを初期化および設定します。

:::note
WIFIのSSIDとパスワードの設定はサーバーと同じにする必要があります。同じネットワークに接続されることを確認してください！
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/11.png" style={{width:1000, height:'auto'}}/></div>

```yaml
binary_sensor:
  - platform: gpio
    pin:
      number: GPIO3
      mode: INPUT_PULLUP
      inverted: True
    name: "IoT Button"
```

**ステップ 12**. 上記の手順を完了したら、右上の **INSTALL** をクリックし、**Plug into this computer** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/12.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 13**. その後、しばらく待機してください。待機時間が終了したら、**Download project** をクリックし、**Factory format** を選択してプロジェクトファイルをダウンロードします。その後、**Open ESPHome Web** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.2.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 14**. この時点で、IoTボタンをUSB経由でコンピュータに接続し、**CONNECT** をクリックして**正しいシリアルポート**を選択します！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.3.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 15**. ESPHomeプロジェクトの**ファクトリーファイル**を取得します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/15.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 16**. すべてが正常に進行した場合、以下の画像が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/16.png" style={{width:1000, height:'auto'}}/></div>

### IoTボタンをダッシュボードに追加する

**ステップ 17**. **Settings** をクリックし、**Devices & services** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/17.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 18**. 対応するデバイスを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/18.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 19**. 追加するIoTボタンを選択し、デバイスの地域を選択して **FINISH** をクリックします！ IoTボタンがホームページの**ダッシュボード**に表示されます！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/19.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/20.png" style={{width:1000, height:'auto'}}/></div>

## IoT ボタンでブザーを制御

### ブザーへのプログラム追加

:::note
ホームアシスタントにブザーを追加していることを確認してください。追加方法については上記のプロセスを参照してください。
:::

まず、上記のプロセスに基づいてブザーをESPHomeに追加する必要があります。その後、プログラムの作成を開始できます。以下の例を参考にできますが、実際のピンの違いに注意してください。

```yaml
esphome:
  name: buzzer
  friendly_name: buzzer

esp32:
  board: esp32-c3-devkitm-1
  framework:
    type: arduino

# ロギングを有効化
logger:

# Home Assistant APIを有効化
api:
  encryption:
    key: "k13mbm4GBgaxe8yf5IHojn7am3imn0pFZrUwRe3IbRQ="

ota:
  - platform: esphome
    password: "ba8bb045e584ddeb1803debf2cce1311"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # Wi-Fi接続が失敗した場合のフォールバックホットスポット（キャプティブポータル）を有効化
  ap:
    ssid: "Buzzer Fallback Hotspot"
    password: "EL0JOgoaGbQq"

captive_portal:

output:
  - platform: ledc
    id: my_buzzer
    pin: GPIO5

switch:
  - platform: template
    name: "Buzzer"
    turn_on_action:
      - output.turn_on: my_buzzer
      - output.ledc.set_frequency:
          id: my_buzzer
          frequency: 1000Hz
      - output.set_level:
          id: my_buzzer
          level: 50%
    turn_off_action:
      - output.turn_off: my_buzzer
```

### オートメーション

**ステップ 20**. **Automations & scenes** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/21.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 21**. **CREATE AUTOMATION** をクリックして、新しいオートメーションを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/22.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 22**. 以下の設定を参考にして、独自のオートメーションを作成できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/23.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/24.png" style={{width:1000, height:'auto'}}/></div>

上記の手順を正常に完了した場合、ボタンを押すとブザーが鳴り、2秒間持続します。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>