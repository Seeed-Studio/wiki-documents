---
title: Grove - ソリッドステートリレー
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-Solid_State_Relay/
slug: /ja/Grove-Solid_State_Relay
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Grove_Solid_State_Relay_1.jpg)

Grove – ソリッドステートリレーは、リレー機能を備えた非接触型電子スイッチモジュールです。S208T02をベースにしており、最大出力は250VAC/4A、スイッチング速度は10ms未満です。このモジュールにはアクリルベースと3Dプリントされた保護絶縁シールドが装備されており、ユーザーの安全を確保します。リレーがオンであることを示すLEDが搭載されています。コンピュータ周辺機器インターフェース、温度/速度/光調整、サーボ制御、石油化学、医療機器、金融機器、石炭、計器、交通信号など、さまざまな分野で広く使用できます。

:::note
        このモジュールは出力にAC負荷でのみ動作します。DC負荷を使用すると、リレーがオンになると常にオンのままになります。
:::

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- 3Dプリントされた保護絶縁シールド
- 3.3Vおよび5Vの制御レベルに対応
- 低スイッチング遅延（≤10ms）
- LEDオン状態インジケーター
- 放熱器を搭載し、安定性を向上
- アクリルベースと絶縁紙で安全性能を向上
- Grove互換

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 応用アイデア

- 低遅延スイッチングが必要な操作（例：舞台照明制御）
- 高い安定性が必要なデバイス（例：医療機器、交通信号）
- 防爆、防腐、防湿が必要な状況（例：石炭、化学産業）

## 仕様

|項目 |最小 |標準 |最大 |単位|
|---|---|---|---|---|
|入力電圧| 3.0|3.3|5.0|VDC|
|入力電流| 16|20|50|mA|
|出力電圧 |-|220|250|VAC|
|出力電流 |--|--|4.0|A|
|動作周波数|45|50|65|Hz|
|動作温度|-25|25|85|℃|
|オン時間 |--|10|--|ms|
|オフ時間 |--|10|--|ms|
|寸法 |-|44x44x32|-|mm|
|正味重量 |-|25.5|-|g|

## インターフェース機能

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Ssr_interface.jpg)

:::caution
        **1.** 出力電圧が36Vを超える場合、ネジを操作する前にモジュールがオフ状態であることを確認してください。

        **2.** ヒートシンクは非常に高温になる可能性があるため、使用中に触れないでください。
:::

## はじめに

### Arduinoで遊ぶ

:::note
    Arduinoを初めて使用する場合は、開始前に[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

:::tip
        このデモは220V AC負荷で動作します。安全に十分注意してください。
:::

#### 必要な材料

  | Seeeduino V4.2 | ベースシールド| 電球 |Grove - ソリッドステートリレー|
  |--------------|-------------|-----------------|-----|
  |![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/bulb.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/thumbnail.jpg)|
  |<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|お手持ちの電球をご使用ください :)|<a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html" target="_blank">今すぐ購入</a>|

:::note
    **1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーのケーブルではデータを転送できません。お持ちのケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

    **2** Groveモジュールを購入すると、各モジュールにGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

#### ハードウェア

- **ステップ1.** Grove - ソリッドステートリレーをGrove-Base Shieldのポート**D3**に接続します。

- **ステップ2.** 電球のワイヤーをGrove - ソリッドステートリレーの**出力ポート**に接続します。

- **ステップ3.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ4.** Micro-USBケーブルを使用してSeeeduinoをPCに接続します。

:::note
    ベースシールドがない場合でも、Grove-RelayとGrove-ButtonをArduinoボードに直接接続することができます。以下の接続を参照してください。
:::

| Grove - ソリッドステート | Arduino |Groveケーブル|
|-------------|---------|------|
| GND         | GND     |黒|
| VCC         | 5V      |赤|
| SIG         | D3      |黄|

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Arduino_relay.jpg)

#### ソフトウェア

- **ステップ1.** Arduino IDEを開き、新しいスケッチに以下のコードをコピーします。

```
/*
  Grove - ソリッドステートリレーデモコード
  SSRは5秒間オンになり、その後5秒間オフになります。この動作を繰り返します。
  https://www.seeedstudio.com
*/

int ssrControlPin = 3;
void setup() {
    // デジタルピンを出力として初期化します。
    pinMode(ssrControlPin, OUTPUT);
}

void loop() {
    digitalWrite(ssrControlPin, HIGH);      // SSRをオンに設定
    delay(5000);                            // 5秒待機
    digitalWrite(ssrControlPin, LOW);       // SSRをオフに設定
    delay(5000);                            // 5秒待機
}
```

- **ステップ2.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

アップロードが完了すると、電球が5秒間オンになり、その後5秒間オフになる動作を繰り返します。

### Raspberry Piで遊ぶ

#### ハードウェア


**必要な材料**

  | Raspberry Pi | GrovePi_Plus | Grove-Relay |
  |--------------|--------------|-------------|
  |![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/thumbnail.jpg)|
  |<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/GrovePi%2B-p-2241.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html" target="_blank">今すぐ購入</a>|

- **ステップ 1.** GrovePi_Plus を Raspberry Pi に接続します。

- **ステップ 2.** Grove-Relay を GrovePi_Plus の **D4** ポートに接続します。

- **ステップ 3.** 電球の配線を Grove - Solid State Relay の **出力ポート** に接続します。

- **ステップ 4.** Raspberry Pi を USB ケーブルで PC に接続します。

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/PI_RELAY.jpg)

#### ソフトウェア

初めて GrovePi を使用する場合は、この部分をステップごとに実行してください。すでに GrovePi を使用したことがある場合は、**ステップ 1** と **ステップ 2** をスキップできます。

