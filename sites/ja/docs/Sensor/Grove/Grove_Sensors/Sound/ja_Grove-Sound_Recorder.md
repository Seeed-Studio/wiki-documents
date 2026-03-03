---
title: Grove - サウンドレコーダー
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-Sound_Recorder/
slug: /ja/Grove-Sound_Recorder
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/Grove-Sound_Recorder.jpg)

Grove-Sound Recorderは、[APR9600](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/res/Datasheet_of_APR9600.pdf)をベースにしており、32～60秒間の音声録音、非揮発性ストレージ、および再生機能を提供する真のシングルチップソリューションです。このデバイスのサンプルレートは8kで、Seeed Twig-Sound Recorderでは合計32秒が4つのセクションに分割されており、それぞれのセクションを個別に制御できます。また、このサウンドレコーダーはGrove互換インターフェースを備えており、手動またはArduino/Seeeduinoで制御可能です。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Sound-Recorder-p-904.html)

特徴
--------

- Grove互換インターフェース
- 手動またはMCUで制御可能
- 非揮発性フラッシュメモリ技術、バッテリーバックアップ不要
- ユーザーフレンドリーで使いやすい操作
- 低消費電力
- 単一の抵抗を交換することでサンプルレートと録音時間を変更可能
:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

応用例
-----------------

- おもちゃ

仕様
--------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
項目
</th>
<th scope="col">
最小
</th>
<th scope="col">
標準
</th>
<th scope="col">
最大
</th>
<th scope="col">
単位
</th>
</tr>
<tr align="center">
<th scope="row">
電圧
</th>
<td>
3.0
</td>
<td>
5.0
</td>
<td>
5.25
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
動作電流
</th>
<td colspan="3">
25
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
待機電流
</th>
<td colspan="3">
1
</td>
<td>
uA
</td>
</tr>
<tr align="center">
<th scope="row">
範囲
</th>
<td colspan="3">
±1.5
</td>
<td>
g
</td>
</tr>
</table>

使用方法
-----

