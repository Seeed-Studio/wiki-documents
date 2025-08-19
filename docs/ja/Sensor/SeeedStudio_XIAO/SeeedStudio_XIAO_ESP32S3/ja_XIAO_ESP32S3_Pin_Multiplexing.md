---
description: Seeed Studio XIAO ESP32S3 のピンマルチプレクシング。
title: Seeed Studio XIAO ESP32S3 (Sense) のピンマルチプレクシング
keywords:
- esp32s3
- xiao
- ピンマルチプレクシング
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32s3_pin_multiplexing
sku: 113991114, 113991115
type: project
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO ESP32S3 (Sense) のピンマルチプレクシング

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

Seeed Studio XIAO ESP32S3 は、多様な周辺インターフェースと GPIO ピンを備えた強力で多用途な開発ボードです。これらのピンは、他のデバイスとの通信、アナログセンサーの読み取り、LED の制御など、さまざまな目的で使用できます。このチュートリアルでは、XIAO ESP32S3 と関連するボードである XIAO ESP32S3 Sense のピン配置を探り、これらのピンをさまざまな目的で使用する方法を学びます。具体的には、1x UART、1x IIC、1x IIS、1x SPI、11x GPIO（PWM）、9x ADC、1x ユーザー LED、1x 充電 LED、1x リセットボタン、1x ブートボタン、そして XIAO ESP32S3 Sense では 1x B2B コネクタ（追加の GPIO 2 本付き）の使用方法をカバーします。このチュートリアルを終える頃には、XIAO ESP32S3 のピン配置を十分に理解し、プロジェクトで効果的に使用できるようになるでしょう。

## はじめに

### ピン配置の概要

始める前に、XIAO ESP32S3 が持つすべてのピンとその機能を以下の回路図で確認しましょう。

<table align="center">
	<tr>
	    <th>XIAO ESP32S3/XIAO ESP32S3 Sense 前面表示図</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32S3/XIAO ESP32S3 Sense 背面表示図</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/back-indication.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32S3/XIAO ESP32S3 Sense ピンリスト</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
</table>

- 5V - これは USB ポートからの 5V 出力です。このピンを電圧入力として使用することもできますが、外部電源とこのピンの間にアノードをバッテリー側、カソードを 5V ピン側にしたダイオード（ショットキー、信号、電力用のいずれか）が必要です。

- 3V3 - これはオンボードレギュレーターからの安定化出力です。700mA を引き出すことができます。

- GND - 電源/データ/信号のグランド

### ヘッダーのはんだ付け

このチュートリアルに従って各ピンの機能を使用するには、事前にはんだ付けを行うことをお勧めします。

XIAO ESP32S3 の小型サイズのため、ヘッダーをはんだ付けする際には注意が必要です。異なるピンを一緒に接続したり、シールドや他の部品にハンダを付けたりしないようにしてください。そうしないと、XIAO がショートしたり正常に動作しなくなったりする可能性があり、その結果生じる問題はユーザーの責任となります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/4.jpg" style={{width:400, height:'auto'}}/></div>

Sense バージョンを選択した場合、おめでとうございます！追加の GPIO ピンが 2 本付いています。これらを使用する予定がある場合は、別途ヘッダーをはんだ付けすることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/18.jpg" style={{width:400, height:'auto'}}/></div>

## デジタル

XIAO ESP32S3は最大11個の通常のGPIOピンと9個のアナログピンを備えています。この例では、XIAO ESP32S3、XIAO拡張ボード、およびリレーを使用して、異なるデジタルピンを読み取りおよび書き込みに使用する方法を示します。

### ハードウェア準備

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio XIAO用拡張ベース（Grove OLED付き）</th>
        <th>Grove - リレー</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

XIAO ESP32S3またはSenseを拡張ボードに取り付け、Groveケーブルを使用してリレーを拡張ボードの**A0/D0**インターフェースに接続してください。最後に、USB-Cケーブルを使用してXIAOをコンピュータに接続します。

### ソフトウェア実装

この例では、XIAO拡張ボードに接続されたボタンを使用してリレーのオン/オフ状態を制御します。ボタンが押されるとリレーがオンになり、ボタンが離されるとリレーがオフになります。

```c
const int buttonPin = D1;     // プッシュボタンのピン番号
int buttonState = 0;          // プッシュボタンの状態を読み取るための変数
const int relayPin = D0;

void setup() {
  // リレーピンを出力として初期化
  pinMode(relayPin, OUTPUT);
  // プッシュボタンピンを入力として初期化
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop() {
  // プッシュボタンの状態を読み取る
  buttonState = digitalRead(buttonPin);

  // プッシュボタンが押されているか確認。押されている場合、buttonStateはHIGH
  if (buttonState == HIGH) {
    // リレーをオンにする
    digitalWrite(relayPin, HIGH);
  } else {
    // リレーをオフにする
    digitalWrite(relayPin, LOW);
  }
}
```

すべてが順調に進めば、プログラムをアップロードした後、以下のような効果が確認できるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/19.gif" style={{width:500, height:'auto'}}/></div>

