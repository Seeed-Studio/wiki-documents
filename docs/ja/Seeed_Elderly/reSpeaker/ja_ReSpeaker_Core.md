---
description: ReSpeaker Core
title: ReSpeaker Core
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ReSpeaker_Core
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/respeaker_core.jpg)

ReSpeakerは、周囲のものを操作するためのオープンモジュラー音声インターフェースです。家庭用電化製品、植物、オフィス、インターネット対応デバイス、または日常生活の中のあらゆるものと音声でやり取りすることができます。

- **周囲の環境に音声対応機能を追加する拡張デバイス**

  ReSpeakerは、オンライン認知サービスとオフラインの軽量音声認識エンジンの両方をサポートしています。ReSpeakerを周囲のものに追加することで、それらをスマート（よりスマート）にすることができます。

- **音楽ストリーミングデバイス**

  音声インターフェースは音楽エンターテインメントと切り離せないものであり、ReSpeakerも例外ではありません。ReSpeakerはAirplay/DLNAをサポートしており、ワイヤレスで音楽をストリーミングできます。ReSpeakerをAUXケーブルで通常のスピーカーに接続するだけで、ボタンを押すことなく好きな音楽を楽しむことができます。

- **子供向けの学習ツール**

  LinuxベースのOpenWrtを実行するオンボードのMT7688 Wi-Fiモジュールに加えて、ReSpeakerはATmega32u4チップによって駆動され、完全にArduino互換です。つまり、ReSpeakerを強力なArduinoボードとして使用し、多くの「Arduino的な」ことを行うことができます。学習、練習、そして楽しみのためのデバイスです。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/ReSpeaker-Core-Based-On-MT7688-and-OpenWRT-p-2716.html)

## 特徴

---
![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/respeaker_core_futures.jpg)

- 手を使わずに操作可能：インターネット接続の有無にかかわらず音声認識
- ワイヤレスストリーミング：Airplay/DLNAを介して音楽をストリーミング
- 使いやすいSDK：PythonおよびC/C++開発者向け
- 機能の拡張：ダウンロードしてプラグインを追加し、機能を充実
- プラグアンドプレイのアドオン：Mic Array、Grove Extension Board、Grove Modulesで拡張可能
- インストール不要のアプリ：ウェブベースのアプリで全てを設定（現在は未対応）

## 仕様

---
![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/respeaker_core_hardware%20overview.jpg)

**技術仕様**

- AI7688 Wi-Fiモジュール:

  - オペレーションシステム: GNU/LinuxベースのOpenWrt
  - Wi-Fiネットワーク: Legacy 802.11b/gおよびHT 802.11nモードをサポート
  - 拡張: I2C、GPIO、USB 2.0ホスト用の2つの拡張ヘッダー
  - インターフェース: 内蔵3.5mm AUXポート、Micro USB、SDカードスロット

- ATMega32U4コプロセッサ:

  - Linuxコンソール用のUSB CDC仮想シリアルポート
  - 12個のプログラム可能なRGB LEDインジケーター
  - 8個のオンボードタッチセンサー

- Codec WM8960:

  - DAC SNR 98dB（‘A’ウェイト）、THD -84dB（48kHz、3.3V）  
  - ADC SNR 94dB（‘A’ウェイト）、THD -82dB（48kHz、3.3V）  
  - 87%効率のステレオクラスDスピーカードライバー（1W出力）  
  - オンチップヘッドホンドライバー  
  - 16Ωで40mW出力（3.3V）  
  - 20mWでTHD -75dB、16Ω負荷でSNR 90dB  
  - オンチップPLLによる柔軟なクロッキングスキーム  
  - サンプルレート: 8, 11.025, 12, 16, 22.05, 24, 32, 44.1, 48 kHz

- 電源供給: 5V DC  

- 寸法: 直径70mm  

- 重量: 17g

**ピンアウト図**

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/respeaker_core_pinmap.png)