このGrove-Sound Recorderは、固定時間の4つのメッセージセグメントをサポートしています。各セグメントは手動またはMCU（Arduino/Seeeduino）で制御可能です。また、各セグメントの録音時間はユーザーが変更できます。
[Recorder Method](http://ijam.com.au/)

手動でレコーダーを制御するのは非常に簡単です。それでは見てみましょう。スイッチ（SW1）は録音/再生の選択用で、録音したい場合は「Rec」に、録音した音声を再生したい場合は「Play」に切り替えます。4つのボタン（K1～K4）は制御ボタンで、関連するボタンを押すことでセグメントを制御して録音/再生できます。出力コネクタは8Ω0.5Wスピーカーを接続するためのもので、Groveコネクタは電源供給とMCU制御用です。

### 手動で制御する方法

ステップ1: レコーダーに電源を供給します。「Control」をGrove 4ピンワイヤーを介してBase Shieldまたは任意の5V電源に接続します。

<div class="admonition note">
<p class="admonition-title">注意</p>
4ピンワイヤーを介してBase Shieldに接続する場合、接続されたピンをプログラムでSEL1とSEL2をLowに設定する必要があります。
</div>

私は「Control」コネクタをデジタルポートD1に接続し、以下のようにD1とD2をLowに設定しました：

```
const int D1 =  1;
const int D2 =  2;
int State = LOW;
void setup() {
    pinMode(D1, OUTPUT);
    pinMode(D2, OUTPUT);
    digitalWrite(D1, State );
    digitalWrite(D2, State );
}
void loop()
{
}
```

ステップ2: SW1を「Rec」に切り替えます。

ステップ3: セグメントに関連するボタン（例: K1）を押し続けて録音を開始し、ボタンを離して録音を停止します。録音の開始と停止時に「DI」という音が聞こえます。

<div class="admonition note">
<p class="admonition-title">注意</p>
各セグメントの録音時間は15秒を超えないようにしてください。それ以上になると、ボタンを押し続けていても自動的に停止します。
</div>

ステップ4: 録音した音声を再生したい場合は、SW1を「Play」に切り替え、関連するボタンを押します（押し続ける必要はありません）。すると、そのセグメントに録音された音声が再生されます。

### Arduino/Seeeduinoでレコーダーを制御する方法

このレコーダーはMCU（ArduinoまたはSeeeduino）でも制御可能です。この機能により、このレコーダーモジュールはさらに多くのアプリケーションに適し、ユーザーに素晴らしい体験を提供します。
それでは、MCUでの制御を始めましょう。K1/K2/K3/K4で制御される4つのセグメントを、それぞれSection_1/Section_2/Section_3/Section_4と定義します。

ステップ1: ハードウェアを準備します。「Control」コネクタをBase ShieldのデジタルポートD2に接続し、SW1を「Rec」に切り替えます。

![](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/D2.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/Sel.jpg)

ステップ2: ソフトウェアを準備します。セクションを選択して録音/再生を行うために、Sel_1とSel_2の各デコードが異なるセクションを指します。

| Sel_1(D2)/Sel_2(D1) | 選択されたセグメント                |
|---------------------|---------------------------------|
| 0 0                 | なし *(セグメントが選択されていません)* |
| 0 1                 | Section_2                       |
| 1 0                 | Section_3                       |
| 1 1                 | Section_4                       |

<div class="admonition note">
<p class="admonition-title">注意</p>
MCUで制御する場合、Section_1は選択できません。
</div>

*こんな表は興味ない、混乱する！コードだけが欲しい？*
以下のコードをArduino/Seeeduinoにダウンロードしてください。

```
/****************************************************************************/

#include "APR9600.h"

/*Sound RecorderのGroveインターフェースのマクロ定義*/
#define SEL1 2
#define SEL2 3
ARP9600 recorder(SEL1,SEL2);

/*シリアルモニタから入力されたコマンドを格納*/
char index;// '2','3','4'のいずれか、セクション2, セクション3, セクション4のインデックス
char control;//制御バイト、'r'は録音、's'は録音停止、
//'p'は再生

void setup()
{
    Serial.begin(9600);
    recorder.begin();
}
void loop()
{
    getCommand();
    delay(50);
}
void getCommand()
{
    if (Serial.available()>0)
    {
        /*シリアルモニタからコマンドを取得*/
        index = Serial.read();
        control = Serial.read();
    }
    while(Serial.available()>0)Serial.read();//受信バッファをクリア
    if((index > '1')&&(index < '5'))// インデックスは2～4である必要があります
    {
        if(control == 'r')//録音コマンドの場合
        {
            recorder.record(index - 0x30);
            Serial.print("get the ");
            Serial.write(index);
            Serial.write(control);
            Serial.print(" command, ");
            Serial.print("begin to record section_");
            Serial.println(index - 0x30);
        }
        else if(control == 'p')//再生コマンドの場合
        {
            recorder.play(index - 0x30);
            Serial.print("get the ");
            Serial.write(index);
            Serial.write(control);
            Serial.print(" command, ");
            Serial.print("begin to play section_");
            Serial.println(index - 0x30);
        }
        else if(control == 's')//停止コマンドの場合
        {
            recorder.stop();//録音停止
            Serial.print("get the ");
            Serial.write(index);
            Serial.write(control);
            Serial.print(" command, ");
            Serial.print("stop recording");
        }
            /*コマンドをクリア*/
        index = 0;
        control = 0;
    }
}
```

以下のコマンドを使用してレコーダーを制御できます（ボーレート: 9600）:

|         |                           |              |
|---------|---------------------------|--------------|
| コマンド | 説明                      | SW1の状態    |
| 2rb     | Section_2の録音を開始      | REC          |
| 2rs     | Section_2の録音を停止      | REC          |
| 2p      | Section_2を再生            | Play         |
| 3rb     | Section_3の録音を開始      | REC          |
| 3rs     | Section_3の録音を停止      | REC          |
| 3p      | Section_3を再生            | Play         |
| 4rb     | Section_4の録音を開始      | REC          |
| 4rs     | Section_4の録音を停止      | REC          |
| 4p      | Section_4を再生            | Play         |

<div class="admonition note">
<p class="admonition-title">注意</p>
Section_1はMCUによって制御することはできません。
</div>

Arduino/Seeeduinoにファームウェアをダウンロードした後、コネクタ「Control」がD2&D3&V&Gに接続されていることを確認してください。

SW1をRecに切り替え、任意のシリアルポートトランシーバー（例: OCTOPUS）を使用してコマンドを入力します。まず「2rb」を入力してSection_2の録音を開始し、「2rs」を入力して録音を停止します。なお、「2rs」を入力しない場合、録音は約15秒後に自動的に終了します。

![](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/2rb.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/2b.jpg)

次に「2p」を入力してSection_2を再生できます。この際、SW1が「Play」に切り替えられていることを確認してください。

![](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/2p.jpg)

3つのセクション（Section_2、Section_3、Section_4）を録音した後、シリアルポートを使用して再生したいセクションを選択して制御できます。

### 各セクションのサンプルレートと録音時間を変更する方法

サンプリング周波数を制御することで、品質と録音時間のトレードオフを調整できます。発振器の周波数は、OscRピンからGNDへの抵抗値**（PCB上のR7）**を変更することで変更できます。以下の表は、抵抗値と対応するサンプリング周波数、入力帯域幅、および録音時間をまとめたものです。

| 抵抗値   | サンプリング周波数 | 入力帯域幅     | 録音時間 |
|----------|--------------------|----------------|----------|
| 44 K     | 4.2 KHZ            | 2.1 KHZ        | 60 S     |
| 38 K     | 6.4 KHZ            | 3.2 KHZ        | 40 S     |
| 24 K     | 8.0 KHZ            | 4.0 KHZ        | 32 S     |

R7は出荷時に24Kに設定されていますが、38Kまたは44Kに変更することで、サンプルレートを下げる代わりに録音時間を延長することができます。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/res/Sound_Recorder_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [Grove-Sound Recorder Eagle File](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/res/Sound_Recorder_Eagle_File.zip)
- [APR9600 データシート](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/res/Datasheet_of_APR9600.pdf)
- [ユーザー提供のソフトウェアライブラリ（旧Arduino IDE/ソフトウェアを使用）](https://github.com/wendellinfinity/GroveSoundRecorder)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_Sound_Recorder から作成されました -->

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品の使用体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>