---
description: Micro_bit bitcar
title: BitCar
keywords:
- Micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Bitcar
last_update:
  date: 05/15/2025
  author: Seraphina
---


<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113289-2b808a5b-f4e6-4205-ba05-f5ef6339f38d.png#align=left&display=inline&height=415&originHeight=415&originWidth=415&size=0&status=done&style=none&width=415) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/9.png)

## はじめに
BitCarは、子供たちのSTEAM学習を促進するために設計された、スマートでプログラム可能なロボットカーを作るmicro:bitプロジェクトです。Microsoft MakeCodeのプログラムを組み合わせることで、このロボットカーはライン追従、障害物回避、さらにはウィリー走行を行うことができます。この車にはメロディや効果音を再生するためのスピーカーが搭載されており、車体の下部には4つのカラフルなRGB LEDが配置されています。また、前方には取り外し可能な超音波センサーがあり、進行方向の障害物を回避することができます。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113282-0a378b93-75f4-4f4a-a776-9d20a53ffc20.png#align=left&display=inline&height=554&originHeight=554&originWidth=923&size=0&status=done&style=none&width=923) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/10.png)

:::note
micro:bit、USBケーブル、バッテリーはパッケージに含まれていません。これらは別途用意する必要があります。車の組み立て方法については、添付資料1「BitCar組み立て説明書」を参照してください。カバーとシャーシの詳細については、添付資料3「BitCarカバー＆シャーシ」を参照してください。
:::

## チュートリアル
このキットの使い方を学ぶための例をいくつか紹介します。さあ、始めましょう！


### 1. ライン追従
#### 1.1 実装

車が起動すると、トラックに沿って走行します。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113288-c57403ca-ae55-473e-ae97-42c2b0c7ca78.png#align=left&display=inline&height=632&originHeight=632&originWidth=1014&size=0&status=done&style=none&width=1014) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/11.png)

> 添付資料2「BitCarマップ」を参照してください。

#### 1.2 プログラムを書く
MakeCodeには車を制御するブロックがないため、拡張機能を追加する必要があります。以下の手順に従って拡張機能を追加してください。

