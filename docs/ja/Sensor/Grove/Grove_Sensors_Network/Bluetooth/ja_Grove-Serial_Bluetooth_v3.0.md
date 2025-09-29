---
title: Grove - Serial Bluetooth v3.0
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-Serial_Bluetooth_v3.0/
slug: /ja/Grove-Serial_Bluetooth_v3.0
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/img/Grove-Serial_Bluetooth_v3.0.jpg)

Grove - Serial Bluetoothは、既存のGrove Base Shieldと互換性があり、透明なワイヤレスシリアル接続のセットアップを簡単にするモジュールです。このシリアルポートBluetoothモジュールは、完全に認定されたBluetooth V2.0+EDR（Enhanced Data Rate）2Mbps変調を備えた完全な2.4GHz無線トランシーバーとベースバンドを提供します。CSR Bluecore 04-External単一チップBluetoothシステムをCMOS技術とAFH（Adaptive Frequency Hopping Feature）を使用して構築しています。最小フットプリントは12.7mm x 27mmです。これにより、全体的な設計/開発サイクルが簡素化されることを期待しています。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Serial-Bluetooth-v3.0-p-2475.html)

仕様
--------------

- 動作電圧: 5.0VDC
- データレート: 2Mbps
- RF送信出力（最大）：+4dBm
- 感度：-80dBm
- 完全認定Bluetooth V2.0+EDR 3Mbps変調
- 選択可能なボーレート
- 接続範囲外になった場合、30分以内に自動再接続

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::

デモンストレーション
-------------

2つのBluetoothモジュールが以下のように動作します：

![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/img/Ppt5.JPG)

![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/img/Ppt6.JPG)

### ハードウェアのインストール

![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/img/Grove_serial_bluetooth_3_.jpg.png)

### コードのダウンロードとアップロード

1. GitHubからコードをダウンロードできます。[こちら](https://github.com/Seeed-Studio/Bluetooth_Shield_V2_Demo_Code/archive/master.zip)をクリックして、Arduinoのライブラリフォルダに解凍してください。
2. Arduino IDEを開き、File -> Examples -> Bluetooth_Shield_V2_Demo_Code -> Master_Buttonを開き、Masterのコードを開いて以下のようにコードを修正してください。

![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/img/Grove_serial_bluetooth_4_.jpg.png)

1. Arduino IDEを開き、File -> Examples -> Bluetooth_Shield_V2_Demo_Code -> Slave_ledを開き、Slaveのコードを開いて上記と同様にコードを修正してください。
2. 修正を保存し、アップロードをクリックしてコードをアップロードしてください。Arduinoの使い方に関して問題がある場合は、<a href="/ja/Getting_Started_with_Seeeduino"><span><font color={'8DC215'} size={"3"}>こちら</font></span></a>をクリックしてヘルプをご覧ください。

### 結果の確認

1. MasterとSlaveの両方にコードをアップロードした後、2つのデバイスを同時にリセットしてください。
2. LEDが点滅しているのが確認でき、デバイスが初期化および接続中であることを示します。
3. 数秒後、LEDが点灯し、MasterとSlaveが接続されたことを示します。

<div class="admonition note">
<p class="admonition-title">注意</p>
上記の現象が観察されない場合は、電源を抜いて再度差し込んでみてください。
</div>

参考
---------

### デフォルト設定を変更するためのコマンド

**1. 動作モードを設定**

| コマンド  | 説明                                     |
|----------|-----------------------------------------|
| AT+ROLES | デバイスの動作モードをクライアント（Slave）に設定します。 |
| AT+ROLEM | デバイスの動作モードをサーバー（Master）に設定します。 |

**2. ボーレートを設定**

| コマンド  | 説明                                     |
|----------|-----------------------------------------|
| AT+BAUD4 | ボーレートを9600に設定します。保存してリセットします。 |
| AT+BAUD5 | ボーレートを19200に設定します。保存してリセットします。 |
| AT+BAUD6 | ボーレートを38400に設定します。保存してリセットします。 |
| AT+BAUD7 | ボーレートを57600に設定します。保存してリセットします。 |
| AT+BAUD8 | ボーレートを115200に設定します。保存してリセットします。 |
| AT+BAUD9 | ボーレートを230400に設定します。保存してリセットします。 |
| AT+BAUDA | ボーレートを460800に設定します。保存してリセットします。 |

**3. デバイス名を設定**

| コマンド        | 説明                                    |
|----------------|----------------------------------------|
| AT+NMAEabcdefg | デバイス名を「abcdefg」に設定します。最大長は12文字です。 |

**4. PINコードを設定**

| コマンド    | 説明                          |
|------------|------------------------------|
| AT+PIN2222 | PINコードを「2222」に設定します。最大長は12文字です。 |

**5. すべての設定値を工場出荷時設定に戻す**

| コマンド    | 説明                              |
|------------|----------------------------------|
| AT+DEFAULT | すべての設定値を工場出荷時設定に戻します。 |

**6. モジュールアドレスを照会**

| コマンド | 説明          |
|---------|--------------|
| AT+ADDR | モジュールアドレスを照会します。 |

**7. 最後に接続されたデバイスのアドレスを照会**

| コマンド | 説明          |
|---------|--------------|
| AT+RADD | モジュールアドレスを照会します。 |

<!-- ## Schematic Online Viewer -->

<!-- <div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/res/<div>
  Grove-Serial_Bluetooth_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}} -&gt; < div>
</div> -->

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/res/<div>
  Grove-Serial_Bluetooth_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [シリアルBluetooth Eagleファイル](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/res/Grove-Serial_Bluetooth_eagle_file.zip)
- [Bluetoothソフトウェア説明書](https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/res/Bluetooth_en.pdf)
- [Bluetooth - モジュールデータシート](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/res/Bluetooth_module.pdf)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_Serial_Bluetooth_v3.0 から作成されました -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>