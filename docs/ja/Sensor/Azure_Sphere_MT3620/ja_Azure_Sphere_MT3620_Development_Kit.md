---
description: Azure Sphere MT3620 開発キット
title: Azure Sphere MT3620 開発キット
keywords:
- Azure_Sphere_MT3620_Development_Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Azure_Sphere_MT3620_Development_Kit
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![画像を入力してください](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/azure.jpg)

Azure Sphere MT3620 開発キットは、迅速なプロトタイピングをサポートし、開発者が Azure Sphere テクノロジーを体験できるように特別に設計されています。MT3620 は最初の Azure Sphere 認定 MCU です。Azure Sphere 認定 MCU は、新しいクラスのセキュアで接続されたクロスオーバーマイクロコントローラーです。MT3620 は、ユーザーがアクセス可能な 3 つのマイクロコントローラーコアを備えています：1 つの ARM Cortex-A7 コアと 2 つの汎用 ARM Cortex-M4F コアです。MT3620 は、GPIO、UART、I2C、SPI、I2S、PWM、ADC などのさまざまなオンチップ周辺機器とのインターフェース時にリアルタイム要件をサポートするように設計されています。また、セキュアブートとセキュアシステム操作のための専用の CM4F コアを備えたセキュリティサブシステムと、デュアルバンド 802.11 b/g/n Wi-Fi を内蔵しています。

MT3620 開発キットは、拡張ピンヘッダー上に MT3620 のほとんどのハードウェアリソースを拡張しており、ブレッドボードに配線したりシールドボードを追加したりすることで、ユーザーは他のハードウェアアクセサリに簡単に接続できます。

Azure Sphere オペレーティングシステムは MT3620 にプリインストールされており、Azure Sphere Security Service と連携してセキュアな IoT プラットフォームを構築するように設計されています。その特徴は以下の通りです：

- 任意のウェブサービスへの証明書ベースのデバイス認証
- ソフトウェア認証とセキュアブート
- 障害報告による脅威検出
- 継続的なセキュリティ更新
- 統合されたセキュアなエンドツーエンド IoT ソリューション

MT3620 のソフトウェア開発は、強力な Microsoft Visual Studio IDE を使用してサポートされています：

- [Visual Studio](https://visualstudio.microsoft.com/)（Community、Enterprise、Professional のいずれかをサポート）と Azure Sphere 拡張機能をインストールし、開発ボードを USB 経由で PC に接続して、これまでにないレベルのセキュリティを備えた IoT アプリケーションの開発を開始します。
- MT3620 Dev Board を Azure Sphere 用に使用するには、最新の Windows 更新プログラムを適用した Windows 10 PC と [Azure Sphere ソフトウェア開発キット](http://aka.ms/AzureSphereSDK) SDK が必要です。

<div class="video-container">
<iframe width="600" height="450" src="https://www.youtube.com/embed/iiDF26HNh-Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

|製品名 | 購入方法|
|----------------|-----------|
|Azure Sphere MT3620 開発キット US バージョン|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html)|
|Azure Sphere MT3620 開発キット JP バージョン|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-JP-Version-p-3135.html)|
|Azure Sphere MT3620 開発キット EU バージョン|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-EU-Version-p-3134.html)|

