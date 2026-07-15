---
title: XIAO ESP32C5 Zigbee経由でHome Assistantに接続
keywords:
  - xiao
  - esp32c5
  - zigbee
  - idf
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_0_1.webp
slug: /xiao_esp32c5_zigbee_homeassistant
sku: 100010048
last_update:
  date: 1/9/2026
  author: Zeller
createdAt: '2026-01-12'
updatedAt: '2026-01-12'
url: https://wiki.seeedstudio.com/ja/xiao_esp32c5_zigbee_homeassistant/
---

# XIAO ESP32-C5 Zigbee経由でHome Assistantに接続

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_1_1.png" style={{width:800, height:'auto'}}/></div><br/>

Zigbeeデバイスのスマートホームエコシステムへの統合は、Zigbeeの低消費電力、信頼性、使いやすさにより、ますます人気が高まっています。このwikiでは、**XIAO ESP32-C5**をZigbee機能を介して**Home Assistant**に接続する方法をガイドします。このガイドの最後には、XIAO ESP32-C5がZigbeeデバイスとして動作し、Home Assistantのダッシュボードから直接制御できる実動デモが完成します。

このチュートリアルでは、EspressifのZigbee SDK（Arduino）の使用を強調し、独自のZigbeeデバイスを開発してHome Assistantに統合する方法を実演します。

## ハードウェア準備

このガイドに従うには、以下が必要です：

1. **Home Assistant Green**：スマートホーム管理用の専用Home Assistantハードウェアデバイス。
2. **Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E**：Zigbeeネットワークの作成と通信を可能にするZigbeeコーディネーター。
3. **XIAO ESP32-C5**：EspressifのSDKを介してZigbee機能が有効化された開発ボード。

<div class="table-center">
 <table align="center">
  <tr>
   <th>Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E</th>
   <th>XIAO ESP32-C5</th>
   <th>Home Assistant Green</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/6/-/6-113991082-sonoff-zigbee-3.0-usb-dongle-plus-feature.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/sonoff-zigbee-usb-dongle-plus-p-5510.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

