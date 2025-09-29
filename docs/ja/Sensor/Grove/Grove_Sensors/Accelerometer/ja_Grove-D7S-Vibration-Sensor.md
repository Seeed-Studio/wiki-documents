---
description: Grove D7S振動センサーの使い方
title: Grove - D7S振動センサー
keywords:
- Grove
- 振動
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/grove-d7s-vibration-sensor
last_update:
  date: 05/15/2025
  author: Stephen Lo
---


# Grove - D7S振動センサー

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/main.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-D7S-Vibration-Sensor-p-5701.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

<br />

Grove - D7S振動センサーは、地震活動をリアルタイムで監視する強力な地震検知モジュールです。これは、センシング技術のリーディングメーカーであるオムロン株式会社が開発した高度なD7Sモジュールを基にしています。

高精度の3軸加速度計と高度な地震アルゴリズムを搭載したGrove - D7S振動センサーは、地震イベントの正確で信頼性の高い検知を提供します。さまざまな種類の振動を検知し、その深刻度に基づいて分類することができ、地震監視や安全用途に貴重な情報を提供します。

シンプルさと汎用性を念頭に設計されたGrove - D7S振動センサーは、モジュール型プロトタイピングプラットフォームであるGroveシステムとシームレスに統合されます。その標準化されたインターフェースにより、Arduinoボードやその他の互換性のある開発プラットフォームへの簡単な接続が可能です。

## 概要

### 特徴

- **高精度加速度計**: 3軸加速度計を搭載しており、振動や地震活動の正確な測定を提供します。
- **リアルタイム地震検知**: Grove - D7S振動センサーは高度なアルゴリズムを使用して、地震イベントをリアルタイムで検知および分類します。地震の規模を区別し、対応する警告信号を提供することができます。
- **Groveシステムとの簡単な統合**: センサーはGrove互換インターフェースを備えており、Arduinoボードやその他の互換性のあるプラットフォームへの簡単な接続が可能です。複雑な配線やはんだ付けは不要で、初心者から上級者まで幅広いユーザーにアクセス可能です。
- **コンパクトで堅牢な設計**: Grove - D7S振動センサーはコンパクトな形状を持ち、スペースが限られたさまざまな用途に適しています。その堅牢な構造により、過酷な環境でも耐久性と信頼性の高い性能を保証します。
- **低消費電力**: センサーは低消費電力で動作するように設計されており、電源を急速に消耗することなく長期的な監視用途に適しています。

### 仕様

- チップ: D7S  
- 測定範囲: ±6g  
- 通信インターフェース: I2C  
- Groveコネクタ: 4ピンHY2.0  
- 動作電圧: 3.3/5V  

### 同梱物

- 1 x Grove - D7S振動センサーボード  
- 1 x Groveケーブル（20cm）  

### 応用例

Grove - D7S振動センサーは、以下を含む幅広い用途で使用できますが、これに限定されません：

- **地震監視システム**: 建物、橋梁、重要なインフラにセンサーを設置することで、地震活動をリアルタイムで監視できます。早期検知と警告システムを可能にし、安全性と災害対応の向上に寄与します。
- **地震研究と分析**: 研究者はGrove - D7S振動センサーを利用して地震研究と分析のためのデータを収集できます。センサーの高精度測定は、地震のパターンや特性に関する貴重な洞察を提供します。
- **構造安全性評価**: センサーは構造健全性監視システムに統合され、建物、橋梁、その他の構造物の健全性と安定性を評価することができます。地震イベントによる潜在的な構造的弱点を特定するのに役立ちます。
- **IoTベースの地震監視ネットワーク**: 複数のGrove - D7S振動センサーをネットワークに展開することで、広範囲にわたる包括的な地震監視システムを構築することが可能です。このセットアップにより、効率的なデータ収集と分析が可能となり、地震への備えが向上します。

これらは、Grove - D7S振動センサーが可能にする多様な用途のほんの一例です。その汎用性と高性能により、地震関連プロジェクトにおいて貴重なツールとなります。

## ハードウェア概要

### ピンマップ

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/pinmap.png" alt="pir" width={500} height="auto" /></p>

## はじめに

:::note
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | ベースシールド | Grove - D7S振動センサー |
|----------------|----------------|-------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/main.jpg" alt="pir" width={250} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-D7S-Vibration-Sensor-p-5701.html" target="_blank">今すぐ購入</a>|

:::note
**1.** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2.** Groveモジュールを購入すると、Groveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ1.** Grove - D7S振動センサーをGrove-Base Shieldの**I2C**ポートに接続します。

- **ステップ2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ3.** USBケーブルを使用してSeeeduinoをPCに接続します。

| Seeeduino     | Grove - D7S振動センサー |
|---------------|-------------------------|
| 3.3/5V        | 赤                     |
| GND           | 黒                     |
| SDA           | 白                     |
| SCL           | 黄色                   |

#### ソフトウェア