:::tip
デジタル機能を使用する場合、ピン番号の接頭辞として「D」を使用する必要があります（例：D4、D5）。逆に、ピンのアナログ機能を使用する場合は、接頭辞として「A」を使用する必要があります（例：A4、A5）。
:::

### Senseバージョンの場合

XIAO ESP32S3 Senseでは、XIAOの11個のデジタルピンに加えて、拡張ボード上の2つのピン（**D11**および**D12**）も使用できます。それらを使用する場合は、以下の手順に従ってください。

#### ステップ1. J1とJ2の接続を切断する

ESP32-S3のピン数が限られているため、Sense拡張ボード上のD11およびD12はデフォルトでマイク用に予約されています。もしD11およびD12を他の目的で使用する必要がある場合は、Sense拡張ボードを裏返し、鋭いナイフを使用して2つのはんだパッド間の白線に沿ってJ1とJ2の接続を切断してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/20.png" style={{width:400, height:'auto'}}/></div>

:::caution
写真から分かるように、XIAOのスペース制限により、多くの配線レイアウトが非常にコンパクトです。そのため、J1とJ2の接続を切断する際は、白線の外側を切断しないように注意してください。そうしないと、開発ボードが故障する可能性があります！

XIAO ESP32S3 Senseの追加ピンD11およびD12については、ピンのマクロ定義がまだ行われていません。つまり、これらのピンを制御する際にD11/A11またはD12/A12を使用することはできませんが、それぞれGPIO番号（GPIO12およびGPIO13）を使用してこれらのピンを制御することができます。これらのピンのマクロ定義をできるだけ早く提出する予定であり、提出が完了したら、D/Aピン定義を使用できるようになります。
:::

:::tip
J1とJ2の接続を切断した後、拡張ボード上のマイク機能は使用できなくなります。マイク機能を使用する必要がある場合、D11およびD12ピンを同時に使用することはできません。この場合、J1とJ2の2つのパッドを個別に再びはんだ付けすることでマイク機能を復元できます。以下の写真のように、赤と緑の領域を個別にはんだ付けしてください。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/21.png" style={{width:400, height:'auto'}}/></div>
:::

実際の回路図については、以下の図を参照してください：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/92.png" style={{width:600, height:'auto'}}/></div>

#### ステップ 2. ハードウェア準備

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Grove - リレー</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" style={{width:200, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

#### ステップ 3. ソフトウェア実装

以下のプログラムはリレーを500ミリ秒ごとに切り替えます。リレーのSIGピンを拡張ボードのGPIO42インターフェースに接続してください。

```c
const int relayPin = 42;

void setup() {
  // リレーピンを出力として初期化
  pinMode(relayPin, OUTPUT);
}

void loop() {
    // リレーをオンにする
    digitalWrite(relayPin, HIGH);
    delay(500);
    // リレーをオフにする
    digitalWrite(relayPin, LOW);
    delay(500);
}
```

