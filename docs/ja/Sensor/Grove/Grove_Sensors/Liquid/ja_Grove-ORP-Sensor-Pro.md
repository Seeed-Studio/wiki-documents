---
description: Grove - ORP Sensor Kit Pro
title: Grove - ORP Sensor Kit Pro
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-ORP-Sensor-Pro
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Grove - ORP Sensor Kit Pro
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 110020370
tags:
--- -->

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/sensor.jpg"/></div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-ORP-Sensor-Kit-Pro-p-5570.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p>

## はじめに

Grove - ORP Sensor Kit (HR-O) は、液体の品質を検出するために ORP 値を測定する Grove センサーです。5メートルのIP68 ORPプローブを使用し、-2000mVから2000mVの測定範囲を提供し、0-80℃で動作し、Arduinoプログラミングをサポートします。このセンサーは環境に優しく、RoHS認証を取得しています。

### 特徴

- Grove ORPセンサーのアップグレード: 5メートルのIP68 ORPプローブを組み込み、-2000mVから2000mVの測定範囲を提供し、0-80℃で動作、使いやすいGroveエコシステムの一員
- 測定性能の向上: 0-60℃で±15mVの測定精度を維持
- 動作電圧: 3.3/5V
- Arduinoサポート
- RoHS認証

### 応用例

- 酸化還元反応の監視と制御
- 消毒水の検出
- 健康に配慮した水の検出
- 微生物の種類の判定
- 嫌気性微生物活動の検出
- 廃水処理
- 水産養殖
- 工業排水監視

## ハードウェア概要

すべてを始める前に、製品の基本的なパラメータを把握することが非常に重要です。以下の表は、Grove - ORP Sensor Kit Proの特性に関する情報を提供します。

| パラメータ | 詳細 |
|:----------:|:-------:|
| 測定範囲 | -2000mVから+2000mV |
| 分解能 | 1 mV |
| 精度 | ±15mV |
| エアロポテンシャルポイント(pH) | 7.00±0.30 |
| スロープ係数 | >96% |
| 動作電圧 | 3.3V/5V |
| 動作温度 | 0-80℃ |
| **参照システム** |
| 液体接合境界 | ポリ塩化ビニル |
| ハウジング材質 | PPS |
| 膜抵抗 | &lt;500 MQ |
| ワイヤー長 | 5メートル |
| 設置方法 | ドロップ |
| 保護レベル | IP68 |
| 電気接続 | BNC |

## 使用開始

### 製品について

センサープローブの蓋には、プローブを保護するために塩化カリウム溶液が充填されています。

製品を受け取った後、プローブシールドの周りに白い固体粒状の結晶が見つかった場合、これは正常な現象ですので心配しないでください。

白い結晶は、通常の保管または輸送環境での温度変化、環境変化、または酸化還元によって内部の塩化カリウム溶液が原因で発生します。しかし、内部の塩化カリウム溶液の性質やセンサーの正常な動作には影響を与えません。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/1.jpg"/></div>

もし見つけた場合は、湿った紙タオルで結晶を優しく拭き取ってください。子供が誤って摂取しないように注意してください。

### Grove ORP Sensor Kit Proの使用方法

酸化還元電位（ORP）センサーは、水溶液中の酸化剤と還元剤の活動を測定します。これは、pHセンサーに似た2電極システムによる電位測定です。時にはこれをレドックス測定とも呼びます。pHセンサーとは異なり、ORPセンサーは溶液中のすべての化学種の酸化型と還元型の比率を測定します。

ORPセンサーは、通常Ag/AgClの参照電極と一般的にPtの測定電極からなる2つの電気化学的半電池で構成されています。2つの電極間の電位差は、測定される溶液のレドックス電位を表し、ネルンストの式で記述できます。

`E = Eo – 2.3 (RT/nF) x (log [Ox] / [Red])`

ここで:

- E = 測定電極と参照電極間で発生する総電位
- Eo = システム固有の電圧
- R = 気体定数
- T = 温度（K）
- n = 酸化型と還元型の平衡に関与する電子数
- F = ファラデー定数
- [Ox] = 酸化型の濃度
- [Red] = 還元型の濃度

ORPセンサーの出力は参照電極に対して相対的です。例えば、+100mVの読み取り値は、参照半電池の電位より100mV高いことを示し、酸化環境を示唆します。同様に、-100mVの読み取り値は、参照半電池の電位より100mV低いことを示し、還元環境を示します。一部のアプリケーションでは、レドックス電位が標準水素電極（SHE）に対する電圧読み取り値としてEhとして報告される場合があります。ORPセンサーで使用される参照電極のオフセットを考慮することで、電位をEh読み取り値に変換できます。Vernier ORPセンサーは、Ag/AgCl飽和KCl参照電極を使用しています。

