---
description: Grove - Mixer Pack V2
title: Grove - Mixer Pack V2
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Mixer_Pack_V2
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/U8GUZNb9TVZ14lLRW6ialXEV.jpg)

<!-- [Grove - Mixer Pack V2](https://www.seeedstudio.com/depot/Mixer-Pack-V2Electronic-blockswithout-Arduinoplug-and-play-system-p-1867.html?cPath=14) は、[Seeed Studio](https://www.seeedstudio.com/depot/) によって開発された [Grove System](/ja/Grove_System "GROVE System") の13種類の選りすぐりのGroveモジュールで構成された、スタンドアロンでレゴのような電子キットです。これらのミニモジュールは、[Seeeduino](/ja/Seeeduino "Seeeduino") や [Arduino](/ja/Arduino "Main Page") のようなマイクロコントローラーボードを必ずしも使用せずに、電子回路やプロトタイプを非常に迅速に作成するためのビルディングブロックとして使用できます。 -->

この13種類のGroveモジュールは、センサーモジュール、アクチュエータ、ロジックおよび電源モジュールの組み合わせで、非常に使いやすく、作業が楽しいものです。数分で新しい回路を設計し、機能的なプロトタイプを組み立てることができます。

異なる入力モジュールと出力モジュールを接続することで、さまざまなプロジェクトを作成できます。たとえば、音や光センサーを入力として使用し、LEDを点灯させたり、小型DCモーター回路を作動させたりする出力をトリガーすることができます。ロジックゲートモジュールを使用することで、入力が出力をトリガーするロジックに柔軟性を加えることができます。

これらのモジュールは小さくてカラフルな電子部品であり、大人も子供も楽しむことができます。

[Grove - Mixer Pack V2](https://www.seeedstudio.com/depot/Mixer-Pack-V2Electronic-blockswithout-Arduinoplug-and-play-system-p-1867.html?cPath=14) を使用すれば、電子工学の基本概念を簡単に学ぶことができ、これらの概念を応用する実践的な能力を向上させることができます。自分自身のインタラクティブなプロジェクトに取り組むことで、エレクトロニクスの素晴らしい世界に足を踏み入れる完璧な方法です。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Mixer-Pack-V2-(Electronic-blocks%2Cwithout-Arduino%2Cplug-and-play-system)-p-1867.html)

## 開封

**このGroveミキサーパックを開封すると、以下のものが見つかります：**

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Mixer_v2_photo-2-.jpg)

- **[ミキサーハンドブック](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/res/Mixer_Handbook.pdf)**  
  プロジェクトを迅速に開始するのに役立つハンドブックです。これには、パックに含まれるすべてのGroveモジュールに関する基本情報が含まれており、いくつかのサンプルプロジェクトの作り方も示されています。

- **13種類のGroveモジュール：**

<!-- 1.  1x [Grove - DC Jack Power](/ja/Grove-DC_Jack_Power "Grove - DC Jack Power")

2.  1x [Grove - Recorder](/ja/Grove_Recorder "Grove - Recorder")

3.  1x [Grove - LED String Light](/ja/Grove-LED_String_Light "Grove - LED String Light")

4.  1x [Grove - Mini Fan](/ja/Grove-Mini_Fan "Grove - Mini Fan")

5.  1x [Grove - NOT](/ja/Grove-NOT "Grove - NOT")

6.  1x [Grove - OR](/ja/Grove-OR "Grove - OR")

7.  1x [Grove - AND](/ja/Grove-AND "Grove - AND")

8.  1x [Grove - Buzzer](/ja/Grove-Buzzer "Grove - Buzzer")

9.  1x [Grove - Light Sensor](/ja/Grove-Light_Sensor "Grove - Light Sensor")

10.  1x [Grove - Red LED](/ja/Grove-Red_LED "Grove - Red LED")

11.  1x [Grove - Sound Sensor](/ja/Grove-Sound_Sensor "Grove - Sound Sensor")

12.  1x [Grove - Slide Potentiometer](/ja/Grove-Slide_Potentiometer "Grove - Slide Potentiometer")

13.  1x [Grove - Button](/ja/Grove-Button "Grove - Button") -->

*   **Groveモジュールアクセサリー：**

<!-- 1.  1x DCモーター（[Grove - Mini Fan](/ja/Grove-Mini_Fan "Grove - Mini Fan") モジュールと一緒に使用）

2.  1x カラフルファン（DCモーターに取り付け可能）

3.  1x 小型オーディオスピーカー（[Grove - Recorder](/ja/Grove_Recorder "Grove - Recorder") モジュールと一緒に使用）

4.  1x LEDストリングライト（[Grove - LED String Light](/ja/Grove-LED_String_Light "Grove - LED String Light") モジュールと一緒に使用）

5.  7x [Groveケーブル](/ja/Grove_System/#grove-cables "GROVE System")（3x 200mm、3x 50mm、1x ブランチケーブル） -->

## 使用方法

Groveモジュールを使用して、Mixer Pack内のGrove回路を構築するのは非常に簡単です。

すべての回路は、以下の4種類のモジュールを組み合わせて構築されます：

1. **電源モジュール**  
   これらは回路に電力を供給します。[Grove Mixer Pack V2](https://www.seeedstudio.com/depot/Mixer-Pack-V2Electronic-blockswithout-Arduinoplug-and-play-system-p-1867.html?cPath=14)には1つの電源モジュール、Grove - DC Jack Powerが含まれています。どのような回路を構築する場合でも、必ずこのモジュールを使用する必要があります。

2. **入力モジュール**  
   これらは通常、センサー入力を回路に伝えるために使用されます。[Grove Mixer Pack V2](https://www.seeedstudio.com/depot/Mixer-Pack-V2Electronic-blockswithout-Arduinoplug-and-play-system-p-1867.html?cPath=14)には4つの入力モジュール（光センサー、音センサー、スライドポテンショメーター、一時スイッチ）が含まれています。これらのモジュールから受け取った入力に基づいて、出力モジュールを使用してアクションをトリガーすることができます。

3. **出力モジュール**  
   入力モジュールからのトリガーを使用して、出力モジュールでアクションを実行できます。[Grove Mixer Pack V2](https://www.seeedstudio.com/depot/Mixer-Pack-V2Electronic-blockswithout-Arduinoplug-and-play-system-p-1867.html?cPath=14)には5つの出力モジュール（LEDライト、LEDストリングライト、サウンドレコーダー、ファンモーター、ブザー）が含まれています。

4. **論理ゲートモジュール**  
   これらは入力モジュールと組み合わせて使用され、特定の出力をトリガーするためのロジックを強化することができます。[Grove Mixer Pack V2](https://www.seeedstudio.com/depot/Mixer-Pack-V2Electronic-blockswithout-Arduinoplug-and-play-system-p-1867.html?cPath=14)には、AND、OR、NOTゲート機能を持つ3つの論理ゲートモジュールが含まれています。

### 初めての回路を構築する

Groveモジュールを使用してGrove回路を構築するには、以下の3つの簡単なステップを実行します：

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-concept-3.jpg)

**以下の手順に従って、Groveモジュールを使用してGrove回路を構築してください：**

**ステップ 1 - 電源モジュールを電源に接続する**  
まず、信頼できる電源を電源モジュールに接続します。パックに付属している9Vバッテリーコネクターケーブルを使用して、Grove - DC Jack Powerモジュールに9Vバッテリーを接続することができます。または、携帯電話の充電に使用される5V/1Aの一般的な壁用電源アダプターを使用することもできます。Grove電源モジュールを電源に接続したら、モジュールのON/OFFスイッチをONの位置に切り替えます。電源モジュールの基板上の緑色のLEDが点灯するはずです。これが点灯しない場合は、接続と電源を再確認してください。緑色のLEDが点灯した場合、信頼できる動作中の電源があることを意味します。スイッチをOFFの位置に戻し、次のステップに進みます。

**ステップ 2 - 入力モジュールを電源モジュールに接続する**  
4ピンGroveケーブルを使用して、回路に使用したい入力モジュールを電源モジュールに接続します。電源モジュールを前に置き、入力モジュールを電源モジュールの左側に配置します。その後、4ピンGroveケーブルの一端を入力モジュールに接続し、もう一端を電源モジュールの左側のGroveコネクターに接続します。例えば、モーメンタリースイッチを使用してLEDをオン/オフする場合、Grove - Buttonモジュールを4ピンGroveケーブルを使用して電源モジュールの左側に接続します。  
入力モジュールは、電源モジュールに直接接続するか、論理ゲートモジュールを介して接続することができます。

**ステップ 3 - 出力モジュールを電源モジュールに接続する**  
4ピンGroveケーブルを使用して、回路に使用したい出力モジュールを電源モジュールに接続します。電源モジュールを前に置き、左側に入力モジュールを接続した状態で、4ピンGroveケーブルの一端を出力モジュールに接続し、もう一端を電源モジュールの右側のGroveコネクターに接続します。例えば、LEDを点灯させる回路を構築する場合、Grove - Red LEDモジュールをGroveケーブルを使用して電源モジュールの右側に接続します。  
出力モジュールは常にこの方法で電源モジュールに直接接続されます。

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-step1.jpg)

- **ステップ 1**

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-step2.jpg)

- **ステップ 2**

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-step3.jpg)

- **ステップ 3**

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-momentarySwitch-RedLED.jpg)

モーメンタリースイッチを押してLEDを点灯させます。

### 論理ゲートモジュールの使用

論理ゲートモジュールは、入力モジュールまたは一連の入力モジュールを使用して、目的の出力をトリガーするためのロジックを強化するために使用できます。これらは通常、Grove回路内で入力モジュールと電源モジュールの間に配置されます。

論理ゲートモジュールには以下の3種類があります：

#### Grove - NOTモジュール

これは最も単純な論理ゲートモジュールで、1つの入力モジュールに接続します。このモジュールは、入力モジュールによって生成された信号を単純に反転させます。入力モジュールからのHIGH信号はLOW信号に変換され、LOW信号はHIGH信号に変換されて出力モジュールに送られます。

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-LightSensorNOT-RedLED-ON.jpg)

