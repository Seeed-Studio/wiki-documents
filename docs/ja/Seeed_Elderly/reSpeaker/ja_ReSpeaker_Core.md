---
description: ReSpeaker Core
title: ReSpeaker Core
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ReSpeaker_Core
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/respeaker_core.jpg)

ReSpeakerは、あなたの周りのものをハックするためのオープンモジュラー音声インターフェースです。家電製品、植物、オフィス、インターネット対応デバイス、または日常生活のその他のものと、すべて音声で対話できます。

- **周囲環境のための音声対応拡張機能**

  ReSpeakerは、オンライン認知サービスとオフライン軽量音声認識エンジンの両方をサポートしています。ReSpeakerを身の回りのものに追加して、それらをスマート（よりスマート）にすることができます。

- **音楽ストリーミング用デバイス**

  音声インターフェースは音楽エンターテイメントから切り離されたことはなく、ReSpeakerも同様です。ReSpeakerはワイヤレス音楽ストリーミング用のAirplay/DLNAをサポートしています。ReSpeakerをAUXケーブルで普通のスピーカーに接続するだけで、ボタンを一つも押すことなく、お気に入りの音楽を楽しむことができます。

- **子供向けの学習ツール**

  LinuxベースのOpenWrtを実行するオンボードMT7688 Wi-Fiモジュールに加えて、ReSpeakerはATmega32u4チップでも動作し、完全にArduino互換です。つまり、ReSpeakerを強力なArduinoボードとして使用し、多くの「Arduino」的なことができます。学習のため、練習のため、そして楽しみのためです。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/ReSpeaker-Core-Based-On-MT7688-and-OpenWRT-p-2716.html)

## 特徴

---
![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/respeaker_core_futures.jpg)

- ハンズフリー操作：インターネットありまたはなしでの音声認識
- ワイヤレスストリーミング：Airplay/DLNA経由での音楽ストリーミング
- 使いやすいSDK：PythonおよびC/C++開発者向け
- 成長する機能：ダウンロードしてプラグインし、機能を充実させる
- プラグアンドプレイアドオン：Mic Array、Grove拡張ボード、Groveモジュールで拡張可能
- インストール不要アプリ：Webベースアプリですべてを設定（まだ利用不可）

## 仕様

---
![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/respeaker_core_hardware%20overview.jpg)

**技術仕様**

- AI7688 Wi-Fiモジュール：

  - オペレーティングシステム：GNU/LinuxベースのOpenWrt
  - Wi-Fiネットワーク：Legacy 802.11b/gおよびHT 802.11nモードをサポート
  - 拡張：I2C、GPIO、USB 2.0ホスト用の2つの拡張ヘッダー
  - インターフェース：内蔵3.5mm AUXポート、Micro USB、SDカードスロット

- ATMega32U4コプロセッサ：

  - Linuxコンソール用USB CDC仮想シリアルポート
  - 12個のプログラマブルRGB LEDインジケーター
  - 8個のオンボードタッチセンサー

- コーデックWM8960：

  - DAC SNR 98dB（'A'加重）、THD -84dB（48kHz、3.3V）
  - ADC SNR 94dB（'A'加重）、THD -82dB（48kHz、3.3V）
  - 87%効率のステレオクラスDスピーカードライバー（1W出力）
  - オンチップヘッドフォンドライバー
  - 3.3Vで16Ωに40mW出力電力
  - THD -75dB（20mW）、16Ω負荷でSNR 90dB
  - オンチップPLLが柔軟なクロッキングスキームを提供
  - サンプルレート：8、11.025、12、16、22.05、24、32、44.1、48 kHz

- 電源：5V DC

- 寸法：直径70mm

- 重量：17g

**ピン配置図**

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/respeaker_core_pinmap.png)