- まず、MakeCodeにアクセスします：[https://makecode.microbit.org/](https://makecode.microbit.org/)

- ステップ1 新しいプロジェクトを作成し、ワークスペースに移動します。歯車アイコン（設定用）をクリックします。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113277-c32373b0-93fd-4471-b79b-e1dfd4958188.png#align=left&display=inline&height=565&originHeight=565&originWidth=1152&size=0&status=done&style=none&width=1152) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/12.png)

- ステップ2 ドロップダウンリストから「Extensions」をクリックすると、拡張機能ページに移動します。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113293-225fdfab-20b1-4d31-bc32-1ae7adad3f6d.png#align=left&display=inline&height=723&originHeight=723&originWidth=945&size=0&status=done&style=none&width=945) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/13.png)

- ステップ3 この拡張機能リンクを検索ボックスにコピー＆ペーストします：[https://github.com/TinkerGen/pxt-BitCar](https://github.com/TinkerGen/pxt-BitCar)
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113278-4c8a39b6-2479-47c5-900f-a785f201815c.png#align=left&display=inline&height=448&originHeight=448&originWidth=992&size=0&status=done&style=none&width=992) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/14.png)

> この拡張機能が存在しないというプロンプトが表示された場合は、ブラウザを閉じて再試行してください。

- ステップ4 拡張機能アイコンをクリックして、ワークスペースに戻ります。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113293-405a3a72-1457-4dbb-a230-84db87fe68d1.png#align=left&display=inline&height=505&originHeight=505&originWidth=1119&size=0&status=done&style=none&width=1119) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/15.png)

拡張機能を追加したら、タスクを開始できます。


まず、「forever」ブロックを追加します。左側で黒い線が検出された場合、車は短い左折を行い、トラックに沿って進むことができます。この場合、左モーターの速度を3%、右モーターの速度を15%に設定します。同様に、右側で黒い線が検出された場合、車は短い右折を行います。この場合、右モーターの速度を3%、左モーターの速度を15%に設定します。

> 必要に応じてモーター速度を調整できます。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113295-500e52b5-b3ff-4474-9e87-ed72c1329f1e.png#align=left&display=inline&height=556&originHeight=556&originWidth=1282&size=0&status=done&style=none&width=1282) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/16.png)

#### 1.3 デバイスを接続する
micro:bitをBitCarにスライドさせて挿入し、逆向きにならないように注意してください。その後、USBケーブルを使用してmicro:bitをPCに接続します。micro:bitのLEDインジケーターが点灯しているか確認してください。点灯していない場合は、USBケーブルを再度差し込む必要があります。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113285-2552ad75-17d6-4f40-aa08-4223e9ccb65e.png#align=left&display=inline&height=543&originHeight=543&originWidth=642&size=0&status=done&style=none&width=642) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/17.png)

#### 1.4 プログラムをアップロードする
以前のチュートリアルで、作成したプログラムをダウンロードする方法をすでに説明しました。プログラムに名前を付け、「Download」ボタンをクリックしてmicro:bitに送信するだけです。
#### 1.5 プログラムを実行する
車のスイッチをオンにして、正常に動作するか確認してください。


### 2. 障害物回避
#### 2.1 実装
車が起動すると、トラックに沿って走行し、障害物を検知するとすぐに停止します。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113304-c6853e11-bd23-455c-8ca9-ab9b897a9f74.png#align=left&display=inline&height=311&originHeight=311&originWidth=554&size=0&status=done&style=none&width=554) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/18.png)

#### 2.2 プログラムを書く
引き続き、チュートリアル1と同じ方法でBitCar拡張機能を追加します。<br />
まず、「Forever」ブロックを追加します。超音波センサーが12未満の距離で物体を検出した場合、左モーターの速度を20%、右モーターの速度を0%に設定します。その後、0.7秒のタイムアウトを設定します。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113303-d80b5cc8-83ce-4109-bdbd-0c9244e69358.png#align=left&display=inline&height=474&originHeight=474&originWidth=1305&size=0&status=done&style=none&width=1305) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/19.png)

#### 2.3 デバイスを接続する
micro:bitをBitCarに差し込みます。このとき、逆向きに差し込まないよう注意してください。その後、USBケーブルを使ってmicro:bitをPCに接続します。micro:bitのLEDインジケーターが点灯しているか確認してください。点灯していない場合は、USBケーブルを再度差し込む必要があります。超音波センサーを取り出し、車に取り付けます。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113313-308bd885-a798-4c30-9a7c-18c399ba6fce.png#align=left&display=inline&height=314&originHeight=314&originWidth=408&size=0&status=done&style=none&width=408) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/20.png)

超音波センサーの取り付け方法（パッケージ内のユーザーマニュアルを参照してください）:
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113361-abf193ef-4dc7-4d2e-916b-e6cefef00147.png#align=left&display=inline&height=500&originHeight=500&originWidth=1012&size=0&status=done&style=none&width=1012) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/21.png)

#### 2.4 プログラムをアップロードする
前のチュートリアルでプログラムをダウンロードする方法を紹介しました。プログラムに名前を付け、「Download」ボタンをクリックしてmicro:bitに送信するだけです。

#### 2.5 プログラムを実行する
車のスイッチをオンにして、正常に動作するか確認してください。



### 3. RCカー（micro:bitで制御）
#### 3.1 実装
車が起動した後、micro:bitのボタンAを押すと車は前進し、ボタンBを押すと車は後退します。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113317-0bc5b339-1106-4562-839e-8ce42d2f8dd7.png#align=left&display=inline&height=539&originHeight=539&originWidth=944&size=0&status=done&style=none&width=944) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/22.png)

#### 3.2 プログラムを書く
引き続き、チュートリアル1と同じ方法でBitCar拡張機能を追加します。

- micro:bitプログラム<br />
「on start」ブロックを追加します。「radio set group」ブロックを接続します。「Forever」ブロックをドラッグ＆ドロップします。このプログラムロジックに従います：ボタンAが押された場合、ラジオは数字「1」を送信します。ボタンBが押された場合、ラジオは数字「2」を送信します。

- BitCarプログラム<br />
「on start」ブロックを追加します。「radio set group」ブロックを接続します。このプログラムロジックに従います：ラジオが「receivedNumber」という信号を受信します。「receivedNumber」が1の場合、車は15%の速度で前進します。「receivedNumber」が2の場合、車は15%の速度で後退します。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113345-98bd2a99-0f62-4ea6-adc8-6522c0cee2cb.png#align=left&display=inline&height=486&originHeight=486&originWidth=1213&size=0&status=done&style=none&width=1213) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/23.png)

micro:bitコントローラープログラム
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113327-1cb7faa3-45f1-440e-9192-7a1ca64bbf2e.png#align=left&display=inline&height=518&originHeight=518&originWidth=1283&size=0&status=done&style=none&width=1283) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/24.png)

BitCar受信プログラム

#### 3.3 デバイスを接続する
micro:bitをBitCarに差し込みます。このとき、逆向きに差し込まないよう注意してください。その後、USBケーブルを使ってmicro:bitをPCに接続します。micro:bitのLEDインジケーターが点灯しているか確認してください。点灯していない場合は、USBケーブルを再度差し込む必要があります。

:::note
このプロジェクトには2つのプログラムがあるため、2つのmicro:bitが必要です。1つのmicro:bitを電源に接続し、もう1つを車の制御に使用します。2つのmicro:bitを区別するために、それぞれ別々にプログラムを書き込み、ダウンロードする必要があります。このチュートリアルで言及されているmicro:bitはパッケージには含まれていません。
:::

#### 3.4 プログラムをアップロードする
前のチュートリアルでプログラムをダウンロードする方法を紹介しました。プログラムに名前を付け、「Download」ボタンをクリックしてmicro:bitに送信するだけです。

#### 3.5 プログラムを実行する
車のスイッチをオンにして、正常に動作するか確認してください。


### 4. RCカー（micro:bitとBitPlayerで制御）
#### 4.1 実装
ジョイスティックを上に引くと車は前進し、ジョイスティックを下に引くと車は後退します。ジョイスティックを左に引くと車は左に曲がり、ジョイスティックを右に引くと車は右に曲がります。ボタンAを押すと車は立ち上がり、ボタンBを押すと車は停止します。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113313-83bb83d6-af28-4ffa-87bc-26df831aef8a.png#align=left&display=inline&height=639&originHeight=639&originWidth=1083&size=0&status=done&style=none&width=1083) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/25.png)

#### 4.2 プログラムを書く
引き続き、チュートリアル1と同じ方法でBitCar拡張機能を追加します。<br />
BitCar拡張機能: [https://github.com/TinkerGen/pxt-BitCar](https://github.com/TinkerGen/pxt-BitCar)<br />
BitPlayer拡張機能: [https://github.com/TinkerGen/pxt-BitPlayer](https://github.com/TinkerGen/pxt-BitPlayer)

- BitPlayerプログラム<br />
  「on start」ブロックを追加します。「radio set group」ブロックを接続します。「Forever」ブロックをドラッグ＆ドロップします。このプログラムロジックに従ってブロックを追加します：ジョイスティックを上に引くとラジオは数字「1」を送信します。ジョイスティックを下に引くとラジオは数字「2」を送信します。ジョイスティックを左に引くとラジオは数字「3」を送信します。ジョイスティックを右に引くとラジオは数字「4」を送信します。ボタンAを押すとラジオは数字「5」を送信します。ボタンBを押すとラジオは数字「6」を送信します。

- BitCar プログラム<br />
  「on start」ブロックを追加します。「radio set group」ブロックを接続します。「receivedNumber」が1の場合、車は15%の速度で前進します。「receivedNumber」が2の場合、車は15%の速度で後退します。「receivedNumber」が3の場合、右モーターの速度が20%、左モーターの速度が0%になり、その後車は再び15%の速度で前進します。「receivedNumber」が4の場合、左モーターの速度が20%、右モーターの速度が0%になり、その後車は再び15%の速度で前進します。「receivedNumber」が5の場合、車は100%の速度でスタンドアップアクションを行います。「receivedNumber」が6の場合、車は停止します。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113324-b23e7a3c-37cf-4616-9d5a-85078a7f7617.png#align=left&display=inline&height=780&originHeight=780&originWidth=857&size=0&status=done&style=none&width=857) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/26.png)

BitPlayer プログラム
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113335-24bb344c-3f6e-4af8-abb4-b6d80fe210cb.png#align=left&display=inline&height=851&originHeight=851&originWidth=902&size=0&status=done&style=none&width=902) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/27.png)

BitCar プログラム

#### 4.3 デバイスを接続する
micro:bit を BitCar に差し込みます。このとき、逆向きに差し込まないよう注意してください。その後、USB ケーブルを使って micro:bit を PC に接続します。micro:bit の LED インジケーターが点灯しているか確認してください。点灯していない場合は、USB ケーブルを再度差し込む必要があります。
:::note
このプロジェクトには2つのプログラムがあるため、2つの micro:bit が必要です。1つは BitPlayer 用、もう1つは BitCar 用です。それぞれの micro:bit に異なるプログラムを書き込み、ダウンロードする必要があります。このチュートリアルで言及されている micro:bit はパッケージには含まれていません。
:::

#### 4.4 プログラムをアップロードする
前のチュートリアルでプログラムのダウンロード方法を紹介しました。プログラムに名前を付け、「Download」ボタンをクリックして micro:bit に送信するだけです。

#### 4.5 プログラムを実行する
BitCar と BitPlayer の電源を入れます。両者が接続された後、プログラムがどのように動作するか観察してください。


### 5. Python

上記のチュートリアルに加えて、Python を使用して BitCar を制御することもできます。以下はその例です：

#### 5.1 モーター制御
まず、必要な micro:bit モジュールをすべてインポートします。

1. Python コードをここに追加します。例：
2. from microbit import *

次に、movement(left, right) という関数を定義します。left と right の値は各モーターの速度（-255 から 255 の範囲）を表します。

```cpp
1. def movement(left, right):
2.     if left > 0:
3.         pin13.write_analog(0)
4.         pin14.write_analog(left)
5.     elif left < 0:
6.         pin13.write_analog(left)
7.         pin14.write_analog(0)
8.     if right > 0:
9.         pin15.write_analog(0)
10.         pin16.write_analog(right)
11.     elif right > 0:
12.         pin15.write_analog(right)
13.         pin16.write_analog(0)
```

stop() という別の関数を定義します。この関数を呼び出すことで BitCar を停止させます。

```cpp
1. def stop():
2.         pin13.write_analog(0)
3.         pin14.write_analog(0)
4.         pin15.write_analog(0)
5.         pin16.write_analog(0)
```

上記で定義した関数を使用して、以下のように BitCar を制御できます：

**全速力で前進する：**<br />
movement(255, 255) 

**全速力で後退する：**<br />
movement(-255, -255)

**時計回りに回転する：**<br />
movement(255, -255)

**停止する：** <br />
stop()

## コース情報とサンプルレッスンダウンロード
micro:bit と BitCar に関連するコースは、以下のアドレスから Make 2 Learn で確認できます：[https://make2learn.tinkergen.com](https://make2learn.tinkergen.com/)

## IV 添付ファイル
#### 添付ファイル 1 BitCar 組み立て説明書：[添付ファイル 1 BitCar 組み立て説明書.pdf](https://www.yuque.com/attachments/yuque/0/2021/pdf/2586586/1611139152936-2a2f2e8f-2180-4de1-906f-9c8f887ef21b.pdf?_lake_card=%7B%22uid%22%3A%221611139151730-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fpdf%2F2586586%2F1611139152936-2a2f2e8f-2180-4de1-906f-9c8f887ef21b.pdf%22%2C%22name%22%3A%22Attachment%201%20BitCar%20Assembly%20Instruction.pdf%22%2C%22size%22%3A818663%2C%22type%22%3A%22application%2Fpdf%22%2C%22ext%22%3A%22pdf%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%22UXHlE%22%2C%22card%22%3A%22file%22%7D)

#### 添付ファイル 2 BitCar マップ：[添付ファイル 2 BitCar マップ.pdf](https://www.yuque.com/attachments/yuque/0/2021/pdf/2586586/1611139164219-df9b9f60-69cf-442a-aa5e-d19375e2db42.pdf?_lake_card=%7B%22uid%22%3A%221611139162975-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fpdf%2F2586586%2F1611139164219-df9b9f60-69cf-442a-aa5e-d19375e2db42.pdf%22%2C%22name%22%3A%22Attachment%202%20BitCar%20Map.pdf%22%2C%22size%22%3A753958%2C%22type%22%3A%22application%2Fpdf%22%2C%22ext%22%3A%22pdf%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%22n0BjB%22%2C%22card%22%3A%22file%22%7D)

#### 添付ファイル 3 BitCar カバー & シャーシ：[添付ファイル 3 BitCar カバー - シャーシ.zip](https://www.yuque.com/attachments/yuque/0/2021/zip/2586586/1611139173171-cc697c4d-d078-44e3-aeff-c417794abd63.zip?_lake_card=%7B%22uid%22%3A%221611139172665-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fzip%2F2586586%2F1611139173171-cc697c4d-d078-44e3-aeff-c417794abd63.zip%22%2C%22name%22%3A%22Attachment%203%20BitCar%20Cover%20-%20Chassis.zip%22%2C%22size%22%3A367966%2C%22type%22%3A%22application%2Fzip%22%2C%22ext%22%3A%22zip%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%22T1EXv%22%2C%22card%22%3A%22file%22%7D)

#### 添付ファイル 4 ソースコード：[添付ファイル 4 ソースコード.zip](https://www.yuque.com/attachments/yuque/0/2021/zip/2586586/1611139182836-375d7ba6-c135-4684-8b89-76247c1e617f.zip?_lake_card=%7B%22uid%22%3A%221611139180453-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fzip%2F2586586%2F1611139182836-375d7ba6-c135-4684-8b89-76247c1e617f.zip%22%2C%22name%22%3A%22Attachment%204%20Source%20Code.zip%22%2C%22size%22%3A1535318%2C%22type%22%3A%22application%2Fzip%22%2C%22ext%22%3A%22zip%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%227lUfd%22%2C%22card%22%3A%22file%22%7D)

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