上記の方法は、[Digital as PWM](#digital-as-pwm) および [Analog](#analog) セクションにも適用可能です。使用したい拡張ボードのピン番号を変更するだけで済みます。この内容は後ほど繰り返しません。

:::caution
XIAO ESP32S3 Senseの追加ピンD11とD12については、ピンのマクロ定義がまだ行われていません。つまり、これらのピンを制御するためにD11/A11またはD12/A12を使用することはできませんが、それぞれGPIO42とGPIO41を使用してこれらのピンを制御することができます。これらのピンのマクロ定義をできるだけ早く提出する予定であり、提出が完了したらピン定義をD/Aで使用できるようになります。
:::

## Digital as PWM

XIAO ESP32S3のすべてのGPIOピンはPWM出力をサポートしています。そのため、任意のピンを使用してPWMを出力し、ライトの明るさを調整したり、サーボを制御したりすることができます。

### ハードウェア準備

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio XIAO用拡張ベース（Grove OLED付き）</th>
        <th>Grove - 可変色LED</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Variable_Color_LED1.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

XIAO ESP32S3またはSenseを拡張ボードに取り付け、Groveケーブルを使用して可変色LEDを拡張ボードのA0/D0インターフェースに接続してください。最後に、USB-Cケーブルを使用してXIAOをコンピュータに接続します。

### ソフトウェア実装

この例では、PWM出力を使用してライトの明るさを制御する方法を示します。

```cpp
int LED_pin = D0;    // デジタルピン10に接続されたLED

void setup() {
  // LEDピンを出力として宣言
  pinMode(LED_pin, OUTPUT);
}

void loop() {
  // 最小値から最大値まで5ポイントずつ増加してフェードイン
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {
    // 値を設定（範囲は0から255）
    analogWrite(LED_pin, fadeValue);
    // 暗くなる効果を見るために30ミリ秒待機
    delay(30);
  }

  // 最大値から最小値まで5ポイントずつ減少してフェードアウト
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {
    // 値を設定（範囲は0から255）
    analogWrite(LED_pin, fadeValue);
    // 暗くなる効果を見るために30ミリ秒待機
    delay(30);
  }
}
```

プログラムが正常に実行されると、以下の実行結果が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/22.gif" style={{width:500, height:'auto'}}/></div>

## アナログ

XIAO ESP32S3では、11個の内蔵GPIOピンのうち、シリアル通信に使用されるD6およびD7ピンを除く残りの9ピンがアナログ機能をサポートしています。これらのGPIOピンを使用して、酸素センサーや光強度センサーなど、アナログ信号を生成するセンサーから値を読み取ることができます。

### ハードウェア準備

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio XIAO用拡張ベース（Grove OLED付き）</th>
        <th>Grove - 酸素センサー</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/cover.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Oxygen-Sensor-ME2-O2-f20.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

XIAO ESP32S3またはSenseを拡張ボードに取り付け、Groveケーブルを使用して酸素センサーを拡張ボードのA0/D0インターフェースに接続してください。最後に、USB-Cケーブルを使用してXIAOをコンピュータに接続します。

### ソフトウェア実装

以下のプログラムでは、`analogRead()`メソッドを使用してセンサーのアナログ値を読み取り、シリアルインターフェースを使用してセンサーの結果を出力します。

```cpp
// Grove - Gas Sensor(O2) テストコード
// 注意:
// 1. センサーを予熱するのに約5〜10分必要です
// 2. 使用しているモジュール名をコメント解除してください
// 3. 必要に応じてVReferを変更してください

// 不要なものをコメントアウト
// #define MIX8410
#define O2_W2

#ifdef MIX8410
  #define O2_COEFFICIENT 0.21
#elif defined(O2_W2)
  #define O2_COEFFICIENT 0.087
#endif

const float VRefer = 3.34;       // ADCリファレンス電圧
const int pinAdc   = A0;
 
void setup() 
{
    // 初回実行時のセットアップコードを記述
    Serial.begin(9600);
    Serial.println("Grove - Oxygen Sensor(MIX8410) テストコード...");
}

void loop() 
{
    // 繰り返し実行されるメインコードを記述
    float Vout =0;
    Serial.print("Vout =");
 
    Vout = readO2Vout();
    Serial.print(Vout);
    Serial.print(" V, 酸素濃度は ");
    Serial.println(readConcentration());
    delay(500);
}
 
float readO2Vout()
{
    long sum = 0;
    for(int i=0; i<32; i++)
    {
        sum += analogRead(pinAdc);
    }
 
    sum >>= 5;
 
    float MeasuredVout = sum * (VRefer / 1023.0);
    return MeasuredVout;
}
 
float readConcentration()
{
    // Voutサンプルは3.3Vを基準としています
    float MeasuredVout = readO2Vout();
 
    //float Concentration = FmultiMap(MeasuredVout, VoutArray,O2ConArray, 6);
    //出力電圧が2.0Vの場合
    float Concentration = MeasuredVout * O2_COEFFICIENT / 2.0;
    float Concentration_Percentage=Concentration*100;
    return Concentration_Percentage;
}
```

:::tip
ピンのアナログ機能を使用する場合、ピン番号の接頭辞として「A」を使用する必要があります（例：A4、A5）。逆に、デジタル機能を使用する場合は、接頭辞として「D」を使用してください（例：D4、D5）。
:::

プログラムをアップロードした後、Arduino IDEでシリアルモニターを開き、ボーレートを9600に設定してください。酸素センサーが温まるのを待つと、正確な酸素濃度値を確認することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/23.png" style={{width:600, height:'auto'}}/></div>

## シリアル通信

Arduino IDE を使用する際、シリアル通信は多くのプロジェクトで重要な役割を果たします。Arduino IDE でシリアル通信を使用するには、まずシリアルモニターウィンドウを開く必要があります。これは、ツールバーの **シリアルモニター** アイコンをクリックするか、**Ctrl+Shift+M** のショートカットキーを押すことで行えます。

### 一般的な使用方法

よく使用されるシリアル関数には以下のものがあります：

- `Serial.begin()` -- 指定したボーレートで通信を初期化します。
- `Serial.print()` -- データをシリアルポートに読みやすい形式で送信します。
- `Serial.write()` -- バイナリデータをシリアルポートに送信します。
- `Serial.available()` -- シリアルポートから読み取るデータがあるかどうかを確認します。
- `Serial.read()` -- シリアルポートから1バイトのデータを読み取ります。
- `Serial.flush()` -- 送信中のシリアルデータの送信が完了するまで待機します。

これらのシリアル関数を使用することで、Arduino ボードとコンピュータ間でデータを送受信でき、インタラクティブなプロジェクトを作成する可能性が広がります。

以下は例のプログラムです：

```c
void setup() {
  // シリアル通信を9600ビット/秒で初期化
  Serial.begin(9600);
}

void loop() {
  // シリアルポートにデータを送信
  Serial.println("Hello World!");

  // シリアルポートからデータを読み取る
  if (Serial.available() > 0) {
    // 受信したバイトを読み取る
    char incomingByte = Serial.read();
    // 受信したバイトをシリアルモニターに出力
    Serial.print("I received: ");
    Serial.println(incomingByte);
  }
  
  // ループを繰り返す前に1秒待機
  delay(1000);
}
```

このコードでは、まず `setup()` 関数内で `Serial.begin()` 関数を使用してボーレート **9600** でシリアル通信を初期化します。その後、`loop()` 関数内で `Serial.print()` 関数を使用して "Hello World!" をシリアルポートに送信します。

また、`Serial.available()` 関数を使用して、シリアルポートから読み取るデータがあるかどうかを確認します。データがある場合、`Serial.read()` 関数を使用して受信したバイトを読み取り、`incomingByte` という変数に格納します。その後、`Serial.print()` および `Serial.println()` 関数を使用して "I received: " と `incomingByte` の値をシリアルモニターに出力します。

最後に、`delay()` 関数を追加して、ループを繰り返す前に1秒待機します。このコードは、シリアルポートを介してデータを送受信するための一般的なシリアル関数の使用方法を示しています。

プログラムをアップロードした後、Arduino IDE のシリアルモニターを開き、ボーレートを 9600 に設定します。シリアルモニターには、毎秒 "Hello World!" というメッセージが出力されます。また、シリアルモニターを通じて XIAO ESP32S3 にコンテンツを送信すると、XIAO は送信されたコンテンツの各バイトを出力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/24.png" style={{width:600, height:'auto'}}/></div>

### Serial1 の使用方法

上記の XIAO ESP32S3 のピン図に基づいて特定のパラメータを確認すると、TX ピンと RX ピンがあることがわかります。これはシリアル通信とは異なりますが、使用方法は非常に似ており、いくつかのパラメータを追加する必要があるだけです。次に、チップから引き出されたピンを使用してシリアル通信を行います。

含める必要があるコア関数：

- `Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);` -- Serial1 を有効化します。この関数のプロトタイプは `<Serial.Type>.begin(unsigned long baud, uint32_t config, int8_t rxPin, int8_t txPin);` です。
  - `baud`  : ボーレート
  - `config`: 設定ビット
  - `rxPin` : 受信ピン
  - `txPin` : 送信ピン

デジタルピンポートを使用して定義する場合は、`#define RX_PIN D7`、`#define TX_PIN D6` と記述します。GPIO ピンポートを使用して定義する場合は、`#define RX_PIN 44`、`#define TX_PIN 43` と記述します。異なる XIAO シリーズのピン図を参照して、具体的なパラメータを確認してください。

以下は例のプログラムです：

```c
#define RX_PIN D7
#define TX_PIN D6
#define BAUD 115200

void setup() {
    Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);
}
 
void loop() {
  if(Serial1.available() > 0)
  {
    char incominByte = Serial1.read();
    Serial1.print("I received : ");
    Serial1.println(incominByte);
  }
  delay(1000);
}
```

プログラムをアップロードした後、Arduino IDE のシリアルモニターを開き、ボーレートを 115200 に設定します。その後、シリアルモニターを通じて XIAO ESP32S3 に送信したいコンテンツを入力すると、XIAO は送信されたコンテンツの各バイトを出力します。この例では、入力したコンテンツは "Hello Everyone" であり、結果は以下の図のようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/114.png" style={{width:600, height:'auto'}}/></div>

### ソフトウェアシリアルの使用方法

ハードウェアシリアルポートが1つでは足りないと感じた場合、ESP32 のソフトウェアシリアル機能を使用して、いくつかのピンをソフトウェアシリアルとして設定し、シリアルポートの数を拡張することができます。

もちろん、ESP32 のユニークな機能であるハードウェアシリアルポートのマッピングを使用する2番目の方法を推奨します。この方法については、[他のハードウェアシリアル](#other-hardware-serial) セクションで詳しく説明しています。

ESP32 シリーズのチップ製品でソフトシリアルポートを使用する場合、サードパーティのソフトシリアルポートライブラリを別途ダウンロードする必要があります。以下に参考リンクを提供します。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/plerup/espsoftwareserial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

:::tip
現在、EspSoftwareSerialライブラリのバージョン7.0.0を推奨しています。他のバージョンでは、ソフトウェアシリアルポートが正しく動作しない問題が発生する可能性があります。
:::

ZIP形式のライブラリをダウンロードした後、Arduino IDEを開き、**スケッチ > ライブラリをインクルード > .ZIPライブラリを追加**をクリックします。ダウンロードしたZIPファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに**ライブラリがライブラリに追加されました**と表示されます。これでライブラリが正常にインストールされたことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

次に、ESP32のソフトウェアシリアルポートを使用できます。

:::caution
コンピュータに他のソフトウェアシリアルポートライブラリがインストールされている場合、競合が発生する可能性があるため、確認してください。
:::

```c
#include <SoftwareSerial.h>

SoftwareSerial mySerial(2, 3); // RX, TX

void setup() {
  // シリアル通信を初期化
  Serial.begin(9600);
  while (!Serial);

  // ソフトウェアシリアルを初期化
  mySerial.begin(9600);
}

void loop() {
  // ソフトウェアシリアルからデータを読み取る
  if (mySerial.available()) {
    char data = mySerial.read();
    Serial.print("受信したデータ: ");
    Serial.println(data);
  }

  // ソフトウェアシリアルにデータを書き込む
  mySerial.print("Hello World!");

  // ループを繰り返す前に1秒待機
  delay(1000);
}
```

このプログラムでは、まず`SoftwareSerial.h`ライブラリをインクルードしてソフトウェアシリアルを使用します。そして、ピン2と3をそれぞれRXとTXとして使用して、`mySerial`という新しいSoftwareSerialオブジェクトを作成します。

`setup()`関数では、ハードウェアシリアル（`Serial.begin()`）とソフトウェアシリアル（`mySerial.begin()`）の両方を初期化します。

`loop()`関数では、`mySerial.available()`関数を使用して、ソフトウェアシリアルから読み取れるデータがあるかどうかを確認します。データがある場合、`mySerial.read()`関数を使用して受信したバイトを読み取り、`data`という変数に格納します。その後、`Serial.print()`および`Serial.println()`関数を使用して、ハードウェアシリアルに「受信したデータ: 」と`data`の値を表示します。

また、`mySerial.print()`関数を使用して「Hello World!」をソフトウェアシリアルに書き込みます。これにより、XIAOからソフトウェアシリアルポートに接続されたデバイスにデータが送信されます。

最後に、`delay()`関数を使用して、ループを繰り返す前に1秒待機します。

:::note
ESP32-S3でソフトウェアシリアルを使用するには、RXとTXに適切なピンを選択する必要があります。他の目的で使用されていないピンを選択してください。この例では、RXとTXにそれぞれピン9と10を使用しています。
:::

### その他のハードウェアシリアル

ESP32S3には合計3つのUART通信インターフェースがあり、UART0、UART1、UART2として番号付けされています。これら3つのシリアルポートのピンは固定されておらず、任意のIOポートにリマップできます。

デフォルトでは、USBシリアル通信に使用されるため、**UART0**は使用しません。他のハードウェアシリアルポートを使用する場合は、ハードウェアシリアルのマッピングをカスタマイズできます。

```c
// 設定のために低レベルアクセスが必要です。
#include <HardwareSerial.h>

// 内部UARTにマッピングされた2つのシリアルデバイスを定義
HardwareSerial MySerial0(0);
HardwareSerial MySerial1(1);

void setup()
{
    // USB用には通常通りSerialを使用
    Serial.begin(115200);

    // MySerial0をTX=D6、RX=D7に設定（-1, -1はデフォルトを使用することを意味します）
    MySerial0.begin(9600, SERIAL_8N1, -1, -1);
    MySerial0.print("MySerial0");

    // MySerial1をRX=D9、TX=D10に設定
    MySerial1.begin(115200, SERIAL_8N1, 9, 10);
    MySerial1.print("MySerial1");
}

void loop()
{

}
```

以下では、販売中の[60GHz mmWave Sensor - Human Resting Breathing and Heartbeat Module](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html)を例に取り、D9およびD10ハードウェアシリアルポートとUSBシリアルポートの使用方法を説明します。

以下の準備をしてください。

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>60GHz mmWave Sensor -<br/>Human Resting Breathing<br/>and Heartbeat Module</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:240, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:240, height:'auto'}}/></div></td>
        <td><div align="center"><img width = {240} src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