- GPIO0/I2S_ADC: 外部エンコーダ/デコーダ、ADC信号を駆動
- GPIO1/I2S_DAC: 外部エンコーダ/デコーダ、DAC信号を駆動
- GPIO2/I2S_LRCLK: 外部エンコーダ/デコーダ、左右チャンネルサンプルクロック
- GPIO3/I2S_BCLK: 外部エンコーダ/デコーダ、ビットクロック
- MCLK_OUT: 外部デバイス用のマスタークロック
- HP\_SEL: ヘッドフォンチャンネル選択。ReSpeaker Mic Arrayを使用してオーディオを出力する場合、HP_SELを高に設定
- HP\_L: ReSpeaker Mic Arrayからのアナログオーディオ左チャンネル
- HP_R: ReSpeaker Mic Arrayからのアナログオーディオ右チャンネル
- AGND: オーディオ用アナロググラウンド

## はじめに

---

### ReSpeaker Core を初めて手に入れたときにすべきこと

**1. 準備**

- ReSpeaker Core
- PC または Mac
- Wi-Fi ネットワーク
- SDカード

**2. シリアルコンソールへの接続**

- Windowsの場合、[putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html) を使用することを推奨します。

  - ReSpeaker を USB 経由で PC に接続し、「デバイスマネージャー」で COM ポートを確認します。ここでは、ReSpeaker の COM ポートが COM31 です。

    ![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/putty1.png)

  - 接続タイプで Serial を選択します。Serial line フィールドに ReSpeaker の COM ポートを入力します。Speed フィールドには 57600 を入力します。

    ![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/putty2.png)

  - Open をクリックします。空白の画面が表示されたら、Enterキーを押します。

    ![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/putty3.png)

- Linux/Macの場合

  - ReSpeaker を USB 経由で PC に接続します。
  - ターミナルセッションを開きます。
  - ターミナルで `ls /dev/tty.usb*` を入力します。デバイスのリストが表示されます。通常、`tty.usbmodemXXXXX` のようなものを探します（XXXXX はランダムな識別子です）。これがシステムコンソールにアクセスするためのシリアルデバイスです。その後、screen ユーティリティを使用してシリアルポートに接続し、ボーレートを 57600 に設定します。これは、システムコンソールのボーレートがデフォルトで 57600 であるためです。

```
$ ls /dev/tty.usb*
/dev/tty.usbmodem14221
$ screen /dev/tty.usbmodem14221 57600
```

**3. Wi-Fi の設定**

ReSpeaker はデフォルトでリピーターモードに設定されており、インターネットを利用した音声認識を楽しむ前に既存の無線ネットワークに接続する必要があります。

ReSpeaker を初めて電源オンすると、「ReSpeakerXXXXXX」という名前の Wi-Fi ネットワークが作成されます。ここで「XXXXXX」は ReSpeaker の MAC アドレスの最後の6文字で、基板に記載されています。このネットワークにコンピュータを接続します。

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/wifi1.png)

:::note
「ReSpeakerXXXXXX」が表示されず、「LinkIt_Smart_7688_XXXXXX」が見つかった場合は、[こちら](https://wiki.seeedstudio.com/ja/ReSpeaker_Core/#q20-system-recovery-by-factory-image)をクリックしてください。
:::

IPアドレスを取得したら、ウェブブラウザを開き、アドレスバーに `192.168.100.1` を入力します。数秒後、既存の Wi-Fi ネットワークの ssid とパスワードを尋ねるウェブページが表示されます。

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/wifi2.png)

接続したい Wi-Fi を選択し、パスワードを入力します。OK ボタンを押すと、ReSpeaker が指定されたネットワークに参加します。

これで、ReSpeaker がインターネットにアクセスできるようになります。

また、コマンドラインを使用して Wi-Fi を設定する方法もあります。
`wictl` を使用して Wi-Fi をスキャンし、接続することができます。