### 機器の設置

Grove ORP Sensor Proを使用する前に、Groveボードにプローブを取り付ける必要があります。Groveボードには、プローブとの接続部分に2つの突起した丸い先端があります。それらをプローブ接続部分の2つの切り欠きに合わせてしっかりと挿入します。その後、切り欠きに沿って限界まで回転させます。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/install.gif"/></div>

:::tip
取り外したい場合は、溝に沿って逆方向に回転させ、Groveプレートをプローブから力強く分離してください。手の力はできるだけ金属部分にかけて、プレートを壊さないように注意してください。
<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/uninstall.gif"/></div>


ナットとスペーサーが製品に付属しています。頻繁に分解する必要がある場合は、分解が困難になるため、スペーサーとナットを取り付けることをお勧めしません。
:::

## Arduino / XIAO の例

次に、Arduinoプラットフォームに基づいて、Seeed StudioのXIAOおよびSeeeduino製品を使用したGrove ORPセンサーの基本的な使用方法を紹介します。

**ステップ 1.** Arduinoアプリケーションを起動します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**ステップ 2.** 開発ボードモデルを選択し、Arduino IDEに追加します。

- **Seeeduino**を使用する場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/)を参照して追加を完了してください。

- **Seeed Studio XIAO SAMD21**を使用する場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#software)を参照して追加を完了してください。

- **Seeed Studio XIAO RP2040**を使用する場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#software-setup)を参照して追加を完了してください。

- **Seeed Studio XIAO nRF52840**を使用する場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)を参照して追加を完了してください。

- **Seeed Studio XIAO ESP32C3**を使用する場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/#software-setup)を参照して追加を完了してください。

### Seeed Studio XIAO SAMD21でGrove ORP Sensor Proを使用する

ORP（酸化還元電位）の簡単な定義は、酸化または還元として知られる電子移動の能力を示すもので、単位はミリボルトです。ORPの測定は、測定電極と参照電極の間の電位差を読み取ることです。測定する溶液に応じて、ORP電極は電子供与体または電子受容体として機能します。ORPはpHに似ており、pHが溶液内の水素イオン活性に基づいて溶液の酸性または塩基性を示すのに対し、ORPは溶液内の全体的な電子活性に基づいて溶液の酸化還元状態を示します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/3.jpg"/></div>

この例では、Grove ORP Sensor Proを使用してコカ・コーラのORP値を測定するために、XIAO SAMD21をメイン制御ボードとして使用します。

#### 必要な材料