センサーライブラリをコンピュータにダウンロードし、Arduino IDEに追加してください。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

ここでは、心拍数と呼吸データ情報を解析するために、プログラムを以下のように書き換えることができます。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>
#include <HardwareSerial.h>

HardwareSerial MySerial(0);   // 新しい HardwareSerial クラスを作成 -- D6/D7

// ハードウェアシリアルを試すこともできます
BreathHeart_60GHz radar = BreathHeart_60GHz(&MySerial);

void setup() {
  // 初回実行時にセットアップコードを記述
  Serial.begin(115200);
  MySerial.begin(115200, SERIAL_8N1, 9, 10); // CPU周波数が40MHzの場合、定義された速度の半分で動作します。

  while(!Serial);   // シリアルポートが開かれると、プログラムが実行を開始します。

  Serial.println("準備完了");

  // radar.ModeSelect_fuc(1);  // 1: リアルタイム送信モードを示す, 2: スリープ状態モードを示す
  // モードを設定した後、データが返されない場合は、センサーの電源を再投入する必要があるかもしれません。
}

void loop()
{
  // 繰り返し実行されるメインコードを記述
  radar.Breath_Heart();           // 呼吸と心拍情報の出力
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
      case HEARTRATEVAL:
        Serial.print("センサーが現在の心拍数を監視しました: ");
        Serial.println(radar.heart_rate, DEC);
        Serial.println("----------------------------");
        break;
      case HEARTRATEWAVE:  // リアルタイムデータ転送モードがオンの場合のみ有効
        Serial.print("心拍数波形(正弦波) -- 点1: ");
        Serial.print(radar.heart_point_1);
        Serial.print(", 点2 : ");
        Serial.print(radar.heart_point_2);
        Serial.print(", 点3 : ");
        Serial.print(radar.heart_point_3);
        Serial.print(", 点4 : ");
        Serial.print(radar.heart_point_4);
        Serial.print(", 点5 : ");
        Serial.println(radar.heart_point_5);
        Serial.println("----------------------------");
        break;
      case BREATHNOR:
        Serial.println("センサーが現在の呼吸速度が正常であることを検出しました。");
        Serial.println("----------------------------");
        break;
      case BREATHRAPID:
        Serial.println("センサーが現在の呼吸速度が速すぎることを検出しました。");
        Serial.println("----------------------------");
        break;
      case BREATHSLOW:
        Serial.println("センサーが現在の呼吸速度が遅すぎることを検出しました。");
        Serial.println("----------------------------");
        break;
      case BREATHNONE:
        Serial.println("まだ呼吸情報がありません。しばらくお待ちください...");
        Serial.println("----------------------------");
        break;
      case BREATHVAL:
        Serial.print("センサーが現在の呼吸速度を監視しました: ");
        Serial.println(radar.breath_rate, DEC);
        Serial.println("----------------------------");
        break;
      case BREATHWAVE:  // リアルタイムデータ転送モードがオンの場合のみ有効
        Serial.print("呼吸速度波形(正弦波) -- 点1: ");
        Serial.print(radar.breath_point_1);
        Serial.print(", 点2 : ");
        Serial.print(radar.breath_point_2);
        Serial.print(", 点3 : ");
        Serial.print(radar.breath_point_3);
        Serial.print(", 点4 : ");
        Serial.print(radar.breath_point_4);
        Serial.print(", 点5 : ");
        Serial.println(radar.breath_point_5);
        Serial.println("----------------------------");
        break;
    }
  }
  delay(200);                       // プログラムの詰まりを避けるために時間遅延を追加
}
```

プログラムをアップロードした後、シリアルモニターを開き、ボーレートを115200に設定してください。

すべてが正常に動作すれば、シリアルモニター上にデータメッセージが表示されるはずです。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/2.png" alt="pir" width="800" height="auto"/></div>

## IIC

XIAO ESP32S3 には I2C インターフェースがあり、多くのセンサーのデータ送信や解析、さらには一部の OLED スクリーンの使用に利用できます。

### ハードウェア準備

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio XIAO 用拡張ベース（Grove OLED付き）</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
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

XIAO 拡張ボード上の OLED ディスプレイは I2C プロトコルを使用しており、ボード上の I2C 回路を介して XIAO の I2C インターフェースに接続されています。そのため、XIAO を拡張ボードに直接差し込んでプログラムを作成し、画面にコンテンツを表示することができます。

### ソフトウェア実装

この例では、Seeed Studio Expansion Base for XIAO ESP32S3 上の OLED ディスプレイの使用方法を紹介します。

#### ステップ 1. Seeed Studio XIAO ESP32S3 を拡張ボードに取り付け、Type-C ケーブルを接続します。

#### ステップ 2. u8g2 ライブラリをインストールします。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

#### ステップ 3. 以下のコードをコピーして Arduino IDE に貼り付け、アップロードします。

```c
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // リセットなしの OLED ディスプレイ