典型的な使用例：_ [LDR](https://en.wikipedia.org/wiki/Photoresistor) ベースの光センサーモジュール（例：Grove - Light Sensor）は、明るい光の下でHIGH信号を生成し、暗闇ではLOW信号を生成します。そのため、明るい光の下でLEDを点灯させ、暗闇で消灯させる用途に使用できます。しかし、LEDが暗闇で点灯し、明るい光の下で消灯する回路を作りたい場合があります。この場合、Grove - Light Sensor入力モジュールとGrove - DC Jack Powerモジュールの間にGrove - NOTモジュールを追加することで実現できます。NOTゲートを使用すると、明るい光の下でLDRが低抵抗を示し、光センサーモジュールがHIGH信号を生成する際に、NOTゲートがそれをLOW信号に反転させるため、LEDは明るい光の下で**点灯しなくなります**。一方、暗闇ではLDRが高抵抗を示し、光センサーモジュールがLOW信号を生成する際に、NOTゲートがLOW信号をHIGH信号に変換するため、LEDが暗闇で点灯します。

#### Grove - ORモジュール

このモジュールは2つの入力モジュールに接続できます。その目的は、接続された2つの入力モジュールのうち少なくとも1つがHIGH信号を供給した場合にHIGH信号を生成することです。両方の入力モジュールから受信する信号がLOWの場合、ORゲートは出力モジュールにLOW信号を供給します。

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-or-usage.jpg)

