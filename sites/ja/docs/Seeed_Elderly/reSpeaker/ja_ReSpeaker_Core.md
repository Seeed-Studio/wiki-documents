---
description: ReSpeaker Core
title: reSpeaker Core
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ReSpeaker_Core
sku: 102010088
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/respeaker_core.jpg)

ReSpeaker は、身の回りのモノをハックするためのオープンなモジュラー音声インターフェースです。家庭用電化製品、植物、オフィス、インターネット対応デバイス、あるいは日常生活のあらゆるモノと、すべて声だけでやり取りできるようにします。

- **あなたの身の回りを音声対応にする拡張デバイスです**

  ReSpeaker は、オンラインの認知サービスとオフラインの軽量音声認識エンジンの両方をサポートします。身の回りのモノに ReSpeaker を追加することで、それらをスマート（よりスマート）にすることができます。

- **音楽ストリーミング用デバイスです**

  音声インターフェースは常に音楽エンターテインメントと切り離せない存在であり、ReSpeaker も同様です。ReSpeaker はワイヤレス音楽ストリーミングのために Airplay/DLNA をサポートしています。ReSpeaker を AUX ケーブルで任意の一般的なスピーカーに接続するだけで、ボタンを一つも押すことなく、好きな音楽を楽しみ始めることができます。

- **子ども向けの学習ツールです**

  Linux ベースの OpenWrt を実行するオンボードの MT7688 Wi-Fi モジュールに加えて、ReSpeaker は ATmega32u4 チップによっても駆動されており、完全に Arduino 互換です。つまり、ReSpeaker を高性能な Arduino ボードとして使用し、多くの「Arduino 的な」ことができるということです。学習用として、実践用として、そして楽しむためのものです。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/ReSpeaker-Core-Based-On-MT7688-and-OpenWRT-p-2716.html)

## 特長

---
![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/respeaker_core_futures.jpg)

- ハンズフリー操作：インターネット接続の有無にかかわらず音声認識が可能
- ワイヤレスストリーミング：Airplay/DLNA 経由で音楽をストリーミング
- 使いやすい SDK：Python および C/C++ 開発者向け
- 機能拡張：ダウンロードしてプラグインすることで機能と性能を強化
- プラグアンドプレイのアドオン：Mic Array、Grove Extension Board、Grove Modules で拡張可能
- インストール不要のアプリ：Web ベースのアプリですべてを設定（まだ利用できません）

## 仕様

---
![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/respeaker_core_hardware%20overview.jpg)

**技術仕様**

- AI7688 Wi-Fi モジュール：

  - オペレーティングシステム：GNU/Linux ベースの OpenWrt
  - Wi-Fi ネットワーク：Legacy 802.11b/g および HT 802.11n モードをサポート
  - 拡張：I2C、GPIO、USB 2.0 ホスト用の 2 つの拡張ヘッダ
  - インターフェース：3.5mm AUX ポート、Micro USB、SD カードスロットを内蔵

- ATMega32U4 コプロセッサ：

  - Linux コンソール用 USB CDC 仮想シリアルポート
  - 12 個のプログラマブル RGB LED インジケータ
  - 8 個のオンボードタッチセンサ

- Codec WM8960：

  - DAC SNR 98dB（‘A’ weighted）、THD -84dB（48kHz、3.3V）  
  - ADC SNR 94dB（‘A’ weighted）、THD -82dB（48kHz、3.3V）  
  - 87% 効率のステレオ Class D スピーカードライバ（1W 出力）  
  - オンチップヘッドホンドライバ  
  - 16Ω 負荷時 3.3V で 40mW 出力  
  - 20mW 出力時 THD -75dB、16Ω 負荷で SNR 90dB  
  - オンチップ PLL による柔軟なクロック構成  
  - サンプリングレート：8、11.025、12、16、22.05、24、32、44.1、48 kHz

- 電源：5V DC  

- 寸法：直径 70mm  

- 重量：17g

**ピン配置図**

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/respeaker_core_pinmap.png)