- **ステップ 1.** ソフトウェアのセットアップ。コマンドラインで以下のコマンドを入力します：

:::note
     **Raspberry Pi OS >= Bullseye** を搭載した Raspberry Pi を使用している場合、**このコマンドラインは使用できません**。
:::

```
sudo curl -kL dexterindustries.com/update_grovepi | bash
```

```
sudo reboot
```

```
cd /home/pi/Desktop
```

```
git clone https://github.com/DexterInd/GrovePi.git
```

この部分の詳細については、[Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) を参照してください。

- **ステップ 2.** [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) に従って、GrovePi の最新ファームウェアを更新します。

:::note
    ファームウェアを更新することを強くお勧めします。一部のセンサーでは、更新しないとエラーが発生する可能性があります。
:::

- **ステップ 3.** 以下のコマンドを実行してデモを実行し、結果を確認します。

:::note
     **Raspberry Pi OS >= Bullseye** を搭載した Raspberry Pi を使用している場合、**Python3 のみ**でこのコマンドラインを使用する必要があります。
:::

```
cd /home/pi/Desktop/GrovePi/Software/Python/
```

```
sudo python3 grove_solid_state_relay.py 
```

結果は以下のようになります：

```
pi@raspberrypi:~/Desktop/GrovePi/Software/Python$ sudo python3 grove_solid_state_relay.py
on
off
on
off
on
off
on
off
on
off
on
off
```

コードを確認したい場合は、以下のコマンドを入力してください。

```
nano grove_solid_state_relay.py   # "Ctrl+x" で終了 #
```

コードは以下の通りです：

```python
import time
import grovepi

# Grove Solid State Relay をデジタルポート D4 に接続
# CTR,NC,VCC,GND
relay = 4

grovepi.pinMode(relay,"OUTPUT")

while True:
    try:
        # 5秒間オンにする
        grovepi.digitalWrite(relay,1)
        print "on"
        time.sleep(5)

        # 5秒間オフにする
        grovepi.digitalWrite(relay,0)
        print "off"
        time.sleep(5)

    except KeyboardInterrupt:
        grovepi.digitalWrite(relay,0)
        break
    except IOError:
        print "Error"
```

## テストレポート

---
**1. 実験目的**

- Grove – Solid State Relay(S208T02)の熱性能評価。
- Grove – SSRの限界負荷電流の測定。
- 限界負荷電流を改善するための対策。

**2. 実験原理**

異なる電流および異なる時間点でSSRチップの温度を記録し、データを分析して結論を導きます。

図1はS208T02のデータシートからのスクリーンショットで、異なるヒートシンクおよび異なる温度でSSRの電流が異なることがわかります。

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Figure_1.jpg)

チップの温度を取得するために温度センサーが必要です。検出範囲が-25～125℃のDS18B20を使用し、要件を満たします。

図2は実験装置と設置計画を示しています。温度センサーはヒートシンクの右側に取り付けられ、18b20が検出する温度をヒートシンクの温度にできるだけ近づけるため、センサーとヒートシンクの間に熱伝導プラスチックを塗布します。また、ヒートシンクとSSRの間にも熱伝導プラスチックを塗布します。そのため、18b20の温度はSSRの温度と等しくなります。

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Grove-ssr-report-image2.JPG)

**3. 実験データ**

|- |1分 |5分| 10分| 20分 |安定時間|
|---|---|---|---|---|---|
|0.5A| 31.40| 33.75 |34.75| 35.00 |15分|
|1A| 31.8 |36.75 |39.6| 40.56 |18分|
|2A| 34.5| 46.6| 48.88 |51.13 |20分|
|3A |35.56| 52.81| 58.88 |60.06| 17分|
|4A| 38.00 |57.88| 63.88 |67.00 |19分|
|5A| 44.00| 66.00| 73.12| 75.37| 19分|

:::note
    1. 表内の温度の単位は℃です。
    2. テスト時の室温は28℃です。
:::

**4. 拡張実験**

ヒートシンクのレベルを向上させることでSSRの限界動作電流が改善されることを証明するために拡張実験を行いました。

手元に大きなヒートシンクがなかったため、SSRの上にファン（PCのCPU用ファン）を取り付けました。図3に示されています。

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Grove-ssr-report-image3.JPG)

異なる動作電流の安定時間のみをテストしました。結果は表2に示されています。

|-| 6.0A| 6.5A |7.0A| 7.5A|
|---|---|---|---|---|
|安定時間| 54.44℃| 57.63℃ |60.06℃| 62.38℃|

**5. 拡張実験**

上記の実験結果から以下の結論を導き出すことができます：

- 電流が固定されている場合、時間の経過とともに温度は一定の値に安定します。この値は電流に関連しており、電流が増加すると安定温度も高くなります。2Aの場合、安定温度は50℃を超えるため、SSRが動作している際には触れるべきではありません。

- 図1と実験データを組み合わせると、Grove – SSRは最大で4Aの負荷電流を操作できると考えられます。

- 負荷電流が5Aを超える場合（例えば7A）、ファンやその他の冷却対策を設置する必要がありますが、推奨されません。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/Ssr_eaglefile.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - Solid State Relay Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/Ssr_eaglefile.zip)
- **[RAR]** [Grove - Solid State Relay デモコード](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/SSR_Demo_Code.rar)
- **[PDF]** [S208T02 データシート](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/S208t02_datasheet.pdf)
- **[PDF]** [Grove - Solid State Relay PDF版](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/SSR_v0.9b.pdf)
- **[PDF]** [Grove - Solid State Relay テストレポート](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/Grove-SSR_Test_Report_V0.3.pdf)

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