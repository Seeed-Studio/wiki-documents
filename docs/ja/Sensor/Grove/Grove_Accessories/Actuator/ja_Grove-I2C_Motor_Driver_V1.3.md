---
title: Grove - I2C モータードライバ V1.3
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-I2C_Motor_Driver_V1.3/
slug: /ja/Grove-I2C_Motor_Driver_V1.3
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver_New.jpg)

Grove - I2C モータードライバ V1.3（最新バージョン）は、ステッピングモーターまたは DC モーターを直接制御できます。その中心には、デュアルチャネル H ブリッジドライバチップ（L298N）があり、各チャネルで最大 2A の電流を処理できます。これは Atmel ATmega8L によって制御され、Arduino などのプラットフォームとの I2C 通信を処理します。両方のモーターを同時に異なる速度と方向で駆動することができます。2 つのブラシ付き DC モーターまたは 1 つの 4 線式 2 相ステッピングモーターを駆動できます。モーターを駆動するには 6V から 15V の電源が必要で、オンボードの 5V 電圧レギュレータが I2C バスと Arduino に電力を供給できます（ジャンパーで選択可能）。すべてのドライバラインは、逆起電力からダイオードで保護されています。

[Grove - I2C モータードライバ V1.2](https://wiki.seeedstudio.com/ja/Grove-I2C_Motor_Driver_V1.2/) と比較して、V1.3 はステッピングモーターの制御をより簡単にします。ステッピングモーターを常に制御する必要はなくなり、I2C モータードライバ V1.3 にコマンドを送信するだけで、ステッピングモーターがそのコマンドに従って動作します。これにより、Arduino のリソースを節約し、コードを簡素化できます。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-I2C-Motor-Driver-p-907.html)

## バージョン

| リビジョン | 説明                                             | リリース日       |
|------------|--------------------------------------------------|------------------|
| v1.0       | 初回公開リリース                                 | 2012年5月17日    |
| v1.2       | ハードウェアによる I2C アドレス設定を変更        | 2012年7月2日     |
| v1.3       | オフラインステッピングモーターをサポートするファームウェアを変更 | 2013年2月18日    |

## 特徴

- Grove 互換
- I2C インターフェース
- モーター速度と回転方向の調整可能
- ハードウェアによるスレーブアドレスの変更可能

:::tip
    Grove モジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

## 仕様

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
<tr>
<th scope="row">
動作電圧
</th>
<td>
6
</td>
<td align="center" >
-
</td>
<td>
15
</td>
<td>
VDC
</td>
</tr>
<tr>
<th scope="row">
チャネルごとの最大出力電流
</th>
<td colspan="3" align="center">
0.5
</td>
<td>
A
</td>
</tr>
<tr>
<th scope="row">
最大合計電流
</th>
<td colspan="3" align="center" >
1.0
</td>
<td>
A
</td>
</tr>
<tr>
<th scope="row">
I2C バスの入出力電圧
</th>
<td colspan="3" align="center" >
5
</td>
<td>
V
</td>
</tr>
<tr>
<th scope="row">
通信プロトコル
</th>
<td colspan="3" align="center" >
I2C
</td>
<td>
/
</td>
</tr>
</table>

:::note
    複数の I2C デバイスを使用したい場合は、[Software I2C](https://wiki.seeedstudio.com/ja/Arduino_Software_I2C_user_guide/) を参照してください。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上記で対応プラットフォームとして挙げられているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム用のソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver-1.jpg)

**78M05 IC:** 5V電圧レギュレータ

**L298 IC:** デュアルフルブリッジドライバ

**ATmega8 IC:** モーター回転を制御

<div class="admonition note">
<p class="admonition-title">注意</p>
ネジ端子の入力電圧は5Vに調整され、ジャンパー（J4）を介してI2C +5Vに接続されます。ネジ端子を介した外部電源とI2Cヘッダーを介した電源の両方を使用する場合は、ジャンパーを取り外してください。I2Cバスに5Vを供給する場合はジャンパーを使用してください。
</div>

## 応用アイデア

- ロボット
- 自作RCカー
- ケースファン
- 高出力LED照明

<div class="admonition danger">
<p class="admonition-title">注意</p>
1アンペアを超える動作中、基板は非常に熱くなります。手を触れないようにしてください！
</div>

## はじめに

:::note
    Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

#### デモンストレーション

I2Cモータードライバは、L298チップをベースにしたモーターを制御できます。L298は単なるデュアルモータードライバではなく、デュアルHブリッジです。Hブリッジは、電流の方向を切り替えるための特定のトランジスタ構成です。モーターに接続すると、両方向に回転させることができ、PWM入力を使用してArduinoで任意の速度で回転させることができます。L298には2つのHブリッジがあるため、各車輪を異なる方向に回転させてロボットを回転させたり、前進・後退させたりすることができます。

#### ハードウェア

- **ステップ1.** 以下のものを準備してください：

| Seeeduino V4.2 | ベースシールド | Grove - I2C Motor Driver V1.3 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver_New_small.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-I2C-Motor-Driver-p-907.html)|

- **ステップ2.** I2Cモータードライバのアドレスを設定します。

- ダイヤルスイッチでアドレスを設定するのは、新しいI2Cモータードライバに追加された新機能です。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver-9.jpg)