- GPIO0/I2S_ADC：外部エンコーダ/デコーダ駆動、ADC 信号
- GPIO1/I2S_DAC：外部エンコーダ/デコーダ駆動、DAC 信号
- GPIO2/I2S_LRCLK：外部エンコーダ/デコーダ駆動、左右チャンネルのサンプルクロック
- GPIO3/I2S_BCLK：外部エンコーダ/デコーダ駆動、ビットクロック
- MCLK_OUT：外部デバイス用マスタークロック
- HP_SEL：ヘッドホンチャンネル選択。ReSpeaker Mic Array を使用してオーディオを出力する場合は、HP_SEL を High に設定します
- HP_L：ReSpeaker Mic Array からのアナログオーディオ左チャンネル
- HP_R：ReSpeaker Mic Array からのアナログオーディオ右チャンネル
- AGND：オーディオ用アナロググラウンド

## はじめに

---

### ReSpeaker Core を初めて入手したときに行うこと

**1. 準備**

- ReSpeaker Core
- PC または Mac
- Wi-Fi ネットワーク
- SD カード

**2. シリアルコンソールに接続する**

- Windows の場合は、[putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html) を推奨します。

  - ReSpeaker を USB 経由で PC に接続し、"Device Manager" で COM ポートを確認します。ここでは、私の ReSpeaker の COM ポートは COM31 です。

    ![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/putty1.png)

  - Connection type で Serial を選択します。Serial line フィールドに、ReSpeaker の COM ポートを入力します。Speed フィールドには 57600 と入力します。

    ![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/putty2.png)

  - Open をクリックします。空白の画面が表示されたら、Enter キーを押します。

    ![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/putty3.png)

- Linux/Mac の場合

  - ReSpeaker を USB 経由で PC に接続します
  - ターミナルセッションを開きます
  - ターミナルで ls /dev/tty.usb* と入力します。デバイスの一覧が表示されるはずです。tty.usbmodemXXXXX のようなものを探します（XXXXX は通常ランダムな識別子です）。これがシステムコンソールにアクセスするためのシリアルデバイスです。次に、screen ユーティリティを使用してシリアルポートに接続し、ボーレートを 57600 に設定します。これは、システムコンソールのボーレートがデフォルトで 57600 であるためです。

```
$ ls /dev/tty.usb*
/dev/tty.usbmodem14221
$ screen /dev/tty.usbmodem14221 57600
```

**3. Wi-Fi を設定する**

ReSpeaker はデフォルトで Repeater Mode に設定されており、インターネット経由で音声認識を利用する前に、既存の無線ネットワークに接続する必要があります。

ReSpeaker を初めて起動すると、"ReSpeakerXXXXXX" という Wi-Fi ネットワークを作成します。ここで "XXXXXX" は、基板上に記載されている ReSpeaker の MAC アドレスの下 6 桁です。このネットワークにコンピュータを接続します。

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/wifi1.png)

:::note
"ReSpeakerXXXXXX" が表示されず、"LinkIt_Smart_7688_XXXXXX" が見つかった場合は、[こちら](https://wiki.seeedstudio.com/ja/ReSpeaker_Core/#q20-システム-recovery-by-factory-image) をクリックしてください。
:::

IP アドレスを取得したら、Web ブラウザを開き、アドレスバーに 192.168.100.1 と入力します。数秒後、既存の Wi-Fi ネットワークの ssid と password を尋ねる Web ページが表示されます。

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/wifi2.png)

接続したい Wi-Fi を選択し、パスワードを入力します。OK ボタンを押すと、ReSpeaker は指定したネットワークに参加します。

これで ReSpeaker はインターネットにアクセスできるようになります。

また、コマンドラインで Wi-Fi を設定する別の方法もあります。
wictl を使用して Wi-Fi をスキャンし、接続することができます。

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
上記の方法で Wifi に接続できない場合は、firstboot コマンドを入力してファクトリーリセットを行ってください。
:::

Wifi 機能が有効になったら、以下のコマンドで SSH を使用して Respeaker に接続できます。Respeaker の IP アドレスは
&lt;http://192.168.100.1/#!/overview&gt; の WAN IP から取得できます。パスワードは root です。

```
ssh root@ssh *.*.*.*

```

**4. SD カードでストレージを拡張する**

