---
description: スターターシールド（Starter_Shield_EN）
title: スターターシールド EN
keywords:
- Arduino シールド
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Starter_Shield_EN
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Starter_Shield_EN
category: 廃止
bzurl:
oldwikiname: Seeeduino_Stalker
prodimagename:
bzprodimageurl: https://www.research.net/r/Starter_Shield_EN
sku:
tags:

--- -->

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Tickshield_02.jpg)

スターターシールドは、Arduinoの世界を始める初心者にとって完璧なスタートキットです。このキットを使うことで、基本的なはんだ付けのコツを学び、プログラミングの原則を練習することができます。詳細なはんだ付けガイドと、簡単なものから難しいものまでのプログラミング例を完全にサポートするライブラリを用意しています。そのため、技術的な知識がほとんどなくても、電子工作を楽しく学ぶことができます。このキットで楽しみながら知識を得てください！

これはスターターシールドを使用した例としての[小さなタイガーマシンの作り方](https://www.instructables.com/id/How-to-Make-Your-Tiny-Tiger-Machine/)です。

スターターシールドには、ボタン、センサー、ブザー、ディスプレイなどの基本的な電子リソースが含まれています。はんだ付けを学ぶ素晴らしい方法です。スターターシールドは初心者向けのスルーホールはんだ付けキットです。このキットを組み立てた後、スルーホールはんだ付けの基本を習得し、Arduinoと連携するギークスタイルのアラームクロックを手に入れることができます。

モデル: [SLD90400P](https://www.seeedstudio.com/depot/tick-tock-shield-p-1371.html?cPath=6_7)

## 部品リスト

* 1x ブザー;

* 1x アルミ電解コンデンサ 100uF-16V;

* 1x 温度センサー-10k;

* 1x 光センサー（フォトレジスタ）10K;

* 4x 抵抗 10K-5%-1/4W;

* 4x 抵抗 220R-5%-1/4W;

* 3x 抵抗 4.7K-5%-1/4W;

* 2x 青色オスヘッダー VERT;

* 2x 青色オスヘッダー VERT;

* 1x 青色メスヘッダー VERT;

* 1x リチウムイオンバッテリー 3V-40mAh;

* 1x SMDバッテリーセルホルダー（プラスチック製）;

* 1x ICドライバー;

* 1x RTCクロック/タイミング;

* 2x ICソケット;

* 3x トップボタン;

* 2x 黒色丸型メスヘッダー VERT;

* 1x LED 緑-緑;

* 1x LED 青-青;

* 2x LED 赤-赤;

* 1x LED 7セグメント-赤;

* 1x 水晶振動子 32.768KHz-12.5pF-20ppm-30K;

* 2x セラミックディスクコンデンサ 1nF-50V-20%;

* 1x セラミックディスクコンデンサ 100nF-25V;

* 1x スターターシールドはんだ付けガイド;

* 1x スターターシールドPCB;

## 仕様  

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Tick_Shield_Interface_Function.jpg)

**ハードウェアリソース**

* コインセルホルダー: 外部電源がオフのときにRTC ICに電力を供給します;

* ブザー: 音声効果を作成します;

* 光センサー: 周囲の光の強度を検出します;

* 温度センサー: 周囲の温度を検出します;

* K1...K3: 一時的なボタン;

* D1...D4: 青、緑、赤、赤のLED;

* U3: VS1307、リアルタイムクロックIC;

* U5: TM1636、7セグメントディスプレイドライバーIC。

**Arduinoで使用されるピン**

* D2: LED1を制御;

* D3: LED2を制御;

* D4: LED3を制御;

* D5: LED4を制御;

* D6: ブザーを制御;

* D7: VS1636 SCLKピン;

* D8: VS1636 DIOピン;

* D9: K1を制御;
* D10: K2を制御;
* D11: K3を制御;

* A0(D14): 温度センサーからの読み取りを取得;

* A1(D15): 光センサーからの読み取りを取得;

* A4(D18): DS1307 SDAピン;
* A5(D19): DS1307 SCKピン;

## デモンストレーション  

Tick Tock Shield のはんだ付けを完了してから、以下のデモに進む必要があります。まだ完了していない場合は、[こちら](https://www.seeedstudio.com/document/pdf/Tick%20Tock%20Shield%20Soldering%20Guide.pdf)をクリックして、はんだ付けガイドをダウンロードしてください。

ここでは、簡単なものから難しいものまで、7つのデモを紹介します。これらは Tick Tock Shield のすべてのハードウェアリソースを使用します：

* デモ 1: LED のスイープ
* デモ 2: キーで LED を制御
* デモ 3: キーでブザーの音程を変更
* デモ 4: 温度を表示
* デモ 5: 光センサーで制御される LED を作成
* デモ 6: 数字文字を表示
* デモ 7: リアルタイムクロック

各デモには .ino ファイル内に詳細なコメントが含まれています。各行が結果にどのように影響するかを理解するために、スケッチとコメントを注意深く学習してください。

では、Tick Tock Shield の可能性を確認してみましょう。

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Complete_Tick_Shield.JPG)

### 準備: ハードウェアとソフトウェアのインストール  

1. Tick Tock Shield を Arduino ボードに接続します。以下の図のように USB ケーブルを使用して Arduino を PC に接続します。

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Connect_Tick_Shield.jpg)

