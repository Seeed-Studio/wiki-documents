---
description: XIAO ESP32C6 の Zigbee 機能を使用して、Zigbee および zbt-1 を介して Home Assistant に接続する方法を紹介します。
title: XIAO ESP32C6 Zigbee を介して Home Assistant に接続する
image: https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/0.webp
slug: /ja/xiaoc6_zigbee_led_ha
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO ESP32C6 の Zigbee を介して Home Assistant に接続する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/1.png" style={{width:1000, height:'auto'}}/></div>

Zigbee デバイスをスマートホームエコシステムに統合することは、Zigbee の低消費電力、信頼性、使いやすさのおかげでますます人気が高まっています。この Wiki では、**XIAO ESP32C6** を Zigbee 機能を介して **Home Assistant** に接続する方法を説明します。このガイドの終わりまでに、XIAO ESP32C6 が Zigbee デバイスとして機能し、Home Assistant のダッシュボードから直接制御できるデモを構築することができます。

このチュートリアルでは、Espressif の Zigbee SDK (Arduino) を使用し、独自の Zigbee デバイスを開発して Home Assistant に統合する方法を示します。

## 必要な材料

このガイドに従うには、以下のものが必要です：

1. **Home Assistant Green**: スマートホームを管理するための専用の Home Assistant ハードウェアデバイス。  
2. **Home Assistant Connect ZBT-1**: Zigbee ネットワークの作成と通信を可能にする Zigbee コーディネーター。  
3. **XIAO ESP32C6**: Espressif の SDK を介して Zigbee 機能が有効になっている開発ボード。  

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
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## ステップバイステップガイド

:::tip
最初の2つのステップは、Home Assistant Connect ZBT-1の公式チュートリアルに基づいています。また、以下のリンクからそのチュートリアル内容を読むことができます。

