---
description: XIAO ESP32C6のZigbee機能の使用方法を紹介し、ZigbeeとZBT-1を介してHome Assistantに接続する方法を説明します。
title: XIAO ESP32C6のZigbeeを介してHome Assistantに接続する
image: https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/0.webp
slug: /ja/xiaoc6_zigbee_led_ha
last_update:
  date: 01/21/2025
  author: Citric
---

# XIAO ESP32C6のZigbeeを介してHome Assistantに接続する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/1.png" style={{width:1000, height:'auto'}}/></div>

Zigbeeデバイスのスマートホームエコシステムへの統合は、Zigbeeの低消費電力、信頼性、使いやすさにより、ますます人気が高まっています。このwikiでは、**XIAO ESP32C6**をそのZigbee機能を介して**Home Assistant**に接続する方法をガイドします。このガイドの最後には、XIAO ESP32C6がHome Assistantのダッシュボードから直接制御できるZigbeeデバイスとして動作する実用的なデモが完成します。

このチュートリアルでは、EspressifのZigbee SDK（Arduino）の使用を強調し、独自のZigbeeデバイスを開発してHome Assistantに統合する方法を実演します。

## 必要な材料

このガイドに従うには、以下が必要です：

1. **Home Assistant Green**：スマートホーム管理専用のHome Assistantハードウェアデバイス。
2. **Home Assistant Connect ZBT-1**：Zigbeeネットワークの作成と通信を可能にするZigbeeコーディネーター。
3. **XIAO ESP32C6**：EspressifのSDKを介してZigbee機能が有効化された開発ボード。

<div class="table-center">
 <table align="center">
  <tr>
   <th>Home Assistant Connect ZBT-1</th>
   <th>XIAO ESP32C6</th>
   <th>Home Assistant Green</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/ZBT-1.png" style={{width:240, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:240, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-SkyConnect-p-5479.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>

</div>

## ステップバイステップガイド

:::tip
最初の2つのステップは、Home Assistant Connect ZBT-1の公式チュートリアルを参照しており、こちらのリンクからそのチュートリアル内容を読むこともできます。

