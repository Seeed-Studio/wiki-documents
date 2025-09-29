---
description: Grove - ORPセンサーキット (501Z)
title: Grove - ORPセンサーキット (501Z)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-ORP-Sensor-kit
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/main.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/main.png" alt="pir" width={600} height="auto" /></p>


<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-ORP-Sensor-Kit-501Z-p-4575.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-ORP-Sensor-Kit-501Z-p-4575.html)

酸化還元電位（ORP）センサーは、水溶液中の酸化剤と還元剤の活動を測定します。湖や川が自浄作用を持つ能力や廃棄物を分解する能力を測定することができます。Grove ORPセンサーは3.3Vおよび5Vシステムの両方で動作し、GroveコネクタとBNCプローブインターフェースにより使いやすく、ArduinoやRaspberry Piプロジェクトに非常に適しています。

:::note
    この製品はRoHS認証を受けていません。
:::
## 特徴

- 3.3Vおよび5Vで効率的に動作。
- ArduinoおよびRaspberry Piの両方に対応。
- コンパクトなサイズで簡単に展開可能。

## 仕様
|項目|値|
|---|---|
|電極電位|	245-270mv(15-30℃)|
|範囲参照電極内部抵抗|	≤10k|
|分解能電極安定性|	±8mv/24|
|指示電極|	良好な連続性|
|動作電圧|	3.3V/5V|
|動作温度|	5℃-70℃|

## 対応プラットフォーム
<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## はじめに

#### 必要な材料

| Seeeduino Lotus | Grove-ORP センサーキット | 
|--------------|--------------|
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/thumb.png" alt="pir" width={600} height="auto" /></p>
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-ORP-Sensor-Kit-501Z-p-4575.html)|

#### ハードウェア接続

<!-- ![](https://files.seeedstudio.com/wiki/Grove-ORD-Sensor/IMG/ORP_Connection.jpg)  -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ORD-Sensor/IMG/ORP_Connection.jpg" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

:::note
Arduino を初めて使用する場合は、開始する前に [Arduino の使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) をご覧になることを強くお勧めします。
:::
- **ステップ 1.** Grove-ORP センサーを Grove ケーブルを使用して Seeeduino Lotus ボードのインターフェース **A2** に接続し、USB ケーブルを介して Seeeduino Lotus を PC に接続します。

:::tip
USB ケーブルや Grove-ORP センサーインターフェースを Seeeduino Lotus ボードのインターフェースに慎重に接続してください。そうしないと、ポートが損傷する可能性があります。
:::

- **ステップ 2.** [デモコード](https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/ORPSensorSample.zip) をダウンロードし、**ORPSensorSample** ファイル全体をコピーして Arduino IDE のライブラリファイルに貼り付けます。

- **ステップ 3.** Arduino IDE で **ORPSensorSample.ino** ファイルを開き、デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/) を確認してください。

#### ソフトウェアコード
```cpp
#define VOLTAGE 5.00    // システム電圧
#define OFFSET 0        // ゼロドリフト電圧
#define LED 13         // 動作指示

double orpValue;

#define ArrayLenth  40    // 収集回数
#define orpPin 2         // ORP メーター出力、Arduino コントローラーの ADC ピンに接続

int orpArray[ArrayLenth];
int orpArrayIndex=0;

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


void setup(void) {
  Serial.begin(9600);
  pinMode(LED,OUTPUT);
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
    orpValue=((30*(double)VOLTAGE*1000)-(75*avergearray(orpArray, ArrayLenth)*VOLTAGE*1000/1024))/75-OFFSET;   // 回路に基づいてアナログ値を ORP に変換
  }
  if(millis() >= printTime)   // 800ミリ秒ごとに数値を出力し、LEDインジケーターの状態を切り替える
  {
	printTime=millis()+800;
	Serial.print("ORP: ");
	Serial.print((int)orpValue);
        Serial.println("mV");
        digitalWrite(LED,1-digitalRead(LED));
  }
}
```

:::note
- 電極を測定する際、電極のテスト部分（白金線および参照接合部を含む）は同時に液体に浸す必要があります。

- 電極標準溶液（キノンヒドロキノン飽和溶液）の保存期間は48時間です。（付録：キノンヒドロキノン飽和溶液の調製方法：pH 4.00 緩衝液に過剰なキノンヒドロキノンを加えて飽和させます）。
- ヒドロキノン溶液の調製方法：10gのキノンヒドロキノンを1LのpH 4またはpH 7緩衝液（ASTM D1498）に加えます。溶液を磁気攪拌板で最低15分間混合し、未溶解の結晶が残る飽和溶液を作ります。キノンヒドロキノン溶液は混合後8時間以内に使用可能です。

- 電極の白金線が油脂で汚れている場合は、吸収性綿とアセトンまたはアルコールで拭き取ることができます。また、不溶性無機物で汚染されている場合は、30〜50％の塩酸が有効です。さらに、毎日高級トイレットペーパーで清掃することも可能です。

- プローブを長時間液体に浸してはいけません。
:::

- **ステップ 4.** プローブケーブルのインターフェースを外し、センサーの **黒いボタン** を押し続けてリセットします。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/Calibration_for_ORP.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/Calibration_for_ORP.png" alt="pir" width={600} height="auto" /></p>
- **ステップ 5.** 上記のグラフから、誤差が -11 mV であることがわかります。そのため、デモコードの **2行目** のオフセットデータを -11 に修正します。

- **ステップ 6.** センサーをリセットした後、204mV の仕様を持つ校正液にセンサーを入れ、正常に動作するか確認します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/Calibration_Solution.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/Calibration_Solution.png" alt="pir" width={600} height="auto" /></p>
- **ステップ 7.** 最後に、自分の液体を自由に検出することができます。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/202002872_Grove-OPR Sensor_v1.0_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース

- **[ZIP]** [デモコードライブラリ](https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/ORPSensorSample.zip)


## 技術サポートと製品ディスカッション
弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>