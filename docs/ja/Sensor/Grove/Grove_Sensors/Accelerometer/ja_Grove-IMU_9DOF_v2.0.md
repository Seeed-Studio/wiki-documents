---
description: Grove - IMU 9DOF v2.0
title: Grove - IMU 9DOF v2.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-IMU_9DOF_v2.0
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/Grove-IMU_9DOF_v2.0.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/Grove-IMU_9DOF_v2.0.JPG" alt="pir" width={600} height="auto" /></p>

Grove - IMU 9DOF v2.0は、**Grove - IMU 9DOF v1.0**のアップグレード版であり、高性能な9軸モーション追跡モジュールです。このモジュールはMPU-9250をベースにしています。MPU-9250は、スマートフォン、タブレット、ウェアラブルセンサーなどの消費者向け電子機器の低消費電力、低コスト、高性能要件に対応するために設計された統合型9軸モーション追跡デバイスです。MPU-9250は、ジャイロスコープ出力をデジタル化するための3つの16ビットADC、加速度計出力をデジタル化するための3つの16ビットADC、および磁力計出力をデジタル化するための3つの16ビットADCを備えています。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html)

## 仕様

-   I2C/SPIインターフェース
-   補助I2C
-   低消費電力
-   すべてのレジスタとの通信のための400kHz高速モードI2C
-   ユーザーがプログラム可能なフルスケール範囲（±250、±500、±1000、±2000°/秒）を持つデジタル出力3軸角速度センサー（ジャイロスコープ）
-   プログラム可能なフルスケール範囲（±2g、±4g、±8g、±16g）を持つデジタル出力3軸加速度計
-   フルスケール測定範囲が±4800μTのデジタル出力3軸加速度計
-   I2Cアドレス: 0x68

:::note
    複数のI2Cデバイスを使用したい場合は、[Software I2C](https://wiki.seeedstudio.com/ja/Arduino_Software_I2C_user_guide/)を参照してください。
:::
:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::

## 対応プラットフォーム

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## ハードウェア概要

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/dimensions.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/dimensions.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/Grove-IMU_9DOF_v2_inter.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/Grove-IMU_9DOF_v2_inter.png" alt="pir" width={600} height="auto" /></p>

① - Groveインターフェース、I2Cに接続

② - I2CまたはSPI選択パッド（デフォルトはI2C）。SPIを使用する場合、このパッドを切断

③ - アドレス選択パッド。デフォルトではbとcが接続され、アドレスは0x68。bとaを接続するとアドレスは0x69。SPIを使用する場合、このパッドをどちらか一方に切断

④ - SPIインターフェース

⑤ - 補助I2Cマスターシリアルデータ

⑥ - 補助I2Cマスターシリアルクロック

⑦ - 割り込みデジタル出力

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

- **ステップ1.** 以下のアイテムを準備してください：

| Seeeduino V4.2 | Base Shield | Grove-IMU_9DOF_v2.0 |
|----------------|-------------|----------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html)|

- **ステップ2.** Grove-IMU_9DOF_v2.0をGrove-Base Shieldの**I2C**ポートに接続します。
- **ステップ3.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ4.** USBケーブルを使用してSeeeduinoをPCに接続します。

<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/with_ardu.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>

:::note
Grove Base Shieldがない場合でも、以下のようにこのモジュールをSeeeduinoに直接接続することができます。
:::
| Seeeduino_v4 | Grove-IMU_9DOF_v2.0  |
|--------------|-----------------------|
| 5V           | VCC                  |
| GND          | GND                  |
| SDA          | SDA                  |
| SCL          | SCL                  |

#### ソフトウェア