<!-- [Grove - OR](/ja/Grove-OR "Grove - OR") ロジックゲートの使用 -->

<!-- 典型的な使用例：_ 2つのセンサー入力のうち1つが出力をトリガーする必要がある場合に使用します。例えば、音楽が流れているとき**または**手動でスイッチをオンにしたときにLEDライトを点灯させる回路を作りたいとします。このような回路を作るには、[Grove - Sound Sensor](/ja/Grove-Sound_Sensor "Grove - Sound Sensor")と[Grove - Slide Potentiometer](/ja/Grove-Slide_Potentiometer "Grove - Slide Potentiometer")という2つの入力モジュールが必要です。これらの入力モジュールを[Grove - OR](/ja/Grove-OR "Grove - OR")ゲートモジュールの左側に接続します。このロジックゲートモジュールの出力は電源モジュールの左側に接続し、右側はLEDライトモジュール（[Grove - Red LED](/ja/Grove-Red_LED "Grove - Red LED")または[Grove - LED String Light](/ja/Grove-LED_String_Light "Grove - LED String Light")）に接続します。回路をオンにすると、音楽や音がサウンドセンサーによって検出された場合**または**[Grove - Slide Potentiometer](/ja/Grove-Slide_Potentiometer "Grove - Slide Potentiometer")のスライダーを最小電圧（GND）から最大電圧（VCC）に手動で動かした場合にLEDライトが点灯することがわかります。さらに、[Grove - Slide Potentiometer](/ja/Grove-Slide_Potentiometer "Grove - Slide Potentiometer")がLEDライトにHIGH信号を供給している場合、サウンドセンサーからの入力が何であれ、LEDライトは常に点灯し続けます。一方、[Grove - Slide Potentiometer](/ja/Grove-Slide_Potentiometer "Grove - Slide Potentiometer")がLEDライトにLOW信号を供給している場合、LEDライトはサウンドセンサーの出力がHIGHまたはLOWであるかに基づいて点滅します。 -->