:::tip

Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-Eをお持ちでない場合は、[**Home Assistant Connect ZBT-2**](https://www.seeedstudio.com/Home-Assistant-Connect-ZBT-2-p-6573.html)を選択することもできます。
:::

## ZigbeeとHome Assistantの統合

XIAO ESP32-C5をZigbeeデバイスとして使用してHome Assistantに接続する方法を説明します。

### ZBDongle-Eの接続

**Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E**をUSB延長ケーブルに挿入します。延長ケーブルを**Home Assistant Green**に接続します。

:::caution
USB 3.0ポートとUSB 3.0ドライブは、Home Assistant Connect ZBDongle-Eが提供するものを含む2.4 GHzプロトコルに干渉を引き起こす可能性があります。USB延長ケーブルを使用し、Home Assistant Connect ZBDongle-Eを干渉源から離れた場所に配置することが重要です。
:::

**ステップ 1.** Zigbeeデバイスの発見

- Setting -> Devices & services

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_1.png" style={{width:800, height:'auto'}}/></div><br/>

-Integrationsの下に、SONOFF Zigbee 3.0 USB Dongle Plus V2デバイスが表示されます。これがSonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-Eです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_2.png" style={{width:800, height:'auto'}}/></div><br/>

**ステップ 2.** Zigbeeデバイスの追加

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_3.png" style={{width:800, height:'auto'}}/></div><br/>

**ステップ 3.** Zigbeeネットワークの作成

- Submitをクリックした後、Zigbeeデバイスモードの選択を求められます。Home AssistantでZigbeeネットワークを作成することを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_4.png" style={{width:800, height:'auto'}}/></div><br/>

- 成功すると、Configuredの下にZigbeeデバイスが追加されたことがわかります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_5.png" style={{width:800, height:'auto'}}/></div><br/>

- ZBDongle-Eがコーディネーターとして設定され、Zigbeeエンドデバイスを制御できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_6.png" style={{width:800, height:'auto'}}/></div><br/>

### Zigbeeサンプルのフラッシュ

このデモンストレーションでは、Arduino IDEの`HA_On_Off_Light` Zigbeeサンプルを使用します。<br/>
Arduino IDEを使用したことがない場合は、[Seeed Studio XIAO ESP32-C5入門ガイド](https://wiki.seeedstudio.com/ja/xiao_esp32c5_getting_started/#software)を参照して開始してください。

**ステップ 1.** Arduino IDEから次のパスでサンプルを選択します：**File** -> **Examples** -> **Zigbee** -> **Zigbee_On_Off_Light**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_arduino_light.png" style={{width:800, height:'auto'}}/></div><br/>

**ステップ 2.** エンドデバイスとパーティションスキームの設定

- **Tools** -> **Zigbee Mode**をクリックし、モードを**Zigbee ED (End Device)**として選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_arduino_1.png" style={{width:800, height:'auto'}}/></div>

- パーティションスキームを選択し、**Tools** -> **Partition Scheme** -> **Zigbee 8MB with spiffs**に移動します

XIAO ESP32-C5のFLASHメモリは8MBです。パーティションスキームを選択する際は、**Zigbee 8MB with spiffs**を選択することをお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_arduino_2.png" style={{width:800, height:'auto'}}/></div><br/>

**ステップ 3.** LEDピンと名前の変更

- サンプル内のピン設定に関連するコードを見つけます。

```cpp
uint8_t led = RGB_BUILTIN;
```

- XIAO ESP32-C5では、オンボードUSER LEDはピンGPIO27に対応しており、これを変更する必要があります。

```cpp
uint8_t led = 27;
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_n2.png" style={{width:800, height:'auto'}}/></div><br/>

- XIAO ESP32-C5では、オンボードUSER LEDはピンGPIO27に対応しており、これを変更する必要があります。

```cpp
zbLight.setManufacturerAndModel("Espressif", "ZBLightBulb");
```

- 変更後

```cpp
zbLight.setManufacturerAndModel("XIAO-ESP32-C5", "ZBLightBulb");
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_n1.png" style={{width:800, height:'auto'}}/></div><br/>

**ステップ 4.** アップロード

変更されたピンを含むサンプルコードをXIAO ESP32-C5にアップロードします。

### Zigbeeネットワークへの接続

XIAO ESP32-C5（Zigbeeエンドデバイスとして設定）をHome Assistantで作成されたZigbeeネットワークに接続します。

**ステップ 1.** エンドデバイスの発見

- サンプルコードをXIAO ESP32-C5にフラッシュした後、自動的にZigbeeネットワークに参加します。Integrationsページを開くと、2つのZigbeeデバイスが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_7.png" style={{width:800, height:'auto'}}/></div><br/>

- 1つはコーディネーターデバイス（Home Assistant Greenに接続されたZBDongle-E）で、もう1つはエンドデバイス（XIAO-ESP32-C5 ZBLightBulb）です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_8.png" style={{width:800, height:'auto'}}/></div><br/>

:::tip
Zigbeeネットワークにより速く安定して参加するために、パッケージのFPCフレキシブルアンテナをXIAO ESP32-C5に接続できます。
:::

**ステップ 2.** ダッシュボードに追加

- **XIAO-ESP32-C5 ZBLightBulb**デバイスをクリックして、ダッシュボードに追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_9.png" style={{width:800, height:'auto'}}/></div><br/>

- ダッシュボードで**XIAO-ESP32-C5 ZBLightBulb**デバイスを見つけることができ、そこから制御コマンドを送信できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_10.png" style={{width:800, height:'auto'}}/></div><br/>

### 効果の実演

- XIAO ESP32-C5エンドデバイスがZigbeeネットワークに正常に参加すると、シリアルモニターに表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_11.png" style={{width:800, height:'auto'}}/></div><br/>

- 実際の効果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_2.gif" style={{width:300, height:'auto'}}/></div>

## まとめ

Espressifは多様なZigbeeデバイスタイプと広範なZigbee SDKを提供しており、開発者が独自のZigbeeデバイスを簡単に作成できます。このチュートリアルに従うことで、Zigbeeを使用してXIAO ESP32-C5をHome Assistantに統合し、スマートホームエコシステムにカスタムデバイスを追加する方法を学びました。

Espressif Zigbee SDK の柔軟性により、様々なアプリケーションや機能向けの独自の Zigbee デバイスの構築を開始し、集中制御のために Home Assistant にシームレスに追加することができます。楽しい開発を！

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、様々なサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