[Home Assistant Connect ZBT-1 チュートリアル](https://connectzbt1.home-assistant.io/new-zigbee/)
:::

### ステップ1. Home Assistant GreenにConnect ZBT-1をインストールする

Home Assistant Connect ZBT-1をUSB延長ケーブルに接続します。延長ケーブルをHome Assistant Greenに接続します。

:::caution
USB 3.0ポートとUSB 3.0ドライブは、Home Assistant Connect ZBT-1が提供するものを含む2.4 GHzプロトコルに干渉を引き起こす可能性があります。USB延長ケーブルを使用し、Home Assistant Connect ZBT-1を干渉源から離れた場所に配置することが重要です。
:::

1. Home Assistantインターフェースで**Settings**に移動します。
2. **Devices & Services**に移動し、Zigbee統合を見つけます。
3. Connect ZBT-1が発見されているはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/2.png" style={{width:1000, height:'auto'}}/></div>

4. **ADD**を選択します。
5. ダイアログで**Zigbee**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/3.png" style={{width:600, height:'auto'}}/></div>

6. **Submit**を選択してConnect ZBT-1統合のセットアップを完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/4.png" style={{width:600, height:'auto'}}/></div>

7. Connect ZBT-1がZigbeeコーディネーターになりました。

### ステップ2. Connect ZBT-1を使用して新しいZigbeeネットワークを作成する

1. Home Assistantインターフェースで**Settings**に移動します。
2. **Devices & Services**に移動し、Zigbee統合を見つけます。
3. Connect ZBT-1がZigbee Home Automation統合に表示されます。**ADD**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/5.png" style={{width:1000, height:'auto'}}/></div>

4. 確認するために**Submit**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/6.png" style={{width:400, height:'auto'}}/></div>

5. **Create network**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/7.png" style={{width:350, height:'auto'}}/></div>

4. プロンプトに従ってZigbeeコーディネーターを初期化し、Zigbeeデバイスとのペアリングの準備をします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/8.png" style={{width:1000, height:'auto'}}/></div>

### ステップ3. XIAO ESP32C6にZigbeeサンプルプログラムをフラッシュする

1. **Arduino IDEのセットアップ**:

- Arduino IDEの最新バージョンをインストールし、EspressifボードパッケージをインクルードしてXIAO ESP32C6のサポートを追加します。

:::note
XIAO ESP32C6を初めて使用する場合は、以下のwikiリンクを読んで開発ボードを正しく追加してください。

[XIAO ESP32C6入門](https://wiki.seeedstudio.com/ja/xiao_esp32c6_getting_started/)
:::

2. **Zigbee_On_Off_Lightサンプルをロードする**:

- 正しい開発ボードモデルを選択してください：**XIAO_ESP32C6**。
- Arduino IDEから`Zigbee_On_Off_Light`サンプルを開きます。

:::tip
最新で安定したZigbeeサンプルプログラムを取得するために、最新のesp32-arduinoオンボードパッケージを使用することをお勧めします。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/9.png" style={{width:800, height:'auto'}}/></div>

- この例では、XIAO ESP32C6のオンボードLED単色ライトを使用するため、プログラムのLEDピンを変更する必要があります。オンボードLEDインジケーターを利用するために、`RGB_BUILTIN`を`LED_BUILTIN`に置き換えるようにコードを修正します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/10.png" style={{width:800, height:'auto'}}/></div>

3. **Zigbee設定の構成**:

- Zigbeeモードを**ZIGBEE_MODE_ED**（エンドデバイス）に設定します。
- Zigbeeのパーティションスキームを調整します：
    `Tools -> Partition Scheme`に移動し、**Zigbee 4MB with spiffs**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/11.png" style={{width:700, height:'auto'}}/></div>

4. **プログラムのアップロード**:

- XIAO ESP32C6をUSB-Cケーブルでコンピューターに接続します。
- 修正したサンプルプログラムをコンパイルしてXIAO ESP32C6にアップロードします。
- XIAOが正常に動作している場合、以下に示すシリアルメッセージが表示されるはずです。XIAOが常に再起動している場合は、Zigbee設定が正しいかどうかを確認するか、開発ボードオンボードパッケージのバージョンを更新してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/12.png" style={{width:700, height:'auto'}}/></div>

### ステップ4. Home AssistantでXIAO ESP32C6を発見する

1. Home Assistantインターフェースで**Settings -> Devices & Services**に移動します。
2. Zigbee統合（名前：ZHA）を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/13.png" style={{width:800, height:'auto'}}/></div>

3. **Nabu Casa HA Connect ZBT-1**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/14.png" style={{width:1000, height:'auto'}}/></div>

4. Connect ZBT-1のデバイス詳細ページ内で、**ADD DEVICE VIA THIS DEVICE**が表示されます。これをクリックしてZigbeeのデバイス検索とペアリングページに移動してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/15.png" style={{width:1000, height:'auto'}}/></div>

5. しばらく待つと、XIAO ESP32C6が発見されたZigbeeデバイスのリストに表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/16.png" style={{width:1000, height:'auto'}}/></div>

このページで名前と場所を設定できます。

6. その後、ZHAのデバイスページでこのデバイスを見つけて、そのエンティティをダッシュボードに追加できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/17.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 5. XIAO ESP32C6 をダッシュボードに追加する

1. XIAO ESP32C6 が検出されたら、Home Assistant ダッシュボードに追加します。
2. これで、Home Assistant から直接 XIAO ESP32C6（例：オンボード LED の切り替え）を制御できるようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/18.png" style={{width:1000, height:'auto'}}/></div>

## まとめ

Espressif は多様な Zigbee デバイスタイプと豊富な Zigbee SDK を提供しており、開発者が独自の Zigbee デバイスを簡単に作成できるようにしています。このチュートリアルに従うことで、Zigbee を使用して XIAO ESP32C6 を Home Assistant に統合し、スマートホームエコシステムにカスタムデバイスを追加する方法を学びました。

Espressif の Zigbee SDK の柔軟性により、様々なアプリケーションや機能に対応した独自の Zigbee デバイスの構築を開始でき、それらを Home Assistant にシームレスに追加して一元制御することができます。楽しい開発を！

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、様々なサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