#### Grove - ANDモジュール

このモジュールは2つの入力モジュールに接続できます。その目的は、接続された2つの入力モジュールの両方がHIGH信号を供給した場合にのみHIGH信号を生成することです。2つの入力モジュールのいずれかから受信する信号がLOWの場合、ANDゲートは出力モジュールにLOW信号を供給します。

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-and-usage.jpg)

<!-- [Grove - AND](/ja/Grove-AND "Grove - AND") ロジックゲートの使用 -->

<!-- 典型的な使用例：_ 2つのセンサー入力が出力をトリガーする必要がある場合に使用します。例えば、音楽が流れているとき**かつ**暗闇でのみLEDライトを点灯させる回路を作りたいとします。このような回路を作るには、[Grove - Sound Sensor](/ja/Grove-Sound_Sensor "Grove - Sound Sensor")と[Grove - Light Sensor](/ja/Grove-Light_Sensor "Grove - Light Sensor")という2つの入力モジュールが必要です（[Grove - Light Sensor](/ja/Grove-Light_Sensor "Grove - Light Sensor")モジュールは、暗闇でのみライトを点灯させるために[Grove - NOT](/ja/Grove-NOT "Grove - NOT")ロジックゲートと組み合わせて使用します）。これらの入力モジュールを[Grove - AND](/ja/Grove-AND "Grove - AND")ゲートモジュールの左側に接続します。このロジックゲートモジュールの出力は電源モジュールの左側に接続し、右側はLEDライトモジュール（[Grove - Red LED](/ja/Grove-Red_LED "Grove - Red LED")または[Grove - LED String Light](/ja/Grove-LED_String_Light "Grove - LED String Light")）に接続します。回路をオンにすると、暗闇で**かつ**音楽や音がサウンドセンサーによって検出された場合にLEDライトが点灯することがわかります。さらに、[Grove - Sound Sensor](/ja/Grove-Sound_Sensor "Grove - Sound Sensor")が音楽や音を検出してLEDライトにHIGH信号を供給している場合でも、[Grove - Light Sensor](/ja/Grove-Light_Sensor "Grove - Light Sensor")が暗闇を検出しない限り、LEDライトは常に消灯したままです。暗闇で**かつ**サウンドセンサーが音楽や音を検出した場合にのみ、LEDライトが点滅します。 -->

## Grove モジュール詳細

### Grove - DCジャック電源

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Power_photo1.jpg)

Grove - DCジャック電源モジュールは、Mixer Pack内の他のすべてのモジュールに電力を供給します。標準的な円筒形DCプラグを介して電源を接続することができます。電源は9Vバッテリーまたは5.5-20Vの壁用アダプターのいずれかを使用できます。このモジュールは、広い入力供給範囲で優れた負荷およびライン調整を実現し、2Aの連続出力電流を達成することができます。

### Grove - レコーダー

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Recoder_photo1.jpg)

Grove - レコーダーモジュールは、8～20秒の音声を録音し、再生することができます。デフォルトの録音時間は10秒です。このモジュールは不揮発性ストレージを使用しているため、モジュールの電源を切っても録音された音声やオーディオは失われません。電源を再びオンにすると、同じ音声やオーディオを再生することができます。このモジュールは非常に簡単に操作でき、オンボードのプッシュボタンを押して録音し、パックに含まれているスピーカーを接続して再生を聞くことができます。

### Grove - LEDストリングライト

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/RGB_String_photo1.jpg)

Grove - LEDストリングライトモジュールは、Mixer Packに含まれているLEDストリングライト用のLEDドライバーです。このモジュールの動作電圧は3.3V/5Vですが、ストリングライトは12Vの入力を必要とします。そのため、このモジュールはステップアップDC-DCコンバーターを使用して、LEDストリングライトを点灯させるための必要な電圧を供給します。付属のLEDストリングライトは5メートル長のRGB LEDストリングライトで、クリスマスツリーを飾ったり、家の一部を装飾するのに使用できます。