- GPIO0/I2S_ADC：外部エンコーダー/デコーダーを駆動、ADC信号
- GPIO1/I2S_DAC：外部エンコーダー/デコーダーを駆動、DAC信号
- GPIO2/I2S_LRCLK：外部エンコーダー/デコーダーを駆動、左/右チャンネルサンプルクロック
- GPIO3/I2S_BCLK：外部エンコーダー/デコーダーを駆動、ビットクロック
- MCLK_OUT：外部デバイス用マスタークロック
- HP_SEL：ヘッドフォンチャンネル選択。ReSpeaker Mic Arrayを使用してオーディオを出力する場合は、HP_SELをハイに設定
- HP_L：ReSpeaker Mic Arrayからのアナログオーディオ左チャンネル
- HP_R：ReSpeaker Mic Arrayからのアナログオーディオ右チャンネル
- AGND：オーディオ用アナロググランド

## はじめに

---

### ReSpeaker Coreを初めて入手したときに何をすべきか

**1. 準備**

- ReSpeaker Core
- PCまたはMac
- Wi-Fiネットワーク
- SDカード

**2. シリアルコンソールに接続**

- Windowsの場合、[putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)を推奨します。

  - USBでReSpeakerをPCに接続し、「デバイスマネージャー」でCOMポートを確認してください。ここでは私のReSpeakerのCOMポートはCOM31です。

    ![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/putty1.png)

  - 接続タイプでSerialを選択します。Serial lineフィールドに、ReSpeakerのCOMポートを入力します。Speedフィールドに57600と入力します。

    ![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/putty2.png)

  - Openをクリックします。空白の画面が表示されたら、Enterキーを押してください。

    ![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/putty3.png)

- Linux/Macの場合

  - USBでReSpeakerをPCに接続します
  - ターミナルセッションを開きます
  - ターミナルでls /dev/tty.usb*と入力します。デバイスのリストが表示されるはずです。tty.usbmodemXXXXXのようなものを探してください。XXXXXは通常ランダムな識別子です。これがシステムコンソールにアクセスするために使用されるシリアルデバイスです。次に、screenユーティリティを使用してシリアルポートに接続し、ボーレートを57600に設定します。これは、システムコンソールのボーレートがデフォルトで57600であるためです。

```
$ ls /dev/tty.usb*
/dev/tty.usbmodem14221
$ screen /dev/tty.usbmodem14221 57600
```

**3. Wi-Fi設定**

ReSpeakerはデフォルトでリピーターモードに設定されており、インターネットでの音声認識を楽しむ前に、既存のワイヤレスネットワークに接続する必要があります。

ReSpeakerを初めて電源投入すると、「ReSpeakerXXXXXX」というWi-Fiネットワークが作成されます。ここで「XXXXXX」は、ボードに記載されているReSpeakerのMACアドレスの下6桁です。コンピューターをこのネットワークに接続してください。

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/wifi1.png)

:::note
「ReSpeakerXXXXXX」が表示されず、「LinkIt_Smart_7688_XXXXXX」が見つかった場合は、[こちら](https://wiki.seeedstudio.com/ja/ReSpeaker_Core/#q20-system-recovery-by-factory-image)をクリックしてください。
:::

IPアドレスを取得したら、Webブラウザーを開き、アドレスバーに192.168.100.1と入力してください。数秒後、既存のWi-Fiネットワークのssidとパスワードを求めるWebページが表示されます。

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/wifi2.png)

接続したいWi-Fiを選択し、パスワードを入力してください。OKボタンを押すと、ReSpeakerは指定されたネットワークに参加します。

これでReSpeakerはインターネットにアクセスできるようになります。

また、コマンドラインでWi-Fiを設定する別の方法もあります。
wictlを使用してwifiをスキャンし、接続することができます。

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
上記の方法でWifiに接続できない場合は、firstbootコマンドを入力して工場出荷時設定にリセットしてください。
:::

Wifi機能が有効になった後、以下のコマンドでSSHを使用してRespeakerに接続できます。RespeakerのIPアドレスは
&lt;http://192.168.100.1/#!/overview&gt; WAN IPから取得できます。パスワードはrootです。