多くの場合、組み込みデバイスで利用可能なストレージ容量は限られています（ReSpeaker にはユーザー用のオンボードフラッシュストレージが 5M しか残っていません）。アプリケーションやデータ用のストレージを増やすことで ReSpeaker の可能性を広げることができるため、SD カードを使用してストレージを **extroot** として拡張するのは良い選択です。

**extroot** を利用することで、追加のストレージデバイスを使用してルートファイルシステムのストレージ容量を拡張できます。
ブートプロセス中に、外部ストレージ領域がルートファイルシステムとして、または元のファイルシステム上のオーバーレイ構成としてマウントされます。

- SD カードが ReSpeaker に挿入されており、/dev/mmcblk0p1 が df -h または ls /dev で検出できることを確認します。

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

- SD カードを 2 つのパーティションにフォーマットします。1 つは FAT32、もう 1 つは EXT4 です。EXT4 ファイルシステムは extroot として使用され、FAT32 は通常のストレージデバイスとして使用されます。これにより、ReSpeaker と PC 間でファイルを転送できます。

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

 # reload mtk_sd kernel module
 rmmod mtk_sd
 insmod mtk_sd

```

- 外部ストレージの root overlay を準備します。

```
mount /dev/mmcblk0p2 /mnt ; tar -C /overlay -cvf - . | tar -C /mnt -xf - ; umount /mnt
```

- 次のコマンドで fstab を作成します。このコマンドは、すべてのパーティションを有効にし、`/mnt/mmcblk0p2` パーティションを `/overlay` パーティションとして設定する fstab テンプレートを作成します。

```
 block detect > /etc/config/fstab;
 sed -i s/option$'\t'enabled$'\t'\'0\'/option$'\t'enabled$'\t'\'1\'/ /etc/config/fstab;
 sed -i s#/mnt/mmcblk0p2#/overlay# /etc/config/fstab;
 cat /etc/config/fstab;
```

- overlay にマウント可能かどうかを確認します。

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

- ReSpeaker を再起動して再度確認します。SD カードが自動的にマウントされていれば完了です。**extroot** についての詳細情報は、[こちら](https://wiki.openwrt.org/doc/howto/extroot)をクリックしてください。

**5. ReSpeaker にソフトウェアをインストールする**

SD カードでストレージを拡張した後は、ReSpeaker にソフトウェアをインストールするのに十分なストレージがあります。

git をインストールする

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

### 音声インタラクションの第一印象 - ReSpeaker で音楽を再生する

Bing Speech API を使用すると、ReSpeaker はマイクからの音声をリアルタイムでオンにして認識したり、ファイルからの音声を認識したりできます。

Bing Speech API を使用するには、まず [こちら](https://www.microsoft.com/cognitive-services/en-us/speech-api) から Microsoft Cognitive Services のキーを取得し、それを BING_KEY = '' にコピーしてから、以下のコードを playmusic.py に保存して実行します。

```sh
# stop mopidy and alexa to avoid USB device occupation
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

# use madplay to play mp3 file     
os.system('madplay')               

# get a key from https://www.microsoft.com/cognitive-services/en-us/speech-api
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

"INFO:mic:Start Detecting" が表示されたら、「ReSpeaker」と話しかけてプログラムを起動し、「play music」と言って音楽を再生させてみてください。その後、ReSpeaker はカレントパスにある "Tchaikovsky_Concerto_No.1p.mp3" を **madplay** ツールで再生します。

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/bingplaymusic.png)

もし以下のエラーコードが表示された場合、mopidy がバックグラウンドで動作しており、USB デバイスを使用しています。そのため、/etc/init.d/mopidy stop mopidy を実行してから、もう一度コマンドを実行してください。

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

Linux ベースの OpenWrt を実行するオンボードの MT7688 Wi-FI モジュールだけでなく、ReSpeaker は ATmega32u4 チップでも駆動されており、完全に Arduino 互換です。つまり、ReSpeaker を高性能な Arduino ボードとして使用し、多くの「Arduino 的な」ことを行うことができます。学習用にも、練習用にも、そして楽しむためにも使えます。

例えば、Arduino IDE でプログラムして、ReSpeaker の 8 つのタッチセンサーに接続された 8 個のチェリートマトで構成された特別な DIY ピアノを作ることができます。
![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/fruitpiano2.PNG)