void setup(void) {
  u8x8.begin();
  u8x8.setFlipMode(1);   // 数値を 1 から 3 に設定すると、画面の文字が 180 度回転します
}

void loop(void) {
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("Hello World!");
}
```

コードの最初の数行では、Arduino.h、U8x8lib.h、Wire.h などの必要なライブラリをインクルードしています。U8x8lib.h ライブラリは OLED ディスプレイを制御するための関数を提供し、Wire.h ライブラリは I2C 通信のための関数を提供します。

`setup()` 関数では、`u8x8.begin()` 関数を使用して OLED ディスプレイを初期化します。また、`u8x8.setFlipMode()` 関数を使用してディスプレイのフリップモードを設定し、画面を 180 度回転させます。

`loop()` 関数では、`u8x8.setFont()` 関数を使用してフォントを設定し、`u8x8.setCursor()` 関数を使用してディスプレイ上のカーソルの位置を指定します。最後に、`u8x8.print()` 関数を使用して OLED ディスプレイに "Hello World!" という文字列を表示します。

XIAO ESP32S3 にプログラムをアップロードすると、拡張ボード上の OLED ディスプレイ画面にコンテンツが表示されるのが確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/29.jpg" style={{width:600, height:'auto'}}/></div>

## SPI

ESP32-S3 チップは複数の周辺機器を統合しており、その中には外部 SPI デバイス（フラッシュメモリ、ディスプレイ、センサーなど）を接続するために使用できる SPI インターフェースが含まれています。ESP32-S3 は高速 SPI 転送モードもサポートしており、最大 80 MHz の SPI 転送速度を実現できるため、ほとんどの SPI デバイスのデータ転送ニーズを満たすことができます。

### ハードウェア準備

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
      <th>Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Main-02.png" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

上記のハードウェアを準備した後、ジャンパーワイヤーを使用して XIAO と OLED の SPI インターフェースを接続します。配線方法については以下の図を参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/30.jpg" style={{width:800, height:'auto'}}/></div>

### ソフトウェア実装

次に、以下のプログラムを例として、SPI インターフェースを使用して OLED 画面表示を制御する方法を紹介します。

u8g2 ライブラリをインストールします。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

```c
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>
 