```
ssh root@ssh *.*.*.*

```

**4. SDカードを使用してストレージを拡張する**

多くの場合、組み込みデバイスで利用可能なストレージ容量は限られています（ReSpeakerはユーザー向けにオンボードフラッシュストレージを5Mしか残していません）。アプリケーションとデータ用により多くのストレージがあることで、ReSpeakerの可能性を拡張できるため、SDカードを使用して**extroot**としてストレージを拡張することは良い選択です。

**extroot**を使用することで、追加のストレージデバイスを使用してルートファイルシステムのストレージ容量の拡張が実現されます。
ブートプロセス中に、外部ストレージスペースがルートファイルシステムとしてマウントされるか、元のファイルシステム上のオーバーレイ構成でマウントされます。

- SDカードがReSpeakerに挿入されており、/dev/mmcblk0p1がdf -hまたはls /devで検出できることを確認してください。

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

- SDカードを2つのパーティションにフォーマットします。1つはFAT32、もう1つはEXT4です。EXT4ファイルシステムはextrootとして使用され、FAT32は通常のストレージデバイスとして使用され、ReSpeakerとPCの間でファイル転送が可能になります。

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

- 外部ストレージのルートオーバーレイを準備します。

```
mount /dev/mmcblk0p2 /mnt ; tar -C /overlay -cvf - . | tar -C /mnt -xf - ; umount /mnt
```

- 以下のコマンドでfstabを作成します。このコマンドは、すべてのパーティションを有効にし、'/mnt/mmcblk0p2'パーティションを'/overlay'パーティションとして設定するfstabテンプレートを作成します。

```
 block detect > /etc/config/fstab;
 sed -i s/option$'\t'enabled$'\t'\'0\'/option$'\t'enabled$'\t'\'1\'/ /etc/config/fstab;
 sed -i s#/mnt/mmcblk0p2#/overlay# /etc/config/fstab;
 cat /etc/config/fstab;
```

- オーバーレイにマウント可能かどうかを確認する。

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

