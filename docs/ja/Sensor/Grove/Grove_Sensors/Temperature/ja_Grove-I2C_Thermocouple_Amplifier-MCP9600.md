---
description: Grove - I2C 熱電対アンプ (MCP9600)
title: Grove - I2C 熱電対アンプ (MCP9600)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-I2C_Thermocouple_Amplifier-MCP9600
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Main.jpg" /></div>

Grove - I2C 熱電対アンプ (MCP9600) は、冷接点補償と I2C 通信プロトコルを統合した熱電対からデジタルへの変換モジュールです。このモジュールは、K 型熱電対と組み合わせて使用するよう設計されています。熱電対はサーミスタよりもはるかに広い測定範囲を持っています。例えば、当社ウェブサイトで販売しているこの [K 型熱電対](https://www.seeedstudio.com/Thermocouple-Temperature-Sensor-K-Type-1M-p-3132.html) は、-50℃ から +600℃ の測定範囲を持っています。

また、このモジュールにはアラート機能も提供しており、プログラム可能なアラートピンを使用してコントローラーに割り込み信号を提供することができます。

再度お伝えしますが、このモジュールは単独では動作しません。K 型熱電対と一緒に使用する必要があります。もしお持ちでない場合は、当社のバザールで [Thermocouple Temperature Sensor K Type-1M](https://www.seeedstudio.com/Thermocouple-Temperature-Sensor-K-Type-1M-p-3132.html) をご検討ください。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-I2C-Thermocouple-Amplifier-%28MCP9600%29-p-3199.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## バージョン

| 製品バージョン  | 変更点                                                                                               | リリース日 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - I2C 熱電対アンプ (MCP9600) | 初版                                                                                               | 2018年8月      |

## 特徴

- 冷接点補償を統合
- 対応タイプ（NIST ITS-90 による指定）：K 型、J 型、T 型、N 型、S 型、E 型、B 型、R 型
- 4 つのプログラム可能な温度アラート出力：
  - 高温接点または冷接点の温度を監視
  - 温度の上昇または下降を検出
  - 最大 255°C のプログラム可能なヒステリシス
- 温度用プログラム可能なデジタルフィルター
- 低消費電力

:::note
Grove - I2C 熱電対アンプ (MCP9600) はハードウェア上で K 型、J 型、T 型、N 型、S 型、E 型、B 型、R 型をサポートしていますが、現時点では当社のライブラリは K 型熱電対以外をサポートしていません。
:::

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V/5V|
|周囲温度|-40℃ ~ +125℃|
|保管温度|-65℃ ~ +150℃|
|最大接合温度|+150℃|
|高温接点精度|±1.5°C (最大)|
|測定分解能|高温接点および冷接点: 0.0625°C (典型値)|
|インターフェース|I2C|
|I2C アドレス|0x60 (デフォルト) / 0x67 (オプション)|
|サイズ|長さ: 40mm 幅: 20mm 高さ: 18mm|
|重量|4.8g|
|パッケージサイズ|長さ: 130mm 幅: 85mm 高さ: 20mm|
|総重量|11g|

## 応用例

- 石油化学の熱管理
- 携帯型測定機器
- 産業機器の熱管理
- オーブン
- 産業用エンジンの熱モニタリング
- 温度検出ラック

## ハードウェア概要

### ピンマップ

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Pin_map.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Pin_map_back.jpg" /></div>

### 回路図

**電源**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/schematic_1.jpg" /></div>

MCP9600の動作電圧範囲は2.7V～5.5Vです。安定した3.3VをMCP9600に供給するために、電源変換チップ *XC6206P332MR-G* を使用しています。

**入力ジャック**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/schematic.jpg" /></div>

小信号レベルが関与するため、ノイズをフィルタリングするために多くの対策を講じています。

- **1--L1, L2**  
  熱電対は最大1メートルの長さまで使用します。このような長いワイヤはアンテナと見なされ、空間電界干渉を受けて高周波ノイズを生成します。そのため、高周波ノイズをフィルタリングするために2つのインダクタンスを使用しています。

- **2--C1**  
  チップメーカーによって強く推奨されているのは、100nFのセラミック表面実装型差動コンデンサをT+とT-ピン間に配置し、熱電対ラインのノイズをフィルタリングすることです。

- **3--D1**  
  SZNUP2105LT3Gデュアル双方向電圧サプレッサを使用して、このモジュールを静電気放電（ESD）から保護しています。

**双方向レベルシフター回路**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/schematic_2.jpg" /></div>

これは、I<sup>2</sup>Cバスの異なる電圧セクションを接続するための典型的な双方向レベルシフター回路です。このセンサーのI<sup>2</sup>Cバスは3.3Vを使用しますが、ArduinoのI<sup>2</sup>Cバスが5Vを使用する場合、この回路が必要になります。上記の回路図では、**Q1**と**Q5**はNチャンネルMOSFET [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf)であり、双方向スイッチとして機能します。この部分をよりよく理解するために、[AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)を参照してください。

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
    上記で対応可能とされているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - I2C Thermocouple Amplifier |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html" target="_blank">今すぐ購入</a>|

:::note
**1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。お持ちのケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** 各Groveモジュールには購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ 1.** Grove - I2C Thermocouple Amplifier (MCP9600) を Grove-Base Shield の **I2C** ポートに接続します。

- **ステップ 2.** Grove - Base Shield を Seeeduino に差し込みます。

- **ステップ 3.** USBケーブルを使用してSeeeduinoをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/connect.jpg" /></div>

:::note
Grove Base Shieldがない場合でも、以下のようにこのモジュールをSeeeduinoに直接接続することができます。
:::

| Seeeduino     |  Groveケーブル |Grove - I2C Thermocouple Amplifier       |
|---------------|-------------------------|--------|
| GND            |     黒               |GND |
| 5V / 3.3V          |   赤                    | VCC |
| SDA           | 白                   |  SDA  |
| SCL           | 黄                  |  SCL  |

#### ソフトウェア

:::note
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

- **ステップ 1.** [Seeed_MCP9600](https://github.com/Seeed-Studio/Seeed_MCP9600) ライブラリをGithubからダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ 3.** Arduino IDEを再起動します。以下の3つの方法で例を開くことができます：
    1. Arduino IDEで直接開く：**File --> Examples --> Grove Temperature sensor MCP9600 --> MCP9600_4channel_INT_demo** のパスをたどります。
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Path.jpg" /></div>

    2. コンピュータ上で開く：**XXXX\Arduino\libraries\Seeed_MCP9600-master\examples\MCP9600_4channel_INT_demo** フォルダ内の **MCP9600_4channel_INT_demo.ino** をクリックします。**XXXX** はArduino IDEをインストールした場所です。
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Path_1.jpg" /></div>

    3. または、コードブロックの右上隅にあるアイコン ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) をクリックして、以下のコードをArduino IDEの新しいスケッチにコピーすることもできます。

```cpp
#include "Seeed_MCP9600.h"

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
#else
  #define SERIAL Serial
#endif

MCP9600 sensor;

/**@brief 割り込み設定
 * 
 * 
 * */
err_t sensor_INT_config()
{
    err_t ret=NO_ERROR;
    CHECK_RESULT(ret,sensor.set_filt_coefficients(FILT_MID));

    for(int i=0;i<4;i++)
    {
        /* 温度を16ビットデータに変換 */
        CHECK_RESULT(ret,sensor.set_alert_limit(i,sensor.covert_temp_to_reg_form(28+i)));
        /* ヒステリシスを設定。例えば、ヒステリシスを2℃に設定し、INT制限が30℃の場合、温度が制限を超えると割り込みが発生し、温度が30-2（制限-ヒステリシス）28℃未満になるまで割り込みフラグが保持されます。 */
        CHECK_RESULT(ret,sensor.set_alert_hys(i,2)); 

         /* 割り込みが発生したときのピンの状態を設定 */
        CHECK_RESULT(ret,sensor.set_alert_bit(i,ACTIVE_LOW));

        CHECK_RESULT(ret,sensor.clear_int_flag(i));

        /* デフォルトはコンパレータモード */
        CHECK_RESULT(ret,sensor.set_alert_mode_bit(i,COMPARE_MODE));

        /* アラートピンを有効化 */
        CHECK_RESULT(ret,sensor.set_alert_enable(i,ENABLE));
    }    

    /* デバイス設定 */
    CHECK_RESULT(ret,sensor.set_cold_junc_resolution(COLD_JUNC_RESOLUTION_0_25));
    CHECK_RESULT(ret,sensor.set_ADC_meas_resolution(ADC_14BIT_RESOLUTION));
    CHECK_RESULT(ret,sensor.set_burst_mode_samp(BURST_32_SAMPLE));
    CHECK_RESULT(ret,sensor.set_sensor_mode(NORMAL_OPERATION));

    return NO_ERROR;
}


err_t get_temperature(float *value)
{
    err_t ret=NO_ERROR;
    float hot_junc=0;
    float junc_delta=0;
    float cold_junc=0;
    bool stat=true;
    
    CHECK_RESULT(ret,sensor.check_data_update(&stat));
    if(stat)
    {
        CHECK_RESULT(ret,sensor.read_hot_junc(&hot_junc));
        CHECK_RESULT(ret,sensor.read_junc_temp_delta(&junc_delta));
        
        CHECK_RESULT(ret,sensor.read_cold_junc(&cold_junc));
        
        *value=hot_junc;
    }
    else
    {
        SERIAL.println("データが準備できていません!!");
    }

    return NO_ERROR;
}


void setup()
{
    SERIAL.begin(115200);
    delay(10);
    SERIAL.println("シリアル開始!!");
    if(sensor.init(THER_TYPE_K))
    {
        SERIAL.println("センサーの初期化に失敗しました!!");
    }
    sensor_INT_config();
}



void loop()
{
    float temp=0;
    u8 byte=0;
    u8 stat=0;
 

    get_temperature(&temp);
    SERIAL.print("温度 ==============================>>");
    SERIAL.println(temp);

    sensor.read_INT_stat(&stat);

    SERIAL.println(" ");
    SERIAL.println(" ");

    delay(1000);
}
```

:::note
ライブラリには2つのデモがあります：  
**MCP9600_basic_demo.ino**  
> この例は温度センサーの基本的な使用例です。データをポーリングする必要があります。

**MCP9600_4channel_INT_demo.ino**  
> センサーモジュールには4つのアラートパッドがあり、これらはアラートピンに接続されています。提供されたAPIを使用して温度制限を設定できます。温度が制限を超えると、アラートピンはLowを出力します。アラートピンをホストの割り込みピンに接続することで、プログラムの動作効率を向上させることができます。
:::

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 5.** Arduino IDEの**シリアルモニタ**を開きます。**ツール -> シリアルモニタ**をクリックするか、++ctrl+shift+m++キーを同時に押します。ボーレートを**115200**に設定してください。

:::tip
すべてが正常に動作していれば、シリアルモニタを開いたときに温度値とアラート情報が表示されます。
:::

```cpp
serial start!!
version =4011

temperature ==============================>>25.81
 
 
temperature ==============================>>27.62
 
 
temperature ==============================>>29.37
channel 0generate interruption!!!
channel 1generate interruption!!!
 
 
temperature ==============================>>30.81
channel 0generate interruption!!!
channel 1generate interruption!!!
channel 2generate interruption!!!
 
 
temperature ==============================>>31.56
channel 0generate interruption!!!
channel 1generate interruption!!!
channel 2generate interruption!!!
channel 3generate interruption!!!


temperature ==============================>>28.56
channel 0generate interruption!!!
channel 1generate interruption!!!
channel 2generate interruption!!!


temperature ==============================>>27.33
channel 0generate interruption!!!
channel 1generate interruption!!!


temperature ==============================>>26.71
channel 0generate interruption!!!
```

#### アラート機能

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Function_ep.jpg" /></div>

ご覧の通り、温度が上昇した場合と下降した場合で割り込みが発生する際にヒステリシスがあります。例えば、温度が上昇して28℃に達するとアラートピン0がトリガーされ、温度が下降すると制限点は26℃になります。温度が26℃未満になった場合にのみ、アラートピン0が解除されます。

```
hysteresis = 28℃ - 26℃ = 2℃
```

アラートピン1、アラートピン2、アラートピン3も同じ原理に従います。ヒステリシス値や制限値は、23行目と26行目を変更することで調整できます。

```cpp
CHECK_RESULT(ret,sensor.set_alert_limit(i,sensor.covert_temp_to_reg_form(28+i)));

/* ヒステリシスを設定します。例えば、ヒステリシスを2℃に設定し、INT制限を30℃に設定した場合、温度が制限を超えると割り込みが発生し、温度が30-2（制限-ヒステリシス）28℃未満になるまで割り込みフラグは保持されます。 */

CHECK_RESULT(ret,sensor.set_alert_hys(i,2)); 
```

パラメータ**i**を使用してアラートピン番号を選択し、パラメータ**28**は制限値を示します。ヒステリシスについては、関数**sensor.set_alert_hys(i,2)**を使用します。パラメータ**2**はヒステリシス値を表します。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/res/Grove%20-%20I2C%20Thermocouple%20Amplifier(MCP9600).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - I2C Thermocouple Amplifier (MCP9600) Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/res/Grove%20-%20I2C%20Thermocouple%20Amplifier(MCP9600).zip)

- **[Zip]** [Seeed MCP9600 ライブラリ](https://github.com/Seeed-Studio/Seeed_MCP9600/archive/master.zip)

- **[PDF]** [MCP9600 のデータシート](https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/res/MCP9600.pdf)

## プロジェクト

この製品の紹介動画です。簡単なデモが含まれており、試してみることができます。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/3slfeHKSSCw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポートと製品ディスカッション

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 産業用センサーへのアップグレード可能

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Grove を簡単に LoRaWAN® センサーに変えることができます。Seeed はプロトタイピングをサポートするだけでなく、SenseCAP シリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66 ハウジング、Bluetooth 設定、グローバル LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、そして強力なアプリサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして 8-in-1 気象ステーション用センサーが含まれています。次の成功する産業プロジェクトには最新の SenseCAP S210x を試してみてください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>