### Grove - ミニファン

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Mini_Fan_photo1.jpg)

Grove - ミニファンモジュールは、AVR Atmega168マイクロコントローラーをベースにしたDCモータードライバーです。このモジュールは、Mixer Packに含まれているDCモーターを動作させるために使用できます。パックに含まれている柔らかい葉のファンをモーターに取り付けて、子供たちと楽しいプロジェクトを作ることができます。柔らかい葉のため、完全に安全で怪我の心配はありません。高度なプロジェクトでは、このモジュールのマイクロコントローラーを再プログラムしてサーボモーターを動作させることもできます。

### Grove - NOT

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/NOT_photo1.jpg)

Grove - NOTモジュールは論理NOTゲートの機能を提供します。このNOTモジュールには左側に1つの入力と右側に1つの出力があります。モジュールへの入力信号がHIGHの場合、出力はLOWになります。入力信号がLOWの場合、出力はHIGHになります。

### Grove - OR

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Mixer_v2.0_OR.jpg)

Grove - ORモジュールは論理ORゲートの機能を提供します。左側に2つの入力と右側に1つの出力があります。この論理ORゲートモジュールの出力は、2つの入力のいずれかがHIGH信号を受け取るとHIGHになります。

### Grove - AND

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/AND_photo1.jpg)

Grove - ANDモジュールは論理ANDゲートの機能を提供します。左側に2つの入力と右側に1つの出力があります。この論理ANDゲートモジュールの出力は、2つの入力の両方からHIGH信号を受け取った場合のみHIGHになります。

### Grove - ブザー

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Buzzer1.jpg)

Grove - ブザーモジュールは、ピエゾブザーを主要なコンポーネントとして持っています。ピエゾはデジタル出力に接続することができ、出力がHIGHの場合に音を発します。また、アナログパルス幅変調出力に接続して、さまざまな音や効果を生成することもできます。

### Grove - 光センサー

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-Light_Sensor_photo.jpg)

<!-- Grove - 光センサーモジュールは光依存抵抗（LDR）を組み込んでいます。通常、光センサーの抵抗は周囲の光強度が増加すると減少します。 -->

### Grove - 赤色LED

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-LED_Photo.jpg)

<!-- Grove - 赤色LEDモジュールは、Grove - LEDモジュールと似ており、LED光源を備えています。さらに、LEDへの入力電圧を管理し、その明るさを調整するためのオンボードポテンショメーターも備えています。このモジュールにはLEDを取り付けるための取り付け穴があり、LEDはPCBにハンダ付けされていません。これにより、Mixer Packに付属する赤色LEDを取り外し、他の色やサイズのLEDを使用することができます。また、このモジュールを使用して、ArduinoやSeeeduinoベースのプロジェクトの電源や信号の存在を示すパイロットランプを追加することもできます。 -->

### Grove - 音センサー

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-Sound_Sensor_photo1.jpg)

<!-- Grove - 音センサーモジュールは、単純なエレクトレットマイクを音センサーとして使用することに基づいています。環境の音の強さを検出するために使用できます。 -->

### Grove - スライドポテンショメーター

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Sliding1.JPG)

Grove - スライドポテンショメーターモジュールは、総抵抗が10KΩの線形可変抵抗を組み込んでいます。レバーを片側からもう片側に移動すると、その出力電圧は0Vから適用するVccまでの範囲になります。このモジュールは標準の4ピンGroveケーブルを介して他のGroveモジュールに接続します。ピンのうち3つはOUT（ピン1）、Vcc（ピン3）、GND（ピン4）に接続されており、4番目のピン（ピン2）は緑色のインジケーターLEDに接続されています。このLEDは、ポテンショメーターの抵抗変化を視覚的に表すために使用されます。

### Grove - ボタン

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Button1.jpg)

Grove - Button モジュールは、このミキサーパックに含まれている新しいバージョンのモジュールで、[Seeed Studio](https://www.seeedstudio.com) の Grove - Button モジュールを基にしています。このモジュールには、独立した「モーメンタリオン/オフ」ボタンが1つ含まれています。「モーメンタリ」とは、ボタンを離すと自動的に元の位置に戻ることを意味します。ボタンが押されると HIGH 信号を出力し、離されると LOW 信号を出力します。このボタンは Grove インターフェースの SIG ピンに信号を送りますが、NC は全く使用されません。

## サンプルプロジェクト

Grove Mixer Pack のモジュールとアクセサリを使用して、多くの楽しいプロジェクトを作成できます。パックに同梱されている [Mixer Handbook](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/res/Mixer_Handbook.pdf) には、いくつかのプロジェクト例が記載されています。以下にもいくつかのプロジェクトを紹介します。

## 光感知 LED

**以下のステップバイステップのグラフィカルな指示に従ってプロジェクトを構築してください：**

1. 回路に必要なモジュールを並べます。

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Mixer_v2.0_usage1.jpg)