:::caution
バージョン選択に関してサポートが必要な場合は、[利用可能な国または地域のリスト](https://view.officeapps.live.com/op/view.aspx?src=https://statics3.seeedstudio.com/document/Available_country.docx)を確認してください。
:::

## 特徴

- Azure Sphere: IoTデバイス向けのエンドツーエンドセキュリティ
- デュアルバンド802.11 b/g/n、アンテナダイバーシティ対応
- オンチップRAMとフラッシュを備えたトライコアマイクロコントローラー
- Microsoft Visual Studio開発環境
- デバイス寿命中のオンライン認証と更新

## 仕様

**ハードウェア**

<table className="tg">
  <tbody><tr>
      <th className="tg-baqh"><span style={{fontWeight: 'bold'}}>説明</span></th>
      <th className="tg-baqh"><span style={{fontWeight: 'bold'}}>値</span></th>
    </tr>
    <tr>
      <td className="tg-amwm" rowSpan={2}><br />MCU</td>
      <td className="tg-0lax">1 *ARM Cortex A7コア @500MHz , 4MB RAM</td>
    </tr>
    <tr>
      <td className="tg-0lax">2* ARM Cortex M4コア @200MHz, 64KB RAM</td>
    </tr>
    <tr>
      <td className="tg-amwm" rowSpan={5}><br /><br /><br /><br />ISU</td>
      <td className="tg-0lax">4 *“ISU”シリアルインターフェースは以下のように構成可能:</td>
    </tr>
    <tr>
      <td className="tg-0lax">&nbsp;&nbsp;- I2C 最大1MHzで動作</td>
    </tr>
    <tr>
      <td className="tg-0lax">&nbsp;&nbsp;- SPI 最大40MHzで動作</td>
    </tr>
    <tr>
      <td className="tg-0lax">&nbsp;&nbsp;- UART 最大3Mbpsで動作</td>
    </tr>
    <tr>
      <td className="tg-0lax">ISUはシリアル通信インターフェース</td>
    </tr>
    <tr>
      <td className="tg-amwm">接続性</td>
      <td className="tg-0lax">2.4/5GHzデュアルバンド802.11 b/g/n Wi-Fi</td>
    </tr>
    <tr>
      <td className="tg-amwm">I2S</td>
      <td className="tg-0lax">1* I2S、スレーブモードおよびTDMスレーブモード対応</td>
    </tr>
    <tr>
      <td className="tg-amwm">ADC</td>
      <td className="tg-0lax">4 *12ビットADC入力I/O</td>
    </tr>
    <tr>
      <td className="tg-amwm">RTC</td>
      <td className="tg-0lax">1* RTC、CR2032 3Vバッテリーホルダー付き</td>
    </tr>
    <tr>
      <td className="tg-amwm">USB</td>
      <td className="tg-0lax">1 *Micro USBポート、電源供給およびデバッグ用、5V/1A</td>
    </tr>
    <tr>
      <td className="tg-amwm">DCジャック</td>
      <td className="tg-0lax">1* 5V/1A DC電源ジャック</td>
    </tr>
    <tr>
      <td className="tg-amwm">動作温度</td>
      <td className="tg-0lax">-40~85°C</td>
    </tr>
    <tr>
      <td className="tg-amwm">寸法</td>
      <td className="tg-0lax">L:85mm*W:50mm*H:16mm</td>
    </tr>
    <tr>
      <td className="tg-amwm">認証</td>
      <td className="tg-0lax">CE / FCC / MIC / RoHS</td>
    </tr>
  </tbody></table>

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

## ハードウェア概要

**ボード図**

<a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/Diagram.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/Diagram.png"/></a>

- **J1**: ADC基準電圧。オンの場合：内部2.5Vを使用。オフの場合：外部1.8Vをピン1に接続。デフォルトはオフ。
- **J2**: 3.3V分離。オンの場合：システム3.3V電源を有効化。オフの場合：システム3.3V電源を遮断。デフォルトはオン。
- **J3**: RTC電源選択。左側2ピン：背面のRTCバッテリー（モデル: CR2032）を使用。
- **4つのユーザーRGB LED**: LEDモデルはLTST-C19HE1WT。
- **USBポート**: 電源供給（5V/1A）およびデバッグ用。背面のFT4232HQチップに接続。
- **4つのシステムLED**: Led1（USBポート付近）：緑色、FTDIアクティビティLED。Led2：赤色、電源インジケーター。Led3：RGB、Wi-Fiステータス。Led4：RGB、アプリステータス。
- **DC電源**: 5V/1A
- **3つのシステムボタン**: ボタンA&B（白色）はユーザーボタン。リセットボタン（青色）はシステムリセット。
- **MT3620**: [MT3620](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/MediaTek%20MT3620%20Product%20Brief.pdf)は、現代の堅牢なインターネット接続デバイスに必要な高レベルのセキュリティを備えた、高度に統合された高性能IoT MCUです。MT3620は、スマートホーム、商業、産業などの幅広いIoTアプリケーションを対象としており、デバイス設計の柔軟性と自由を可能にする広範なI/O周辺機器サブシステムを備えています。
- **FT4232HQ**: [FT4232H](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/DS_FT4232H.pdf)は、USB 2.0 High Speed（480Mb/s）からUART/MPSSEへのICです。

**ボードピンマップ**

<a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/PinMap.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/PinMap.png"/></a>

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/H1_2.png)

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/H3_4.png)

**寸法**

<a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/dimension.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/dimension.png"/></a>

**電源**