- ReSpeakerを再起動して再度確認してください。SDカードが自動的にマウントされれば完了です。**extroot**についての詳細情報は[こちら](https://wiki.openwrt.org/doc/howto/extroot)をクリックしてください。

**5. ReSpeakerにソフトウェアをインストールする**

SDカードでストレージを拡張した後、ReSpeakerにソフトウェアをインストールするのに十分なストレージ容量が確保されます。

gitをインストール

```
 opkg update
 opkg install git git-http
```

**6. Pythonライブラリの更新**

```
git clone https://github.com/respeaker/respeaker_python_library.git
cd respeaker_python_library
python setup.py install
```

### 音声インタラクションでの第一印象 - ReSpeaker、音楽を再生

Bing Speech APIを使用することで、ReSpeakerはマイクからのオーディオをリアルタイムでオンにして認識したり、ファイルからのオーディオを認識したりできます。

Bing Speech APIを使用するには、まず[こちら](https://www.microsoft.com/cognitive-services/en-us/speech-api)からMicrosoft Cognitive Servicesのキーを取得し、それをBING_KEY = ''にコピーしてから、以下のコードをplaymusic.pyに保存して実行してください

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

"INFO:mic:Start Detecting" が表示された後、"ReSpeaker" と言ってプログラムを起動し、"play music" と言って音楽を再生させてください。すると ReSpeaker は **madplay** ツールを使用して現在のパスにある "Tchaikovsky_Concerto_No.1p.mp3" を再生します。

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/bingplaymusic.png)

以下のエラーコードが表示される場合、mopidy がバックグラウンドで実行されており、USB デバイスを使用しています。その場合は /etc/init.d/mopidy stop mopidy を実行してから、再度コマンドを実行してください。

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

Linux ベースの OpenWrt を実行するオンボード MT7688 Wi-Fi モジュールではなく、ReSpeaker は ATmega32u4 チップによっても駆動され、完全に Arduino 互換です。つまり、ReSpeaker を強力な Arduino ボードとして使用し、多くの「Arduino」的なことができます。これは学習のため、練習のため、そして楽しみのためです。

例えば、Arduino IDE でプログラムして、ReSpeaker の 8 つのタッチセンサーに接続された 8 個のチェリートマトで構築された特別な DIY ピアノを作ることができます。
![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/fruitpiano2.PNG)

1. git clone &lt;https://github.com/respeaker/piano.git&gt;  ReSpeaker でリポジトリをダウンロード
2. コンピューターに [ReSpeaker Arduino Library](https://github.com/respeaker/respeaker_arduino_library) をダウンロード
3. [piano.ino](https://github.com/respeaker/piano/blob/master/arduino/piano.ino) を ReSpeaker の Arduino Leonardo (ATmega32U4) にアップロード
4. ReSpeaker のシリアルコンソールで python piano.py を実行

### Weather Cloud

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/weathercloud.jpg)

Weather Cloud は ReSpeaker の素晴らしいプロジェクトです。このクールな構築により、ReSpeaker を Weather Cloud に変え、鮮やかな光と音で天気を表示できます。

このプロジェクトでは、Openwrt がインターネットからリアルタイムの天気情報を取得し、音声インタラクションと音声出力を行い、Arduino がカラフルな RGB LED の制御を担当します。

1. git clone &lt;https://github.com/jerryyip/WeatherCloud.git&gt;  ReSpeaker でリポジトリをダウンロード
2. コンピューターに [ReSpeaker Arduino Library](https://github.com/respeaker/respeaker_arduino_library) をダウンロード
3. ReSpeaker Arduino Library の [pixels_pattern.ino](https://github.com/respeaker/respeaker_arduino_library/blob/master/examples/pixels_pattern/pixels_pattern.ino) を ReSpeaker の Arduino にアップロード
4. [ここ](http://openweathermap.org/appid) から OpenWeatherMap appid を取得し、main.py の appID = "" にコピーし、city="" にあなたの都市を追加することを忘れずに
5. SPI ブリッジを使用する前に OpenWrt の mopidy サービスを停止
/etc/init.d/mopidy stop
6. python main.py を実行し、ReSpeaker に「ReSpeaker, what is the weather like?」と話しかける
7. Weather Cloud の作り方の詳細については、[こちら](https://www.instructables.com/id/How-to-DIY-an-in-House-Weather-telling-Cloud/) をクリックしてください。

## ReSpeaker マイクアレイ

---

### [ReSpeaker マイクアレイ](https://www.seeedstudio.com/ReSpeaker-Mic-Array-Far-field-w%2F-7-PDM-Microphones--p-2719.html)

ReSpeaker Mic Array は ReSpeaker Core の上に直接スタック（接続）でき、音声インタラクション体験を大幅に向上させます。XMOS の XVSM-2000 Smart Microphone をベースに開発されています。このボードは 7 つの PDM マイクロフォンを統合し、ReSpeaker の音響 DSP 性能をはるかに高いレベルまで向上させます。

## 私たちのソフトウェアについて

---

### [ReSpeaker Arduino ライブラリ](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/ReSpeakerArduinoLibrary.md#respeaker-arduino-library)

ReSpeaker Arduino Library は以下の機能を提供します：

- 静電容量式タッチセンシングをサポート
- WS2812 RGB LED ドライバーを実装
- Arduino (ATmega32U4) と Linux ベース OpenWrt (MT7688) 間の USB to Serial ブリッジと SPI ブリッジを構築

### [ReSpeaker Python ライブラリ](https://github.com/respeaker/respeaker_python_library)

ReSpeaker は音声対応オブジェクトを作成するオープンプロジェクトです。ReSpeaker python library は音声インタラクションの基本機能を提供するオープンソース python ライブラリです。

キーワードスポッティングに PocketSphinx を使用し、音声アクティビティ検出に webrtcvad を使用します。

### [詳細情報については私たちの GitHub リポジトリをご覧ください](https://github.com/respeaker)

## FAQ

---
**Q1: ファクトリーリセットの方法は？**

- シリアルコンソールまたはsshセッションを開き、firstbootを実行してください。[詳細](https://github.com/respeaker/get_started_with_respeaker/wiki/factory-reset)。

**Q2: アップグレード失敗からの復旧方法は？**

- respeakerがopenwrtシステムの起動に失敗した場合、Webターミナル、ssh、またはシリアルコンソール経由でシステムにアクセスできません。[復旧手順](https://github.com/respeaker/get_started_with_respeaker/wiki/Rescue-from-a-failed-upgrade)に従って復旧できます。

**Q3: ReSpeakerが私のWi-Fiを見つけられない**

- まず[ファクトリーリセット](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/faq.md#factory-reset)を試してください。
- また、Wi-Fiチャンネル12はReSpeakerでサポートされていません。ルーターがそのチャンネルを使用していないことを確認してください。

**Q4: Wifi設定**

- [WEB-UI](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/QuickStart.md#setup-wi-fi)経由でWi-Fiを設定することをお勧めします。それが使用できない場合は、シリアルコンソールでコマンドラインツール[wictl](https://github.com/respeaker/get_started_with_respeaker/wiki/WiFi)を試してください。

**Q5: BING音声API認識言語の変更方法**

- ウェイクアップワードを変更する必要がない場合は、text = bing.recognize(data)をtext = bing.recognize(data,language="zh-CN")に変更するだけで十分です。[詳細](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/bing_speech_api.py)。

**Q6: SDカードの警告メッセージ「Volume was not properly unmounted. Some data may be corrupt. Please run fsck」が表示される**

- SDカード上のファイルが正常であれば、無視してください。そうでなければ、[SDカードフォーマッター](https://www.sdcard.org/downloads/formatter_4/)でフォーマットを試してください。

**Q7: Arduinoからの不正なフラッシュ**

- openwrt上でブートローダーを再フラッシュしてください。

```
/etc/init.d/mopidy stop  # stop mopidy if it's running, mopidy-hallo plugin will use SPI
/etc/init.d/alexa stop      # stop alexa if it's running
mt7688_pinmux set ephy gpio
cd /etc/arduino
avrdude -c linuxgpio -p m32u4 -e -U lfuse:w:0xFF:m -U hfuse:w:0xD8:m -U efuse:w:0xCB:m  -U flash:w:Caterina-ReSpeaker.hex -u -U lock:w:0xEF:m
```

**Q8: WebUIのパスワードを忘れた場合**

- juciパスワードをリセットする

```
orangectl passwd root 12345678  //replace 12345678 with the password you want to set
```

**Q9: Google音声認識や他のSpeech To Text(STT)エンジンをサポートする方法は？**

- [ガイド](https://github.com/respeaker/get_started_with_respeaker/wiki/Use-speech_recognition-python-library)に従ってspeech_recognitionライブラリをインストールしてください

**Q10: "IOError: [Errno -9998] Invalid number of channels"エラーでAlexaの実行に失敗する**

- 他のアプリケーションやalexaインスタンスがオーディオ入力デバイスを使用しています。/etc/init.d/alexa stopと/etc/init.d/mopidy stopを実行してそれらを停止してください。mopidyの起動を無効にするには、/etc/init.d/mopidy disableを実行してください。

**Q11: python playmusic.pyの実行に失敗する**

- mopidyがバックグラウンドで実行されており、USBデバイスを使用していることが原因です。/etc/init.d/mopidy stopを実行してmopidyを停止し、コマンドを再実行してください。

**Q12: RPC接続がない**

- [ガイド](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/QuickStart.md#update-for-old-version)に従ってファームウェアを再フラッシュする必要があります

**Q13: SFTP & FTP**

- respeakerにはFTPはありません、SFTPのみです。

**Q14: シリアルコンソールがロックアップする**

- [arduinoコード](https://github.com/respeaker/respeaker_arduino_library/blob/master/examples/pixels_pattern/pixels_pattern.ino)の更新を試してください。

**Q15: 'ap'モードを無効にする方法**

- vi /etc/config/wirelessで'ap'インターフェースの'ssid'フラグを''に設定できます。そうするとapが非表示になります。

**Q16: I2Cサウンドカードの問題**

- codecドライバーの互換名とcodec i2cアドレスを確認する必要があります。その後、イメージファームウェアを再構築してください。

**Q17: Respeakerが音声がなくても頻繁にウェイクアップする**

- keyword.txtの閾値を上げることで偽陽性率を下げることができますが、感度も下がります。
- もう一つの方法は、現在の音響モジュールにあなたの音声を適応させることです。詳細は[http://cmusphinx.sourceforge.net/wiki/tutorialadapt](http://cmusphinx.sourceforge.net/wiki/tutorialadapt)をご覧ください。
- これにより個別のキーワード認識が効果的に改善されますが、認識器の汎用性が低下する可能性があります。

**Q18: respeakerからGPIOピンを制御する方法**

- [https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/gpio.py](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/gpio.py)を使用できます
- 例は[https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/spi.py](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/spi.py)で、GPIOを使用してSPIをシミュレートしています

**Q19: ウェイクアップワードを変更する方法**

- keywords.txtにはキーワードとその閾値が含まれています。例えば、[ここ](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/pocketsphinx-data/keywords.txt)のkeywords.txtは

 ```
 respeaker /1e-30/
 alexa /1e-30/
 play music /1e-40/
 ```

 respeaker はキーワードで、1e-30 がその閾値です。感度を向上させるには、閾値を下げることができます。例えば、1e-50 です。閾値を下げると誤受諾率が増加することを知っておく必要があります。

新しいキーワードを追加したい場合は、まず [dictionary.txt](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/pocketsphinx-data/dictionary.txt) にキーワードを追加する必要があります。dictionary.txt は次のようになっています：

 ```
 respeaker R IY S P IY K ER
 alexa AH L EH K S AH
 play P L EY
 music M Y UW Z IH K
 ```

 最初の部分は名前（respeaker、alexa、music）で、2番目の部分はその音素です。大きな辞書の単語は[こちら](https://github.com/respeaker/pocketsphinx-data/blob/master/dictionary.txt)で見つけることができます。

- 次にコードを変更します：

 ```
 if mic.wakeup('respeaker'):
 ```

- キーワードのディレクトリは `/root/respeaker_python_library/respeaker/pocketsphinx-data` です

**Q20: ファクトリーイメージによるシステム復旧。**

注意: Web経由でReSpeakerを更新できない場合や [http://192.168.100.1/home.html](http://192.168.100.1/home.html) にアクセスできない場合は、[こちら](https://s3-us-west-2.amazonaws.com/respeaker.io/firmware/ramips-openwrt-latest-LinkIt7688-squashfs-sysupgrade.bin) をクリックして最新のファームウェアをコンピューターにダウンロードし、SDカードにコピーしてReSpeakerにSDカードを挿入してください。

ReSpeakerの[シリアルコンソール](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/QuickStart.md#serial-console)に接続し、以下のコマンドラインを入力してファームウェアを更新してください：

```
mount /dev/mmcblk0p1 /mnt
cd /mnt
sysupgrade -n -F ramips-openwrt-latest-LinkIt7688-squashfs-sysupgrade.bin
```

ReSpeakerがファームウェアをインストールして再起動するまでに約3分かかります。更新中はReSpeakerの電源を**切らないで**ください。

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
- **[Document]**[ReSpeaker_詳細](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/README.md)
- **[PDF]** [AI7688 データシート](https://files.seeedstudio.com/wiki/Bazaar_file/AI7688.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