```
root@mylinkit:~# wictl
0, SEEED-MKT
1, Xiaomi_Youth
2, ChinaNet-Z5C4
3, STU-EE
4, EMBEST_WIFI
5, SEEED-MKT
6, nobody
7, SEEED-MKT
8, se.VPN
9, Moovent_HK_2G
10, LinkIt_Smart_7688_1D917A
11, SEEED-MKT
12, SEEED-MKT
13, zhongrixing
Please choose your wifi: 8
Please input the wifi password: 88888888
udhcpc (v1.23.2) started
Sending discover...
Sending discover...
Sending select for 192.168.199.153...
Lease of 192.168.199.153 obtained, lease time 43200
udhcpc: ifconfig apcli0 192.168.199.153 netmask 255.255.255.0 broadcast 192.168.199.255
udhcpc: setting default routers: 192.168.199.1
success
root@mylinkit:~#
```

:::note
上記の方法で Wi-Fi に接続できない場合は、`firstboot` コマンドを入力してファクトリーリセットを行ってください。
:::

Wi-Fi 機能が有効になった後、以下のコマンドを使用して SSH を介して ReSpeaker に接続できます。ReSpeaker の IP アドレスは [http://192.168.100.1/#!/overview](http://192.168.100.1/#!/overview) の WAN IP から取得できます。パスワードは `root` です。

```
ssh root@ssh *.*.*.*
```

**4. SDカードを使用してストレージを拡張する**

組み込みデバイスでは、利用可能なストレージが限られていることがよくあります（ReSpeaker にはユーザー向けに残されたオンボードフラッシュストレージが 5M しかありません）。アプリケーションやデータのためにストレージを拡張することで、ReSpeaker の可能性を広げることができます。そのため、SDカードを使用してストレージを拡張することは、**extroot** として良い選択肢です。

**extroot** を使用することで、追加されたストレージデバイスを利用してルートファイルシステムのストレージ容量を拡張できます。
起動プロセス中に、外部ストレージスペースがルートファイルシステムとして、または元のファイルシステムのオーバーレイ構成としてマウントされます。

- SDカードが ReSpeaker に差し込まれており、`df -h` または `ls /dev` によって `/dev/mmcblk0p1` が検出できることを確認します。

```
root@ReSpeaker:/# df -h
Filesystem                Size      Used Available Use% Mounted on
rootfs                    1.8M    832.0K    960.0K  46% /
/dev/root                29.0M     29.0M         0 100% /rom
tmpfs                    61.7M    276.0K     61.5M   0% /tmp
/dev/mtdblock6            1.8M    832.0K    960.0K  46% /overlay
overlayfs:/overlay        1.8M    832.0K    960.0K  46% /
tmpfs                   512.0K         0    512.0K   0% /dev
/dev/mmcblk0p1            7.4G      2.5M      7.4G   0% /tmp/run/mountd/mmcblk0p1
```

- SDカードを2つのパーティションにフォーマットします。1つは FAT32、もう1つは EXT4 です。EXT4 ファイルシステムは extroot として使用され、FAT32 は通常のストレージデバイスとして使用されます。これにより、ReSpeaker と PC 間でファイルを転送できます。

```
 umount /dev/mmcblk0p1
 fdisk /dev/mmcblk0
  ------------------ fdisk ------------------------
 >Command (m for help):o
 >Created a new DOS disklabel
 >Command (m for help):n
 >Partition type
 p   primary (0 primary, 0 extended, 4 free)
 e   extended (container for logical partitions)
 >Select (default p):p
 >Partition number (1-4, default 1):1
 >First sector (2048-15523839, default 2048):
 >Last sector, +sectors or +size{K,M,G,T,P} (2048-15523839, default 15523839): +2G
 >Command (m for help):n
 >Partition type
 p   primary (1 primary, 0 extended, 3 free)
 e   extended (container for logical partitions)
 >Select (default p):p
 >Partition number (1-4, default 2):2
 >First sector (4196352-15523839, default 4196352):
 >Last sector, +sectors or +size{K,M,G,T,P} (4196352-15523839, default 15523839):
 >Command (m for help):w
 >The partition table has been altered.
 >Calling i[  292.010000]  mmcblk0: p1 p2
 >octl() to re-read partition table.
 >Syncing disks.
  ------------------ end ------------------------

 mkfs.fat /dev/mmcblk0p1
 mkfs.ext4 /dev/mmcblk0p2

 # mtk_sd カーネルモジュールを再読み込み
 rmmod mtk_sd
 insmod mtk_sd
```

- 外部ストレージのルートオーバーレイを準備します。

```
mount /dev/mmcblk0p2 /mnt ; tar -C /overlay -cvf - . | tar -C /mnt -xf - ; umount /mnt
```

- 以下のコマンドで fstab を作成します。このコマンドは、すべてのパーティションを有効にし、'/mnt/mmcblk0p2' パーティションを '/overlay' パーティションとして設定する fstab テンプレートを作成します。

```
 block detect > /etc/config/fstab;
 sed -i s/option$'\t'enabled$'\t'\'0\'/option$'\t'enabled$'\t'\'1\'/ /etc/config/fstab;
 sed -i s#/mnt/mmcblk0p2#/overlay# /etc/config/fstab;
 cat /etc/config/fstab;
```

- オーバーレイにマウント可能か確認します。

```
 root@mylinkit:/# mount /dev/mmcblk0p2 /overlay/
 root@ReSpeaker:/# df -h
  Filesystem                Size      Used Available Use% Mounted on
  rootfs                    1.8M    832.0K    960.0K  46% /
  /dev/root                29.0M     29.0M         0 100% /rom
  tmpfs                    61.7M    276.0K     61.5M   0% /tmp
  /dev/mtdblock6            5.2G     11.8M      4.9G   0% /overlay
  overlayfs:/overlay        1.8M    832.0K    960.0K  46% /
  tmpfs                   512.0K         0    512.0K   0% /dev
  /dev/mmcblk0p2            5.2G     11.8M      4.9G   0% /tmp/run/mountd/mmcblk0p2
  /dev/mmcblk0p1            2.0G      4.0K      2.0G   0% /tmp/run/mountd/mmcblk0p1
  /dev/mmcblk0p2            5.2G     11.8M      4.9G   0% /overlay
```

- ReSpeaker を再起動して再確認します。SD カードが自動的にマウントされていれば完了です。**extroot** に関する詳細情報は、[こちら](https://wiki.openwrt.org/doc/howto/extroot) をクリックしてください。

**5. ReSpeaker にソフトウェアをインストールする**

SD カードでストレージを拡張した後、ReSpeaker にソフトウェアをインストールするのに十分なストレージが確保されます。

Git をインストールします。

```
 opkg update
 opkg install git git-http
```

**6. Python ライブラリを更新する**

```
git clone https://github.com/respeaker/respeaker_python_library.git
cd respeaker_python_library
python setup.py install
```

### 音声インタラクションの初体験 - ReSpeaker で音楽を再生する

Bing Speech API を使用すると、ReSpeaker はマイクからの音声をリアルタイムで認識したり、ファイルから音声を認識したりすることができます。

Bing Speech API を使用するには、まず [こちら](https://www.microsoft.com/cognitive-services/en-us/speech-api) から Microsoft Cognitive Services のキーを取得し、それを BING_KEY = '' にコピーして、以下のコードを playmusic.py に保存して実行します。

```
// USB デバイスの占有を避けるために mopidy と alexa を停止します
/etc/init.d/mopidy stop
/etc/init.d/alexa stop
python playmusic.py
```

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/getbingapi.png)

```
import logging
import time
import os
from threading import Thread, Event
from respeaker import Microphone
from respeaker.bing_speech_api import BingSpeechAPI

# madplay を使用して mp3 ファイルを再生する     
os.system('madplay')               

# https://www.microsoft.com/cognitive-services/en-us/speech-api からキーを取得する
BING_KEY = ''      


def task(quit_event):                                                         
    mic = Microphone(quit_event=quit_event)                                   
    bing = BingSpeechAPI(key=BING_KEY)                                        

    while not quit_event.is_set():
        if mic.wakeup('respeaker'):        
            print('Wake up')               
            data = mic.listen()            
            try:                      
                text = bing.recognize(data)
                if text:           
                    print('Recognized %s' % text)
                    if 'play music' in text:
                        print('I will play music!')
                        os.system('madplay Tchaikovsky_Concerto_No.1p.mp3')
            except Exception as e:               
                print(e.message)                 

def main():                                                              
    logging.basicConfig(level=logging.DEBUG)                                                           
    quit_event = Event()        
    thread = Thread(target=task, args=(quit_event,))
    thread.start()                          
    while True:                             
        try:                                
            time.sleep(1)                           
        except KeyboardInterrupt:                   
            print('Quit')                           
            quit_event.set()
            break        
    thread.join()                

if __name__ == '__main__':       
    main()                  
```

"INFO:mic:Start Detecting" が表示されたら、「ReSpeaker」と言ってプログラムを起動し、「play music」と言って音楽を再生させてみてください。その後、ReSpeaker は現在のパスにある "Tchaikovsky\_Concerto\_No.1p.mp3" を **madplay** ツールで再生します。

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/bingplaymusic.png)

以下のエラーコードが表示された場合、mopidy がバックグラウンドで実行されており、USB デバイスを使用している可能性があります。その場合は、/etc/init.d/mopidy stop mopidy を実行してから再度コマンドを実行してください。

```
root@ReSpeaker:~# python playmusic.py
Usage: madplay [OPTIONS] FILE [...]
Try `madplay --help' for more information.
Exception in thread Thread-2:
Traceback (most recent call last):
File "/usr/lib/python2.7/threading.py", line 810, in __bootstrap_inner
```

## アプリケーション

---

### フルーツピアノ

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/fruitpiano.PNG)

ReSpeakerは、LinuxベースのOpenWrtを実行するオンボードのMT7688 Wi-Fiモジュールだけでなく、ATmega32u4チップによっても駆動されており、完全にArduino互換です。つまり、ReSpeakerを強力なArduinoボードとして使用し、多くの「Arduino的な」ことを行うことができます。学習、練習、そして楽しみのために最適です。

例えば、Arduino IDEを使用して、8つのチェリートマトをReSpeakerの8つのタッチセンサーに接続して特別なDIYピアノを作ることができます。
![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/fruitpiano2.PNG)

1. ReSpeaker上でリポジトリをダウンロードします：
   ```
   git clone <https://github.com/respeaker/piano.git>
   ```
2. [ReSpeaker Arduino Library](https://github.com/respeaker/respeaker_arduino_library) をコンピュータにダウンロードします。
3. [piano.ino](https://github.com/respeaker/piano/blob/master/arduino/piano.ino) をReSpeakerのArduino Leonardo（ATmega32U4）にアップロードします。
4. ReSpeakerのシリアルコンソールで以下を実行します：
   ```
   python piano.py
   ```

### ウェザークラウド

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/weathercloud.jpg)

ウェザークラウドはReSpeakerのための素晴らしいプロジェクトです。このクールな構築により、ReSpeakerをウェザークラウドに変えることができ、鮮やかな光と音で天気を教えてくれます。

このプロジェクトでは、OpenWrtがインターネットからリアルタイムの天気情報を取得し、音声インタラクションとオーディオ出力を担当します。一方、ArduinoはカラフルなRGB LEDの制御を担当します。

1. ReSpeaker上でリポジトリをダウンロードします：
   ```
   git clone <https://github.com/jerryyip/WeatherCloud.git>
   ```
2. [ReSpeaker Arduino Library](https://github.com/respeaker/respeaker_arduino_library) をコンピュータにダウンロードします。
3. ReSpeaker Arduino Library内の [pixels_pattern.ino](https://github.com/respeaker/respeaker_arduino_library/blob/master/examples/pixels_pattern/pixels_pattern.ino) をReSpeakerのArduinoにアップロードします。
4. [OpenWeatherMap](http://openweathermap.org/appid) からアプリIDを取得し、`main.py` の `appID = ""` にコピーします。また、`city=""` に都市名を追加するのを忘れないでください。
5. SPIブリッジを使用する前に、OpenWrt上でmopidyサービスを停止します：
   ```
   /etc/init.d/mopidy stop
   ```
6. 以下を実行し、ReSpeakerに「ReSpeaker, what is the weather like?」と話しかけます：
   ```
   python main.py
   ```
7. ウェザークラウドの作り方についての詳細は、[こちら](https://www.instructables.com/id/How-to-DIY-an-in-House-Weather-telling-Cloud/) をご覧ください。

## ReSpeaker Mic Array

---

### [ReSpeaker Mic Array](https://www.seeedstudio.com/ReSpeaker-Mic-Array-Far-field-w%2F-7-PDM-Microphones--p-2719.html)

ReSpeaker Mic Arrayは、ReSpeaker Coreの上部に直接スタック（接続）することができ、音声インタラクションの体験を大幅に向上させます。このデバイスはXMOSのXVSM-2000スマートマイクロフォンに基づいて開発されています。このボードには7つのPDMマイクが統合されており、ReSpeakerの音響DSP性能を大幅に向上させます。

## ソフトウェアについて

---

### [ReSpeaker Arduino Library](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/ReSpeakerArduinoLibrary.md#respeaker-arduino-library)

ReSpeaker Arduino Libraryは以下の機能を提供します：

- 静電容量式タッチセンサーのサポート
- WS2812 RGB LEDドライバーの実装
- Arduino（ATmega32U4）とLinuxベースのOpenWrt（MT7688）間のUSB-シリアルブリッジおよびSPIブリッジの構築

### [ReSpeaker Python Library](https://github.com/respeaker/respeaker_python_library)

ReSpeakerは音声対応オブジェクトを作成するためのオープンプロジェクトです。ReSpeaker Python Libraryは、音声インタラクションの基本機能を提供するオープンソースのPythonライブラリです。

このライブラリは、キーワードスポッティングにPocketSphinxを使用し、音声活動検出にwebrtcvadを使用します。

### [詳細情報はGitHubリポジトリをご覧ください](https://github.com/respeaker)

## FAQ

---
**Q1: 工場出荷時設定にリセットする方法は？**

- シリアルコンソールまたはSSHセッションを開き、`firstboot`を実行してください。[詳細はこちら](https://github.com/respeaker/get_started_with_respeaker/wiki/factory-reset)。

**Q2: アップグレード失敗からの復旧方法は？**

- ReSpeakerがOpenWRTシステムに起動できない場合、Webターミナル、SSH、またはシリアルコンソールを通じてシステムにアクセスできません。[復旧手順](https://github.com/respeaker/get_started_with_respeaker/wiki/Rescue-from-a-failed-upgrade)に従って復旧してください。

**Q3: ReSpeakerがWi-Fiを見つけられない**

- まず[工場出荷時設定にリセット](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/faq.md#factory-reset)を試してください。
- また、ReSpeakerはWi-Fiチャンネル12をサポートしていません。ルーターがそのチャンネルを使用していないことを確認してください。

**Q4: Wi-Fi設定**

- [WEB-UI](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/QuickStart.md#setup-wi-fi)を使用してWi-Fiを設定することをお勧めします。それが使用できない場合は、シリアルコンソールでコマンドラインツール[wictl](https://github.com/respeaker/get_started_with_respeaker/wiki/WiFi)を試してください。

**Q5: BING音声APIの認識言語を変更する方法は？**

- ウェイクアップワードを変更する必要がない場合、`text = bing.recognize(data)`を`text = bing.recognize(data,language="zh-CN")`に変更するだけで問題ありません。[詳細はこちら](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/bing_speech_api.py)。

**Q6: SDカードの警告メッセージ「Volume was not properly unmounted. Some data may be corrupt. Please run fsck」が表示される**

- SDカード上のファイルが正常であれば無視してください。それ以外の場合は、[SDカードフォーマッタ](https://www.sdcard.org/downloads/formatter_4/)を使用してフォーマットしてください。

**Q7: Arduinoからの不良フラッシュ**

- OpenWRT上でブートローダーを再フラッシュしてください。

```
/etc/init.d/mopidy stop  # mopidyが実行中の場合は停止します。mopidy-halloプラグインはSPIを使用します。
/etc/init.d/alexa stop      # alexaが実行中の場合は停止します。
mt7688_pinmux set ephy gpio
cd /etc/arduino
avrdude -c linuxgpio -p m32u4 -e -U lfuse:w:0xFF:m -U hfuse:w:0xD8:m -U efuse:w:0xCB:m  -U flash:w:Caterina-ReSpeaker.hex -u -U lock:w:0xEF:m
```

**Q8: WebUIのパスワードを忘れた場合**

- Juciパスワードをリセットしてください。

```
orangectl passwd root 12345678  //12345678を設定したいパスワードに置き換えてください
```

**Q9: Google音声認識や他の音声認識エンジンをサポートする方法は？**

- [ガイド](https://github.com/respeaker/get_started_with_respeaker/wiki/Use-speech_recognition-python-library)に従ってspeech_recognitionライブラリをインストールしてください。

**Q10: Alexaを実行中に「IOError: [Errno -9998] Invalid number of channels」というエラーが発生**

- 他のアプリケーションまたはAlexaインスタンスがオーディオ入力デバイスを使用しています。`/etc/init.d/alexa stop`および`/etc/init.d/mopidy stop`を実行して停止してください。Mopidyの自動起動を無効にするには、`/etc/init.d/mopidy disable`を実行してください。

**Q11: python playmusic.pyを実行できない**

- 背景でMopidyが実行中でUSBデバイスを使用している可能性があります。`/etc/init.d/mopidy stop`を実行してMopidyを停止し、再度コマンドを実行してください。

**Q12: RPC接続がない**

- [ガイド](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/QuickStart.md#update-for-old-version)に従ってファームウェアを再フラッシュしてください。

**Q13: SFTPとFTP**

- ReSpeakerにはFTPはありませんが、SFTPがあります。

**Q14: シリアルコンソールがロックされた**

- [Arduinoコード](https://github.com/respeaker/respeaker_arduino_library/blob/master/examples/pixels_pattern/pixels_pattern.ino)を更新してみてください。

**Q15: 'ap'モードを無効にする方法**

- `vi /etc/config/wireless`で'ap'インターフェースの'ssid'フラグを''に設定します。これにより、APが非表示になります。

**Q16: I2Cサウンドカードの問題**

- コーデックドライバの互換性名とコーデックI2Cアドレスを確認する必要があります。その後、イメージファームウェアを再構築してください。

**Q17: ReSpeakerが音声がないのに頻繁に起動する**

- `keyword.txt`内のしきい値を増やすことで誤検出率を下げることができますが、感度も低下します。
- 別の方法として、現在の音響モジュールに声を適応させることができます。詳細は[http://cmusphinx.sourceforge.net/wiki/tutorialadapt](http://cmusphinx.sourceforge.net/wiki/tutorialadapt)をご覧ください。
- これにより個別のキーワード認識が効果的に向上しますが、認識器の一般性が低下する可能性があります。

**Q18: ReSpeakerからGPIOピンを制御する方法**

- [https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/gpio.py](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/gpio.py)を使用できます。
- GPIOを使用してSPIをシミュレートする例は[https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/spi.py](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/spi.py)にあります。

**Q19: ウェイクアップワードを変更する方法**

- `keywords.txt`にはキーワードとそのしきい値が含まれています。例えば、[こちら](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/pocketsphinx-data/keywords.txt)の`keywords.txt`は以下のようになっています。

 ```
 respeaker /1e-30/
 alexa /1e-30/
 play music /1e-40/
 ```

 `respeaker`はキーワードで、`1e-30`はそのしきい値です。感度を向上させるには、しきい値を減らすことができます。例えば、`1e-50`に変更します。ただし、しきい値を減らすと誤受容率が増加することに注意してください。

 新しいキーワードを追加する場合、まず[こちら](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/pocketsphinx-data/dictionary.txt)の`dictionary.txt`にキーワードを追加する必要があります。`dictionary.txt`は以下のようになっています。

 ```
 respeaker R IY S P IY K ER
 alexa AH L EH K S AH
 play P L EY
 music M Y UW Z IH K
 ```

 最初の部分は名前（`respeaker`、`alexa`、または`music`）、2番目の部分はその音素です。大きな辞書から単語を見つけることができます。[こちら](https://github.com/respeaker/pocketsphinx-data/blob/master/dictionary.txt)をご覧ください。

- その後、コードを変更します。

 ```
 if mic.wakeup('respeaker'):
 ```

- キーワードのディレクトリは`/root/respeaker_python_library/respeaker/pocketsphinx-data`です。

**Q20: 工場イメージによるシステム復旧**

注意: Web経由でReSpeakerを更新できない場合、または[http://192.168.100.1/home.html](http://192.168.100.1/home.html)にアクセスできない場合は、[こちら](https://s3-us-west-2.amazonaws.com/respeaker.io/firmware/ramips-openwrt-latest-LinkIt7688-squashfs-sysupgrade.bin)をクリックして最新のファームウェアをコンピュータにダウンロードし、SDカードにコピーしてReSpeakerに挿入してください。

ReSpeakerの[シリアルコンソール](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/QuickStart.md#serial-console)に接続し、以下のコマンドを入力してファームウェアを更新してください：

```
mount /dev/mmcblk0p1 /mnt
cd /mnt
sysupgrade -n -F ramips-openwrt-latest-LinkIt7688-squashfs-sysupgrade.bin
```

ファームウェアのインストールと再起動には約3分かかります。更新中は**絶対にReSpeakerの電源を切らないでください**。

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/systemupdate2.png)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Respeaker_Core/res/RespeakerCorev1.0eaglefile.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

----

- **[Eagle]**[ReSpeaker Core v1.0 SCH](https://files.seeedstudio.com/wiki/Respeaker_Core/res/RespeakerCorev1.0_SCH.sch.zip)
- **[Eagle]**[ReSpeaker Core v1.0 BRD](https://files.seeedstudio.com/wiki/Respeaker_Core/res/RespeakerCorev1.0_BRD.brd.zip)
- **[PDF]**[ReSpeaker Core v1.0 回路図(pdf)](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/RespeakerCorev1.0_Schematic.pdf)
- **[PDF]**[ReSpeaker Core v1.0 PCB底面(pdf)](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/RespeakerCorev1.0_PCB_bottom.pdf)
- **[PDF]**[ReSpeaker Core v1.0 PCB上面(pdf)](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/RespeakerCorev1.0_PCB_top.pdf)
- **[Document]**[ReSpeaker_Detail](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/README.md)
- **[PDF]** [AI7688 データシート](https://files.seeedstudio.com/wiki/Bazaar_file/AI7688.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>