1. git clone &lt;https://github.com/respeaker/piano.git&gt;  ReSpeaker 上でリポジトリをダウンロードします
2. コンピュータに [ReSpeaker Arduino Library](https://github.com/respeaker/respeaker_arduino_library) をダウンロードします
3. [piano.ino](https://github.com/respeaker/piano/blob/master/arduino/piano.ino) を ReSpeaker の Arduino Leonardo (ATmega32U4) に書き込みます
4. ReSpeaker のシリアルコンソールで python piano.py を実行します

### Weather Cloud

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/weathercloud.jpg)

Weather Cloud は ReSpeaker 向けの素晴らしいプロジェクトです。このクールな作品は ReSpeaker を Weather Cloud に変身させ、鮮やかな光と音で天気を表示できるようにします。

このプロジェクトでは、Openwrt がインターネットからリアルタイムの天気情報を取得し、音声インタラクションとオーディオ出力を担当し、Arduino がカラフルな RGB LED の制御を担当します。

1. git clone &lt;https://github.com/jerryyip/WeatherCloud.git&gt;  ReSpeaker 上でリポジトリをダウンロードします
2. コンピュータに [ReSpeaker Arduino Library](https://github.com/respeaker/respeaker_arduino_library) をダウンロードします
3. ReSpeaker Arduino Library 内の [pixels_pattern.ino](https://github.com/respeaker/respeaker_arduino_library/blob/master/examples/pixels_pattern/pixels_pattern.ino) を ReSpeaker の Arduino に書き込みます
4. [こちら](http://openweathermap.org/appid) から OpenWeatherMap appid を取得し、main.py の appID = "" にコピーします。city="" に自分の都市を追加するのも忘れないでください
5. SPI ブリッジを使用する前に、OpenWrt 上の mopidy サービスを停止します
/etc/init.d/mopidy stop
6. python main.py を実行し、ReSpeaker に「ReSpeaker, what is the weather like?」と話しかけます。
7. Weather Cloud の作り方の詳細については、[こちら](https://www.instructables.com/id/How-to-DIY-an-in-House-Weather-telling-Cloud/) をクリックしてください。

## ReSpeaker Mic Array

---

### [ReSpeaker Mic Array](https://www.seeedstudio.com/ReSpeaker-Mic-Array-Far-field-w%2F-7-PDM-Microphones--p-2719.html)

ReSpeaker Mic Array は ReSpeaker Core の上に積み重ねて（接続して）使用でき、音声インタラクションの体験を大幅に向上させます。これは XMOS の XVSM-2000 Smart Microphone をベースに開発されています。このボードは 7 つの PDM マイクロフォンを統合しており、ReSpeaker の音響 DSP 性能をさらに高いレベルへと引き上げます。

## ソフトウェアについて

---

### [ReSpeaker Arduino Library](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/ReSpeakerArduinoLibrary.md#respeaker-arduino-library)

ReSpeaker Arudino Library は以下の機能を提供します：

- 静電容量式タッチセンシングをサポート
- WS2812 RGB LED ドライバを実装
- Arduino (ATmega32U4) と Linux ベースの OpenWrt (MT7688) 間の USB-シリアルブリッジおよび SPI ブリッジを構築

### [ReSpeaker Python Library](https://github.com/respeaker/respeaker_python_library)

ReSpeaker は音声対応オブジェクトを作成するためのオープンプロジェクトです。ReSpeaker python library は、音声インタラクションの基本機能を提供するオープンソースの Python ライブラリです。

これはキーワードスポッティングに PocketSphinx を使用し、音声活動検出に webrtcvad を使用します。

### [詳細については GitHub リポジトリをご覧ください](https://github.com/respeaker)

## FAQ

---
**Q1: 工場出荷状態にリセットするには？**

- シリアルコンソールまたは ssh セッションを開き、firstboot を実行します。[詳細](https://github.com/respeaker/get_started_with_respeaker/wiki/factory-reset)。

**Q2: 失敗したアップグレードから復旧するには？**

- ReSpeaker が OpenWrt システムの起動に失敗した場合、Web ターミナル、ssh、シリアルコンソールを通じてシステムにアクセスできません。[Rescue instruction](https://github.com/respeaker/get_started_with_respeaker/wiki/Rescue-from-a-failed-upgrade) に従って復旧できます。

**Q3: ReSpeaker が自分の Wi-Fi を見つけられない**

- まず [factory reset](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/faq.md#factory-reset) を試してください。
- Wi-Fi チャンネル 12 は ReSpeaker ではサポートされていません。ルーターがそのチャンネルを使用していないことを確認してください。

**Q4: Wifi-Config**

- [WEB-UI](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/QuickStart.md#setup-wi-fi) から Wi-Fi を設定することをお勧めします。もし使用できない場合は、シリアルコンソールでコマンドラインツール [wictl](https://github.com/respeaker/get_started_with_respeaker/wiki/WiFi) を試してください。

**Q5: BING speech api の認識言語を変更する方法**

- ウェイクアップワードを変更する必要がない場合は、`text = bing.recognize(data)` を `text = bing.recognize(data,language="zh-CN")` に変更するだけで構いません。 [詳細はこちら](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/bing_speech_api.py)。

**Q6: SD カードの警告メッセージ "Volume was not properly unmounted. Some data may be corrupt. Please run fsck" が表示される**

- SD カード上のファイルに問題がなければ、そのまま無視して構いません。問題がある場合は、[sd card formatter](https://www.sdcard.org/downloads/formatter_4/) でフォーマットしてみてください。

**Q7: Arduino からの不完全なフラッシュ**

- openwrt 上でブートローダーを書き直してください。

```
/etc/init.d/mopidy stop  # stop mopidy if it's running, mopidy-hallo plugin will use SPI
/etc/init.d/alexa stop      # stop alexa if it's running
mt7688_pinmux set ephy gpio
cd /etc/arduino
avrdude -c linuxgpio -p m32u4 -e -U lfuse:w:0xFF:m -U hfuse:w:0xD8:m -U efuse:w:0xCB:m  -U flash:w:Caterina-ReSpeaker.hex -u -U lock:w:0xEF:m
```

**Q8: WebUI のパスワードを忘れた**

- juci のパスワードをリセットします

```
orangectl passwd root 12345678  //replace 12345678 with the password you want to set
```

**Q9: google speech やその他の Speach TO Text(STT) エンジンをサポートする方法は？**

- [guide](https://github.com/respeaker/get_started_with_respeaker/wiki/Use-speech_recognition-python-library) に従って speech_recognition ライブラリをインストールします

**Q10: "IOError: [Errno -9998] Invalid number of channels" エラーで Alexa の実行に失敗する**

- 別のアプリケーションまたは Alexa インスタンスがオーディオ入力デバイスを使用しています。`/etc/init.d/alexa stop` と `/etc/init.d/mopidy stop` を実行してそれらを停止してください。mopidy の自動起動を無効にするには、`/etc/init.d/mopidy disable` を実行します。

**Q11: python playmusic.py の実行に失敗する**

- バックグラウンドで mopidy が動作しており、USB デバイスを使用している可能性があります。`/etc/init.d/mopidy stop` を実行して mopidy を停止し、再度コマンドを実行してみてください。

**Q12: RPC 接続がない**

- [guide](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/QuickStart.md#update-for-old-version) に従ってファームウェアを書き直す必要があります

**Q13: SFTP & FTP**

- respeaker には FTP はなく、SFTP のみがあります。

**Q14: シリアルコンソールがフリーズする**

- [arduino code](https://github.com/respeaker/respeaker_arduino_library/blob/master/examples/pixels_pattern/pixels_pattern.ino) を更新してみてください。

**Q15: 'ap' モードを無効にする方法**

- `vi /etc/config/wireless` で 'ap' インターフェースの 'ssid' フラグを '' に設定できます。これにより ap は非表示になります。

**Q16: I2C サウンドカードの問題**

- codec ドライバの互換名と codec の i2c アドレスを確認する必要があります。その後、イメージファームウェアを再ビルドします。

**Q17: 声がなくても Respeaker が頻繁に起動してしまう。**

- keyword.txt のしきい値を上げることで誤検出率を下げることができますが、感度も低下します。
- もう一つの方法は、現在の音響モジュールにあなたの声を適応させることです。詳細は [http://cmusphinx.sourceforge.net/wiki/tutorialadapt](http://cmusphinx.sourceforge.net/wiki/tutorialadapt) を参照してください。
- これは個々のキーワード認識を効果的に改善しますが、認識器の汎用性が低下する可能性があります。

**Q18: respeaker から GPIO ピンを制御する方法は？**

- [https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/gpio.py](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/gpio.py) を使用できます
- 例は [https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/spi.py](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/spi.py) で、GPIO を使用して SPI をエミュレートしています

**Q19: ウェイクアップワードを変更する方法は？**

- keywords.txt にはキーワードとそのしきい値が含まれています。例えば、[ここ](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/pocketsphinx-data/keywords.txt) の keywords.txt は次のようになっています

 ```
 respeaker /1e-30/
 alexa /1e-30/
 play music /1e-40/
 ```

 respeaker はキーワードであり、1e-30 はそのしきい値です。感度を向上させるには、例えば 1e-50 のようにしきい値を下げることができます。ただし、しきい値を下げると誤受理率が上昇することを理解しておく必要があります。

 新しいキーワードを追加したい場合は、まず [dictionary.txt](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/pocketsphinx-data/dictionary.txt) にキーワードを追加する必要があります。dictionary.txt は次のようになっています：

 ```
 respeaker R IY S P IY K ER
 alexa AH L EH K S AH
 play P L EY
 music M Y UW Z IH K
 ```

 最初の部分は名前（respeaker、alexa、music など）で、2 番目の部分はその音素です。大きな辞書の中から単語を探すには、[here](https://github.com/respeaker/pocketsphinx-data/blob/master/dictionary.txt) を参照してください。

- その後、コードを変更します：

 ```
 if mic.wakeup('respeaker'):
 ```

- キーワードのディレクトリは `/root/respeaker_python_library/respeaker/pocketsphinx-data` です

**Q20: ファクトリーイメージによるシステムリカバリ**

注意: Web 経由で ReSpeaker をアップデートできない場合、または [http://192.168.100.1/home.html](http://192.168.100.1/home.html) にアクセスできない場合は、[here](https://s3-us-west-2.amazonaws.com/respeaker.io/firmware/ramips-openwrt-latest-LinkIt7688-squashfs-sysupgrade.bin) をクリックして最新のファームウェアをコンピュータにダウンロードし、それを SD カードにコピーして SD カードを ReSpeaker に挿入してください。

ReSpeaker の [serial console](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/QuickStart.md#serial-console) に接続し、次のコマンドラインを入力してファームウェアを更新します：

```
mount /dev/mmcblk0p1 /mnt
cd /mnt
sysupgrade -n -F ramips-openwrt-latest-LinkIt7688-squashfs-sysupgrade.bin
```

ReSpeaker がファームウェアをインストールして再起動するまでに約 3 分かかります。アップデート中は ReSpeaker の電源を **切らないで** ください。

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/systemupdate2.png)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Respeaker_Core/res/RespeakerCorev1.0eaglefile.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

----

- **[Eagle]**[ReSpeaker Core v1.0 SCH](https://files.seeedstudio.com/wiki/Respeaker_Core/res/RespeakerCorev1.0_SCH.sch.zip)
- **[Eagle]**[ReSpeaker Core v1.0 BRD](https://files.seeedstudio.com/wiki/Respeaker_Core/res/RespeakerCorev1.0_BRD.brd.zip)
- **[PDF]**[ReSpeaker Core v1.0 Schematic(pdf)](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/RespeakerCorev1.0_Schematic.pdf)
- **[PDF]**[ReSpeaker Core v1.0 PCB bottom(pdf)](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/RespeakerCorev1.0_PCB_bottom.pdf)
- **[PDF]**[ReSpeaker Core v1.0 PCB top(pdf)](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/RespeakerCorev1.0_PCB_top.pdf)
- **[Document]**[ReSpeaker_Detail](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/README.md)
- **[PDF]** [AI7688 データシート](https://files.seeedstudio.com/wiki/Bazaar_file/AI7688.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