- 次に、プログラム内のアドレス設定をI2Cモータードライバ上のアドレス設定と同じに保ちます。プログラム内のデフォルトアドレス設定は0x0fです。
- **ステップ3.** Grove - I2C Motor Driver V1.3をGrove-Base ShieldのI2Cポートに接続します。
- **ステップ4.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ5.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver-4.jpg)

:::note
 Grove Base Shieldがない場合は、以下のようにGrove - I2C Motor Driver V1.3をSeeeduinoに直接接続することもできます。
:::
| Seeeduino       | Grove - I2C Motor Driver V1.3 |
|-----------------|-------------------------|
| 5V              | 赤                     |
| GND             | 黒                   |
| SDA             | 白                   |
| SCL             | 黄                  |

#### ソフトウェア

- **ステップ1.** [Grove_I2C_Motor_Driver_v1_3ライブラリ](https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3/archive/master.zip)をGithubからダウンロードします。
- **ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。
- **ステップ3.** 以下のコードをArduino IDEにコピーしてアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

```c
// デフォルトのI2Cアドレスは0x0f
#define I2C_ADDRESS 0x0f

void setup()
{
    Motor.begin(I2C_ADDRESS);
}
```

<div class="admonition note">
<p class="admonition-title">注意</p>
最初に注意すべき点は、DCモーターには外部電源が必要であるということです。Arduinoの5Vピンでは2つのモーターを駆動するのに十分な電力を供給できません。そのような場合、Arduinoが損傷する可能性があります。
</div>

- DCモーターを制御するための関数が2つあります：

```c
// モーターの速度を設定します。速度はここではデューティサイクルに相当します。
void speed(unsigned char motor_id, int _speed);

// モーターを停止します。
void stop(unsigned char motor_id);
```

`speed()`関数を使用すると、任意の速度でモーターを駆動することができます。

- **motor_id** は使用するモーターを表します。MOTOR1 または MOTOR2 を指定できます。

- **_speed** はモーターに設定する速度を表します。-100～100の範囲で指定できます。_speed > 0 の場合、DCモーターは時計回りに回転し、_speed < 0 の場合、DCモーターは反時計回りに回転します。また、_speed の絶対値が大きいほど、DCモーターの速度は速くなります。

`stop()`関数を使用すると、動作中のDCモーターを停止することができます。

- **motor_id** は使用するモーターを表します。MOTOR1 または MOTOR2 を指定できます。

**ステッピングモーターを駆動する**

[24BYJ48ステッピングモーター](https://www.seeedstudio.com/depot/high-quality-stepper-motor-12v-p-335.html?cPath=170_171)を例に取ります。ハードウェアの接続は以下の通りです：

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2C_Motor_Driver_control_a_Stepper_Motor.jpg)

[24BYJ48](https://www.seeedstudio.com/depot/high-quality-stepper-motor-12v-p-335.html?cPath=170_171)ステッピングモーターとI2Cモータードライバーの接続は以下の通りです：

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2C_Motor_Driver_Connector.jpg)

- ステッピングモーターを駆動するための関数を1つ提供しています。

```c
// ステッピングモーターを駆動します。
void StepperRun(int _step);
```

- **_step** はステッピングモーターに設定するステップ数を表します。-1024～1024の範囲で指定できます。_step > 0 の場合、ステッピングモーターは時計回りに回転し、_step < 0 の場合、反時計回りに回転します。_step が 512/-512 の場合、ステッピングモーターは1回転し、_step が 1024/-1024 の場合、ステッピングモーターは2回転します。ステッピングモーターは設定されたステップ数を完了すると自動的に停止します。

### Codecraftで遊ぶ

#### ハードウェア

**ステップ1.** Groveケーブルを使用してGrove - I2C Motor DriverをSeeeduinoのI2Cポートに接続します。Arduinoを使用している場合は、Base Shieldを利用してください。

**ステップ2.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
    初めてCodecraftを使用する場合は、[Codecraftを使用したArduinoのガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)も参照してください。
:::

**ステップ2.** 以下の画像のようにブロックをドラッグするか、このページの最後でダウンロードできるcdcファイルを開きます。

![cc](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/cc_I2C_Motor_Driver.png)

プログラムをArduino/Seeeduinoにアップロードします。

:::tip
    コードのアップロードが完了すると、Motor Driverに接続されたDCモーターが動作するのが確認できます。
:::

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove-I2C_Motor_Driver_v1.3_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle]** [Grove - I2C Motor Driver V1.3 回路図](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove-I2C_Motor_Driver_v1.3_Eagle_File.zip)

- **[PDF]** [Grove - I2C Motor Driver V1.3 PCB（PDF形式）](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove%20-%20I2C%20Motor%20Driver%20%20v1.3b%20PCB.pdf)

- **[PDF]** [Grove - I2C Motor Driver V1.3 回路図（PDF形式）](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove%20-%20I2C%20Motor%20Driver%20%20v1.3b.pdf)

- **[Library]** [Grove - I2C Motor Driver V1.3 ライブラリ](https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3)

- **[Firmware]** [I2Cモータードライバー用オンチップファームウェア](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/On-Chipfirmware_for_Motor_driver.zip)

- **[Datasheet]** [L298 データシート](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/L298datasheet.pdf)

- **[Datasheet]** [78M05 データシート](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/ST_78M05DataSheet.pdf)

- **[Codecraft]** [CDCファイル](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove_I2C_Motor_Driver_CDC_File.zip)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_I2C_Motor_Driver_V1.3 から作成されました -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>