2. 4ピンの Grove ケーブルを使用してモジュールを接続します。

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Mixer_v2.0_usage2.jpg)

3. 回路をテストします。

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Mixer_v2.0_usage3.jpg)

## 暗闇で光るストリングライト

**部品リスト:**

**以下のステップバイステップのグラフィカルな指示に従ってプロジェクトを構築してください：**

1. 回路に必要なモジュールを並べます。

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Mixer_v2.0_usage4.jpg)

2. 4ピンの Grove ケーブルを使用してモジュールを接続し、電源を入れます。

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Mixer_v2.0_usage5.jpg)

3. 回路をテストします。

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Mixer_v2.0_usage6.jpg)

## その他のプロジェクトアイデア

以下は試してみることができるその他のプロジェクトです：

1. **音楽に合わせて点滅するライト**  
_ヒント:_ サウンドセンサーと LED ストリングライトを組み合わせて使用します。音楽に合わせてライトが点滅するようにできますか？ピアノなどの楽器を演奏する場合、演奏に合わせてライトがどのように反応するかを確認してください。

2. **暗い時だけ音楽に合わせて点滅するライト**  
_ヒント:_ サウンドセンサーとライトセンサーを LED ストリングライトと組み合わせて使用します。2つのセンサーと一緒にどの論理ゲートモジュールを使用する必要があるかを考えてみてください。2つ必要です！

3. **自転車のヘルメットに LED ライトを追加**  
_ヒント:_ この回路は上記の光感知ライトプロジェクトと同じです。9V バッテリーを使用してプロジェクトをポータブルにしましょう！

4. **自転車のホーンとして圧電ブザーを使用**  
_ヒント:_ ボタンを押してキュートなホーンを鳴らします！9V バッテリーを使用してプロジェクトをポータブルにします。[Grove - Button](/ja/Grove-Button "Grove - Button") を [Grove - Slide Potentiometer](/ja/Grove-Slide_Potentiometer "Grove - Slide Potentiometer") に置き換えた場合に何が起こるかを探ってみてください。

5. **スパイになろう！**  
_ヒント:_ サウンドレコーダーを使用して誰かの声を秘密裏に録音し、それを再生してみましょう。

6. **学校に行く前にお母さんに愛のメッセージを残す**  
_ヒント:_ 上記のプロジェクトと同じようにサウンドレコーダーを使用します。今回は、自分の声で愛する人（お母さん、お父さん、兄弟など）へのお気に入りのメッセージを録音し、あなたがいない間に再生できるようにしましょう！

7. **壊れたおもちゃのモーターカーを復活させる**  
_ヒント:_ 動かなくなった古いモーター付きおもちゃの車はありませんか？そのモーターはまだ動作する可能性があります。他の部分が壊れているだけかもしれません。おもちゃを開けて、車輪に接続されたモーターを取り出し、Grove - Mini Fan モジュールを使用して電源を入れてみてください。9V バッテリーを使用して電源を供給し、スライドポテンショメータを使用して速度を調整してみましょう。

8. **可変速度のパーソナルファン**  
_ヒント:_ これは非常に簡単で、ヒントは必要ないでしょう ;) 暑さから自分を守るためにこのプロジェクトを試してみてください！

## 入手可能性
---
[SeeedStudio Bazaar](https://www.seeedstudio.com/depot/)で購入可能：

*   [Grove Mixer Pack V2 を購入](https://www.seeedstudio.com/depot/Mixer-Pack-V2Electronic-blockswithout-Arduinoplug-and-play-system-p-1867.html?cPath=14)


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/res/Mixer_Pack_v2_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



# リソース

*   [Grove Mixer Pack V2 Grove - モジュール回路図 (PDF ZIP)](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/res/Mixer_Pack_v2_sch_pdf.zip)

*   [Grove Mixer Pack V2 Grove - モジュール回路図 (Eagle ファイル ZIP)](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/res/Mixer_Pack_v2_Eagle.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>