U8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, /* cs=*/ D7, /* dc=*/ D4, /* reset=*/ D5);
 
void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.firstPage();

  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);
    u8g2.drawStr(0,24,"Hello Seeed!");
  } while ( u8g2.nextPage() );
}
```

`setup()` 関数では、チップセレクト (cs)、データ/コマンド (dc)、リセット (reset) に使用するピンを指定して `U8G2_SH1107_128X128_1_4W_HW_SPI` クラスをインスタンス化します。その後、`u8g2.begin()` 関数を呼び出してディスプレイを初期化します。

`loop()` 関数では、`u8g2.firstPage()`、`u8g2.setFont()`、`u8g2.drawStr()` 関数を使用して新しいコンテンツでディスプレイを更新します。`u8g2.firstPage()` 関数は書き込み用のディスプレイバッファを設定し、`u8g2.nextPage()` 関数は更新されたコンテンツを表示します。do-while ループは、プログラムが停止するまでコンテンツが継続的に表示されることを保証します。

全体として、このコードは U8g2 ライブラリを使用して OLED ディスプレイを制御し、テキストを表示する方法を示しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/31.jpg" style={{width:600, height:'auto'}}/></div>

### Sense 用

Sense バージョンを購入し、拡張ボードに接続する必要がある場合、拡張ボード上の SD カードが SPI ピンを占有するため、SPI ピンが使用できなくなる可能性があります。

Sense 拡張ボードに提供されているはんだパッドインターフェースを使用すると、必要な機能を選択できます。その中で、**J3** はんだパッドの機能は SPI または SD カード機能を有効にすることです。

<table align="center">
	<tr>
	    <th>SPI ピンを使用したい場合 / 拡張ボードの SD カードを無効にする場合</th>
	    <th>拡張ボードの SD カードを有効にしたい場合 / SPI ピンを無効にする場合</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:300, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/36.JPG" style={{width:300, height:'auto'}}/></div></td>
	</tr>
  <tr>
    <td>白い細い線に沿って切断し、はんだパッドの接続を解除します。</td>
    <td>2 つのはんだパッドを一緒に接続します。</td>
  </tr>
</table>

:::caution
写真から分かるように、XIAO のスペース制限のため、多くの配線レイアウトが非常にコンパクトです。そのため、J3の接続を切断する際は、白線の外側を切断しないように非常に注意してください。そうしないと、開発ボードが故障する可能性があります！
:::

:::caution
一般的な説明として、J3はSDカード機能をオンまたはオフにするインターフェースとして簡単に説明されていますが、実際にはこれは正確ではありません。実際の回路接続は以下の図に示されています。J3を切断することで、R4からR6へのプルアップ抵抗が切断されます。これがSDカード機能が無効になり、SPI機能が正常に戻る主な理由です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/93.png" style={{width:800, height:'auto'}}/></div>
:::

## タッチピン

上記で述べた一般的な機能ピンに加えて、XIAO ESP32S3/XIAO ESP32S3 Senseには、A0～A5、A8～A10の9つのタッチ検出ピンがあります。

ピンのアナログ値を読み取ることで、ピンがタッチされたかどうかを確認することができ、とても便利です。以下のプログラムは、ピンA5がタッチされたかどうかを検出するためのものです。

```c
const int touch_pin = A5;
 