2. [Starter Shield Library](https://github.com/Seeed-Studio/Starter_Shield_Libraries) をダウンロードします。

3. 解凍して、Arduino IDE のライブラリフォルダに配置します。パスは次の通りです: ..\arduino-1.0.1\libraries。

**注意**

1) MsTimer2 と Timerone ライブラリは、上記で提供した Tick Tock Shield Library に含まれています。これらは Arduino の公式ウェブサイトからダウンロードしました。すでにライブラリフォルダに存在する場合は、再度追加する必要はありません。

2) Tick Tock Shield ライブラリ内のすべてのデモで以下を定義しています：

- K3 - メニューキー
- K2 - 増加キー
- K1 - 減少キー
- D4 - LED_CLOCK_ADJUST
- D3 - LED_ALARM_ADJUST
- D2 - LED_ALARM_ENABLE
- D1 - LED_BRIGHT_ADJUST

### 始めよう: Tick Tock Shield で楽しむ  

簡単なものから難しいものまで、Tick Tock Shield の可能性を探るための一連のデモを用意しました。一緒に楽しみましょう。

**デモ 1: LED のスイープ**

1. このデモでは、最も基本的なアクチュエータである LED の使用のみを含みます。

2. Arduino IDE を再起動します。次のパスで例「RunLED」を開きます: File --&gt; Examples --&gt; TickTockShield--&gt; RunLED。

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Open_RunLED_Code.jpg)

3. このデモでは、設定可能な速度で4つのLEDをスイープできます。関数「runLED(speed)」のパラメータを変更することでスイープ速度を変更できます。関数のコメントでさらに詳しい説明を見つけてください。

4. アップロードボタンをクリックしてプログラムを Arduino にアップロードします。

5. プログラムがアップロードされると、4つのLEDが左から右へ指定された速度で点灯・消灯する様子が見られます。

**デモ 2: キーで LED を制御**

このデモでは、最も基本的な入力であるボタンを使用してLEDを制御する方法を示します。

1. 上記の「RunLED」と同じ方法で例「ControlLED」を開きます。

2. このデモでは、キーを使用して4つのLEDをオンまたはオフにすることができます。このテストの状態を保存するために、TEST_START と TEST_END の2つのフラグを設定します。「メニュー」キーが押されるたびに、状態が TEST_START と TEST_END の間で切り替わります。TEST_START の状態では、「増加」キーが押されるたびに右から左へ1つのLEDが追加で点灯します。「減少」キーは「増加」キーとは逆の効果を持ちます。

**デモ 3: キーでブザーの音程を変更**

このデモでは、ブザーを使用して音を出す方法を示します。また、すでにボタンの使用方法を知っているため、このデモではボタンを使用してブザーの音程を増加または減少させます。

1. 例「changeThePitch」を開きます。