**ステップ1.** [ライブラリ](https://github.com/Seeed-Studio/Grove_IMU_9DOF/archive/master.zip)をGithubからダウンロードします。

**ステップ2.** [Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

**ステップ3.** 新しいArduinoスケッチを作成し、以下のコードを貼り付けるか、次のパスから直接コードを開きます：File -> Example -> IMU_9DOF_Demo_Compass_Calibrated -> IMU_9DOF_Demo_Compass_Calibrated。

以下はコードの主要部分です：

```cpp
void setup() {
  // I2Cバスに接続（I2Cdevライブラリはこれを自動で行いません）
  Wire.begin();

  // シリアル通信を初期化
  // （38400は8MHzでも16MHzでも動作するため選択されていますが、プロジェクトに応じて変更可能）
  Serial.begin(38400);

  // デバイスを初期化
  Serial.println("I2Cデバイスを初期化中...");
  accelgyro.initialize();

  // 接続を確認
  Serial.println("デバイス接続をテスト中...");
  Serial.println(accelgyro.testConnection() ? "MPU9250接続成功" : "MPU9250接続失敗");
  delay(1000);
  Serial.println("     ");

  // Mxyz_init_calibrated();
}

void loop()
{   
  getAccel_Data();
  getGyro_Data();
  getCompassDate_calibrated(); // コンパスデータはここでキャリブレーションされています
  getHeading(); // この関数を使用する前に 'getCompassDate_calibrated()' を実行してキャリブレーション済みデータを取得し、正しい角度を得る必要があります
  getTiltHeading();           

  Serial.println("キャリブレーションパラメータ: ");
  Serial.print(mx_centre);
  Serial.print("         ");
  Serial.print(my_centre);
  Serial.print("         ");
  Serial.println(mz_centre);
  Serial.println("     ");

  Serial.println("X, Y, Zの加速度(g):");
  Serial.print(Axyz[0]);
  Serial.print(",");
  Serial.print(Axyz[1]);
  Serial.print(",");
  Serial.println(Axyz[2]);
  Serial.println("X, Y, Zのジャイロ(degress/s):");
  Serial.print(Gxyz[0]);
  Serial.print(",");
  Serial.print(Gxyz[1]);
  Serial.print(",");
  Serial.println(Gxyz[2]);
  Serial.println("X, Y, Zのコンパス値:");
  Serial.print(Mxyz[0]);
  Serial.print(",");
  Serial.print(Mxyz[1]);
  Serial.print(",");
  Serial.println(Mxyz[2]);
  Serial.println("磁北とX軸の間の時計回りの角度:");
  Serial.print(heading);
  Serial.println(" ");
  Serial.println("磁北と水平面上の正のX軸の投影との間の時計回りの角度:");
  Serial.println(tiltheading);
  Serial.println("   ");
  Serial.println("   ");
  Serial.println("   ");
  delay(300);
}
```

:::note
Grove Base Shieldがない場合でも、このモジュールをSeeeduino LoRaWANに直接接続できますが、以下の画像のように3行のコードを追加する必要があります。
:::
<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/modify_code.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/modify_code.png" alt="pir" width={600} height="auto" /></p>

**ステップ4.** コードをアップロードした後、以下のように表示されます：
<!-- 
![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/Grove-IMU_9DOF_v2.0_demo.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/Grove-IMU_9DOF_v2.0_demo.jpg" alt="pir" width={600} height="auto" /></p>

静止状態では、z軸の出力値は約0.98gです。これを参考にしてセンサーが正常に動作しているかをテストできます。

## 参考資料

**軸の方向**

以下の図は、加速度計とジャイロスコープの感度軸の方向および回転の極性を示しています。図中のピン1識別子（•）に注意してください。

- 加速度計およびジャイロスコープの感度軸の方向と回転の極性

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/MPU9250_axes.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/MPU9250_axes.jpg" alt="pir" width={600} height="auto" /></p>

- コンパスの感度軸の方向

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/MPU9250_axes2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/MPU9250_axes2.jpg" alt="pir" width={600} height="auto" /></p>


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/res/Grove-IMU_9DOF_v2.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース

- **[Eagle&PDF]**  [Grove - IMU 9DOF v2.0 Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/res/Grove-IMU_9DOF_v2.0_sch_pcb.zip)
- **[Library]**  [Grove - IMU 9DOF v2.0 ライブラリ](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/res/Grove_IMU_9DOF_9250.zip)
- **[PDF]**  [MPU-9250 データシート](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/res/MPU-9250A_Product_Specification.pdf)
- **[PDF]**  [MPU-9250 レジスタマップ](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/res/MPU-9250A_Reg_Map.pdf)

## プロジェクト

**LinkIt ONE を使用した MPU9150 の機能の速度テスト**:  
このプロジェクトは、MPU9150 の標準機能の実行にかかる時間（ミリ秒単位）を測定することを目的として設定されました。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kg6hxm/speed-testing-the-mpu9150-s-functions-using-a-linkit-one-181c67/embed' width='350'></iframe>


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なるニーズや好みに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>