void setup(void) {
  Serial.begin(9600);
}
 
void loop(void) {
  Serial.print("Touch value: ");
  Serial.println(analogRead(touch_pin));
  delay(1000);
}
```

プログラムをアップロードした後、シリアルモニターを開き、ボーレートを9600に設定します。その後、ピンA5に触れると、タッチ前の値よりもアナログ読み取り値が大幅に大きくなることが分かります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/32.gif" style={{width:600, height:'auto'}}/></div>

## USBピン

ESP32-S3はWi-FiとBluetooth機能を統合したマイクロコントローラーであり、そのD+およびD-ピンはUSB通信をサポートするために使用されます。具体的には、これら2つのピンはUSB 2.0デバイスとホスト間で高速データ伝送を行うための差動信号線です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/36.png" style={{width:200, height:'auto'}}/></div>

D+ピンはデータ送信に使用される正極性線であり、D-ピンはデータ送信に使用される負極性線です。USBデバイスがホストに接続されると、ホストはこれら2つのピンの電圧変化を検出してデバイスの接続状態と伝送速度を判断します。データ伝送中、D+とD-ピンは交互にデータビットと同期信号を送信し、信頼性の高いデータ伝送を実現します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/34.png" style={{width:800, height:'auto'}}/></div>

## JTAGピン

ESP32-S3のJTAG（Joint Test Action Group）インターフェースは、開発、デバッグ、テスト中に非常に低レベルのハードウェアデバッグやプログラミングに使用できるデバッグおよびテストインターフェースです。JTAGインターフェースには、クロック線、データ入力線、データ出力線、テストモード選択線、テストモードクロック線などの標準的な信号線が含まれています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/35.png" style={{width:200, height:'auto'}}/></div>

ESP32-S3のJTAGインターフェースは以下の目的で使用できます：

1. デバッグ: JTAGインターフェースを使用してESP32-S3チップ内でデバッグやステップ実行を行い、開発者がコードエラーを発見し解決するのを助けます。

2. プログラムの書き込み: JTAGインターフェースを介して、プログラムやデバッグファームウェアをESP32-S3チップにロードできます。

3. CPU状態の読み取り: JTAGインターフェースを使用して、ESP32-S3チップのCPU状態、メモリ内容、レジスタ値を読み取り、デバッグやテストを行うことができます。

JTAGインターフェースを使用するには、専用のハードウェアデバイスとソフトウェアツール、そして対応する専門知識とスキルが必要です。そのため、一般的には、JTAGインターフェースは開発、デバッグ、テストなどの特定のシナリオでのみ使用されます。一般ユーザーにとっては、ESP32-S3の他の機能やインターフェースを使用するだけで十分です。

JTAGデバッグについてさらに詳しく知りたい場合は、公式の[ESP32ドキュメント](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/jtag-debugging/index.html)をご覧ください。

## トラブルシューティング

### Q1: シリアルモニタを使用しているときに以下のエラーが発生するのはなぜですか？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/25.png" style={{width:600, height:'auto'}}/></div>

A: このようなエラーが発生した場合は、**USB CDC On Boot**スイッチをオンにしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/28.png" style={{width:600, height:'auto'}}/></div>

この問題は、Arduino IDE 2.xでシリアル出力が空になる形でも現れる可能性があり、同じ原因によるものです。

### Q2: ESP-32はどの機能をサポートしており、どの機能をサポートしていないのですか？

A: 以下は、[ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/libraries.html)が提供するサポートされている/されていない機能のリストです（2023年4月10日時点）。

| 周辺機器       | ESP32         | ESP32-S2      | ESP32-C3      | ESP32-S3      | コメント               |
|---------------|---------------|---------------|---------------|---------------|------------------------|
| ADC           | はい          | はい          | はい          | はい          |                        |
| Bluetooth     | はい          | サポート外     | サポート外     | サポート外     | Bluetooth Classic      |
| BLE           | はい          | サポート外     | はい          | はい          |                        |
| DAC           | はい          | はい          | サポート外     | サポート外     |                        |
| Ethernet      | はい          | サポート外     | サポート外     | サポート外     | (*)                    |
| GPIO          | はい          | はい          | はい          | はい          |                        |
| ホールセンサー | はい          | サポート外     | サポート外     | サポート外     |                        |
| I2C           | はい          | はい          | はい          | はい          |                        |
| I2S           | はい          | はい          | はい          | はい          |                        |
| LEDC          | はい          | はい          | はい          | はい          |                        |
| モータPWM     | いいえ        | サポート外     | サポート外     | サポート外     |                        |
| パルスカウンタ | いいえ        | いいえ        | いいえ        | いいえ        |                        |
| RMT           | はい          | はい          | はい          | はい          |                        |
| SDIO          | いいえ        | いいえ        | いいえ        | いいえ        |                        |
| SDMMC         | はい          | サポート外     | サポート外     | はい          |                        |
| タイマー       | はい          | はい          | はい          | はい          |                        |
| 温度センサー   | サポート外     | はい          | はい          | はい          |                        |
| タッチ         | はい          | はい          | サポート外     | はい          |                        |
| TWAI          | いいえ        | いいえ        | いいえ        | いいえ        |                        |
| UART          | はい          | はい          | はい          | はい          |                        |
| USB           | サポート外     | はい          | はい          | はい          | ESP32-C3はCDC/JTAGのみ |
| Wi-Fi         | はい          | はい          | はい          | はい          |                        |

### Q3: シリアルモニタで常にチップのデバッグメッセージが表示されるのはなぜですか？

A: Arduino IDEで以下の方法を試してデバッグメッセージの出力をオフにすることができます。**Tool -> Core Debug Level: -> None**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/90.png" style={{width:500, height:'auto'}}/></div>

ただし、この方法が常に有効とは限りません。実際には、ESP32-S3のデバッグ情報はシリアルポートから常に出力され、変更することはできません。これは、チップが正常に動作していることを知らせたいという熱意の表れですので、ご了承ください。

### Q4: J3の接続を切断したのに、D8とD9ピンがハイのままで、microSDカードへの書き込みが成功する可能性があるのはなぜですか？

SDカードの設計において、microSDカードを正常に動作させるにはプルアップ抵抗が必要です。J3を切断した後でもピンレベルやカードの読み書きが正常である場合、それは単なる幸運な状況に過ぎません。この状態でカードを読み書きすることは推奨されません。書き込んだデータが失われる可能性があります。J3を切断した後、D8とD9ピンのレベルはローレベルに書き込むことで変更可能です。

## 技術サポートと製品ディスカッション

.

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>