[Home Assistant Connect ZBT-1 チュートリアル](https://connectzbt1.home-assistant.io/new-zigbee/)
:::

### ステップ 1. Home Assistant Green に Connect ZBT-1 をインストールする

Home Assistant Connect ZBT-1 を USB 延長ケーブルに接続します。その後、延長ケーブルを Home Assistant Green に接続します。

:::caution
USB 3.0 ポートや USB 3.0 ドライブは、Home Assistant Connect ZBT-1 が提供する 2.4 GHz プロトコルを含む通信に干渉を引き起こす可能性があります。USB 延長ケーブルを使用し、Home Assistant Connect ZBT-1 を干渉源から離れた場所に配置することが重要です。
:::

1. Home Assistant インターフェースで **設定 (Settings)** に移動します。
2. **デバイスとサービス (Devices & Services)** に進み、Zigbee 統合を見つけます。
3. Connect ZBT-1 が検出されているはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/2.png" style={{width:1000, height:'auto'}}/></div>

4. **追加 (ADD)** を選択します。
5. ダイアログで **Zigbee** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/3.png" style={{width:600, height:'auto'}}/></div>

6. **送信 (Submit)** を選択して、Connect ZBT-1 統合のセットアップを完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/4.png" style={{width:600, height:'auto'}}/></div>

7. Connect ZBT-1 は Zigbee コーディネーターとして設定されました。

### ステップ 2. Connect ZBT-1 を使用して新しい Zigbee ネットワークを作成する

1. Home Assistant インターフェースで **設定 (Settings)** に移動します。  
2. **デバイスとサービス (Devices & Services)** に進み、Zigbee 統合を見つけます。  
3. Connect ZBT-1 が Zigbee Home Automation 統合に表示されます。**追加 (ADD)** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/5.png" style={{width:1000, height:'auto'}}/></div>

4. 確認のために **送信 (Submit)** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/6.png" style={{width:400, height:'auto'}}/></div>

5. **ネットワークを作成 (Create network)** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/7.png" style={{width:350, height:'auto'}}/></div>

6. Zigbee コーディネーターを初期化し、Zigbee デバイスとのペアリング準備を行うためのプロンプトに従います。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/8.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 3. XIAO ESP32C6 に Zigbee サンプルプログラムをフラッシュする

1. **Arduino IDE をセットアップする**:

- 最新バージョンの Arduino IDE をインストールし、Espressif ボードパッケージを追加して XIAO ESP32C6 をサポートします。

:::note
XIAO ESP32C6 を初めて使用する場合は、以下のウィキリンクを参照して開発ボードを正しく追加してください。

[XIAO ESP32C6 の始め方](https://wiki.seeedstudio.com/ja/xiao_esp32c6_getting_started/)
:::

2. **Zigbee_On_Off_Light サンプルをロードする**:

- 正しい開発ボードモデルを選択してください: **XIAO_ESP32C6**。
- Arduino IDE で `Zigbee_On_Off_Light` サンプルを開きます。

:::tip
最新の esp32-arduino オンボードパッケージを使用することをお勧めします。これにより、最新で安定した Zigbee サンプルプログラムを利用できます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/9.png" style={{width:800, height:'auto'}}/></div>

- この例では、XIAO ESP32C6 のオンボード LED 単色ライトを使用します。そのため、プログラム内の LED ピンを変更する必要があります。コードを修正して `RGB_BUILTIN` を `LED_BUILTIN` に置き換え、オンボード LED インジケーターを使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/10.png" style={{width:800, height:'auto'}}/></div>

3. **Zigbee 設定を構成する**:

- Zigbee モードを **ZIGBEE_MODE_ED**（エンドデバイス）に設定します。  
- Zigbee 用のパーティションスキームを調整します:  
    `ツール -> パーティションスキーム (Tools -> Partition Scheme)` に移動し、**Zigbee 4MB with spiffs** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/11.png" style={{width:700, height:'auto'}}/></div>

4. **プログラムをアップロードする**:

- XIAO ESP32C6 を USB-C ケーブルでコンピュータに接続します。  
- 修正したサンプルプログラムをコンパイルして XIAO ESP32C6 にアップロードします。
- XIAO が正常に動作している場合、以下のシリアルメッセージが表示されます。XIAO が常に再起動している場合は、Zigbee 設定が正しいか、開発ボードのオンボードパッケージのバージョンを更新してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/12.png" style={{width:700, height:'auto'}}/></div>

### ステップ 4. Home Assistant で XIAO ESP32C6 を検出する

1. Home Assistant インターフェースで **設定 -> デバイスとサービス (Settings -> Devices & Services)** に移動します。  
2. Zigbee 統合（名前: ZHA）を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/13.png" style={{width:800, height:'auto'}}/></div>

3. **Nabu Casa HA Connect ZBT-1** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/14.png" style={{width:1000, height:'auto'}}/></div>

4. Connect ZBT-1 のデバイス詳細ページ内で、**このデバイス経由でデバイスを追加 (ADD DEVICE VIA THIS DEVICE)** をクリックし、Zigbee のデバイス検出とペアリングページに進みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/15.png" style={{width:1000, height:'auto'}}/></div>

5. 少し待つと、XIAO ESP32C6 が検出された Zigbee デバイスのリストに表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/16.png" style={{width:1000, height:'auto'}}/></div>

このページで名前と場所を設定することができます。

6. 次に、このデバイスを ZHA のデバイスページで見つけ、エンティティをダッシュボードに追加することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/17.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 5. XIAO ESP32C6 を ダッシュボード に追加する

1. XIAO ESP32C6 が検出されたら、Home Assistant のダッシュボードに追加します。  
2. これで、Home Assistant から直接 XIAO ESP32C6 を制御できるようになります（例: オンボード LED の切り替え）。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/18.png" style={{width:1000, height:'auto'}}/></div>

## 結論

Espressif は多様な Zigbee デバイスタイプと広範な Zigbee SDK を提供しており、開発者が簡単に独自の Zigbee デバイスを作成できるようにしています。このチュートリアルを通じて、XIAO ESP32C6 を Zigbee を使用して Home Assistant に統合し、スマートホームエコシステムにカスタムデバイスを追加する方法を学びました。  

Espressif の Zigbee SDK の柔軟性を活用することで、さまざまな用途や機能に対応する独自の Zigbee デバイスを構築し、Home Assistant にシームレスに追加して集中管理することができます。楽しい開発をお楽しみください！

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>