| Seeed Studio XIAO SAMD21 |  Seeed Studio XIAO用拡張ベース | Grove ORP Sensor Pro |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg"/></div>| <div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg"/></div> | <div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/sensor.jpg"/></div> |
|[**今すぐ購入**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[**今すぐ購入**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)| [**今すぐ購入**](https://www.seeedstudio.com/Grove-ORP-Sensor-Kit-Pro-p-5570.html) |

#### 操作手順

**ステップ 1.** Grove ORP Sensor ProをXIAO拡張ボードに接続します。

この例では、センサーの**CAL**および**SIG**ピンとして、XIAO上部の**A6**および**A7**ピンを使用します。Groveケーブルを使用して、Grove ORP Sensor ProをXIAO拡張ボードのUARTポートに接続してください。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/7.png"/></div>

**ステップ 2.** Seeed Studio XIAO SAMD21を拡張ボードに取り付けます。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/XIAO-to-board.png"/></div>

:::note
最初にSeeed Studio XIAOを拡張ボードに取り付け、その後Type-Cを接続してください。Seeed Studio XIAOを2つのメスヘッダーコネクタの中央に差し込むことを忘れないでください。そうしないと、Seeed Studio XIAOや拡張ボードを損傷する可能性があります。
:::

**ステップ 3.** プローブの保護ケースを取り外します。

**このステップは特に注意が必要です！**

プローブを露出させるために、プローブを**垂直に下向き**にした状態で保護ケースを取り外し、ゆっくりと回転させてケースを外してください。この過程で傾けないようにしてください。そうしないと、内部の塩化カリウムが簡単にこぼれる可能性があります！

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/2.jpg"/></div>

その後、プローブを測定する液体に完全に挿入します。プローブとセンサーは防水仕様であるため、安心して使用できます。また、特別に5mの長さのケーブルを用意しています。ただし、Groveボードは防水仕様ではないため、液体に一緒に入れないでください。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/5.jpg"/></div>

**ステップ 4.** プログラムをアップロードします。

以下は、Grove ORP Sensorのサンプルプログラムです。

```cpp
#define VOLTAGE 3.37   // VCC電圧（単位: V）
#define OFFSET 16      // 未使用 - ゼロドリフト電圧（単位: mV）
#define LED 13         // 動作指示
#define ArrayLenth  40 // 収集回数
#define orpPin A7       // ORPメーター出力、ArduinoコントローラーADCピンに接続
#define calPin A6       // ORPキャル制御ピン、LOWに設定してオフセットを取得

double orpValue; 
// double offset=0.0;
int offset=0;
bool is_calibrated = false;
int wait_count = 5;
int orpArray[ArrayLenth];
int orpArrayIndex=0;

double avergearray(int* arr, int number);

void setup(void) {  
  Serial.begin(9600);
  pinMode(LED,OUTPUT);
  pinMode(calPin,OUTPUT);
  // digitalWrite(calPin, LOW);
  digitalWrite(calPin, HIGH);
}

void loop(void) {
  static unsigned long orpTimer=millis();   // アナログサンプリング間隔
  static unsigned long printTime=millis();
  if(millis() >= orpTimer)
  {
    orpTimer=millis()+20;
    orpArray[orpArrayIndex++]=analogRead(orpPin);    // 20msごとにアナログ値を読み取る
    if (orpArrayIndex==ArrayLenth) {
      orpArrayIndex=0;
    }   
    orpValue=((30*(double)VOLTAGE*1000)-(75*avergearray(orpArray, ArrayLenth)*VOLTAGE*1000/1024))/75-offset;
  }
  if(millis() >= printTime)   // 800ミリ秒ごとに数値を出力
  {
    if(!is_calibrated) {
      if(wait_count==0){
        offset += (int)orpValue; 
        is_calibrated = true;
        digitalWrite(calPin, LOW);
        Serial.print("offset: ");
        Serial.print((int)offset);
        Serial.println(" mV");
      }
      wait_count--;
    }
    else {
      Serial.print("ORP: ");
      Serial.print((int)orpValue);
      Serial.println(" mV");
      digitalWrite(LED,1-digitalRead(LED)); // LEDインジケータの状態を変換      
    } 
    printTime=millis()+800;   
  }
}

double avergearray(int* arr, int number){
  int i;
  int max,min;
  double avg;
  long amount=0;
  if(number<=0){
    printf("平均化する配列の数が不正です！/n");
    return 0;
  }
  if(number<5){   // 5未満の場合、直接統計を計算
    for(i=0;i<number;i++){
      amount+=arr[i];
    }
    avg = amount/number;
    return avg;
  }else{
    if(arr[0]<arr[1]){
      min = arr[0];max=arr[1];
    }
    else{
      min=arr[1];max=arr[0];
    }
    for(i=2;i<number;i++){
      if(arr[i]<min){
        amount+=min;        // arr<min
        min=arr[i];
      }else {
        if(arr[i]>max){
          amount+=max;    // arr>max
          max=arr[i];
        }else{
          amount+=arr[i]; // min<=arr<=max
        }
      }//if
    }//for
    avg = (double)amount/(number-2);
  }//if
  return avg;
}
```

プログラムを使用する前に、実際の状況に応じてプログラムのいくつかの変数を修正する必要があります。

```c
#define VOLTAGE     3.37  //vcc 電圧（単位: V）
#define LED         13    //動作指示
#define ArrayLenth  40    //収集回数
#define orpPin      A7    //ORPメーター出力、ArduinoコントローラーのADCピンに接続
#define calPin      A6    //ORPキャリブレーション制御ピン、低に設定してオフセットを取得
```

- **VOLTAGE**: センサーの実際の動作電圧を指します。ピンの供給電圧を測定するためにマルチメーターを使用することをお勧めします。値が正確であるほど、測定も正確になります。私のXIAO拡張ボードでは、測定された供給電圧は3.37Vです。

- **LED**: プログラムには動作インジケーターとしてLEDを点滅させる機能が追加されています。ここで使用している制御ボードのLEDピン番号を定義できます。

- **ArrayLenth**: 単位時間あたりのサンプル数を指します。値が低いほど、ORP値を取得する時間が短くなりますが、結果の値が不安定になる可能性があります。デフォルト値は40です。

- **orpPin**: センサーのORPピンがメインコントロールボードのピン番号に接続されています。

- **calPin**: センサーのキャリブレーションピンがメインコントロールボードのピン番号に接続されています。

プログラムを更新した後、Seeed Studio XIAO SAMD21の開発ボードモデルとポート番号を選択し、プログラムをアップロードしてください。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/6.png"/></div>

シリアルモニターをオンにしてボーレートを9600に設定すると、現在のセンサーによって検出されたORP値の変化が表示されます。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/4.png"/></div>

:::tip
センサーのプローブを測定する溶液に入れた後にプログラムをアップロードする場合、`ArrayLenth = 40`で約**15分**のウォームアップ時間が必要で、ORP値が安定します。
:::

#### Grove ORP Sensor Proプローブの清掃

いくつかの要因により、ORPセンサーのダイアフラムが詰まることがあります。特に、セラミックやその他の多孔質材料で作られた接合部は詰まりやすいです。以下に、最も頻繁な原因とそれぞれの清掃手順を示します：

1. **硫化銀（Ag2S）による詰まり**: 参照電解液に銀イオンが含まれており、測定対象のサンプルに硫化物が含まれている場合、接合部が硫化銀の沈殿物で汚染されます。この汚染を除去するには、8%チオ尿素を0.1 mol/L HCl溶液に浸して5〜60分間清掃します（チオ尿素クリーナーはMETTLER TOLEDOから入手可能）。

2. **塩化銀（AgCl）による詰まり**: 参照電解液の銀イオンが塩化物イオンを含むサンプルと反応し、AgCl沈殿物を生成することがあります。この沈殿物は濃縮アンモニア溶液（35% NH3 aq.）に電極を浸すことで除去できます。

3. **タンパク質による詰まり**: タンパク質で汚染された接合部は、電極をペプシン/HCl（5%ペプシンを0.1 mol/L HClに溶解）溶液に数時間浸すことで清掃できることがよくあります（ペプシン-HClクリーナーはMETTLER TOLEDOから入手可能）。

4. **その他の接合部の詰まり**: 他の汚染物質で接合部が詰まっている場合は、水または0.1 mol/L HCl溶液を使用して超音波浴でORPセンサーを清掃してみてください。

:::caution
プローブを溶液に長時間放置しないでください。これによりプローブの寿命が著しく短くなる可能性があります。
:::

#### Grove ORP Sensor Proの正しい保管方法

使用後は電極を蒸留水でよくすすぎ、保護ケースをしっかり締めてください。ORP電極は、参照電解液（通常は3 mol/L KCl）またはInLab保管溶液を満たした湿潤キャップ内で保管する必要があります。半電極は乾燥状態で保管してください。電極は直立して室温で保管する必要があります。

## トラブルシューティング

- **Q1: なぜ Grove ORP Sensor Pro には校正が不要なのですか？**

> A: 酸化還元電位（ORP）を測定するということは、溶液の還元電位を測定することを意味します。生の値（mVの読み取り値）が最終結果となります。酸化還元電極が220mVのバッファ溶液で測定され、220 ± 20 mVの範囲内でない場合、センサーは清掃が必要です（校正ではありません）。

- **Grove ORP Sensor Pro の検証が失敗した場合はどうすればよいですか？**

> A: 酸化還元センサーの期待値は220 ± 20 mVです。この条件が満たされない場合、金属リングまたはピンを湿ったティッシュで清掃し、その後蒸留水で洗い流し、再度220mVの酸化還元バッファ溶液でmV値を測定することを推奨します。金属リングの堆積物を清掃して除去するもう一つの方法は、0.1 mol/Lの塩酸（HCl）でコンディショニングすることです。また、場合によっては参照電解液の交換が推奨されることもあります。

- **相対mV測定はいつ行われますか？**

> A: 例えば、Ag/AgCl参照電極ではなく水素標準電極に対する電位を知りたい場合など、オフセットを補正するために相対mV測定が行われることがあります。この場合、測定パラメータにオフセットを入力する必要があります。

## リソース

- **[PDF]** [Grove ORP Sensor Kit Pro_v1.0 SCH](https://files.seeedstudio.com/wiki/grove-ORP-sensor/Grove-ORP-Sensor-Kit-Pro_v1.0_SCH_221019.pdf)

- **[ZIP]** [Grove ORP Sensor Kit Pro_v1.0 SCH&PCB](https://files.seeedstudio.com/wiki/grove-ORP-sensor/Grove-ORP-Sensor-Kit-Pro_v1.0_SCH&PCB_221019.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>