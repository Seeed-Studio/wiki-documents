---
description: Wio Terminal を使用して Raspberry Pi の情報を読み取る
title: Wio Terminal を使用して Raspberry Pi の情報を読み取る
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-Reading-Raspberry-Pi
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio Terminal を使用して Raspberry Pi のシステムステータスを読み取る

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-rasp.gif)

この Wiki では、Wio Terminal を使用して USB シリアル通信を介して Raspberry Pi のシステムステータスを読み取る方法を紹介します。このデモでは、Raspberry Pi がホストコンピュータとなり、USB を介してシリアルポートにシステム情報を送信します。Wio Terminal はスレーブとして動作し、受信したデータを LCD スクリーンに表示します。

## 必要な部品

- [Raspberry Pi](https://www.seeedstudio.com/Boards-c-17.html) (ここでは 3B+ を使用)

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- USB Type-C ケーブル

## 特徴

- Raspberry Pi のシステムステータスを読み取る

- Wio Terminal のスクリーンに表示する

## Raspberry Pi ホストプログラム

以下の Python コードを Raspberry Pi 上で実行し、USB シリアルを介して Wio Terminal にシステム情報を送信します。

**注意:** Python コード内のシリアルポートが正しいことを確認してください。デバイスに応じて変更してください。

### Raspberry Pi 上の Python コード

```py
import os
import time 
import serial

# Arduino シリアルから読み取るための設定
serialPort= "/dev/ttyACM0" # シリアルポートを変更してください。Arduino IDE で確認可能
baudRate = 115200
ser = serial.Serial(serialPort, baudRate, timeout=0.5)
time.sleep(2)

# CPU 温度を文字列として返す
def getCPUtemperature():
    res = os.popen('vcgencmd measure_temp').readline()
    return(res.replace("temp=","").replace("'C\n",""))

# RAM 情報をリストで返す (単位=kb)
# インデックス 0: 総 RAM
# インデックス 1: 使用中 RAM
# インデックス 2: 空き RAM
def getRAMinfo():
    p = os.popen('free')
    i = 0
    while 1:
        i = i + 1
        line = p.readline()
        if i==2:
            return(line.split()[1:4])

# ユーザーによる CPU 使用率を文字列として返す
def getCPUuse():
    return(str(os.popen("top -n1 | awk '/Cpu\(s\):/ {print $2}'").readline().strip()))

# ディスクスペース情報をリストで返す (単位含む)
# インデックス 0: 総ディスクスペース
# インデックス 1: 使用中ディスクスペース
# インデックス 2: 残りディスクスペース
# インデックス 3: 使用済みディスクの割合
def getDiskSpace():
    p = os.popen("df -h /")
    i = 0
    while 1:
        i = i +1
        line = p.readline()
        if i==2:
            return(line.split()[1:5])
 
def main():
    while True:
        # CPU 情報
        CPU_temp = getCPUtemperature()
        CPU_usage = getCPUuse()

        # RAM 情報
        # 出力は kb 単位、読みやすさのために Mb に変換
        RAM_stats = getRAMinfo()
        RAM_total = str(round(int(RAM_stats[0]) / 1000,1))
        RAM_used = str(round(int(RAM_stats[1]) / 1000,1))
        RAM_free = str(round(int(RAM_stats[2]) / 1000,1))

        # ディスク情報
        DISK_stats = getDiskSpace()
        DISK_total = DISK_stats[0]
        DISK_used = DISK_stats[1]
        DISK_perc = DISK_stats[3]

        temp=ser.write(str.encode(CPU_temp+' '+CPU_usage))

        data=ser.write(str.encode(CPU_temp+':'+CPU_usage+':'+RAM_total+':'+RAM_used+':'+RAM_free+':'+DISK_total+':'+DISK_used+':'+DISK_perc))
        ser.flush()
        time.sleep(2)

        print('')
        print('CPU 温度 = '+CPU_temp)
        print('CPU 使用率 = '+CPU_usage)
        print('')
        print('RAM 合計 = '+str(RAM_total)+' MB')
        print('RAM 使用中 = '+str(RAM_used)+' MB')
        print('RAM 空き = '+str(RAM_free)+' MB')
        print('')  
        print('ディスク合計スペース = '+str(DISK_total)+'B')
        print('ディスク使用中スペース = '+str(DISK_used)+'B')
        print('ディスク使用率 = '+str(DISK_perc)) 


if __name__ == '__main__':
    try:    
        main()
    except KeyboardInterrupt:    
        if ser != None:    
            ser.close()
```

## Arduino コード

### 必要な Arduino ライブラリ

- LCD スクリーンライブラリ `Seeed_Arduino_LCD` をインストールしてください。詳細は [Wio Terminal LCD](https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Overview/) を参照してください。

- [`Free_Fonts.h`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Free_Fonts.h) ヘッダーファイルをダウンロードし、LCD ライブラリに含まれるフリーフォントの略語を使用できるようにします。このヘッダーファイルを Arduino スケッチと同じ場所に配置してください。

### 完全なコード

完全なコードを [こちら](https://files.seeedstudio.com/wiki/Wio-Terminal/res/readRasp.ino) からダウンロードしてください。

## 手順

1. Arduino コードを Wio Terminal にアップロードします。アップロード後、開始画面が表示されるはずです。

2. Wio Terminal を USB Type-C ケーブルで Raspberry Pi に接続します。

3. Raspberry Pi 上で Python コードを実行します。

4. Wio Terminal の LCD スクリーンに Raspberry Pi のシステム情報が表示されるはずです。

## 技術サポートと製品に関する議論

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>