2. 「増加」キーが押されるたびに、ブザーの音程が上昇します。「減少」キーが押されると、音程が下降します。

**デモ 4: 温度を表示**

センサーの使用を開始します。最初に使用するのは温度センサーです。その値を読み取り、7セグメントディスプレイに表示してみましょう。

1. 例「MeasureTemprature」を開きます。
2. 7セグメントディスプレイに温度センサーから読み取った現在の温度が表示されます。
3. 以下の写真でコントラストが十分でない場合は、より低い視角を試してください。この原則は、7セグメントディスプレイを使用する以下のデモにも適用されます。

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Measure_Temperature.jpg)

**デモ 5: 光センサーで制御される LED を作成**

周囲の光に応じてディスプレイの明るさが自動調整されると便利ではありませんか？このデモでは、光センサーを使用してこれを実現する方法を示します。

1. 同じ方法で例「SensorControlBrightness」を開きます。

2. この例では、周囲の光の強度に応じて BRIGHT_ADJUST インジケータの明るさを変更できます。環境が暗くなるほど、LEDが明るくなります。右の写真がその結果です。

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Connect_Tick_Shield.jpg)

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Control_Light.jpg)

**デモ 6: 数字文字を表示**

このデモでは、7セグメントディスプレイの内容を制御する方法を示します。

1. 例「CharacterFlow」を開きます。

2. この例では、数字文字 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, b, C, d, E, F を右から左へ流すことができます。

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Flow_Character.jpg)

**デモ 7: リアルタイムクロック**

これは、上記で述べたすべてのハードウェアリソースを含む最終デモであり、実際の生活で使用されるアラームクロックのすべての機能を実行します。例えば、時刻表示、ブザーで起床を促すなどです。さらに、光センサーと温度センサーが追加されているため、Tick Tock Shield は通常のアラームクロック以上の機能を持っています。周囲の光を感知し、7セグメントディスプレイの明るさを自動調整します。また、一定の時間間隔で現在の温度を表示することができます。

1. サンプル「RealTimeClock」を開き、Arduinoにアップロードしてください。

2. 7セグメントディスプレイは、現在の時刻と温度を交互に表示します。

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Display_RTC_.jpg)

3. 時刻の調整方法とアラームクロックの設定：

* 1) ボード上にRTCチップがあるため、電源を入れるたびに時刻をリセットする必要はありません。ただし、RTCチップ用のコイン電池が生きていることが条件です。ただし、Tick Tock Shieldを初めて起動する場合は、時刻設定が必要です。

* 2) 時刻を調整するために3つのボタンが使用されます。それらは「メニュー」(K3)、「増加」(K2)、「減少」(K1)です。「メニュー」を押すと、次の設定モードを順に切り替えます：

  * a) 通常時刻表示の時間部分を設定
  * b) 通常時刻表示の分部分を設定
  * c) アラームクロックの時間部分を設定
  * d) アラームクロックの分部分を設定
  * e) 7セグメントディスプレイのデフォルトの明るさを設定
  * f) アラーム機能のオン/オフを切り替え
  * g) 時刻設定モードを終了

* 3) 上記の7つのステップをすべて完了する前に終了したい場合、2つの中断方法があります。一つ目は、どのステップでもK3を3秒間押すことです。この方法では、Tick Tock Shieldは行ったすべての設定を確認して終了します。二つ目は、Tick Tock Shieldを5秒間放置することです。この方法では、設定は保存されず、時刻設定モードも終了します。

* 4) K2はアラームクロックの状態を設定するために割り当てられています。ALARM_ENABLEインジケータを通じてアラームクロックの状態を確認できます。

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Starter_Shield_EN/res/Starter_Shield_v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース  

