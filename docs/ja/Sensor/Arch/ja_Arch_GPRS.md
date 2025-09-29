---
description: Arch GPRS
title: Arch GPRS
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Arch_GPRS
last_update:
  date: 05/15/2025
  author: hushuxu
---


[![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/Arch_GPRS_03.jpg) ](https://www.seeedstudio.com/depot/Arch-GPRS-p-1657.html?cPath=73)

Arch GPRS は、セルラー通信モジュールとマイクロコントローラーを搭載した [mbed](http://mbed.org/handbook/mbed-SDK) 対応の開発ボードです。これは [Seeeduino Arch](https://seeeddoc.github.io/Seeeduino_Arch/) と似ており、LPC11U24 マイクロコントローラーを使用しています。Arch GPRS を使用すると、mbed の C/C++ SDK、ライブラリ、およびオンライン開発ツールを活用して迅速にプロトタイプを構築できます。  
Arch GPRS のセルラー通信モジュールは、EG-10 [GPRS](https://en.wikipedia.org/wiki/General_Packet_Radio_Service) モデムに基づいています。これにより、2G GSM ベースのセルラー通信ネットワークを使用してデータ収集機能を簡単に実行できます。

Arch GPRS は標準的な **Arduino** インターフェースと Grove コネクタを搭載しています。これにより、既存の Shields や **Grove** 製品を Arch GPRS に簡単に接続できます。さらに、ソーラーパネルを直接ボードに接続して、バッテリーを充電することも可能です。低消費電力設計により、屋外での簡単な充電と長時間の動作が保証されます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png) ](https://www.seeedstudio.com/depot/Arch-GPRS-p-1657.html?cPath=73)

## 特徴 ##

- mbed 対応
  - オンライン開発ツール
  - 使いやすい C/C++ SDK
  - 多数の公開ライブラリ、プロジェクト

- NXP LPC11U24 コントローラー
  - 低消費電力 ARM Cortex-M0 コア
  - 32KB フラッシュ、8KB RAM、4KB EEPROM
  - USB デバイス、2xSPI、UART、I2C

- EG-10 モジュール
  - EG-10 ファームウェアのワイヤレスアップグレード対応
  - 外部 SIM カード対応：1.8V/3.3V
  - 標準 AT コマンド互換

- RTC 機能搭載
- USB5V またはソーラーパネルを自動選択してバッテリーを充電

## 仕様 ##

| 項目 | | 仕様 |
|--|--|--|
| マイクロコントローラー || LPC11U24 |
| 電源モード || USB またはソーラーパネル |
| 充電電流 | ソーラーパネル | 100 mA |
| | USB 5V | 400 mA |
| 動作周波数 || 850/900/1800/1900 MHz |
| インターフェースタイプ || USB Micro B |
| SIM カード || クラス B (3V) およびクラス C (1.8V) |
| GPRS 特性 | GPRS データ伝送 | 下り 85.6kbps (最大); 上り 42.8kbps (最大) |
| | コード形式 | CS-1, CS-2, CS-3, CS-4 |
| 機能サポート || データ、音声、SMS、FAX のサポート |
| EEPROM 容量 || 256 KB |

## インターフェース ##

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/Arch_GPRS_Interface_Function.jpg)

黄色のエリアは Arduino ボードに非常に似ており、実際に Shield ボードと一緒にそのように使用されます。そのピン配置は Seeeduino Arch（D11 と D13 が入れ替わっている）とほぼ同じです。各ピンを確認するには [こちら](https://seeeddoc.github.io/Seeeduino_Arch/#Pinout) をクリックしてください。

上記の画像は Arch GPRS の正面図で、背面にある LPC11U24 マイクロコントローラーは表示されていません。

## はじめに ##

SIM カードを Arch GPRS の SIM ソケットに挿入すると、電話をかけたりメッセージを送信したりできます。
それでは始めましょう。

**ステップ 1:** mbed アカウントを登録する

- [https://mbed.org](https://mbed.org) を開き、「Login」または「signup」をクリックします。すでに登録済みの場合は、「login」を直接クリックしてください。

**ステップ 2:** プログラムをインポートする

- 次のリンクを開きます：[https://mbed.org/users/lawliet/code/ARCH_GPRS_Test/](https://mbed.org/users/lawliet/code/ARCH_GPRS_Test/)。右上隅にある「Import this program」をクリックすると、以下の画像が表示されます。「import」をクリックして Arch GPRS プログラムのインポートを完了します。

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/Arch_GPRS_Test.png)

- プログラムがアカウントにインポートされると、オンライン開発ツールで確認できます。

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/Arch_GPRS_Test1.png)

**ステップ 3:** コードを編集する

- Arch GPRS プログラムの main.cpp ファイルを開いて変更します。例えば電話をかける場合、「#define CALL_UP_TEST 0」を「#define CALL_UP_TEST 1」に変更し、関数「gprsTest.callUp("133xxxx5949");」のパラメータを変更します。

**ステップ 4:** デバイスを追加する

- 右上隅の「No device selected」をクリックし、以下の画像が表示されたら左下の「Add a device」をクリックします。

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/%E9%80%89%E6%8B%A9%E8%AE%BE%E5%A4%87.jpg)

- 以下のようなページが表示されます。Arch GPRS は mbed LPC11U24 と Seeeduino Arch に互換性があるため、「mbed LPC11U24」または「Seeeduino Arch」のいずれかを選択できます。ここでは Seeeduino Arch を選択する例を示します。

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/%E9%80%89%E6%8B%A9%E8%AE%BE%E5%A4%871.jpg)

