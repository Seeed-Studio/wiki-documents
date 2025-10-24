---
description: MT3620 Mini Dev Board
title: MT3620 Mini Dev Board
keywords:
- Azure_Sphere_MT3620_Development_Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/MT3620_Mini_Dev_Board
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![画像を挿入](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product.png)

MT3620 Mini Dev Boardは、Seeedが以前リリースした[Azure Sphere MT3620 Development Kit](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html)の軽量版です。Azure Sphereの概要については、こちらのリンクをご参照ください：[Azure Sphere](https://azure.microsoft.com/en-us/services/azure-sphere/)。

このボードは、より小型で拡張性が高く、コストを抑えたい開発者のニーズに応えるために開発されました。この開発ボードはMT3620モジュールをベースにしており、ハードウェア設計の難易度を大幅に簡略化しています。[MT3620モジュール](https://www.seeedstudio.com/MT3620-Module-AI-Link-WF-M620-RSC1-p-2920.html)は、当社のパートナーである[AI-Link](http://www.ilinkthings.com/microsoft)によって開発されました。開発者はこの設計を簡単に自身のプロジェクトに再利用することができます。この開発ボードは、他のマザーボードや拡張ボードに簡単に差し込めるよう、2つのシングルローピンヘッダーを採用しています。フル機能のAzure Sphere MT3620 Development Kitとは異なり、この開発ボードはシステムハードウェア周辺リソースを削減し、開発者に必要なハードウェアリソースのみを提供するように設計を最適化しています。ハードウェア仕様に関しては、2.4G Wi-Fiのみをサポートし、I2Sおよび一部のGPIOポートを削減しています。

**MT3620 Mini Dev Boardの新しい特徴**

- MT3620モジュール（WF-M620-RSA1）をベースに構築
- ボードサイズを50mm×80mm×16mmから34mm×60mm×19mmに縮小
- 必要なLEDインジケーターとボタンを保持
- アドオン用途により適したボード形状

以下の図は、フル機能の開発ボードと新しいミニ開発ボードのサイズ比較を示しています：

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/compare.png)

MT3620にはAzure Sphereオペレーティングシステムがプリインストールされており、Azure Sphere Security Serviceと連携してセキュアなIoTプラットフォームを構築するよう設計されています。Azure Sphere OSとセキュリティサービスは以下を提供します：

- 任意のウェブサービスに対する証明書ベースのデバイス認証
- ソフトウェア認証とセキュアブート
- 障害報告による脅威検出
- 継続的なセキュリティアップデート
- 統合されたセキュアなエンドツーエンドのIoTソリューション

MT3620のソフトウェア開発は、強力なMicrosoft Visual Studio IDEを使用してサポートされています。Visual StudioとAzure Sphere拡張機能をインストールし、開発ボードをUSB経由でPCに接続することで、これまでにないレベルのセキュリティを備えたIoTアプリケーションの開発を開始できます。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

:::caution

1. 返品ポリシー：この製品は一度のみアクティベート可能です。パッケージを開封した後の返品はSeeedでは受け付けません。保証と返品についてはこちらをご確認ください。パッケージ開封後に品質問題が発生した場合は、Seeedサポートチーム（support@seeed.cc）にお問い合わせください。

2. オープンソースライセンス：この製品に含まれるソフトウェアには、GPL、LGPL、またはその他のオープンソースライセンスの下でライセンスされている著作権ソフトウェアが含まれています。詳細は[aka.ms/AzureSphereSDK](https://aka.ms/AzureSphereSDK)をご覧いただくか、order@seeed.ccにメールを送信してソースコードを入手してください。
:::

## 特徴

- Azure Sphere: IoTデバイス向けのエンドツーエンドセキュリティ。
- Wi-Fi 802.11 b/g/n。
- オンチップRAMとフラッシュを備えたトライコアマイクロコントローラー。
- Microsoft Visual Studio開発環境。
- デバイスのライフタイムにわたるオンライン認証と更新。
- ピンヘッダーでUART、I2C、SPI、ADC、GPIOリソースを拡張可能。

## 仕様

**ハードウェア**

<table class="tg">
  <tr>
    <th class="tg-0pky">説明</th>
    <th class="tg-0pky">値</th>
  </tr>
  <tr>
    <td class="tg-c3ow" rowspan="2">MCU<br />(MT3620モジュール使用)</td>
    <td class="tg-0pky">1 *ARM Cortex A7コア @500MHz , 4MB RAM</td>
  </tr>
  <tr>
    <td class="tg-0pky">2* ARM Cortex M4コア @200MHz , 64KB RAM</td>
  </tr>
  <tr>
    <td class="tg-c3ow" rowspan="4">ISU</td>
    <td class="tg-0pky">ISU 0はSPI0またはUART0またはI2C0として構成、ISU 1はSPI1またはUART1またはI2C1として構成</td>
  </tr>
  <tr>
    <td class="tg-0pky">- I2Cは最大1MHzで動作</td>
  </tr>
  <tr>
    <td class="tg-0pky">- SPIは最大40MHzで動作</td>
  </tr>
  <tr>
    <td class="tg-0pky">- UARTは最大3Mbpsで動作</td>
  </tr>
  <tr>
    <td class="tg-0pky">接続性</td>
    <td class="tg-0pky">802.11 b/g/n Wi-Fi</td>
  </tr>
  <tr>
    <td class="tg-0pky">ADC</td>
    <td class="tg-0pky">3 *12ビットADC入力I/O</td>
  </tr>
  <tr>
    <td class="tg-0pky">RTC</td>
    <td class="tg-0pky">1* RTC（CR1220 3Vバッテリーホルダー付き）</td>
  </tr>
  <tr>
    <td class="tg-0pky">USB</td>
    <td class="tg-0pky">1 *Micro USBポート（電源供給およびデバッグ用）、5V/1A</td>
  </tr>
  <tr>
    <td class="tg-0pky" rowspan="3">LED</td>
    <td class="tg-0pky">1* 赤色LED -&gt; 電源</td>
  </tr>
  <tr>
    <td class="tg-0lax">1 *緑色LED -&gt; FTDIステータス</td>
  </tr>
  <tr>
    <td class="tg-0lax">1* 緑色LED -&gt; ユーザー制御（Wi-Fiステータスやその他の用途に設定可能）</td>
  </tr>
  <tr>
    <td class="tg-0lax">ボタン</td>
    <td class="tg-0lax">1*リセットボタン</td>
  </tr>
  <tr>
    <td class="tg-0pky">動作温度</td>
    <td class="tg-0pky">-40~85°C</td>
  </tr>
  <tr>
    <td class="tg-0pky">寸法</td>
    <td class="tg-0pky">L:34mm*W:60mm*H:19mm<br /></td>
  </tr>
  <tr>
    <td class="tg-0pky">認証</td>
    <td class="tg-0pky">CE / FCC / MIC / RoHS<br /></td>
  </tr>
</table>

**ソフトウェア**

<table class="tg">
  <tr>
    <td class="tg-0pky">IDE</td>
    <td class="tg-0pky">Visual Studio</td>
  </tr>
  <tr>
    <td class="tg-0lax">システム</td>
    <td class="tg-0lax">Windows10</td>
  </tr>
  <tr>
    <td class="tg-0lax">プログラミング言語</td>
    <td class="tg-0lax">C</td>
  </tr>
</table>

## サポート

リアルタイムアプリを構築する場合、以下のすべてをプログラムすることが可能です。

- I2C
- 2xARM Cortex-M4 with FPU
- ADC
- PWM
- I2S （[M4 with FPU](https://d86o2zu8ugzlg.cloudfront.net/mediatek-craft/documents/MT3620-M4-User-Manual.pdf) を参照してください）

高レベルOSアプリを構築する場合、ADCとPWMを使用することが可能です。

## ハードウェア概要

**ボード図**

<a href="https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/sys.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/sys.jpg"/></a>

**ボードピンマップ**

<a href="https://files.seeedstudio.com/products/102110267/img/MT3620 Mini Dev Board Pinmap-20200331.jpg" target="_blank"><img src="https://files.seeedstudio.com/products/102110267/img/MT3620 Mini Dev Board Pinmap-20200331.jpg"/></a>

## アプリケーション

- 家庭/建物/施設
- 自動化
- セキュリティ
- 機器管理
- 公共サービス
- 公共安全

:::tip
Azure Sphere が実際の環境でどのように機能するかを理解するには、[Contoso, Ltdのシナリオ](https://learn.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere)を参照してください。
:::

## Azure Sphere のインストール

未使用の MT3620 Mini Dev Board をお持ちの場合は、[これらの手順](https://docs.microsoft.com/en-us/azure-sphere/install/overview)を最初に完了してセットアップしてください。

## MT3620 Mini Dev Board デモ

MT3620 Mini Dev Board と [Seeed Grove システム](https://wiki.seeedstudio.com/ja/Grove_System/) を組み合わせた3つのデモを用意しました。

**デモ#1**: MT3620 Mini Dev Board をMCUとして使用し、Grove-ButtonとUSB to TTLアダプタに接続します。その後、MT3620 Mini Dev Board と USB to TTL アダプタをPCのUSBポートに接続します。コードをダウンロードした後、Grove-Buttonを押してUSB to TTLアダプタから「Hello World!」を入力すると、Visual Studioの出力ウィンドウから「Hello World!」を受信できます。

**デモ#2**: MT3620 Mini Dev Board をMCUとして使用し、Grove-Light SensorとGrove-Rotary Sensorに接続します。その後、MT3620 Mini Dev Board をPCのUSBポートに接続します。コードをダウンロードした後、Grove-Light Sensorの上に手をかざしたり、Grove-Rotary Sensorを回転させたりすると、Visual Studioの出力ウィンドウで両センサーのアナログ出力を確認できます。

**デモ#3**: MT3620 Mini Dev Board をMCUとして使用し、Grove - OLED Display 1.12" に接続します。その後、MT3620 Mini Dev Board をPCのUSBポートに接続します。コードをダウンロードした後、Grove-Buttonを押してUSB to TTLアダプタから「Hello World!」を入力すると、Visual Studioの出力ウィンドウから「Hello World!」を受信できます。

**MT3620 Grove Breakout**：MT3620 Mini Dev Board は SPI、UART、I2C、デジタル機能をサポートしていますが、ADC機能はサポートしていません。そのため、MT3620 Grove Breakout には [AD7992](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/AD7992.pdf) チップが含まれています。このチップは、I2C互換インターフェースを備えた12ビットの低消費電力逐次近似型ADCです。これをMT3620 Mini Dev BoardのI2Cインターフェースに接続します。

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/adc_i2c.png)

### デモ#1 デジタルとUART

**部品リスト**

| MT3620 Mini Dev Board | MT3620 Grove Breakout |  Grove - Button |USB To Uart 5V&3V3 |
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/button_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/usb_2_ttl_s.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[今すぐ購入](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Button-p-766.html)|[今すぐ購入](https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html)|

**ハードウェア接続**

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo1_connection.png)

- ステップ1. Grove-Button を MT3620 Grove Breakout の D1 に接続します。
- ステップ2. USB To Uart アダプタを [Grove-Cable](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html) を介して MT3620 Grove Breakout の UART0 に接続します。
- ステップ3. MT3620 Grove Breakout を MT3620 Mini Dev Board に接続します。
- ステップ4. MT3620 Mini Dev Board と USB to TTL アダプタをPCのUSBポートに接続します。

:::caution
USB to TTL アダプタの電圧スイッチが **5v** に設定されていることを確認してください。USB to TTL アダプタの RX を MT3620 Grove Breakout の TX に、USB to TTL アダプタの TX を MT3620 Grove Breakout の RX に、さらに GND を接続してください。5V を接続しないでください。
:::

**ソフトウェア**

- ステップ1. [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo) をダウンロードします。
- ステップ2. Azure_Sphere_Demo 内の **Samples\UART0** を開きます。
- ステップ3. **UART0.sln** をダブルクリックします。
- ステップ4. アプリケーションのプロジェクト名を右クリックし、**Properties > C/C++ > General > Additional Include Directories** を選択します。
- ステップ5. **下矢印 > Edit... > New Line** アイコンをクリックし、**UART0** のパスを修正して **Select Folder > OK > OK** をクリックします。
- ステップ6. アプリケーションプロジェクトを右クリックし、**References > Add References** を選択し、**Projects** を選択して **UART0** のチェックボックスをクリックし、**OK** をクリックします。
- ステップ7. アプリケーションのプロジェクト名を右クリックし、**General > Target API Set** を選択します。**Visual Studio Community バージョン**を使用している場合はチェックボックスをクリックして **1+Beta1902** に設定します。Enterprise バージョンを使用している場合はこのステップをスキップしてください。
- ステップ8. **Remote GDB Debugger** をクリックします。
- ステップ9. COMモニターツールを開き、USB to TTL アダプタのシリアルポートを選択します。
- ステップ10. Grove-Button を押して COM モニターツールから「Hello World!」を送信します。
- ステップ11. Visual Studio の出力ウィンドウに以下のメッセージが表示されます。

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

| MT3620 Mini Dev Board | MT3620 Grove Breakout | Grove-Light Sensor | Grove - Rotary Angle Sensor |
|--------------|-------------|-----------------|-----------------|
|![画像をここに入力](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png)|![画像をここに入力](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg)|![画像をここに入力](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/light_sensor_s.jpg)|![画像をここに入力](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Rotary_Angle_Sensor_s.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[今すぐ購入](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html)|

**ハードウェア接続**

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo2_connection.png)

- ステップ 1. Grove-Rotary Angle Sensor を MT3620 Grove Breakout の A0 に接続します。
- ステップ 2. Grove-Light Sensor を MT3620 Grove Breakout の A1 に接続します。
- ステップ 3. MT3620 Grove Breakout を MT3620 Mini Dev Board に接続します。
- ステップ 4. MT3620 Mini Dev Board を PC の USB ポートに接続します。

**ソフトウェア**

- ステップ 1. [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo) をダウンロードします。
- ステップ 2. Azure_Sphere_Demo 内の **Samples\AD7991_I2C** を開きます。
- ステップ 3. **AD7991_I2C.sln** をダブルクリックします。
- ステップ 4. アプリケーションのプロジェクト名を右クリックし、**Properties > C/C++ > General > Additional Include Directories** を選択します。
- ステップ 5. **下矢印 > Edit... > New Line** アイコンをクリックし、**AD7991_I2C** のパスを修正して **Select Folder > OK > OK** をクリックします。
- ステップ 6. アプリケーションプロジェクトで右クリックして **References > Add References** を選択し、**Projects** を選択して **AD7991_I2C** のチェックボックスをクリックし、**OK** をクリックします。
- ステップ 7. アプリケーションのプロジェクト名を右クリックし、**General > Target API Set** を選択します。**Visual Studio Community バージョン**を使用している場合はチェックボックスをクリックして **1+Beta1902** に設定します。**Enterprise バージョン**を使用している場合はこのステップをスキップしてください。
- ステップ 8. **Remote GDB Debugger** をクリックし、Grove-Light Sensor の上に手を動かしたり、Grove-Rotary Angle Sensor を回転させたりすると、Visual Studio の出力ウィンドウで両方のセンサーのアナログ出力が確認できます。

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

| MT3620 Mini Dev Board | MT3620 Grove Breakout | Grove-OLED Display 1.12'' V2 |
|--------------|-------------|-----------------|
|![画像をここに入力](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png)|![画像をここに入力](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg)|![画像をここに入力](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/oled_s.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[今すぐ購入](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-OLED-Display-1-12-V2.html)|

**ハードウェア接続**

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo3_connection.png)

- ステップ 1. Grove-OLED Display 1.12'' V2 を MT3620 Grove Breakout の I2C に接続します。
- ステップ 2. MT3620 Grove Breakout を MT3620 Mini Dev Board に接続します。
- ステップ 3. MT3620 Mini Dev Board を PC の USB ポートに接続します。

**ソフトウェア**

- ステップ 1. [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo) をダウンロードします。
- ステップ 2. Azure_Sphere_Demo 内の **Samples\SeeedOLED_I2C** を開きます。
- ステップ 3. **SeeedOLED_I2C.sln** をダブルクリックします。
- ステップ 4. アプリケーションのプロジェクト名を右クリックし、**Properties > C/C++ > General > Additional Include Directories** を選択します。
- ステップ 5. **下矢印 > Edit... > New Line** アイコンをクリックし、**SeeedOLED_I2C** のパスを修正して **Select Folder > OK > OK** をクリックします。
- ステップ 6. アプリケーションプロジェクトで右クリックして **References > Add References** を選択し、**Projects** を選択して **SeeedOLED_I2C** のチェックボックスをクリックし、**OK** をクリックします。
- ステップ 7. アプリケーションのプロジェクト名を右クリックし、**General > Target API Set** を選択します。**Visual Studio Community バージョン**を使用している場合はチェックボックスをクリックして **1+Beta1902** に設定します。**Enterprise バージョン**を使用している場合はこのステップをスキップしてください。
- ステップ 8. **Remote GDB Debugger** をクリックすると、OLED に情報が表示されます。

```
Remote debugging from host 192.168.35.1
Seeed oled 96*96 demo.
```

## ドアリモートコントロールプロジェクト

これは Azure Sphere Secure Lock デモです。このボックスは、新しい MT3620 Mini Dev Board とその Grove Breakout ボードを使用して構築されています。MT3620 はデバイスのマイクロコントローラーとして機能し、クラウドへの安全なアクセスを提供します。

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Azure_Sphere_Demo_Secure_Lock.jpg)

<div align="center">セキュアロックの図<b></b><i></i></div>

**1. ハードウェアの動作を確認しましょう:**

ボックスの上部には警告灯があり、ドアが開いているときに点滅します。MT3620 はマイクロスイッチの状態を読み取り、ドアが開いているかどうかを認識します。ドアは電磁スイッチによってロックされています。2つのリレーがあり、どちらも MT3620 の GPIO によって駆動されます。1つのリレーは電磁石の電源を制御し、リレーを開くことで電磁石が解除されます。もう1つのリレーは警告灯を制御します。

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Azure%20Sphere%20Mini%20Dev%20Board%20Demo4.jpg)

<div align="center"><b>正面図</b><i></i></div>

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Azure%20Sphere%20Mini%20Dev%20Board%20Demo2.jpg)

<div align="center"><b>上面図</b><i></i></div>

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Azure%20Sphere%20Mini%20Dev%20Board%20Demo5.jpg)

