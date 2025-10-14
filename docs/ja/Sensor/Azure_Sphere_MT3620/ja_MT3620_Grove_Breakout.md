---
description: MT3620 Grove Breakout
title: MT3620 Grove Breakout
keywords:
- Azure_Sphere_MT3620_Development_Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/MT3620_Grove_Breakout
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![画像をここに挿入](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/MT3620-Grove-Breakout-front.jpg)

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/MT3620-Grove-Breakout-back.jpg)

[Azure Sphere MT3620 Development Kit](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html)と[MT3620 Mini Dev Board](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)は、どちらも[Microsoft Azure Sphere](https://azure.microsoft.com/en-us/services/azure-sphere/)技術によって動作します。MT3620 Grove Breakoutは、新しいMT3620 Mini Dev Board向けに設計された拡張ブレイクアウトボードです。  
MT3620 Grove Breakoutは、ユーザーがセンサーモジュール-[SeeedStudio Groves](https://www.seeedstudio.com/grove.html)を迅速なプロトタイピングアプリケーションに簡単に適用できるようにします。このアプリケーションはMT3620 Mini Dev Boardを基盤として構築されています。

[Azure Sphere SDK](http://aka.ms/AzureSphereSDK)がまだMT3620でADCをサポートしていないため、このブレイクアウトはMT3620のI2Cポートと外部ADCの間のインターフェースとして機能し、アナログポートからアナログデータを読み取る方法を提供します。アナログポートに加えて、このブレイクアウトにはUART、SPI、I2C、GPIOポートがあります。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- 12ビットADC、I2C互換シリアルインターフェース
- 8つのGroveコネクタ
  - 2 x UART
  - 2 x I2C
  - 2 x アナログ
  - 2 x デジタル（4 GPIO）

## ハードウェア概要

**インターフェース**

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/103100123_hardware_overview.png)

- **<font face="" size="3" font color="ff0000">①</font> 拡張ヘッダー1:**
24ピン。詳細なピン定義についてはボードのピンマップを参照してください。

- **<font face="" size="3" font color="ff0000">②</font> アナログ:**
2つのGroveアナログポート。入力信号電圧は3.3V未満である必要があります。

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/Analog.png)

- **<font face="" size="3" font color="ff0000">③</font> I2C:**
2つのGrove I2Cポート。I2CポートはUART1と同じピンを共有しているため、I2CまたはUART1のどちらか一方しか選択できません。

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/I2C.png)

- **<font face="" size="3" font color="ff0000">④</font> UART:**
2つのGrove UARTポート。I2CポートはUART1と同じピンを共有しているため、I2CまたはUART1のどちらか一方しか選択できません。SPI0ポートはUART0と同じピンを共有しているため、SPI0またはUART0のどちらか一方しか選択できません。

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/UART.png)

- **<font face="" size="3" font color="ff0000">⑤</font> デジタル:**
4つのデジタルGPIOポート。動作電圧は3.3Vです。

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/GPIO.png)

- **<font face="" size="3" font color="ff0000">⑥</font> 拡張ヘッダー2:**
拡張ヘッダー1の複製です。ヘッダーにワイヤをはんだ付けすることができます。拡張ヘッダー1と接続されていないピンが2つあります。J5のピン1は直接3.3Vに接続されており、J5のピン6は接続されていません。

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/extention_header_1.png)

- **<font face="" size="3" font color="ff0000">⑦</font> SPI:** SPI0ポートはUART0と同じピンを共有しているため、SPI0またはUART0のどちらか一方しか選択できません。

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/SPI.png)

- **<font face="" size="3" font color="ff0000">⑧</font> AD7992BRMZ-1:** MT3620 Mini Dev BoardはSPI、UART、I2C、デジタル機能をサポートしていますが、ADC機能はサポートしていません。そのため、MT3620 Grove Breakoutには[AD7992](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/AD7992.pdf)チップが含まれています。このチップは12ビット、低消費電力、逐次近似ADCで、I2C互換インターフェースを備えています。そして、MT3620 Mini Dev BoardのI2Cインターフェースに接続されます。

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/I2C_ADC.png)