- **ステップ1.** [Grove - D7S振動センサー](https://github.com/limengdu/d7s-grove-arduino)をGithubからダウンロードします。

- **ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ3.** ライブラリを正しくダウンロードしてインストールした後、examplesフォルダ内にあるsample.inoという名前のサンプルプログラムを見つけることができます。このプログラムはD7Sモジュール用に設計されています。

```cpp
#include <D7S.h>

//以前の地震データ
float oldSI = 0;
float oldPGA = 0;

//地震中に1回だけ崩壊/シャットオフを処理するためのフラグ変数
bool shutoffHandled = false;
bool collapseHandled = false;

//崩壊イベントを処理する関数
void handleCollapse()
{
    //崩壊イベントを処理するコードをここに記述してください
    Serial.println("-------------------- 崩壊! --------------------");
}

void setup()
{
    // シリアル通信を開始し、ポートが開くのを待つ:
    Serial.begin(9600);
    while (!Serial)
    {
        ; // シリアルポートが接続されるのを待つ。ネイティブUSBポートのみ必要
    }

    Serial.print("D7S通信を開始します（少し時間がかかる場合があります）...");
    //D7S接続を開始
    D7S.begin();
    //D7Sが準備完了になるまで待機
    while (!D7S.isReady())
    {
        Serial.print(".");
        delay(500);
    }
    Serial.println("開始しました");

    //D7Sを初期化時に軸を切り替えるよう設定
    Serial.println("D7Sセンサーを初期化時に軸を切り替えるよう設定します。");
    D7S.setAxis(SWITCH_AT_INSTALLATION);

    Serial.println("2秒後にD7Sセンサーを初期化します。初期化プロセス中は静止状態を保ってください。");
    delay(2000);
    Serial.print("初期化中...");
    //初期設置手順を開始
    D7S.initialize();
    //D7Sが準備完了になるまで待機（初期化プロセスが終了するまで）
    while (!D7S.isReady())
    {
        Serial.print(".");
        delay(500);
    }
    Serial.println("初期化完了!");

    //崩壊が発生しているか確認（D7Sが初めて設置された場合、設置データが誤っている可能性があります）
    if (D7S.isInCollapse())
    {
        handleCollapse();
    }

    //D7Sに記憶されているシャットオフ/崩壊イベントをリセット
    D7S.resetEvents();

    Serial.println("\n地震を監視中!");
}

void loop()
{

    //現在地震が発生しているか確認
    if (D7S.isEarthquakeOccuring())
    {

        //シャットオフイベントが処理済みか確認し、シャットオフ条件が満たされているか確認
        //D7S.isInShutoff()の呼び出しは無駄なI2C呼び出しを防ぐために後で実行
        if (!collapseHandled && D7S.isInCollapse())
        {
            handleCollapse();
            collapseHandled = true;
        }

        //現在の地震に関する情報を出力
        float currentSI = D7S.getInstantaneusSI();
        float currentPGA = D7S.getInstantaneusPGA();

        if (currentSI > oldSI || currentPGA > oldPGA)
        {
            //瞬間的なSIを取得
            Serial.print("\t瞬間的なSI: ");
            Serial.print(currentSI);
            Serial.println(" [m/s]");

            //瞬間的なPGAを取得
            Serial.print("\t瞬間的なPGA（ピーク地盤加速度）: ");
            Serial.print(currentPGA);
            Serial.println(" [m/s^2]\n");

            //現在のデータを保存
            oldSI = currentSI;
            oldPGA = currentPGA;
        }
    }
    else
    {
        //以前の地震データをリセット
        oldPGA = 0;
        oldSI = 0;
        //処理済みイベントのフラグをリセット
        shutoffHandled = false;
        collapseHandled = false;
        //D7Sイベントをリセット
        D7S.resetEvents();
    }
}
```

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)をご確認ください。

- **ステップ 5.** Arduino IDE の **シリアルモニター** を開きます。**ツール -> シリアルモニター** をクリックしてください。例えば、テーブルを叩くなどして振動を発生させると、以下のような結果が得られます。

:::note
センサーの初期化には約3〜5分かかります。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/output.png" style={{width:1000, height:'auto'}}/></div>

## トラブルシューティング

### Q1: Grove - D7S 振動センサーはすべての種類の地震を検知できますか？

Grove - D7S 振動センサーは、軽微な地震から大規模な地震まで幅広い地震活動を検知するよう設計されています。ただし、検知範囲や感度は地震の規模や震源地の近さによって異なる場合があります。

### Q2: Grove - D7S 振動センサーは Arduino 以外の開発ボードでも使用できますか？

はい、Grove - D7S 振動センサーは I2C インターフェースをサポートする他の開発ボードとも互換性があります。選択したプラットフォームに必要なライブラリやリソースが揃っていることを確認してください。

### Q3: Grove - D7S 振動センサーの電源要件は何ですか？

センサーは 3.3V で動作します。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/D7S-Vibration-Sensor.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [Grove - D7S 振動センサー SCH&PCB](https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/D7S-Vibration-Sensor.zip)
- **[PDF]** [D7S データシート](https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/en-d7s-957666.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なるニーズや好みに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>