<div align="center"><b>側面図</b><i></i></div>

**2. MT3620 Mini Dev Board**

- ステップ 1. [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo) をダウンロードします。
- ステップ 2. Azure Sphere のクイックスタートに従い、**Azure_Sphere_Demo\Demostrations\RemoteControlDoor\RemoteControlDoor.sln** プロジェクトを開きます。
- ステップ 3. Source Files 内の main.c を開きます。
- ステップ 4. wifiSsid と wifiPsk を行28と29で修正します。
- ステップ 5. デモを Azure IoT に接続します。
- ステップ 6. Build -> Rebuild Solution をクリックしてデバイスに直接ビルドします。
- ステップ 7. Remote Debug Tool を使用してデバイスにアクセスします。
- ステップ 8. 動画に従い、例を3つの異なる方法で操作します。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/NgH3Ot9pM1Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## リソース

<!-- - **[製品]** [MT3620 Mini Dev Board Product Brief](https://files.seeedstudio.com/products/102110267/document/MT3620_Mini_Dev_Board_Product_Brief-2019-03-15.pdf)リンクが無効 -->
- **[製品]** [Welcome to Azure Sphere](https://docs.microsoft.com/en-us/azure-sphere/)
- **[ライブラリ]** [Azure Sphere Demo Library](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- **[PDF]** [MT3620 Mini Dev Board Schematic](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/MT3620%20Dev%20Board%20V2.pdf)
- **[データシート]** [MediaTek MT3620 Product Brief](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/MediaTek%20MT3620%20Product%20Brief.pdf)
- **[データシート]** [WF-M620 RSC1 datasheet](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/WF-M620-RSC1_datasheet_20190314.pdf)
- **[FAQ Web]** [Azure Sphere Forum](https://social.msdn.microsoft.com/Forums/en-US/home?forum=azuresphere)
- **[FAQ Web]** [Azure Sphere Github issues](https://github.com/MicrosoftDocs/azure-sphere-issues/issues?utf8=%E2%9C%93&q=is%3Aissue)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>