Azure Sphere MT3620開発キットへの電源供給は、オンボードのUSB Micro BコネクタまたはDCコネクタを介して行われます。

- GPIO電圧は3.3Vで、利用可能な余裕は100mAのみです。
- H3コネクタの5v_outは、利用可能な余裕が500mAのみです。
- H3コネクタの3.3Vは、利用可能な余裕が400mAのみです。
- 典型的な平均電流消費量は、Wi-Fiオン時で150mAです。Wi-Fiスキャン時の電流は通常330mAです。

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/power.png)

**ハードウェア設計と製造**

I2Sを使用する場合は、[M4ユーザーマニュアル](https://d86o2zu8ugzlg.cloudfront.net/mediatek-craft/documents/MT3620-M4-User-Manual.pdf)を参照してください。

:::tip
詳細については、[ハードウェア設計と製造に関する情報とツール](https://learn.microsoft.com/en-us/azure-sphere/hardware/hardware-manufacturing-overview)を参照してください。
:::

## 製品の取り扱い

**梱包**

Azure Sphere MT3620 Development Kit の梱包内容には、Azure Sphere MT3620 Development Kit と Micro B USB ケーブルが含まれています。

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/box.JPG)

**静電気対策**

Azure Sphere MT3620 Development Kit は非常に高感度な電子回路を含んでおり、静電気に敏感なデバイス (ESD) です。適切な静電気対策を行わずに Azure Sphere MT3620 Development Kit を取り扱うと、永久的に破損または損傷する可能性があります。Azure Sphere MT3620 Development Kit を組み込んだアプリケーションの処理、取り扱い、操作のすべてにおいて、適切な静電気対策および梱包手順を適用する必要があります。

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

## 認証と承認

<div className="method1" style={{width: '16%'}}>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-FCC-FCC.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/FCC.jpg" /></a></p>
</div>

<div className="method1" style={{width: '16%'}}>
  <p style={{textalign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-CE.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/CE.jpg" /></a></p>
</div>

<div className="method1" style={{width: '16%'}}>
  <p style={{textalign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-MIC.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/mic.jpg" /></a></p>
</div>

<div ><img width="{1000}" src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/RoHS.jpg" /></div>

<!-- <style>
.method1{
  :center;
  float:left;
}
.title{
font-size:1px;
text-indent:1px;
line-height:3px
}
</style> -->

- FCC ID: [Z4T-MT3620DEVB](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-FCC-FCC.zip)
- CE ID: [18/0331/SZ](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-CE.zip)
- MIC ID: [CSRT18207](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-MIC.zip)

## Azure Sphere のインストール

まだ使用されていない Azure Sphere 開発キットをお持ちの場合は、[こちらの手順](https://docs.microsoft.com/en-us/azure-sphere/install/overview)を最初に完了して、セットアップを行ってください。

## Azure Sphere デモ

Sphere 開発キットと [Seeed Grove システム](https://wiki.seeedstudio.com/ja/Grove_System/)を組み合わせた2つのデモを作成しました。

**デモ1**: MT3620 開発ボードが MCU として機能し、温度センサー(SHT31)、リレー、ファン、ディスプレイ、アナログデバイスに接続します。このデモでは、IoT 接続を備えたファンをシミュレートします。ユーザーは周囲温度を測定し、Azure Cloud からファンのオン/オフを切り替えるための閾値を設定できます。温度は LED ディスプレイに表示されます。抵抗を交換することで、ファンの速度レベルを 0, 1, 2, 3（0 はファンをオフにすることを意味します）に変更できます。

**デモ2**: MT3620 開発ボードが IoT 安全接続デバイスとして機能し、既存の家電製品に接続します。この家電製品には独自の MCU があり、このデモでは Arduino を使用してファンの制御ボードをシミュレートします。このボードはファンのモーターデータの状態を取得し、データを分析することで故障状態を把握し、修理担当者を派遣することができます。ボタンを押すことでファンデバイスの健康状態をシミュレートします。ボタンが押されると、デバイスがメンテナンスを必要としていることを意味します。

### ハードウェア

**部品リスト**

| MT3620 開発キット | Grove-温度＆湿度センサー | Grove - リレー |
|--------------|-------------|-----------------|
|![画像を挿入](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/azure_s.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/SHT3_s.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/relay.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-p-3052.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT3-p-2655.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Relay-p-769.html)|

| Grove - スライドポテンショメータ | Grove - 4桁ディスプレイ | Grove - 青色LEDボタン |
|--------------|-------------|-----------------|
|![画像を挿入](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/Slide_Potentiometer_s.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/4_digital_s.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/Grov-Blue_led_button.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-4-Digit-Display-p-1198.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Blue-LED-Button-p-3104.html)|

| MT3620 Grove シールド | Seeeduino V4.2 | ベースシールド |
|--------------|-------------|-----------------|
|![画像を挿入](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/mt3620groveshieldb_s.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html)|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

**システム図**

<a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/demo1.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/demo1.png"/></a>

<a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/demo2.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/demo2.png"/></a>

**MT3620 Grove シールド**

[Azure Sphere SDK](http://aka.ms/AzureSphereSDK) はまだ MT3620 上で ADC と I2C をサポートしていないため、このシールドは MT3620 の UART ポートと外部 I2C デバイス（例: I2C 温度センサー）とのインターフェースとして機能します。このシールドの基本的な機能は、I2C 外部デバイスへの接続を支援することです。I2C 対応の ADC チップを使用することで、開発者はアナログポートからアナログデータを読み取ることもできます。

[MT3620 Grove シールド](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html) には 2 つのチップ、AD7992（アナログから I2C への変換）と SC18IM700（I2C から UART への変換）が含まれており、ハードウェア側で ADC と I2C 機能を有効にします。アナログセンサーの信号は AD7992 を通り、次に SC18IM700 を通って開発ボードの UART に送られます。I2C センサーも SC18IM700 を通って開発ボードの UART に送られます。

[AD7992](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/AD7992.pdf) は、I2C 対応インターフェースを備えた 12 ビットの低消費電力逐次近似型 ADC です。アナログ信号 A0、A1 を I2C データに変換します。

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/ADC_2_I2C.png)

[SC18IM700](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/SC18IM700.pdf) は、マイクロコントローラーまたはマイクロプロセッサの標準 UART ポートとシリアル I2C バスの間のインターフェースとして機能するように設計されています。これにより、マイクロコントローラーまたはマイクロプロセッサが他の I2C バスデバイスと直接通信できるようになります。SDA/SCL 信号を GPIO26_TXD0 および GPIO28_RXD0 に変換します。

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/I2C_2_UART.png)

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/MT3620_Grove_Shield-2018-09-11.png)

<div style={{textAlign: 'center'}}>MT3620 Grove シールド ハードウェア概要</div>

**ハードウェア接続**

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/MT3620_demo_Front.jpg)

<div style={{textAlign: 'center'}}>ハードウェアセットアップの前面図</div>

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/MT3620_demo_backside.jpg)

<div style={{textAlign: 'center'}}>ハードウェアセットアップの上面図</div>

1. Grove-青色LEDボタンを Grove ベースシールドのポート2に接続します。
2. ファンの PWM 信号を Grove ベースシールドのポート5に接続します。
3. Grove ベースシールドのポート7（ソフトウェアシリアルポート）を MT3620 Grove シールドの UART3 に接続します。Vcc（赤いケーブル）を切断し、シリアル通信用に TX/RX/GND を残します。
4. Grove-ベースシールドを Seeeduino/Arduino に接続します。
5. Grove-4桁ディスプレイを MT3620 Grove シールドの GPIO4 ポートに接続します。
6. Grove-温度＆湿度センサー(SHT31)を MT3620 Grove シールドの I2C ポートに接続します。
7. Grove-リレーを MT3620 Grove シールドの GPIO0 ポートに接続し、Grove-リレー出力端子をファンのオン/オフ制御に接続します。
8. Grove-スライドポテンショメータを MT3620 Grove シールドのアナログポートに接続します。
9. MT3620 ベースシールドを Azure Sphere MT3620 開発ボードに接続します。
10. USB ケーブルを Azure Sphere MT3620 開発ボードと PC に接続します。
11. USB ケーブルを Arduino/Seeeduino と PC に接続します。
12. 電源をファンに接続します。

:::caution
Groveベースシールドの電圧スイッチが**3.3v**に設定されていることを確認してください。
:::

### ソフトウェア

ソフトウェアには、スマートファンシミュレーションシステムとAzure Sphere MT3620開発システムが含まれます。

- スマートファンシミュレーションシステムでは、Arduinoボードを使用してGrove-Blue LEDボタンの押下/解放入力信号を読み取り、PWMを出力してファンの速度を制御し、Grove-Blue LEDボタンのLEDステータスも制御します。その後、ポート7を使用してUARTを介してAzure Sphere MT3620開発システムと通信します。

- Azure Sphere MT3620開発システムでは、Grove-Temperature&Humidity Sensor(SHT31)センサーからの温度をGrove-4 Digital LEDに表示し、UART-I2Cシールド機能とMT3620 GPIO出力機能を示します。Grove-Slide Potentiometerをスライドさせてファンの速度を変更し、MT3620 I/O入力機能を示します。Azure Cloudからしきい値温度値を設定し、値がしきい値を超えるとGroveリレーがファンをオンにし、それ以外の場合はオフにします。また、ユーザーはGrove-Slide Potentiometerを調整することができ、ファンの動作状態に問題がある場合、ファンのMCUがUARTを介してAzure Sphereに障害を報告し、その後、障害レポートがAzure Cloudに送信され、メンテナンスを待ちます。

**スマートファンシミュレーションシステム**

- ステップ1. Arduino IDEを開きます。
- ステップ2. [Arduino Smart Fan Simulationコード](https://github.com/Seeed-Studio/Azure_Sphere_Sample_Smart_Fan/blob/master/Arduino_code/Arduino_code.ino)をコピーしてArduino IDEに貼り付けます。
- ステップ3. ツールメニューからArduino/Seeeduino v4をボードとして選択します。
- ステップ4. ツールメニューから関連するCOMポートを選択します。
- ステップ5. アップロードをクリックして、コードをArduino/Seeeduinoにアップロードします。

:::note
コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。
:::

**Azure Sphere MT3620開発システム**

- ステップ1. [Azure Sphereコード](https://github.com/Seeed-Studio/Azure_Sphere_Sample_Smart_Fan)をダウンロードします。
- ステップ2. Azure Sphereのクイックスタートに従って、**AzureSphereDemo2.vcxproj**プロジェクトを開きます。
- ステップ3. Source Files内のmain.cを開きます。
- ステップ4. wifiSsidとwifiPskを@line21および22で変更します。
- ステップ5. デモをAzure IoTに接続します。
- ステップ6. デバイスに直接「Build -> Rebuild Solution」をクリックします。
- ステップ7. Remote Debug Toolを使用してデバイスにアクセスします。
- ステップ8. コンソールから温度データのストリームバックを確認します。
- ステップ9. デバイスエクスプローラーを構成し、物理デバイスとクラウド上のデバイスをリンクします。
- ステップ10. 温度センサーを押して、コンソール上のトリガーメッセージを確認します。
- ステップ11. ボタンを押してファンエラーをシミュレートし、コンソール上のステータスを確認します。

詳細な操作については、以下のビデオを参照してください。

<div class="video-container">
<iframe width="1000" height="669" src="https://www.youtube.com/embed/KXThR9RUNvw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## リソース

- **[製品]** [Azure Sphere MT3620 Development Kit Product Brief](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/product_document/Azure%20Sphere%20MT3620%20Development%20Kit%20Product%20Brief-2018-09-10.pdf)
- **[製品]** [Welcome to Azure Sphere](https://docs.microsoft.com/en-us/azure-sphere/)
- **[認証]** [Azure Sphere MT3620 Development Kit-CE](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-CE.zip)
- **[認証]** [Azure Sphere MT3620 Development Kit-FCC](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-FCC-FCC.zip)
- **[認証]** [Azure Sphere MT3620 Development Kit-MIC](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-MIC.zip)
- **[ライブラリ]** [MT3620 Grove Shield Library](https://github.com/Seeed-Studio/MT3620_Grove_Shield)
- **[Wiki]** [MT3620 Grove Shield](https://wiki.seeedstudio.com/ja/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/)
- **[データシート]** [MediaTek MT3620 Product Brief](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/MediaTek%20MT3620%20Product%20Brief.pdf)
- **[データシート]** [DS_FT4232H](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/DS_FT4232H.pdf)
- **[機械図面]** [Azure Sphere MT3620 Development Board-2D-Drawing](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/tree/master/mechanical)
- **[FAQ Web]** [Azure Sphere Forum](https://social.msdn.microsoft.com/Forums/en-US/home?forum=azuresphere)
- **[FAQ Web]** [Azure Sphere Github issues](https://github.com/MicrosoftDocs/azure-sphere-issues/issues?utf8=%E2%9C%93&q=is%3Aissue)

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>