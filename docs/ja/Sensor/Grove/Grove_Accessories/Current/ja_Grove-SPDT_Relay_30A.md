---
description: Grove - SPDTリレー(30A)
title: Grove - SPDTリレー(30A)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-SPDT_Relay_30A
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/img/SPDT_Relay_01.jpg" /></div>

SPDTリレー(30A)は、高品質な単極双投リレー(SPDT)です。このリレーは、コイル、1つの共通端子、1つの常閉端子、1つの常開端子で構成されています。リレーのコイルが休止状態（通電していない場合）では、共通端子と常閉端子が接続されています。コイルが通電されると、共通端子と常開端子が接続されます。このリレーのコイルは最大5Vまで対応し、接点は最大30A（@250VAC、30VDC）まで対応します。高電流デバイスを制御するために使用できます。

## 特徴

---

- 高いスイッチング電流
- SPDTリレー
- 常閉リレー

:::tip
  Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 仕様

---
|項目| 最小| 典型 |最大 |単位|
|---|---|---|---|---|
|動作電圧| 4.75| 5.0| 5.25 |VDC|
|電流 |-|185|-| mA|
|引き込み電圧(最大) |-|3.75|-| VDC|
|動作時間(最大)|-| 15|-| ms|
|解放時間(最大)|-| 10|-| ms|
|動作周囲温度| -25| - |70 |°C|

## 使用方法

---
**Arduinoでの使用**

なぜリレーを使用する必要があるのか、また本当に必要なのか？高電流を消費するデバイスや高電圧で動作するデバイスをオン/オフする場合、リレーが必要です。つまり、リレーは「低電圧で制御される高電圧または高電流スイッチ」です。私たちが最も一般的に使用するSPDTリレーのコイルは非常に少ない電流を消費します（[Grove - Relay](https://wiki.seeedstudio.com/ja/Grove-Relay/)は10Aをサポート）。この30Aリレーを使用すれば、ヘッドライト、駐車灯、ホーンなど、さらに高電流のスイッチデバイスを制御できます。

SPDTリレーの内部構造：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/img/Relay_Struction.jpg" /></div>

リレーのコイルが休止状態のとき、共通端子と常閉端子が接続されていることがわかります。

しかし、コイルが通電されると、共通端子と常開端子が接続されます。

ハードウェアの接続は以下の図を参照してください：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/img/SPDT_Relay.jpg" /></div>

このリレーを制御するためのコードは、[Grove - Relay](https://wiki.seeedstudio.com/ja/Grove-Relay/)と同じです。

ArduinoとGrove - SPDTリレー(30A)を使用して、エアコンや洗濯機を制御する際の成功を祈ります。

**Raspberry Piでの使用**

1. Raspberry PiとGrovePiまたはGrovePi+を用意してください。

2. 開発環境の設定を完了している必要があります。設定がまだの場合は[こちら](https://wiki.seeedstudio.com/ja/GrovePi_Plus#Introducing_the_GrovePi.2B)を参照してください。

3. 接続

- センサーをGroveケーブルを使用してGrovePiのD4ソケットに接続します。

4. デモディレクトリに移動します：

```
   cd yourpath/GrovePi/Software/Python/
```

コードを確認するには：

```
   nano grove_spdt_relay.py   # "Ctrl+x"で終了 #
```

```
import time
import grovepi

# Grove SPDTリレーをデジタルポートD4に接続
# SIG,NC,VCC,GND
relay = 4

grovepi.pinMode(relay,"OUTPUT")

while True:
    try:
        # 5秒間オン
        grovepi.digitalWrite(relay,1)
        print "on"
        time.sleep(5)

        # 5秒間オフ
        grovepi.digitalWrite(relay,0)
        print "off"
        time.sleep(5)

    except KeyboardInterrupt:
        grovepi.digitalWrite(relay,0)
        break
    except IOError:
        print "Error"
```

5. デモを実行します。

```
   sudo python grove_spdt_relay.py
```

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/res/Grove_-_SPDT_Relay(30A)_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---

- [Grove - SPDTリレー(30A) Eagleファイル](https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/res/Grove_-_SPDT_Relay(30A)_Eagle_File.zip)
- [SLA-05VDC-SL-C データシート](https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/res/SLA-05VDC-SL-C_Datasheet.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>