- **<font face="" size="3" font color="ff0000">⑨</font> I2Cアドレス選択:**
論理入力として機能します。AD7992の3つのI2Cアドレスのうち1つを選択するためのアドレス選択入力です。GNDに接続されている場合、I2Cアドレスは0x23です。3.3Vに接続されている場合、I2Cアドレスは0x24です。

**ボードピンマップ**

<a href="https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/pinmap2.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/pinmap2.png"/></a>

**ボード寸法**

長さ: 57mm 幅: 52mm 高さ: 10mm

## アプリケーション

- 家庭/建物/施設
- 自動化
- セキュリティ
- 機器管理
- 公共サービス
- 公共安全

:::tip
Azure Sphere が実際の環境でどのように機能するかを理解するには、[Contoso, Ltd のシナリオ](https://learn.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere)を参照してください。
:::

## Azure Sphere のインストール

まだ使用されていない MT3620 Mini Dev Board をお持ちの場合は、[これらの手順](https://docs.microsoft.com/en-us/azure-sphere/install/overview)を最初に完了してセットアップを行ってください。

## MT3620 Mini Dev Board デモ

MT3620 Mini Dev Board と [Seeed Grove システム](https://wiki.seeedstudio.com/ja/Grove_System/)を組み合わせたデモを構築しました。

**デモ#1**: MT3620 Mini Dev Board は MCU として動作し、Grove-Button と USB to TTL アダプタに接続します。その後、MT3620 Mini Dev Board と USB to TTL アダプタを PC の USB ポートに接続します。コードをダウンロードした後、Grove-Button を押して USB to TTL アダプタから "Hello World!" を入力すると、Visual Studio の出力ウィンドウから "Hello World!" を受信できます。

**デモ#2**: MT3620 Mini Dev Board は MCU として動作し、Grove-Light Sensor と USB を Grove-Rotary Sensor に接続します。その後、MT3620 Mini Dev Board を PC の USB ポートに接続します。コードをダウンロードした後、Grove-Light Sensor の上に手を動かしたり、Grove-Rotary Sensor を回転させたりすると、両方のセンサーのアナログ出力を Visual Studio の出力ウィンドウで確認できます。

**デモ#3**: MT3620 Mini Dev Board は MCU として動作し、Grove - OLED Display 1.12" に接続します。その後、MT3620 Mini Dev Board を PC の USB ポートに接続します。コードをダウンロードした後、Grove-Button を押して USB to TTL アダプタから "Hello World!" を入力すると、Visual Studio の出力ウィンドウから "Hello World!" を受信できます。

### デモ#1 デジタルと UART

**部品リスト**

| MT3620 Mini Dev Board | MT3620 Grove Breakout |  Grove - Button | USB To Uart 5V&3V3 |
|--------------|-------------|-----------------|-----------------|
|![画像を挿入](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png)|![画像を挿入](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/button_s.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/usb_2_ttl_s.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[今すぐ購入](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Button-p-766.html)|[今すぐ購入](https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html)|

**ハードウェア接続**

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo1_connection.png)

:::caution
MT3620 Mini Dev Board を MT3620 Grove Breakout に正しい向きで差し込んでください。MT3620 Grove Breakout 上の USB シルクスクリーンが MT3620 Mini Dev Board の USB ポートと同じ側にあることを確認してください。
:::

- ステップ 1. Grove-Button を MT3620 Grove Breakout の D1 に接続します。
- ステップ 2. USB To Uart アダプタを [Grove-Cable](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html) を介して MT3620 Grove Breakout の UART0 に接続します。
- ステップ 3. MT3620 Grove Breakout を MT3620 Mini Dev Board に差し込みます。
- ステップ 4. MT3620 Mini Dev Board と USB to TTL アダプタを PC の USB ポートに接続します。

:::caution
USB to TTL アダプタの電圧スイッチが **5v** に設定されていることを確認してください。USB to TTL アダプタの RX を MT3620 Grove Breakout の TX に、USB to TTL アダプタの TX を MT3620 Grove Breakout の RX に、また GND を接続してください。5V を接続しないでください。
:::

**ソフトウェア**

- ステップ 1. [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo) をダウンロードします。
- ステップ 2. Azure_Sphere_Demo 内の **Samples\UART0** を開きます。
- ステップ 3. **UART0.sln** をダブルクリックします。
- ステップ 4. アプリケーションのプロジェクト名を右クリックし、**Properties > C/C++ > General > Additional Include Directories** を選択します。
- ステップ 5. **下矢印 > Edit... > New Line** アイコンをクリックし、**UART0** のパスを修正して **Select Folder > OK > OK** をクリックします。
- ステップ 6. アプリケーションプロジェクトに移動し、**References** を右クリックして **Add References** を選択し、**Projects** を選択して **UART0** のチェックボックスをクリックし、**OK** をクリックします。
- ステップ 7. アプリケーションのプロジェクト名を右クリックし、**General > Target API Set** を選択し、チェックボックスをクリックして **1+Beta1902** に設定します（**Visual Studio Community バージョン**を使用している場合）。**Enterprise バージョン**を使用している場合はこのステップをスキップしてください。
- ステップ 8. **Remote GDB Debugger** をクリックします。
- ステップ 9. COM モニターツールを開き、USB to TTL アダプタのシリアルポートを選択します。
- ステップ 10. Grove-Button を押して COM モニターツールから "Hello World!" を送信します。
- ステップ 11. Visual Studio の出力ウィンドウに以下のメッセージが表示されます。

```
UART received 12 bytes: 'Hello World!'.
UART received 2 bytes: '
'.
UART received 12 bytes: 'Hello World!'.
UART received 2 bytes: '
'.
UART received 12 bytes: 'Hello World!'.
UART received 2 bytes: '
```

### デモ#2 アナログ

**部品リスト**

| MT3620 Mini Dev Board | MT3620 Grove Breakout |  Grove-Light Sensor | Grove - Rotary Angle Sensor |
|--------------|-------------|-----------------|-----------------|
|![画像を挿入](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png)|![画像を挿入](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/light_sensor_s.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Rotary_Angle_Sensor_s.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[今すぐ購入](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html)|

**ハードウェア接続**

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo2_connection.png)

:::caution
MT3620 Mini Dev BoardをMT3620 Grove Breakoutに正しい向きで接続してください。MT3620 Grove BreakoutにはUSBのシルクスクリーンがあり、これがMT3620 Mini Dev BoardのUSBポートと同じ側にあることを確認してください。
:::

- ステップ 1. Grove-Rotary Angle SensorをMT3620 Grove BreakoutのA0に接続します。
- ステップ 2. Grove-Light SensorをMT3620 Grove BreakoutのA1に接続します。
- ステップ 3. MT3620 Grove BreakoutをMT3620 Mini Dev Boardに接続します。
- ステップ 4. MT3620 Mini Dev BoardをPCのUSBポートに接続します。

**ソフトウェア**

- ステップ 1. [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo)をダウンロードします。
- ステップ 2. Azure_Sphere_Demo内の**Samples\AD7991_I2C**を開きます。
- ステップ 3. **AD7991_I2C.sln**をダブルクリックします。
- ステップ 4. アプリケーションのプロジェクト名を右クリックし、**Properties > C/C++ > General > Additional Include Directories**を選択します。
- ステップ 5. **下矢印 > Edit... > New Line**アイコンをクリックし、**AD7991_I2C**のパスを修正して、**Select Folder > OK > OK**をクリックします。
- ステップ 6. アプリケーションプロジェクトで右クリックして**References > Add References**を選択し、**Projects**を選択して**AD7991_I2C**のチェックボックスをクリックし、**OK**をクリックします。
- ステップ 7. アプリケーションのプロジェクト名を右クリックし、**General > Target API Set**を選択します。**Visual Studio Communityバージョン**を使用している場合はチェックボックスをクリックして**1+Beta1902**に設定します（Enterpriseバージョンを使用している場合はこのステップをスキップしてください）。
- ステップ 8. **Remote GDB Debugger**をクリックし、Grove-Light Sensorの上に手をかざしたり、Grove-Rotary Angle Sensorを回転させたりすると、Visual Studioの出力ウィンドウに両センサーのアナログ出力が表示されます。

```
A0: 192 A1: 2646
A0: 162 A1: 2644
A0: 1489 A1: 2647
A0: 621 A1: 2644
A0: 227 A1: 2648
A0: 33 A1: 2644
A0: 0 A1: 2647
A0: 0 A1: 2647
A0: 0 A1: 2647
A0: 0 A1: 2644
A0: 373 A1: 2643
A0: 885 A1: 2646
A0: 1717 A1: 2647
A0: 2057 A1: 2647
```

### デモ#3 I2C

**部品リスト**

| MT3620 Mini Dev Board | MT3620 Grove Breakout |  Grove-OLED Display 1.12'' V2 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/oled_s.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[今すぐ購入](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-OLED-Display-1-12-V2.html)|

**ハードウェア接続**

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo3_connection.png)

:::caution
MT3620 Mini Dev BoardをMT3620 Grove Breakoutに正しい向きで接続してください。MT3620 Grove BreakoutにはUSBのシルクスクリーンがあり、これがMT3620 Mini Dev BoardのUSBポートと同じ側にあることを確認してください。
:::

- ステップ 1. Grove-OLED Display 1.12'' V2をMT3620 Grove BreakoutのI2Cに接続します。
- ステップ 2. MT3620 Grove BreakoutをMT3620 Mini Dev Boardに接続します。
- ステップ 3. MT3620 Mini Dev BoardをPCのUSBポートに接続します。

**ソフトウェア**

- ステップ 1. [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo)をダウンロードします。
- ステップ 2. Azure_Sphere_Demo内の**Samples\SeeedOLED_I2C**を開きます。
- ステップ 3. **SeeedOLED_I2C.sln**をダブルクリックします。
- ステップ 4. アプリケーションのプロジェクト名を右クリックし、**Properties > C/C++ > General > Additional Include Directories**を選択します。
- ステップ 5. **下矢印 > Edit... > New Line**アイコンをクリックし、**SeeedOLED_I2C**のパスを修正して、**Select Folder > OK > OK**をクリックします。
- ステップ 6. アプリケーションプロジェクトで右クリックして**References > Add References**を選択し、**Projects**を選択して**SeeedOLED_I2C**のチェックボックスをクリックし、**OK**をクリックします。
- ステップ 7. アプリケーションのプロジェクト名を右クリックし、**General > Target API Set**を選択します。**Visual Studio Communityバージョン**を使用している場合はチェックボックスをクリックして**1+Beta1902**に設定します（Enterpriseバージョンを使用している場合はこのステップをスキップしてください）。
- ステップ 8. **Remote GDB Debugger**をクリックすると、OLEDに情報が表示されます。

```
Remote debugging from host 192.168.35.1
Seeed oled 96*96 demo.
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/res/MT3620%20grove%20breakout%20v1.0.sch.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[製品]** [Azure Sphere へようこそ](https://docs.microsoft.com/en-us/azure-sphere/)
- **[ライブラリ]** [Azure Sphere デモライブラリ](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- **[Eagle]** [MT3620 Grove Breakout 回路図](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/res/MT3620%20grove%20breakout%20v1.0.sch.zip)
- **[PDF]** [MT3620 Grove Breakout 回路図](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/res/MT3620%20grove%20breakout%20v1.0.pdf)
- **[データシート]** [WF-M620 RSC1 データシート](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/WF-M620-RSC1_datasheet_20190314.pdf)
- **[データシート]** [AD7992 データシート](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/res/AD7992.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>