- Seeeduino Arch ページに入り、「Add to mbed Compiler」をクリックします。これで Seeeduino Arch の追加が完了します。mbed コンパイラに戻り、「No device selected」をクリックします。左下隅で Seeeduino Arch をクリックすると、以下の画像が表示されます：

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/%E9%80%89%E6%8B%A9%E8%AE%BE%E5%A4%872.jpg)

- 「Select Platform」をクリックすると、mbed オンラインコンパイラで選択したボードが表示されます。

**ステップ 5:** コンパイルとダウンロード

- 「Compile」をクリックします。「Success!」と表示されると、mbed IDE が bin ファイルを生成します。この bin ファイルを PC に保存する必要があります。

**ステップ 6:** ファームウェアを更新する

- USB Micro B ケーブルを使用して Arch GPRS の USB ポートをコンピュータに接続し、ボタンを長押しします。Arch GPRS は「CRP DISABLD」という名前の USB ストレージとして表示されます。

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/A_usb_device.jpg)

- CRP DISABLD に移動します。ここで、取得した bin ファイルを CRP DISABLD デバイスに追加する必要があります。USB デバイスに既存の bin ファイルがある場合は、それを削除して新しい bin ファイルを追加してください。

Arch GPRS のボタンを短く押し、しばらく待つと、Arch GPRS が電話をかけてくるのが聞こえます。

## ARCH GPRS と Xively ##

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/ARCH_GPRS_With_Xively.png)

Xively はオンラインデータベースサービスで、開発者がセンサーから取得したデータ（例：オブジェクト、デバイス、建物からのエネルギーや環境データ）を Web に接続し、そのデータを基に独自のアプリケーションを構築することを可能にします。ARCH GPRS を使用することで、これを簡単に実現できます。

**ステップ 1：** Xively アカウントを登録する