* **[ライブラリ]** [Starter Shield library](https://github.com/Seeed-Studio/Starter_Shield)

* **[Eagle]** [Starter Shield eagle file](https://files.seeedstudio.com/wiki/Starter_Shield_EN/res/Starter_Shield_v1.1.zip)
* **[PDF]** [BLE Bee v1.0 pdf](https://files.seeedstudio.com/wiki/Starter_Shield_EN/res/Starter_Shield_v1.1.pdf)

* **[EAGLE]** [BLE Bee v1.0 sch](https://files.seeedstudio.com/wiki/Starter_Shield_EN/res/Starter%20Shield%20v1.1.sch)

* **[回路図]** [Starter Shield pdf Schematic](https://files.seeedstudio.com/wiki/Starter_Shield_EN/res/Starter_Shield_v1.1.pdf)

* **[データシート]** [TM1636 datasheet](https://files.seeedstudio.com/wiki/Starter_Shield_EN/res/Tm1636.pdf)

* **[データシート]** [VS1307 datasheet](https://files.seeedstudio.com/wiki/Starter_Shield_EN/res/Vs1307.pdf)

## 参考

### EEPROM クラス  

**クラス機能:** AVRチップのEEPROMを読み書きします。Seeeduino V3.0のATmega328PチップのEEPROMサイズは1Kバイトです。電源を切っても書き込んだEEPROMの内容は失われません。RealTimeClockデモでは、アラーム時刻とアラーム有効フラグを保存するために使用されます。アラームクロックをリセットする必要はありません。

**関数説明:**

**1. EEPROM.read(int address);**
この関数は、EEPROMの指定されたアドレスからデータを読み取るために使用されます。

* address: 対象ユニットのアドレス。

例：

```cpp
temp_data[i] = EEPROM.read(i);
```

**2. EEPROM.write(int address, uint8_t value);**
この関数は、EEPROMの指定されたアドレスにデータを書き込むために使用されます。

* address: 対象ユニットのアドレス
* uint8_t value: 対象ユニットに書き込むデータ。

例：

```cpp
if(temp_data[i] != mark[i])
    {
      EEPROM.write(0,mark[0]);
      EEPROM.write(1,mark[1]);
      EEPROM.write(2,mark[2]);
      EEPROM.write(3,mark[3]);
      EEPROM.write(4,mark[4]);
      return true;
    }
```

### TM1636 クラス  

**クラス機能：**このクラスには、4つの7セグメントディスプレイを制御するすべての関数が含まれています。
 **関数説明:**

 **1. tm1636.point(boolean PointFlag);**
 この関数は、クロックポイント（:）をオンまたはオフにするために使用されます。この関数は、ディスプレイ内容が変更されるたびに有効になります。

* PointFlag: 0（オフ）または1（オン）。

例：

```cpp
if(flag_clockpoint)
      {
        tm1636.point(POINT_ON);
      }
      else tm1636.point(POINT_OFF); 
```

**2. Tm1636.display(int8_t DispData[]);**
DispData[]の内容で文字列を作成します。

* DispData[]: int8_t型の配列で、0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, A, b, C, d, E, Fを含みます。

例：

```cpp
tm1636.display(disp);
```

### TickTockShield クラス  

**クラス機能** Tick Tock Shield上のすべてのコンポーネントを操作します。
**関数説明:**

**1. ticktockshield.init();**
Tick Tock Shieldの初期化。

**2. ticktockshield.runLED(byte speed, byte direction);**

この関数は、選択した方向に4つのLEDを流れるように点灯させます。

* speed: LEDの流れる速度（1が最も遅く、10が最も速い）。
* direction: LEDの流れる方向。LEFT_TO_RIGHTまたはRIGHT_TO_LEFTが指定可能。

例：

```cpp
/*4つのLEDを左から右に流れるように点灯*/
ticktockshield.runLED(1,LEFT_TO_RIGHT);
```

**3. ticktockshield. turnOnLED();**
4つのLEDをすべて点灯。

**4. ticktockshield. turnOffLED();**
4つのLEDをすべて消灯。

**5. setLed(unsigned char led_status, int pinLED);**
この関数は、個別のLEDをオンまたはオフにするために使用されます。

* led_status: LED_ONまたはLED_OFF。
* pinLED: LED_CLOCK_ADJUST、LED_ALARM_ADJUST、LED_BRIGHT_ADJUST、LED_ALARM_ENABLEのいずれか。

例：

```cpp
void TickTockShield::turnOffLED()
{
 setLed(LOW,LED_CLOCK_ADJUST);
 setLed(LOW,LED_ALARM_ADJUST);
 setLed(LOW,LED_BRIGHT_ADJUST);
 setLed(LOW,LED_ALARM_ENABLE);
}
```

**6. ticktockshield.alarming();**
ブザーを鳴らします。
例：

```cpp
/*「MENU」キーが押されるまで1分間アラームを鳴らします*/
    if(ticktockshield.isAlarmEnable())
    {
      ticktockshield.alarming();
    }
```

**7. ticktockshield.turnOffAlarm();**
ブザーが鳴っているときにアラームをオフにします。

**8. ticktockshield.setAlarm(uint8_t hour,uint8_t minute,uint8_t flag_enabl);**
アラーム時刻を設定します。

* hour: 時間
* minute: 分
* flag_enabl: アラームの状態を保持するフラグ。0（無効）または1（有効）。

例：

```cpp
ticktockshield.setAlarm(12,0);//はい、アラームクロックは12:00に初期化され、EEPROMにデータが保存されます。
```

**9. ticktockshield.getAlarm();**  
EEPROMからプリセットされたアラーム値を読み取り、アラームの有効フラグを含む指定された変数に格納します。  
例:

```cpp
if(isFirstLoad())//ファームウェアを初めてロードする場合
 {
  ticktockshield.setAlarm(12,0);
  }
 else ticktockshield.getAlarm();//いいえ、EEPROMに保存されたアラームクロックを読み取ります
```

**10. ticktockshield.getTemperature();**  
温度センサーからの読み取り値を取得します。  
例:

```cpp
/*周囲温度を読み取り、デジタルチューブに表示します。*/
 ticktockshield.displayTemperature(ticktockshield.getTemperature());
```

**11. ticktockshield.displayTemperature(int8_t temperature);**  
温度値（負の値もサポート）を7セグメントディスプレイに表示します。文字「C」は摂氏度を表します。  
例:

```cpp
 ticktockshield.displayTemperature(ticktockshield.getTemperature());
```

**12. ticktockshield.scanKey();**  
どのキーが押されたかを検出します。押されたキーのピン番号を返します。キーが押されていない場合は「-1」を返します。  
例:

```cpp
if((flag_scan_again)&&(KEY_MENU == ticktockshield.scanKey()))
      {
        ticktockshield.writeToAdjustArea();
        ticktockshield.processKey();
        system_states = SYSTEM_ADJUSTING;
      }
```

**13. ticktockshield.processKey();**  
キーを通じて入力されたコマンドを処理します。通常の押下の場合、この関数は押下に対応するブザー音を鳴らします。「menu」キーを3秒以上長押しすると、この関数はTick Tock Shieldを時間設定モードにします。「menu」キーの後に他のキーが押されない場合、この関数はTick Tock Shieldを時間設定モードから終了させます。

**14. ticktockshield.processSystemStatus();**  
呼び出されたときにシステムステータスに応じて異なるタスクを実行します。システムステータスには、「時計時間の調整」、「アラーム時間」、「7セグメントディスプレイの明るさ調整」、「アラームの有効化」が含まれます。

**15. ticktockshield.writeToAdjustArea();**  
通常の時間表示モードから時間設定モードに最新の時間情報を渡し、時間設定モードで使用できるようにします。

**16. ticktockshield.writeToNormalArea();**  
時間設定モードで設定された時間情報を通常の時間表示モードに渡します。

**17. ticktockshield.writeTime();**  
時間情報をRTCチップに書き込みます。

**18. ticktockshield.getTime();**  
RTCから現在の時間情報を読み取ります。

**19. ticktockshield.displayTime();**  
7セグメントディスプレイに時間を表示します。  
例:

```cpp
if(ticktockshield.isAlarmEnable())
      {
        tm1636.point(POINT_ON);
        ticktockshield.displayTime();
        system_states = SYSTEM_ALARMING;
        return;
      }
```

**20. ticktockshield.display(int8_t DispData []);**  
7セグメントディスプレイに英数字情報を表示します。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様の製品体験がスムーズに進むよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>