- [https://xively.com/](https://xively.com/) を開き、「Login」または「Signup」をクリックします。すでに登録済みの場合は、「Login」を直接クリックしてください。

**ステップ 2：** デバイスとチャンネルを追加する

- 必要に応じてデバイスを作成し、チャンネルを追加します。方法がわからない場合は、[https://xively.com/get_started/](https://xively.com/get_started/) を参照してください。

**ステップ 3：** プログラムをインポートする

- 次のリンクを開きます：[http://mbed.org/users/lawliet/code/ARCH_GPRS_Xively/](http://mbed.org/users/lawliet/code/ARCH_GPRS_Xively/)。右上隅にある「Import this program」をクリックすると、以下の画像のような画面が表示されます。「Import」をクリックして Arch GPRS プログラムのインポートを完了します。

**ステップ 4：** 自分の情報を追加する

- FEED_ID、SENSOR_ID、XIVELY_KEY を自分のものに置き換え、ARCH GPRS をセンサーに接続します。その後、コンパイルしてファームウェアを更新します。

**ステップ 5：** センサー値を確認する

- 成功すれば、チャンネルグラフにアップロードされたデータが表示されます。

**注意:**

Seeeduino Arch を MAC または Linux で使用する場合は、アプリケーションノート「[USB ISP programming](http://www.lpcware.com/content/nxpfile/an11305-usb-system-programming-lpc11u3xlpc11u2x)」を参照してください。

## Windows、Linux、Mac で Seeeduino Arch をプログラミングする ##

Seeeduino Arch には mbed インターフェースがありません。USB インシステムプログラミング（ISP）を使用してファームウェアをアップグレードします。

USB ISP モードに入るには、Arch をコンピュータに接続し、ボタンを長押しします。すると、「CRP DISABLD」という名前のディスクが表示されます。

- Windows の場合

    1.「CRP DISABLD」ディスク内の firmware.bin を削除します。

    2.新しいファームウェアをディスクにコピーします。

- Linux の場合

    1.ディスクがマウントされていない場合、`{mnt_dir}` にディスクをマウントします。

    2.`dd if={new_firmware.bin} of={mnt_dir}/firmware.bin conv=notrunc`

- Mac の場合

    ターミナルを使用して以下のスクリプトを実行し、.bin ファイルを Arch にコピーします。

    1.`dd if={new_firmware.bin} of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc`

    また、**Automator** アプリケーションを作成して、ファイルをボードにドラッグ＆ドロップでコピーできるようにすることも可能です。「Run Shell Script」を作成し、以下のコマンドを使用します：

    dd if=$* of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc

ボタンを短く押して新しいファームウェアを実行します。

## 関連情報 ##

- [Arch GPRS V2](https://seeeddoc.github.io/Arch_GPRS_V2/)

## 注意事項 ##

Arch GPRS には [mbed インターフェース](https://mbed.org/handbook/mbed-HDK) が付属していません。デバッグメッセージを出力するには、[USBSerial](https://mbed.org/handbook/USBSerial) を試してください。

## オンライン回路図ビューア ##

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_GPRS/res/Arch_GPRS_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース ##

- **[Eagle]** [Arch GPRS Eagle ファイル](https://files.seeedstudio.com/wiki/Arch_GPRS/res/Arch_GPRS_Eagle_File.zip)
- **[PDF]** [Arch GPRS PDF](https://files.seeedstudio.com/wiki/Arch_GPRS/res/Arch%20GPRS.pdf)
- **[EAGLE]** [Arch GPRS 回路図](https://files.seeedstudio.com/wiki/Arch_GPRS/res/Arch%20GPRS.sch)
- **[PDF]** [Arch GPRS 回路図（PDF形式）](https://files.seeedstudio.com/wiki/Arch_GPRS/res/Arch_GPRS_Schematic.pdf)
- **[Command]** [ATコマンドリファレンス](https://files.seeedstudio.com/wiki/Arch_GPRS/res/AT%E6%8C%87%E4%BB%A4%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8C.pdf)
- **[Datasheet]** [EG10 データシート](https://files.seeedstudio.com/wiki/Arch_GPRS/res/EG10%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8C.pdf)
- **[Demo]** [デモ](https://mbed.org/users/loovee/code/ARCH_GPRS_Demo/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>